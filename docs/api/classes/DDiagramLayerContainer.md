[Winter Cardinal UI](../README.md) / DDiagramLayerContainer

# Class: DDiagramLayerContainer

## Hierarchy

- `Container`

  ↳ **`DDiagramLayerContainer`**

## Table of contents

### Constructors

- [constructor](DDiagramLayerContainer.md#constructor)

### Properties

- [\_accessibleActive](DDiagramLayerContainer.md#_accessibleactive)
- [\_accessibleDiv](DDiagramLayerContainer.md#_accessiblediv)
- [\_active](DDiagramLayerContainer.md#_active)
- [\_bounds](DDiagramLayerContainer.md#_bounds)
- [\_destroyed](DDiagramLayerContainer.md#_destroyed)
- [\_height](DDiagramLayerContainer.md#_height)
- [\_lastSortedIndex](DDiagramLayerContainer.md#_lastsortedindex)
- [\_mask](DDiagramLayerContainer.md#_mask)
- [\_tempDisplayObjectParent](DDiagramLayerContainer.md#_tempdisplayobjectparent)
- [\_width](DDiagramLayerContainer.md#_width)
- [\_zIndex](DDiagramLayerContainer.md#_zindex)
- [accessible](DDiagramLayerContainer.md#accessible)
- [accessibleChildren](DDiagramLayerContainer.md#accessiblechildren)
- [accessibleHint](DDiagramLayerContainer.md#accessiblehint)
- [accessiblePointerEvents](DDiagramLayerContainer.md#accessiblepointerevents)
- [accessibleTitle](DDiagramLayerContainer.md#accessibletitle)
- [accessibleType](DDiagramLayerContainer.md#accessibletype)
- [alpha](DDiagramLayerContainer.md#alpha)
- [angle](DDiagramLayerContainer.md#angle)
- [buttonMode](DDiagramLayerContainer.md#buttonmode)
- [cacheAsBitmap](DDiagramLayerContainer.md#cacheasbitmap)
- [children](DDiagramLayerContainer.md#children)
- [cursor](DDiagramLayerContainer.md#cursor)
- [filterArea](DDiagramLayerContainer.md#filterarea)
- [filters](DDiagramLayerContainer.md#filters)
- [height](DDiagramLayerContainer.md#height)
- [hitArea](DDiagramLayerContainer.md#hitarea)
- [interactive](DDiagramLayerContainer.md#interactive)
- [interactiveChildren](DDiagramLayerContainer.md#interactivechildren)
- [isMask](DDiagramLayerContainer.md#ismask)
- [isSprite](DDiagramLayerContainer.md#issprite)
- [localTransform](DDiagramLayerContainer.md#localtransform)
- [mask](DDiagramLayerContainer.md#mask)
- [name](DDiagramLayerContainer.md#name)
- [parent](DDiagramLayerContainer.md#parent)
- [pivot](DDiagramLayerContainer.md#pivot)
- [position](DDiagramLayerContainer.md#position)
- [renderable](DDiagramLayerContainer.md#renderable)
- [rotation](DDiagramLayerContainer.md#rotation)
- [scale](DDiagramLayerContainer.md#scale)
- [skew](DDiagramLayerContainer.md#skew)
- [sortDirty](DDiagramLayerContainer.md#sortdirty)
- [sortableChildren](DDiagramLayerContainer.md#sortablechildren)
- [transform](DDiagramLayerContainer.md#transform)
- [visible](DDiagramLayerContainer.md#visible)
- [width](DDiagramLayerContainer.md#width)
- [worldAlpha](DDiagramLayerContainer.md#worldalpha)
- [worldTransform](DDiagramLayerContainer.md#worldtransform)
- [worldVisible](DDiagramLayerContainer.md#worldvisible)
- [x](DDiagramLayerContainer.md#x)
- [y](DDiagramLayerContainer.md#y)
- [zIndex](DDiagramLayerContainer.md#zindex)

### Accessors

- [active](DDiagramLayerContainer.md#active)

### Methods

- [\_calculateBounds](DDiagramLayerContainer.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDiagramLayerContainer.md#_recursivepostupdatetransform)
- [\_render](DDiagramLayerContainer.md#_render)
- [addChild](DDiagramLayerContainer.md#addchild)
- [addChildAt](DDiagramLayerContainer.md#addchildat)
- [addListener](DDiagramLayerContainer.md#addlistener)
- [attach](DDiagramLayerContainer.md#attach)
- [attachAt](DDiagramLayerContainer.md#attachat)
- [calculateBounds](DDiagramLayerContainer.md#calculatebounds)
- [clear](DDiagramLayerContainer.md#clear)
- [create](DDiagramLayerContainer.md#create)
- [delete](DDiagramLayerContainer.md#delete)
- [deserialize](DDiagramLayerContainer.md#deserialize)
- [destroy](DDiagramLayerContainer.md#destroy)
- [detach](DDiagramLayerContainer.md#detach)
- [displayObjectUpdateTransform](DDiagramLayerContainer.md#displayobjectupdatetransform)
- [emit](DDiagramLayerContainer.md#emit)
- [eventNames](DDiagramLayerContainer.md#eventnames)
- [get](DDiagramLayerContainer.md#get)
- [getBounds](DDiagramLayerContainer.md#getbounds)
- [getChildAt](DDiagramLayerContainer.md#getchildat)
- [getChildByName](DDiagramLayerContainer.md#getchildbyname)
- [getChildIndex](DDiagramLayerContainer.md#getchildindex)
- [getGlobalPosition](DDiagramLayerContainer.md#getglobalposition)
- [getLocalBounds](DDiagramLayerContainer.md#getlocalbounds)
- [init](DDiagramLayerContainer.md#init)
- [listenerCount](DDiagramLayerContainer.md#listenercount)
- [listeners](DDiagramLayerContainer.md#listeners)
- [off](DDiagramLayerContainer.md#off)
- [on](DDiagramLayerContainer.md#on)
- [onChildrenChange](DDiagramLayerContainer.md#onchildrenchange)
- [onLayerChange](DDiagramLayerContainer.md#onlayerchange)
- [once](DDiagramLayerContainer.md#once)
- [removeAllListeners](DDiagramLayerContainer.md#removealllisteners)
- [removeChild](DDiagramLayerContainer.md#removechild)
- [removeChildAt](DDiagramLayerContainer.md#removechildat)
- [removeChildren](DDiagramLayerContainer.md#removechildren)
- [removeListener](DDiagramLayerContainer.md#removelistener)
- [render](DDiagramLayerContainer.md#render)
- [renderAdvanced](DDiagramLayerContainer.md#renderadvanced)
- [serialize](DDiagramLayerContainer.md#serialize)
- [setChildIndex](DDiagramLayerContainer.md#setchildindex)
- [setParent](DDiagramLayerContainer.md#setparent)
- [setTransform](DDiagramLayerContainer.md#settransform)
- [size](DDiagramLayerContainer.md#size)
- [sortChildren](DDiagramLayerContainer.md#sortchildren)
- [swapChildren](DDiagramLayerContainer.md#swapchildren)
- [toGlobal](DDiagramLayerContainer.md#toglobal)
- [toLocal](DDiagramLayerContainer.md#tolocal)
- [updateTransform](DDiagramLayerContainer.md#updatetransform)
- [mixin](DDiagramLayerContainer.md#mixin)

## Constructors

### constructor

• **new DDiagramLayerContainer**(`width`, `height`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Overrides

Container.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L19)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

Container.\_accessibleActive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

Container.\_accessibleDiv

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_active

• `Protected` **\_active**: ``null`` \| [`DDiagramLayer`](DDiagramLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L15)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

Container.\_bounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

Container.\_destroyed

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L17)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

Container.\_lastSortedIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

Container.\_mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

Container.\_tempDisplayObjectParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L16)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

Container.\_zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

Container.accessible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8468

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`default`** true

#### Inherited from

Container.accessibleChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

Container.accessibleHint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8483

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'auto'

#### Inherited from

Container.accessiblePointerEvents

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8513

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

Container.accessibleTitle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8476

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'button'

#### Inherited from

Container.accessibleType

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

Container.alpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

Container.angle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8771

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

Container.buttonMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8853

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

Container.cacheAsBitmap

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• **children**: [`DDiagramLayer`](DDiagramLayer.md)[]

#### Overrides

Container.children

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L14)

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

Container.cursor

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Inherited from

Container.filterArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Inherited from

Container.filters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8600

___

### height

• **height**: `number`

The height of the Container, setting this will actually modify the scale to achieve the value set

**`member`** {number}

#### Inherited from

Container.height

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8443

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

Container.hitArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8841

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

Container.interactive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8829

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`member`** {boolean}

**`memberof`** PIXI.Container#

#### Inherited from

Container.interactiveChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

Container.isMask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

Container.isSprite

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

Container.localTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8729

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

Container.mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

Container.name

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

Container.parent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

Container.pivot

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8750

___

### position

• **position**: `IPoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

Container.position

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8736

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

Container.renderable

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

Container.rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### scale

• **scale**: `IPoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

Container.scale

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8743

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`member`** {PIXI.ObservablePoint}

#### Inherited from

Container.skew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

Container.sortDirty

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8300

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

Container.sortableChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

Container.transform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

Container.visible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### width

• **width**: `number`

The width of the Container, setting this will actually modify the scale to achieve the value set

**`member`** {number}

#### Inherited from

Container.width

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8437

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

Container.worldAlpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

Container.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

Container.worldVisible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8787

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`member`** {number}

#### Inherited from

Container.x

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`member`** {number}

#### Inherited from

Container.y

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`member`** {number}

#### Inherited from

Container.zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

## Accessors

### active

• `get` **active**(): ``null`` \| [`DDiagramLayer`](DDiagramLayer.md)

#### Returns

``null`` \| [`DDiagramLayer`](DDiagramLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L38)

• `set` **active**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | ``null`` \| [`DDiagramLayer`](DDiagramLayer.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L42)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

Recalculates the bounds of the object. Override this to
calculate the bounds of the specific object (not including children).

#### Returns

`void`

#### Inherited from

Container.\_calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8393

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

Container.\_recursivePostUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8641

___

### \_render

▸ `Protected` **_render**(`renderer`): `void`

To be overridden by the subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

Container.\_render

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8413

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

Container.addChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8315

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

Container.addChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### attach

▸ **attach**(`layer`, `activate?`): `void`

Adds the specified layer and activates it if the `activate` is true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`DDiagramLayer`](DDiagramLayer.md) |
| `activate?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L61)

___

### attachAt

▸ **attachAt**(`layer`, `index`, `activate?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`DDiagramLayer`](DDiagramLayer.md) |
| `index` | `number` |
| `activate?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L70)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

Container.calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L141)

___

### create

▸ **create**(`name`, `activate?`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `activate?` | `boolean` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L49)

___

### delete

▸ **delete**(`layer`, `activateNext?`): `number`

Removes the specified layer and activate the next layer.
This method does not destroy the specified layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`DDiagramLayer`](DDiagramLayer.md) |
| `activateNext?` | `boolean` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L106)

___

### deserialize

▸ **deserialize**(`serializedLayers`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedLayers` | [`DDiagramSerializedLayer`](../interfaces/DDiagramSerializedLayer.md)[] |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L188)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

Container.destroy

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L155)

___

### detach

▸ **detach**(`layer`, `active`): `void`

Removes the specified layer from this container and activates the specified layer.
This method does not destroy the secified layer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | [`DDiagramLayer`](DDiagramLayer.md) |
| `active` | ``null`` \| [`DDiagramLayer`](DDiagramLayer.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L85)

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

Container.displayObjectUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

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

Container.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Container.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### get

▸ **get**(`index`): ``null`` \| [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DDiagramLayer`](DDiagramLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L133)

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

Container.getBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8651

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

Container.getChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8351

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

Container.getChildByName

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8460

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

Container.getChildIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

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

Container.getGlobalPosition

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

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

Container.getLocalBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L28)

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

Container.listenerCount

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

Container.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

Overridable method that can be used by Container subclasses whenever the children array is modified

#### Returns

`void`

#### Inherited from

Container.onChildrenChange

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8306

___

### onLayerChange

▸ `Protected` **onLayerChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L166)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.removeAllListeners

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

Container.removeChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8358

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

Container.removeChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

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

Container.removeChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

Container.removeListener

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

Container.render

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8399

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

Container.renderAdvanced

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### serialize

▸ **serialize**(`manager`, `items`): [`DDiagramSerializedLayer`](../interfaces/DDiagramSerializedLayer.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |
| `items` | [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[] |

#### Returns

[`DDiagramSerializedLayer`](../interfaces/DDiagramSerializedLayer.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L170)

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

Container.setChildIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

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

Container.setParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8686

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

Container.setTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-layer-container.ts#L162)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

Container.sortChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8377

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

Container.swapChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

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

Container.toGlobal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

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

Container.toLocal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

Container.updateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8381

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

Container.mixin

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
