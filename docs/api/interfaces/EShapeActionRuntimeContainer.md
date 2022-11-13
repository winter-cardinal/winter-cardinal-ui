[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionRuntimeContainer

# Interface: EShapeActionRuntimeContainer

A canvas container.

## Hierarchy

- [`DCanvasContainer`](../classes/DCanvasContainer.md)

  ↳ **`EShapeActionRuntimeContainer`**

## Table of contents

### Properties

- [\_accessibleActive](EShapeActionRuntimeContainer.md#_accessibleactive)
- [\_accessibleDiv](EShapeActionRuntimeContainer.md#_accessiblediv)
- [\_auto](EShapeActionRuntimeContainer.md#_auto)
- [\_background](EShapeActionRuntimeContainer.md#_background)
- [\_border](EShapeActionRuntimeContainer.md#_border)
- [\_bounds](EShapeActionRuntimeContainer.md#_bounds)
- [\_canvas](EShapeActionRuntimeContainer.md#_canvas)
- [\_clearType](EShapeActionRuntimeContainer.md#_cleartype)
- [\_corner](EShapeActionRuntimeContainer.md#_corner)
- [\_cursor](EShapeActionRuntimeContainer.md#_cursor)
- [\_destroyed](EShapeActionRuntimeContainer.md#_destroyed)
- [\_lastDownPoint](EShapeActionRuntimeContainer.md#_lastdownpoint)
- [\_lastSortedIndex](EShapeActionRuntimeContainer.md#_lastsortedindex)
- [\_mask](EShapeActionRuntimeContainer.md#_mask)
- [\_options](EShapeActionRuntimeContainer.md#_options)
- [\_outline](EShapeActionRuntimeContainer.md#_outline)
- [\_overflowMask](EShapeActionRuntimeContainer.md#_overflowmask)
- [\_padding](EShapeActionRuntimeContainer.md#_padding)
- [\_reflowable](EShapeActionRuntimeContainer.md#_reflowable)
- [\_shortcuts](EShapeActionRuntimeContainer.md#_shortcuts)
- [\_snippet](EShapeActionRuntimeContainer.md#_snippet)
- [\_tempDisplayObjectParent](EShapeActionRuntimeContainer.md#_tempdisplayobjectparent)
- [\_title](EShapeActionRuntimeContainer.md#_title)
- [\_view](EShapeActionRuntimeContainer.md#_view)
- [\_zIndex](EShapeActionRuntimeContainer.md#_zindex)
- [accessible](EShapeActionRuntimeContainer.md#accessible)
- [accessibleChildren](EShapeActionRuntimeContainer.md#accessiblechildren)
- [accessibleHint](EShapeActionRuntimeContainer.md#accessiblehint)
- [accessiblePointerEvents](EShapeActionRuntimeContainer.md#accessiblepointerevents)
- [accessibleTitle](EShapeActionRuntimeContainer.md#accessibletitle)
- [accessibleType](EShapeActionRuntimeContainer.md#accessibletype)
- [alpha](EShapeActionRuntimeContainer.md#alpha)
- [angle](EShapeActionRuntimeContainer.md#angle)
- [buttonMode](EShapeActionRuntimeContainer.md#buttonmode)
- [cacheAsBitmap](EShapeActionRuntimeContainer.md#cacheasbitmap)
- [children](EShapeActionRuntimeContainer.md#children)
- [controller](EShapeActionRuntimeContainer.md#controller)
- [cursor](EShapeActionRuntimeContainer.md#cursor)
- [data](EShapeActionRuntimeContainer.md#data)
- [filterArea](EShapeActionRuntimeContainer.md#filterarea)
- [filters](EShapeActionRuntimeContainer.md#filters)
- [hitArea](EShapeActionRuntimeContainer.md#hitarea)
- [interactive](EShapeActionRuntimeContainer.md#interactive)
- [interactiveChildren](EShapeActionRuntimeContainer.md#interactivechildren)
- [isMask](EShapeActionRuntimeContainer.md#ismask)
- [isSprite](EShapeActionRuntimeContainer.md#issprite)
- [localTransform](EShapeActionRuntimeContainer.md#localtransform)
- [mask](EShapeActionRuntimeContainer.md#mask)
- [name](EShapeActionRuntimeContainer.md#name)
- [parent](EShapeActionRuntimeContainer.md#parent)
- [pivot](EShapeActionRuntimeContainer.md#pivot)
- [renderable](EShapeActionRuntimeContainer.md#renderable)
- [rotation](EShapeActionRuntimeContainer.md#rotation)
- [shape](EShapeActionRuntimeContainer.md#shape)
- [sortDirty](EShapeActionRuntimeContainer.md#sortdirty)
- [sortableChildren](EShapeActionRuntimeContainer.md#sortablechildren)
- [transform](EShapeActionRuntimeContainer.md#transform)
- [visible](EShapeActionRuntimeContainer.md#visible)
- [worldAlpha](EShapeActionRuntimeContainer.md#worldalpha)
- [worldTransform](EShapeActionRuntimeContainer.md#worldtransform)
- [worldVisible](EShapeActionRuntimeContainer.md#worldvisible)
- [zIndex](EShapeActionRuntimeContainer.md#zindex)

### Accessors

- [background](EShapeActionRuntimeContainer.md#background)
- [border](EShapeActionRuntimeContainer.md#border)
- [canvas](EShapeActionRuntimeContainer.md#canvas)
- [corner](EShapeActionRuntimeContainer.md#corner)
- [height](EShapeActionRuntimeContainer.md#height)
- [options](EShapeActionRuntimeContainer.md#options)
- [outline](EShapeActionRuntimeContainer.md#outline)
- [padding](EShapeActionRuntimeContainer.md#padding)
- [position](EShapeActionRuntimeContainer.md#position)
- [reflowable](EShapeActionRuntimeContainer.md#reflowable)
- [scale](EShapeActionRuntimeContainer.md#scale)
- [shadow](EShapeActionRuntimeContainer.md#shadow)
- [skew](EShapeActionRuntimeContainer.md#skew)
- [snippet](EShapeActionRuntimeContainer.md#snippet)
- [state](EShapeActionRuntimeContainer.md#state)
- [theme](EShapeActionRuntimeContainer.md#theme)
- [title](EShapeActionRuntimeContainer.md#title)
- [type](EShapeActionRuntimeContainer.md#type)
- [unsafe](EShapeActionRuntimeContainer.md#unsafe)
- [view](EShapeActionRuntimeContainer.md#view)
- [weight](EShapeActionRuntimeContainer.md#weight)
- [width](EShapeActionRuntimeContainer.md#width)
- [x](EShapeActionRuntimeContainer.md#x)
- [y](EShapeActionRuntimeContainer.md#y)

### Methods

- [\_calculateBounds](EShapeActionRuntimeContainer.md#_calculatebounds)
- [\_recursivePostUpdateTransform](EShapeActionRuntimeContainer.md#_recursivepostupdatetransform)
- [\_render](EShapeActionRuntimeContainer.md#_render)
- [addChild](EShapeActionRuntimeContainer.md#addchild)
- [addChildAt](EShapeActionRuntimeContainer.md#addchildat)
- [addListener](EShapeActionRuntimeContainer.md#addlistener)
- [applyTitle](EShapeActionRuntimeContainer.md#applytitle)
- [blur](EShapeActionRuntimeContainer.md#blur)
- [calculateBounds](EShapeActionRuntimeContainer.md#calculatebounds)
- [containsGlobalPoint](EShapeActionRuntimeContainer.md#containsglobalpoint)
- [containsLocalPoint](EShapeActionRuntimeContainer.md#containslocalpoint)
- [containsPoint](EShapeActionRuntimeContainer.md#containspoint)
- [destroy](EShapeActionRuntimeContainer.md#destroy)
- [displayObjectUpdateTransform](EShapeActionRuntimeContainer.md#displayobjectupdatetransform)
- [emit](EShapeActionRuntimeContainer.md#emit)
- [eventNames](EShapeActionRuntimeContainer.md#eventnames)
- [focus](EShapeActionRuntimeContainer.md#focus)
- [focusOnClosest](EShapeActionRuntimeContainer.md#focusonclosest)
- [getBounds](EShapeActionRuntimeContainer.md#getbounds)
- [getChildAt](EShapeActionRuntimeContainer.md#getchildat)
- [getChildByName](EShapeActionRuntimeContainer.md#getchildbyname)
- [getChildIndex](EShapeActionRuntimeContainer.md#getchildindex)
- [getClearType](EShapeActionRuntimeContainer.md#getcleartype)
- [getClippingRect](EShapeActionRuntimeContainer.md#getclippingrect)
- [getGlobalPosition](EShapeActionRuntimeContainer.md#getglobalposition)
- [getHeight](EShapeActionRuntimeContainer.md#getheight)
- [getLocalBounds](EShapeActionRuntimeContainer.md#getlocalbounds)
- [getOverflowMask](EShapeActionRuntimeContainer.md#getoverflowmask)
- [getParentOfSize](EShapeActionRuntimeContainer.md#getparentofsize)
- [getThemeDefault](EShapeActionRuntimeContainer.md#getthemedefault)
- [getType](EShapeActionRuntimeContainer.md#gettype)
- [getWidth](EShapeActionRuntimeContainer.md#getwidth)
- [getX](EShapeActionRuntimeContainer.md#getx)
- [getY](EShapeActionRuntimeContainer.md#gety)
- [hasDirty](EShapeActionRuntimeContainer.md#hasdirty)
- [hasRefitableHeight](EShapeActionRuntimeContainer.md#hasrefitableheight)
- [hasRefitableWidth](EShapeActionRuntimeContainer.md#hasrefitablewidth)
- [hide](EShapeActionRuntimeContainer.md#hide)
- [init](EShapeActionRuntimeContainer.md#init)
- [initReflowable](EShapeActionRuntimeContainer.md#initreflowable)
- [isDirty](EShapeActionRuntimeContainer.md#isdirty)
- [isEventTarget](EShapeActionRuntimeContainer.md#iseventtarget)
- [isHidden](EShapeActionRuntimeContainer.md#ishidden)
- [isHierarchyDirty](EShapeActionRuntimeContainer.md#ishierarchydirty)
- [isRefitable](EShapeActionRuntimeContainer.md#isrefitable)
- [isShown](EShapeActionRuntimeContainer.md#isshown)
- [listenerCount](EShapeActionRuntimeContainer.md#listenercount)
- [listeners](EShapeActionRuntimeContainer.md#listeners)
- [off](EShapeActionRuntimeContainer.md#off)
- [on](EShapeActionRuntimeContainer.md#on)
- [onBlur](EShapeActionRuntimeContainer.md#onblur)
- [onChildBlur](EShapeActionRuntimeContainer.md#onchildblur)
- [onChildFocus](EShapeActionRuntimeContainer.md#onchildfocus)
- [onChildrenChange](EShapeActionRuntimeContainer.md#onchildrenchange)
- [onDblClick](EShapeActionRuntimeContainer.md#ondblclick)
- [onDown](EShapeActionRuntimeContainer.md#ondown)
- [onDownThis](EShapeActionRuntimeContainer.md#ondownthis)
- [onFocus](EShapeActionRuntimeContainer.md#onfocus)
- [onHierarchyDirty](EShapeActionRuntimeContainer.md#onhierarchydirty)
- [onKeyDown](EShapeActionRuntimeContainer.md#onkeydown)
- [onKeyUp](EShapeActionRuntimeContainer.md#onkeyup)
- [onMove](EShapeActionRuntimeContainer.md#onmove)
- [onOut](EShapeActionRuntimeContainer.md#onout)
- [onOver](EShapeActionRuntimeContainer.md#onover)
- [onParentMove](EShapeActionRuntimeContainer.md#onparentmove)
- [onParentResize](EShapeActionRuntimeContainer.md#onparentresize)
- [onRefit](EShapeActionRuntimeContainer.md#onrefit)
- [onReflow](EShapeActionRuntimeContainer.md#onreflow)
- [onResize](EShapeActionRuntimeContainer.md#onresize)
- [onScale](EShapeActionRuntimeContainer.md#onscale)
- [onShortcut](EShapeActionRuntimeContainer.md#onshortcut)
- [onSkew](EShapeActionRuntimeContainer.md#onskew)
- [onStateChange](EShapeActionRuntimeContainer.md#onstatechange)
- [onUp](EShapeActionRuntimeContainer.md#onup)
- [onUpThis](EShapeActionRuntimeContainer.md#onupthis)
- [onWheel](EShapeActionRuntimeContainer.md#onwheel)
- [once](EShapeActionRuntimeContainer.md#once)
- [reflow](EShapeActionRuntimeContainer.md#reflow)
- [removeAllListeners](EShapeActionRuntimeContainer.md#removealllisteners)
- [removeChild](EShapeActionRuntimeContainer.md#removechild)
- [removeChildAt](EShapeActionRuntimeContainer.md#removechildat)
- [removeChildren](EShapeActionRuntimeContainer.md#removechildren)
- [removeListener](EShapeActionRuntimeContainer.md#removelistener)
- [render](EShapeActionRuntimeContainer.md#render)
- [renderAdvanced](EShapeActionRuntimeContainer.md#renderadvanced)
- [resize](EShapeActionRuntimeContainer.md#resize)
- [set](EShapeActionRuntimeContainer.md#set)
- [setChildIndex](EShapeActionRuntimeContainer.md#setchildindex)
- [setFocused](EShapeActionRuntimeContainer.md#setfocused)
- [setHeight](EShapeActionRuntimeContainer.md#setheight)
- [setParent](EShapeActionRuntimeContainer.md#setparent)
- [setTransform](EShapeActionRuntimeContainer.md#settransform)
- [setWidth](EShapeActionRuntimeContainer.md#setwidth)
- [setX](EShapeActionRuntimeContainer.md#setx)
- [setY](EShapeActionRuntimeContainer.md#sety)
- [show](EShapeActionRuntimeContainer.md#show)
- [sortChildren](EShapeActionRuntimeContainer.md#sortchildren)
- [swapChildren](EShapeActionRuntimeContainer.md#swapchildren)
- [toCursor](EShapeActionRuntimeContainer.md#tocursor)
- [toDirty](EShapeActionRuntimeContainer.md#todirty)
- [toGlobal](EShapeActionRuntimeContainer.md#toglobal)
- [toHasDirty](EShapeActionRuntimeContainer.md#tohasdirty)
- [toHierarchyDirty](EShapeActionRuntimeContainer.md#tohierarchydirty)
- [toLocal](EShapeActionRuntimeContainer.md#tolocal)
- [toParentHasDirty](EShapeActionRuntimeContainer.md#toparenthasdirty)
- [toParentHierarchyDirty](EShapeActionRuntimeContainer.md#toparenthierarchydirty)
- [toParentResized](EShapeActionRuntimeContainer.md#toparentresized)
- [updateContentSize](EShapeActionRuntimeContainer.md#updatecontentsize)
- [updateTransform](EShapeActionRuntimeContainer.md#updatetransform)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_accessibleActive](../classes/DCanvasContainer.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_accessibleDiv](../classes/DCanvasContainer.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](../classes/DBaseAutoSet.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_auto](../classes/DCanvasContainer.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_background](../classes/DCanvasContainer.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](DBorderStateAware.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_border](../classes/DCanvasContainer.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_bounds](../classes/DCanvasContainer.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_canvas

• `Protected` **\_canvas**: ``null`` \| [`DCanvas`](../classes/DCanvas.md)<[`DThemeCanvas`](DThemeCanvas.md), [`DCanvasOptions`](DCanvasOptions.md)<[`DThemeCanvas`](DThemeCanvas.md)\>\>

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_canvas](../classes/DCanvasContainer.md#_canvas)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L79)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_clearType](../classes/DCanvasContainer.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](DCorner.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_corner](../classes/DCanvasContainer.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_cursor](../classes/DCanvasContainer.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_destroyed](../classes/DCanvasContainer.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_lastDownPoint](../classes/DCanvasContainer.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:761](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L761)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_lastSortedIndex](../classes/DCanvasContainer.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_mask](../classes/DCanvasContainer.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_options

• `Protected` **\_options**: `undefined` \| [`DCanvasContainerOptions`](DCanvasContainerOptions.md)<[`DCanvas`](../classes/DCanvas.md)<[`DThemeCanvas`](DThemeCanvas.md), [`DCanvasOptions`](DCanvasOptions.md)<[`DThemeCanvas`](DThemeCanvas.md)\>\>, [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>, [`DThemeCanvasContainer`](DThemeCanvasContainer.md), `any`\>

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_options](../classes/DCanvasContainer.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](DOutline.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_outline](../classes/DCanvasContainer.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](../classes/DBaseOverflowMask.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_overflowMask](../classes/DCanvasContainer.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L80)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](DPadding.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_padding](../classes/DCanvasContainer.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_reflowable](../classes/DCanvasContainer.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_shortcuts](../classes/DCanvasContainer.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_snippet](../classes/DCanvasContainer.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_tempDisplayObjectParent](../classes/DCanvasContainer.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_title](../classes/DCanvasContainer.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_view

• `Protected` **\_view**: [`DViewImpl`](../classes/DViewImpl.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_view](../classes/DCanvasContainer.md#_view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L81)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_zIndex](../classes/DCanvasContainer.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessible

• **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[accessible](../classes/DCanvasContainer.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8468

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

true

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[accessibleChildren](../classes/DCanvasContainer.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[accessibleHint](../classes/DCanvasContainer.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8483

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

'auto'

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[accessiblePointerEvents](../classes/DCanvasContainer.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8513

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[accessibleTitle](../classes/DCanvasContainer.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8476

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

'button'

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[accessibleType](../classes/DCanvasContainer.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[alpha](../classes/DCanvasContainer.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[angle](../classes/DCanvasContainer.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8771

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

[DCanvasContainer](../classes/DCanvasContainer.md).[buttonMode](../classes/DCanvasContainer.md#buttonmode)

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

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[cacheAsBitmap](../classes/DCanvasContainer.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[children](../classes/DCanvasContainer.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8277

___

### controller

• `Readonly` **controller**: ``null`` \| [`DDiagramBaseController`](DDiagramBaseController.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L24)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[cursor](../classes/DCanvasContainer.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### data

• `Readonly` **data**: [`DDiagramData`](DDiagramData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L23)

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`Member`**

PIXI.DisplayObject#filterArea

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[filterArea](../classes/DCanvasContainer.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`Member`**

PIXI.DisplayObject#filters

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[filters](../classes/DCanvasContainer.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8600

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

[DCanvasContainer](../classes/DCanvasContainer.md).[hitArea](../classes/DCanvasContainer.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8841

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

[DCanvasContainer](../classes/DCanvasContainer.md).[interactive](../classes/DCanvasContainer.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8829

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`Member`**

**`Memberof`**

PIXI.Container#

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[interactiveChildren](../classes/DCanvasContainer.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isMask](../classes/DCanvasContainer.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isSprite](../classes/DCanvasContainer.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[localTransform](../classes/DCanvasContainer.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8729

___

### mask

• **mask**: `Container` \| `MaskData`

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

[DCanvasContainer](../classes/DCanvasContainer.md).[mask](../classes/DCanvasContainer.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`Memberof`**

PIXI.DisplayObject#

**`Member`**

name

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[name](../classes/DCanvasContainer.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[parent](../classes/DCanvasContainer.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[pivot](../classes/DCanvasContainer.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8750

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`Member`**

PIXI.DisplayObject#renderable

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[renderable](../classes/DCanvasContainer.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[rotation](../classes/DCanvasContainer.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### shape

• `Readonly` **shape**: `EventEmitter`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L22)

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[sortDirty](../classes/DCanvasContainer.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8300

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

[DCanvasContainer](../classes/DCanvasContainer.md).[sortableChildren](../classes/DCanvasContainer.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[transform](../classes/DCanvasContainer.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[visible](../classes/DCanvasContainer.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[worldAlpha](../classes/DCanvasContainer.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[worldTransform](../classes/DCanvasContainer.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[worldVisible](../classes/DCanvasContainer.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8787

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`Member`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[zIndex](../classes/DCanvasContainer.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Inherited from

DCanvasContainer.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](DBorderStateAware.md)

#### Inherited from

DCanvasContainer.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### canvas

• `get` **canvas**(): ``null`` \| `CANVAS`

#### Returns

``null`` \| `CANVAS`

#### Inherited from

DCanvasContainer.canvas

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L112)

• `set` **canvas**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | ``null`` \| `CANVAS` |

#### Returns

`void`

#### Inherited from

DCanvasContainer.canvas

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L116)

___

### corner

• `get` **corner**(): [`DCorner`](DCorner.md)

#### Returns

[`DCorner`](DCorner.md)

#### Inherited from

DCanvasContainer.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1288)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DCanvasContainer.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](DOutline.md)

#### Returns

[`DOutline`](DOutline.md)

#### Inherited from

DCanvasContainer.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](DPadding.md)

#### Returns

[`DPadding`](DPadding.md)

#### Inherited from

DCanvasContainer.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### position

• `get` **position**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DCanvasContainer.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Inherited from

DCanvasContainer.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### scale

• `get` **scale**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DCanvasContainer.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](DShadow.md)

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

DCanvasContainer.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1701](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1701)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](DShadow.md) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### skew

• `get` **skew**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DCanvasContainer.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Inherited from

DCanvasContainer.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Inherited from

DCanvasContainer.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DCanvasContainer.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DCanvasContainer.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DCanvasContainer.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1385](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1385)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DCanvasContainer.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DCanvasContainer.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DCanvasContainer.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### view

• `get` **view**(): [`DView`](DView.md)

#### Returns

[`DView`](DView.md)

#### Inherited from

DCanvasContainer.view

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L158)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1229)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1149)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1189)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DCanvasContainer.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_calculateBounds](../classes/DCanvasContainer.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1928](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1928)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_recursivePostUpdateTransform](../classes/DCanvasContainer.md#_recursivepostupdatetransform)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[_render](../classes/DCanvasContainer.md#_render)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[addChild](../classes/DCanvasContainer.md#addchild)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[addChildAt](../classes/DCanvasContainer.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[addListener](../classes/DCanvasContainer.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[addListener](../classes/DCanvasContainer.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[applyTitle](../classes/DCanvasContainer.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### blur

▸ **blur**(`recursively?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[blur](../classes/DCanvasContainer.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[calculateBounds](../classes/DCanvasContainer.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### containsGlobalPoint

▸ `Protected` **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[containsGlobalPoint](../classes/DCanvasContainer.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1953](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1953)

___

### containsLocalPoint

▸ `Protected` **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[containsLocalPoint](../classes/DCanvasContainer.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1957](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1957)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[containsPoint](../classes/DCanvasContainer.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[destroy](../classes/DCanvasContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L189)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`Memberof`**

PIXI.DisplayObject#

**`Function`**

displayObjectUpdateTransform

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[displayObjectUpdateTransform](../classes/DCanvasContainer.md#displayobjectupdatetransform)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[emit](../classes/DCanvasContainer.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[eventNames](../classes/DCanvasContainer.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[focus](../classes/DCanvasContainer.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[focusOnClosest](../classes/DCanvasContainer.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skipUpdate?` | `boolean` | Setting to `true` will stop the transforms of the scene graph from  being updated. This means the calculation returned MAY be out of date BUT will give you a  nice performance boost. |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getBounds](../classes/DCanvasContainer.md#getbounds)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[getChildAt](../classes/DCanvasContainer.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8351

___

### getChildByName

▸ **getChildByName**(`name`): `DisplayObject`

Returns the display object in the container.

**`Method`**

getChildByName

**`Memberof`**

PIXI.Container#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |

#### Returns

`DisplayObject`

The child with the specified name.

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getChildByName](../classes/DCanvasContainer.md#getchildbyname)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[getChildIndex](../classes/DCanvasContainer.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getClearType](../classes/DCanvasContainer.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1113)

___

### getClippingRect

▸ **getClippingRect**(`target`, `result`): `void`

Returns a clipping rect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `unknown` | - |
| `result` | `Rectangle` | a clipping rect |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getClippingRect](../classes/DCanvasContainer.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1970](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1970)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

**`Method`**

getGlobalPosition

**`Memberof`**

PIXI.DisplayObject#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point?` | `Point` | - |
| `skipUpdate?` | `boolean` | Setting to true will stop the transforms of the scene graph from  being updated. This means the calculation returned MAY be out of date BUT will give you a  nice performance boost. |

#### Returns

`Point`

The updated point.

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getGlobalPosition](../classes/DCanvasContainer.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getHeight](../classes/DCanvasContainer.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1296)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[getLocalBounds](../classes/DCanvasContainer.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ `Protected` **getOverflowMask**(): [`DBaseOverflowMask`](../classes/DBaseOverflowMask.md)

#### Returns

[`DBaseOverflowMask`](../classes/DBaseOverflowMask.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getOverflowMask](../classes/DCanvasContainer.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L135)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](DPadding.md) ; `width`: `number`  }

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getParentOfSize](../classes/DCanvasContainer.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeCanvasContainer`](DThemeCanvasContainer.md)

#### Returns

[`DThemeCanvasContainer`](DThemeCanvasContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getThemeDefault](../classes/DCanvasContainer.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getType](../classes/DCanvasContainer.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L103)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getWidth](../classes/DCanvasContainer.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getX](../classes/DCanvasContainer.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getY](../classes/DCanvasContainer.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[hasDirty](../classes/DCanvasContainer.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### hasRefitableHeight

▸ `Protected` **hasRefitableHeight**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[hasRefitableHeight](../classes/DCanvasContainer.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1685](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1685)

___

### hasRefitableWidth

▸ `Protected` **hasRefitableWidth**(`target`): target is DBase<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase<any, any\>

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[hasRefitableWidth](../classes/DCanvasContainer.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hide

▸ **hide**(): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[hide](../classes/DCanvasContainer.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DCanvasContainerOptions`](DCanvasContainerOptions.md)<[`DCanvas`](../classes/DCanvas.md)<[`DThemeCanvas`](DThemeCanvas.md), [`DCanvasOptions`](DCanvasOptions.md)<[`DThemeCanvas`](DThemeCanvas.md)\>\>, [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>, [`DThemeCanvasContainer`](DThemeCanvasContainer.md), `any`\> |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[init](../classes/DCanvasContainer.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L83)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[initReflowable](../classes/DCanvasContainer.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isDirty](../classes/DCanvasContainer.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1482](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1482)

___

### isEventTarget

▸ `Protected` **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isEventTarget](../classes/DCanvasContainer.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isHidden](../classes/DCanvasContainer.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isHierarchyDirty](../classes/DCanvasContainer.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1474)

___

### isRefitable

▸ `Protected` **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isRefitable](../classes/DCanvasContainer.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1681)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isShown](../classes/DCanvasContainer.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[listenerCount](../classes/DCanvasContainer.md#listenercount)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[listeners](../classes/DCanvasContainer.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[off](../classes/DCanvasContainer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[on](../classes/DCanvasContainer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[on](../classes/DCanvasContainer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onBlur](../classes/DCanvasContainer.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### onChildBlur

▸ `Protected` **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onChildBlur](../classes/DCanvasContainer.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1570](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1570)

___

### onChildFocus

▸ `Protected` **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onChildFocus](../classes/DCanvasContainer.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onChildrenChange](../classes/DCanvasContainer.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1034)

___

### onDblClick

▸ `Protected` **onDblClick**(`e`, `interactionManager`, `skipView?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |
| `skipView?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onDblClick](../classes/DCanvasContainer.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L168)

___

### onDown

▸ `Protected` **onDown**(`e`, `skipView?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `skipView?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onDown](../classes/DCanvasContainer.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L182)

___

### onDownThis

▸ `Protected` **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onDownThis](../classes/DCanvasContainer.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onFocus](../classes/DCanvasContainer.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onHierarchyDirty](../classes/DCanvasContainer.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1478)

___

### onKeyDown

▸ `Protected` **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onKeyDown](../classes/DCanvasContainer.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1802](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1802)

___

### onKeyUp

▸ `Protected` **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onKeyUp](../classes/DCanvasContainer.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1807](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1807)

___

### onMove

▸ `Protected` **onMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onMove](../classes/DCanvasContainer.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1051)

___

### onOut

▸ `Protected` **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onOut](../classes/DCanvasContainer.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1891](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1891)

___

### onOver

▸ `Protected` **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onOver](../classes/DCanvasContainer.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

___

### onParentMove

▸ `Protected` **onParentMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

Called when a parent moved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new parent's local x position |
| `newY` | `number` | a new parent's local y position |
| `oldX` | `number` | an old parent's local x position |
| `oldY` | `number` | an old parent's local y position |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onParentMove](../classes/DCanvasContainer.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1791)

___

### onParentResize

▸ **onParentResize**(`parentWidth`, `parentHeight`, `parentPadding`): `void`

Called when a parent resized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentWidth` | `number` | a parent's local width |
| `parentHeight` | `number` | a parent's local height |
| `parentPadding` | [`DPadding`](DPadding.md) | - |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onParentResize](../classes/DCanvasContainer.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1750)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onRefit](../classes/DCanvasContainer.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onReflow](../classes/DCanvasContainer.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1697)

___

### onResize

▸ **onResize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newWidth` | `number` |
| `newHeight` | `number` |
| `oldWidth` | `number` |
| `oldHeight` | `number` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onResize](../classes/DCanvasContainer.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L107)

___

### onScale

▸ `Protected` **onScale**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onScale](../classes/DCanvasContainer.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

___

### onShortcut

▸ `Protected` **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onShortcut](../classes/DCanvasContainer.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1039](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1039)

___

### onSkew

▸ `Protected` **onSkew**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onSkew](../classes/DCanvasContainer.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### onStateChange

▸ `Protected` **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onStateChange](../classes/DCanvasContainer.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1527)

___

### onUp

▸ `Protected` **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onUp](../classes/DCanvasContainer.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1845](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1845)

___

### onUpThis

▸ `Protected` **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onUpThis](../classes/DCanvasContainer.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1852)

___

### onWheel

▸ `Protected` **onWheel**(`e`, `deltas`, `global`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |
| `deltas` | [`UtilWheelEventDeltas`](UtilWheelEventDeltas.md) |
| `global` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onWheel](../classes/DCanvasContainer.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L162)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[once](../classes/DCanvasContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[once](../classes/DCanvasContainer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[reflow](../classes/DCanvasContainer.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[removeAllListeners](../classes/DCanvasContainer.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[removeAllListeners](../classes/DCanvasContainer.md#removealllisteners)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[removeChild](../classes/DCanvasContainer.md#removechild)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[removeChildAt](../classes/DCanvasContainer.md#removechildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

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

[DCanvasContainer](../classes/DCanvasContainer.md).[removeChildren](../classes/DCanvasContainer.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[removeListener](../classes/DCanvasContainer.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[removeListener](../classes/DCanvasContainer.md#removelistener)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[render](../classes/DCanvasContainer.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1909](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1909)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[renderAdvanced](../classes/DCanvasContainer.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### resize

▸ **resize**(`width?`, `height?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[resize](../classes/DCanvasContainer.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1063)

___

### set

▸ **set**(`serialized`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | ``null`` \| [`DDiagramSerialized`](DDiagramSerialized.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L26)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[setChildIndex](../classes/DCanvasContainer.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[setFocused](../classes/DCanvasContainer.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

___

### setHeight

▸ **setHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[setHeight](../classes/DCanvasContainer.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1300)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[setParent](../classes/DCanvasContainer.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8686

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

[DCanvasContainer](../classes/DCanvasContainer.md).[setTransform](../classes/DCanvasContainer.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### setWidth

▸ **setWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[setWidth](../classes/DCanvasContainer.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[setX](../classes/DCanvasContainer.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1166)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[setY](../classes/DCanvasContainer.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[show](../classes/DCanvasContainer.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[sortChildren](../classes/DCanvasContainer.md#sortchildren)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[swapChildren](../classes/DCanvasContainer.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toCursor

▸ `Protected` **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\> |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toCursor](../classes/DCanvasContainer.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toDirty](../classes/DCanvasContainer.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1432)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | A Point object in which to store the value, optional  (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform. |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toGlobal](../classes/DCanvasContainer.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toHasDirty](../classes/DCanvasContainer.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toHierarchyDirty](../classes/DCanvasContainer.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1457)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | The DisplayObject to calculate the global position from. |
| `point?` | `IPoint` | A Point object in which to store the value, optional  (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform |

#### Returns

`IPoint`

A point object representing the position of this object

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toLocal](../classes/DCanvasContainer.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toParentHasDirty](../classes/DCanvasContainer.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toParentHierarchyDirty](../classes/DCanvasContainer.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toParentResized](../classes/DCanvasContainer.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### updateContentSize

▸ `Protected` **updateContentSize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newWidth` | `number` |
| `newHeight` | `number` |
| `oldWidth` | `number` |
| `oldHeight` | `number` |

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[updateContentSize](../classes/DCanvasContainer.md#updatecontentsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L144)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[updateTransform](../classes/DCanvasContainer.md#updatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8381
