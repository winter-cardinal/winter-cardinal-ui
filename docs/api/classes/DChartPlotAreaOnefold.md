[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaOnefold

# Class: DChartPlotAreaOnefold\<CHART, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `THEME` | extends [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) = [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) |
| `OPTIONS` | extends [`DChartPlotAreaSingleOptions`](../interfaces/DChartPlotAreaSingleOptions.md)\<`CHART`, `THEME`\> = [`DChartPlotAreaSingleOptions`](../interfaces/DChartPlotAreaSingleOptions.md)\<`CHART`, `THEME`\> |

## Hierarchy

- [`DChartPlotAreaBase`](DChartPlotAreaBase.md)\<`CHART`, `THEME`, `OPTIONS`\>

  ↳ **`DChartPlotAreaOnefold`**

## Table of contents

### Constructors

- [constructor](DChartPlotAreaOnefold.md#constructor)

### Properties

- [\_accessibleActive](DChartPlotAreaOnefold.md#_accessibleactive)
- [\_accessibleDiv](DChartPlotAreaOnefold.md#_accessiblediv)
- [\_auto](DChartPlotAreaOnefold.md#_auto)
- [\_axis](DChartPlotAreaOnefold.md#_axis)
- [\_background](DChartPlotAreaOnefold.md#_background)
- [\_blendDuration](DChartPlotAreaOnefold.md#_blendduration)
- [\_blendStartTime](DChartPlotAreaOnefold.md#_blendstarttime)
- [\_blendTimeout](DChartPlotAreaOnefold.md#_blendtimeout)
- [\_border](DChartPlotAreaOnefold.md#_border)
- [\_bounds](DChartPlotAreaOnefold.md#_bounds)
- [\_boundsID](DChartPlotAreaOnefold.md#_boundsid)
- [\_boundsRect](DChartPlotAreaOnefold.md#_boundsrect)
- [\_chart](DChartPlotAreaOnefold.md#_chart)
- [\_clearType](DChartPlotAreaOnefold.md#_cleartype)
- [\_container](DChartPlotAreaOnefold.md#_container)
- [\_containerBounds](DChartPlotAreaOnefold.md#_containerbounds)
- [\_coordinate](DChartPlotAreaOnefold.md#_coordinate)
- [\_corner](DChartPlotAreaOnefold.md#_corner)
- [\_cursor](DChartPlotAreaOnefold.md#_cursor)
- [\_destroyed](DChartPlotAreaOnefold.md#_destroyed)
- [\_enabledFilters](DChartPlotAreaOnefold.md#_enabledfilters)
- [\_isContainerBoundsDirty](DChartPlotAreaOnefold.md#_iscontainerboundsdirty)
- [\_isViewDirty](DChartPlotAreaOnefold.md#_isviewdirty)
- [\_lastDownPoint](DChartPlotAreaOnefold.md#_lastdownpoint)
- [\_lastSortedIndex](DChartPlotAreaOnefold.md#_lastsortedindex)
- [\_localBounds](DChartPlotAreaOnefold.md#_localbounds)
- [\_localBoundsRect](DChartPlotAreaOnefold.md#_localboundsrect)
- [\_mask](DChartPlotAreaOnefold.md#_mask)
- [\_onBlendBound](DChartPlotAreaOnefold.md#_onblendbound)
- [\_options](DChartPlotAreaOnefold.md#_options)
- [\_outline](DChartPlotAreaOnefold.md#_outline)
- [\_overflowMask](DChartPlotAreaOnefold.md#_overflowmask)
- [\_padding](DChartPlotAreaOnefold.md#_padding)
- [\_pixelBounds](DChartPlotAreaOnefold.md#_pixelbounds)
- [\_reflowable](DChartPlotAreaOnefold.md#_reflowable)
- [\_series](DChartPlotAreaOnefold.md#_series)
- [\_shortcuts](DChartPlotAreaOnefold.md#_shortcuts)
- [\_snippet](DChartPlotAreaOnefold.md#_snippet)
- [\_tempDisplayObjectParent](DChartPlotAreaOnefold.md#_tempdisplayobjectparent)
- [\_title](DChartPlotAreaOnefold.md#_title)
- [\_view](DChartPlotAreaOnefold.md#_view)
- [\_workPoint](DChartPlotAreaOnefold.md#_workpoint)
- [\_zIndex](DChartPlotAreaOnefold.md#_zindex)
- [accessible](DChartPlotAreaOnefold.md#accessible)
- [accessibleChildren](DChartPlotAreaOnefold.md#accessiblechildren)
- [accessibleHint](DChartPlotAreaOnefold.md#accessiblehint)
- [accessiblePointerEvents](DChartPlotAreaOnefold.md#accessiblepointerevents)
- [accessibleTitle](DChartPlotAreaOnefold.md#accessibletitle)
- [accessibleType](DChartPlotAreaOnefold.md#accessibletype)
- [alpha](DChartPlotAreaOnefold.md#alpha)
- [angle](DChartPlotAreaOnefold.md#angle)
- [buttonMode](DChartPlotAreaOnefold.md#buttonmode)
- [cacheAsBitmap](DChartPlotAreaOnefold.md#cacheasbitmap)
- [children](DChartPlotAreaOnefold.md#children)
- [cursor](DChartPlotAreaOnefold.md#cursor)
- [filterArea](DChartPlotAreaOnefold.md#filterarea)
- [filters](DChartPlotAreaOnefold.md#filters)
- [hitArea](DChartPlotAreaOnefold.md#hitarea)
- [interactive](DChartPlotAreaOnefold.md#interactive)
- [interactiveChildren](DChartPlotAreaOnefold.md#interactivechildren)
- [isMask](DChartPlotAreaOnefold.md#ismask)
- [isSprite](DChartPlotAreaOnefold.md#issprite)
- [localTransform](DChartPlotAreaOnefold.md#localtransform)
- [mask](DChartPlotAreaOnefold.md#mask)
- [name](DChartPlotAreaOnefold.md#name)
- [parent](DChartPlotAreaOnefold.md#parent)
- [pivot](DChartPlotAreaOnefold.md#pivot)
- [renderable](DChartPlotAreaOnefold.md#renderable)
- [rotation](DChartPlotAreaOnefold.md#rotation)
- [sortDirty](DChartPlotAreaOnefold.md#sortdirty)
- [sortableChildren](DChartPlotAreaOnefold.md#sortablechildren)
- [transform](DChartPlotAreaOnefold.md#transform)
- [visible](DChartPlotAreaOnefold.md#visible)
- [worldAlpha](DChartPlotAreaOnefold.md#worldalpha)
- [worldTransform](DChartPlotAreaOnefold.md#worldtransform)
- [worldVisible](DChartPlotAreaOnefold.md#worldvisible)
- [zIndex](DChartPlotAreaOnefold.md#zindex)
- [WORK\_CONTAINS\_POINT](DChartPlotAreaOnefold.md#work_contains_point)

### Accessors

- [axis](DChartPlotAreaOnefold.md#axis)
- [background](DChartPlotAreaOnefold.md#background)
- [border](DChartPlotAreaOnefold.md#border)
- [chart](DChartPlotAreaOnefold.md#chart)
- [container](DChartPlotAreaOnefold.md#container)
- [coordinate](DChartPlotAreaOnefold.md#coordinate)
- [corner](DChartPlotAreaOnefold.md#corner)
- [height](DChartPlotAreaOnefold.md#height)
- [options](DChartPlotAreaOnefold.md#options)
- [outline](DChartPlotAreaOnefold.md#outline)
- [padding](DChartPlotAreaOnefold.md#padding)
- [position](DChartPlotAreaOnefold.md#position)
- [reflowable](DChartPlotAreaOnefold.md#reflowable)
- [scale](DChartPlotAreaOnefold.md#scale)
- [series](DChartPlotAreaOnefold.md#series)
- [shadow](DChartPlotAreaOnefold.md#shadow)
- [skew](DChartPlotAreaOnefold.md#skew)
- [snippet](DChartPlotAreaOnefold.md#snippet)
- [state](DChartPlotAreaOnefold.md#state)
- [theme](DChartPlotAreaOnefold.md#theme)
- [title](DChartPlotAreaOnefold.md#title)
- [type](DChartPlotAreaOnefold.md#type)
- [unsafe](DChartPlotAreaOnefold.md#unsafe)
- [view](DChartPlotAreaOnefold.md#view)
- [weight](DChartPlotAreaOnefold.md#weight)
- [width](DChartPlotAreaOnefold.md#width)
- [x](DChartPlotAreaOnefold.md#x)
- [y](DChartPlotAreaOnefold.md#y)

### Methods

- [\_calculateBounds](DChartPlotAreaOnefold.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DChartPlotAreaOnefold.md#_recursivepostupdatetransform)
- [\_render](DChartPlotAreaOnefold.md#_render)
- [addAxes](DChartPlotAreaOnefold.md#addaxes)
- [addChild](DChartPlotAreaOnefold.md#addchild)
- [addChildAt](DChartPlotAreaOnefold.md#addchildat)
- [addListener](DChartPlotAreaOnefold.md#addlistener)
- [addSeries](DChartPlotAreaOnefold.md#addseries)
- [applyTitle](DChartPlotAreaOnefold.md#applytitle)
- [blur](DChartPlotAreaOnefold.md#blur)
- [calculateBounds](DChartPlotAreaOnefold.md#calculatebounds)
- [containerUpdateTransform](DChartPlotAreaOnefold.md#containerupdatetransform)
- [containsGlobalPoint](DChartPlotAreaOnefold.md#containsglobalpoint)
- [containsLocalPoint](DChartPlotAreaOnefold.md#containslocalpoint)
- [containsPoint](DChartPlotAreaOnefold.md#containspoint)
- [destroy](DChartPlotAreaOnefold.md#destroy)
- [disableTempParent](DChartPlotAreaOnefold.md#disabletempparent)
- [displayObjectUpdateTransform](DChartPlotAreaOnefold.md#displayobjectupdatetransform)
- [emit](DChartPlotAreaOnefold.md#emit)
- [enableTempParent](DChartPlotAreaOnefold.md#enabletempparent)
- [eventNames](DChartPlotAreaOnefold.md#eventnames)
- [fit](DChartPlotAreaOnefold.md#fit)
- [focus](DChartPlotAreaOnefold.md#focus)
- [focusOnClosest](DChartPlotAreaOnefold.md#focusonclosest)
- [getAxisBounds](DChartPlotAreaOnefold.md#getaxisbounds)
- [getBounds](DChartPlotAreaOnefold.md#getbounds)
- [getChildAt](DChartPlotAreaOnefold.md#getchildat)
- [getChildByName](DChartPlotAreaOnefold.md#getchildbyname)
- [getChildIndex](DChartPlotAreaOnefold.md#getchildindex)
- [getClearType](DChartPlotAreaOnefold.md#getcleartype)
- [getClippingRect](DChartPlotAreaOnefold.md#getclippingrect)
- [getContainerBounds](DChartPlotAreaOnefold.md#getcontainerbounds)
- [getGlobalPosition](DChartPlotAreaOnefold.md#getglobalposition)
- [getHeight](DChartPlotAreaOnefold.md#getheight)
- [getLocalBounds](DChartPlotAreaOnefold.md#getlocalbounds)
- [getOverflowMask](DChartPlotAreaOnefold.md#getoverflowmask)
- [getParentOfSize](DChartPlotAreaOnefold.md#getparentofsize)
- [getPixelBounds](DChartPlotAreaOnefold.md#getpixelbounds)
- [getPixelDomain](DChartPlotAreaOnefold.md#getpixeldomain)
- [getPixelRange](DChartPlotAreaOnefold.md#getpixelrange)
- [getSelectionBoundsX](DChartPlotAreaOnefold.md#getselectionboundsx)
- [getSelectionBoundsY](DChartPlotAreaOnefold.md#getselectionboundsy)
- [getThemeDefault](DChartPlotAreaOnefold.md#getthemedefault)
- [getType](DChartPlotAreaOnefold.md#gettype)
- [getWidth](DChartPlotAreaOnefold.md#getwidth)
- [getX](DChartPlotAreaOnefold.md#getx)
- [getY](DChartPlotAreaOnefold.md#gety)
- [hasDirty](DChartPlotAreaOnefold.md#hasdirty)
- [hasRefitableHeight](DChartPlotAreaOnefold.md#hasrefitableheight)
- [hasRefitableWidth](DChartPlotAreaOnefold.md#hasrefitablewidth)
- [hide](DChartPlotAreaOnefold.md#hide)
- [init](DChartPlotAreaOnefold.md#init)
- [initReflowable](DChartPlotAreaOnefold.md#initreflowable)
- [isDirty](DChartPlotAreaOnefold.md#isdirty)
- [isEventTarget](DChartPlotAreaOnefold.md#iseventtarget)
- [isHidden](DChartPlotAreaOnefold.md#ishidden)
- [isHierarchyDirty](DChartPlotAreaOnefold.md#ishierarchydirty)
- [isRefitable](DChartPlotAreaOnefold.md#isrefitable)
- [isShown](DChartPlotAreaOnefold.md#isshown)
- [listenerCount](DChartPlotAreaOnefold.md#listenercount)
- [listeners](DChartPlotAreaOnefold.md#listeners)
- [newPadding](DChartPlotAreaOnefold.md#newpadding)
- [newView](DChartPlotAreaOnefold.md#newview)
- [off](DChartPlotAreaOnefold.md#off)
- [on](DChartPlotAreaOnefold.md#on)
- [onBlend](DChartPlotAreaOnefold.md#onblend)
- [onBlur](DChartPlotAreaOnefold.md#onblur)
- [onChildBlur](DChartPlotAreaOnefold.md#onchildblur)
- [onChildFocus](DChartPlotAreaOnefold.md#onchildfocus)
- [onChildrenChange](DChartPlotAreaOnefold.md#onchildrenchange)
- [onDblClick](DChartPlotAreaOnefold.md#ondblclick)
- [onDown](DChartPlotAreaOnefold.md#ondown)
- [onDownThis](DChartPlotAreaOnefold.md#ondownthis)
- [onFocus](DChartPlotAreaOnefold.md#onfocus)
- [onHierarchyDirty](DChartPlotAreaOnefold.md#onhierarchydirty)
- [onKeyDown](DChartPlotAreaOnefold.md#onkeydown)
- [onKeyUp](DChartPlotAreaOnefold.md#onkeyup)
- [onMove](DChartPlotAreaOnefold.md#onmove)
- [onOut](DChartPlotAreaOnefold.md#onout)
- [onOver](DChartPlotAreaOnefold.md#onover)
- [onParentMove](DChartPlotAreaOnefold.md#onparentmove)
- [onParentResize](DChartPlotAreaOnefold.md#onparentresize)
- [onRefit](DChartPlotAreaOnefold.md#onrefit)
- [onReflow](DChartPlotAreaOnefold.md#onreflow)
- [onResize](DChartPlotAreaOnefold.md#onresize)
- [onScale](DChartPlotAreaOnefold.md#onscale)
- [onShortcut](DChartPlotAreaOnefold.md#onshortcut)
- [onSkew](DChartPlotAreaOnefold.md#onskew)
- [onStateChange](DChartPlotAreaOnefold.md#onstatechange)
- [onUp](DChartPlotAreaOnefold.md#onup)
- [onUpThis](DChartPlotAreaOnefold.md#onupthis)
- [onViewDirty](DChartPlotAreaOnefold.md#onviewdirty)
- [onWheel](DChartPlotAreaOnefold.md#onwheel)
- [once](DChartPlotAreaOnefold.md#once)
- [reflow](DChartPlotAreaOnefold.md#reflow)
- [removeAllListeners](DChartPlotAreaOnefold.md#removealllisteners)
- [removeChild](DChartPlotAreaOnefold.md#removechild)
- [removeChildAt](DChartPlotAreaOnefold.md#removechildat)
- [removeChildren](DChartPlotAreaOnefold.md#removechildren)
- [removeListener](DChartPlotAreaOnefold.md#removelistener)
- [render](DChartPlotAreaOnefold.md#render)
- [renderAdvanced](DChartPlotAreaOnefold.md#renderadvanced)
- [resize](DChartPlotAreaOnefold.md#resize)
- [setChildIndex](DChartPlotAreaOnefold.md#setchildindex)
- [setFocused](DChartPlotAreaOnefold.md#setfocused)
- [setHeight](DChartPlotAreaOnefold.md#setheight)
- [setParent](DChartPlotAreaOnefold.md#setparent)
- [setTransform](DChartPlotAreaOnefold.md#settransform)
- [setWidth](DChartPlotAreaOnefold.md#setwidth)
- [setX](DChartPlotAreaOnefold.md#setx)
- [setY](DChartPlotAreaOnefold.md#sety)
- [show](DChartPlotAreaOnefold.md#show)
- [sortChildren](DChartPlotAreaOnefold.md#sortchildren)
- [swapChildren](DChartPlotAreaOnefold.md#swapchildren)
- [toCursor](DChartPlotAreaOnefold.md#tocursor)
- [toDirty](DChartPlotAreaOnefold.md#todirty)
- [toGlobal](DChartPlotAreaOnefold.md#toglobal)
- [toHasDirty](DChartPlotAreaOnefold.md#tohasdirty)
- [toHierarchyDirty](DChartPlotAreaOnefold.md#tohierarchydirty)
- [toLocal](DChartPlotAreaOnefold.md#tolocal)
- [toParentHasDirty](DChartPlotAreaOnefold.md#toparenthasdirty)
- [toParentHierarchyDirty](DChartPlotAreaOnefold.md#toparenthierarchydirty)
- [toParentResized](DChartPlotAreaOnefold.md#toparentresized)
- [updateTransform](DChartPlotAreaOnefold.md#updatetransform)
- [mixin](DChartPlotAreaOnefold.md#mixin)

## Constructors

### constructor

• **new DChartPlotAreaOnefold**\<`CHART`, `THEME`, `OPTIONS`\>(`chart`, `options?`): [`DChartPlotAreaOnefold`](DChartPlotAreaOnefold.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `THEME` | extends [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) = [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) |
| `OPTIONS` | extends [`DChartPlotAreaSingleOptions`](../interfaces/DChartPlotAreaSingleOptions.md)\<`CHART`, `THEME`\> = [`DChartPlotAreaSingleOptions`](../interfaces/DChartPlotAreaSingleOptions.md)\<`CHART`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chart` | `CHART` |
| `options?` | `OPTIONS` |

#### Returns

[`DChartPlotAreaOnefold`](DChartPlotAreaOnefold.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Overrides

[DChartPlotAreaBase](DChartPlotAreaBase.md).[constructor](DChartPlotAreaBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L55)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_accessibleActive](DChartPlotAreaBase.md#_accessibleactive)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_accessibleDiv](DChartPlotAreaBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_auto](DChartPlotAreaBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_axis

• `Protected` **\_axis**: [`DChartAxisContainerImpl`](DChartAxisContainerImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L53)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_background](DChartPlotAreaBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_blendDuration

• `Protected` **\_blendDuration**: `number`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_blendDuration](DChartPlotAreaBase.md#_blendduration)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L41)

___

### \_blendStartTime

• `Protected` **\_blendStartTime**: `number`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_blendStartTime](DChartPlotAreaBase.md#_blendstarttime)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L40)

___

### \_blendTimeout

• `Protected` **\_blendTimeout**: ``null`` \| `number`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_blendTimeout](DChartPlotAreaBase.md#_blendtimeout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L42)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_border](DChartPlotAreaBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_bounds](DChartPlotAreaBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_boundsID](DChartPlotAreaBase.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_boundsRect](DChartPlotAreaBase.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_chart

• `Protected` **\_chart**: `CHART`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_chart](DChartPlotAreaBase.md#_chart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L34)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_clearType](DChartPlotAreaBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_container

• `Protected` **\_container**: [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L50)

___

### \_containerBounds

• `Protected` **\_containerBounds**: `Rectangle`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_containerBounds](DChartPlotAreaBase.md#_containerbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L29)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L52)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_corner](DChartPlotAreaBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_cursor](DChartPlotAreaBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_destroyed](DChartPlotAreaBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_enabledFilters](DChartPlotAreaBase.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_isContainerBoundsDirty

• `Protected` **\_isContainerBoundsDirty**: `boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_isContainerBoundsDirty](DChartPlotAreaBase.md#_iscontainerboundsdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L28)

___

### \_isViewDirty

• `Protected` **\_isViewDirty**: `boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_isViewDirty](DChartPlotAreaBase.md#_isviewdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L37)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_lastDownPoint](DChartPlotAreaBase.md#_lastdownpoint)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_lastSortedIndex](DChartPlotAreaBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_localBounds](DChartPlotAreaBase.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_localBoundsRect](DChartPlotAreaBase.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_mask](DChartPlotAreaBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_onBlendBound

• `Protected` **\_onBlendBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_onBlendBound](DChartPlotAreaBase.md#_onblendbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L43)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_options](DChartPlotAreaBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_outline](DChartPlotAreaBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_overflowMask](DChartPlotAreaBase.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L38)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_padding](DChartPlotAreaBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_pixelBounds

• `Protected` **\_pixelBounds**: `Rectangle`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_pixelBounds](DChartPlotAreaBase.md#_pixelbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L32)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_reflowable](DChartPlotAreaBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_series

• `Protected` **\_series**: [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L51)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_shortcuts](DChartPlotAreaBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_snippet](DChartPlotAreaBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_tempDisplayObjectParent](DChartPlotAreaBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_title](DChartPlotAreaBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_view

• `Protected` **\_view**: [`DViewImpl`](DViewImpl.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_view](DChartPlotAreaBase.md#_view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L36)

___

### \_workPoint

• `Protected` **\_workPoint**: `Point`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_workPoint](DChartPlotAreaBase.md#_workpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L30)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_zIndex](DChartPlotAreaBase.md#_zindex)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[accessible](DChartPlotAreaBase.md#accessible)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[accessibleChildren](DChartPlotAreaBase.md#accessiblechildren)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[accessibleHint](DChartPlotAreaBase.md#accessiblehint)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[accessiblePointerEvents](DChartPlotAreaBase.md#accessiblepointerevents)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[accessibleTitle](DChartPlotAreaBase.md#accessibletitle)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[accessibleType](DChartPlotAreaBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[alpha](DChartPlotAreaBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[angle](DChartPlotAreaBase.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8882

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[buttonMode](DChartPlotAreaBase.md#buttonmode)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[cacheAsBitmap](DChartPlotAreaBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[children](DChartPlotAreaBase.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8327

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[cursor](DChartPlotAreaBase.md#cursor)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[filterArea](DChartPlotAreaBase.md#filterarea)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[filters](DChartPlotAreaBase.md#filters)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[hitArea](DChartPlotAreaBase.md#hitarea)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[interactive](DChartPlotAreaBase.md#interactive)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[interactiveChildren](DChartPlotAreaBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[isMask](DChartPlotAreaBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[isSprite](DChartPlotAreaBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[localTransform](DChartPlotAreaBase.md#localtransform)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[mask](DChartPlotAreaBase.md#mask)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[name](DChartPlotAreaBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[parent](DChartPlotAreaBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[pivot](DChartPlotAreaBase.md#pivot)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[renderable](DChartPlotAreaBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[rotation](DChartPlotAreaBase.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8875

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[sortDirty](DChartPlotAreaBase.md#sortdirty)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[sortableChildren](DChartPlotAreaBase.md#sortablechildren)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[transform](DChartPlotAreaBase.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8599

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[visible](DChartPlotAreaBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[worldAlpha](DChartPlotAreaBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[worldTransform](DChartPlotAreaBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[worldVisible](DChartPlotAreaBase.md#worldvisible)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[zIndex](DChartPlotAreaBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[WORK_CONTAINS_POINT](DChartPlotAreaBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### axis

• `get` **axis**(): [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Overrides

DChartPlotAreaBase.axis

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L146)

___

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DChartPlotAreaBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DChartPlotAreaBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### chart

• `get` **chart**(): `CHART`

#### Returns

`CHART`

#### Inherited from

DChartPlotAreaBase.chart

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L78)

___

### container

• `get` **container**(): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Overrides

DChartPlotAreaBase.container

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L142)

___

### coordinate

• `get` **coordinate**(): [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Overrides

DChartPlotAreaBase.coordinate

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L134)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DChartPlotAreaBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotAreaBase.height

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

DChartPlotAreaBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DChartPlotAreaBase.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DChartPlotAreaBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DChartPlotAreaBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DChartPlotAreaBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DChartPlotAreaBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DChartPlotAreaBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### series

• `get` **series**(): [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Returns

[`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Overrides

DChartPlotAreaBase.series

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L138)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DChartPlotAreaBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DChartPlotAreaBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DChartPlotAreaBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DChartPlotAreaBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DChartPlotAreaBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DChartPlotAreaBase.theme

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

DChartPlotAreaBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DChartPlotAreaBase.title

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

DChartPlotAreaBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DChartPlotAreaBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DChartPlotAreaBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### view

• `get` **view**(): [`DView`](../interfaces/DView.md)

#### Returns

[`DView`](../interfaces/DView.md)

#### Inherited from

DChartPlotAreaBase.view

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L90)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotAreaBase.weight

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

DChartPlotAreaBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotAreaBase.width

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

DChartPlotAreaBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotAreaBase.x

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

DChartPlotAreaBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DChartPlotAreaBase.y

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

DChartPlotAreaBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_calculateBounds](DChartPlotAreaBase.md#_calculatebounds)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_recursivePostUpdateTransform](DChartPlotAreaBase.md#_recursivepostupdatetransform)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[_render](DChartPlotAreaBase.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8472

___

### addAxes

▸ **addAxes**(`axis`, `list?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\> |
| `list?` | [`DChartAxis`](../interfaces/DChartAxis.md)\<`CHART`\>[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L126)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[addChild](DChartPlotAreaBase.md#addchild)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[addChildAt](DChartPlotAreaBase.md#addchildat)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[addListener](DChartPlotAreaBase.md#addlistener)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[addListener](DChartPlotAreaBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### addSeries

▸ **addSeries**(`series`, `list?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `series` | [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\> |
| `list?` | [`DChartSeries`](../interfaces/DChartSeries.md)\<`CHART`\>[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L114)

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[applyTitle](DChartPlotAreaBase.md#applytitle)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[blur](DChartPlotAreaBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[calculateBounds](DChartPlotAreaBase.md#calculatebounds)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[containerUpdateTransform](DChartPlotAreaBase.md#containerupdatetransform)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[containsGlobalPoint](DChartPlotAreaBase.md#containsglobalpoint)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[containsLocalPoint](DChartPlotAreaBase.md#containslocalpoint)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[containsPoint](DChartPlotAreaBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[DChartPlotAreaBase](DChartPlotAreaBase.md).[destroy](DChartPlotAreaBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L201)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[disableTempParent](DChartPlotAreaBase.md#disabletempparent)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[displayObjectUpdateTransform](DChartPlotAreaBase.md#displayobjectupdatetransform)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[emit](DChartPlotAreaBase.md#emit)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[enableTempParent](DChartPlotAreaBase.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[eventNames](DChartPlotAreaBase.md#eventnames)

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

#### Overrides

[DChartPlotAreaBase](DChartPlotAreaBase.md).[fit](DChartPlotAreaBase.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L160)

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[focus](DChartPlotAreaBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[focusOnClosest](DChartPlotAreaBase.md#focusonclosest)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getAxisBounds](DChartPlotAreaBase.md#getaxisbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L147)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getBounds](DChartPlotAreaBase.md#getbounds)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getChildAt](DChartPlotAreaBase.md#getchildat)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getChildByName](DChartPlotAreaBase.md#getchildbyname)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getChildIndex](DChartPlotAreaBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getClearType](DChartPlotAreaBase.md#getcleartype)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getClippingRect](DChartPlotAreaBase.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

___

### getContainerBounds

▸ **getContainerBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getContainerBounds](DChartPlotAreaBase.md#getcontainerbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L159)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getGlobalPosition](DChartPlotAreaBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getHeight](DChartPlotAreaBase.md#getheight)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getLocalBounds](DChartPlotAreaBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getOverflowMask

▸ **getOverflowMask**(): [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Returns

[`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L105)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getParentOfSize](DChartPlotAreaBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getPixelBounds

▸ **getPixelBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getPixelBounds](DChartPlotAreaBase.md#getpixelbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L138)

___

### getPixelDomain

▸ **getPixelDomain**(`result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getPixelDomain](DChartPlotAreaBase.md#getpixeldomain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L128)

___

### getPixelRange

▸ **getPixelRange**(`result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getPixelRange](DChartPlotAreaBase.md#getpixelrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L133)

___

### getSelectionBoundsX

▸ **getSelectionBoundsX**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getSelectionBoundsX](DChartPlotAreaBase.md#getselectionboundsx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L151)

___

### getSelectionBoundsY

▸ **getSelectionBoundsY**(): `Rectangle`

#### Returns

`Rectangle`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getSelectionBoundsY](DChartPlotAreaBase.md#getselectionboundsy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L155)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getThemeDefault](DChartPlotAreaBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getType](DChartPlotAreaBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L193)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getWidth](DChartPlotAreaBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getX](DChartPlotAreaBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[getY](DChartPlotAreaBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[hasDirty](DChartPlotAreaBase.md#hasdirty)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[hasRefitableHeight](DChartPlotAreaBase.md#hasrefitableheight)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[hasRefitableWidth](DChartPlotAreaBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[hide](DChartPlotAreaBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

___

### init

▸ **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[init](DChartPlotAreaBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1137)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[initReflowable](DChartPlotAreaBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[isDirty](DChartPlotAreaBase.md#isdirty)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[isEventTarget](DChartPlotAreaBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[isHidden](DChartPlotAreaBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[isHierarchyDirty](DChartPlotAreaBase.md#ishierarchydirty)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[isRefitable](DChartPlotAreaBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1821)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[isShown](DChartPlotAreaBase.md#isshown)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[listenerCount](DChartPlotAreaBase.md#listenercount)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[listeners](DChartPlotAreaBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newPadding

▸ **newPadding**(`theme`, `options?`, `callback?`): [`DBasePadding`](DBasePadding.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |
| `callback?` | () => `void` |

#### Returns

[`DBasePadding`](DBasePadding.md)

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[newPadding](DChartPlotAreaBase.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newView

▸ **newView**(`options?`): [`DViewImpl`](DViewImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DViewImpl`](DViewImpl.md)

#### Overrides

[DChartPlotAreaBase](DChartPlotAreaBase.md).[newView](DChartPlotAreaBase.md#newview)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L150)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[off](DChartPlotAreaBase.md#off)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[on](DChartPlotAreaBase.md#on)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[on](DChartPlotAreaBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onBlend

▸ **onBlend**(): `void`

#### Returns

`void`

#### Overrides

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onBlend](DChartPlotAreaBase.md#onblend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L187)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onBlur](DChartPlotAreaBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

___

### onChildBlur

▸ **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onChildBlur](DChartPlotAreaBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### onChildFocus

▸ **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onChildFocus](DChartPlotAreaBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onChildrenChange](DChartPlotAreaBase.md#onchildrenchange)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onDblClick](DChartPlotAreaBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L102)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onDown](DChartPlotAreaBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L111)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onDownThis](DChartPlotAreaBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onFocus](DChartPlotAreaBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onHierarchyDirty](DChartPlotAreaBase.md#onhierarchydirty)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onKeyDown](DChartPlotAreaBase.md#onkeydown)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onKeyUp](DChartPlotAreaBase.md#onkeyup)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onMove](DChartPlotAreaBase.md#onmove)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onOut](DChartPlotAreaBase.md#onout)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onOver](DChartPlotAreaBase.md#onover)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onParentMove](DChartPlotAreaBase.md#onparentmove)

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
| `parentPadding` | [`DPadding`](../interfaces/DPadding.md) | - |

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onParentResize](DChartPlotAreaBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onRefit](DChartPlotAreaBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onReflow](DChartPlotAreaBase.md#onreflow)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onResize](DChartPlotAreaBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L67)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onScale](DChartPlotAreaBase.md#onscale)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onShortcut](DChartPlotAreaBase.md#onshortcut)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onSkew](DChartPlotAreaBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

___

### onStateChange

▸ **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onStateChange](DChartPlotAreaBase.md#onstatechange)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onUp](DChartPlotAreaBase.md#onup)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onUpThis](DChartPlotAreaBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

___

### onViewDirty

▸ **onViewDirty**(): `void`

#### Returns

`void`

#### Overrides

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onViewDirty](DChartPlotAreaBase.md#onviewdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L154)

___

### onWheel

▸ **onWheel**(`e`, `deltas`, `global`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |
| `deltas` | [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md) |
| `global` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[onWheel](DChartPlotAreaBase.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L96)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[once](DChartPlotAreaBase.md#once)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[once](DChartPlotAreaBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[reflow](DChartPlotAreaBase.md#reflow)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[removeAllListeners](DChartPlotAreaBase.md#removealllisteners)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[removeAllListeners](DChartPlotAreaBase.md#removealllisteners)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[removeChild](DChartPlotAreaBase.md#removechild)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[removeChildAt](DChartPlotAreaBase.md#removechildat)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[removeChildren](DChartPlotAreaBase.md#removechildren)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[removeListener](DChartPlotAreaBase.md#removelistener)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[removeListener](DChartPlotAreaBase.md#removelistener)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[render](DChartPlotAreaBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L116)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[renderAdvanced](DChartPlotAreaBase.md#renderadvanced)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[resize](DChartPlotAreaBase.md#resize)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[setChildIndex](DChartPlotAreaBase.md#setchildindex)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[setFocused](DChartPlotAreaBase.md#setfocused)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[setHeight](DChartPlotAreaBase.md#setheight)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[setParent](DChartPlotAreaBase.md#setparent)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[setTransform](DChartPlotAreaBase.md#settransform)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[setWidth](DChartPlotAreaBase.md#setwidth)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[setX](DChartPlotAreaBase.md#setx)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[setY](DChartPlotAreaBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[show](DChartPlotAreaBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[sortChildren](DChartPlotAreaBase.md#sortchildren)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[swapChildren](DChartPlotAreaBase.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

___

### toCursor

▸ **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\> |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[toCursor](DChartPlotAreaBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[toDirty](DChartPlotAreaBase.md#todirty)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[toGlobal](DChartPlotAreaBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[toHasDirty](DChartPlotAreaBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[toHierarchyDirty](DChartPlotAreaBase.md#tohierarchydirty)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[toLocal](DChartPlotAreaBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[toParentHasDirty](DChartPlotAreaBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[toParentHierarchyDirty](DChartPlotAreaBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[toParentResized](DChartPlotAreaBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[DChartPlotAreaBase](DChartPlotAreaBase.md).[updateTransform](DChartPlotAreaBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2069](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2069)

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

[DChartPlotAreaBase](DChartPlotAreaBase.md).[mixin](DChartPlotAreaBase.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
