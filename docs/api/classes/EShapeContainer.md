[Winter Cardinal UI - v0.205.1](../index.md) / EShapeContainer

# Class: EShapeContainer

## Hierarchy

- `DisplayObject`

  ↳ **`EShapeContainer`**

  ↳↳ [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

  ↳↳ [`DDiagramLayer`](DDiagramLayer.md)

  ↳↳ [`DDiagramLayersShapeContainer`](../interfaces/DDiagramLayersShapeContainer.md)

## Table of contents

### Constructors

- [constructor](EShapeContainer.md#constructor)

### Properties

- [\_accessibleActive](EShapeContainer.md#_accessibleactive)
- [\_accessibleDiv](EShapeContainer.md#_accessiblediv)
- [\_atlas](EShapeContainer.md#_atlas)
- [\_bounds](EShapeContainer.md#_bounds)
- [\_buffers](EShapeContainer.md#_buffers)
- [\_childrenId](EShapeContainer.md#_childrenid)
- [\_childrenIdRendered](EShapeContainer.md#_childrenidrendered)
- [\_destroyed](EShapeContainer.md#_destroyed)
- [\_fontAtlases](EShapeContainer.md#_fontatlases)
- [\_lastSortedIndex](EShapeContainer.md#_lastsortedindex)
- [\_mask](EShapeContainer.md#_mask)
- [\_pixelScale](EShapeContainer.md#_pixelscale)
- [\_pixelScaleId](EShapeContainer.md#_pixelscaleid)
- [\_shape](EShapeContainer.md#_shape)
- [\_shapeRenderer](EShapeContainer.md#_shaperenderer)
- [\_shapeScale](EShapeContainer.md#_shapescale)
- [\_shapeScaleId](EShapeContainer.md#_shapescaleid)
- [\_tempDisplayObjectParent](EShapeContainer.md#_tempdisplayobjectparent)
- [\_work](EShapeContainer.md#_work)
- [\_zIndex](EShapeContainer.md#_zindex)
- [accessible](EShapeContainer.md#accessible)
- [accessibleChildren](EShapeContainer.md#accessiblechildren)
- [accessibleHint](EShapeContainer.md#accessiblehint)
- [accessiblePointerEvents](EShapeContainer.md#accessiblepointerevents)
- [accessibleTitle](EShapeContainer.md#accessibletitle)
- [accessibleType](EShapeContainer.md#accessibletype)
- [alpha](EShapeContainer.md#alpha)
- [angle](EShapeContainer.md#angle)
- [buttonMode](EShapeContainer.md#buttonmode)
- [cacheAsBitmap](EShapeContainer.md#cacheasbitmap)
- [children](EShapeContainer.md#children)
- [cursor](EShapeContainer.md#cursor)
- [filterArea](EShapeContainer.md#filterarea)
- [filters](EShapeContainer.md#filters)
- [hitArea](EShapeContainer.md#hitarea)
- [interactive](EShapeContainer.md#interactive)
- [isMask](EShapeContainer.md#ismask)
- [isSprite](EShapeContainer.md#issprite)
- [localTransform](EShapeContainer.md#localtransform)
- [mask](EShapeContainer.md#mask)
- [name](EShapeContainer.md#name)
- [parent](EShapeContainer.md#parent)
- [pivot](EShapeContainer.md#pivot)
- [position](EShapeContainer.md#position)
- [renderable](EShapeContainer.md#renderable)
- [rotation](EShapeContainer.md#rotation)
- [scale](EShapeContainer.md#scale)
- [skew](EShapeContainer.md#skew)
- [transform](EShapeContainer.md#transform)
- [visible](EShapeContainer.md#visible)
- [worldAlpha](EShapeContainer.md#worldalpha)
- [worldTransform](EShapeContainer.md#worldtransform)
- [worldVisible](EShapeContainer.md#worldvisible)
- [x](EShapeContainer.md#x)
- [y](EShapeContainer.md#y)
- [zIndex](EShapeContainer.md#zindex)

### Methods

- [\_recursivePostUpdateTransform](EShapeContainer.md#_recursivepostupdatetransform)
- [addListener](EShapeContainer.md#addlistener)
- [calculateBounds](EShapeContainer.md#calculatebounds)
- [containsPoint](EShapeContainer.md#containspoint)
- [destroy](EShapeContainer.md#destroy)
- [displayObjectUpdateTransform](EShapeContainer.md#displayobjectupdatetransform)
- [emit](EShapeContainer.md#emit)
- [eventNames](EShapeContainer.md#eventnames)
- [getAntialiasWeight](EShapeContainer.md#getantialiasweight)
- [getAtlas](EShapeContainer.md#getatlas)
- [getBounds](EShapeContainer.md#getbounds)
- [getBuffers](EShapeContainer.md#getbuffers)
- [getFontAtlases](EShapeContainer.md#getfontatlases)
- [getGlobalPosition](EShapeContainer.md#getglobalposition)
- [getLocalBounds](EShapeContainer.md#getlocalbounds)
- [getPixelScale](EShapeContainer.md#getpixelscale)
- [getShapeScale](EShapeContainer.md#getshapescale)
- [hitTest](EShapeContainer.md#hittest)
- [hitTestBBox](EShapeContainer.md#hittestbbox)
- [isDirty](EShapeContainer.md#isdirty)
- [listenerCount](EShapeContainer.md#listenercount)
- [listeners](EShapeContainer.md#listeners)
- [off](EShapeContainer.md#off)
- [on](EShapeContainer.md#on)
- [onChildTransformChange](EShapeContainer.md#onchildtransformchange)
- [once](EShapeContainer.md#once)
- [removeAllListeners](EShapeContainer.md#removealllisteners)
- [removeListener](EShapeContainer.md#removelistener)
- [render](EShapeContainer.md#render)
- [setParent](EShapeContainer.md#setparent)
- [setTransform](EShapeContainer.md#settransform)
- [toDirty](EShapeContainer.md#todirty)
- [toGlobal](EShapeContainer.md#toglobal)
- [toLocal](EShapeContainer.md#tolocal)
- [toPixelScale](EShapeContainer.md#topixelscale)
- [toShapeScale](EShapeContainer.md#toshapescale)
- [updateTransform](EShapeContainer.md#updatetransform)
- [mixin](EShapeContainer.md#mixin)

## Constructors

### constructor

• **new EShapeContainer**()

#### Overrides

DisplayObject.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L33)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

DisplayObject.\_accessibleActive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8940

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

DisplayObject.\_accessibleDiv

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8946

___

### \_atlas

• `Protected` **\_atlas**: ``null`` \| [`DynamicAtlas`](DynamicAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L21)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

DisplayObject.\_bounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9064

___

### \_buffers

• `Protected` **\_buffers**: [`EShapeBuffer`](EShapeBuffer.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L31)

___

### \_childrenId

• `Protected` **\_childrenId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L18)

___

### \_childrenIdRendered

• `Protected` **\_childrenIdRendered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L19)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

DisplayObject.\_destroyed

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9078

___

### \_fontAtlases

• `Protected` **\_fontAtlases**: [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L22)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

DisplayObject.\_lastSortedIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9032

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

DisplayObject.\_mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9071

___

### \_pixelScale

• `Protected` **\_pixelScale**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L24)

___

### \_pixelScaleId

• `Protected` **\_pixelScaleId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L25)

___

### \_shape

• `Protected` **\_shape**: ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L17)

___

### \_shapeRenderer

• `Protected` **\_shapeRenderer**: ``null`` \| [`EShapeRenderer`](EShapeRenderer.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L14)

___

### \_shapeScale

• `Protected` **\_shapeScale**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L26)

___

### \_shapeScaleId

• `Protected` **\_shapeScaleId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L27)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

DisplayObject.\_tempDisplayObjectParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9093

___

### \_work

• `Protected` **\_work**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L29)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

DisplayObject.\_zIndex

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

DisplayObject.accessible

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

DisplayObject.accessibleChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8973

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

DisplayObject.accessibleHint

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

DisplayObject.accessiblePointerEvents

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

DisplayObject.accessibleTitle

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

DisplayObject.accessibleType

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8955

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

DisplayObject.alpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8992

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

DisplayObject.angle

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

DisplayObject.buttonMode

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

DisplayObject.cacheAsBitmap

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9363

___

### children

• `Readonly` **children**: [`EShape`](../interfaces/EShape.md)[]

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

DisplayObject.cursor

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

DisplayObject.filterArea

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

DisplayObject.filters

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

DisplayObject.hitArea

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

DisplayObject.interactive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9312

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

DisplayObject.isMask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9088

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

DisplayObject.isSprite

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9083

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

DisplayObject.localTransform

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

DisplayObject.mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9290

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

DisplayObject.name

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9370

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

DisplayObject.parent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9017

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

DisplayObject.pivot

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9233

___

### position

• **position**: `IPoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

DisplayObject.position

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9219

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

DisplayObject.renderable

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

DisplayObject.rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9247

___

### scale

• **scale**: `IPoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

DisplayObject.scale

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9226

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`member`** {PIXI.ObservablePoint}

#### Inherited from

DisplayObject.skew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9240

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

DisplayObject.transform

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

DisplayObject.visible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9001

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

DisplayObject.worldAlpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9024

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

DisplayObject.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9205

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

DisplayObject.worldVisible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9270

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`member`** {number}

#### Inherited from

DisplayObject.x

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9191

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`member`** {number}

#### Inherited from

DisplayObject.y

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

DisplayObject.zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9263

## Methods

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

DisplayObject.\_recursivePostUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9110

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### calculateBounds

▸ **calculateBounds**(): `void`

#### Returns

`void`

#### Overrides

DisplayObject.calculateBounds

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L54)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L98)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

DisplayObject.destroy

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

DisplayObject.displayObjectUpdateTransform

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

DisplayObject.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

DisplayObject.eventNames

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

#### Inherited from

DisplayObject.getBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9120

___

### getBuffers

▸ **getBuffers**(): [`EShapeBuffer`](EShapeBuffer.md)[]

#### Returns

[`EShapeBuffer`](EShapeBuffer.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L115)

___

### getFontAtlases

▸ **getFontAtlases**(): [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Returns

[`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

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

DisplayObject.getGlobalPosition

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

DisplayObject.getLocalBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9127

___

### getPixelScale

▸ **getPixelScale**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L147)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L174)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

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

DisplayObject.listenerCount

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

DisplayObject.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24100

▸ **off**(`event`, `fn?`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24102

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24089

▸ **on**(`event`, `fn`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24091

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L58)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24092

▸ **once**(`event`, `fn`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24094

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`EShapeContainer`](EShapeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Inherited from

DisplayObject.removeListener

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

#### Overrides

DisplayObject.render

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

DisplayObject.setParent

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

DisplayObject.setTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9176

___

### toDirty

▸ **toDirty**(): `number`

#### Returns

`number`

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

DisplayObject.toGlobal

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

DisplayObject.toLocal

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L137)

___

### toShapeScale

▸ **toShapeScale**(): `number`

#### Returns

`number`

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

DisplayObject.updateTransform

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

DisplayObject.mixin

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
