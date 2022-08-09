[Winter Cardinal UI - v0.205.1](../index.md) / DChartPlotAreaContainer

# Class: DChartPlotAreaContainer

## Hierarchy

- [`EShapeContainer`](EShapeContainer.md)

  ↳ **`DChartPlotAreaContainer`**

## Implements

- [`DViewTarget`](../interfaces/DViewTarget.md)

## Table of contents

### Constructors

- [constructor](DChartPlotAreaContainer.md#constructor)

### Properties

- [\_accessibleActive](DChartPlotAreaContainer.md#_accessibleactive)
- [\_accessibleDiv](DChartPlotAreaContainer.md#_accessiblediv)
- [\_atlas](DChartPlotAreaContainer.md#_atlas)
- [\_bounds](DChartPlotAreaContainer.md#_bounds)
- [\_buffers](DChartPlotAreaContainer.md#_buffers)
- [\_childrenId](DChartPlotAreaContainer.md#_childrenid)
- [\_childrenIdRendered](DChartPlotAreaContainer.md#_childrenidrendered)
- [\_destroyed](DChartPlotAreaContainer.md#_destroyed)
- [\_fontAtlases](DChartPlotAreaContainer.md#_fontatlases)
- [\_lastSortedIndex](DChartPlotAreaContainer.md#_lastsortedindex)
- [\_mask](DChartPlotAreaContainer.md#_mask)
- [\_pixelScale](DChartPlotAreaContainer.md#_pixelscale)
- [\_pixelScaleId](DChartPlotAreaContainer.md#_pixelscaleid)
- [\_position](DChartPlotAreaContainer.md#_position)
- [\_scale](DChartPlotAreaContainer.md#_scale)
- [\_shape](DChartPlotAreaContainer.md#_shape)
- [\_shapeRenderer](DChartPlotAreaContainer.md#_shaperenderer)
- [\_shapeScale](DChartPlotAreaContainer.md#_shapescale)
- [\_shapeScaleId](DChartPlotAreaContainer.md#_shapescaleid)
- [\_tempDisplayObjectParent](DChartPlotAreaContainer.md#_tempdisplayobjectparent)
- [\_work](DChartPlotAreaContainer.md#_work)
- [\_workRect](DChartPlotAreaContainer.md#_workrect)
- [\_zIndex](DChartPlotAreaContainer.md#_zindex)
- [accessible](DChartPlotAreaContainer.md#accessible)
- [accessibleChildren](DChartPlotAreaContainer.md#accessiblechildren)
- [accessibleHint](DChartPlotAreaContainer.md#accessiblehint)
- [accessiblePointerEvents](DChartPlotAreaContainer.md#accessiblepointerevents)
- [accessibleTitle](DChartPlotAreaContainer.md#accessibletitle)
- [accessibleType](DChartPlotAreaContainer.md#accessibletype)
- [alpha](DChartPlotAreaContainer.md#alpha)
- [angle](DChartPlotAreaContainer.md#angle)
- [buttonMode](DChartPlotAreaContainer.md#buttonmode)
- [cacheAsBitmap](DChartPlotAreaContainer.md#cacheasbitmap)
- [children](DChartPlotAreaContainer.md#children)
- [cursor](DChartPlotAreaContainer.md#cursor)
- [filterArea](DChartPlotAreaContainer.md#filterarea)
- [filters](DChartPlotAreaContainer.md#filters)
- [hitArea](DChartPlotAreaContainer.md#hitarea)
- [interactive](DChartPlotAreaContainer.md#interactive)
- [isMask](DChartPlotAreaContainer.md#ismask)
- [isSprite](DChartPlotAreaContainer.md#issprite)
- [localTransform](DChartPlotAreaContainer.md#localtransform)
- [mask](DChartPlotAreaContainer.md#mask)
- [name](DChartPlotAreaContainer.md#name)
- [parent](DChartPlotAreaContainer.md#parent)
- [pivot](DChartPlotAreaContainer.md#pivot)
- [renderable](DChartPlotAreaContainer.md#renderable)
- [rotation](DChartPlotAreaContainer.md#rotation)
- [skew](DChartPlotAreaContainer.md#skew)
- [transform](DChartPlotAreaContainer.md#transform)
- [visible](DChartPlotAreaContainer.md#visible)
- [worldAlpha](DChartPlotAreaContainer.md#worldalpha)
- [worldTransform](DChartPlotAreaContainer.md#worldtransform)
- [worldVisible](DChartPlotAreaContainer.md#worldvisible)
- [x](DChartPlotAreaContainer.md#x)
- [y](DChartPlotAreaContainer.md#y)
- [zIndex](DChartPlotAreaContainer.md#zindex)

### Accessors

- [position](DChartPlotAreaContainer.md#position)
- [scale](DChartPlotAreaContainer.md#scale)

### Methods

- [\_recursivePostUpdateTransform](DChartPlotAreaContainer.md#_recursivepostupdatetransform)
- [addListener](DChartPlotAreaContainer.md#addlistener)
- [calculateBounds](DChartPlotAreaContainer.md#calculatebounds)
- [containsPoint](DChartPlotAreaContainer.md#containspoint)
- [destroy](DChartPlotAreaContainer.md#destroy)
- [displayObjectUpdateTransform](DChartPlotAreaContainer.md#displayobjectupdatetransform)
- [emit](DChartPlotAreaContainer.md#emit)
- [eventNames](DChartPlotAreaContainer.md#eventnames)
- [getAntialiasWeight](DChartPlotAreaContainer.md#getantialiasweight)
- [getAtlas](DChartPlotAreaContainer.md#getatlas)
- [getBounds](DChartPlotAreaContainer.md#getbounds)
- [getBuffers](DChartPlotAreaContainer.md#getbuffers)
- [getFontAtlases](DChartPlotAreaContainer.md#getfontatlases)
- [getGlobalPosition](DChartPlotAreaContainer.md#getglobalposition)
- [getLocalBounds](DChartPlotAreaContainer.md#getlocalbounds)
- [getPixelScale](DChartPlotAreaContainer.md#getpixelscale)
- [getShapeScale](DChartPlotAreaContainer.md#getshapescale)
- [hitTest](DChartPlotAreaContainer.md#hittest)
- [hitTestBBox](DChartPlotAreaContainer.md#hittestbbox)
- [isDirty](DChartPlotAreaContainer.md#isdirty)
- [listenerCount](DChartPlotAreaContainer.md#listenercount)
- [listeners](DChartPlotAreaContainer.md#listeners)
- [off](DChartPlotAreaContainer.md#off)
- [on](DChartPlotAreaContainer.md#on)
- [onChildTransformChange](DChartPlotAreaContainer.md#onchildtransformchange)
- [once](DChartPlotAreaContainer.md#once)
- [removeAllListeners](DChartPlotAreaContainer.md#removealllisteners)
- [removeListener](DChartPlotAreaContainer.md#removelistener)
- [render](DChartPlotAreaContainer.md#render)
- [setParent](DChartPlotAreaContainer.md#setparent)
- [setTransform](DChartPlotAreaContainer.md#settransform)
- [toDirty](DChartPlotAreaContainer.md#todirty)
- [toGlobal](DChartPlotAreaContainer.md#toglobal)
- [toLocal](DChartPlotAreaContainer.md#tolocal)
- [toPixelScale](DChartPlotAreaContainer.md#topixelscale)
- [toShapeScale](DChartPlotAreaContainer.md#toshapescale)
- [updateTransform](DChartPlotAreaContainer.md#updatetransform)
- [mixin](DChartPlotAreaContainer.md#mixin)

## Constructors

### constructor

• **new DChartPlotAreaContainer**(`onChange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChange` | () => `void` |

#### Overrides

[EShapeContainer](EShapeContainer.md).[constructor](EShapeContainer.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts#L16)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_accessibleActive](EShapeContainer.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8940

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_accessibleDiv](EShapeContainer.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8946

___

### \_atlas

• `Protected` **\_atlas**: ``null`` \| [`DynamicAtlas`](DynamicAtlas.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_atlas](EShapeContainer.md#_atlas)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L21)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_bounds](EShapeContainer.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9064

___

### \_buffers

• `Protected` **\_buffers**: [`EShapeBuffer`](EShapeBuffer.md)[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_buffers](EShapeContainer.md#_buffers)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L31)

___

### \_childrenId

• `Protected` **\_childrenId**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_childrenId](EShapeContainer.md#_childrenid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L18)

___

### \_childrenIdRendered

• `Protected` **\_childrenIdRendered**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_childrenIdRendered](EShapeContainer.md#_childrenidrendered)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L19)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_destroyed](EShapeContainer.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9078

___

### \_fontAtlases

• `Protected` **\_fontAtlases**: [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_fontAtlases](EShapeContainer.md#_fontatlases)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L22)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_lastSortedIndex](EShapeContainer.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9032

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_mask](EShapeContainer.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9071

___

### \_pixelScale

• `Protected` **\_pixelScale**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_pixelScale](EShapeContainer.md#_pixelscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L24)

___

### \_pixelScaleId

• `Protected` **\_pixelScaleId**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_pixelScaleId](EShapeContainer.md#_pixelscaleid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L25)

___

### \_position

• `Protected` **\_position**: [`DBasePoint`](DBasePoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts#L12)

___

### \_scale

• `Protected` **\_scale**: [`DBasePoint`](DBasePoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts#L13)

___

### \_shape

• `Protected` **\_shape**: ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shape](EShapeContainer.md#_shape)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L17)

___

### \_shapeRenderer

• `Protected` **\_shapeRenderer**: ``null`` \| [`EShapeRenderer`](EShapeRenderer.md) = `null`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shapeRenderer](EShapeContainer.md#_shaperenderer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L14)

___

### \_shapeScale

• `Protected` **\_shapeScale**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shapeScale](EShapeContainer.md#_shapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L26)

___

### \_shapeScaleId

• `Protected` **\_shapeScaleId**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shapeScaleId](EShapeContainer.md#_shapescaleid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L27)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_tempDisplayObjectParent](EShapeContainer.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9093

___

### \_work

• `Protected` **\_work**: `Point`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_work](EShapeContainer.md#_work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L29)

___

### \_workRect

• `Protected` **\_workRect**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts#L14)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_zIndex](EShapeContainer.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9040

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[accessible](EShapeContainer.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8919

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`default`** true

#### Inherited from

[EShapeContainer](EShapeContainer.md).[accessibleChildren](EShapeContainer.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8973

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[accessibleHint](EShapeContainer.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8934

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'auto'

#### Inherited from

[EShapeContainer](EShapeContainer.md).[accessiblePointerEvents](EShapeContainer.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8964

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[accessibleTitle](EShapeContainer.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8927

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'button'

#### Inherited from

[EShapeContainer](EShapeContainer.md).[accessibleType](EShapeContainer.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8955

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[EShapeContainer](EShapeContainer.md).[alpha](EShapeContainer.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8992

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[angle](EShapeContainer.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9254

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[buttonMode](EShapeContainer.md#buttonmode)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9336

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

Set this to true if you want this display object to be cached as a bitmap.
This basically takes a snap shot of the display object as it is at that moment. It can
provide a performance benefit for complex static displayObjects.
To remove simply set this property to `false`

IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[cacheAsBitmap](EShapeContainer.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9363

___

### children

• `Readonly` **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[children](EShapeContainer.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L16)

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';

**`see`** https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[cursor](EShapeContainer.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9350

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Inherited from

[EShapeContainer](EShapeContainer.md).[filterArea](EShapeContainer.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9049

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Inherited from

[EShapeContainer](EShapeContainer.md).[filters](EShapeContainer.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9057

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);

**`member`** {PIXI.IHitArea}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[hitArea](EShapeContainer.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9324

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[interactive](EShapeContainer.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9312

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[EShapeContainer](EShapeContainer.md).[isMask](EShapeContainer.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9088

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[EShapeContainer](EShapeContainer.md).[isSprite](EShapeContainer.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9083

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[localTransform](EShapeContainer.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9212

___

### mask

• **mask**: `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
{@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`example`**
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;

**`todo`** At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`member`** {PIXI.Container|PIXI.MaskData}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[mask](EShapeContainer.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9290

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[EShapeContainer](EShapeContainer.md).[name](EShapeContainer.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9370

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[parent](EShapeContainer.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9017

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[pivot](EShapeContainer.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9233

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

[EShapeContainer](EShapeContainer.md).[renderable](EShapeContainer.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[rotation](EShapeContainer.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9247

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`member`** {PIXI.ObservablePoint}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[skew](EShapeContainer.md#skew)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9240

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[EShapeContainer](EShapeContainer.md).[transform](EShapeContainer.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8986

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

[EShapeContainer](EShapeContainer.md).[visible](EShapeContainer.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9001

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[worldAlpha](EShapeContainer.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9024

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[worldTransform](EShapeContainer.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9205

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[worldVisible](EShapeContainer.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9270

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`member`** {number}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[x](EShapeContainer.md#x)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9191

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`member`** {number}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[y](EShapeContainer.md#y)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9198

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`member`** {number}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[zIndex](EShapeContainer.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9263

## Accessors

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

[DViewTarget](../interfaces/DViewTarget.md).[position](../interfaces/DViewTarget.md#position)

#### Overrides

EShapeContainer.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts#L25)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

[DViewTarget](../interfaces/DViewTarget.md).[scale](../interfaces/DViewTarget.md#scale)

#### Overrides

EShapeContainer.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts#L30)

## Methods

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_recursivePostUpdateTransform](EShapeContainer.md#_recursivepostupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9110

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[addListener](EShapeContainer.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[addListener](EShapeContainer.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### calculateBounds

▸ **calculateBounds**(): `void`

#### Returns

`void`

#### Overrides

[EShapeContainer](EShapeContainer.md).[calculateBounds](EShapeContainer.md#calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts#L39)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[containsPoint](EShapeContainer.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L98)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[destroy](EShapeContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L192)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`memberof`** PIXI.DisplayObject#

**`function`** displayObjectUpdateTransform

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[displayObjectUpdateTransform](EShapeContainer.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9298

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Inherited from

[EShapeContainer](EShapeContainer.md).[emit](EShapeContainer.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[eventNames](EShapeContainer.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### getAntialiasWeight

▸ **getAntialiasWeight**(`resolution`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getAntialiasWeight](EShapeContainer.md#getantialiasweight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L151)

___

### getAtlas

▸ **getAtlas**(`resolution`): [`DynamicAtlas`](DynamicAtlas.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |

#### Returns

[`DynamicAtlas`](DynamicAtlas.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getAtlas](EShapeContainer.md#getatlas)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L106)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Overrides

[EShapeContainer](EShapeContainer.md).[getBounds](EShapeContainer.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-container.ts#L34)

___

### getBuffers

▸ **getBuffers**(): [`EShapeBuffer`](EShapeBuffer.md)[]

#### Returns

[`EShapeBuffer`](EShapeBuffer.md)[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getBuffers](EShapeContainer.md#getbuffers)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L115)

___

### getFontAtlases

▸ **getFontAtlases**(): [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Returns

[`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getFontAtlases](EShapeContainer.md#getfontatlases)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L102)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

**`method`** getGlobalPosition

**`memberof`** PIXI.DisplayObject#

#### Parameters

| Name | Type |
| :------ | :------ |
| `point?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

The updated point.

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getGlobalPosition](EShapeContainer.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9382

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Implementation of

[DViewTarget](../interfaces/DViewTarget.md).[getLocalBounds](../interfaces/DViewTarget.md#getlocalbounds)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getLocalBounds](EShapeContainer.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9127

___

### getPixelScale

▸ **getPixelScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getPixelScale](EShapeContainer.md#getpixelscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L147)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getShapeScale](EShapeContainer.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L133)

___

### hitTest

▸ **hitTest**(`global`, `onHit?`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `IPoint` |
| `onHit?` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[hitTest](EShapeContainer.md#hittest)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L155)

___

### hitTestBBox

▸ **hitTestBBox**(`global`, `onHit?`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `IPoint` |
| `onHit?` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[hitTestBBox](EShapeContainer.md#hittestbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L174)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[isDirty](EShapeContainer.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L66)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[listenerCount](EShapeContainer.md#listenercount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[listeners](EShapeContainer.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[off](EShapeContainer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24100

▸ **off**(`event`, `fn?`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[off](EShapeContainer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24102

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[on](EShapeContainer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24089

▸ **on**(`event`, `fn`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[on](EShapeContainer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24091

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[onChildTransformChange](EShapeContainer.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L58)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[once](EShapeContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24092

▸ **once**(`event`, `fn`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[once](EShapeContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24094

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[removeAllListeners](EShapeContainer.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[removeAllListeners](EShapeContainer.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[removeListener](EShapeContainer.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[removeListener](EShapeContainer.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24097

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[render](EShapeContainer.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L70)

___

### setParent

▸ **setParent**(`container`): `Container`

Set the parent Container of this DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | The Container to add this DisplayObject to. |

#### Returns

`Container`

The Container that this DisplayObject was added to.

#### Inherited from

[EShapeContainer](EShapeContainer.md).[setParent](EShapeContainer.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9161

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `scaleX?` | `number` |
| `scaleY?` | `number` |
| `rotation?` | `number` |
| `skewX?` | `number` |
| `skewY?` | `number` |
| `pivotX?` | `number` |
| `pivotY?` | `number` |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

[EShapeContainer](EShapeContainer.md).[setTransform](EShapeContainer.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9176

___

### toDirty

▸ **toDirty**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[toDirty](EShapeContainer.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L62)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Inherited from

[EShapeContainer](EShapeContainer.md).[toGlobal](EShapeContainer.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9137

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | - |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object

#### Inherited from

[EShapeContainer](EShapeContainer.md).[toLocal](EShapeContainer.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9148

___

### toPixelScale

▸ **toPixelScale**(`resolution`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[toPixelScale](EShapeContainer.md#topixelscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L137)

___

### toShapeScale

▸ **toShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[toShapeScale](EShapeContainer.md#toshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L119)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the object transform for rendering.

TODO - Optimization pass!

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[updateTransform](EShapeContainer.md#updatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9099

___

### mixin

▸ `Static` **mixin**(`source`): `void`

Mixes all enumerable properties and methods from a source object to DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `any` | The source of properties and methods to mix in. |

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[mixin](EShapeContainer.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
