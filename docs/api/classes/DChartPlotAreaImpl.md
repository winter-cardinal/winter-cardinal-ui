[Winter Cardinal UI - v0.310.1](../index.md) / DChartPlotAreaImpl

# Class: DChartPlotAreaImpl<CHART, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |
| `THEME` | extends [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) = [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) |
| `OPTIONS` | extends [`DChartPlotAreaOptions`](../interfaces/DChartPlotAreaOptions.md)<`CHART`, `THEME`\> = [`DChartPlotAreaOptions`](../interfaces/DChartPlotAreaOptions.md)<`CHART`, `THEME`\> |

## Hierarchy

- [`DBase`](DBase.md)<`THEME`, `OPTIONS`\>

  ↳ **`DChartPlotAreaImpl`**

## Implements

- [`DChartPlotArea`](../interfaces/DChartPlotArea.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartPlotAreaImpl.md#constructor)

### Properties

- [\_accessibleActive](DChartPlotAreaImpl.md#_accessibleactive)
- [\_accessibleDiv](DChartPlotAreaImpl.md#_accessiblediv)
- [\_auto](DChartPlotAreaImpl.md#_auto)
- [\_axis](DChartPlotAreaImpl.md#_axis)
- [\_background](DChartPlotAreaImpl.md#_background)
- [\_blendDuration](DChartPlotAreaImpl.md#_blendduration)
- [\_blendStartTime](DChartPlotAreaImpl.md#_blendstarttime)
- [\_blendTimeout](DChartPlotAreaImpl.md#_blendtimeout)
- [\_border](DChartPlotAreaImpl.md#_border)
- [\_bounds](DChartPlotAreaImpl.md#_bounds)
- [\_boundsInContainer](DChartPlotAreaImpl.md#_boundsincontainer)
- [\_chart](DChartPlotAreaImpl.md#_chart)
- [\_clearType](DChartPlotAreaImpl.md#_cleartype)
- [\_container](DChartPlotAreaImpl.md#_container)
- [\_coordinate](DChartPlotAreaImpl.md#_coordinate)
- [\_corner](DChartPlotAreaImpl.md#_corner)
- [\_cursor](DChartPlotAreaImpl.md#_cursor)
- [\_destroyed](DChartPlotAreaImpl.md#_destroyed)
- [\_isBoundsInContainerDirty](DChartPlotAreaImpl.md#_isboundsincontainerdirty)
- [\_isViewDirty](DChartPlotAreaImpl.md#_isviewdirty)
- [\_lastDownPoint](DChartPlotAreaImpl.md#_lastdownpoint)
- [\_lastSortedIndex](DChartPlotAreaImpl.md#_lastsortedindex)
- [\_mask](DChartPlotAreaImpl.md#_mask)
- [\_onBlendBound](DChartPlotAreaImpl.md#_onblendbound)
- [\_options](DChartPlotAreaImpl.md#_options)
- [\_outline](DChartPlotAreaImpl.md#_outline)
- [\_overflowMask](DChartPlotAreaImpl.md#_overflowmask)
- [\_padding](DChartPlotAreaImpl.md#_padding)
- [\_reflowable](DChartPlotAreaImpl.md#_reflowable)
- [\_series](DChartPlotAreaImpl.md#_series)
- [\_shortcuts](DChartPlotAreaImpl.md#_shortcuts)
- [\_snippet](DChartPlotAreaImpl.md#_snippet)
- [\_tempDisplayObjectParent](DChartPlotAreaImpl.md#_tempdisplayobjectparent)
- [\_title](DChartPlotAreaImpl.md#_title)
- [\_view](DChartPlotAreaImpl.md#_view)
- [\_workPoint](DChartPlotAreaImpl.md#_workpoint)
- [\_zIndex](DChartPlotAreaImpl.md#_zindex)
- [accessible](DChartPlotAreaImpl.md#accessible)
- [accessibleChildren](DChartPlotAreaImpl.md#accessiblechildren)
- [accessibleHint](DChartPlotAreaImpl.md#accessiblehint)
- [accessiblePointerEvents](DChartPlotAreaImpl.md#accessiblepointerevents)
- [accessibleTitle](DChartPlotAreaImpl.md#accessibletitle)
- [accessibleType](DChartPlotAreaImpl.md#accessibletype)
- [alpha](DChartPlotAreaImpl.md#alpha)
- [angle](DChartPlotAreaImpl.md#angle)
- [buttonMode](DChartPlotAreaImpl.md#buttonmode)
- [cacheAsBitmap](DChartPlotAreaImpl.md#cacheasbitmap)
- [children](DChartPlotAreaImpl.md#children)
- [cursor](DChartPlotAreaImpl.md#cursor)
- [filterArea](DChartPlotAreaImpl.md#filterarea)
- [filters](DChartPlotAreaImpl.md#filters)
- [hitArea](DChartPlotAreaImpl.md#hitarea)
- [interactive](DChartPlotAreaImpl.md#interactive)
- [interactiveChildren](DChartPlotAreaImpl.md#interactivechildren)
- [isMask](DChartPlotAreaImpl.md#ismask)
- [isSprite](DChartPlotAreaImpl.md#issprite)
- [localTransform](DChartPlotAreaImpl.md#localtransform)
- [mask](DChartPlotAreaImpl.md#mask)
- [name](DChartPlotAreaImpl.md#name)
- [parent](DChartPlotAreaImpl.md#parent)
- [pivot](DChartPlotAreaImpl.md#pivot)
- [renderable](DChartPlotAreaImpl.md#renderable)
- [rotation](DChartPlotAreaImpl.md#rotation)
- [sortDirty](DChartPlotAreaImpl.md#sortdirty)
- [sortableChildren](DChartPlotAreaImpl.md#sortablechildren)
- [transform](DChartPlotAreaImpl.md#transform)
- [visible](DChartPlotAreaImpl.md#visible)
- [worldAlpha](DChartPlotAreaImpl.md#worldalpha)
- [worldTransform](DChartPlotAreaImpl.md#worldtransform)
- [worldVisible](DChartPlotAreaImpl.md#worldvisible)
- [zIndex](DChartPlotAreaImpl.md#zindex)
- [WORK\_CONTAINS\_POINT](DChartPlotAreaImpl.md#work_contains_point)

### Accessors

- [axis](DChartPlotAreaImpl.md#axis)
- [background](DChartPlotAreaImpl.md#background)
- [border](DChartPlotAreaImpl.md#border)
- [chart](DChartPlotAreaImpl.md#chart)
- [container](DChartPlotAreaImpl.md#container)
- [coordinate](DChartPlotAreaImpl.md#coordinate)
- [corner](DChartPlotAreaImpl.md#corner)
- [height](DChartPlotAreaImpl.md#height)
- [options](DChartPlotAreaImpl.md#options)
- [outline](DChartPlotAreaImpl.md#outline)
- [padding](DChartPlotAreaImpl.md#padding)
- [position](DChartPlotAreaImpl.md#position)
- [reflowable](DChartPlotAreaImpl.md#reflowable)
- [scale](DChartPlotAreaImpl.md#scale)
- [series](DChartPlotAreaImpl.md#series)
- [shadow](DChartPlotAreaImpl.md#shadow)
- [skew](DChartPlotAreaImpl.md#skew)
- [snippet](DChartPlotAreaImpl.md#snippet)
- [state](DChartPlotAreaImpl.md#state)
- [theme](DChartPlotAreaImpl.md#theme)
- [title](DChartPlotAreaImpl.md#title)
- [type](DChartPlotAreaImpl.md#type)
- [unsafe](DChartPlotAreaImpl.md#unsafe)
- [view](DChartPlotAreaImpl.md#view)
- [weight](DChartPlotAreaImpl.md#weight)
- [width](DChartPlotAreaImpl.md#width)
- [x](DChartPlotAreaImpl.md#x)
- [y](DChartPlotAreaImpl.md#y)

### Methods

- [\_calculateBounds](DChartPlotAreaImpl.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DChartPlotAreaImpl.md#_recursivepostupdatetransform)
- [\_render](DChartPlotAreaImpl.md#_render)
- [addChild](DChartPlotAreaImpl.md#addchild)
- [addChildAt](DChartPlotAreaImpl.md#addchildat)
- [addListener](DChartPlotAreaImpl.md#addlistener)
- [applyTitle](DChartPlotAreaImpl.md#applytitle)
- [blur](DChartPlotAreaImpl.md#blur)
- [calculateBounds](DChartPlotAreaImpl.md#calculatebounds)
- [containsGlobalPoint](DChartPlotAreaImpl.md#containsglobalpoint)
- [containsLocalPoint](DChartPlotAreaImpl.md#containslocalpoint)
- [containsPoint](DChartPlotAreaImpl.md#containspoint)
- [destroy](DChartPlotAreaImpl.md#destroy)
- [displayObjectUpdateTransform](DChartPlotAreaImpl.md#displayobjectupdatetransform)
- [emit](DChartPlotAreaImpl.md#emit)
- [eventNames](DChartPlotAreaImpl.md#eventnames)
- [fit](DChartPlotAreaImpl.md#fit)
- [focus](DChartPlotAreaImpl.md#focus)
- [focusOnClosest](DChartPlotAreaImpl.md#focusonclosest)
- [getBounds](DChartPlotAreaImpl.md#getbounds)
- [getBoundsInContainer](DChartPlotAreaImpl.md#getboundsincontainer)
- [getChildAt](DChartPlotAreaImpl.md#getchildat)
- [getChildByName](DChartPlotAreaImpl.md#getchildbyname)
- [getChildIndex](DChartPlotAreaImpl.md#getchildindex)
- [getClearType](DChartPlotAreaImpl.md#getcleartype)
- [getClippingRect](DChartPlotAreaImpl.md#getclippingrect)
- [getGlobalPosition](DChartPlotAreaImpl.md#getglobalposition)
- [getHeight](DChartPlotAreaImpl.md#getheight)
- [getLocalBounds](DChartPlotAreaImpl.md#getlocalbounds)
- [getOverflowMask](DChartPlotAreaImpl.md#getoverflowmask)
- [getParentOfSize](DChartPlotAreaImpl.md#getparentofsize)
- [getThemeDefault](DChartPlotAreaImpl.md#getthemedefault)
- [getType](DChartPlotAreaImpl.md#gettype)
- [getWidth](DChartPlotAreaImpl.md#getwidth)
- [getX](DChartPlotAreaImpl.md#getx)
- [getY](DChartPlotAreaImpl.md#gety)
- [hasDirty](DChartPlotAreaImpl.md#hasdirty)
- [hasRefitableHeight](DChartPlotAreaImpl.md#hasrefitableheight)
- [hasRefitableWidth](DChartPlotAreaImpl.md#hasrefitablewidth)
- [hide](DChartPlotAreaImpl.md#hide)
- [init](DChartPlotAreaImpl.md#init)
- [initReflowable](DChartPlotAreaImpl.md#initreflowable)
- [isDirty](DChartPlotAreaImpl.md#isdirty)
- [isEventTarget](DChartPlotAreaImpl.md#iseventtarget)
- [isHidden](DChartPlotAreaImpl.md#ishidden)
- [isHierarchyDirty](DChartPlotAreaImpl.md#ishierarchydirty)
- [isRefitable](DChartPlotAreaImpl.md#isrefitable)
- [isShown](DChartPlotAreaImpl.md#isshown)
- [listenerCount](DChartPlotAreaImpl.md#listenercount)
- [listeners](DChartPlotAreaImpl.md#listeners)
- [off](DChartPlotAreaImpl.md#off)
- [on](DChartPlotAreaImpl.md#on)
- [onBlend](DChartPlotAreaImpl.md#onblend)
- [onBlur](DChartPlotAreaImpl.md#onblur)
- [onChildBlur](DChartPlotAreaImpl.md#onchildblur)
- [onChildFocus](DChartPlotAreaImpl.md#onchildfocus)
- [onChildrenChange](DChartPlotAreaImpl.md#onchildrenchange)
- [onDblClick](DChartPlotAreaImpl.md#ondblclick)
- [onDown](DChartPlotAreaImpl.md#ondown)
- [onDownThis](DChartPlotAreaImpl.md#ondownthis)
- [onFocus](DChartPlotAreaImpl.md#onfocus)
- [onHierarchyDirty](DChartPlotAreaImpl.md#onhierarchydirty)
- [onKeyDown](DChartPlotAreaImpl.md#onkeydown)
- [onKeyUp](DChartPlotAreaImpl.md#onkeyup)
- [onMove](DChartPlotAreaImpl.md#onmove)
- [onOut](DChartPlotAreaImpl.md#onout)
- [onOver](DChartPlotAreaImpl.md#onover)
- [onParentMove](DChartPlotAreaImpl.md#onparentmove)
- [onParentResize](DChartPlotAreaImpl.md#onparentresize)
- [onRefit](DChartPlotAreaImpl.md#onrefit)
- [onReflow](DChartPlotAreaImpl.md#onreflow)
- [onResize](DChartPlotAreaImpl.md#onresize)
- [onScale](DChartPlotAreaImpl.md#onscale)
- [onShortcut](DChartPlotAreaImpl.md#onshortcut)
- [onSkew](DChartPlotAreaImpl.md#onskew)
- [onStateChange](DChartPlotAreaImpl.md#onstatechange)
- [onUp](DChartPlotAreaImpl.md#onup)
- [onUpThis](DChartPlotAreaImpl.md#onupthis)
- [onWheel](DChartPlotAreaImpl.md#onwheel)
- [once](DChartPlotAreaImpl.md#once)
- [reflow](DChartPlotAreaImpl.md#reflow)
- [removeAllListeners](DChartPlotAreaImpl.md#removealllisteners)
- [removeChild](DChartPlotAreaImpl.md#removechild)
- [removeChildAt](DChartPlotAreaImpl.md#removechildat)
- [removeChildren](DChartPlotAreaImpl.md#removechildren)
- [removeListener](DChartPlotAreaImpl.md#removelistener)
- [render](DChartPlotAreaImpl.md#render)
- [renderAdvanced](DChartPlotAreaImpl.md#renderadvanced)
- [resize](DChartPlotAreaImpl.md#resize)
- [setChildIndex](DChartPlotAreaImpl.md#setchildindex)
- [setFocused](DChartPlotAreaImpl.md#setfocused)
- [setHeight](DChartPlotAreaImpl.md#setheight)
- [setParent](DChartPlotAreaImpl.md#setparent)
- [setTransform](DChartPlotAreaImpl.md#settransform)
- [setWidth](DChartPlotAreaImpl.md#setwidth)
- [setX](DChartPlotAreaImpl.md#setx)
- [setY](DChartPlotAreaImpl.md#sety)
- [show](DChartPlotAreaImpl.md#show)
- [sortChildren](DChartPlotAreaImpl.md#sortchildren)
- [swapChildren](DChartPlotAreaImpl.md#swapchildren)
- [toCursor](DChartPlotAreaImpl.md#tocursor)
- [toDirty](DChartPlotAreaImpl.md#todirty)
- [toGlobal](DChartPlotAreaImpl.md#toglobal)
- [toHasDirty](DChartPlotAreaImpl.md#tohasdirty)
- [toHierarchyDirty](DChartPlotAreaImpl.md#tohierarchydirty)
- [toLocal](DChartPlotAreaImpl.md#tolocal)
- [toParentHasDirty](DChartPlotAreaImpl.md#toparenthasdirty)
- [toParentHierarchyDirty](DChartPlotAreaImpl.md#toparenthierarchydirty)
- [toParentResized](DChartPlotAreaImpl.md#toparentresized)
- [updateTransform](DChartPlotAreaImpl.md#updatetransform)
- [mixin](DChartPlotAreaImpl.md#mixin)

## Constructors

### constructor

• **new DChartPlotAreaImpl**<`CHART`, `THEME`, `OPTIONS`\>(`chart`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `THEME` | extends [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) = [`DThemeChartPlotArea`](../interfaces/DThemeChartPlotArea.md) |
| `OPTIONS` | extends [`DChartPlotAreaOptions`](../interfaces/DChartPlotAreaOptions.md)<`CHART`, `THEME`, `OPTIONS`\> = [`DChartPlotAreaOptions`](../interfaces/DChartPlotAreaOptions.md)<`CHART`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `chart` | `CHART` |
| `options?` | `OPTIONS` |

#### Overrides

[DBase](DBase.md).[constructor](DBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L47)

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

node_modules/pixi.js/pixi.js.d.ts:8489

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

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_auto](../interfaces/DChartPlotArea.md#_auto)

#### Inherited from

[DBase](DBase.md).[_auto](DBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:778](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L778)

___

### \_axis

• `Protected` **\_axis**: [`DChartAxisContainerImpl`](DChartAxisContainerImpl.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L35)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_background](../interfaces/DChartPlotArea.md#_background)

#### Inherited from

[DBase](DBase.md).[_background](DBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_blendDuration

• `Protected` **\_blendDuration**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L43)

___

### \_blendStartTime

• `Protected` **\_blendStartTime**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L42)

___

### \_blendTimeout

• `Protected` **\_blendTimeout**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L44)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_border](../interfaces/DChartPlotArea.md#_border)

#### Inherited from

[DBase](DBase.md).[_border](DBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_bounds](../interfaces/DChartPlotArea.md#_bounds)

#### Inherited from

[DBase](DBase.md).[_bounds](DBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_boundsInContainer

• `Protected` **\_boundsInContainer**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L39)

___

### \_chart

• `Protected` **\_chart**: `CHART`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L31)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_clearType](../interfaces/DChartPlotArea.md#_cleartype)

#### Inherited from

[DBase](DBase.md).[_clearType](DBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_container

• `Protected` **\_container**: [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L32)

___

### \_coordinate

• `Protected` **\_coordinate**: [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L34)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_corner](../interfaces/DChartPlotArea.md#_corner)

#### Inherited from

[DBase](DBase.md).[_corner](DBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:776](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L776)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_cursor](../interfaces/DChartPlotArea.md#_cursor)

#### Inherited from

[DBase](DBase.md).[_cursor](DBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L797)

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

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_isBoundsInContainerDirty

• `Protected` **\_isBoundsInContainerDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L38)

___

### \_isViewDirty

• `Protected` **\_isViewDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L37)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_lastDownPoint](../interfaces/DChartPlotArea.md#_lastdownpoint)

#### Inherited from

[DBase](DBase.md).[_lastDownPoint](DBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L796)

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

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_mask](../interfaces/DChartPlotArea.md#_mask)

#### Inherited from

[DBase](DBase.md).[_mask](DBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_onBlendBound

• `Protected` **\_onBlendBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L45)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_options](../interfaces/DChartPlotArea.md#_options)

#### Inherited from

[DBase](DBase.md).[_options](DBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L772)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_outline](../interfaces/DChartPlotArea.md#_outline)

#### Inherited from

[DBase](DBase.md).[_outline](DBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L40)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_padding](../interfaces/DChartPlotArea.md#_padding)

#### Inherited from

[DBase](DBase.md).[_padding](DBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_reflowable](../interfaces/DChartPlotArea.md#_reflowable)

#### Inherited from

[DBase](DBase.md).[_reflowable](DBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_series

• `Protected` **\_series**: [`DChartSeriesContainerImpl`](DChartSeriesContainerImpl.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L33)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_shortcuts](../interfaces/DChartPlotArea.md#_shortcuts)

#### Inherited from

[DBase](DBase.md).[_shortcuts](DBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_snippet](../interfaces/DChartPlotArea.md#_snippet)

#### Inherited from

[DBase](DBase.md).[_snippet](DBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_tempDisplayObjectParent](../interfaces/DChartPlotArea.md#_tempdisplayobjectparent)

#### Inherited from

[DBase](DBase.md).[_tempDisplayObjectParent](DBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_title](../interfaces/DChartPlotArea.md#_title)

#### Inherited from

[DBase](DBase.md).[_title](DBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_view

• `Protected` **\_view**: [`DViewImpl`](DViewImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L36)

___

### \_workPoint

• `Protected` **\_workPoint**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L41)

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

node_modules/pixi.js/pixi.js.d.ts:8583

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessibleChildren](../interfaces/DChartPlotArea.md#accessiblechildren)

#### Inherited from

[DBase](DBase.md).[accessibleChildren](DBase.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessiblePointerEvents](../interfaces/DChartPlotArea.md#accessiblepointerevents)

#### Inherited from

[DBase](DBase.md).[accessiblePointerEvents](DBase.md#accessiblepointerevents)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessibleTitle](../interfaces/DChartPlotArea.md#accessibletitle)

#### Inherited from

[DBase](DBase.md).[accessibleTitle](DBase.md#accessibletitle)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[accessibleType](../interfaces/DChartPlotArea.md#accessibletype)

#### Inherited from

[DBase](DBase.md).[accessibleType](DBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

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

node_modules/pixi.js/pixi.js.d.ts:8535

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[buttonMode](../interfaces/DChartPlotArea.md#buttonmode)

#### Inherited from

[DBase](DBase.md).[buttonMode](DBase.md#buttonmode)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[cacheAsBitmap](../interfaces/DChartPlotArea.md#cacheasbitmap)

#### Inherited from

[DBase](DBase.md).[cacheAsBitmap](DBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

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

node_modules/pixi.js/pixi.js.d.ts:8277

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

node_modules/pixi.js/pixi.js.d.ts:8867

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

node_modules/pixi.js/pixi.js.d.ts:8592

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[hitArea](../interfaces/DChartPlotArea.md#hitarea)

#### Inherited from

[DBase](DBase.md).[hitArea](DBase.md#hitarea)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[interactive](../interfaces/DChartPlotArea.md#interactive)

#### Inherited from

[DBase](DBase.md).[interactive](DBase.md#interactive)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[interactiveChildren](../interfaces/DChartPlotArea.md#interactivechildren)

#### Inherited from

[DBase](DBase.md).[interactiveChildren](DBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

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

node_modules/pixi.js/pixi.js.d.ts:8631

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

node_modules/pixi.js/pixi.js.d.ts:8626

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[mask](../interfaces/DChartPlotArea.md#mask)

#### Inherited from

[DBase](DBase.md).[mask](DBase.md#mask)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[name](../interfaces/DChartPlotArea.md#name)

#### Inherited from

[DBase](DBase.md).[name](DBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[parent](../interfaces/DChartPlotArea.md#parent)

#### Inherited from

[DBase](DBase.md).[parent](DBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[pivot](../interfaces/DChartPlotArea.md#pivot)

#### Inherited from

[DBase](DBase.md).[pivot](DBase.md#pivot)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[renderable](../interfaces/DChartPlotArea.md#renderable)

#### Inherited from

[DBase](DBase.md).[renderable](DBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

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

node_modules/pixi.js/pixi.js.d.ts:8764

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[sortableChildren](../interfaces/DChartPlotArea.md#sortablechildren)

#### Inherited from

[DBase](DBase.md).[sortableChildren](DBase.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

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

node_modules/pixi.js/pixi.js.d.ts:8529

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

node_modules/pixi.js/pixi.js.d.ts:8544

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

node_modules/pixi.js/pixi.js.d.ts:8567

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

node_modules/pixi.js/pixi.js.d.ts:8722

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

node_modules/pixi.js/pixi.js.d.ts:8787

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

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DBase](DBase.md).[WORK_CONTAINS_POINT](DBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L768)

## Accessors

### axis

• `get` **axis**(): [`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\>

#### Returns

[`DChartAxisContainer`](../interfaces/DChartAxisContainer.md)<`CHART`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[axis](../interfaces/DChartPlotArea.md#axis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L163)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### chart

• `get` **chart**(): `CHART`

#### Returns

`CHART`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[chart](../interfaces/DChartPlotArea.md#chart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L147)

___

### container

• `get` **container**(): [`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Returns

[`DChartPlotAreaContainer`](DChartPlotAreaContainer.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[container](../interfaces/DChartPlotArea.md#container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L159)

___

### coordinate

• `get` **coordinate**(): [`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)<`CHART`\>

#### Returns

[`DChartCoordinateContainer`](../interfaces/DChartCoordinateContainer.md)<`CHART`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[coordinate](../interfaces/DChartPlotArea.md#coordinate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L151)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1455)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1378](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1378)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1451)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1437)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1442)

___

### series

• `get` **series**(): [`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Returns

[`DChartSeriesContainer`](../interfaces/DChartSeriesContainer.md)<`CHART`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[series](../interfaces/DChartPlotArea.md#series)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L155)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1791)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1795)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1447](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1447)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1112)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1674](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1674)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1234)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### view

• `get` **view**(): [`DView`](../interfaces/DView.md)

#### Returns

[`DView`](../interfaces/DView.md)

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[view](../interfaces/DChartPlotArea.md#view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L167)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1137)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1319)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1239)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1243)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1279](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1279)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1283)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_calculateBounds](../interfaces/DChartPlotArea.md#_calculatebounds)

#### Inherited from

[DBase](DBase.md).[_calculateBounds](DBase.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2018](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2018)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[_render](../interfaces/DChartPlotArea.md#_render)

#### Inherited from

[DBase](DBase.md).[_render](DBase.md#_render)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[addChild](../interfaces/DChartPlotArea.md#addchild)

#### Inherited from

[DBase](DBase.md).[addChild](DBase.md#addchild)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[addChildAt](../interfaces/DChartPlotArea.md#addchildat)

#### Inherited from

[DBase](DBase.md).[addChildAt](DBase.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[addListener](../interfaces/DChartPlotArea.md#addlistener)

#### Inherited from

[DBase](DBase.md).[addListener](DBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[addListener](../interfaces/DChartPlotArea.md#addlistener)

#### Inherited from

[DBase](DBase.md).[addListener](DBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[applyTitle](../interfaces/DChartPlotArea.md#applytitle)

#### Inherited from

[DBase](DBase.md).[applyTitle](DBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1488)

___

### blur

▸ **blur**(`recursively?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[blur](../interfaces/DChartPlotArea.md#blur)

#### Inherited from

[DBase](DBase.md).[blur](DBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1594)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[containsGlobalPoint](../interfaces/DChartPlotArea.md#containsglobalpoint)

#### Inherited from

[DBase](DBase.md).[containsGlobalPoint](DBase.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2043](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2043)

___

### containsLocalPoint

▸ `Protected` **containsLocalPoint**(`point`): `boolean`

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

[src/main/typescript/wcardinal/ui/d-base.ts:2047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2047)

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

[src/main/typescript/wcardinal/ui/d-base.ts:2034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2034)

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

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L201)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[displayObjectUpdateTransform](../interfaces/DChartPlotArea.md#displayobjectupdatetransform)

#### Inherited from

[DBase](DBase.md).[displayObjectUpdateTransform](DBase.md#displayobjectupdatetransform)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[emit](../interfaces/DChartPlotArea.md#emit)

#### Inherited from

[DBase](DBase.md).[emit](DBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

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

node_modules/pixi.js/pixi.js.d.ts:23996

___

### fit

▸ **fit**(`duration?`, `domainFrom?`, `domainTo?`, `rangeFrom?`, `rangeTo?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |
| `domainFrom?` | `number` |
| `domainTo?` | `number` |
| `rangeFrom?` | `number` |
| `rangeTo?` | `number` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[fit](../interfaces/DChartPlotArea.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L235)

___

### focus

▸ **focus**(): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[focus](../interfaces/DChartPlotArea.md#focus)

#### Inherited from

[DBase](DBase.md).[focus](DBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1590](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1590)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[focusOnClosest](../interfaces/DChartPlotArea.md#focusonclosest)

#### Inherited from

[DBase](DBase.md).[focusOnClosest](DBase.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1958](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1958)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getBounds](../interfaces/DChartPlotArea.md#getbounds)

#### Inherited from

[DBase](DBase.md).[getBounds](DBase.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8651

___

### getBoundsInContainer

▸ **getBoundsInContainer**(): `Rectangle`

#### Returns

`Rectangle`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getBoundsInContainer](../interfaces/DChartPlotArea.md#getboundsincontainer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L211)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getChildByName](../interfaces/DChartPlotArea.md#getchildbyname)

#### Inherited from

[DBase](DBase.md).[getChildByName](DBase.md#getchildbyname)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getChildIndex](../interfaces/DChartPlotArea.md#getchildindex)

#### Inherited from

[DBase](DBase.md).[getChildIndex](DBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

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

[src/main/typescript/wcardinal/ui/d-base.ts:1203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1203)

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

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getGlobalPosition](../interfaces/DChartPlotArea.md#getglobalposition)

#### Inherited from

[DBase](DBase.md).[getGlobalPosition](DBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

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

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getLocalBounds](../interfaces/DChartPlotArea.md#getlocalbounds)

#### Inherited from

[DBase](DBase.md).[getLocalBounds](DBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ `Protected` **getOverflowMask**(): [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Returns

[`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L138)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getParentOfSize](../interfaces/DChartPlotArea.md#getparentofsize)

#### Inherited from

[DBase](DBase.md).[getParentOfSize](DBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1825](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1825)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getThemeDefault](../interfaces/DChartPlotArea.md#getthemedefault)

#### Inherited from

[DBase](DBase.md).[getThemeDefault](DBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2009](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2009)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[getType](../interfaces/DChartPlotArea.md#gettype)

#### Overrides

[DBase](DBase.md).[getType](DBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L207)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1247)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1287)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

___

### hasRefitableHeight

▸ `Protected` **hasRefitableHeight**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[hasRefitableHeight](../interfaces/DChartPlotArea.md#hasrefitableheight)

#### Inherited from

[DBase](DBase.md).[hasRefitableHeight](DBase.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1775)

___

### hasRefitableWidth

▸ `Protected` **hasRefitableWidth**(`target`): target is DBase<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase<any, any\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[hasRefitableWidth](../interfaces/DChartPlotArea.md#hasrefitablewidth)

#### Inherited from

[DBase](DBase.md).[hasRefitableWidth](DBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1781](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1781)

___

### hide

▸ **hide**(): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[hide](../interfaces/DChartPlotArea.md#hide)

#### Inherited from

[DBase](DBase.md).[hide](DBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1508)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[init](../interfaces/DChartPlotArea.md#init)

#### Overrides

[DBase](DBase.md).[init](DBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L58)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[initReflowable](../interfaces/DChartPlotArea.md#initreflowable)

#### Inherited from

[DBase](DBase.md).[initReflowable](DBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1572)

___

### isEventTarget

▸ `Protected` **isEventTarget**(`e`): `boolean`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1903](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1903)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1518](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1518)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1564)

___

### isRefitable

▸ `Protected` **isRefitable**(`target`): target is DRefitable

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

[src/main/typescript/wcardinal/ui/d-base.ts:1771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1771)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[listeners](../interfaces/DChartPlotArea.md#listeners)

#### Inherited from

[DBase](DBase.md).[listeners](DBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[off](../interfaces/DChartPlotArea.md#off)

#### Inherited from

[DBase](DBase.md).[off](DBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[on](../interfaces/DChartPlotArea.md#on)

#### Inherited from

[DBase](DBase.md).[on](DBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[on](../interfaces/DChartPlotArea.md#on)

#### Inherited from

[DBase](DBase.md).[on](DBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlend

▸ `Protected` **onBlend**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L262)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onBlur](../interfaces/DChartPlotArea.md#onblur)

#### Inherited from

[DBase](DBase.md).[onBlur](DBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1667](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1667)

___

### onChildBlur

▸ `Protected` **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onChildBlur](../interfaces/DChartPlotArea.md#onchildblur)

#### Inherited from

[DBase](DBase.md).[onChildBlur](DBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1660](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1660)

___

### onChildFocus

▸ `Protected` **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onChildFocus](../interfaces/DChartPlotArea.md#onchildfocus)

#### Inherited from

[DBase](DBase.md).[onChildFocus](DBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1646](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1646)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onChildrenChange](../interfaces/DChartPlotArea.md#onchildrenchange)

#### Inherited from

[DBase](DBase.md).[onChildrenChange](DBase.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### onDblClick

▸ `Protected` **onDblClick**(`e`, `interactionManager`): `boolean`

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

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L177)

___

### onDown

▸ `Protected` **onDown**(`e`): `void`

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

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L186)

___

### onDownThis

▸ `Protected` **onDownThis**(`e`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1924](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1924)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onFocus](../interfaces/DChartPlotArea.md#onfocus)

#### Inherited from

[DBase](DBase.md).[onFocus](DBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1653)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onHierarchyDirty](../interfaces/DChartPlotArea.md#onhierarchydirty)

#### Inherited from

[DBase](DBase.md).[onHierarchyDirty](DBase.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1568)

___

### onKeyDown

▸ `Protected` **onKeyDown**(`e`): `boolean`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1892](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1892)

___

### onKeyUp

▸ `Protected` **onKeyUp**(`e`): `boolean`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1897](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1897)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onMove](../interfaces/DChartPlotArea.md#onmove)

#### Inherited from

[DBase](DBase.md).[onMove](DBase.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

___

### onOut

▸ `Protected` **onOut**(`e`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1981](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1981)

___

### onOver

▸ `Protected` **onOver**(`e`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1967](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1967)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onParentMove](../interfaces/DChartPlotArea.md#onparentmove)

#### Inherited from

[DBase](DBase.md).[onParentMove](DBase.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1881](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1881)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1840](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1840)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onRefit](../interfaces/DChartPlotArea.md#onrefit)

#### Inherited from

[DBase](DBase.md).[onRefit](DBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1727)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onReflow](../interfaces/DChartPlotArea.md#onreflow)

#### Inherited from

[DBase](DBase.md).[onReflow](DBase.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1787)

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

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L132)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onScale](../interfaces/DChartPlotArea.md#onscale)

#### Inherited from

[DBase](DBase.md).[onScale](DBase.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1224)

___

### onShortcut

▸ `Protected` **onShortcut**(`e`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1129)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[onSkew](../interfaces/DChartPlotArea.md#onskew)

#### Inherited from

[DBase](DBase.md).[onSkew](DBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1229)

___

### onStateChange

▸ `Protected` **onStateChange**(`newState`, `oldState`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1617](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1617)

___

### onUp

▸ `Protected` **onUp**(`e`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1935](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1935)

___

### onUpThis

▸ `Protected` **onUpThis**(`e`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1942](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1942)

___

### onWheel

▸ `Protected` **onWheel**(`e`, `deltas`, `global`): `boolean`

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

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L171)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[once](../interfaces/DChartPlotArea.md#once)

#### Inherited from

[DBase](DBase.md).[once](DBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[once](../interfaces/DChartPlotArea.md#once)

#### Inherited from

[DBase](DBase.md).[once](DBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

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

[src/main/typescript/wcardinal/ui/d-base.ts:1700](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1700)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeAllListeners](../interfaces/DChartPlotArea.md#removealllisteners)

#### Inherited from

[DBase](DBase.md).[removeAllListeners](DBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeAllListeners](../interfaces/DChartPlotArea.md#removealllisteners)

#### Inherited from

[DBase](DBase.md).[removeAllListeners](DBase.md#removealllisteners)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeChild](../interfaces/DChartPlotArea.md#removechild)

#### Inherited from

[DBase](DBase.md).[removeChild](DBase.md#removechild)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeChildAt](../interfaces/DChartPlotArea.md#removechildat)

#### Inherited from

[DBase](DBase.md).[removeChildAt](DBase.md#removechildat)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeChildren](../interfaces/DChartPlotArea.md#removechildren)

#### Inherited from

[DBase](DBase.md).[removeChildren](DBase.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeListener](../interfaces/DChartPlotArea.md#removelistener)

#### Inherited from

[DBase](DBase.md).[removeListener](DBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[removeListener](../interfaces/DChartPlotArea.md#removelistener)

#### Inherited from

[DBase](DBase.md).[removeListener](DBase.md#removelistener)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[render](../interfaces/DChartPlotArea.md#render)

#### Overrides

[DBase](DBase.md).[render](DBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area-impl.ts#L191)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[renderAdvanced](../interfaces/DChartPlotArea.md#renderadvanced)

#### Inherited from

[DBase](DBase.md).[renderAdvanced](DBase.md#renderadvanced)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[resize](../interfaces/DChartPlotArea.md#resize)

#### Inherited from

[DBase](DBase.md).[resize](DBase.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

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

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setFocused](../interfaces/DChartPlotArea.md#setfocused)

#### Inherited from

[DBase](DBase.md).[setFocused](DBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setTransform](../interfaces/DChartPlotArea.md#settransform)

#### Inherited from

[DBase](DBase.md).[setTransform](DBase.md#settransform)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[setWidth](../interfaces/DChartPlotArea.md#setwidth)

#### Inherited from

[DBase](DBase.md).[setWidth](DBase.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1256)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1296)

___

### show

▸ **show**(): [`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Returns

[`DChartPlotAreaImpl`](DChartPlotAreaImpl.md)<`CHART`, `THEME`, `OPTIONS`\>

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[show](../interfaces/DChartPlotArea.md#show)

#### Inherited from

[DBase](DBase.md).[show](DBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1495](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1495)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[swapChildren](../interfaces/DChartPlotArea.md#swapchildren)

#### Inherited from

[DBase](DBase.md).[swapChildren](DBase.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toCursor

▸ `Protected` **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\> |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toCursor](../interfaces/DChartPlotArea.md#tocursor)

#### Inherited from

[DBase](DBase.md).[toCursor](DBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1522)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toGlobal](../interfaces/DChartPlotArea.md#toglobal)

#### Inherited from

[DBase](DBase.md).[toGlobal](DBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

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

[src/main/typescript/wcardinal/ui/d-base.ts:1531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1531)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1547](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1547)

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

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toLocal](../interfaces/DChartPlotArea.md#tolocal)

#### Inherited from

[DBase](DBase.md).[toLocal](DBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

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

[src/main/typescript/wcardinal/ui/d-base.ts:1540](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1540)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1557)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[toParentResized](../interfaces/DChartPlotArea.md#toparentresized)

#### Inherited from

[DBase](DBase.md).[toParentResized](DBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1818](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1818)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Implementation of

[DChartPlotArea](../interfaces/DChartPlotArea.md).[updateTransform](../interfaces/DChartPlotArea.md#updatetransform)

#### Inherited from

[DBase](DBase.md).[updateTransform](DBase.md#updatetransform)

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

[DBase](DBase.md).[mixin](DBase.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
