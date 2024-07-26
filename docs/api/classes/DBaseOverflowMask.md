[Winter Cardinal UI - v0.442.0](../index.md) / DBaseOverflowMask

# Class: DBaseOverflowMask

## Hierarchy

- `Graphics`

  ↳ **`DBaseOverflowMask`**

## Implements

- [`DBaseReflowable`](../interfaces/DBaseReflowable.md)

## Table of contents

### Constructors

- [constructor](DBaseOverflowMask.md#constructor)

### Properties

- [\_accessibleActive](DBaseOverflowMask.md#_accessibleactive)
- [\_accessibleDiv](DBaseOverflowMask.md#_accessiblediv)
- [\_bounds](DBaseOverflowMask.md#_bounds)
- [\_boundsID](DBaseOverflowMask.md#_boundsid)
- [\_boundsRect](DBaseOverflowMask.md#_boundsrect)
- [\_cornderRadius](DBaseOverflowMask.md#_cornderradius)
- [\_cornerMask](DBaseOverflowMask.md#_cornermask)
- [\_destroyed](DBaseOverflowMask.md#_destroyed)
- [\_enabledFilters](DBaseOverflowMask.md#_enabledfilters)
- [\_fillStyle](DBaseOverflowMask.md#_fillstyle)
- [\_height](DBaseOverflowMask.md#_height)
- [\_holeMode](DBaseOverflowMask.md#_holemode)
- [\_isInitialized](DBaseOverflowMask.md#_isinitialized)
- [\_lastSortedIndex](DBaseOverflowMask.md#_lastsortedindex)
- [\_lineStyle](DBaseOverflowMask.md#_linestyle)
- [\_localBounds](DBaseOverflowMask.md#_localbounds)
- [\_localBoundsRect](DBaseOverflowMask.md#_localboundsrect)
- [\_mask](DBaseOverflowMask.md#_mask)
- [\_matrix](DBaseOverflowMask.md#_matrix)
- [\_tempDisplayObjectParent](DBaseOverflowMask.md#_tempdisplayobjectparent)
- [\_width](DBaseOverflowMask.md#_width)
- [\_zIndex](DBaseOverflowMask.md#_zindex)
- [accessible](DBaseOverflowMask.md#accessible)
- [accessibleChildren](DBaseOverflowMask.md#accessiblechildren)
- [accessibleHint](DBaseOverflowMask.md#accessiblehint)
- [accessiblePointerEvents](DBaseOverflowMask.md#accessiblepointerevents)
- [accessibleTitle](DBaseOverflowMask.md#accessibletitle)
- [accessibleType](DBaseOverflowMask.md#accessibletype)
- [alpha](DBaseOverflowMask.md#alpha)
- [angle](DBaseOverflowMask.md#angle)
- [batchDirty](DBaseOverflowMask.md#batchdirty)
- [batchTint](DBaseOverflowMask.md#batchtint)
- [batches](DBaseOverflowMask.md#batches)
- [blendMode](DBaseOverflowMask.md#blendmode)
- [buttonMode](DBaseOverflowMask.md#buttonmode)
- [cacheAsBitmap](DBaseOverflowMask.md#cacheasbitmap)
- [children](DBaseOverflowMask.md#children)
- [currentPath](DBaseOverflowMask.md#currentpath)
- [cursor](DBaseOverflowMask.md#cursor)
- [fill](DBaseOverflowMask.md#fill)
- [filterArea](DBaseOverflowMask.md#filterarea)
- [filters](DBaseOverflowMask.md#filters)
- [geometry](DBaseOverflowMask.md#geometry)
- [height](DBaseOverflowMask.md#height)
- [hitArea](DBaseOverflowMask.md#hitarea)
- [interactive](DBaseOverflowMask.md#interactive)
- [interactiveChildren](DBaseOverflowMask.md#interactivechildren)
- [isMask](DBaseOverflowMask.md#ismask)
- [isSprite](DBaseOverflowMask.md#issprite)
- [line](DBaseOverflowMask.md#line)
- [localTransform](DBaseOverflowMask.md#localtransform)
- [mask](DBaseOverflowMask.md#mask)
- [name](DBaseOverflowMask.md#name)
- [parent](DBaseOverflowMask.md#parent)
- [pivot](DBaseOverflowMask.md#pivot)
- [pluginName](DBaseOverflowMask.md#pluginname)
- [position](DBaseOverflowMask.md#position)
- [renderable](DBaseOverflowMask.md#renderable)
- [rotation](DBaseOverflowMask.md#rotation)
- [scale](DBaseOverflowMask.md#scale)
- [shader](DBaseOverflowMask.md#shader)
- [skew](DBaseOverflowMask.md#skew)
- [sortDirty](DBaseOverflowMask.md#sortdirty)
- [sortableChildren](DBaseOverflowMask.md#sortablechildren)
- [state](DBaseOverflowMask.md#state)
- [tint](DBaseOverflowMask.md#tint)
- [transform](DBaseOverflowMask.md#transform)
- [vertexData](DBaseOverflowMask.md#vertexdata)
- [visible](DBaseOverflowMask.md#visible)
- [width](DBaseOverflowMask.md#width)
- [worldAlpha](DBaseOverflowMask.md#worldalpha)
- [worldTransform](DBaseOverflowMask.md#worldtransform)
- [worldVisible](DBaseOverflowMask.md#worldvisible)
- [x](DBaseOverflowMask.md#x)
- [y](DBaseOverflowMask.md#y)
- [zIndex](DBaseOverflowMask.md#zindex)

### Methods

- [\_calculateBounds](DBaseOverflowMask.md#_calculatebounds)
- [\_initCurve](DBaseOverflowMask.md#_initcurve)
- [\_populateBatches](DBaseOverflowMask.md#_populatebatches)
- [\_recursivePostUpdateTransform](DBaseOverflowMask.md#_recursivepostupdatetransform)
- [\_render](DBaseOverflowMask.md#_render)
- [\_renderBatched](DBaseOverflowMask.md#_renderbatched)
- [\_renderDirect](DBaseOverflowMask.md#_renderdirect)
- [\_renderDrawCallDirect](DBaseOverflowMask.md#_renderdrawcalldirect)
- [\_resolveDirectShader](DBaseOverflowMask.md#_resolvedirectshader)
- [addChild](DBaseOverflowMask.md#addchild)
- [addChildAt](DBaseOverflowMask.md#addchildat)
- [addListener](DBaseOverflowMask.md#addlistener)
- [arc](DBaseOverflowMask.md#arc)
- [arcTo](DBaseOverflowMask.md#arcto)
- [beginFill](DBaseOverflowMask.md#beginfill)
- [beginHole](DBaseOverflowMask.md#beginhole)
- [beginTextureFill](DBaseOverflowMask.md#begintexturefill)
- [bezierCurveTo](DBaseOverflowMask.md#beziercurveto)
- [calculateBounds](DBaseOverflowMask.md#calculatebounds)
- [calculateTints](DBaseOverflowMask.md#calculatetints)
- [calculateVertices](DBaseOverflowMask.md#calculatevertices)
- [clear](DBaseOverflowMask.md#clear)
- [clone](DBaseOverflowMask.md#clone)
- [closePath](DBaseOverflowMask.md#closepath)
- [containerUpdateTransform](DBaseOverflowMask.md#containerupdatetransform)
- [containsPoint](DBaseOverflowMask.md#containspoint)
- [destroy](DBaseOverflowMask.md#destroy)
- [disableTempParent](DBaseOverflowMask.md#disabletempparent)
- [displayObjectUpdateTransform](DBaseOverflowMask.md#displayobjectupdatetransform)
- [drawChamferRect](DBaseOverflowMask.md#drawchamferrect)
- [drawCircle](DBaseOverflowMask.md#drawcircle)
- [drawEllipse](DBaseOverflowMask.md#drawellipse)
- [drawFilletRect](DBaseOverflowMask.md#drawfilletrect)
- [drawPolygon](DBaseOverflowMask.md#drawpolygon)
- [drawRect](DBaseOverflowMask.md#drawrect)
- [drawRegularPolygon](DBaseOverflowMask.md#drawregularpolygon)
- [drawRoundedRect](DBaseOverflowMask.md#drawroundedrect)
- [drawShape](DBaseOverflowMask.md#drawshape)
- [drawStar](DBaseOverflowMask.md#drawstar)
- [drawTorus](DBaseOverflowMask.md#drawtorus)
- [emit](DBaseOverflowMask.md#emit)
- [enableTempParent](DBaseOverflowMask.md#enabletempparent)
- [endFill](DBaseOverflowMask.md#endfill)
- [endHole](DBaseOverflowMask.md#endhole)
- [eventNames](DBaseOverflowMask.md#eventnames)
- [finishPoly](DBaseOverflowMask.md#finishpoly)
- [getBounds](DBaseOverflowMask.md#getbounds)
- [getChildAt](DBaseOverflowMask.md#getchildat)
- [getChildByName](DBaseOverflowMask.md#getchildbyname)
- [getChildIndex](DBaseOverflowMask.md#getchildindex)
- [getGlobalPosition](DBaseOverflowMask.md#getglobalposition)
- [getLocalBounds](DBaseOverflowMask.md#getlocalbounds)
- [isFastRect](DBaseOverflowMask.md#isfastrect)
- [lineStyle](DBaseOverflowMask.md#linestyle)
- [lineTextureStyle](DBaseOverflowMask.md#linetexturestyle)
- [lineTo](DBaseOverflowMask.md#lineto)
- [listenerCount](DBaseOverflowMask.md#listenercount)
- [listeners](DBaseOverflowMask.md#listeners)
- [moveTo](DBaseOverflowMask.md#moveto)
- [off](DBaseOverflowMask.md#off)
- [on](DBaseOverflowMask.md#on)
- [onChildrenChange](DBaseOverflowMask.md#onchildrenchange)
- [onReflow](DBaseOverflowMask.md#onreflow)
- [once](DBaseOverflowMask.md#once)
- [quadraticCurveTo](DBaseOverflowMask.md#quadraticcurveto)
- [removeAllListeners](DBaseOverflowMask.md#removealllisteners)
- [removeChild](DBaseOverflowMask.md#removechild)
- [removeChildAt](DBaseOverflowMask.md#removechildat)
- [removeChildren](DBaseOverflowMask.md#removechildren)
- [removeListener](DBaseOverflowMask.md#removelistener)
- [render](DBaseOverflowMask.md#render)
- [renderAdvanced](DBaseOverflowMask.md#renderadvanced)
- [setChildIndex](DBaseOverflowMask.md#setchildindex)
- [setMatrix](DBaseOverflowMask.md#setmatrix)
- [setParent](DBaseOverflowMask.md#setparent)
- [setTransform](DBaseOverflowMask.md#settransform)
- [sortChildren](DBaseOverflowMask.md#sortchildren)
- [startPoly](DBaseOverflowMask.md#startpoly)
- [swapChildren](DBaseOverflowMask.md#swapchildren)
- [toGlobal](DBaseOverflowMask.md#toglobal)
- [toLocal](DBaseOverflowMask.md#tolocal)
- [updateTransform](DBaseOverflowMask.md#updatetransform)
- [mixin](DBaseOverflowMask.md#mixin)

## Constructors

### constructor

• **new DBaseOverflowMask**(`parent`): [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

[`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Overrides

Graphics.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts#L18)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

Graphics.\_accessibleActive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10383

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

Graphics.\_accessibleDiv

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10389

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

Graphics.\_bounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10505

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

Graphics.\_boundsID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10518

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

Graphics.\_boundsRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10525

___

### \_cornderRadius

• `Protected` **\_cornderRadius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts#L15)

___

### \_cornerMask

• `Protected` **\_cornerMask**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts#L16)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

Graphics.\_destroyed

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10546

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

Graphics.\_enabledFilters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10499

___

### \_fillStyle

• `Protected` **\_fillStyle**: `FillStyle`

Current fill style

**`Member`**

PIXI.Graphics#_fillStyle

#### Inherited from

Graphics.\_fillStyle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9633

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts#L14)

___

### \_holeMode

• `Protected` **\_holeMode**: `boolean`

Current hole mode is enabled.

**`Member`**

PIXI.Graphics#_holeMode

**`Default`**

```ts
false
@protected
```

#### Inherited from

Graphics.\_holeMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9655

___

### \_isInitialized

• `Protected` **\_isInitialized**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts#L12)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

Graphics.\_lastSortedIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10468

___

### \_lineStyle

• `Protected` **\_lineStyle**: `LineStyle`

Current line style

**`Member`**

PIXI.Graphics#_lineStyle

#### Inherited from

Graphics.\_lineStyle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9640

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

Graphics.\_localBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10511

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

Graphics.\_localBoundsRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10532

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

Graphics.\_mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10539

___

### \_matrix

• `Protected` **\_matrix**: `Matrix`

Current shape transform matrix.

**`Member`**

PIXI.Graphics#_matrix

#### Inherited from

Graphics.\_matrix

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9647

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

Graphics.\_tempDisplayObjectParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10619

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts#L13)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

Graphics.\_zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10476

___

### accessible

• **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Graphics.accessible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10362

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

Graphics.accessibleChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10416

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Graphics.accessibleHint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10377

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

Graphics.accessiblePointerEvents

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10407

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

Graphics.accessibleTitle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10370

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

Graphics.accessibleType

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10398

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

Graphics.alpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10429

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

Graphics.angle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10706

___

### batchDirty

• `Protected` **batchDirty**: `number`

Update dirty for limiting calculating batches.

**`Member`**

PIXI.Graphics#batchDirty

**`Default`**

```ts
-1
```

#### Inherited from

Graphics.batchDirty

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9698

___

### batchTint

• `Protected` **batchTint**: `number`

Update dirty for limiting calculating tints for batches.

**`Member`**

PIXI.Graphics#batchTint

**`Default`**

```ts
-1
```

#### Inherited from

Graphics.batchTint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9690

___

### batches

• `Protected` **batches**: `any`[]

A collections of batches! These can be drawn by the renderer batch system.

**`Member`**

PIXI.Graphics#batches

#### Inherited from

Graphics.batches

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9682

___

### blendMode

• **blendMode**: `number`

The blend mode to be applied to the graphic shape. Apply a value of
`PIXI.BLEND_MODES.NORMAL` to reset the blend mode.

**`Member`**

**`Default`**

```ts
PIXI.BLEND_MODES.NORMAL;
```

**`See`**

PIXI.BLEND_MODES

#### Inherited from

Graphics.blendMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9737

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

Graphics.buttonMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10788

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
This is useful if your graphics element does not change often, as it will speed up the rendering
of the object in exchange for taking up texture memory. It is also useful if you need the graphics
object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
you are constantly redrawing the graphics element.

**`Name`**

cacheAsBitmap

**`Member`**

**`Memberof`**

PIXI.Graphics#

**`Default`**

```ts
false
```

#### Inherited from

Graphics.cacheAsBitmap

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9675

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

Graphics.children

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10183

___

### currentPath

• `Protected` **currentPath**: `Polygon`

Current path

**`Member`**

PIXI.Graphics#currentPath

#### Inherited from

Graphics.currentPath

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9662

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

Graphics.cursor

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10802

___

### fill

• `Readonly` **fill**: `FillStyle`

The current fill style.

**`Member`**

#### Inherited from

Graphics.fill

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9752

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`Member`**

PIXI.DisplayObject#filterArea

#### Inherited from

Graphics.filterArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10485

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`Member`**

PIXI.DisplayObject#filters

#### Inherited from

Graphics.filters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10493

___

### geometry

• `Readonly` **geometry**: `GraphicsGeometry`

Includes vertex positions, face indices, normals, colors, UVs, and
custom attributes within buffers, reducing the cost of passing all
this data to the GPU. Can be shared between multiple Mesh or Graphics objects.

**`Member`**

#### Inherited from

Graphics.geometry

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9721

___

### height

• **height**: `number`

The height of the Container, setting this will actually modify the scale to achieve the value set

**`Member`**

#### Inherited from

Graphics.height

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10326

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

Graphics.hitArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10776

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

Graphics.interactive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10764

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`Member`**

**`Memberof`**

PIXI.Container#

#### Inherited from

Graphics.interactiveChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10342

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

Graphics.isMask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10556

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

Graphics.isSprite

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10551

___

### line

• `Readonly` **line**: `LineStyle`

The current line style.

**`Member`**

#### Inherited from

Graphics.line

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9759

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

Graphics.localTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10664

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

Graphics.mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10742

___

### name

• **name**: `string`

The instance name of the object.

**`Memberof`**

PIXI.DisplayObject#

**`Member`**

name

#### Inherited from

Graphics.name

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10809

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

Graphics.parent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10453

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

Graphics.pivot

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10685

___

### pluginName

• **pluginName**: `string`

Renderer plugin for batching

**`Member`**

PIXI.Graphics#pluginName

**`Default`**

```ts
'batch'
```

#### Inherited from

Graphics.pluginName

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9712

___

### position

• **position**: `ObservablePoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

Graphics.position

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10671

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`Member`**

PIXI.DisplayObject#renderable

#### Inherited from

Graphics.renderable

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10447

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

Graphics.rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10699

___

### scale

• **scale**: `ObservablePoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

Graphics.scale

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10678

___

### shader

• **shader**: `Shader`

Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
Can be shared between multiple Graphics objects.

**`Member`**

PIXI.Graphics#shader

#### Inherited from

Graphics.shader

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9619

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

Graphics.skew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10692

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

Graphics.sortDirty

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10206

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

Graphics.sortableChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10199

___

### state

• **state**: `State`

Represents the WebGL state the Graphics required to render, excludes shader and geometry. E.g.,
blend mode, culling, depth testing, direction of rendering triangles, backface, etc.

**`Member`**

PIXI.Graphics#state

#### Inherited from

Graphics.state

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9626

___

### tint

• **tint**: `number`

The tint applied to the graphic shape. This is a hex value. A value of
0xFFFFFF will remove any tint effect.

**`Member`**

**`Default`**

```ts
0xFFFFFF
```

#### Inherited from

Graphics.tint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9745

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Inherited from

Graphics.transform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10423

___

### vertexData

• `Protected` **vertexData**: `Float32Array`

Copy of the object vertex data.

**`Member`**

PIXI.Graphics#vertexData

#### Inherited from

Graphics.vertexData

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9705

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

Graphics.visible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10438

___

### width

• **width**: `number`

The width of the Container, setting this will actually modify the scale to achieve the value set

**`Member`**

#### Inherited from

Graphics.width

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10320

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

Graphics.worldAlpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10460

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

Graphics.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10657

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

Graphics.worldVisible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10722

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`Member`**

#### Inherited from

Graphics.x

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10643

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`Member`**

#### Inherited from

Graphics.y

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10650

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`Member`**

#### Inherited from

Graphics.zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10715

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

Retrieves the bounds of the graphic shape as a rectangle object

#### Returns

`void`

#### Inherited from

Graphics.\_calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10057

___

### \_initCurve

▸ **_initCurve**(`x?`, `y?`): `void`

Initialize the curve

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

`void`

#### Inherited from

Graphics.\_initCurve

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9849

___

### \_populateBatches

▸ **_populateBatches**(): `void`

Populating batches for rendering

#### Returns

`void`

#### Inherited from

Graphics.\_populateBatches

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10023

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

Graphics.\_recursivePostUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10561

___

### \_render

▸ **_render**(`renderer`): `void`

Renders the object using the WebGL renderer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

Graphics.\_render

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10017

___

### \_renderBatched

▸ **_renderBatched**(`renderer`): `void`

Renders the batches using the BathedRenderer plugin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

Graphics.\_renderBatched

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10030

___

### \_renderDirect

▸ **_renderDirect**(`renderer`): `void`

Renders the graphics direct

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

Graphics.\_renderDirect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10037

___

### \_renderDrawCallDirect

▸ **_renderDrawCallDirect**(`renderer`, `drawCall`): `void`

Renders specific DrawCall

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |
| `drawCall` | `BatchDrawCall` |

#### Returns

`void`

#### Inherited from

Graphics.\_renderDrawCallDirect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10044

___

### \_resolveDirectShader

▸ **_resolveDirectShader**(`renderer`): `void`

Resolves shader for direct rendering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

Graphics.\_resolveDirectShader

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10051

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

Graphics.addChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10221

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

Graphics.addChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10229

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

Graphics.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25521

▸ **addListener**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

Graphics.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### arc

▸ **arc**(`cx`, `cy`, `radius`, `startAngle`, `endAngle`, `anticlockwise?`): `Graphics`

The arc method creates an arc/curve (used to create circles, or parts of circles).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cx` | `number` | The x-coordinate of the center of the circle |
| `cy` | `number` | The y-coordinate of the center of the circle |
| `radius` | `number` | The radius of the circle |
| `startAngle` | `number` | The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle) |
| `endAngle` | `number` | The ending angle, in radians |
| `anticlockwise?` | `boolean` | Specifies whether the drawing should be counter-clockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise. |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.arc

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9900

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `Graphics`

The arcTo() method creates an arc/curve between two tangents on the canvas.

"borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x1` | `number` | The x-coordinate of the first tangent point of the arc |
| `y1` | `number` | The y-coordinate of the first tangent point of the arc |
| `x2` | `number` | The x-coordinate of the end of the arc |
| `y2` | `number` | The y-coordinate of the end of the arc |
| `radius` | `number` | The radius of the arc |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.arcTo

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9885

___

### beginFill

▸ **beginFill**(`color?`, `alpha?`): `Graphics`

Specifies a simple one-color fill that subsequent calls to other Graphics methods
(such as lineTo() or drawCircle()) use when drawing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color?` | `number` | the color of the fill |
| `alpha?` | `number` | the alpha of the fill |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.beginFill

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9909

___

### beginHole

▸ **beginHole**(): `Graphics`

Begin adding holes to the last draw shape
IMPORTANT: holes must be fully inside a shape to work
Also weirdness ensues if holes overlap!
Ellipses, Circles, Rectangles and Rounded Rectangles cannot be holes or host for holes in CanvasRenderer,
please use `moveTo` `lineTo`, `quadraticCurveTo` if you rely on pixi-legacy bundle.

#### Returns

`Graphics`

Returns itself.

#### Inherited from

Graphics.beginHole

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10097

___

### beginTextureFill

▸ **beginTextureFill**(`options?`): `Graphics`

Begin the texture fill

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Object object. |
| `options.alpha?` | `number` | Alpha of fill |
| `options.color?` | `number` | Background to fill behind texture |
| `options.matrix?` | `Matrix` | Transform matrix |
| `options.texture?` | `Texture` | Texture to fill |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.beginTextureFill

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9920

___

### bezierCurveTo

▸ **bezierCurveTo**(`cpX`, `cpY`, `cpX2`, `cpY2`, `toX`, `toY`): `Graphics`

Calculate the points for a bezier curve and then draws it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cpX` | `number` | Control point x |
| `cpY` | `number` | Control point y |
| `cpX2` | `number` | Second Control point x |
| `cpY2` | `number` | Second Control point y |
| `toX` | `number` | Destination point x |
| `toY` | `number` | Destination point y |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.bezierCurveTo

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9872

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

Graphics.calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10292

___

### calculateTints

▸ **calculateTints**(): `void`

Recalcuate the tint by applying tin to batches using Graphics tint.

#### Returns

`void`

#### Inherited from

Graphics.calculateTints

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10069

___

### calculateVertices

▸ **calculateVertices**(): `void`

If there's a transform update or a change to the shape of the
geometry, recaculate the vertices.

#### Returns

`void`

#### Inherited from

Graphics.calculateVertices

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10075

___

### clear

▸ **clear**(): `Graphics`

Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.clear

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10003

___

### clone

▸ **clone**(): `Graphics`

Creates a new Graphics object with the same values as this one.
Note that only the geometry of the object is cloned, not its transform (position,scale,etc)

#### Returns

`Graphics`

A clone of the graphics object

#### Inherited from

Graphics.clone

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9728

___

### closePath

▸ **closePath**(): `Graphics`

Closes the current path.

#### Returns

`Graphics`

Returns itself.

#### Inherited from

Graphics.closePath

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10081

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

Graphics.containerUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10334

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

Tests if a point is inside this graphics object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | `IPointData` | the point to test |

#### Returns

`boolean`

the result of the test

#### Inherited from

Graphics.containsPoint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10064

___

### destroy

▸ **destroy**(`options?`): `void`

Destroys the Graphics object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Options parameter. A boolean will act as if all options have been set to that value |
| `options.baseTexture?` | `boolean` | Only used for child Sprites if options.children is set to true Should it destroy the base texture of the child sprite |
| `options.children?` | `boolean` | if set to true, all the children will have their destroy method called as well. 'options' will be passed on to those calls. |
| `options.texture?` | `boolean` | Only used for child Sprites if options.children is set to true Should it destroy the texture of the child sprite |

#### Returns

`void`

#### Inherited from

Graphics.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10115

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

Graphics.disableTempParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10636

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

Graphics.displayObjectUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10750

___

### drawChamferRect

▸ **drawChamferRect**(`x`, `y`, `width`, `height`, `chamfer`): `Graphics`

Draw Rectangle with chamfer corners.

_Note: Only available with **@pixi/graphics-extras**._

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Upper left corner of rect |
| `y` | `number` | Upper right corner of rect |
| `width` | `number` | Width of rect |
| `height` | `number` | Height of rect |
| `chamfer` | `number` | accept negative or positive values |

#### Returns

`Graphics`

Returns self.

**`Method`**

PIXI.Graphics#drawChamferRect

#### Inherited from

Graphics.drawChamferRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10133

___

### drawCircle

▸ **drawCircle**(`x`, `y`, `radius`): `Graphics`

Draws a circle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the center of the circle |
| `y` | `number` | The Y coordinate of the center of the circle |
| `radius` | `number` | The radius of the circle |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.drawCircle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9961

___

### drawEllipse

▸ **drawEllipse**(`x`, `y`, `width`, `height`): `Graphics`

Draws an ellipse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the center of the ellipse |
| `y` | `number` | The Y coordinate of the center of the ellipse |
| `width` | `number` | The half width of the ellipse |
| `height` | `number` | The half height of the ellipse |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.drawEllipse

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9971

___

### drawFilletRect

▸ **drawFilletRect**(`x`, `y`, `width`, `height`, `fillet`): `Graphics`

Draw Rectangle with fillet corners.

_Note: Only available with **@pixi/graphics-extras**._

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Upper left corner of rect |
| `y` | `number` | Upper right corner of rect |
| `width` | `number` | Width of rect |
| `height` | `number` | Height of rect |
| `fillet` | `number` | non-zero real number, size of corner cutout |

#### Returns

`Graphics`

Returns self.

**`Method`**

PIXI.Graphics#drawFilletRect

#### Inherited from

Graphics.drawFilletRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10147

___

### drawPolygon

▸ **drawPolygon**(`...path`): `Graphics`

Draws a polygon using the given path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...path` | (`number`[] \| `Polygon` \| `Point`[])[] | The path data used to construct the polygon. |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.drawPolygon

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9978

___

### drawRect

▸ **drawRect**(`x`, `y`, `width`, `height`): `Graphics`

Draws a rectangle shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coord of the top-left of the rectangle |
| `y` | `number` | The Y coord of the top-left of the rectangle |
| `width` | `number` | The width of the rectangle |
| `height` | `number` | The height of the rectangle |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.drawRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9941

___

### drawRegularPolygon

▸ **drawRegularPolygon**(`x`, `y`, `radius`, `sides`, `rotation`): `Graphics`

Draw a regular polygon where all sides are the same length.

_Note: Only available with **@pixi/graphics-extras**._

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X position |
| `y` | `number` | Y position |
| `radius` | `number` | Polygon radius |
| `sides` | `number` | Minimum value is 3 |
| `rotation` | `number` | Starting rotation values in radians.. |

#### Returns

`Graphics`

**`Method`**

PIXI.Graphics#drawRegularPolygon

#### Inherited from

Graphics.drawRegularPolygon

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10161

___

### drawRoundedRect

▸ **drawRoundedRect**(`x`, `y`, `width`, `height`, `radius`): `Graphics`

Draw a rectangle shape with rounded/beveled corners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coord of the top-left of the rectangle |
| `y` | `number` | The Y coord of the top-left of the rectangle |
| `width` | `number` | The width of the rectangle |
| `height` | `number` | The height of the rectangle |
| `radius` | `number` | Radius of the rectangle corners |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.drawRoundedRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9952

___

### drawShape

▸ **drawShape**(`shape`): `Graphics`

Draw any shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | `Rectangle` \| `Polygon` \| `Circle` \| `Ellipse` \| `RoundedRectangle` | Shape to draw |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.drawShape

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9985

___

### drawStar

▸ **drawStar**(`x`, `y`, `points`, `radius`, `innerRadius?`, `rotation?`): `Graphics`

Draw a star shape with an arbitrary number of points.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Center X position of the star |
| `y` | `number` | Center Y position of the star |
| `points` | `number` | The number of points of the star, must be > 1 |
| `radius` | `number` | The outer radius of the star |
| `innerRadius?` | `number` | The inner radius between points, default half `radius` |
| `rotation?` | `number` | The rotation of the star in radians, where 0 is vertical |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.drawStar

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9997

___

### drawTorus

▸ **drawTorus**(`x`, `y`, `innerRadius`, `outerRadius`, `startArc?`, `endArc?`): `Graphics`

Draw a torus shape, like a donut. Can be used for something like a circle loader.

_Note: Only available with **@pixi/graphics-extras**._

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X position |
| `y` | `number` | Y position |
| `innerRadius` | `number` | Inner circle radius |
| `outerRadius` | `number` | Outer circle radius |
| `startArc?` | `number` | Where to begin sweep, in radians, 0.0 = to the right |
| `endArc?` | `number` | Where to end sweep, in radians |

#### Returns

`Graphics`

**`Method`**

PIXI.Graphics#drawTorus

#### Inherited from

Graphics.drawTorus

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10176

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

Graphics.emit

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

Graphics.enableTempParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10631

___

### endFill

▸ **endFill**(): `Graphics`

Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.endFill

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9931

___

### endHole

▸ **endHole**(): `Graphics`

End adding holes to the last draw shape

#### Returns

`Graphics`

Returns itself.

#### Inherited from

Graphics.endHole

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10102

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

Graphics.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### finishPoly

▸ **finishPoly**(): `void`

Finish the polygon object.

#### Returns

`void`

#### Inherited from

Graphics.finishPoly

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9824

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

Graphics.getBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10571

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

Graphics.getChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10257

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

Graphics.getChildByName

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10354

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

Graphics.getChildIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10243

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

Graphics.getGlobalPosition

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10821

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

Graphics.getLocalBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10301

___

### isFastRect

▸ **isFastRect**(): `boolean`

True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
masked with gl.scissor.

#### Returns

`boolean`

True if only 1 rect.

#### Inherited from

Graphics.isFastRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10010

___

### lineStyle

▸ **lineStyle**(`width?`, `color?`, `alpha?`, `alignment?`, `native?`): `Graphics`

Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
method or the drawCircle() method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width?` | `number` | width of the line to draw, will update the objects stored style |
| `color?` | `number` | color of the line to draw, will update the objects stored style |
| `alpha?` | `number` | alpha of the line to draw, will update the objects stored style |
| `alignment?` | `number` | alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter) |
| `native?` | `boolean` | If true the lines will be draw using LINES instead of TRIANGLE_STRIP |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

**`Method`**

PIXI.Graphics#lineStyle

#### Inherited from

Graphics.lineStyle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9772

▸ **lineStyle**(`width?`, `color?`, `alpha?`, `alignment?`, `native?`): `Graphics`

Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
method or the drawCircle() method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width?` | `number` | width of the line to draw, will update the objects stored style |
| `color?` | `number` | color of the line to draw, will update the objects stored style |
| `alpha?` | `number` | alpha of the line to draw, will update the objects stored style |
| `alignment?` | `number` | alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter) |
| `native?` | `boolean` | If true the lines will be draw using LINES instead of TRIANGLE_STRIP |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

**`Method`**

PIXI.Graphics#lineStyle

#### Inherited from

Graphics.lineStyle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9785

___

### lineTextureStyle

▸ **lineTextureStyle**(`options?`): `Graphics`

Like line style but support texture for line fill.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Collection of options for setting line style. |
| `options.alignment?` | `number` | alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter) |
| `options.alpha?` | `number` | alpha of the line to draw, will update the objects stored style |
| `options.cap?` | `LINE_CAP` | line cap style |
| `options.color?` | `number` | color of the line to draw, will update the objects stored style. Default 0xFFFFFF if texture present. |
| `options.join?` | `LINE_JOIN` | line join style |
| `options.matrix?` | `Matrix` | Texture matrix to transform texture |
| `options.miterLimit?` | `number` | miter limit ratio |
| `options.native?` | `boolean` | If true the lines will be draw using LINES instead of TRIANGLE_STRIP |
| `options.texture?` | `Texture` | Texture to use |
| `options.width?` | `number` | width of the line to draw, will update the objects stored style |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.lineTextureStyle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9803

___

### lineTo

▸ **lineTo**(`x`, `y`): `Graphics`

Draws a line using the current line style from the current drawing position to (x, y);
The current drawing position is then set to (x, y).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | the X coordinate to draw to |
| `y` | `number` | the Y coordinate to draw to |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.lineTo

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9841

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

Graphics.listenerCount

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

Graphics.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### moveTo

▸ **moveTo**(`x`, `y`): `Graphics`

Moves the current drawing position to x, y.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | the X coordinate to move to |
| `y` | `number` | the Y coordinate to move to |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.moveTo

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9832

___

### off

▸ **off**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

Graphics.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25534

___

### on

▸ **on**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

Graphics.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25530

▸ **on**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

Graphics.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

Overridable method that can be used by Container subclasses whenever the children array is modified

#### Returns

`void`

#### Inherited from

Graphics.onChildrenChange

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10212

___

### onReflow

▸ **onReflow**(`base`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Implementation of

[DBaseReflowable](../interfaces/DBaseReflowable.md).[onReflow](../interfaces/DBaseReflowable.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts#L34)

___

### once

▸ **once**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

Graphics.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25527

▸ **once**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

Graphics.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`cpX`, `cpY`, `toX`, `toY`): `Graphics`

Calculate the points for a quadratic bezier curve and then draws it.
Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cpX` | `number` | Control point x |
| `cpY` | `number` | Control point y |
| `toX` | `number` | Destination point x |
| `toY` | `number` | Destination point y |

#### Returns

`Graphics`

This Graphics object. Good for chaining method calls

#### Inherited from

Graphics.quadraticCurveTo

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9860

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

`this`

#### Inherited from

Graphics.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

`this`

#### Inherited from

Graphics.removeAllListeners

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

Graphics.removeChild

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10264

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

Graphics.removeChildAt

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10271

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

Graphics.removeChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10279

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

Graphics.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25513

▸ **removeListener**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

Graphics.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25515

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

Graphics.render

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-overflow-mask.ts#L29)

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

Graphics.renderAdvanced

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10314

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

Graphics.setChildIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10250

___

### setMatrix

▸ **setMatrix**(`matrix`): `Graphics`

Apply a matrix to the positional data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `Matrix` | Matrix to use for transform current shape. |

#### Returns

`Graphics`

Returns itself.

#### Inherited from

Graphics.setMatrix

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10088

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

Graphics.setParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10599

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

Graphics.setTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10614

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

Graphics.sortChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10283

___

### startPoly

▸ **startPoly**(): `void`

Start a polygon object internally

#### Returns

`void`

#### Inherited from

Graphics.startPoly

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9819

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

Graphics.swapChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10236

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

Graphics.toGlobal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10581

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

Graphics.toLocal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10592

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

Graphics.updateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:10287

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

Graphics.mixin

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
