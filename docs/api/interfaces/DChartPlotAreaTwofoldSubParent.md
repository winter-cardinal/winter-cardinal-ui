[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaTwofoldSubParent

# Interface: DChartPlotAreaTwofoldSubParent\<CHART\>

A base class for UI classes.
See [DBaseEvents](DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Hierarchy

- [`DChartPlotArea`](DChartPlotArea.md)\<`CHART`\>

  ↳ **`DChartPlotAreaTwofoldSubParent`**

## Table of contents

### Properties

- [\_accessibleActive](DChartPlotAreaTwofoldSubParent.md#_accessibleactive)
- [\_accessibleDiv](DChartPlotAreaTwofoldSubParent.md#_accessiblediv)
- [\_auto](DChartPlotAreaTwofoldSubParent.md#_auto)
- [\_background](DChartPlotAreaTwofoldSubParent.md#_background)
- [\_border](DChartPlotAreaTwofoldSubParent.md#_border)
- [\_bounds](DChartPlotAreaTwofoldSubParent.md#_bounds)
- [\_boundsID](DChartPlotAreaTwofoldSubParent.md#_boundsid)
- [\_boundsRect](DChartPlotAreaTwofoldSubParent.md#_boundsrect)
- [\_clearType](DChartPlotAreaTwofoldSubParent.md#_cleartype)
- [\_corner](DChartPlotAreaTwofoldSubParent.md#_corner)
- [\_cursor](DChartPlotAreaTwofoldSubParent.md#_cursor)
- [\_destroyed](DChartPlotAreaTwofoldSubParent.md#_destroyed)
- [\_enabledFilters](DChartPlotAreaTwofoldSubParent.md#_enabledfilters)
- [\_lastDownPoint](DChartPlotAreaTwofoldSubParent.md#_lastdownpoint)
- [\_lastSortedIndex](DChartPlotAreaTwofoldSubParent.md#_lastsortedindex)
- [\_localBounds](DChartPlotAreaTwofoldSubParent.md#_localbounds)
- [\_localBoundsRect](DChartPlotAreaTwofoldSubParent.md#_localboundsrect)
- [\_mask](DChartPlotAreaTwofoldSubParent.md#_mask)
- [\_options](DChartPlotAreaTwofoldSubParent.md#_options)
- [\_outline](DChartPlotAreaTwofoldSubParent.md#_outline)
- [\_padding](DChartPlotAreaTwofoldSubParent.md#_padding)
- [\_reflowable](DChartPlotAreaTwofoldSubParent.md#_reflowable)
- [\_shortcuts](DChartPlotAreaTwofoldSubParent.md#_shortcuts)
- [\_snippet](DChartPlotAreaTwofoldSubParent.md#_snippet)
- [\_tempDisplayObjectParent](DChartPlotAreaTwofoldSubParent.md#_tempdisplayobjectparent)
- [\_title](DChartPlotAreaTwofoldSubParent.md#_title)
- [\_zIndex](DChartPlotAreaTwofoldSubParent.md#_zindex)
- [accessible](DChartPlotAreaTwofoldSubParent.md#accessible)
- [accessibleChildren](DChartPlotAreaTwofoldSubParent.md#accessiblechildren)
- [accessibleHint](DChartPlotAreaTwofoldSubParent.md#accessiblehint)
- [accessiblePointerEvents](DChartPlotAreaTwofoldSubParent.md#accessiblepointerevents)
- [accessibleTitle](DChartPlotAreaTwofoldSubParent.md#accessibletitle)
- [accessibleType](DChartPlotAreaTwofoldSubParent.md#accessibletype)
- [alpha](DChartPlotAreaTwofoldSubParent.md#alpha)
- [angle](DChartPlotAreaTwofoldSubParent.md#angle)
- [axis](DChartPlotAreaTwofoldSubParent.md#axis)
- [buttonMode](DChartPlotAreaTwofoldSubParent.md#buttonmode)
- [cacheAsBitmap](DChartPlotAreaTwofoldSubParent.md#cacheasbitmap)
- [chart](DChartPlotAreaTwofoldSubParent.md#chart)
- [children](DChartPlotAreaTwofoldSubParent.md#children)
- [container](DChartPlotAreaTwofoldSubParent.md#container)
- [coordinate](DChartPlotAreaTwofoldSubParent.md#coordinate)
- [cursor](DChartPlotAreaTwofoldSubParent.md#cursor)
- [filterArea](DChartPlotAreaTwofoldSubParent.md#filterarea)
- [filters](DChartPlotAreaTwofoldSubParent.md#filters)
- [hitArea](DChartPlotAreaTwofoldSubParent.md#hitarea)
- [interactive](DChartPlotAreaTwofoldSubParent.md#interactive)
- [interactiveChildren](DChartPlotAreaTwofoldSubParent.md#interactivechildren)
- [isMask](DChartPlotAreaTwofoldSubParent.md#ismask)
- [isSprite](DChartPlotAreaTwofoldSubParent.md#issprite)
- [localTransform](DChartPlotAreaTwofoldSubParent.md#localtransform)
- [mask](DChartPlotAreaTwofoldSubParent.md#mask)
- [name](DChartPlotAreaTwofoldSubParent.md#name)
- [parent](DChartPlotAreaTwofoldSubParent.md#parent)
- [pivot](DChartPlotAreaTwofoldSubParent.md#pivot)
- [renderable](DChartPlotAreaTwofoldSubParent.md#renderable)
- [rotation](DChartPlotAreaTwofoldSubParent.md#rotation)
- [series](DChartPlotAreaTwofoldSubParent.md#series)
- [sortDirty](DChartPlotAreaTwofoldSubParent.md#sortdirty)
- [sortableChildren](DChartPlotAreaTwofoldSubParent.md#sortablechildren)
- [transform](DChartPlotAreaTwofoldSubParent.md#transform)
- [view](DChartPlotAreaTwofoldSubParent.md#view)
- [visible](DChartPlotAreaTwofoldSubParent.md#visible)
- [worldAlpha](DChartPlotAreaTwofoldSubParent.md#worldalpha)
- [worldTransform](DChartPlotAreaTwofoldSubParent.md#worldtransform)
- [worldVisible](DChartPlotAreaTwofoldSubParent.md#worldvisible)
- [zIndex](DChartPlotAreaTwofoldSubParent.md#zindex)

### Accessors

- [background](DChartPlotAreaTwofoldSubParent.md#background)
- [border](DChartPlotAreaTwofoldSubParent.md#border)
- [corner](DChartPlotAreaTwofoldSubParent.md#corner)
- [height](DChartPlotAreaTwofoldSubParent.md#height)
- [options](DChartPlotAreaTwofoldSubParent.md#options)
- [outline](DChartPlotAreaTwofoldSubParent.md#outline)
- [padding](DChartPlotAreaTwofoldSubParent.md#padding)
- [position](DChartPlotAreaTwofoldSubParent.md#position)
- [reflowable](DChartPlotAreaTwofoldSubParent.md#reflowable)
- [scale](DChartPlotAreaTwofoldSubParent.md#scale)
- [shadow](DChartPlotAreaTwofoldSubParent.md#shadow)
- [skew](DChartPlotAreaTwofoldSubParent.md#skew)
- [snippet](DChartPlotAreaTwofoldSubParent.md#snippet)
- [state](DChartPlotAreaTwofoldSubParent.md#state)
- [theme](DChartPlotAreaTwofoldSubParent.md#theme)
- [title](DChartPlotAreaTwofoldSubParent.md#title)
- [type](DChartPlotAreaTwofoldSubParent.md#type)
- [unsafe](DChartPlotAreaTwofoldSubParent.md#unsafe)
- [weight](DChartPlotAreaTwofoldSubParent.md#weight)
- [width](DChartPlotAreaTwofoldSubParent.md#width)
- [x](DChartPlotAreaTwofoldSubParent.md#x)
- [y](DChartPlotAreaTwofoldSubParent.md#y)

### Methods

- [\_calculateBounds](DChartPlotAreaTwofoldSubParent.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DChartPlotAreaTwofoldSubParent.md#_recursivepostupdatetransform)
- [\_render](DChartPlotAreaTwofoldSubParent.md#_render)
- [addChild](DChartPlotAreaTwofoldSubParent.md#addchild)
- [addChildAt](DChartPlotAreaTwofoldSubParent.md#addchildat)
- [addListener](DChartPlotAreaTwofoldSubParent.md#addlistener)
- [applyTitle](DChartPlotAreaTwofoldSubParent.md#applytitle)
- [blur](DChartPlotAreaTwofoldSubParent.md#blur)
- [calculateBounds](DChartPlotAreaTwofoldSubParent.md#calculatebounds)
- [containerUpdateTransform](DChartPlotAreaTwofoldSubParent.md#containerupdatetransform)
- [containsGlobalPoint](DChartPlotAreaTwofoldSubParent.md#containsglobalpoint)
- [containsLocalPoint](DChartPlotAreaTwofoldSubParent.md#containslocalpoint)
- [containsPoint](DChartPlotAreaTwofoldSubParent.md#containspoint)
- [destroy](DChartPlotAreaTwofoldSubParent.md#destroy)
- [disableTempParent](DChartPlotAreaTwofoldSubParent.md#disabletempparent)
- [displayObjectUpdateTransform](DChartPlotAreaTwofoldSubParent.md#displayobjectupdatetransform)
- [emit](DChartPlotAreaTwofoldSubParent.md#emit)
- [enableTempParent](DChartPlotAreaTwofoldSubParent.md#enabletempparent)
- [eventNames](DChartPlotAreaTwofoldSubParent.md#eventnames)
- [fit](DChartPlotAreaTwofoldSubParent.md#fit)
- [focus](DChartPlotAreaTwofoldSubParent.md#focus)
- [focusOnClosest](DChartPlotAreaTwofoldSubParent.md#focusonclosest)
- [getAxisBounds](DChartPlotAreaTwofoldSubParent.md#getaxisbounds)
- [getBounds](DChartPlotAreaTwofoldSubParent.md#getbounds)
- [getChildAt](DChartPlotAreaTwofoldSubParent.md#getchildat)
- [getChildByName](DChartPlotAreaTwofoldSubParent.md#getchildbyname)
- [getChildIndex](DChartPlotAreaTwofoldSubParent.md#getchildindex)
- [getClearType](DChartPlotAreaTwofoldSubParent.md#getcleartype)
- [getClippingRect](DChartPlotAreaTwofoldSubParent.md#getclippingrect)
- [getContainerBounds](DChartPlotAreaTwofoldSubParent.md#getcontainerbounds)
- [getGlobalPosition](DChartPlotAreaTwofoldSubParent.md#getglobalposition)
- [getHeight](DChartPlotAreaTwofoldSubParent.md#getheight)
- [getLocalBounds](DChartPlotAreaTwofoldSubParent.md#getlocalbounds)
- [getParentOfSize](DChartPlotAreaTwofoldSubParent.md#getparentofsize)
- [getPixelBounds](DChartPlotAreaTwofoldSubParent.md#getpixelbounds)
- [getPixelDomain](DChartPlotAreaTwofoldSubParent.md#getpixeldomain)
- [getPixelRange](DChartPlotAreaTwofoldSubParent.md#getpixelrange)
- [getSelectionBoundsX](DChartPlotAreaTwofoldSubParent.md#getselectionboundsx)
- [getSelectionBoundsY](DChartPlotAreaTwofoldSubParent.md#getselectionboundsy)
- [getThemeDefault](DChartPlotAreaTwofoldSubParent.md#getthemedefault)
- [getType](DChartPlotAreaTwofoldSubParent.md#gettype)
- [getWidth](DChartPlotAreaTwofoldSubParent.md#getwidth)
- [getX](DChartPlotAreaTwofoldSubParent.md#getx)
- [getY](DChartPlotAreaTwofoldSubParent.md#gety)
- [hasDirty](DChartPlotAreaTwofoldSubParent.md#hasdirty)
- [hasRefitableHeight](DChartPlotAreaTwofoldSubParent.md#hasrefitableheight)
- [hasRefitableWidth](DChartPlotAreaTwofoldSubParent.md#hasrefitablewidth)
- [hide](DChartPlotAreaTwofoldSubParent.md#hide)
- [init](DChartPlotAreaTwofoldSubParent.md#init)
- [initReflowable](DChartPlotAreaTwofoldSubParent.md#initreflowable)
- [isDirty](DChartPlotAreaTwofoldSubParent.md#isdirty)
- [isEventTarget](DChartPlotAreaTwofoldSubParent.md#iseventtarget)
- [isHidden](DChartPlotAreaTwofoldSubParent.md#ishidden)
- [isHierarchyDirty](DChartPlotAreaTwofoldSubParent.md#ishierarchydirty)
- [isRefitable](DChartPlotAreaTwofoldSubParent.md#isrefitable)
- [isShown](DChartPlotAreaTwofoldSubParent.md#isshown)
- [listenerCount](DChartPlotAreaTwofoldSubParent.md#listenercount)
- [listeners](DChartPlotAreaTwofoldSubParent.md#listeners)
- [newPadding](DChartPlotAreaTwofoldSubParent.md#newpadding)
- [off](DChartPlotAreaTwofoldSubParent.md#off)
- [on](DChartPlotAreaTwofoldSubParent.md#on)
- [onBlur](DChartPlotAreaTwofoldSubParent.md#onblur)
- [onChildBlur](DChartPlotAreaTwofoldSubParent.md#onchildblur)
- [onChildFocus](DChartPlotAreaTwofoldSubParent.md#onchildfocus)
- [onChildrenChange](DChartPlotAreaTwofoldSubParent.md#onchildrenchange)
- [onDblClick](DChartPlotAreaTwofoldSubParent.md#ondblclick)
- [onDown](DChartPlotAreaTwofoldSubParent.md#ondown)
- [onDownThis](DChartPlotAreaTwofoldSubParent.md#ondownthis)
- [onFocus](DChartPlotAreaTwofoldSubParent.md#onfocus)
- [onHierarchyDirty](DChartPlotAreaTwofoldSubParent.md#onhierarchydirty)
- [onKeyDown](DChartPlotAreaTwofoldSubParent.md#onkeydown)
- [onKeyUp](DChartPlotAreaTwofoldSubParent.md#onkeyup)
- [onMove](DChartPlotAreaTwofoldSubParent.md#onmove)
- [onOut](DChartPlotAreaTwofoldSubParent.md#onout)
- [onOver](DChartPlotAreaTwofoldSubParent.md#onover)
- [onParentMove](DChartPlotAreaTwofoldSubParent.md#onparentmove)
- [onParentResize](DChartPlotAreaTwofoldSubParent.md#onparentresize)
- [onRefit](DChartPlotAreaTwofoldSubParent.md#onrefit)
- [onReflow](DChartPlotAreaTwofoldSubParent.md#onreflow)
- [onResize](DChartPlotAreaTwofoldSubParent.md#onresize)
- [onScale](DChartPlotAreaTwofoldSubParent.md#onscale)
- [onShortcut](DChartPlotAreaTwofoldSubParent.md#onshortcut)
- [onSkew](DChartPlotAreaTwofoldSubParent.md#onskew)
- [onStateChange](DChartPlotAreaTwofoldSubParent.md#onstatechange)
- [onUp](DChartPlotAreaTwofoldSubParent.md#onup)
- [onUpThis](DChartPlotAreaTwofoldSubParent.md#onupthis)
- [onWheel](DChartPlotAreaTwofoldSubParent.md#onwheel)
- [once](DChartPlotAreaTwofoldSubParent.md#once)
- [reflow](DChartPlotAreaTwofoldSubParent.md#reflow)
- [removeAllListeners](DChartPlotAreaTwofoldSubParent.md#removealllisteners)
- [removeChild](DChartPlotAreaTwofoldSubParent.md#removechild)
- [removeChildAt](DChartPlotAreaTwofoldSubParent.md#removechildat)
- [removeChildren](DChartPlotAreaTwofoldSubParent.md#removechildren)
- [removeListener](DChartPlotAreaTwofoldSubParent.md#removelistener)
- [render](DChartPlotAreaTwofoldSubParent.md#render)
- [renderAdvanced](DChartPlotAreaTwofoldSubParent.md#renderadvanced)
- [resize](DChartPlotAreaTwofoldSubParent.md#resize)
- [setChildIndex](DChartPlotAreaTwofoldSubParent.md#setchildindex)
- [setFocused](DChartPlotAreaTwofoldSubParent.md#setfocused)
- [setHeight](DChartPlotAreaTwofoldSubParent.md#setheight)
- [setParent](DChartPlotAreaTwofoldSubParent.md#setparent)
- [setTransform](DChartPlotAreaTwofoldSubParent.md#settransform)
- [setWidth](DChartPlotAreaTwofoldSubParent.md#setwidth)
- [setX](DChartPlotAreaTwofoldSubParent.md#setx)
- [setY](DChartPlotAreaTwofoldSubParent.md#sety)
- [show](DChartPlotAreaTwofoldSubParent.md#show)
- [sortChildren](DChartPlotAreaTwofoldSubParent.md#sortchildren)
- [swapChildren](DChartPlotAreaTwofoldSubParent.md#swapchildren)
- [toCursor](DChartPlotAreaTwofoldSubParent.md#tocursor)
- [toDirty](DChartPlotAreaTwofoldSubParent.md#todirty)
- [toGlobal](DChartPlotAreaTwofoldSubParent.md#toglobal)
- [toHasDirty](DChartPlotAreaTwofoldSubParent.md#tohasdirty)
- [toHierarchyDirty](DChartPlotAreaTwofoldSubParent.md#tohierarchydirty)
- [toLocal](DChartPlotAreaTwofoldSubParent.md#tolocal)
- [toParentHasDirty](DChartPlotAreaTwofoldSubParent.md#toparenthasdirty)
- [toParentHierarchyDirty](DChartPlotAreaTwofoldSubParent.md#toparenthierarchydirty)
- [toParentResized](DChartPlotAreaTwofoldSubParent.md#toparentresized)
- [updateTransform](DChartPlotAreaTwofoldSubParent.md#updatetransform)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_accessibleActive](DChartPlotArea.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8559

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_accessibleDiv](DChartPlotArea.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](../classes/DBaseAutoSet.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_auto](DChartPlotArea.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_background](DChartPlotArea.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](DBorderStateAware.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_border](DChartPlotArea.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_bounds](DChartPlotArea.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_boundsID](DChartPlotArea.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_boundsRect](DChartPlotArea.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_clearType](DChartPlotArea.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](DCorner.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_corner](DChartPlotArea.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_cursor](DChartPlotArea.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_destroyed](DChartPlotArea.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_enabledFilters](DChartPlotArea.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_lastDownPoint](DChartPlotArea.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_lastSortedIndex](DChartPlotArea.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_localBounds](DChartPlotArea.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_localBoundsRect](DChartPlotArea.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_mask](DChartPlotArea.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_options

• `Protected` **\_options**: `undefined` \| [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_options](DChartPlotArea.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](DOutline.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_outline](DChartPlotArea.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](DPadding.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_padding](DChartPlotArea.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_reflowable](DChartPlotArea.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_shortcuts](DChartPlotArea.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_snippet](DChartPlotArea.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_tempDisplayObjectParent](DChartPlotArea.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_title](DChartPlotArea.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_zIndex](DChartPlotArea.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8652

___

### accessible

• **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[accessible](DChartPlotArea.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8538

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

[DChartPlotArea](DChartPlotArea.md).[accessibleChildren](DChartPlotArea.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[accessibleHint](DChartPlotArea.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

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

[DChartPlotArea](DChartPlotArea.md).[accessiblePointerEvents](DChartPlotArea.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[accessibleTitle](DChartPlotArea.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8546

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

[DChartPlotArea](DChartPlotArea.md).[accessibleType](DChartPlotArea.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[alpha](DChartPlotArea.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[angle](DChartPlotArea.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8882

___

### axis

• `Readonly` **axis**: [`DChartAxisContainer`](DChartAxisContainer.md)\<`CHART`\>

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[axis](DChartPlotArea.md#axis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L57)

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

[DChartPlotArea](DChartPlotArea.md).[buttonMode](DChartPlotArea.md#buttonmode)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8964

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

[DChartPlotArea](DChartPlotArea.md).[cacheAsBitmap](DChartPlotArea.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### chart

• `Readonly` **chart**: `CHART`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[chart](DChartPlotArea.md#chart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L53)

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[children](DChartPlotArea.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8327

___

### container

• `Readonly` **container**: [`DChartPlotAreaContainer`](../classes/DChartPlotAreaContainer.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[container](DChartPlotArea.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L56)

___

### coordinate

• `Readonly` **coordinate**: [`DChartCoordinateContainer`](DChartCoordinateContainer.md)\<`CHART`\>

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[coordinate](DChartPlotArea.md#coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L54)

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

[DChartPlotArea](DChartPlotArea.md).[cursor](DChartPlotArea.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8978

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`Member`**

PIXI.DisplayObject#filterArea

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[filterArea](DChartPlotArea.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8661

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`Member`**

PIXI.DisplayObject#filters

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[filters](DChartPlotArea.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8669

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

[DChartPlotArea](DChartPlotArea.md).[hitArea](DChartPlotArea.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8952

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

[DChartPlotArea](DChartPlotArea.md).[interactive](DChartPlotArea.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8940

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`Member`**

**`Memberof`**

PIXI.Container#

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[interactiveChildren](DChartPlotArea.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[isMask](DChartPlotArea.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[isSprite](DChartPlotArea.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[localTransform](DChartPlotArea.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8840

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

[DChartPlotArea](DChartPlotArea.md).[mask](DChartPlotArea.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8918

___

### name

• **name**: `string`

The instance name of the object.

**`Memberof`**

PIXI.DisplayObject#

**`Member`**

name

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[name](DChartPlotArea.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[parent](DChartPlotArea.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[pivot](DChartPlotArea.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8861

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`Member`**

PIXI.DisplayObject#renderable

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[renderable](DChartPlotArea.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[rotation](DChartPlotArea.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8875

___

### series

• `Readonly` **series**: [`DChartSeriesContainer`](DChartSeriesContainer.md)\<`CHART`\>

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[series](DChartPlotArea.md#series)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L55)

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[sortDirty](DChartPlotArea.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8350

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

[DChartPlotArea](DChartPlotArea.md).[sortableChildren](DChartPlotArea.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8343

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[transform](DChartPlotArea.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8599

___

### view

• `Readonly` **view**: [`DView`](DView.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[view](DChartPlotArea.md#view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L58)

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[visible](DChartPlotArea.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[worldAlpha](DChartPlotArea.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[worldTransform](DChartPlotArea.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[worldVisible](DChartPlotArea.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8898

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`Member`**

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[zIndex](DChartPlotArea.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Inherited from

DChartPlotArea.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](DBorderStateAware.md)

#### Inherited from

DChartPlotArea.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### corner

• `get` **corner**(): [`DCorner`](DCorner.md)

#### Returns

[`DCorner`](DCorner.md)

#### Inherited from

DChartPlotArea.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotArea.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DChartPlotArea.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DChartPlotArea.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](DOutline.md)

#### Returns

[`DOutline`](DOutline.md)

#### Inherited from

DChartPlotArea.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](DPadding.md)

#### Returns

[`DPadding`](DPadding.md)

#### Inherited from

DChartPlotArea.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DChartPlotArea.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Inherited from

DChartPlotArea.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DChartPlotArea.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](DShadow.md)

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

DChartPlotArea.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](DShadow.md) |

#### Returns

`void`

#### Inherited from

DChartPlotArea.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DChartPlotArea.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Inherited from

DChartPlotArea.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Inherited from

DChartPlotArea.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DChartPlotArea.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1694](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1694)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DChartPlotArea.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DChartPlotArea.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1487)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DChartPlotArea.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DChartPlotArea.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DChartPlotArea.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotArea.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | `number` |

#### Returns

`void`

#### Inherited from

DChartPlotArea.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotArea.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DChartPlotArea.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotArea.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DChartPlotArea.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotArea.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DChartPlotArea.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_calculateBounds](DChartPlotArea.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2084](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2084)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_recursivePostUpdateTransform](DChartPlotArea.md#_recursivepostupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8737

___

### \_render

▸ **_render**(`renderer`): `void`

To be overridden by the subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[_render](DChartPlotArea.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8472

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

[DChartPlotArea](DChartPlotArea.md).[addChild](DChartPlotArea.md#addchild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

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

[DChartPlotArea](DChartPlotArea.md).[addChildAt](DChartPlotArea.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

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

[DChartPlotArea](DChartPlotArea.md).[addListener](DChartPlotArea.md#addlistener)

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

[DChartPlotArea](DChartPlotArea.md).[addListener](DChartPlotArea.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[applyTitle](DChartPlotArea.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### blur

▸ **blur**(`recursively?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

`this`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[blur](DChartPlotArea.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[calculateBounds](DChartPlotArea.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

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

[DChartPlotArea](DChartPlotArea.md).[containerUpdateTransform](DChartPlotArea.md#containerupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8510

___

### containsGlobalPoint

▸ **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[containsGlobalPoint](DChartPlotArea.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2098)

___

### containsLocalPoint

▸ **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[containsLocalPoint](DChartPlotArea.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2102)

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

[DChartPlotArea](DChartPlotArea.md).[containsPoint](DChartPlotArea.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[destroy](DChartPlotArea.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2122)

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

[DChartPlotArea](DChartPlotArea.md).[disableTempParent](DChartPlotArea.md#disabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8812

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

[DChartPlotArea](DChartPlotArea.md).[displayObjectUpdateTransform](DChartPlotArea.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8926

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

[DChartPlotArea](DChartPlotArea.md).[emit](DChartPlotArea.md#emit)

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

[DChartPlotArea](DChartPlotArea.md).[enableTempParent](DChartPlotArea.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[eventNames](DChartPlotArea.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### fit

▸ **fit**(`duration?`, `domainFrom?`, `domainTo?`, `rangeFrom?`, `rangeTo?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |
| `domainFrom?` | `number` |
| `domainTo?` | `number` |
| `rangeFrom?` | `number` |
| `rangeTo?` | `number` |

#### Returns

`this`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[fit](DChartPlotArea.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L60)

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[focus](DChartPlotArea.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[focusOnClosest](DChartPlotArea.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

___

### getAxisBounds

▸ **getAxisBounds**(`position`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition) |

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getAxisBounds](DChartPlotArea.md#getaxisbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L70)

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

[DChartPlotArea](DChartPlotArea.md).[getBounds](DChartPlotArea.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8747

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

[DChartPlotArea](DChartPlotArea.md).[getChildAt](DChartPlotArea.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8401

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

[DChartPlotArea](DChartPlotArea.md).[getChildByName](DChartPlotArea.md#getchildbyname)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8530

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

[DChartPlotArea](DChartPlotArea.md).[getChildIndex](DChartPlotArea.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getClearType](DChartPlotArea.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

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

[DChartPlotArea](DChartPlotArea.md).[getClippingRect](DChartPlotArea.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

___

### getContainerBounds

▸ **getContainerBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getContainerBounds](DChartPlotArea.md#getcontainerbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L73)

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

[DChartPlotArea](DChartPlotArea.md).[getGlobalPosition](DChartPlotArea.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getHeight](DChartPlotArea.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

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

[DChartPlotArea](DChartPlotArea.md).[getLocalBounds](DChartPlotArea.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](DPadding.md) ; `width`: `number`  }

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getParentOfSize](DChartPlotArea.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getPixelBounds

▸ **getPixelBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getPixelBounds](DChartPlotArea.md#getpixelbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L69)

___

### getPixelDomain

▸ **getPixelDomain**(`result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getPixelDomain](DChartPlotArea.md#getpixeldomain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L67)

___

### getPixelRange

▸ **getPixelRange**(`result`): [`DChartRegion`](DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](DChartRegion.md) |

#### Returns

[`DChartRegion`](DChartRegion.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getPixelRange](DChartPlotArea.md#getpixelrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L68)

___

### getSelectionBoundsX

▸ **getSelectionBoundsX**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getSelectionBoundsX](DChartPlotArea.md#getselectionboundsx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L71)

___

### getSelectionBoundsY

▸ **getSelectionBoundsY**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getSelectionBoundsY](DChartPlotArea.md#getselectionboundsy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L72)

___

### getThemeDefault

▸ **getThemeDefault**(): [`DThemeBase`](DThemeBase.md)

#### Returns

[`DThemeBase`](DThemeBase.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getThemeDefault](DChartPlotArea.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getType](DChartPlotArea.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2079](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2079)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getWidth](DChartPlotArea.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getX](DChartPlotArea.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[getY](DChartPlotArea.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[hasDirty](DChartPlotArea.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### hasRefitableHeight

▸ **hasRefitableHeight**(`target`): target is DRefitable

Returns true if the given target has a height that doesn't depend on its parent height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | a target |

#### Returns

target is DRefitable

true if the given target has a height that doesn't depend on its parent height.

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[hasRefitableHeight](DChartPlotArea.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1831)

___

### hasRefitableWidth

▸ **hasRefitableWidth**(`target`): target is DRefitable

Returns true if the given target has a width that doesn't depend on its parent width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | a target |

#### Returns

target is DRefitable

true if the given target has a width that doesn't depend on its parent width.

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[hasRefitableWidth](DChartPlotArea.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[hide](DChartPlotArea.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

___

### init

▸ **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\> |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[init](DChartPlotArea.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1137)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[initReflowable](DChartPlotArea.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[isDirty](DChartPlotArea.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### isEventTarget

▸ **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[isEventTarget](DChartPlotArea.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[isHidden](DChartPlotArea.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[isHierarchyDirty](DChartPlotArea.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

___

### isRefitable

▸ **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[isRefitable](DChartPlotArea.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1821)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[isShown](DChartPlotArea.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1516)

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

[DChartPlotArea](DChartPlotArea.md).[listenerCount](DChartPlotArea.md#listenercount)

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

[DChartPlotArea](DChartPlotArea.md).[listeners](DChartPlotArea.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newPadding

▸ **newPadding**(`theme`, `options?`, `callback?`): [`DBasePadding`](../classes/DBasePadding.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](DThemeBase.md) |
| `options?` | [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\> |
| `callback?` | () => `void` |

#### Returns

[`DBasePadding`](../classes/DBasePadding.md)

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[newPadding](DChartPlotArea.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

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

[DChartPlotArea](DChartPlotArea.md).[off](DChartPlotArea.md#off)

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

[DChartPlotArea](DChartPlotArea.md).[on](DChartPlotArea.md#on)

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

[DChartPlotArea](DChartPlotArea.md).[on](DChartPlotArea.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onBlur](DChartPlotArea.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

___

### onChildBlur

▸ **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onChildBlur](DChartPlotArea.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### onChildFocus

▸ **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onChildFocus](DChartPlotArea.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onChildrenChange](DChartPlotArea.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

___

### onDblClick

▸ **onDblClick**(`e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onDblClick](DChartPlotArea.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2051)

___

### onDown

▸ **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onDown](DChartPlotArea.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1979](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1979)

___

### onDownThis

▸ **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onDownThis](DChartPlotArea.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onFocus](DChartPlotArea.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onHierarchyDirty](DChartPlotArea.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[DChartPlotArea](DChartPlotArea.md).[onKeyDown](DChartPlotArea.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1954](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1954)

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

[DChartPlotArea](DChartPlotArea.md).[onKeyUp](DChartPlotArea.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1959](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1959)

___

### onMove

▸ **onMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[DChartPlotArea](DChartPlotArea.md).[onMove](DChartPlotArea.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### onOut

▸ **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onOut](DChartPlotArea.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2042](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2042)

___

### onOver

▸ **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onOver](DChartPlotArea.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2028](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2028)

___

### onParentMove

▸ **onParentMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[DChartPlotArea](DChartPlotArea.md).[onParentMove](DChartPlotArea.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1943](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1943)

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

[DChartPlotArea](DChartPlotArea.md).[onParentResize](DChartPlotArea.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onRefit](DChartPlotArea.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onReflow](DChartPlotArea.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

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

[DChartPlotArea](DChartPlotArea.md).[onResize](DChartPlotArea.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### onScale

▸ **onScale**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[DChartPlotArea](DChartPlotArea.md).[onScale](DChartPlotArea.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1236)

___

### onShortcut

▸ **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onShortcut](DChartPlotArea.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1133)

___

### onSkew

▸ **onSkew**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[DChartPlotArea](DChartPlotArea.md).[onSkew](DChartPlotArea.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

___

### onStateChange

▸ **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onStateChange](DChartPlotArea.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1629](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1629)

___

### onUp

▸ **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onUp](DChartPlotArea.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1996](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1996)

___

### onUpThis

▸ **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[onUpThis](DChartPlotArea.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

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

[DChartPlotArea](DChartPlotArea.md).[onWheel](DChartPlotArea.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

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

[DChartPlotArea](DChartPlotArea.md).[once](DChartPlotArea.md#once)

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

[DChartPlotArea](DChartPlotArea.md).[once](DChartPlotArea.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[reflow](DChartPlotArea.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

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

[DChartPlotArea](DChartPlotArea.md).[removeAllListeners](DChartPlotArea.md#removealllisteners)

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

[DChartPlotArea](DChartPlotArea.md).[removeAllListeners](DChartPlotArea.md#removealllisteners)

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

[DChartPlotArea](DChartPlotArea.md).[removeChild](DChartPlotArea.md#removechild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8408

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

[DChartPlotArea](DChartPlotArea.md).[removeChildAt](DChartPlotArea.md#removechildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8415

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

[DChartPlotArea](DChartPlotArea.md).[removeChildren](DChartPlotArea.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8423

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

[DChartPlotArea](DChartPlotArea.md).[removeListener](DChartPlotArea.md#removelistener)

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

[DChartPlotArea](DChartPlotArea.md).[removeListener](DChartPlotArea.md#removelistener)

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

[DChartPlotArea](DChartPlotArea.md).[render](DChartPlotArea.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

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

[DChartPlotArea](DChartPlotArea.md).[renderAdvanced](DChartPlotArea.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8465

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

[DChartPlotArea](DChartPlotArea.md).[resize](DChartPlotArea.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

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

[DChartPlotArea](DChartPlotArea.md).[setChildIndex](DChartPlotArea.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8394

___

### setFocused

▸ **setFocused**(`isFocused`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`this`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[setFocused](DChartPlotArea.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

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

[DChartPlotArea](DChartPlotArea.md).[setHeight](DChartPlotArea.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1402)

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

[DChartPlotArea](DChartPlotArea.md).[setParent](DChartPlotArea.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8775

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

[DChartPlotArea](DChartPlotArea.md).[setTransform](DChartPlotArea.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8790

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

[DChartPlotArea](DChartPlotArea.md).[setWidth](DChartPlotArea.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

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

[DChartPlotArea](DChartPlotArea.md).[setX](DChartPlotArea.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1268)

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

[DChartPlotArea](DChartPlotArea.md).[setY](DChartPlotArea.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[show](DChartPlotArea.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[sortChildren](DChartPlotArea.md#sortchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8427

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

[DChartPlotArea](DChartPlotArea.md).[swapChildren](DChartPlotArea.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

___

### toCursor

▸ **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\> |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[toCursor](DChartPlotArea.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[toDirty](DChartPlotArea.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1534)

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

[DChartPlotArea](DChartPlotArea.md).[toGlobal](DChartPlotArea.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[toHasDirty](DChartPlotArea.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[toHierarchyDirty](DChartPlotArea.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

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

[DChartPlotArea](DChartPlotArea.md).[toLocal](DChartPlotArea.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[toParentHasDirty](DChartPlotArea.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[toParentHierarchyDirty](DChartPlotArea.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[toParentResized](DChartPlotArea.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotArea](DChartPlotArea.md).[updateTransform](DChartPlotArea.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2069](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2069)
