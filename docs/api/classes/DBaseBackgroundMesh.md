[Winter Cardinal UI - v0.154.0](../index.md) / DBaseBackgroundMesh

# Class: DBaseBackgroundMesh

## Hierarchy

- `Mesh`

  ↳ **`DBaseBackgroundMesh`**

## Table of contents

### Constructors

- [constructor](DBaseBackgroundMesh.md#constructor)

### Properties

- [\_accessibleActive](DBaseBackgroundMesh.md#_accessibleactive)
- [\_accessibleDiv](DBaseBackgroundMesh.md#_accessiblediv)
- [\_bounds](DBaseBackgroundMesh.md#_bounds)
- [\_destroyed](DBaseBackgroundMesh.md#_destroyed)
- [\_lastSortedIndex](DBaseBackgroundMesh.md#_lastsortedindex)
- [\_mask](DBaseBackgroundMesh.md#_mask)
- [\_tempDisplayObjectParent](DBaseBackgroundMesh.md#_tempdisplayobjectparent)
- [\_zIndex](DBaseBackgroundMesh.md#_zindex)
- [accessible](DBaseBackgroundMesh.md#accessible)
- [accessibleChildren](DBaseBackgroundMesh.md#accessiblechildren)
- [accessibleHint](DBaseBackgroundMesh.md#accessiblehint)
- [accessiblePointerEvents](DBaseBackgroundMesh.md#accessiblepointerevents)
- [accessibleTitle](DBaseBackgroundMesh.md#accessibletitle)
- [accessibleType](DBaseBackgroundMesh.md#accessibletype)
- [alpha](DBaseBackgroundMesh.md#alpha)
- [angle](DBaseBackgroundMesh.md#angle)
- [blendMode](DBaseBackgroundMesh.md#blendmode)
- [buttonMode](DBaseBackgroundMesh.md#buttonmode)
- [cacheAsBitmap](DBaseBackgroundMesh.md#cacheasbitmap)
- [children](DBaseBackgroundMesh.md#children)
- [cursor](DBaseBackgroundMesh.md#cursor)
- [drawMode](DBaseBackgroundMesh.md#drawmode)
- [filterArea](DBaseBackgroundMesh.md#filterarea)
- [filters](DBaseBackgroundMesh.md#filters)
- [geometry](DBaseBackgroundMesh.md#geometry)
- [hitArea](DBaseBackgroundMesh.md#hitarea)
- [interactive](DBaseBackgroundMesh.md#interactive)
- [interactiveChildren](DBaseBackgroundMesh.md#interactivechildren)
- [isMask](DBaseBackgroundMesh.md#ismask)
- [isSprite](DBaseBackgroundMesh.md#issprite)
- [localTransform](DBaseBackgroundMesh.md#localtransform)
- [mask](DBaseBackgroundMesh.md#mask)
- [material](DBaseBackgroundMesh.md#material)
- [name](DBaseBackgroundMesh.md#name)
- [parent](DBaseBackgroundMesh.md#parent)
- [pivot](DBaseBackgroundMesh.md#pivot)
- [position](DBaseBackgroundMesh.md#position)
- [renderable](DBaseBackgroundMesh.md#renderable)
- [rotation](DBaseBackgroundMesh.md#rotation)
- [roundPixels](DBaseBackgroundMesh.md#roundpixels)
- [scale](DBaseBackgroundMesh.md#scale)
- [shader](DBaseBackgroundMesh.md#shader)
- [size](DBaseBackgroundMesh.md#size)
- [skew](DBaseBackgroundMesh.md#skew)
- [sortDirty](DBaseBackgroundMesh.md#sortdirty)
- [sortableChildren](DBaseBackgroundMesh.md#sortablechildren)
- [start](DBaseBackgroundMesh.md#start)
- [state](DBaseBackgroundMesh.md#state)
- [texture](DBaseBackgroundMesh.md#texture)
- [tint](DBaseBackgroundMesh.md#tint)
- [transform](DBaseBackgroundMesh.md#transform)
- [uvBuffer](DBaseBackgroundMesh.md#uvbuffer)
- [verticesBuffer](DBaseBackgroundMesh.md#verticesbuffer)
- [visible](DBaseBackgroundMesh.md#visible)
- [worldAlpha](DBaseBackgroundMesh.md#worldalpha)
- [worldTransform](DBaseBackgroundMesh.md#worldtransform)
- [worldVisible](DBaseBackgroundMesh.md#worldvisible)
- [x](DBaseBackgroundMesh.md#x)
- [y](DBaseBackgroundMesh.md#y)
- [zIndex](DBaseBackgroundMesh.md#zindex)
- [BATCHABLE\_SIZE](DBaseBackgroundMesh.md#batchable_size)

### Accessors

- [cornerMask](DBaseBackgroundMesh.md#cornermask)
- [cornerRadius](DBaseBackgroundMesh.md#cornerradius)
- [height](DBaseBackgroundMesh.md#height)
- [width](DBaseBackgroundMesh.md#width)

### Methods

- [\_calculateBounds](DBaseBackgroundMesh.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DBaseBackgroundMesh.md#_recursivepostupdatetransform)
- [\_render](DBaseBackgroundMesh.md#_render)
- [\_renderDefault](DBaseBackgroundMesh.md#_renderdefault)
- [\_renderToBatch](DBaseBackgroundMesh.md#_rendertobatch)
- [addChild](DBaseBackgroundMesh.md#addchild)
- [addChildAt](DBaseBackgroundMesh.md#addchildat)
- [addListener](DBaseBackgroundMesh.md#addlistener)
- [calculateBounds](DBaseBackgroundMesh.md#calculatebounds)
- [calculateUvs](DBaseBackgroundMesh.md#calculateuvs)
- [calculateVertices](DBaseBackgroundMesh.md#calculatevertices)
- [containsPoint](DBaseBackgroundMesh.md#containspoint)
- [destroy](DBaseBackgroundMesh.md#destroy)
- [displayObjectUpdateTransform](DBaseBackgroundMesh.md#displayobjectupdatetransform)
- [emit](DBaseBackgroundMesh.md#emit)
- [eventNames](DBaseBackgroundMesh.md#eventnames)
- [getBounds](DBaseBackgroundMesh.md#getbounds)
- [getChildAt](DBaseBackgroundMesh.md#getchildat)
- [getChildByName](DBaseBackgroundMesh.md#getchildbyname)
- [getChildIndex](DBaseBackgroundMesh.md#getchildindex)
- [getGlobalPosition](DBaseBackgroundMesh.md#getglobalposition)
- [getLocalBounds](DBaseBackgroundMesh.md#getlocalbounds)
- [listenerCount](DBaseBackgroundMesh.md#listenercount)
- [listeners](DBaseBackgroundMesh.md#listeners)
- [off](DBaseBackgroundMesh.md#off)
- [on](DBaseBackgroundMesh.md#on)
- [onChildrenChange](DBaseBackgroundMesh.md#onchildrenchange)
- [once](DBaseBackgroundMesh.md#once)
- [removeAllListeners](DBaseBackgroundMesh.md#removealllisteners)
- [removeChild](DBaseBackgroundMesh.md#removechild)
- [removeChildAt](DBaseBackgroundMesh.md#removechildat)
- [removeChildren](DBaseBackgroundMesh.md#removechildren)
- [removeListener](DBaseBackgroundMesh.md#removelistener)
- [render](DBaseBackgroundMesh.md#render)
- [renderAdvanced](DBaseBackgroundMesh.md#renderadvanced)
- [setChildIndex](DBaseBackgroundMesh.md#setchildindex)
- [setParent](DBaseBackgroundMesh.md#setparent)
- [setTransform](DBaseBackgroundMesh.md#settransform)
- [sortChildren](DBaseBackgroundMesh.md#sortchildren)
- [swapChildren](DBaseBackgroundMesh.md#swapchildren)
- [toGlobal](DBaseBackgroundMesh.md#toglobal)
- [toLocal](DBaseBackgroundMesh.md#tolocal)
- [updateTransform](DBaseBackgroundMesh.md#updatetransform)
- [mixin](DBaseBackgroundMesh.md#mixin)

## Constructors

### constructor

• **new DBaseBackgroundMesh**(`texture`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Overrides

Mesh.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L15)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

Mesh.\_accessibleActive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13331

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

Mesh.\_accessibleDiv

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13337

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

Mesh.\_bounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13449

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

Mesh.\_destroyed

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13463

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

Mesh.\_lastSortedIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13417

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

Mesh.\_mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13456

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

Mesh.\_tempDisplayObjectParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13478

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

Mesh.\_zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13425

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

Mesh.accessible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13310

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`default`** true

#### Inherited from

Mesh.accessibleChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13364

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

Mesh.accessibleHint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13325

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'auto'

#### Inherited from

Mesh.accessiblePointerEvents

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13355

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

Mesh.accessibleTitle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13318

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'button'

#### Inherited from

Mesh.accessibleType

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13346

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

Mesh.alpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13377

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

Mesh.angle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13613

___

### blendMode

• **blendMode**: `number`

The blend mode to be applied to the Mesh. Apply a value of
`PIXI.BLEND_MODES.NORMAL` to reset the blend mode.

**`member`** {number}

**`default`** PIXI.BLEND_MODES.NORMAL;

**`see`** PIXI.BLEND_MODES

#### Inherited from

Mesh.blendMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13061

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

Mesh.buttonMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13695

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

Mesh.cacheAsBitmap

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13722

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

Mesh.children

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13151

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

Mesh.cursor

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13709

___

### drawMode

• **drawMode**: `number`

The way the Mesh should be drawn, can be any of the {@link PIXI.DRAW_MODES} constants.

**`member`** {number} PIXI.Mesh#drawMode

**`see`** PIXI.DRAW_MODES

#### Inherited from

Mesh.drawMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13022

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Inherited from

Mesh.filterArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13434

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Inherited from

Mesh.filters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13442

___

### geometry

• **geometry**: [`DBaseBackgroundMeshGeometry`](DBaseBackgroundMeshGeometry.md)

#### Overrides

Mesh.geometry

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L12)

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

Mesh.hitArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13683

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

Mesh.interactive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13671

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`member`** {boolean}

**`memberof`** PIXI.Container#

#### Inherited from

Mesh.interactiveChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13293

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

Mesh.isMask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13473

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

Mesh.isSprite

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13468

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

Mesh.localTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13571

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

Mesh.mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13649

___

### material

• **material**: `Shader` \| `MeshMaterial`

Alias for {@link PIXI.Mesh#shader}.

**`member`** {PIXI.Shader|PIXI.MeshMaterial}

#### Inherited from

Mesh.material

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13052

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

Mesh.name

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13729

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

Mesh.parent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13402

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

Mesh.pivot

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13592

___

### position

• **position**: `IPoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

Mesh.position

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13578

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

Mesh.renderable

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13395

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

Mesh.rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13606

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

Mesh.roundPixels

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13071

___

### scale

• **scale**: `IPoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

Mesh.scale

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13585

___

### shader

• **shader**: `MeshMaterial`

#### Overrides

Mesh.shader

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L13)

___

### size

• **size**: `number`

How much of the geometry to draw, by default `0` renders everything.

**`member`** {number} PIXI.Mesh#size

**`default`** 0

#### Inherited from

Mesh.size

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13034

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`member`** {PIXI.ObservablePoint}

#### Inherited from

Mesh.skew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13599

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

Mesh.sortDirty

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13174

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

Mesh.sortableChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13167

___

### start

• **start**: `number`

Typically the index of the IndexBuffer where to start drawing.

**`member`** {number} PIXI.Mesh#start

**`default`** 0

#### Inherited from

Mesh.start

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13028

___

### state

• **state**: `State`

Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
blend mode, culling, depth testing, direction of rendering triangles, backface, etc.

**`member`** {PIXI.State} PIXI.Mesh#state

#### Inherited from

Mesh.state

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13015

___

### texture

• **texture**: `Texture`

The texture that the Mesh uses.

**`member`** {PIXI.Texture}

#### Inherited from

Mesh.texture

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13085

___

### tint

• **tint**: `number`

The multiply tint applied to the Mesh. This is a hex value. A value of
`0xFFFFFF` will remove any tint effect.

**`member`** {number}

**`default`** 0xFFFFFF

#### Inherited from

Mesh.tint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13079

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

Mesh.transform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13371

___

### uvBuffer

• `Readonly` **uvBuffer**: `Buffer`

To change mesh uv's, change its uvBuffer data and increment its _updateID.

**`member`** {PIXI.Buffer}

**`readonly`**

#### Inherited from

Mesh.uvBuffer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13040

___

### verticesBuffer

• `Readonly` **verticesBuffer**: `Buffer`

To change mesh vertices, change its uvBuffer data and increment its _updateID.
Incrementing _updateID is optional because most of Mesh objects do it anyway.

**`member`** {PIXI.Buffer}

**`readonly`**

#### Inherited from

Mesh.verticesBuffer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13047

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

Mesh.visible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13386

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

Mesh.worldAlpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13409

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

Mesh.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13564

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

Mesh.worldVisible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13629

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`member`** {number}

#### Inherited from

Mesh.x

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13550

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`member`** {number}

#### Inherited from

Mesh.y

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13557

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`member`** {number}

#### Inherited from

Mesh.zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13622

___

### BATCHABLE\_SIZE

▪ `Static` **BATCHABLE\_SIZE**: `number`

The maximum number of vertices to consider batchable. Generally, the complexity
of the geometry.

**`memberof`** PIXI.Mesh

**`static`**

**`member`** {number} BATCHABLE_SIZE

#### Inherited from

Mesh.BATCHABLE\_SIZE

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13144

## Accessors

### cornerMask

• `get` **cornerMask**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L48)

• `set` **cornerMask**(`cornerMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cornerMask` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L52)

___

### cornerRadius

• `get` **cornerRadius**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L40)

• `set` **cornerRadius**(`cornerRadius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cornerRadius` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L44)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Overrides

Mesh.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L32)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Overrides

Mesh.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L36)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Overrides

Mesh.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L23)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Overrides

Mesh.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L27)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.

#### Returns

`void`

#### Inherited from

Mesh.\_calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13118

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

Mesh.\_recursivePostUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13483

___

### \_render

▸ `Protected` **_render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Overrides

Mesh.\_render

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background-mesh.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background-mesh.ts#L56)

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

Mesh.\_renderDefault

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13097

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

Mesh.\_renderToBatch

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13103

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

Mesh.addChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13189

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

Mesh.addChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13197

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

Mesh.calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13260

___

### calculateUvs

▸ **calculateUvs**(): `void`

Updates uv field based on from geometry uv's or batchUvs

#### Returns

`void`

#### Inherited from

Mesh.calculateUvs

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13111

___

### calculateVertices

▸ **calculateVertices**(): `void`

Updates vertexData field based on transform and vertices

#### Returns

`void`

#### Inherited from

Mesh.calculateVertices

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13107

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

Mesh.containsPoint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13125

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

#### Inherited from

Mesh.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13134

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

Mesh.displayObjectUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13657

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

Mesh.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Mesh.eventNames

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

#### Inherited from

Mesh.getBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13493

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

Mesh.getChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13225

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

Mesh.getChildByName

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13302

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

Mesh.getChildIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13211

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

Mesh.getGlobalPosition

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13741

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

Mesh.getLocalBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13500

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

Mesh.listenerCount

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

Mesh.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

Overridable method that can be used by Container subclasses whenever the children array is modified

#### Returns

`void`

#### Inherited from

Mesh.onChildrenChange

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13180

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.removeAllListeners

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

Mesh.removeChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13232

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

Mesh.removeChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13239

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

Mesh.removeChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13247

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DBaseBackgroundMesh`](DBaseBackgroundMesh.md)

#### Inherited from

Mesh.removeListener

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

#### Inherited from

Mesh.render

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13266

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

Mesh.renderAdvanced

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13273

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

Mesh.setChildIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13218

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

Mesh.setParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13528

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

Mesh.setTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13543

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

Mesh.sortChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13251

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

Mesh.swapChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13204

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

Mesh.toGlobal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13510

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

Mesh.toLocal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13521

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

Mesh.updateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13255

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

Mesh.mixin

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
