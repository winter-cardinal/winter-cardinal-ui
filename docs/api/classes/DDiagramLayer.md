[Winter Cardinal UI - v0.167.0](../index.md) / DDiagramLayer

# Class: DDiagramLayer

## Hierarchy

- [`EShapeContainer`](EShapeContainer.md)

  ↳ **`DDiagramLayer`**

## Table of contents

### Constructors

- [constructor](DDiagramLayer.md#constructor)

### Properties

- [\_accessibleActive](DDiagramLayer.md#_accessibleactive)
- [\_accessibleDiv](DDiagramLayer.md#_accessiblediv)
- [\_atlas](DDiagramLayer.md#_atlas)
- [\_bounds](DDiagramLayer.md#_bounds)
- [\_buffers](DDiagramLayer.md#_buffers)
- [\_childrenId](DDiagramLayer.md#_childrenid)
- [\_childrenIdRendered](DDiagramLayer.md#_childrenidrendered)
- [\_destroyed](DDiagramLayer.md#_destroyed)
- [\_fontAtlases](DDiagramLayer.md#_fontatlases)
- [\_lastSortedIndex](DDiagramLayer.md#_lastsortedindex)
- [\_mask](DDiagramLayer.md#_mask)
- [\_pixelScale](DDiagramLayer.md#_pixelscale)
- [\_pixelScaleId](DDiagramLayer.md#_pixelscaleid)
- [\_shape](DDiagramLayer.md#_shape)
- [\_shapeRenderer](DDiagramLayer.md#_shaperenderer)
- [\_shapeScale](DDiagramLayer.md#_shapescale)
- [\_shapeScaleId](DDiagramLayer.md#_shapescaleid)
- [\_tempDisplayObjectParent](DDiagramLayer.md#_tempdisplayobjectparent)
- [\_work](DDiagramLayer.md#_work)
- [\_zIndex](DDiagramLayer.md#_zindex)
- [accessible](DDiagramLayer.md#accessible)
- [accessibleChildren](DDiagramLayer.md#accessiblechildren)
- [accessibleHint](DDiagramLayer.md#accessiblehint)
- [accessiblePointerEvents](DDiagramLayer.md#accessiblepointerevents)
- [accessibleTitle](DDiagramLayer.md#accessibletitle)
- [accessibleType](DDiagramLayer.md#accessibletype)
- [alpha](DDiagramLayer.md#alpha)
- [angle](DDiagramLayer.md#angle)
- [buttonMode](DDiagramLayer.md#buttonmode)
- [cacheAsBitmap](DDiagramLayer.md#cacheasbitmap)
- [children](DDiagramLayer.md#children)
- [cursor](DDiagramLayer.md#cursor)
- [filterArea](DDiagramLayer.md#filterarea)
- [filters](DDiagramLayer.md#filters)
- [hitArea](DDiagramLayer.md#hitarea)
- [interactive](DDiagramLayer.md#interactive)
- [interactives](DDiagramLayer.md#interactives)
- [isMask](DDiagramLayer.md#ismask)
- [isSprite](DDiagramLayer.md#issprite)
- [localTransform](DDiagramLayer.md#localtransform)
- [mask](DDiagramLayer.md#mask)
- [name](DDiagramLayer.md#name)
- [parent](DDiagramLayer.md#parent)
- [pivot](DDiagramLayer.md#pivot)
- [position](DDiagramLayer.md#position)
- [reference](DDiagramLayer.md#reference)
- [renderable](DDiagramLayer.md#renderable)
- [rotation](DDiagramLayer.md#rotation)
- [scale](DDiagramLayer.md#scale)
- [skew](DDiagramLayer.md#skew)
- [transform](DDiagramLayer.md#transform)
- [visible](DDiagramLayer.md#visible)
- [worldAlpha](DDiagramLayer.md#worldalpha)
- [worldTransform](DDiagramLayer.md#worldtransform)
- [worldVisible](DDiagramLayer.md#worldvisible)
- [x](DDiagramLayer.md#x)
- [y](DDiagramLayer.md#y)
- [zIndex](DDiagramLayer.md#zindex)

### Accessors

- [background](DDiagramLayer.md#background)
- [height](DDiagramLayer.md#height)
- [state](DDiagramLayer.md#state)
- [width](DDiagramLayer.md#width)

### Methods

- [\_recursivePostUpdateTransform](DDiagramLayer.md#_recursivepostupdatetransform)
- [addListener](DDiagramLayer.md#addlistener)
- [addUuid](DDiagramLayer.md#adduuid)
- [calculateBounds](DDiagramLayer.md#calculatebounds)
- [containsPoint](DDiagramLayer.md#containspoint)
- [destroy](DDiagramLayer.md#destroy)
- [displayObjectUpdateTransform](DDiagramLayer.md#displayobjectupdatetransform)
- [doInitialize](DDiagramLayer.md#doinitialize)
- [emit](DDiagramLayer.md#emit)
- [eventNames](DDiagramLayer.md#eventnames)
- [getAntialiasWeight](DDiagramLayer.md#getantialiasweight)
- [getAtlas](DDiagramLayer.md#getatlas)
- [getBounds](DDiagramLayer.md#getbounds)
- [getBuffers](DDiagramLayer.md#getbuffers)
- [getFontAtlases](DDiagramLayer.md#getfontatlases)
- [getGlobalPosition](DDiagramLayer.md#getglobalposition)
- [getLocalBounds](DDiagramLayer.md#getlocalbounds)
- [getPixelScale](DDiagramLayer.md#getpixelscale)
- [getShapeScale](DDiagramLayer.md#getshapescale)
- [hitTest](DDiagramLayer.md#hittest)
- [hitTestBBox](DDiagramLayer.md#hittestbbox)
- [hitTestInteractives](DDiagramLayer.md#hittestinteractives)
- [initialize](DDiagramLayer.md#initialize)
- [isDirty](DDiagramLayer.md#isdirty)
- [listenerCount](DDiagramLayer.md#listenercount)
- [listeners](DDiagramLayer.md#listeners)
- [newShape](DDiagramLayer.md#newshape)
- [off](DDiagramLayer.md#off)
- [on](DDiagramLayer.md#on)
- [onChildTransformChange](DDiagramLayer.md#onchildtransformchange)
- [once](DDiagramLayer.md#once)
- [removeAllListeners](DDiagramLayer.md#removealllisteners)
- [removeListener](DDiagramLayer.md#removelistener)
- [render](DDiagramLayer.md#render)
- [serialize](DDiagramLayer.md#serialize)
- [setParent](DDiagramLayer.md#setparent)
- [setTransform](DDiagramLayer.md#settransform)
- [toDirty](DDiagramLayer.md#todirty)
- [toGlobal](DDiagramLayer.md#toglobal)
- [toLocal](DDiagramLayer.md#tolocal)
- [toPixelScale](DDiagramLayer.md#topixelscale)
- [toShapeScale](DDiagramLayer.md#toshapescale)
- [updateTransform](DDiagramLayer.md#updatetransform)
- [updateUuid](DDiagramLayer.md#updateuuid)
- [deserialize](DDiagramLayer.md#deserialize)
- [deserializeName](DDiagramLayer.md#deserializename)
- [mixin](DDiagramLayer.md#mixin)

## Constructors

### constructor

• **new DDiagramLayer**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Overrides

[EShapeContainer](EShapeContainer.md).[constructor](EShapeContainer.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L29)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L21)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L31)

___

### \_childrenId

• `Protected` **\_childrenId**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_childrenId](EShapeContainer.md#_childrenid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L18)

___

### \_childrenIdRendered

• `Protected` **\_childrenIdRendered**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_childrenIdRendered](EShapeContainer.md#_childrenidrendered)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L19)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L22)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L24)

___

### \_pixelScaleId

• `Protected` **\_pixelScaleId**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_pixelScaleId](EShapeContainer.md#_pixelscaleid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L25)

___

### \_shape

• `Protected` **\_shape**: [`EShape`](../interfaces/EShape.md)

#### Overrides

[EShapeContainer](EShapeContainer.md).[_shape](EShapeContainer.md#_shape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L27)

___

### \_shapeRenderer

• `Protected` **\_shapeRenderer**: ``null`` \| [`EShapeRenderer`](EShapeRenderer.md) = `null`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shapeRenderer](EShapeContainer.md#_shaperenderer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L14)

___

### \_shapeScale

• `Protected` **\_shapeScale**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shapeScale](EShapeContainer.md#_shapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L26)

___

### \_shapeScaleId

• `Protected` **\_shapeScaleId**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shapeScaleId](EShapeContainer.md#_shapescaleid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L27)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L29)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L16)

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

### interactives

• **interactives**: [`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L26)

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

### position

• **position**: `IPoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[position](EShapeContainer.md#position)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9219

___

### reference

• **reference**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L25)

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

### scale

• **scale**: `IPoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[EShapeContainer](EShapeContainer.md).[scale](EShapeContainer.md#scale)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9226

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

### background

• `get` **background**(): [`DDiagramLayerBackground`](../interfaces/DDiagramLayerBackground.md)

#### Returns

[`DDiagramLayerBackground`](../interfaces/DDiagramLayerBackground.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L56)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L48)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L52)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L60)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L40)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L44)

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

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[addListener](EShapeContainer.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[addListener](EShapeContainer.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### addUuid

▸ **addUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L187)

___

### calculateBounds

▸ **calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[calculateBounds](EShapeContainer.md#calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L54)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L98)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[EShapeContainer](EShapeContainer.md).[destroy](EShapeContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L201)

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

### doInitialize

▸ `Protected` **doInitialize**(`shapes`, `data`, `interactives`, `actionables`, `ids`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `data` | [`DDiagramCanvasDataMap`](../index.md#ddiagramcanvasdatamap) |
| `interactives` | [`EShape`](../interfaces/EShape.md)[] |
| `actionables` | [`EShape`](../interfaces/EShape.md)[] |
| `ids` | [`DDiagramCanvasIdMap`](../index.md#ddiagramcanvasidmap) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L101)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L151)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L106)

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

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getBounds](EShapeContainer.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9120

___

### getBuffers

▸ **getBuffers**(): [`EShapeBuffer`](EShapeBuffer.md)[]

#### Returns

[`EShapeBuffer`](EShapeBuffer.md)[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getBuffers](EShapeContainer.md#getbuffers)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L115)

___

### getFontAtlases

▸ **getFontAtlases**(): [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Returns

[`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getFontAtlases](EShapeContainer.md#getfontatlases)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L102)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L147)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getShapeScale](EShapeContainer.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L133)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L155)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L174)

___

### hitTestInteractives

▸ **hitTestInteractives**(`global`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `IPoint` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L171)

___

### initialize

▸ **initialize**(`data`, `ids`, `actionables`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DDiagramCanvasDataMap`](../index.md#ddiagramcanvasdatamap) |
| `ids` | [`DDiagramCanvasIdMap`](../index.md#ddiagramcanvasidmap) |
| `actionables` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L72)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[isDirty](EShapeContainer.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L66)

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

### newShape

▸ `Protected` **newShape**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L64)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[off](EShapeContainer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24100

▸ **off**(`event`, `fn?`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[off](EShapeContainer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24102

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[on](EShapeContainer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24089

▸ **on**(`event`, `fn`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L58)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[once](EShapeContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24092

▸ **once**(`event`, `fn`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[once](EShapeContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24094

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[removeAllListeners](EShapeContainer.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[removeAllListeners](EShapeContainer.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[removeListener](EShapeContainer.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L70)

___

### serialize

▸ **serialize**(`layer`, `manager`, `items`): [`DDiagramSerializedLayer`](../interfaces/DDiagramSerializedLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `number` |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |
| `items` | [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[] |

#### Returns

[`DDiagramSerializedLayer`](../interfaces/DDiagramSerializedLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L212)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L62)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L137)

___

### toShapeScale

▸ **toShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[toShapeScale](EShapeContainer.md#toshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L119)

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

### updateUuid

▸ **updateUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L194)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`, `width`, `height`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerializedLayer`](../interfaces/DDiagramSerializedLayer.md) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L247)

___

### deserializeName

▸ `Static` **deserializeName**(`target`, `manager`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` \| `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:289](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L289)

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
