[Winter Cardinal UI - v0.407.0](../index.md) / DDynamicText

# Class: DDynamicText

## Hierarchy

- `Mesh`

  ↳ **`DDynamicText`**

## Table of contents

### Constructors

- [constructor](DDynamicText.md#constructor)

### Properties

- [\_accessibleActive](DDynamicText.md#_accessibleactive)
- [\_accessibleDiv](DDynamicText.md#_accessiblediv)
- [\_atlas](DDynamicText.md#_atlas)
- [\_atlasRevisionUpdated](DDynamicText.md#_atlasrevisionupdated)
- [\_bounds](DDynamicText.md#_bounds)
- [\_boundsID](DDynamicText.md#_boundsid)
- [\_boundsRect](DDynamicText.md#_boundsrect)
- [\_destroyed](DDynamicText.md#_destroyed)
- [\_enabledFilters](DDynamicText.md#_enabledfilters)
- [\_height](DDynamicText.md#_height)
- [\_isDirty](DDynamicText.md#_isdirty)
- [\_isGeometryDirty](DDynamicText.md#_isgeometrydirty)
- [\_lastSortedIndex](DDynamicText.md#_lastsortedindex)
- [\_localBounds](DDynamicText.md#_localbounds)
- [\_localBoundsRect](DDynamicText.md#_localboundsrect)
- [\_mask](DDynamicText.md#_mask)
- [\_modifier](DDynamicText.md#_modifier)
- [\_style](DDynamicText.md#_style)
- [\_tempDisplayObjectParent](DDynamicText.md#_tempdisplayobjectparent)
- [\_text](DDynamicText.md#_text)
- [\_textApproved](DDynamicText.md#_textapproved)
- [\_width](DDynamicText.md#_width)
- [\_zIndex](DDynamicText.md#_zindex)
- [accessible](DDynamicText.md#accessible)
- [accessibleChildren](DDynamicText.md#accessiblechildren)
- [accessibleHint](DDynamicText.md#accessiblehint)
- [accessiblePointerEvents](DDynamicText.md#accessiblepointerevents)
- [accessibleTitle](DDynamicText.md#accessibletitle)
- [accessibleType](DDynamicText.md#accessibletype)
- [alpha](DDynamicText.md#alpha)
- [angle](DDynamicText.md#angle)
- [blendMode](DDynamicText.md#blendmode)
- [buttonMode](DDynamicText.md#buttonmode)
- [cacheAsBitmap](DDynamicText.md#cacheasbitmap)
- [children](DDynamicText.md#children)
- [cursor](DDynamicText.md#cursor)
- [drawMode](DDynamicText.md#drawmode)
- [filterArea](DDynamicText.md#filterarea)
- [filters](DDynamicText.md#filters)
- [geometry](DDynamicText.md#geometry)
- [hitArea](DDynamicText.md#hitarea)
- [interactive](DDynamicText.md#interactive)
- [interactiveChildren](DDynamicText.md#interactivechildren)
- [isMask](DDynamicText.md#ismask)
- [isSprite](DDynamicText.md#issprite)
- [localTransform](DDynamicText.md#localtransform)
- [mask](DDynamicText.md#mask)
- [material](DDynamicText.md#material)
- [name](DDynamicText.md#name)
- [parent](DDynamicText.md#parent)
- [pivot](DDynamicText.md#pivot)
- [position](DDynamicText.md#position)
- [renderable](DDynamicText.md#renderable)
- [rotation](DDynamicText.md#rotation)
- [roundPixels](DDynamicText.md#roundpixels)
- [scale](DDynamicText.md#scale)
- [shader](DDynamicText.md#shader)
- [size](DDynamicText.md#size)
- [skew](DDynamicText.md#skew)
- [sortDirty](DDynamicText.md#sortdirty)
- [sortableChildren](DDynamicText.md#sortablechildren)
- [start](DDynamicText.md#start)
- [state](DDynamicText.md#state)
- [texture](DDynamicText.md#texture)
- [tint](DDynamicText.md#tint)
- [transform](DDynamicText.md#transform)
- [uvBuffer](DDynamicText.md#uvbuffer)
- [verticesBuffer](DDynamicText.md#verticesbuffer)
- [visible](DDynamicText.md#visible)
- [worldAlpha](DDynamicText.md#worldalpha)
- [worldTransform](DDynamicText.md#worldtransform)
- [worldVisible](DDynamicText.md#worldvisible)
- [x](DDynamicText.md#x)
- [y](DDynamicText.md#y)
- [zIndex](DDynamicText.md#zindex)
- [BATCHABLE\_SIZE](DDynamicText.md#batchable_size)

### Accessors

- [clipped](DDynamicText.md#clipped)
- [height](DDynamicText.md#height)
- [style](DDynamicText.md#style)
- [text](DDynamicText.md#text)
- [width](DDynamicText.md#width)

### Methods

- [\_calculateBounds](DDynamicText.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDynamicText.md#_recursivepostupdatetransform)
- [\_render](DDynamicText.md#_render)
- [\_renderDefault](DDynamicText.md#_renderdefault)
- [\_renderToBatch](DDynamicText.md#_rendertobatch)
- [addChild](DDynamicText.md#addchild)
- [addChildAt](DDynamicText.md#addchildat)
- [addListener](DDynamicText.md#addlistener)
- [calculateBounds](DDynamicText.md#calculatebounds)
- [calculateUvs](DDynamicText.md#calculateuvs)
- [calculateVertices](DDynamicText.md#calculatevertices)
- [containerUpdateTransform](DDynamicText.md#containerupdatetransform)
- [containsPoint](DDynamicText.md#containspoint)
- [destroy](DDynamicText.md#destroy)
- [disableTempParent](DDynamicText.md#disabletempparent)
- [displayObjectUpdateTransform](DDynamicText.md#displayobjectupdatetransform)
- [emit](DDynamicText.md#emit)
- [enableTempParent](DDynamicText.md#enabletempparent)
- [eventNames](DDynamicText.md#eventnames)
- [getBounds](DDynamicText.md#getbounds)
- [getChildAt](DDynamicText.md#getchildat)
- [getChildByName](DDynamicText.md#getchildbyname)
- [getChildIndex](DDynamicText.md#getchildindex)
- [getGlobalPosition](DDynamicText.md#getglobalposition)
- [getLocalBounds](DDynamicText.md#getlocalbounds)
- [listenerCount](DDynamicText.md#listenercount)
- [listeners](DDynamicText.md#listeners)
- [off](DDynamicText.md#off)
- [on](DDynamicText.md#on)
- [onChildrenChange](DDynamicText.md#onchildrenchange)
- [onStyleChange](DDynamicText.md#onstylechange)
- [once](DDynamicText.md#once)
- [removeAllListeners](DDynamicText.md#removealllisteners)
- [removeChild](DDynamicText.md#removechild)
- [removeChildAt](DDynamicText.md#removechildat)
- [removeChildren](DDynamicText.md#removechildren)
- [removeListener](DDynamicText.md#removelistener)
- [render](DDynamicText.md#render)
- [renderAdvanced](DDynamicText.md#renderadvanced)
- [setChildIndex](DDynamicText.md#setchildindex)
- [setClippingDelta](DDynamicText.md#setclippingdelta)
- [setParent](DDynamicText.md#setparent)
- [setTransform](DDynamicText.md#settransform)
- [sortChildren](DDynamicText.md#sortchildren)
- [swapChildren](DDynamicText.md#swapchildren)
- [toGlobal](DDynamicText.md#toglobal)
- [toLocal](DDynamicText.md#tolocal)
- [update](DDynamicText.md#update)
- [updateClipping](DDynamicText.md#updateclipping)
- [updateTransform](DDynamicText.md#updatetransform)
- [update\_](DDynamicText.md#update_)
- [mixin](DDynamicText.md#mixin)

## Constructors

### constructor

• **new DDynamicText**(`style`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`DDynamicTextStyle`](DDynamicTextStyle.md) |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Overrides

Mesh.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L44)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

Mesh.\_accessibleActive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13747

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

Mesh.\_accessibleDiv

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13753

___

### \_atlas

• `Protected` **\_atlas**: ``null`` \| [`DynamicFontAtlas`](DynamicFontAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L36)

___

### \_atlasRevisionUpdated

• `Protected` **\_atlasRevisionUpdated**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L37)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

Mesh.\_bounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13869

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

Mesh.\_boundsID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13882

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

Mesh.\_boundsRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13889

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

Mesh.\_destroyed

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13910

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

Mesh.\_enabledFilters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13863

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L39)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L34)

___

### \_isGeometryDirty

• `Protected` **\_isGeometryDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L35)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

Mesh.\_lastSortedIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13832

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

Mesh.\_localBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13875

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

Mesh.\_localBoundsRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13896

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

Mesh.\_mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13903

___

### \_modifier

• `Protected` **\_modifier**: [`DDynamicTextModifier`](../interfaces/DDynamicTextModifier.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L40)

___

### \_style

• `Protected` **\_style**: [`DDynamicTextStyle`](DDynamicTextStyle.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L31)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

Mesh.\_tempDisplayObjectParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13983

___

### \_text

• `Protected` **\_text**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L32)

___

### \_textApproved

• `Protected` **\_textApproved**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L33)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L38)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

Mesh.\_zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13840

___

### accessible

• **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Mesh.accessible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13726

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

```ts
true
```

#### Inherited from

Mesh.accessibleChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13780

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Mesh.accessibleHint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13741

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

```ts
'auto'
```

#### Inherited from

Mesh.accessiblePointerEvents

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13771

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Mesh.accessibleTitle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13734

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

```ts
'button'
```

#### Inherited from

Mesh.accessibleType

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13762

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

Mesh.alpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13793

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

Mesh.angle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14070

___

### blendMode

• **blendMode**: `number`

The blend mode to be applied to the Mesh. Apply a value of
`PIXI.BLEND_MODES.NORMAL` to reset the blend mode.

**`Member`**

**`Default`**

```ts
PIXI.BLEND_MODES.NORMAL;
```

**`See`**

PIXI.BLEND_MODES

#### Inherited from

Mesh.blendMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13457

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Mesh.buttonMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14152

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

Set this to true if you want this display object to be cached as a bitmap.
This basically takes a snap shot of the display object as it is at that moment. It can
provide a performance benefit for complex static displayObjects.
To remove simply set this property to `false`

IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Mesh.cacheAsBitmap

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14179

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

Mesh.children

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13547

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';
```

**`See`**

https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Mesh.cursor

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14166

___

### drawMode

• **drawMode**: `number`

The way the Mesh should be drawn, can be any of the PIXI.DRAW_MODES constants.

**`Member`**

PIXI.Mesh#drawMode

**`See`**

PIXI.DRAW_MODES

#### Inherited from

Mesh.drawMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13418

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`Member`**

PIXI.DisplayObject#filterArea

#### Inherited from

Mesh.filterArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13849

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`Member`**

PIXI.DisplayObject#filters

#### Inherited from

Mesh.filters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13857

___

### geometry

• `Readonly` **geometry**: [`DDynamicTextGeometry`](DDynamicTextGeometry.md)

#### Overrides

Mesh.geometry

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L42)

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Mesh.hitArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14140

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Mesh.interactive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14128

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`Member`**

**`Memberof`**

PIXI.Container#

#### Inherited from

Mesh.interactiveChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13706

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

Mesh.isMask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13920

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

Mesh.isSprite

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13915

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

Mesh.localTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14028

___

### mask

• **mask**: ``null`` \| `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`Example`**

```ts
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;
```

**`Todo`**

At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`Member`**

#### Inherited from

Mesh.mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14106

___

### material

• **material**: `MeshMaterial`

Alias for [PIXI.Mesh#shader](DDynamicText.md#shader).

**`Member`**

#### Inherited from

Mesh.material

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13448

___

### name

• **name**: `string`

The instance name of the object.

**`Memberof`**

PIXI.DisplayObject#

**`Member`**

name

#### Inherited from

Mesh.name

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14186

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

Mesh.parent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13817

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

Mesh.pivot

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14049

___

### position

• **position**: `ObservablePoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

Mesh.position

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14035

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`Member`**

PIXI.DisplayObject#renderable

#### Inherited from

Mesh.renderable

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13811

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

Mesh.rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14063

___

### roundPixels

• **roundPixels**: `boolean`

If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
Advantages can include sharper image quality (like text) and faster rendering on canvas.
The main disadvantage is movement of objects may appear less smooth.
To set the global default, change PIXI.settings.ROUND_PIXELS

**`Member`**

**`Default`**

```ts
false
```

#### Inherited from

Mesh.roundPixels

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13467

___

### scale

• **scale**: `ObservablePoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

Mesh.scale

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14042

___

### shader

• **shader**: `Shader` \| `MeshMaterial`

Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
Can be shared between multiple Mesh objects.

**`Member`**

PIXI.Mesh#shader

#### Inherited from

Mesh.shader

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13405

___

### size

• **size**: `number`

How much of the geometry to draw, by default `0` renders everything.

**`Member`**

PIXI.Mesh#size

**`Default`**

```ts
0
```

#### Inherited from

Mesh.size

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13430

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

Mesh.skew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14056

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

Mesh.sortDirty

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13570

___

### sortableChildren

• **sortableChildren**: `boolean`

If set to true, the container will sort its children by zIndex value
when updateTransform() is called, or manually if sortChildren() is called.

This actually changes the order of elements in the array, so should be treated
as a basic solution that is not performant compared to other solutions,
such as

**`Link`**

https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`See`**

PIXI.settings.SORTABLE_CHILDREN

**`Member`**

PIXI.Container#sortableChildren

#### Inherited from

Mesh.sortableChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13563

___

### start

• **start**: `number`

Typically the index of the IndexBuffer where to start drawing.

**`Member`**

PIXI.Mesh#start

**`Default`**

```ts
0
```

#### Inherited from

Mesh.start

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13424

___

### state

• **state**: `State`

Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
blend mode, culling, depth testing, direction of rendering triangles, backface, etc.

**`Member`**

PIXI.Mesh#state

#### Inherited from

Mesh.state

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13411

___

### texture

• **texture**: `Texture`

The texture that the Mesh uses.

**`Member`**

#### Inherited from

Mesh.texture

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13481

___

### tint

• **tint**: `number`

The multiply tint applied to the Mesh. This is a hex value. A value of
`0xFFFFFF` will remove any tint effect.

**`Member`**

**`Default`**

```ts
0xFFFFFF
```

#### Inherited from

Mesh.tint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13475

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Inherited from

Mesh.transform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13787

___

### uvBuffer

• `Readonly` **uvBuffer**: `Buffer`

To change mesh uv's, change its uvBuffer data and increment its _updateID.

**`Member`**

#### Inherited from

Mesh.uvBuffer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13436

___

### verticesBuffer

• `Readonly` **verticesBuffer**: `Buffer`

To change mesh vertices, change its uvBuffer data and increment its _updateID.
Incrementing _updateID is optional because most of Mesh objects do it anyway.

**`Member`**

#### Inherited from

Mesh.verticesBuffer

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13443

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

Mesh.visible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13802

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

Mesh.worldAlpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13824

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

Mesh.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14021

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

Mesh.worldVisible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14086

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`Member`**

#### Inherited from

Mesh.x

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14007

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`Member`**

#### Inherited from

Mesh.y

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14014

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`Member`**

#### Inherited from

Mesh.zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14079

___

### BATCHABLE\_SIZE

▪ `Static` **BATCHABLE\_SIZE**: `number`

The maximum number of vertices to consider batchable. Generally, the complexity
of the geometry.

**`Memberof`**

PIXI.Mesh

**`Static`**

**`Member`**

BATCHABLE_SIZE

#### Inherited from

Mesh.BATCHABLE\_SIZE

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13540

## Accessors

### clipped

• `get` **clipped**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L151)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Overrides

Mesh.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L137)

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

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L142)

___

### style

• `get` **style**(): [`DDynamicTextStyle`](DDynamicTextStyle.md)

#### Returns

[`DDynamicTextStyle`](DDynamicTextStyle.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L155)

___

### text

• `get` **text**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L106)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L110)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Overrides

Mesh.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L122)

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

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L127)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Overrides

Mesh.\_calculateBounds

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:270](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L270)

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

node_modules/pixi.js/pixi.js.d.ts:13925

___

### \_render

▸ **_render**(`renderer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer?` | `Renderer` |

#### Returns

`void`

#### Overrides

Mesh.\_render

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L276)

___

### \_renderDefault

▸ **_renderDefault**(`renderer`): `void`

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

node_modules/pixi.js/pixi.js.d.ts:13493

___

### \_renderToBatch

▸ **_renderToBatch**(`renderer`): `void`

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

node_modules/pixi.js/pixi.js.d.ts:13499

___

### addChild

▸ **addChild**\<`TChildren`\>(`...children`): `TChildren`[``0``]

Adds one or more children to the container.

Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...children` | `TChildren` | The DisplayObject(s) to add to the container |

#### Returns

`TChildren`[``0``]

The first child that was added.

#### Inherited from

Mesh.addChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13585

___

### addChildAt

▸ **addChildAt**\<`T`\>(`child`, `index`): `T`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject` |

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

node_modules/pixi.js/pixi.js.d.ts:13593

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25521

▸ **addListener**(`event`, `fn`, `context?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

Mesh.calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13656

___

### calculateUvs

▸ **calculateUvs**(): `void`

Updates uv field based on from geometry uv's or batchUvs

#### Returns

`void`

#### Inherited from

Mesh.calculateUvs

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13507

___

### calculateVertices

▸ **calculateVertices**(): `void`

Updates vertexData field based on transform and vertices

#### Returns

`void`

#### Inherited from

Mesh.calculateVertices

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13503

___

### containerUpdateTransform

▸ **containerUpdateTransform**(): `void`

Container default updateTransform, does update children of container.
Will crash if there's no parent element.

#### Returns

`void`

**`Memberof`**

PIXI.Container#

**`Function`**

containerUpdateTransform

#### Inherited from

Mesh.containerUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13698

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | `IPointData` | the point to test |

#### Returns

`boolean`

the result of the test

#### Inherited from

Mesh.containsPoint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13521

___

### destroy

▸ **destroy**(`options?`): `void`

Destroys the Mesh object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Options parameter. A boolean will act as if all options have been set to that value |
| `options.children?` | `boolean` | if set to true, all the children will have their destroy method called as well. 'options' will be passed on to those calls. |

#### Returns

`void`

#### Inherited from

Mesh.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13530

___

### disableTempParent

▸ **disableTempParent**(`cacheParent`): `void`

Pair method for `enableTempParent`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheParent` | `DisplayObject` | actual parent of element |

#### Returns

`void`

#### Inherited from

Mesh.disableTempParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14000

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

#### Returns

`void`

**`Memberof`**

PIXI.DisplayObject#

**`Function`**

displayObjectUpdateTransform

#### Inherited from

Mesh.displayObjectUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14114

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

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

node_modules/pixi.js/pixi.js.d.ts:25441

___

### enableTempParent

▸ **enableTempParent**(): `DisplayObject`

Used in Renderer, cacheAsBitmap and other places where you call an `updateTransform` on root

```
const cacheParent = elem.enableTempParent();
elem.updateTransform();
elem.disableTempParent(cacheParent);
```

#### Returns

`DisplayObject`

current parent

#### Inherited from

Mesh.enableTempParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13995

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Mesh.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skipUpdate?` | `boolean` | Setting to `true` will stop the transforms of the scene graph from being updated. This means the calculation returned MAY be out of date BUT will give you a nice performance boost. |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

Mesh.getBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13935

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

node_modules/pixi.js/pixi.js.d.ts:13621

___

### getChildByName

▸ **getChildByName**(`name`, `deep?`): `DisplayObject`

Returns the display object in the container.

Recursive searches are done in a preorder traversal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |
| `deep?` | `boolean` | Whether to search recursively |

#### Returns

`DisplayObject`

The child with the specified name.

**`Method`**

getChildByName

**`Memberof`**

PIXI.Container#

#### Inherited from

Mesh.getChildByName

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13718

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

node_modules/pixi.js/pixi.js.d.ts:13607

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point?` | `Point` | The point to write the global value to. |
| `skipUpdate?` | `boolean` | Setting to true will stop the transforms of the scene graph from being updated. This means the calculation returned MAY be out of date BUT will give you a nice performance boost. |

#### Returns

`Point`

The updated point.

**`Method`**

getGlobalPosition

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Mesh.getGlobalPosition

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:14198

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`, `skipChildrenUpdate?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |
| `skipChildrenUpdate?` | `boolean` | Setting to `true` will stop re-calculation of children transforms, it was default behaviour of pixi 4.0-5.2 and caused many problems to users. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

Mesh.getLocalBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13665

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

node_modules/pixi.js/pixi.js.d.ts:25432

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

node_modules/pixi.js/pixi.js.d.ts:25424

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25534

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25530

▸ **on**(`event`, `fn`, `context?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

Overridable method that can be used by Container subclasses whenever the children array is modified

#### Returns

`void`

#### Inherited from

Mesh.onChildrenChange

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13576

___

### onStyleChange

▸ **onStyleChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L73)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25527

▸ **once**(`event`, `fn`, `context?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25517

___

### removeChild

▸ **removeChild**\<`TChildren`\>(`...children`): `TChildren`[``0``]

Removes one or more children from the container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...children` | `TChildren` | The DisplayObject(s) to remove |

#### Returns

`TChildren`[``0``]

The first child that was removed.

#### Inherited from

Mesh.removeChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13628

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

node_modules/pixi.js/pixi.js.d.ts:13635

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beginIndex?` | `number` | The beginning position. |
| `endIndex?` | `number` | The ending position. Default value is size of the container. |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

Mesh.removeChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13643

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25513

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

Mesh.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25515

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

node_modules/pixi.js/pixi.js.d.ts:13671

___

### renderAdvanced

▸ **renderAdvanced**(`renderer`): `void`

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

node_modules/pixi.js/pixi.js.d.ts:13678

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

node_modules/pixi.js/pixi.js.d.ts:13614

___

### setClippingDelta

▸ **setClippingDelta**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L264)

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

node_modules/pixi.js/pixi.js.d.ts:13963

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The X position |
| `y?` | `number` | The Y position |
| `scaleX?` | `number` | The X scale value |
| `scaleY?` | `number` | The Y scale value |
| `rotation?` | `number` | The rotation |
| `skewX?` | `number` | The X skew value |
| `skewY?` | `number` | The Y skew value |
| `pivotX?` | `number` | The X pivot value |
| `pivotY?` | `number` | The Y pivot value |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

Mesh.setTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13978

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

Mesh.sortChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13647

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

node_modules/pixi.js/pixi.js.d.ts:13600

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `Point`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPointData` | The world origin to calculate from. |
| `point?` | `Point` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform. |

#### Returns

`Point`

A point object representing the position of this object.

#### Inherited from

Mesh.toGlobal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13945

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `Point`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPointData` | The world origin to calculate from. |
| `from?` | `DisplayObject` | The DisplayObject to calculate the global position from. |
| `point?` | `Point` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform |

#### Returns

`Point`

A point object representing the position of this object

#### Inherited from

Mesh.toLocal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13956

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L159)

___

### updateClipping

▸ **updateClipping**(`style`, `modifier`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`DDynamicTextStyle`](DDynamicTextStyle.md) |
| `modifier` | [`DDynamicTextModifier`](../interfaces/DDynamicTextModifier.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L209)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

Mesh.updateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:13651

___

### update\_

▸ **update_**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dynamic-text.ts#L80)

___

### mixin

▸ **mixin**(`source`): `void`

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

node_modules/pixi.js/pixi.js.d.ts:9230
