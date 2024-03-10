[Winter Cardinal UI - v0.414.0](../index.md) / DDiagramLayer

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
- [\_boundsID](DDiagramLayer.md#_boundsid)
- [\_boundsRect](DDiagramLayer.md#_boundsrect)
- [\_buffers](DDiagramLayer.md#_buffers)
- [\_childrenId](DDiagramLayer.md#_childrenid)
- [\_childrenIdRendered](DDiagramLayer.md#_childrenidrendered)
- [\_destroyed](DDiagramLayer.md#_destroyed)
- [\_enabledFilters](DDiagramLayer.md#_enabledfilters)
- [\_fontAtlases](DDiagramLayer.md#_fontatlases)
- [\_lastSortedIndex](DDiagramLayer.md#_lastsortedindex)
- [\_localBounds](DDiagramLayer.md#_localbounds)
- [\_localBoundsRect](DDiagramLayer.md#_localboundsrect)
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
- [disableTempParent](DDiagramLayer.md#disabletempparent)
- [displayObjectUpdateTransform](DDiagramLayer.md#displayobjectupdatetransform)
- [doInitialize](DDiagramLayer.md#doinitialize)
- [doUpdate](DDiagramLayer.md#doupdate)
- [emit](DDiagramLayer.md#emit)
- [enableTempParent](DDiagramLayer.md#enabletempparent)
- [eventNames](DDiagramLayer.md#eventnames)
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
- [toAntialiasWeight](DDiagramLayer.md#toantialiasweight)
- [toDirty](DDiagramLayer.md#todirty)
- [toGlobal](DDiagramLayer.md#toglobal)
- [toLocal](DDiagramLayer.md#tolocal)
- [toPixelScale](DDiagramLayer.md#topixelscale)
- [toShapeScale](DDiagramLayer.md#toshapescale)
- [update](DDiagramLayer.md#update)
- [updateTransform](DDiagramLayer.md#updatetransform)
- [updateUuid](DDiagramLayer.md#updateuuid)
- [deserialize](DDiagramLayer.md#deserialize)
- [deserializeName](DDiagramLayer.md#deserializename)
- [mixin](DDiagramLayer.md#mixin)

## Constructors

### constructor

• **new DDiagramLayer**(`name`): [`DDiagramLayer`](DDiagramLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`DDiagramLayer`](DDiagramLayer.md)

#### Overrides

[EShapeContainer](EShapeContainer.md).[constructor](EShapeContainer.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L28)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_accessibleActive](EShapeContainer.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9051

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_accessibleDiv](EShapeContainer.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9057

___

### \_atlas

• `Protected` **\_atlas**: ``null`` \| [`DynamicAtlas`](DynamicAtlas.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_atlas](EShapeContainer.md#_atlas)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L21)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_bounds](EShapeContainer.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9173

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_boundsID](EShapeContainer.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9186

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_boundsRect](EShapeContainer.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9193

___

### \_buffers

• `Protected` **\_buffers**: [`EShapeBuffer`](EShapeBuffer.md)[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_buffers](EShapeContainer.md#_buffers)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L31)

___

### \_childrenId

• `Protected` **\_childrenId**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_childrenId](EShapeContainer.md#_childrenid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L18)

___

### \_childrenIdRendered

• `Protected` **\_childrenIdRendered**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_childrenIdRendered](EShapeContainer.md#_childrenidrendered)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L19)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_destroyed](EShapeContainer.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9214

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_enabledFilters](EShapeContainer.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9167

___

### \_fontAtlases

• `Protected` **\_fontAtlases**: [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_fontAtlases](EShapeContainer.md#_fontatlases)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L22)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_lastSortedIndex](EShapeContainer.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9136

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_localBounds](EShapeContainer.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9179

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_localBoundsRect](EShapeContainer.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9200

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_mask](EShapeContainer.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9207

___

### \_pixelScale

• `Protected` **\_pixelScale**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_pixelScale](EShapeContainer.md#_pixelscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L24)

___

### \_pixelScaleId

• `Protected` **\_pixelScaleId**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_pixelScaleId](EShapeContainer.md#_pixelscaleid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L25)

___

### \_shape

• `Protected` **\_shape**: [`EShape`](../interfaces/EShape.md)

#### Overrides

[EShapeContainer](EShapeContainer.md).[_shape](EShapeContainer.md#_shape)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L26)

___

### \_shapeRenderer

• `Protected` **\_shapeRenderer**: ``null`` \| [`EShapeRenderer`](EShapeRenderer.md) = `null`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shapeRenderer](EShapeContainer.md#_shaperenderer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L14)

___

### \_shapeScale

• `Protected` **\_shapeScale**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shapeScale](EShapeContainer.md#_shapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L26)

___

### \_shapeScaleId

• `Protected` **\_shapeScaleId**: `number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_shapeScaleId](EShapeContainer.md#_shapescaleid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L27)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_tempDisplayObjectParent](EShapeContainer.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9314

___

### \_work

• `Protected` **\_work**: `Point`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_work](EShapeContainer.md#_work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L29)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[EShapeContainer](EShapeContainer.md).[_zIndex](EShapeContainer.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9144

___

### accessible

• **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[accessible](EShapeContainer.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9030

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

[EShapeContainer](EShapeContainer.md).[accessibleChildren](EShapeContainer.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9084

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[accessibleHint](EShapeContainer.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9045

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

[EShapeContainer](EShapeContainer.md).[accessiblePointerEvents](EShapeContainer.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9075

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[EShapeContainer](EShapeContainer.md).[accessibleTitle](EShapeContainer.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9038

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

[EShapeContainer](EShapeContainer.md).[accessibleType](EShapeContainer.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9066

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[EShapeContainer](EShapeContainer.md).[alpha](EShapeContainer.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9097

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[angle](EShapeContainer.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9401

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

[EShapeContainer](EShapeContainer.md).[buttonMode](EShapeContainer.md#buttonmode)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9483

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

[EShapeContainer](EShapeContainer.md).[cacheAsBitmap](EShapeContainer.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9510

___

### children

• `Readonly` **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[children](EShapeContainer.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L16)

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

[EShapeContainer](EShapeContainer.md).[cursor](EShapeContainer.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9497

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`Member`**

PIXI.DisplayObject#filterArea

#### Inherited from

[EShapeContainer](EShapeContainer.md).[filterArea](EShapeContainer.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9153

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`Member`**

PIXI.DisplayObject#filters

#### Inherited from

[EShapeContainer](EShapeContainer.md).[filters](EShapeContainer.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9161

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

[EShapeContainer](EShapeContainer.md).[hitArea](EShapeContainer.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9471

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

[EShapeContainer](EShapeContainer.md).[interactive](EShapeContainer.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9459

___

### interactives

• **interactives**: [`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L25)

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[EShapeContainer](EShapeContainer.md).[isMask](EShapeContainer.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9224

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[EShapeContainer](EShapeContainer.md).[isSprite](EShapeContainer.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9219

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[localTransform](EShapeContainer.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9359

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

[EShapeContainer](EShapeContainer.md).[mask](EShapeContainer.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9437

___

### name

• **name**: `string`

The instance name of the object.

**`Memberof`**

PIXI.DisplayObject#

**`Member`**

name

#### Inherited from

[EShapeContainer](EShapeContainer.md).[name](EShapeContainer.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9517

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[EShapeContainer](EShapeContainer.md).[parent](EShapeContainer.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9121

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[pivot](EShapeContainer.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9380

___

### position

• **position**: `ObservablePoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[position](EShapeContainer.md#position)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9366

___

### reference

• **reference**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L24)

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`Member`**

PIXI.DisplayObject#renderable

#### Inherited from

[EShapeContainer](EShapeContainer.md).[renderable](EShapeContainer.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9115

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[rotation](EShapeContainer.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9394

___

### scale

• **scale**: `ObservablePoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[scale](EShapeContainer.md#scale)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9373

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[skew](EShapeContainer.md#skew)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9387

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Inherited from

[EShapeContainer](EShapeContainer.md).[transform](EShapeContainer.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9091

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

[EShapeContainer](EShapeContainer.md).[visible](EShapeContainer.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9106

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[EShapeContainer](EShapeContainer.md).[worldAlpha](EShapeContainer.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9128

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[worldTransform](EShapeContainer.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9352

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[worldVisible](EShapeContainer.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9417

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[x](EShapeContainer.md#x)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9338

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[y](EShapeContainer.md#y)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9345

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`Member`**

#### Inherited from

[EShapeContainer](EShapeContainer.md).[zIndex](EShapeContainer.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9410

## Accessors

### background

• `get` **background**(): [`DDiagramLayerBackground`](../interfaces/DDiagramLayerBackground.md)

#### Returns

[`DDiagramLayerBackground`](../interfaces/DDiagramLayerBackground.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L55)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L47)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L51)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L59)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L39)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L43)

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

node_modules/pixi.js/pixi.js.d.ts:9235

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

[EShapeContainer](EShapeContainer.md).[addListener](EShapeContainer.md#addlistener)

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

[EShapeContainer](EShapeContainer.md).[addListener](EShapeContainer.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

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

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L162)

___

### calculateBounds

▸ **calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[calculateBounds](EShapeContainer.md#calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L54)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L98)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[EShapeContainer](EShapeContainer.md).[destroy](EShapeContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L176)

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

[EShapeContainer](EShapeContainer.md).[disableTempParent](EShapeContainer.md#disabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9331

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

[EShapeContainer](EShapeContainer.md).[displayObjectUpdateTransform](EShapeContainer.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9445

___

### doInitialize

▸ **doInitialize**(`shapes`, `interactives`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `interactives` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L104)

___

### doUpdate

▸ **doUpdate**(`shapes`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L133)

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

[EShapeContainer](EShapeContainer.md).[emit](EShapeContainer.md#emit)

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

[EShapeContainer](EShapeContainer.md).[enableTempParent](EShapeContainer.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9326

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[eventNames](EShapeContainer.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L106)

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

[EShapeContainer](EShapeContainer.md).[getBounds](EShapeContainer.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9251

___

### getBuffers

▸ **getBuffers**(): [`EShapeBuffer`](EShapeBuffer.md)[]

#### Returns

[`EShapeBuffer`](EShapeBuffer.md)[]

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getBuffers](EShapeContainer.md#getbuffers)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L115)

___

### getFontAtlases

▸ **getFontAtlases**(): [`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Returns

[`DynamicSDFFontAtlases`](DynamicSDFFontAtlases.md)

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getFontAtlases](EShapeContainer.md#getfontatlases)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L102)

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

[EShapeContainer](EShapeContainer.md).[getGlobalPosition](EShapeContainer.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9529

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getLocalBounds](EShapeContainer.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9258

___

### getPixelScale

▸ **getPixelScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getPixelScale](EShapeContainer.md#getpixelscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L147)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[getShapeScale](EShapeContainer.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L133)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L155)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L174)

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

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L146)

___

### initialize

▸ **initialize**(`actionables`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionables` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L71)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[isDirty](EShapeContainer.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L66)

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

[EShapeContainer](EShapeContainer.md).[listeners](EShapeContainer.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newShape

▸ **newShape**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L63)

___

### off

▸ **off**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[off](EShapeContainer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25518

▸ **off**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[off](EShapeContainer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25520

___

### on

▸ **on**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[on](EShapeContainer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25507

▸ **on**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[on](EShapeContainer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25509

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[onChildTransformChange](EShapeContainer.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L58)

___

### once

▸ **once**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[once](EShapeContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25510

▸ **once**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[once](EShapeContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25512

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

[EShapeContainer](EShapeContainer.md).[removeAllListeners](EShapeContainer.md#removealllisteners)

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

[EShapeContainer](EShapeContainer.md).[removeAllListeners](EShapeContainer.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25517

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

[EShapeContainer](EShapeContainer.md).[removeListener](EShapeContainer.md#removelistener)

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

[EShapeContainer](EShapeContainer.md).[removeListener](EShapeContainer.md#removelistener)

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

#### Inherited from

[EShapeContainer](EShapeContainer.md).[render](EShapeContainer.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L70)

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

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L187)

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

node_modules/pixi.js/pixi.js.d.ts:9286

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

[EShapeContainer](EShapeContainer.md).[setTransform](EShapeContainer.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9301

___

### toAntialiasWeight

▸ **toAntialiasWeight**(`resolution`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[toAntialiasWeight](EShapeContainer.md#toantialiasweight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L151)

___

### toDirty

▸ **toDirty**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[toDirty](EShapeContainer.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L62)

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

[EShapeContainer](EShapeContainer.md).[toGlobal](EShapeContainer.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9268

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

[EShapeContainer](EShapeContainer.md).[toLocal](EShapeContainer.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9279

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

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L137)

___

### toShapeScale

▸ **toShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeContainer](EShapeContainer.md).[toShapeScale](EShapeContainer.md#toshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-container.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-container.ts#L119)

___

### update

▸ **update**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L129)

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

node_modules/pixi.js/pixi.js.d.ts:9241

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

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L169)

___

### deserialize

▸ **deserialize**(`serialized`, `manager`, `width`, `height`): [`DDiagramLayer`](DDiagramLayer.md)

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

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L222)

___

### deserializeName

▸ **deserializeName**(`target`, `manager`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` \| `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layer.ts:265](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-layer.ts#L265)

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

[EShapeContainer](EShapeContainer.md).[mixin](EShapeContainer.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
