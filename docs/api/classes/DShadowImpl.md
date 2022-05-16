[Winter Cardinal UI - v0.165.0](../index.md) / DShadowImpl

# Class: DShadowImpl

## Hierarchy

- `NineSlicePlane`

  ↳ **`DShadowImpl`**

## Implements

- [`DShadow`](../interfaces/DShadow.md)

## Table of contents

### Constructors

- [constructor](DShadowImpl.md#constructor)

### Properties

- [\_accessibleActive](DShadowImpl.md#_accessibleactive)
- [\_accessibleDiv](DShadowImpl.md#_accessiblediv)
- [\_bounds](DShadowImpl.md#_bounds)
- [\_destroyed](DShadowImpl.md#_destroyed)
- [\_height](DShadowImpl.md#_height)
- [\_lastSortedIndex](DShadowImpl.md#_lastsortedindex)
- [\_mask](DShadowImpl.md#_mask)
- [\_offsetX](DShadowImpl.md#_offsetx)
- [\_offsetY](DShadowImpl.md#_offsety)
- [\_shiftX](DShadowImpl.md#_shiftx)
- [\_shiftY](DShadowImpl.md#_shifty)
- [\_tempDisplayObjectParent](DShadowImpl.md#_tempdisplayobjectparent)
- [\_width](DShadowImpl.md#_width)
- [\_zIndex](DShadowImpl.md#_zindex)
- [accessible](DShadowImpl.md#accessible)
- [accessibleChildren](DShadowImpl.md#accessiblechildren)
- [accessibleHint](DShadowImpl.md#accessiblehint)
- [accessiblePointerEvents](DShadowImpl.md#accessiblepointerevents)
- [accessibleTitle](DShadowImpl.md#accessibletitle)
- [accessibleType](DShadowImpl.md#accessibletype)
- [alpha](DShadowImpl.md#alpha)
- [angle](DShadowImpl.md#angle)
- [blendMode](DShadowImpl.md#blendmode)
- [bottomHeight](DShadowImpl.md#bottomheight)
- [buttonMode](DShadowImpl.md#buttonmode)
- [cacheAsBitmap](DShadowImpl.md#cacheasbitmap)
- [children](DShadowImpl.md#children)
- [cursor](DShadowImpl.md#cursor)
- [drawMode](DShadowImpl.md#drawmode)
- [filterArea](DShadowImpl.md#filterarea)
- [filters](DShadowImpl.md#filters)
- [geometry](DShadowImpl.md#geometry)
- [height](DShadowImpl.md#height)
- [hitArea](DShadowImpl.md#hitarea)
- [interactive](DShadowImpl.md#interactive)
- [interactiveChildren](DShadowImpl.md#interactivechildren)
- [isMask](DShadowImpl.md#ismask)
- [isSprite](DShadowImpl.md#issprite)
- [leftWidth](DShadowImpl.md#leftwidth)
- [localTransform](DShadowImpl.md#localtransform)
- [mask](DShadowImpl.md#mask)
- [material](DShadowImpl.md#material)
- [name](DShadowImpl.md#name)
- [parent](DShadowImpl.md#parent)
- [pivot](DShadowImpl.md#pivot)
- [position](DShadowImpl.md#position)
- [renderable](DShadowImpl.md#renderable)
- [rightWidth](DShadowImpl.md#rightwidth)
- [rotation](DShadowImpl.md#rotation)
- [roundPixels](DShadowImpl.md#roundpixels)
- [scale](DShadowImpl.md#scale)
- [shader](DShadowImpl.md#shader)
- [size](DShadowImpl.md#size)
- [skew](DShadowImpl.md#skew)
- [sortDirty](DShadowImpl.md#sortdirty)
- [sortableChildren](DShadowImpl.md#sortablechildren)
- [start](DShadowImpl.md#start)
- [state](DShadowImpl.md#state)
- [texture](DShadowImpl.md#texture)
- [tint](DShadowImpl.md#tint)
- [topHeight](DShadowImpl.md#topheight)
- [transform](DShadowImpl.md#transform)
- [uvBuffer](DShadowImpl.md#uvbuffer)
- [verticesBuffer](DShadowImpl.md#verticesbuffer)
- [visible](DShadowImpl.md#visible)
- [width](DShadowImpl.md#width)
- [worldAlpha](DShadowImpl.md#worldalpha)
- [worldTransform](DShadowImpl.md#worldtransform)
- [worldVisible](DShadowImpl.md#worldvisible)
- [x](DShadowImpl.md#x)
- [y](DShadowImpl.md#y)
- [zIndex](DShadowImpl.md#zindex)
- [BATCHABLE\_SIZE](DShadowImpl.md#batchable_size)

### Methods

- [\_calculateBounds](DShadowImpl.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DShadowImpl.md#_recursivepostupdatetransform)
- [\_refresh](DShadowImpl.md#_refresh)
- [\_render](DShadowImpl.md#_render)
- [\_renderDefault](DShadowImpl.md#_renderdefault)
- [\_renderToBatch](DShadowImpl.md#_rendertobatch)
- [addChild](DShadowImpl.md#addchild)
- [addChildAt](DShadowImpl.md#addchildat)
- [addListener](DShadowImpl.md#addlistener)
- [calculateBounds](DShadowImpl.md#calculatebounds)
- [calculateUvs](DShadowImpl.md#calculateuvs)
- [calculateVertices](DShadowImpl.md#calculatevertices)
- [containsPoint](DShadowImpl.md#containspoint)
- [destroy](DShadowImpl.md#destroy)
- [displayObjectUpdateTransform](DShadowImpl.md#displayobjectupdatetransform)
- [emit](DShadowImpl.md#emit)
- [eventNames](DShadowImpl.md#eventnames)
- [getBounds](DShadowImpl.md#getbounds)
- [getChildAt](DShadowImpl.md#getchildat)
- [getChildByName](DShadowImpl.md#getchildbyname)
- [getChildIndex](DShadowImpl.md#getchildindex)
- [getGlobalPosition](DShadowImpl.md#getglobalposition)
- [getLocalBounds](DShadowImpl.md#getlocalbounds)
- [listenerCount](DShadowImpl.md#listenercount)
- [listeners](DShadowImpl.md#listeners)
- [off](DShadowImpl.md#off)
- [on](DShadowImpl.md#on)
- [onChildrenChange](DShadowImpl.md#onchildrenchange)
- [onReflow](DShadowImpl.md#onreflow)
- [onTextureUpdate](DShadowImpl.md#ontextureupdate)
- [once](DShadowImpl.md#once)
- [removeAllListeners](DShadowImpl.md#removealllisteners)
- [removeChild](DShadowImpl.md#removechild)
- [removeChildAt](DShadowImpl.md#removechildat)
- [removeChildren](DShadowImpl.md#removechildren)
- [removeListener](DShadowImpl.md#removelistener)
- [render](DShadowImpl.md#render)
- [renderAdvanced](DShadowImpl.md#renderadvanced)
- [setChildIndex](DShadowImpl.md#setchildindex)
- [setParent](DShadowImpl.md#setparent)
- [setTransform](DShadowImpl.md#settransform)
- [sortChildren](DShadowImpl.md#sortchildren)
- [swapChildren](DShadowImpl.md#swapchildren)
- [textureUpdated](DShadowImpl.md#textureupdated)
- [toGlobal](DShadowImpl.md#toglobal)
- [toLocal](DShadowImpl.md#tolocal)
- [updateHorizontalVertices](DShadowImpl.md#updatehorizontalvertices)
- [updateTransform](DShadowImpl.md#updatetransform)
- [updateVerticalVertices](DShadowImpl.md#updateverticalvertices)
- [mixin](DShadowImpl.md#mixin)

## Constructors

### constructor

• **new DShadowImpl**(`texture`, `width`, `height`, `offsetX`, `offsetY`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |
| `width` | `number` |
| `height` | `number` |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Overrides

NineSlicePlane.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-shadow-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-shadow-impl.ts#L16)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Implementation of

[DShadow](../interfaces/DShadow.md).[_accessibleActive](../interfaces/DShadow.md#_accessibleactive)

#### Inherited from

NineSlicePlane.\_accessibleActive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14364

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Implementation of

[DShadow](../interfaces/DShadow.md).[_accessibleDiv](../interfaces/DShadow.md#_accessiblediv)

#### Inherited from

NineSlicePlane.\_accessibleDiv

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14370

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Implementation of

[DShadow](../interfaces/DShadow.md).[_bounds](../interfaces/DShadow.md#_bounds)

#### Inherited from

NineSlicePlane.\_bounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14482

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Implementation of

[DShadow](../interfaces/DShadow.md).[_destroyed](../interfaces/DShadow.md#_destroyed)

#### Inherited from

NineSlicePlane.\_destroyed

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14496

___

### \_height

• **\_height**: `number`

The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane

**`member`** {number} PIXI.NineSlicePlane#_height

**`override`**

#### Inherited from

NineSlicePlane.\_height

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13993

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Implementation of

[DShadow](../interfaces/DShadow.md).[_lastSortedIndex](../interfaces/DShadow.md#_lastsortedindex)

#### Inherited from

NineSlicePlane.\_lastSortedIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14450

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Implementation of

[DShadow](../interfaces/DShadow.md).[_mask](../interfaces/DShadow.md#_mask)

#### Inherited from

NineSlicePlane.\_mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14489

___

### \_offsetX

• `Protected` **\_offsetX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-shadow-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-shadow-impl.ts#L11)

___

### \_offsetY

• `Protected` **\_offsetY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-shadow-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-shadow-impl.ts#L12)

___

### \_shiftX

• `Protected` **\_shiftX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-shadow-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-shadow-impl.ts#L13)

___

### \_shiftY

• `Protected` **\_shiftY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-shadow-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-shadow-impl.ts#L14)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[_tempDisplayObjectParent](../interfaces/DShadow.md#_tempdisplayobjectparent)

#### Inherited from

NineSlicePlane.\_tempDisplayObjectParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14511

___

### \_width

• **\_width**: `number`

The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane

**`member`** {number} PIXI.NineSlicePlane#_width

**`override`**

#### Inherited from

NineSlicePlane.\_width

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13986

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Implementation of

[DShadow](../interfaces/DShadow.md).[_zIndex](../interfaces/DShadow.md#_zindex)

#### Inherited from

NineSlicePlane.\_zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14458

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Implementation of

[DShadow](../interfaces/DShadow.md).[accessible](../interfaces/DShadow.md#accessible)

#### Inherited from

NineSlicePlane.accessible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14343

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`default`** true

#### Implementation of

[DShadow](../interfaces/DShadow.md).[accessibleChildren](../interfaces/DShadow.md#accessiblechildren)

#### Inherited from

NineSlicePlane.accessibleChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14397

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Implementation of

[DShadow](../interfaces/DShadow.md).[accessibleHint](../interfaces/DShadow.md#accessiblehint)

#### Inherited from

NineSlicePlane.accessibleHint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14358

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'auto'

#### Implementation of

[DShadow](../interfaces/DShadow.md).[accessiblePointerEvents](../interfaces/DShadow.md#accessiblepointerevents)

#### Inherited from

NineSlicePlane.accessiblePointerEvents

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14388

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Implementation of

[DShadow](../interfaces/DShadow.md).[accessibleTitle](../interfaces/DShadow.md#accessibletitle)

#### Inherited from

NineSlicePlane.accessibleTitle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14351

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'button'

#### Implementation of

[DShadow](../interfaces/DShadow.md).[accessibleType](../interfaces/DShadow.md#accessibletype)

#### Inherited from

NineSlicePlane.accessibleType

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14379

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Implementation of

[DShadow](../interfaces/DShadow.md).[alpha](../interfaces/DShadow.md#alpha)

#### Inherited from

NineSlicePlane.alpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14410

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[angle](../interfaces/DShadow.md#angle)

#### Inherited from

NineSlicePlane.angle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14646

___

### blendMode

• **blendMode**: `number`

The blend mode to be applied to the Mesh. Apply a value of
`PIXI.BLEND_MODES.NORMAL` to reset the blend mode.

**`member`** {number}

**`default`** PIXI.BLEND_MODES.NORMAL;

**`see`** PIXI.BLEND_MODES

#### Inherited from

NineSlicePlane.blendMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14114

___

### bottomHeight

• **bottomHeight**: `number`

The height of the bottom row

**`member`** {number}

#### Inherited from

NineSlicePlane.bottomHeight

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14039

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[buttonMode](../interfaces/DShadow.md#buttonmode)

#### Inherited from

NineSlicePlane.buttonMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14728

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[cacheAsBitmap](../interfaces/DShadow.md#cacheasbitmap)

#### Inherited from

NineSlicePlane.cacheAsBitmap

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14755

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

NineSlicePlane.children

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14196

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[cursor](../interfaces/DShadow.md#cursor)

#### Inherited from

NineSlicePlane.cursor

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14742

___

### drawMode

• **drawMode**: `number`

The way the Mesh should be drawn, can be any of the {@link PIXI.DRAW_MODES} constants.

**`member`** {number} PIXI.Mesh#drawMode

**`see`** PIXI.DRAW_MODES

#### Inherited from

NineSlicePlane.drawMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14075

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Implementation of

[DShadow](../interfaces/DShadow.md).[filterArea](../interfaces/DShadow.md#filterarea)

#### Inherited from

NineSlicePlane.filterArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14467

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Implementation of

[DShadow](../interfaces/DShadow.md).[filters](../interfaces/DShadow.md#filters)

#### Inherited from

NineSlicePlane.filters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14475

___

### geometry

• `Readonly` **geometry**: `Geometry`

Includes vertex positions, face indices, normals, colors, UVs, and
custom attributes within buffers, reducing the cost of passing all
this data to the GPU. Can be shared between multiple Mesh objects.

**`member`** {PIXI.Geometry} PIXI.Mesh#geometry

**`readonly`**

#### Inherited from

NineSlicePlane.geometry

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14056

___

### height

• **height**: `number`

The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane

**`member`** {number}

#### Inherited from

NineSlicePlane.height

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14015

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[hitArea](../interfaces/DShadow.md#hitarea)

#### Inherited from

NineSlicePlane.hitArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14716

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[interactive](../interfaces/DShadow.md#interactive)

#### Inherited from

NineSlicePlane.interactive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14704

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`member`** {boolean}

**`memberof`** PIXI.Container#

#### Inherited from

NineSlicePlane.interactiveChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14326

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Implementation of

[DShadow](../interfaces/DShadow.md).[isMask](../interfaces/DShadow.md#ismask)

#### Inherited from

NineSlicePlane.isMask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14506

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Implementation of

[DShadow](../interfaces/DShadow.md).[isSprite](../interfaces/DShadow.md#issprite)

#### Inherited from

NineSlicePlane.isSprite

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14501

___

### leftWidth

• **leftWidth**: `number`

The width of the left column

**`member`** {number}

#### Inherited from

NineSlicePlane.leftWidth

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14021

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Implementation of

[DShadow](../interfaces/DShadow.md).[localTransform](../interfaces/DShadow.md#localtransform)

#### Inherited from

NineSlicePlane.localTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14604

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[mask](../interfaces/DShadow.md#mask)

#### Inherited from

NineSlicePlane.mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14682

___

### material

• **material**: `Shader` \| `MeshMaterial`

Alias for {@link PIXI.Mesh#shader}.

**`member`** {PIXI.Shader|PIXI.MeshMaterial}

#### Inherited from

NineSlicePlane.material

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14105

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Implementation of

[DShadow](../interfaces/DShadow.md).[name](../interfaces/DShadow.md#name)

#### Inherited from

NineSlicePlane.name

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14762

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Implementation of

[DShadow](../interfaces/DShadow.md).[parent](../interfaces/DShadow.md#parent)

#### Inherited from

NineSlicePlane.parent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14435

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[pivot](../interfaces/DShadow.md#pivot)

#### Inherited from

NineSlicePlane.pivot

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14625

___

### position

• **position**: `IPoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[position](../interfaces/DShadow.md#position)

#### Inherited from

NineSlicePlane.position

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14611

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Implementation of

[DShadow](../interfaces/DShadow.md).[renderable](../interfaces/DShadow.md#renderable)

#### Inherited from

NineSlicePlane.renderable

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14428

___

### rightWidth

• **rightWidth**: `number`

The width of the right column

**`member`** {number}

#### Inherited from

NineSlicePlane.rightWidth

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14027

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[rotation](../interfaces/DShadow.md#rotation)

#### Inherited from

NineSlicePlane.rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14639

___

### roundPixels

• **roundPixels**: `boolean`

If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
Advantages can include sharper image quality (like text) and faster rendering on canvas.
The main disadvantage is movement of objects may appear less smooth.
To set the global default, change {@link PIXI.settings.ROUND_PIXELS}

**`member`** {boolean}

**`default`** false

#### Inherited from

NineSlicePlane.roundPixels

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14124

___

### scale

• **scale**: `IPoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[scale](../interfaces/DShadow.md#scale)

#### Inherited from

NineSlicePlane.scale

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14618

___

### shader

• **shader**: `Shader` \| `MeshMaterial`

Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
Can be shared between multiple Mesh objects.

**`member`** {PIXI.Shader|PIXI.MeshMaterial} PIXI.Mesh#shader

#### Inherited from

NineSlicePlane.shader

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14062

___

### size

• **size**: `number`

How much of the geometry to draw, by default `0` renders everything.

**`member`** {number} PIXI.Mesh#size

**`default`** 0

#### Inherited from

NineSlicePlane.size

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14087

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`member`** {PIXI.ObservablePoint}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[skew](../interfaces/DShadow.md#skew)

#### Inherited from

NineSlicePlane.skew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14632

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

NineSlicePlane.sortDirty

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14219

___

### sortableChildren

• **sortableChildren**: `boolean`

If set to true, the container will sort its children by zIndex value
when updateTransform() is called, or manually if sortChildren() is called.

This actually changes the order of elements in the array, so should be treated
as a basic solution that is not performant compared to other solutions,
such as @link https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`see`** PIXI.settings.SORTABLE_CHILDREN

**`member`** {boolean} PIXI.Container#sortableChildren

#### Inherited from

NineSlicePlane.sortableChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14212

___

### start

• **start**: `number`

Typically the index of the IndexBuffer where to start drawing.

**`member`** {number} PIXI.Mesh#start

**`default`** 0

#### Inherited from

NineSlicePlane.start

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14081

___

### state

• **state**: `State`

Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
blend mode, culling, depth testing, direction of rendering triangles, backface, etc.

**`member`** {PIXI.State} PIXI.Mesh#state

#### Inherited from

NineSlicePlane.state

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14068

___

### texture

• **texture**: `Texture`

The texture that the Mesh uses.

**`member`** {PIXI.Texture}

#### Inherited from

NineSlicePlane.texture

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14138

___

### tint

• **tint**: `number`

The multiply tint applied to the Mesh. This is a hex value. A value of
`0xFFFFFF` will remove any tint effect.

**`member`** {number}

**`default`** 0xFFFFFF

#### Inherited from

NineSlicePlane.tint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14132

___

### topHeight

• **topHeight**: `number`

The height of the top row

**`member`** {number}

#### Inherited from

NineSlicePlane.topHeight

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14033

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Implementation of

[DShadow](../interfaces/DShadow.md).[transform](../interfaces/DShadow.md#transform)

#### Inherited from

NineSlicePlane.transform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14404

___

### uvBuffer

• `Readonly` **uvBuffer**: `Buffer`

To change mesh uv's, change its uvBuffer data and increment its _updateID.

**`member`** {PIXI.Buffer}

**`readonly`**

#### Inherited from

NineSlicePlane.uvBuffer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14093

___

### verticesBuffer

• `Readonly` **verticesBuffer**: `Buffer`

To change mesh vertices, change its uvBuffer data and increment its _updateID.
Incrementing _updateID is optional because most of Mesh objects do it anyway.

**`member`** {PIXI.Buffer}

**`readonly`**

#### Inherited from

NineSlicePlane.verticesBuffer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14100

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Implementation of

[DShadow](../interfaces/DShadow.md).[visible](../interfaces/DShadow.md#visible)

#### Inherited from

NineSlicePlane.visible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14419

___

### width

• **width**: `number`

The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane

**`member`** {number}

#### Inherited from

NineSlicePlane.width

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14009

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Implementation of

[DShadow](../interfaces/DShadow.md).[worldAlpha](../interfaces/DShadow.md#worldalpha)

#### Inherited from

NineSlicePlane.worldAlpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14442

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Implementation of

[DShadow](../interfaces/DShadow.md).[worldTransform](../interfaces/DShadow.md#worldtransform)

#### Inherited from

NineSlicePlane.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14597

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Implementation of

[DShadow](../interfaces/DShadow.md).[worldVisible](../interfaces/DShadow.md#worldvisible)

#### Inherited from

NineSlicePlane.worldVisible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14662

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`member`** {number}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[x](../interfaces/DShadow.md#x)

#### Inherited from

NineSlicePlane.x

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14583

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`member`** {number}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[y](../interfaces/DShadow.md#y)

#### Inherited from

NineSlicePlane.y

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14590

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`member`** {number}

#### Implementation of

[DShadow](../interfaces/DShadow.md).[zIndex](../interfaces/DShadow.md#zindex)

#### Inherited from

NineSlicePlane.zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14655

___

### BATCHABLE\_SIZE

▪ `Static` **BATCHABLE\_SIZE**: `number`

The maximum number of vertices to consider batchable. Generally, the complexity
of the geometry.

**`memberof`** PIXI.Mesh

**`static`**

**`member`** {number} BATCHABLE_SIZE

#### Inherited from

NineSlicePlane.BATCHABLE\_SIZE

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13144

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.

#### Returns

`void`

#### Inherited from

NineSlicePlane.\_calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14171

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Implementation of

[DShadow](../interfaces/DShadow.md).[_recursivePostUpdateTransform](../interfaces/DShadow.md#_recursivepostupdatetransform)

#### Inherited from

NineSlicePlane.\_recursivePostUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14516

___

### \_refresh

▸ **_refresh**(): `void`

Refreshes NineSlicePlane coords. All of them.

#### Returns

`void`

#### Inherited from

NineSlicePlane.\_refresh

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14043

___

### \_render

▸ `Protected` **_render**(`renderer`): `void`

Standard renderer draw.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | Instance to renderer. |

#### Returns

`void`

#### Inherited from

NineSlicePlane.\_render

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14144

___

### \_renderDefault

▸ `Protected` **_renderDefault**(`renderer`): `void`

Standard non-batching way of rendering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | Instance to renderer. |

#### Returns

`void`

#### Inherited from

NineSlicePlane.\_renderDefault

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14150

___

### \_renderToBatch

▸ `Protected` **_renderToBatch**(`renderer`): `void`

Rendering by using the Batch system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | Instance to renderer. |

#### Returns

`void`

#### Inherited from

NineSlicePlane.\_renderToBatch

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14156

___

### addChild

▸ **addChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Adds one or more children to the container.

Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to add to the container |

#### Returns

`TChildren`[``0``]

The first child that was added.

#### Inherited from

NineSlicePlane.addChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14234

___

### addChildAt

▸ **addChildAt**<`T`\>(`child`, `index`): `T`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `T` | The child to add |
| `index` | `number` | The index to place the child in |

#### Returns

`T`

The child that was added.

#### Inherited from

NineSlicePlane.addChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14242

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[addListener](../interfaces/DShadow.md#addlistener)

#### Inherited from

NineSlicePlane.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[addListener](../interfaces/DShadow.md#addlistener)

#### Inherited from

NineSlicePlane.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Implementation of

[DShadow](../interfaces/DShadow.md).[calculateBounds](../interfaces/DShadow.md#calculatebounds)

#### Inherited from

NineSlicePlane.calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14305

___

### calculateUvs

▸ **calculateUvs**(): `void`

Updates uv field based on from geometry uv's or batchUvs

#### Returns

`void`

#### Inherited from

NineSlicePlane.calculateUvs

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14164

___

### calculateVertices

▸ **calculateVertices**(): `void`

Updates vertexData field based on transform and vertices

#### Returns

`void`

#### Inherited from

NineSlicePlane.calculateVertices

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14160

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | `Point` | the point to test |

#### Returns

`boolean`

the result of the test

#### Inherited from

NineSlicePlane.containsPoint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14178

___

### destroy

▸ **destroy**(`options?`): `void`

Destroys the Mesh object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.children?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DShadow](../interfaces/DShadow.md).[destroy](../interfaces/DShadow.md#destroy)

#### Inherited from

NineSlicePlane.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14187

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`memberof`** PIXI.DisplayObject#

**`function`** displayObjectUpdateTransform

#### Returns

`void`

#### Implementation of

[DShadow](../interfaces/DShadow.md).[displayObjectUpdateTransform](../interfaces/DShadow.md#displayobjectupdatetransform)

#### Inherited from

NineSlicePlane.displayObjectUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14690

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[emit](../interfaces/DShadow.md#emit)

#### Inherited from

NineSlicePlane.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DShadow](../interfaces/DShadow.md).[eventNames](../interfaces/DShadow.md#eventnames)

#### Inherited from

NineSlicePlane.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[getBounds](../interfaces/DShadow.md#getbounds)

#### Inherited from

NineSlicePlane.getBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14526

___

### getChildAt

▸ **getChildAt**(`index`): `DisplayObject`

Returns the child at the specified index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child at |

#### Returns

`DisplayObject`

The child at the given index, if any.

#### Inherited from

NineSlicePlane.getChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14270

___

### getChildByName

▸ **getChildByName**(`name`): `DisplayObject`

Returns the display object in the container.

**`method`** getChildByName

**`memberof`** PIXI.Container#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |

#### Returns

`DisplayObject`

The child with the specified name.

#### Inherited from

NineSlicePlane.getChildByName

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14335

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

Returns the index position of a child DisplayObject instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The DisplayObject instance to identify |

#### Returns

`number`

The index position of the child display object to identify

#### Inherited from

NineSlicePlane.getChildIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14256

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[getGlobalPosition](../interfaces/DShadow.md#getglobalposition)

#### Inherited from

NineSlicePlane.getGlobalPosition

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14774

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

[DShadow](../interfaces/DShadow.md).[getLocalBounds](../interfaces/DShadow.md#getlocalbounds)

#### Inherited from

NineSlicePlane.getLocalBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14533

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[listenerCount](../interfaces/DShadow.md#listenercount)

#### Inherited from

NineSlicePlane.listenerCount

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[listeners](../interfaces/DShadow.md#listeners)

#### Inherited from

NineSlicePlane.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[off](../interfaces/DShadow.md#off)

#### Inherited from

NineSlicePlane.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[on](../interfaces/DShadow.md#on)

#### Inherited from

NineSlicePlane.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[on](../interfaces/DShadow.md#on)

#### Inherited from

NineSlicePlane.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

Overridable method that can be used by Container subclasses whenever the children array is modified

#### Returns

`void`

#### Inherited from

NineSlicePlane.onChildrenChange

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14225

___

### onReflow

▸ **onReflow**(`base`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Implementation of

[DShadow](../interfaces/DShadow.md).[onReflow](../interfaces/DShadow.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-shadow-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-shadow-impl.ts#L36)

___

### onTextureUpdate

▸ `Protected` **onTextureUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-shadow-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-shadow-impl.ts#L32)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[once](../interfaces/DShadow.md#once)

#### Inherited from

NineSlicePlane.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[once](../interfaces/DShadow.md#once)

#### Inherited from

NineSlicePlane.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[removeAllListeners](../interfaces/DShadow.md#removealllisteners)

#### Inherited from

NineSlicePlane.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[removeAllListeners](../interfaces/DShadow.md#removealllisteners)

#### Inherited from

NineSlicePlane.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeChild

▸ **removeChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Removes one or more children from the container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to remove |

#### Returns

`TChildren`[``0``]

The first child that was removed.

#### Inherited from

NineSlicePlane.removeChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14277

___

### removeChildAt

▸ **removeChildAt**(`index`): `DisplayObject`

Removes a child from the specified index position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child from |

#### Returns

`DisplayObject`

The child that was removed.

#### Inherited from

NineSlicePlane.removeChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14284

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `beginIndex?` | `number` |
| `endIndex?` | `number` |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

NineSlicePlane.removeChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14292

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[removeListener](../interfaces/DShadow.md#removelistener)

#### Inherited from

NineSlicePlane.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DShadowImpl`](DShadowImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DShadowImpl`](DShadowImpl.md)

#### Implementation of

[DShadow](../interfaces/DShadow.md).[removeListener](../interfaces/DShadow.md#removelistener)

#### Inherited from

NineSlicePlane.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24097

___

### render

▸ **render**(`renderer`): `void`

Renders the object using the WebGL renderer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Implementation of

[DShadow](../interfaces/DShadow.md).[render](../interfaces/DShadow.md#render)

#### Inherited from

NineSlicePlane.render

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14311

___

### renderAdvanced

▸ `Protected` **renderAdvanced**(`renderer`): `void`

Render the object using the WebGL renderer and advanced features.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

NineSlicePlane.renderAdvanced

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14318

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): `void`

Changes the position of an existing child in the display object container

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The child DisplayObject instance for which you want to change the index number |
| `index` | `number` | The resulting index number for the child display object |

#### Returns

`void`

#### Inherited from

NineSlicePlane.setChildIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14263

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[setParent](../interfaces/DShadow.md#setparent)

#### Inherited from

NineSlicePlane.setParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14561

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[setTransform](../interfaces/DShadow.md#settransform)

#### Inherited from

NineSlicePlane.setTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14576

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

NineSlicePlane.sortChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14296

___

### swapChildren

▸ **swapChildren**(`child`, `child2`): `void`

Swaps the position of 2 Display Objects within this container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | First display object to swap |
| `child2` | `DisplayObject` | Second display object to swap |

#### Returns

`void`

#### Inherited from

NineSlicePlane.swapChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14249

___

### textureUpdated

▸ **textureUpdated**(): `void`

Method used for overrides, to do something in case texture frame was changed.
Meshes based on plane can override it and change more details based on texture.

#### Returns

`void`

#### Inherited from

NineSlicePlane.textureUpdated

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14048

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[toGlobal](../interfaces/DShadow.md#toglobal)

#### Inherited from

NineSlicePlane.toGlobal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14543

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

#### Implementation of

[DShadow](../interfaces/DShadow.md).[toLocal](../interfaces/DShadow.md#tolocal)

#### Inherited from

NineSlicePlane.toLocal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14554

___

### updateHorizontalVertices

▸ **updateHorizontalVertices**(): `void`

Updates the horizontal vertices.

#### Returns

`void`

#### Inherited from

NineSlicePlane.updateHorizontalVertices

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13998

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Implementation of

[DShadow](../interfaces/DShadow.md).[updateTransform](../interfaces/DShadow.md#updatetransform)

#### Inherited from

NineSlicePlane.updateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14300

___

### updateVerticalVertices

▸ **updateVerticalVertices**(): `void`

Updates the vertical vertices.

#### Returns

`void`

#### Inherited from

NineSlicePlane.updateVerticalVertices

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14003

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

NineSlicePlane.mixin

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
