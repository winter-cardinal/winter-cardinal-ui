[Winter Cardinal UI - v0.442.0](../index.md) / DChartPlotAreaBase

# Class: DChartPlotAreaBase\<CHART, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `THEME` | extends [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) = [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) |
| `OPTIONS` | extends [`DChartPlotAreaOptions`](../interfaces/DChartPlotAreaOptions.md)\<`CHART`, `THEME`\> = [`DChartPlotAreaOptions`](../interfaces/DChartPlotAreaOptions.md)\<`CHART`, `THEME`\> |

## Hierarchy

- [`DBase`](DBase.md)\<`THEME`, `OPTIONS`\>

  ↳ **`DChartPlotAreaBase`**

  ↳↳ [`DChartPlotAreaOnefold`](DChartPlotAreaOnefold.md)

  ↳↳ [`DChartPlotAreaTwofold`](DChartPlotAreaTwofold.md)

## Implements

- [`DChartPlotArea`](../interfaces/DChartPlotArea.md)\<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartPlotAreaBase.md#constructor)

### Properties

- [\_accessibleActive](DChartPlotAreaBase.md#_accessibleactive)
- [\_accessibleDiv](DChartPlotAreaBase.md#_accessiblediv)
- [\_auto](DChartPlotAreaBase.md#_auto)
- [\_background](DChartPlotAreaBase.md#_background)
- [\_blendDuration](DChartPlotAreaBase.md#_blendduration)
- [\_blendStartTime](DChartPlotAreaBase.md#_blendstarttime)
- [\_blendTimeout](DChartPlotAreaBase.md#_blendtimeout)
- [\_border](DChartPlotAreaBase.md#_border)
- [\_bounds](DChartPlotAreaBase.md#_bounds)
- [\_boundsID](DChartPlotAreaBase.md#_boundsid)
- [\_boundsRect](DChartPlotAreaBase.md#_boundsrect)
- [\_chart](DChartPlotAreaBase.md#_chart)
- [\_clearType](DChartPlotAreaBase.md#_cleartype)
- [\_containerBounds](DChartPlotAreaBase.md#_containerbounds)
- [\_corner](DChartPlotAreaBase.md#_corner)
- [\_cursor](DChartPlotAreaBase.md#_cursor)
- [\_destroyed](DChartPlotAreaBase.md#_destroyed)
- [\_enabledFilters](DChartPlotAreaBase.md#_enabledfilters)
- [\_isContainerBoundsDirty](DChartPlotAreaBase.md#_iscontainerboundsdirty)
- [\_isViewDirty](DChartPlotAreaBase.md#_isviewdirty)
- [\_lastDownPoint](DChartPlotAreaBase.md#_lastdownpoint)
- [\_lastSortedIndex](DChartPlotAreaBase.md#_lastsortedindex)
- [\_localBounds](DChartPlotAreaBase.md#_localbounds)
- [\_localBoundsRect](DChartPlotAreaBase.md#_localboundsrect)
- [\_mask](DChartPlotAreaBase.md#_mask)
- [\_onBlendBound](DChartPlotAreaBase.md#_onblendbound)
- [\_options](DChartPlotAreaBase.md#_options)
- [\_outline](DChartPlotAreaBase.md#_outline)
- [\_overflowMask](DChartPlotAreaBase.md#_overflowmask)
- [\_padding](DChartPlotAreaBase.md#_padding)
- [\_pixelBounds](DChartPlotAreaBase.md#_pixelbounds)
- [\_reflowable](DChartPlotAreaBase.md#_reflowable)
- [\_shortcuts](DChartPlotAreaBase.md#_shortcuts)
- [\_snippet](DChartPlotAreaBase.md#_snippet)
- [\_tempDisplayObjectParent](DChartPlotAreaBase.md#_tempdisplayobjectparent)
- [\_title](DChartPlotAreaBase.md#_title)
- [\_view](DChartPlotAreaBase.md#_view)
- [\_workPoint](DChartPlotAreaBase.md#_workpoint)
- [\_zIndex](DChartPlotAreaBase.md#_zindex)
- [accessible](DChartPlotAreaBase.md#accessible)
- [accessibleChildren](DChartPlotAreaBase.md#accessiblechildren)
- [accessibleHint](DChartPlotAreaBase.md#accessiblehint)
- [accessiblePointerEvents](DChartPlotAreaBase.md#accessiblepointerevents)
- [accessibleTitle](DChartPlotAreaBase.md#accessibletitle)
- [accessibleType](DChartPlotAreaBase.md#accessibletype)
- [alpha](DChartPlotAreaBase.md#alpha)
- [angle](DChartPlotAreaBase.md#angle)
- [buttonMode](DChartPlotAreaBase.md#buttonmode)
- [cacheAsBitmap](DChartPlotAreaBase.md#cacheasbitmap)
- [children](DChartPlotAreaBase.md#children)
- [cursor](DChartPlotAreaBase.md#cursor)
- [filterArea](DChartPlotAreaBase.md#filterarea)
- [filters](DChartPlotAreaBase.md#filters)
- [hitArea](DChartPlotAreaBase.md#hitarea)
- [interactive](DChartPlotAreaBase.md#interactive)
- [interactiveChildren](DChartPlotAreaBase.md#interactivechildren)
- [isMask](DChartPlotAreaBase.md#ismask)
- [isSprite](DChartPlotAreaBase.md#issprite)
- [localTransform](DChartPlotAreaBase.md#localtransform)
- [mask](DChartPlotAreaBase.md#mask)
- [name](DChartPlotAreaBase.md#name)
- [parent](DChartPlotAreaBase.md#parent)
- [pivot](DChartPlotAreaBase.md#pivot)
- [renderable](DChartPlotAreaBase.md#renderable)
- [rotation](DChartPlotAreaBase.md#rotation)
- [sortDirty](DChartPlotAreaBase.md#sortdirty)
- [sortableChildren](DChartPlotAreaBase.md#sortablechildren)
- [transform](DChartPlotAreaBase.md#transform)
- [visible](DChartPlotAreaBase.md#visible)
- [worldAlpha](DChartPlotAreaBase.md#worldalpha)
- [worldTransform](DChartPlotAreaBase.md#worldtransform)
- [worldVisible](DChartPlotAreaBase.md#worldvisible)
- [zIndex](DChartPlotAreaBase.md#zindex)
- [WORK\_CONTAINS\_POINT](DChartPlotAreaBase.md#work_contains_point)

### Accessors

- [axis](DChartPlotAreaBase.md#axis)
- [background](DChartPlotAreaBase.md#background)
- [border](DChartPlotAreaBase.md#border)
- [chart](DChartPlotAreaBase.md#chart)
- [container](DChartPlotAreaBase.md#container)
- [coordinate](DChartPlotAreaBase.md#coordinate)
- [corner](DChartPlotAreaBase.md#corner)
- [height](DChartPlotAreaBase.md#height)
- [options](DChartPlotAreaBase.md#options)
- [outline](DChartPlotAreaBase.md#outline)
- [padding](DChartPlotAreaBase.md#padding)
- [position](DChartPlotAreaBase.md#position)
- [reflowable](DChartPlotAreaBase.md#reflowable)
- [scale](DChartPlotAreaBase.md#scale)
- [series](DChartPlotAreaBase.md#series)
- [shadow](DChartPlotAreaBase.md#shadow)
- [skew](DChartPlotAreaBase.md#skew)
- [snippet](DChartPlotAreaBase.md#snippet)
- [state](DChartPlotAreaBase.md#state)
- [theme](DChartPlotAreaBase.md#theme)
- [title](DChartPlotAreaBase.md#title)
- [type](DChartPlotAreaBase.md#type)
- [unsafe](DChartPlotAreaBase.md#unsafe)
- [view](DChartPlotAreaBase.md#view)
- [weight](DChartPlotAreaBase.md#weight)
- [width](DChartPlotAreaBase.md#width)
- [x](DChartPlotAreaBase.md#x)
- [y](DChartPlotAreaBase.md#y)

### Methods

- [\_calculateBounds](DChartPlotAreaBase.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DChartPlotAreaBase.md#_recursivepostupdatetransform)
- [\_render](DChartPlotAreaBase.md#_render)
- [addChild](DChartPlotAreaBase.md#addchild)
- [addChildAt](DChartPlotAreaBase.md#addchildat)
- [addListener](DChartPlotAreaBase.md#addlistener)
- [applyTitle](DChartPlotAreaBase.md#applytitle)
- [blur](DChartPlotAreaBase.md#blur)
- [calculateBounds](DChartPlotAreaBase.md#calculatebounds)
- [containerUpdateTransform](DChartPlotAreaBase.md#containerupdatetransform)
- [containsGlobalPoint](DChartPlotAreaBase.md#containsglobalpoint)
- [containsLocalPoint](DChartPlotAreaBase.md#containslocalpoint)
- [containsPoint](DChartPlotAreaBase.md#containspoint)
- [destroy](DChartPlotAreaBase.md#destroy)
- [disableTempParent](DChartPlotAreaBase.md#disabletempparent)
- [displayObjectUpdateTransform](DChartPlotAreaBase.md#displayobjectupdatetransform)
- [emit](DChartPlotAreaBase.md#emit)
- [enableTempParent](DChartPlotAreaBase.md#enabletempparent)
- [eventNames](DChartPlotAreaBase.md#eventnames)
- [fit](DChartPlotAreaBase.md#fit)
- [focus](DChartPlotAreaBase.md#focus)
- [focusOnClosest](DChartPlotAreaBase.md#focusonclosest)
- [getAxisBounds](DChartPlotAreaBase.md#getaxisbounds)
- [getBounds](DChartPlotAreaBase.md#getbounds)
- [getChildAt](DChartPlotAreaBase.md#getchildat)
- [getChildByName](DChartPlotAreaBase.md#getchildbyname)
- [getChildIndex](DChartPlotAreaBase.md#getchildindex)
- [getClearType](DChartPlotAreaBase.md#getcleartype)
- [getClippingRect](DChartPlotAreaBase.md#getclippingrect)
- [getContainerBounds](DChartPlotAreaBase.md#getcontainerbounds)
- [getGlobalPosition](DChartPlotAreaBase.md#getglobalposition)
- [getHeight](DChartPlotAreaBase.md#getheight)
- [getLocalBounds](DChartPlotAreaBase.md#getlocalbounds)
- [getParentOfSize](DChartPlotAreaBase.md#getparentofsize)
- [getPixelBounds](DChartPlotAreaBase.md#getpixelbounds)
- [getPixelDomain](DChartPlotAreaBase.md#getpixeldomain)
- [getPixelRange](DChartPlotAreaBase.md#getpixelrange)
- [getSelectionBoundsX](DChartPlotAreaBase.md#getselectionboundsx)
- [getSelectionBoundsY](DChartPlotAreaBase.md#getselectionboundsy)
- [getThemeDefault](DChartPlotAreaBase.md#getthemedefault)
- [getType](DChartPlotAreaBase.md#gettype)
- [getWidth](DChartPlotAreaBase.md#getwidth)
- [getX](DChartPlotAreaBase.md#getx)
- [getY](DChartPlotAreaBase.md#gety)
- [hasDirty](DChartPlotAreaBase.md#hasdirty)
- [hasRefitableHeight](DChartPlotAreaBase.md#hasrefitableheight)
- [hasRefitableWidth](DChartPlotAreaBase.md#hasrefitablewidth)
- [hide](DChartPlotAreaBase.md#hide)
- [init](DChartPlotAreaBase.md#init)
- [initReflowable](DChartPlotAreaBase.md#initreflowable)
- [isDirty](DChartPlotAreaBase.md#isdirty)
- [isEventTarget](DChartPlotAreaBase.md#iseventtarget)
- [isHidden](DChartPlotAreaBase.md#ishidden)
- [isHierarchyDirty](DChartPlotAreaBase.md#ishierarchydirty)
- [isRefitable](DChartPlotAreaBase.md#isrefitable)
- [isShown](DChartPlotAreaBase.md#isshown)
- [listenerCount](DChartPlotAreaBase.md#listenercount)
- [listeners](DChartPlotAreaBase.md#listeners)
- [newPadding](DChartPlotAreaBase.md#newpadding)
- [newView](DChartPlotAreaBase.md#newview)
- [off](DChartPlotAreaBase.md#off)
- [on](DChartPlotAreaBase.md#on)
- [onBlend](DChartPlotAreaBase.md#onblend)
- [onBlur](DChartPlotAreaBase.md#onblur)
- [onChildBlur](DChartPlotAreaBase.md#onchildblur)
- [onChildFocus](DChartPlotAreaBase.md#onchildfocus)
- [onChildrenChange](DChartPlotAreaBase.md#onchildrenchange)
- [onDblClick](DChartPlotAreaBase.md#ondblclick)
- [onDown](DChartPlotAreaBase.md#ondown)
- [onDownThis](DChartPlotAreaBase.md#ondownthis)
- [onFocus](DChartPlotAreaBase.md#onfocus)
- [onHierarchyDirty](DChartPlotAreaBase.md#onhierarchydirty)
- [onKeyDown](DChartPlotAreaBase.md#onkeydown)
- [onKeyUp](DChartPlotAreaBase.md#onkeyup)
- [onMove](DChartPlotAreaBase.md#onmove)
- [onOut](DChartPlotAreaBase.md#onout)
- [onOver](DChartPlotAreaBase.md#onover)
- [onParentMove](DChartPlotAreaBase.md#onparentmove)
- [onParentResize](DChartPlotAreaBase.md#onparentresize)
- [onRefit](DChartPlotAreaBase.md#onrefit)
- [onReflow](DChartPlotAreaBase.md#onreflow)
- [onResize](DChartPlotAreaBase.md#onresize)
- [onScale](DChartPlotAreaBase.md#onscale)
- [onShortcut](DChartPlotAreaBase.md#onshortcut)
- [onSkew](DChartPlotAreaBase.md#onskew)
- [onStateChange](DChartPlotAreaBase.md#onstatechange)
- [onUp](DChartPlotAreaBase.md#onup)
- [onUpThis](DChartPlotAreaBase.md#onupthis)
- [onViewDirty](DChartPlotAreaBase.md#onviewdirty)
- [onWheel](DChartPlotAreaBase.md#onwheel)
- [once](DChartPlotAreaBase.md#once)
- [reflow](DChartPlotAreaBase.md#reflow)
- [removeAllListeners](DChartPlotAreaBase.md#removealllisteners)
- [removeChild](DChartPlotAreaBase.md#removechild)
- [removeChildAt](DChartPlotAreaBase.md#removechildat)
- [removeChildren](DChartPlotAreaBase.md#removechildren)
- [removeListener](DChartPlotAreaBase.md#removelistener)
- [render](DChartPlotAreaBase.md#render)
- [renderAdvanced](DChartPlotAreaBase.md#renderadvanced)
- [resize](DChartPlotAreaBase.md#resize)
- [setChildIndex](DChartPlotAreaBase.md#setchildindex)
- [setFocused](DChartPlotAreaBase.md#setfocused)
- [setHeight](DChartPlotAreaBase.md#setheight)
- [setParent](DChartPlotAreaBase.md#setparent)
- [setTransform](DChartPlotAreaBase.md#settransform)
- [setWidth](DChartPlotAreaBase.md#setwidth)
- [setX](DChartPlotAreaBase.md#setx)
- [setY](DChartPlotAreaBase.md#sety)
- [show](DChartPlotAreaBase.md#show)
- [sortChildren](DChartPlotAreaBase.md#sortchildren)
- [swapChildren](DChartPlotAreaBase.md#swapchildren)
- [toCursor](DChartPlotAreaBase.md#tocursor)
- [toDirty](DChartPlotAreaBase.md#todirty)
- [toGlobal](DChartPlotAreaBase.md#toglobal)
- [toHasDirty](DChartPlotAreaBase.md#tohasdirty)
- [toHierarchyDirty](DChartPlotAreaBase.md#tohierarchydirty)
- [toLocal](DChartPlotAreaBase.md#tolocal)
- [toParentHasDirty](DChartPlotAreaBase.md#toparenthasdirty)
- [toParentHierarchyDirty](DChartPlotAreaBase.md#toparenthierarchydirty)
- [toParentResized](DChartPlotAreaBase.md#toparentresized)
- [updateTransform](DChartPlotAreaBase.md#updatetransform)
- [mixin](DChartPlotAreaBase.md#mixin)

## Constructors

### constructor

• **new DChartPlotAreaBase**\<`CHART`, `THEME`, `OPTIONS`\>(`chart`, `options?`): [`DChartPlotAreaBase`](DChartPlotAreaBase.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> = [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `THEME` | extends [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) = [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) |
| `OPTIONS` | extends [`DChartPlotAreaOptions`](../interfaces/DChartPlotAreaOptions.md)\<`CHART`, `THEME`\> = [`DChartPlotAreaOptions`](../interfaces/DChartPlotAreaOptions.md)\<`CHART`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chart` | `CHART` |
| `options?` | `OPTIONS` |

#### Returns

[`DChartPlotAreaBase`](DChartPlotAreaBase.md)\<`CHART`, `THEME`, `OPTIONS`\>

#### Overrides

[DBase](DBase.md).[constructor](DBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L45)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_accessibleActive](../interfaces/DChartPlotArea.md#_accessibleactive)

#### Inherited from

[DBase](DBase.md).[_accessibleActive](DBase.md#_accessibleactive)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_accessibleDiv](../interfaces/DChartPlotArea.md#_accessiblediv)

#### Inherited from

[DBase](DBase.md).[_accessibleDiv](DBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_auto](../interfaces/DChartPlotArea.md#_auto)

#### Inherited from

[DBase](DBase.md).[_auto](DBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_background](../interfaces/DChartPlotArea.md#_background)

#### Inherited from

[DBase](DBase.md).[_background](DBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_blendDuration

• `Protected` **\_blendDuration**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L41)

___

### \_blendStartTime

• `Protected` **\_blendStartTime**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L40)

___

### \_blendTimeout

• `Protected` **\_blendTimeout**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L42)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_border](../interfaces/DChartPlotArea.md#_border)

#### Inherited from

[DBase](DBase.md).[_border](DBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_bounds](../interfaces/DChartPlotArea.md#_bounds)

#### Inherited from

[DBase](DBase.md).[_bounds](DBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_boundsID](../interfaces/DChartPlotArea.md#_boundsid)

#### Inherited from

[DBase](DBase.md).[_boundsID](DBase.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_boundsRect](../interfaces/DChartPlotArea.md#_boundsrect)

#### Inherited from

[DBase](DBase.md).[_boundsRect](DBase.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_chart

• `Protected` **\_chart**: `CHART`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L34)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_clearType](../interfaces/DChartPlotArea.md#_cleartype)

#### Inherited from

[DBase](DBase.md).[_clearType](DBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_containerBounds

• `Protected` **\_containerBounds**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L29)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_corner](../interfaces/DChartPlotArea.md#_corner)

#### Inherited from

[DBase](DBase.md).[_corner](DBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_cursor](../interfaces/DChartPlotArea.md#_cursor)

#### Inherited from

[DBase](DBase.md).[_cursor](DBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_destroyed](../interfaces/DChartPlotArea.md#_destroyed)

#### Inherited from

[DBase](DBase.md).[_destroyed](DBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_enabledFilters](../interfaces/DChartPlotArea.md#_enabledfilters)

#### Inherited from

[DBase](DBase.md).[_enabledFilters](DBase.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_isContainerBoundsDirty

• `Protected` **\_isContainerBoundsDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L28)

___

### \_isViewDirty

• `Protected` **\_isViewDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L37)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_lastDownPoint](../interfaces/DChartPlotArea.md#_lastdownpoint)

#### Inherited from

[DBase](DBase.md).[_lastDownPoint](DBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_lastSortedIndex](../interfaces/DChartPlotArea.md#_lastsortedindex)

#### Inherited from

[DBase](DBase.md).[_lastSortedIndex](DBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_localBounds](../interfaces/DChartPlotArea.md#_localbounds)

#### Inherited from

[DBase](DBase.md).[_localBounds](DBase.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_localBoundsRect](../interfaces/DChartPlotArea.md#_localboundsrect)

#### Inherited from

[DBase](DBase.md).[_localBoundsRect](DBase.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_mask](../interfaces/DChartPlotArea.md#_mask)

#### Inherited from

[DBase](DBase.md).[_mask](DBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_onBlendBound

• `Protected` **\_onBlendBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L43)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_options](../interfaces/DChartPlotArea.md#_options)

#### Inherited from

[DBase](DBase.md).[_options](DBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_outline](../interfaces/DChartPlotArea.md#_outline)

#### Inherited from

[DBase](DBase.md).[_outline](DBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L38)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_padding](../interfaces/DChartPlotArea.md#_padding)

#### Inherited from

[DBase](DBase.md).[_padding](DBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_pixelBounds

• `Protected` **\_pixelBounds**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L32)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_reflowable](../interfaces/DChartPlotArea.md#_reflowable)

#### Inherited from

[DBase](DBase.md).[_reflowable](DBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_shortcuts](../interfaces/DChartPlotArea.md#_shortcuts)

#### Inherited from

[DBase](DBase.md).[_shortcuts](DBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_snippet](../interfaces/DChartPlotArea.md#_snippet)

#### Inherited from

[DBase](DBase.md).[_snippet](DBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_tempDisplayObjectParent](../interfaces/DChartPlotArea.md#_tempdisplayobjectparent)

#### Inherited from

[DBase](DBase.md).[_tempDisplayObjectParent](DBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_title

• `Protected` **\_title**: `string`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_title](../interfaces/DChartPlotArea.md#_title)

#### Inherited from

[DBase](DBase.md).[_title](DBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_view

• `Protected` **\_view**: [`DViewImpl`](DViewImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L36)

___

### \_workPoint

• `Protected` **\_workPoint**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L30)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_zIndex](../interfaces/DChartPlotArea.md#_zindex)

#### Inherited from

[DBase](DBase.md).[_zIndex](DBase.md#_zindex)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessible](../interfaces/DChartPlotArea.md#accessible)

#### Inherited from

[DBase](DBase.md).[accessible](DBase.md#accessible)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessibleChildren](../interfaces/DChartPlotArea.md#accessiblechildren)

#### Inherited from

[DBase](DBase.md).[accessibleChildren](DBase.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessibleHint](../interfaces/DChartPlotArea.md#accessiblehint)

#### Inherited from

[DBase](DBase.md).[accessibleHint](DBase.md#accessiblehint)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessiblePointerEvents](../interfaces/DChartPlotArea.md#accessiblepointerevents)

#### Inherited from

[DBase](DBase.md).[accessiblePointerEvents](DBase.md#accessiblepointerevents)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessibleTitle](../interfaces/DChartPlotArea.md#accessibletitle)

#### Inherited from

[DBase](DBase.md).[accessibleTitle](DBase.md#accessibletitle)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessibleType](../interfaces/DChartPlotArea.md#accessibletype)

#### Inherited from

[DBase](DBase.md).[accessibleType](DBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[alpha](../interfaces/DChartPlotArea.md#alpha)

#### Inherited from

[DBase](DBase.md).[alpha](DBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[angle](../interfaces/DChartPlotArea.md#angle)

#### Inherited from

[DBase](DBase.md).[angle](DBase.md#angle)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[buttonMode](../interfaces/DChartPlotArea.md#buttonmode)

#### Inherited from

[DBase](DBase.md).[buttonMode](DBase.md#buttonmode)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[cacheAsBitmap](../interfaces/DChartPlotArea.md#cacheasbitmap)

#### Inherited from

[DBase](DBase.md).[cacheAsBitmap](DBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[children](../interfaces/DChartPlotArea.md#children)

#### Inherited from

[DBase](DBase.md).[children](DBase.md#children)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[cursor](../interfaces/DChartPlotArea.md#cursor)

#### Inherited from

[DBase](DBase.md).[cursor](DBase.md#cursor)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[filterArea](../interfaces/DChartPlotArea.md#filterarea)

#### Inherited from

[DBase](DBase.md).[filterArea](DBase.md#filterarea)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[filters](../interfaces/DChartPlotArea.md#filters)

#### Inherited from

[DBase](DBase.md).[filters](DBase.md#filters)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[hitArea](../interfaces/DChartPlotArea.md#hitarea)

#### Inherited from

[DBase](DBase.md).[hitArea](DBase.md#hitarea)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[interactive](../interfaces/DChartPlotArea.md#interactive)

#### Inherited from

[DBase](DBase.md).[interactive](DBase.md#interactive)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[interactiveChildren](../interfaces/DChartPlotArea.md#interactivechildren)

#### Inherited from

[DBase](DBase.md).[interactiveChildren](DBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[isMask](../interfaces/DChartPlotArea.md#ismask)

#### Inherited from

[DBase](DBase.md).[isMask](DBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[isSprite](../interfaces/DChartPlotArea.md#issprite)

#### Inherited from

[DBase](DBase.md).[isSprite](DBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[localTransform](../interfaces/DChartPlotArea.md#localtransform)

#### Inherited from

[DBase](DBase.md).[localTransform](DBase.md#localtransform)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[mask](../interfaces/DChartPlotArea.md#mask)

#### Inherited from

[DBase](DBase.md).[mask](DBase.md#mask)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[name](../interfaces/DChartPlotArea.md#name)

#### Inherited from

[DBase](DBase.md).[name](DBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[parent](../interfaces/DChartPlotArea.md#parent)

#### Inherited from

[DBase](DBase.md).[parent](DBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[pivot](../interfaces/DChartPlotArea.md#pivot)

#### Inherited from

[DBase](DBase.md).[pivot](DBase.md#pivot)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[renderable](../interfaces/DChartPlotArea.md#renderable)

#### Inherited from

[DBase](DBase.md).[renderable](DBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[rotation](../interfaces/DChartPlotArea.md#rotation)

#### Inherited from

[DBase](DBase.md).[rotation](DBase.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8875

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[sortDirty](../interfaces/DChartPlotArea.md#sortdirty)

#### Inherited from

[DBase](DBase.md).[sortDirty](DBase.md#sortdirty)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[sortableChildren](../interfaces/DChartPlotArea.md#sortablechildren)

#### Inherited from

[DBase](DBase.md).[sortableChildren](DBase.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8343

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[transform](../interfaces/DChartPlotArea.md#transform)

#### Inherited from

[DBase](DBase.md).[transform](DBase.md#transform)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[visible](../interfaces/DChartPlotArea.md#visible)

#### Inherited from

[DBase](DBase.md).[visible](DBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[worldAlpha](../interfaces/DChartPlotArea.md#worldalpha)

#### Inherited from

[DBase](DBase.md).[worldAlpha](DBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[worldTransform](../interfaces/DChartPlotArea.md#worldtransform)

#### Inherited from

[DBase](DBase.md).[worldTransform](DBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[worldVisible](../interfaces/DChartPlotArea.md#worldvisible)

#### Inherited from

[DBase](DBase.md).[worldVisible](DBase.md#worldvisible)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[zIndex](../interfaces/DChartPlotArea.md#zindex)

#### Inherited from

[DBase](DBase.md).[zIndex](DBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DBase](DBase.md).[WORK_CONTAINS_POINT](DBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### axis

• `get` **axis**(): [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Returns

[`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)\<`CHART`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[axis](../interfaces/DChartPlotArea.md#axis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L88)

___

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

DChartPlotArea.background

#### Inherited from

DBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

DChartPlotArea.border

#### Inherited from

DBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### chart

• `get` **chart**(): `CHART`

#### Returns

`CHART`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[chart](../interfaces/DChartPlotArea.md#chart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L78)

___

### container

• `get` **container**(): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[container](../interfaces/DChartPlotArea.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L86)

___

### coordinate

• `get` **coordinate**(): [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Returns

[`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)\<`CHART`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[coordinate](../interfaces/DChartPlotArea.md#coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L82)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Implementation of

DChartPlotArea.corner

#### Inherited from

DBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

DChartPlotArea.height

#### Inherited from

DBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

DChartPlotArea.height

#### Inherited from

DBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Implementation of

DChartPlotArea.options

#### Inherited from

DBase.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Implementation of

DChartPlotArea.outline

#### Inherited from

DBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Implementation of

DChartPlotArea.padding

#### Inherited from

DBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DChartPlotArea.position

#### Inherited from

DBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

DChartPlotArea.reflowable

#### Inherited from

DBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DChartPlotArea.scale

#### Inherited from

DBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### series

• `get` **series**(): [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Returns

[`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)\<`CHART`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[series](../interfaces/DChartPlotArea.md#series)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L84)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

DChartPlotArea.shadow

#### Inherited from

DBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Implementation of

DChartPlotArea.shadow

#### Inherited from

DBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DChartPlotArea.skew

#### Inherited from

DBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

DChartPlotArea.snippet

#### Inherited from

DBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

DChartPlotArea.state

#### Inherited from

DBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Implementation of

DChartPlotArea.theme

#### Inherited from

DBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1694](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1694)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Implementation of

DChartPlotArea.theme

#### Inherited from

DBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Implementation of

DChartPlotArea.title

#### Inherited from

DBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1487)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Implementation of

DChartPlotArea.title

#### Inherited from

DBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

DChartPlotArea.type

#### Inherited from

DBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Implementation of

DChartPlotArea.unsafe

#### Inherited from

DBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### view

• `get` **view**(): [`DView`](../interfaces/DView.md)

#### Returns

[`DView`](../interfaces/DView.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[view](../interfaces/DChartPlotArea.md#view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L90)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Implementation of

DChartPlotArea.weight

#### Inherited from

DBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | `number` |

#### Returns

`void`

#### Implementation of

DChartPlotArea.weight

#### Inherited from

DBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

DChartPlotArea.width

#### Inherited from

DBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

DChartPlotArea.width

#### Inherited from

DBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

DChartPlotArea.x

#### Inherited from

DBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

DChartPlotArea.x

#### Inherited from

DBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

DChartPlotArea.y

#### Inherited from

DBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

DChartPlotArea.y

#### Inherited from

DBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_calculateBounds](../interfaces/DChartPlotArea.md#_calculatebounds)

#### Inherited from

[DBase](DBase.md).[_calculateBounds](DBase.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2084](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2084)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_recursivePostUpdateTransform](../interfaces/DChartPlotArea.md#_recursivepostupdatetransform)

#### Inherited from

[DBase](DBase.md).[_recursivePostUpdateTransform](DBase.md#_recursivepostupdatetransform)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_render](../interfaces/DChartPlotArea.md#_render)

#### Inherited from

[DBase](DBase.md).[_render](DBase.md#_render)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[addChild](../interfaces/DChartPlotArea.md#addchild)

#### Inherited from

[DBase](DBase.md).[addChild](DBase.md#addchild)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[addChildAt](../interfaces/DChartPlotArea.md#addchildat)

#### Inherited from

[DBase](DBase.md).[addChildAt](DBase.md#addchildat)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[addListener](../interfaces/DChartPlotArea.md#addlistener)

#### Inherited from

[DBase](DBase.md).[addListener](DBase.md#addlistener)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[addListener](../interfaces/DChartPlotArea.md#addlistener)

#### Inherited from

[DBase](DBase.md).[addListener](DBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[applyTitle](../interfaces/DChartPlotArea.md#applytitle)

#### Inherited from

[DBase](DBase.md).[applyTitle](DBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### blur

▸ **blur**(`recursively?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

`this`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[blur](../interfaces/DChartPlotArea.md#blur)

#### Inherited from

[DBase](DBase.md).[blur](DBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[calculateBounds](../interfaces/DChartPlotArea.md#calculatebounds)

#### Inherited from

[DBase](DBase.md).[calculateBounds](DBase.md#calculatebounds)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[containerUpdateTransform](../interfaces/DChartPlotArea.md#containerupdatetransform)

#### Inherited from

[DBase](DBase.md).[containerUpdateTransform](DBase.md#containerupdatetransform)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[containsGlobalPoint](../interfaces/DChartPlotArea.md#containsglobalpoint)

#### Inherited from

[DBase](DBase.md).[containsGlobalPoint](DBase.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2098)

___

### containsLocalPoint

▸ **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[containsLocalPoint](../interfaces/DChartPlotArea.md#containslocalpoint)

#### Inherited from

[DBase](DBase.md).[containsLocalPoint](DBase.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2102)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[containsPoint](../interfaces/DChartPlotArea.md#containspoint)

#### Inherited from

[DBase](DBase.md).[containsPoint](DBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[destroy](../interfaces/DChartPlotArea.md#destroy)

#### Overrides

[DBase](DBase.md).[destroy](DBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L126)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[disableTempParent](../interfaces/DChartPlotArea.md#disabletempparent)

#### Inherited from

[DBase](DBase.md).[disableTempParent](DBase.md#disabletempparent)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[displayObjectUpdateTransform](../interfaces/DChartPlotArea.md#displayobjectupdatetransform)

#### Inherited from

[DBase](DBase.md).[displayObjectUpdateTransform](DBase.md#displayobjectupdatetransform)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[emit](../interfaces/DChartPlotArea.md#emit)

#### Inherited from

[DBase](DBase.md).[emit](DBase.md#emit)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[enableTempParent](../interfaces/DChartPlotArea.md#enabletempparent)

#### Inherited from

[DBase](DBase.md).[enableTempParent](DBase.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[eventNames](../interfaces/DChartPlotArea.md#eventnames)

#### Inherited from

[DBase](DBase.md).[eventNames](DBase.md#eventnames)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[fit](../interfaces/DChartPlotArea.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L183)

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[focus](../interfaces/DChartPlotArea.md#focus)

#### Inherited from

[DBase](DBase.md).[focus](DBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[focusOnClosest](../interfaces/DChartPlotArea.md#focusonclosest)

#### Inherited from

[DBase](DBase.md).[focusOnClosest](DBase.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

___

### getAxisBounds

▸ **getAxisBounds**(`position`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DChartAxisPosition`](../index.md#dchartaxisposition) |

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getAxisBounds](../interfaces/DChartPlotArea.md#getaxisbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L147)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getBounds](../interfaces/DChartPlotArea.md#getbounds)

#### Inherited from

[DBase](DBase.md).[getBounds](DBase.md#getbounds)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getChildAt](../interfaces/DChartPlotArea.md#getchildat)

#### Inherited from

[DBase](DBase.md).[getChildAt](DBase.md#getchildat)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getChildByName](../interfaces/DChartPlotArea.md#getchildbyname)

#### Inherited from

[DBase](DBase.md).[getChildByName](DBase.md#getchildbyname)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getChildIndex](../interfaces/DChartPlotArea.md#getchildindex)

#### Inherited from

[DBase](DBase.md).[getChildIndex](DBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getClearType](../interfaces/DChartPlotArea.md#getcleartype)

#### Inherited from

[DBase](DBase.md).[getClearType](DBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getClippingRect](../interfaces/DChartPlotArea.md#getclippingrect)

#### Inherited from

[DBase](DBase.md).[getClippingRect](DBase.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

___

### getContainerBounds

▸ **getContainerBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getContainerBounds](../interfaces/DChartPlotArea.md#getcontainerbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L159)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getGlobalPosition](../interfaces/DChartPlotArea.md#getglobalposition)

#### Inherited from

[DBase](DBase.md).[getGlobalPosition](DBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getHeight](../interfaces/DChartPlotArea.md#getheight)

#### Inherited from

[DBase](DBase.md).[getHeight](DBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getLocalBounds](../interfaces/DChartPlotArea.md#getlocalbounds)

#### Inherited from

[DBase](DBase.md).[getLocalBounds](DBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getParentOfSize](../interfaces/DChartPlotArea.md#getparentofsize)

#### Inherited from

[DBase](DBase.md).[getParentOfSize](DBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getPixelBounds

▸ **getPixelBounds**(): `Rectangle`

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getPixelBounds](../interfaces/DChartPlotArea.md#getpixelbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L138)

___

### getPixelDomain

▸ **getPixelDomain**(`result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getPixelDomain](../interfaces/DChartPlotArea.md#getpixeldomain)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L128)

___

### getPixelRange

▸ **getPixelRange**(`result`): [`DChartRegion`](../interfaces/DChartRegion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`DChartRegion`](../interfaces/DChartRegion.md) |

#### Returns

[`DChartRegion`](../interfaces/DChartRegion.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getPixelRange](../interfaces/DChartPlotArea.md#getpixelrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L133)

___

### getSelectionBoundsX

▸ **getSelectionBoundsX**(): `Rectangle`

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getSelectionBoundsX](../interfaces/DChartPlotArea.md#getselectionboundsx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L151)

___

### getSelectionBoundsY

▸ **getSelectionBoundsY**(): `Rectangle`

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getSelectionBoundsY](../interfaces/DChartPlotArea.md#getselectionboundsy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L155)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getThemeDefault](../interfaces/DChartPlotArea.md#getthemedefault)

#### Inherited from

[DBase](DBase.md).[getThemeDefault](DBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getType](../interfaces/DChartPlotArea.md#gettype)

#### Overrides

[DBase](DBase.md).[getType](DBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L193)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getWidth](../interfaces/DChartPlotArea.md#getwidth)

#### Inherited from

[DBase](DBase.md).[getWidth](DBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getX](../interfaces/DChartPlotArea.md#getx)

#### Inherited from

[DBase](DBase.md).[getX](DBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getY](../interfaces/DChartPlotArea.md#gety)

#### Inherited from

[DBase](DBase.md).[getY](DBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[hasDirty](../interfaces/DChartPlotArea.md#hasdirty)

#### Inherited from

[DBase](DBase.md).[hasDirty](DBase.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[hasRefitableHeight](../interfaces/DChartPlotArea.md#hasrefitableheight)

#### Inherited from

[DBase](DBase.md).[hasRefitableHeight](DBase.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1831)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[hasRefitableWidth](../interfaces/DChartPlotArea.md#hasrefitablewidth)

#### Inherited from

[DBase](DBase.md).[hasRefitableWidth](DBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[hide](../interfaces/DChartPlotArea.md#hide)

#### Inherited from

[DBase](DBase.md).[hide](DBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

___

### init

▸ **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[init](../interfaces/DChartPlotArea.md#init)

#### Inherited from

[DBase](DBase.md).[init](DBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1137)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[initReflowable](../interfaces/DChartPlotArea.md#initreflowable)

#### Inherited from

[DBase](DBase.md).[initReflowable](DBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[isDirty](../interfaces/DChartPlotArea.md#isdirty)

#### Inherited from

[DBase](DBase.md).[isDirty](DBase.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### isEventTarget

▸ **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[isEventTarget](../interfaces/DChartPlotArea.md#iseventtarget)

#### Inherited from

[DBase](DBase.md).[isEventTarget](DBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[isHidden](../interfaces/DChartPlotArea.md#ishidden)

#### Inherited from

[DBase](DBase.md).[isHidden](DBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[isHierarchyDirty](../interfaces/DChartPlotArea.md#ishierarchydirty)

#### Inherited from

[DBase](DBase.md).[isHierarchyDirty](DBase.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

___

### isRefitable

▸ **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[isRefitable](../interfaces/DChartPlotArea.md#isrefitable)

#### Inherited from

[DBase](DBase.md).[isRefitable](DBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1821)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[isShown](../interfaces/DChartPlotArea.md#isshown)

#### Inherited from

[DBase](DBase.md).[isShown](DBase.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1516)

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

[DChartPlotArea](../interfaces/DChartPlotArea.md).[listenerCount](../interfaces/DChartPlotArea.md#listenercount)

#### Inherited from

[DBase](DBase.md).[listenerCount](DBase.md#listenercount)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[listeners](../interfaces/DChartPlotArea.md#listeners)

#### Inherited from

[DBase](DBase.md).[listeners](DBase.md#listeners)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[newPadding](../interfaces/DChartPlotArea.md#newpadding)

#### Inherited from

[DBase](DBase.md).[newPadding](DBase.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newView

▸ **newView**(`options?`): [`DViewImpl`](DViewImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DViewImpl`](DViewImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L94)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[off](../interfaces/DChartPlotArea.md#off)

#### Inherited from

[DBase](DBase.md).[off](DBase.md#off)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[on](../interfaces/DChartPlotArea.md#on)

#### Inherited from

[DBase](DBase.md).[on](DBase.md#on)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[on](../interfaces/DChartPlotArea.md#on)

#### Inherited from

[DBase](DBase.md).[on](DBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onBlend

▸ **onBlend**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L191)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onBlur](../interfaces/DChartPlotArea.md#onblur)

#### Inherited from

[DBase](DBase.md).[onBlur](DBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

___

### onChildBlur

▸ **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onChildBlur](../interfaces/DChartPlotArea.md#onchildblur)

#### Inherited from

[DBase](DBase.md).[onChildBlur](DBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### onChildFocus

▸ **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onChildFocus](../interfaces/DChartPlotArea.md#onchildfocus)

#### Inherited from

[DBase](DBase.md).[onChildFocus](DBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onChildrenChange](../interfaces/DChartPlotArea.md#onchildrenchange)

#### Inherited from

[DBase](DBase.md).[onChildrenChange](DBase.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onDblClick](../interfaces/DChartPlotArea.md#ondblclick)

#### Overrides

[DBase](DBase.md).[onDblClick](DBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L102)

___

### onDown

▸ **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onDown](../interfaces/DChartPlotArea.md#ondown)

#### Overrides

[DBase](DBase.md).[onDown](DBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L111)

___

### onDownThis

▸ **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onDownThis](../interfaces/DChartPlotArea.md#ondownthis)

#### Inherited from

[DBase](DBase.md).[onDownThis](DBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onFocus](../interfaces/DChartPlotArea.md#onfocus)

#### Inherited from

[DBase](DBase.md).[onFocus](DBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onHierarchyDirty](../interfaces/DChartPlotArea.md#onhierarchydirty)

#### Inherited from

[DBase](DBase.md).[onHierarchyDirty](DBase.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onKeyDown](../interfaces/DChartPlotArea.md#onkeydown)

#### Inherited from

[DBase](DBase.md).[onKeyDown](DBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1954](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1954)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onKeyUp](../interfaces/DChartPlotArea.md#onkeyup)

#### Inherited from

[DBase](DBase.md).[onKeyUp](DBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1959](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1959)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onMove](../interfaces/DChartPlotArea.md#onmove)

#### Inherited from

[DBase](DBase.md).[onMove](DBase.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### onOut

▸ **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onOut](../interfaces/DChartPlotArea.md#onout)

#### Inherited from

[DBase](DBase.md).[onOut](DBase.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2042](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2042)

___

### onOver

▸ **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onOver](../interfaces/DChartPlotArea.md#onover)

#### Inherited from

[DBase](DBase.md).[onOver](DBase.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2028](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2028)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onParentMove](../interfaces/DChartPlotArea.md#onparentmove)

#### Inherited from

[DBase](DBase.md).[onParentMove](DBase.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1943](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1943)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onParentResize](../interfaces/DChartPlotArea.md#onparentresize)

#### Inherited from

[DBase](DBase.md).[onParentResize](DBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onRefit](../interfaces/DChartPlotArea.md#onrefit)

#### Inherited from

[DBase](DBase.md).[onRefit](DBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onReflow](../interfaces/DChartPlotArea.md#onreflow)

#### Inherited from

[DBase](DBase.md).[onReflow](DBase.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onResize](../interfaces/DChartPlotArea.md#onresize)

#### Overrides

[DBase](DBase.md).[onResize](DBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L67)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onScale](../interfaces/DChartPlotArea.md#onscale)

#### Inherited from

[DBase](DBase.md).[onScale](DBase.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1236)

___

### onShortcut

▸ **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onShortcut](../interfaces/DChartPlotArea.md#onshortcut)

#### Inherited from

[DBase](DBase.md).[onShortcut](DBase.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1133)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onSkew](../interfaces/DChartPlotArea.md#onskew)

#### Inherited from

[DBase](DBase.md).[onSkew](DBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onStateChange](../interfaces/DChartPlotArea.md#onstatechange)

#### Inherited from

[DBase](DBase.md).[onStateChange](DBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1629](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1629)

___

### onUp

▸ **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onUp](../interfaces/DChartPlotArea.md#onup)

#### Inherited from

[DBase](DBase.md).[onUp](DBase.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1996](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1996)

___

### onUpThis

▸ **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onUpThis](../interfaces/DChartPlotArea.md#onupthis)

#### Inherited from

[DBase](DBase.md).[onUpThis](DBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

___

### onViewDirty

▸ **onViewDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L124)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onWheel](../interfaces/DChartPlotArea.md#onwheel)

#### Overrides

[DBase](DBase.md).[onWheel](DBase.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L96)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[once](../interfaces/DChartPlotArea.md#once)

#### Inherited from

[DBase](DBase.md).[once](DBase.md#once)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[once](../interfaces/DChartPlotArea.md#once)

#### Inherited from

[DBase](DBase.md).[once](DBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[reflow](../interfaces/DChartPlotArea.md#reflow)

#### Inherited from

[DBase](DBase.md).[reflow](DBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

`this`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeAllListeners](../interfaces/DChartPlotArea.md#removealllisteners)

#### Inherited from

[DBase](DBase.md).[removeAllListeners](DBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

`this`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeAllListeners](../interfaces/DChartPlotArea.md#removealllisteners)

#### Inherited from

[DBase](DBase.md).[removeAllListeners](DBase.md#removealllisteners)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeChild](../interfaces/DChartPlotArea.md#removechild)

#### Inherited from

[DBase](DBase.md).[removeChild](DBase.md#removechild)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeChildAt](../interfaces/DChartPlotArea.md#removechildat)

#### Inherited from

[DBase](DBase.md).[removeChildAt](DBase.md#removechildat)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeChildren](../interfaces/DChartPlotArea.md#removechildren)

#### Inherited from

[DBase](DBase.md).[removeChildren](DBase.md#removechildren)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeListener](../interfaces/DChartPlotArea.md#removelistener)

#### Inherited from

[DBase](DBase.md).[removeListener](DBase.md#removelistener)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeListener](../interfaces/DChartPlotArea.md#removelistener)

#### Inherited from

[DBase](DBase.md).[removeListener](DBase.md#removelistener)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[render](../interfaces/DChartPlotArea.md#render)

#### Overrides

[DBase](DBase.md).[render](DBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-base.ts#L116)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[renderAdvanced](../interfaces/DChartPlotArea.md#renderadvanced)

#### Inherited from

[DBase](DBase.md).[renderAdvanced](DBase.md#renderadvanced)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[resize](../interfaces/DChartPlotArea.md#resize)

#### Inherited from

[DBase](DBase.md).[resize](DBase.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setChildIndex](../interfaces/DChartPlotArea.md#setchildindex)

#### Inherited from

[DBase](DBase.md).[setChildIndex](DBase.md#setchildindex)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setFocused](../interfaces/DChartPlotArea.md#setfocused)

#### Inherited from

[DBase](DBase.md).[setFocused](DBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

___

### setHeight

▸ **setHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setHeight](../interfaces/DChartPlotArea.md#setheight)

#### Inherited from

[DBase](DBase.md).[setHeight](DBase.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1402)

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

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setParent](../interfaces/DChartPlotArea.md#setparent)

#### Inherited from

[DBase](DBase.md).[setParent](DBase.md#setparent)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setTransform](../interfaces/DChartPlotArea.md#settransform)

#### Inherited from

[DBase](DBase.md).[setTransform](DBase.md#settransform)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setWidth](../interfaces/DChartPlotArea.md#setwidth)

#### Inherited from

[DBase](DBase.md).[setWidth](DBase.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setX](../interfaces/DChartPlotArea.md#setx)

#### Inherited from

[DBase](DBase.md).[setX](DBase.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1268)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setY](../interfaces/DChartPlotArea.md#sety)

#### Inherited from

[DBase](DBase.md).[setY](DBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[show](../interfaces/DChartPlotArea.md#show)

#### Inherited from

[DBase](DBase.md).[show](DBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[sortChildren](../interfaces/DChartPlotArea.md#sortchildren)

#### Inherited from

[DBase](DBase.md).[sortChildren](DBase.md#sortchildren)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[swapChildren](../interfaces/DChartPlotArea.md#swapchildren)

#### Inherited from

[DBase](DBase.md).[swapChildren](DBase.md#swapchildren)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toCursor](../interfaces/DChartPlotArea.md#tocursor)

#### Inherited from

[DBase](DBase.md).[toCursor](DBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toDirty](../interfaces/DChartPlotArea.md#todirty)

#### Inherited from

[DBase](DBase.md).[toDirty](DBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1534)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toGlobal](../interfaces/DChartPlotArea.md#toglobal)

#### Inherited from

[DBase](DBase.md).[toGlobal](DBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toHasDirty](../interfaces/DChartPlotArea.md#tohasdirty)

#### Inherited from

[DBase](DBase.md).[toHasDirty](DBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toHierarchyDirty](../interfaces/DChartPlotArea.md#tohierarchydirty)

#### Inherited from

[DBase](DBase.md).[toHierarchyDirty](DBase.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toLocal](../interfaces/DChartPlotArea.md#tolocal)

#### Inherited from

[DBase](DBase.md).[toLocal](DBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toParentHasDirty](../interfaces/DChartPlotArea.md#toparenthasdirty)

#### Inherited from

[DBase](DBase.md).[toParentHasDirty](DBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toParentHierarchyDirty](../interfaces/DChartPlotArea.md#toparenthierarchydirty)

#### Inherited from

[DBase](DBase.md).[toParentHierarchyDirty](DBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toParentResized](../interfaces/DChartPlotArea.md#toparentresized)

#### Inherited from

[DBase](DBase.md).[toParentResized](DBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[updateTransform](../interfaces/DChartPlotArea.md#updatetransform)

#### Inherited from

[DBase](DBase.md).[updateTransform](DBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2069](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2069)

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

[DBase](DBase.md).[mixin](DBase.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
