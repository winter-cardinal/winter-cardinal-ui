[Winter Cardinal UI - v0.205.1](../index.md) / EShapeActionRuntimeContainer

# Interface: EShapeActionRuntimeContainer

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

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_accessibleActive](../classes/DCanvasContainer.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

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

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_background](../classes/DCanvasContainer.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](DBorderStateAware.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_border](../classes/DCanvasContainer.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

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

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L79)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_clearType](../classes/DCanvasContainer.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](DCorner.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_corner](../classes/DCanvasContainer.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_cursor](../classes/DCanvasContainer.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

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

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_lastSortedIndex](../classes/DCanvasContainer.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

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

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](DOutline.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_outline](../classes/DCanvasContainer.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](../classes/DBaseOverflowMask.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_overflowMask](../classes/DCanvasContainer.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L80)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](DPadding.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_padding](../classes/DCanvasContainer.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_reflowable](../classes/DCanvasContainer.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_shortcuts](../classes/DCanvasContainer.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_snippet](../classes/DCanvasContainer.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

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

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_view

• `Protected` **\_view**: [`DViewImpl`](../classes/DViewImpl.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_view](../classes/DCanvasContainer.md#_view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L81)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_zIndex](../classes/DCanvasContainer.md#_zindex)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[accessible](../classes/DCanvasContainer.md#accessible)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[accessibleChildren](../classes/DCanvasContainer.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[accessibleHint](../classes/DCanvasContainer.md#accessiblehint)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[accessiblePointerEvents](../classes/DCanvasContainer.md#accessiblepointerevents)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[accessibleTitle](../classes/DCanvasContainer.md#accessibletitle)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[accessibleType](../classes/DCanvasContainer.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[alpha](../classes/DCanvasContainer.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[angle](../classes/DCanvasContainer.md#angle)

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

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[cacheAsBitmap](../classes/DCanvasContainer.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[children](../classes/DCanvasContainer.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8277

___

### controller

• `Readonly` **controller**: ``null`` \| [`DDiagramBaseController`](DDiagramBaseController.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L24)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[cursor](../classes/DCanvasContainer.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### data

• `Readonly` **data**: [`DDiagramData`](DDiagramData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L23)

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

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

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[filters](../classes/DCanvasContainer.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8600

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

[DCanvasContainer](../classes/DCanvasContainer.md).[hitArea](../classes/DCanvasContainer.md#hitarea)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[interactive](../classes/DCanvasContainer.md#interactive)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[interactiveChildren](../classes/DCanvasContainer.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isMask](../classes/DCanvasContainer.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isSprite](../classes/DCanvasContainer.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[localTransform](../classes/DCanvasContainer.md#localtransform)

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

[DCanvasContainer](../classes/DCanvasContainer.md).[mask](../classes/DCanvasContainer.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[name](../classes/DCanvasContainer.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[parent](../classes/DCanvasContainer.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

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

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[renderable](../classes/DCanvasContainer.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[rotation](../classes/DCanvasContainer.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### shape

• `Readonly` **shape**: `EventEmitter`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L22)

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

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
such as @link https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`see`** PIXI.settings.SORTABLE_CHILDREN

**`member`** {boolean} PIXI.Container#sortableChildren

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[sortableChildren](../classes/DCanvasContainer.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

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

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[visible](../classes/DCanvasContainer.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[worldAlpha](../classes/DCanvasContainer.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[worldTransform](../classes/DCanvasContainer.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

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

**`member`** {number}

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

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](DBorderStateAware.md)

#### Inherited from

DCanvasContainer.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### canvas

• `get` **canvas**(): ``null`` \| `CANVAS`

#### Returns

``null`` \| `CANVAS`

#### Inherited from

DCanvasContainer.canvas

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L112)

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

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L116)

___

### corner

• `get` **corner**(): [`DCorner`](DCorner.md)

#### Returns

[`DCorner`](DCorner.md)

#### Inherited from

DCanvasContainer.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DCanvasContainer.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### outline

• `get` **outline**(): [`DOutline`](DOutline.md)

#### Returns

[`DOutline`](DOutline.md)

#### Inherited from

DCanvasContainer.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](DPadding.md)

#### Returns

[`DPadding`](DPadding.md)

#### Inherited from

DCanvasContainer.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### position

• `get` **position**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DCanvasContainer.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Inherited from

DCanvasContainer.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DCanvasContainer.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](DShadow.md)

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

DCanvasContainer.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### skew

• `get` **skew**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DCanvasContainer.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Inherited from

DCanvasContainer.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Inherited from

DCanvasContainer.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DCanvasContainer.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DCanvasContainer.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1371)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DCanvasContainer.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DCanvasContainer.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### view

• `get` **view**(): [`DView`](DView.md)

#### Returns

[`DView`](DView.md)

#### Inherited from

DCanvasContainer.view

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L158)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1135)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DCanvasContainer.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1175)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[_calculateBounds](../classes/DCanvasContainer.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1906](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1906)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1384)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1931](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1931)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1935](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1935)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1922](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1922)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[destroy](../classes/DCanvasContainer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L189)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[focusOnClosest](../classes/DCanvasContainer.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1282)

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

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L135)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](DPadding.md) ; `width`: `number`  }

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getParentOfSize](../classes/DCanvasContainer.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1716](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1716)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeCanvasContainer`](DThemeCanvasContainer.md)

#### Returns

[`DThemeCanvasContainer`](DThemeCanvasContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getThemeDefault](../classes/DCanvasContainer.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1897](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1897)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getType](../classes/DCanvasContainer.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L103)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getWidth](../classes/DCanvasContainer.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getX](../classes/DCanvasContainer.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[getY](../classes/DCanvasContainer.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[hasDirty](../classes/DCanvasContainer.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1472)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1666)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### hide

▸ **hide**(): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[hide](../classes/DCanvasContainer.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

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

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L83)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[initReflowable](../classes/DCanvasContainer.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isDirty](../classes/DCanvasContainer.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1468)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1794)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isHidden](../classes/DCanvasContainer.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isHierarchyDirty](../classes/DCanvasContainer.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1662](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1662)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[isShown](../classes/DCanvasContainer.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1400)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1558)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1551)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onChildrenChange](../classes/DCanvasContainer.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onDblClick

▸ **onDblClick**(`e`, `interactionManager`, `skipView?`): `boolean`

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

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L168)

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

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L182)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1815](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1815)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onFocus](../classes/DCanvasContainer.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onHierarchyDirty](../classes/DCanvasContainer.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1464)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onKeyDown](../classes/DCanvasContainer.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1783](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1783)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onKeyUp](../classes/DCanvasContainer.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1788)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1872)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1858](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1858)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1772)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1731](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1731)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onRefit](../classes/DCanvasContainer.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1618)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[onReflow](../classes/DCanvasContainer.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

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

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L107)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1125)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1513)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1826)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1833](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1833)

___

### onWheel

▸ **onWheel**(`e`, `deltas`, `global`): `boolean`

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

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L162)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1591](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1591)

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

| Name | Type |
| :------ | :------ |
| `beginIndex?` | `number` |
| `endIndex?` | `number` |

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

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L26)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1476)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1286)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1227)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1152)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Returns

[`EShapeActionRuntimeContainer`](EShapeActionRuntimeContainer.md)

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[show](../classes/DCanvasContainer.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

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

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toDirty](../classes/DCanvasContainer.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toHierarchyDirty](../classes/DCanvasContainer.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1443)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toParentHierarchyDirty](../classes/DCanvasContainer.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DCanvasContainer](../classes/DCanvasContainer.md).[toParentResized](../classes/DCanvasContainer.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1709)

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

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L144)

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
