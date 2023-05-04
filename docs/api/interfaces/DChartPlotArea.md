[Winter Cardinal UI - v0.310.1](../index.md) / DChartPlotArea

# Interface: DChartPlotArea<CHART\>

A base class for UI classes.
See [DBaseEvents](DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |

## Hierarchy

- [`DBase`](../classes/DBase.md)

  ↳ **`DChartPlotArea`**

## Implemented by

- [`DChartPlotAreaImpl`](../classes/DChartPlotAreaImpl.md)

## Table of contents

### Properties

- [\_accessibleActive](DChartPlotArea.md#_accessibleactive)
- [\_accessibleDiv](DChartPlotArea.md#_accessiblediv)
- [\_auto](DChartPlotArea.md#_auto)
- [\_background](DChartPlotArea.md#_background)
- [\_border](DChartPlotArea.md#_border)
- [\_bounds](DChartPlotArea.md#_bounds)
- [\_clearType](DChartPlotArea.md#_cleartype)
- [\_corner](DChartPlotArea.md#_corner)
- [\_cursor](DChartPlotArea.md#_cursor)
- [\_destroyed](DChartPlotArea.md#_destroyed)
- [\_lastDownPoint](DChartPlotArea.md#_lastdownpoint)
- [\_lastSortedIndex](DChartPlotArea.md#_lastsortedindex)
- [\_mask](DChartPlotArea.md#_mask)
- [\_options](DChartPlotArea.md#_options)
- [\_outline](DChartPlotArea.md#_outline)
- [\_padding](DChartPlotArea.md#_padding)
- [\_reflowable](DChartPlotArea.md#_reflowable)
- [\_shortcuts](DChartPlotArea.md#_shortcuts)
- [\_snippet](DChartPlotArea.md#_snippet)
- [\_tempDisplayObjectParent](DChartPlotArea.md#_tempdisplayobjectparent)
- [\_title](DChartPlotArea.md#_title)
- [\_zIndex](DChartPlotArea.md#_zindex)
- [accessible](DChartPlotArea.md#accessible)
- [accessibleChildren](DChartPlotArea.md#accessiblechildren)
- [accessibleHint](DChartPlotArea.md#accessiblehint)
- [accessiblePointerEvents](DChartPlotArea.md#accessiblepointerevents)
- [accessibleTitle](DChartPlotArea.md#accessibletitle)
- [accessibleType](DChartPlotArea.md#accessibletype)
- [alpha](DChartPlotArea.md#alpha)
- [angle](DChartPlotArea.md#angle)
- [axis](DChartPlotArea.md#axis)
- [buttonMode](DChartPlotArea.md#buttonmode)
- [cacheAsBitmap](DChartPlotArea.md#cacheasbitmap)
- [chart](DChartPlotArea.md#chart)
- [children](DChartPlotArea.md#children)
- [container](DChartPlotArea.md#container)
- [coordinate](DChartPlotArea.md#coordinate)
- [cursor](DChartPlotArea.md#cursor)
- [filterArea](DChartPlotArea.md#filterarea)
- [filters](DChartPlotArea.md#filters)
- [hitArea](DChartPlotArea.md#hitarea)
- [interactive](DChartPlotArea.md#interactive)
- [interactiveChildren](DChartPlotArea.md#interactivechildren)
- [isMask](DChartPlotArea.md#ismask)
- [isSprite](DChartPlotArea.md#issprite)
- [localTransform](DChartPlotArea.md#localtransform)
- [mask](DChartPlotArea.md#mask)
- [name](DChartPlotArea.md#name)
- [parent](DChartPlotArea.md#parent)
- [pivot](DChartPlotArea.md#pivot)
- [renderable](DChartPlotArea.md#renderable)
- [rotation](DChartPlotArea.md#rotation)
- [series](DChartPlotArea.md#series)
- [sortDirty](DChartPlotArea.md#sortdirty)
- [sortableChildren](DChartPlotArea.md#sortablechildren)
- [transform](DChartPlotArea.md#transform)
- [view](DChartPlotArea.md#view)
- [visible](DChartPlotArea.md#visible)
- [worldAlpha](DChartPlotArea.md#worldalpha)
- [worldTransform](DChartPlotArea.md#worldtransform)
- [worldVisible](DChartPlotArea.md#worldvisible)
- [zIndex](DChartPlotArea.md#zindex)

### Accessors

- [background](DChartPlotArea.md#background)
- [border](DChartPlotArea.md#border)
- [corner](DChartPlotArea.md#corner)
- [height](DChartPlotArea.md#height)
- [options](DChartPlotArea.md#options)
- [outline](DChartPlotArea.md#outline)
- [padding](DChartPlotArea.md#padding)
- [position](DChartPlotArea.md#position)
- [reflowable](DChartPlotArea.md#reflowable)
- [scale](DChartPlotArea.md#scale)
- [shadow](DChartPlotArea.md#shadow)
- [skew](DChartPlotArea.md#skew)
- [snippet](DChartPlotArea.md#snippet)
- [state](DChartPlotArea.md#state)
- [theme](DChartPlotArea.md#theme)
- [title](DChartPlotArea.md#title)
- [type](DChartPlotArea.md#type)
- [unsafe](DChartPlotArea.md#unsafe)
- [weight](DChartPlotArea.md#weight)
- [width](DChartPlotArea.md#width)
- [x](DChartPlotArea.md#x)
- [y](DChartPlotArea.md#y)

### Methods

- [\_calculateBounds](DChartPlotArea.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DChartPlotArea.md#_recursivepostupdatetransform)
- [\_render](DChartPlotArea.md#_render)
- [addChild](DChartPlotArea.md#addchild)
- [addChildAt](DChartPlotArea.md#addchildat)
- [addListener](DChartPlotArea.md#addlistener)
- [applyTitle](DChartPlotArea.md#applytitle)
- [blur](DChartPlotArea.md#blur)
- [calculateBounds](DChartPlotArea.md#calculatebounds)
- [containsGlobalPoint](DChartPlotArea.md#containsglobalpoint)
- [containsLocalPoint](DChartPlotArea.md#containslocalpoint)
- [containsPoint](DChartPlotArea.md#containspoint)
- [destroy](DChartPlotArea.md#destroy)
- [displayObjectUpdateTransform](DChartPlotArea.md#displayobjectupdatetransform)
- [emit](DChartPlotArea.md#emit)
- [eventNames](DChartPlotArea.md#eventnames)
- [fit](DChartPlotArea.md#fit)
- [focus](DChartPlotArea.md#focus)
- [focusOnClosest](DChartPlotArea.md#focusonclosest)
- [getBounds](DChartPlotArea.md#getbounds)
- [getBoundsInContainer](DChartPlotArea.md#getboundsincontainer)
- [getChildAt](DChartPlotArea.md#getchildat)
- [getChildByName](DChartPlotArea.md#getchildbyname)
- [getChildIndex](DChartPlotArea.md#getchildindex)
- [getClearType](DChartPlotArea.md#getcleartype)
- [getClippingRect](DChartPlotArea.md#getclippingrect)
- [getGlobalPosition](DChartPlotArea.md#getglobalposition)
- [getHeight](DChartPlotArea.md#getheight)
- [getLocalBounds](DChartPlotArea.md#getlocalbounds)
- [getParentOfSize](DChartPlotArea.md#getparentofsize)
- [getThemeDefault](DChartPlotArea.md#getthemedefault)
- [getType](DChartPlotArea.md#gettype)
- [getWidth](DChartPlotArea.md#getwidth)
- [getX](DChartPlotArea.md#getx)
- [getY](DChartPlotArea.md#gety)
- [hasDirty](DChartPlotArea.md#hasdirty)
- [hasRefitableHeight](DChartPlotArea.md#hasrefitableheight)
- [hasRefitableWidth](DChartPlotArea.md#hasrefitablewidth)
- [hide](DChartPlotArea.md#hide)
- [init](DChartPlotArea.md#init)
- [initReflowable](DChartPlotArea.md#initreflowable)
- [isDirty](DChartPlotArea.md#isdirty)
- [isEventTarget](DChartPlotArea.md#iseventtarget)
- [isHidden](DChartPlotArea.md#ishidden)
- [isHierarchyDirty](DChartPlotArea.md#ishierarchydirty)
- [isRefitable](DChartPlotArea.md#isrefitable)
- [isShown](DChartPlotArea.md#isshown)
- [listenerCount](DChartPlotArea.md#listenercount)
- [listeners](DChartPlotArea.md#listeners)
- [off](DChartPlotArea.md#off)
- [on](DChartPlotArea.md#on)
- [onBlur](DChartPlotArea.md#onblur)
- [onChildBlur](DChartPlotArea.md#onchildblur)
- [onChildFocus](DChartPlotArea.md#onchildfocus)
- [onChildrenChange](DChartPlotArea.md#onchildrenchange)
- [onDblClick](DChartPlotArea.md#ondblclick)
- [onDown](DChartPlotArea.md#ondown)
- [onDownThis](DChartPlotArea.md#ondownthis)
- [onFocus](DChartPlotArea.md#onfocus)
- [onHierarchyDirty](DChartPlotArea.md#onhierarchydirty)
- [onKeyDown](DChartPlotArea.md#onkeydown)
- [onKeyUp](DChartPlotArea.md#onkeyup)
- [onMove](DChartPlotArea.md#onmove)
- [onOut](DChartPlotArea.md#onout)
- [onOver](DChartPlotArea.md#onover)
- [onParentMove](DChartPlotArea.md#onparentmove)
- [onParentResize](DChartPlotArea.md#onparentresize)
- [onRefit](DChartPlotArea.md#onrefit)
- [onReflow](DChartPlotArea.md#onreflow)
- [onResize](DChartPlotArea.md#onresize)
- [onScale](DChartPlotArea.md#onscale)
- [onShortcut](DChartPlotArea.md#onshortcut)
- [onSkew](DChartPlotArea.md#onskew)
- [onStateChange](DChartPlotArea.md#onstatechange)
- [onUp](DChartPlotArea.md#onup)
- [onUpThis](DChartPlotArea.md#onupthis)
- [onWheel](DChartPlotArea.md#onwheel)
- [once](DChartPlotArea.md#once)
- [reflow](DChartPlotArea.md#reflow)
- [removeAllListeners](DChartPlotArea.md#removealllisteners)
- [removeChild](DChartPlotArea.md#removechild)
- [removeChildAt](DChartPlotArea.md#removechildat)
- [removeChildren](DChartPlotArea.md#removechildren)
- [removeListener](DChartPlotArea.md#removelistener)
- [render](DChartPlotArea.md#render)
- [renderAdvanced](DChartPlotArea.md#renderadvanced)
- [resize](DChartPlotArea.md#resize)
- [setChildIndex](DChartPlotArea.md#setchildindex)
- [setFocused](DChartPlotArea.md#setfocused)
- [setHeight](DChartPlotArea.md#setheight)
- [setParent](DChartPlotArea.md#setparent)
- [setTransform](DChartPlotArea.md#settransform)
- [setWidth](DChartPlotArea.md#setwidth)
- [setX](DChartPlotArea.md#setx)
- [setY](DChartPlotArea.md#sety)
- [show](DChartPlotArea.md#show)
- [sortChildren](DChartPlotArea.md#sortchildren)
- [swapChildren](DChartPlotArea.md#swapchildren)
- [toCursor](DChartPlotArea.md#tocursor)
- [toDirty](DChartPlotArea.md#todirty)
- [toGlobal](DChartPlotArea.md#toglobal)
- [toHasDirty](DChartPlotArea.md#tohasdirty)
- [toHierarchyDirty](DChartPlotArea.md#tohierarchydirty)
- [toLocal](DChartPlotArea.md#tolocal)
- [toParentHasDirty](DChartPlotArea.md#toparenthasdirty)
- [toParentHierarchyDirty](DChartPlotArea.md#toparenthierarchydirty)
- [toParentResized](DChartPlotArea.md#toparentresized)
- [updateTransform](DChartPlotArea.md#updatetransform)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DBase](../classes/DBase.md).[_accessibleActive](../classes/DBase.md#_accessibleactive)

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

[DBase](../classes/DBase.md).[_accessibleDiv](../classes/DBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](../classes/DBaseAutoSet.md)

#### Inherited from

[DBase](../classes/DBase.md).[_auto](../classes/DBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:778](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L778)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Inherited from

[DBase](../classes/DBase.md).[_background](../classes/DBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](DBorderStateAware.md)

#### Inherited from

[DBase](../classes/DBase.md).[_border](../classes/DBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DBase](../classes/DBase.md).[_bounds](../classes/DBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DBase](../classes/DBase.md).[_clearType](../classes/DBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](DCorner.md)

#### Inherited from

[DBase](../classes/DBase.md).[_corner](../classes/DBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:776](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L776)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DBase](../classes/DBase.md).[_cursor](../classes/DBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L797)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DBase](../classes/DBase.md).[_destroyed](../classes/DBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DBase](../classes/DBase.md).[_lastDownPoint](../classes/DBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DBase](../classes/DBase.md).[_lastSortedIndex](../classes/DBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DBase](../classes/DBase.md).[_mask](../classes/DBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_options

• `Protected` **\_options**: `undefined` \| [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>

#### Inherited from

[DBase](../classes/DBase.md).[_options](../classes/DBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L772)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](DOutline.md)

#### Inherited from

[DBase](../classes/DBase.md).[_outline](../classes/DBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](DPadding.md)

#### Inherited from

[DBase](../classes/DBase.md).[_padding](../classes/DBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Inherited from

[DBase](../classes/DBase.md).[_reflowable](../classes/DBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DBase](../classes/DBase.md).[_shortcuts](../classes/DBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Inherited from

[DBase](../classes/DBase.md).[_snippet](../classes/DBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DBase](../classes/DBase.md).[_tempDisplayObjectParent](../classes/DBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DBase](../classes/DBase.md).[_title](../classes/DBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DBase](../classes/DBase.md).[_zIndex](../classes/DBase.md#_zindex)

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

[DBase](../classes/DBase.md).[accessible](../classes/DBase.md#accessible)

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

[DBase](../classes/DBase.md).[accessibleChildren](../classes/DBase.md#accessiblechildren)

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

[DBase](../classes/DBase.md).[accessibleHint](../classes/DBase.md#accessiblehint)

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

[DBase](../classes/DBase.md).[accessiblePointerEvents](../classes/DBase.md#accessiblepointerevents)

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

[DBase](../classes/DBase.md).[accessibleTitle](../classes/DBase.md#accessibletitle)

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

[DBase](../classes/DBase.md).[accessibleType](../classes/DBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DBase](../classes/DBase.md).[alpha](../classes/DBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DBase](../classes/DBase.md).[angle](../classes/DBase.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8771

___

### axis

• `Readonly` **axis**: [`DChartAxisContainer`](DChartAxisContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L33)

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

[DBase](../classes/DBase.md).[buttonMode](../classes/DBase.md#buttonmode)

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

[DBase](../classes/DBase.md).[cacheAsBitmap](../classes/DBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### chart

• `Readonly` **chart**: `CHART`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L29)

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DBase](../classes/DBase.md).[children](../classes/DBase.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8277

___

### container

• `Readonly` **container**: [`DChartPlotAreaContainer`](../classes/DChartPlotAreaContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L32)

___

### coordinate

• `Readonly` **coordinate**: [`DChartCoordinateContainer`](DChartCoordinateContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L30)

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

[DBase](../classes/DBase.md).[cursor](../classes/DBase.md#cursor)

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

#### Inherited from

[DBase](../classes/DBase.md).[filterArea](../classes/DBase.md#filterarea)

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

[DBase](../classes/DBase.md).[filters](../classes/DBase.md#filters)

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

[DBase](../classes/DBase.md).[hitArea](../classes/DBase.md#hitarea)

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

[DBase](../classes/DBase.md).[interactive](../classes/DBase.md#interactive)

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

[DBase](../classes/DBase.md).[interactiveChildren](../classes/DBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DBase](../classes/DBase.md).[isMask](../classes/DBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DBase](../classes/DBase.md).[isSprite](../classes/DBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DBase](../classes/DBase.md).[localTransform](../classes/DBase.md#localtransform)

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

[DBase](../classes/DBase.md).[mask](../classes/DBase.md#mask)

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

[DBase](../classes/DBase.md).[name](../classes/DBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DBase](../classes/DBase.md).[parent](../classes/DBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DBase](../classes/DBase.md).[pivot](../classes/DBase.md#pivot)

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

[DBase](../classes/DBase.md).[renderable](../classes/DBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DBase](../classes/DBase.md).[rotation](../classes/DBase.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### series

• `Readonly` **series**: [`DChartSeriesContainer`](DChartSeriesContainer.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L31)

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

[DBase](../classes/DBase.md).[sortDirty](../classes/DBase.md#sortdirty)

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

[DBase](../classes/DBase.md).[sortableChildren](../classes/DBase.md#sortablechildren)

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

[DBase](../classes/DBase.md).[transform](../classes/DBase.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### view

• `Readonly` **view**: [`DView`](DView.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L34)

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

[DBase](../classes/DBase.md).[visible](../classes/DBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DBase](../classes/DBase.md).[worldAlpha](../classes/DBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DBase](../classes/DBase.md).[worldTransform](../classes/DBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DBase](../classes/DBase.md).[worldVisible](../classes/DBase.md#worldvisible)

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

[DBase](../classes/DBase.md).[zIndex](../classes/DBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](DBackgroundStateAware.md)

#### Inherited from

DBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### border

• `get` **border**(): [`DBorderStateAware`](DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](DBorderStateAware.md)

#### Inherited from

DBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### corner

• `get` **corner**(): [`DCorner`](DCorner.md)

#### Returns

[`DCorner`](DCorner.md)

#### Inherited from

DBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1455)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

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

#### Inherited from

DBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DBase.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

___

### outline

• `get` **outline**(): [`DOutline`](DOutline.md)

#### Returns

[`DOutline`](DOutline.md)

#### Inherited from

DBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### padding

• `get` **padding**(): [`DPadding`](DPadding.md)

#### Returns

[`DPadding`](DPadding.md)

#### Inherited from

DBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1451)

___

### position

• `get` **position**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1437)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](../classes/DBaseReflowableContainer.md)

#### Inherited from

DBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### scale

• `get` **scale**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1442)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](DShadow.md)

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

DBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1791)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](DShadow.md) |

#### Returns

`void`

#### Inherited from

DBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1795)

___

### skew

• `get` **skew**(): [`DBasePoint`](../classes/DBasePoint.md)

#### Returns

[`DBasePoint`](../classes/DBasePoint.md)

#### Inherited from

DBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1447](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1447)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](../classes/DBaseSnippetContainer.md)

#### Inherited from

DBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1112)

___

### state

• `get` **state**(): [`DBaseStateSet`](DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](DBaseStateSet.md)

#### Inherited from

DBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1674](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1674)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

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

#### Inherited from

DBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

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

#### Inherited from

DBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1234)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1137)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

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

#### Inherited from

DBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

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

#### Inherited from

DBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1243)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

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

#### Inherited from

DBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1283)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[_calculateBounds](../classes/DBase.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2018](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2018)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[_recursivePostUpdateTransform](../classes/DBase.md#_recursivepostupdatetransform)

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

[DBase](../classes/DBase.md).[_render](../classes/DBase.md#_render)

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

[DBase](../classes/DBase.md).[addChild](../classes/DBase.md#addchild)

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

[DBase](../classes/DBase.md).[addChildAt](../classes/DBase.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[addListener](../classes/DBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[addListener](../classes/DBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[applyTitle](../classes/DBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1488)

___

### blur

▸ **blur**(`recursively?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[blur](../classes/DBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1594)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[calculateBounds](../classes/DBase.md#calculatebounds)

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

[DBase](../classes/DBase.md).[containsGlobalPoint](../classes/DBase.md#containsglobalpoint)

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

#### Inherited from

[DBase](../classes/DBase.md).[containsLocalPoint](../classes/DBase.md#containslocalpoint)

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

#### Inherited from

[DBase](../classes/DBase.md).[containsPoint](../classes/DBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2034)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[destroy](../classes/DBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2067](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2067)

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

[DBase](../classes/DBase.md).[displayObjectUpdateTransform](../classes/DBase.md#displayobjectupdatetransform)

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

[DBase](../classes/DBase.md).[emit](../classes/DBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DBase](../classes/DBase.md).[eventNames](../classes/DBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### fit

▸ **fit**(`duration?`, `domainFrom?`, `domainTo?`, `rangeFrom?`, `rangeTo?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |
| `domainFrom?` | `number` |
| `domainTo?` | `number` |
| `rangeFrom?` | `number` |
| `rangeTo?` | `number` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L36)

___

### focus

▸ **focus**(): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[focus](../classes/DBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1590](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1590)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[focusOnClosest](../classes/DBase.md#focusonclosest)

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

#### Inherited from

[DBase](../classes/DBase.md).[getBounds](../classes/DBase.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8651

___

### getBoundsInContainer

▸ **getBoundsInContainer**(): `Rectangle`

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L43)

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

[DBase](../classes/DBase.md).[getChildAt](../classes/DBase.md#getchildat)

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

[DBase](../classes/DBase.md).[getChildByName](../classes/DBase.md#getchildbyname)

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

[DBase](../classes/DBase.md).[getChildIndex](../classes/DBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DBase](../classes/DBase.md).[getClearType](../classes/DBase.md#getcleartype)

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

#### Inherited from

[DBase](../classes/DBase.md).[getClippingRect](../classes/DBase.md#getclippingrect)

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

#### Inherited from

[DBase](../classes/DBase.md).[getGlobalPosition](../classes/DBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DBase](../classes/DBase.md).[getHeight](../classes/DBase.md#getheight)

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

#### Inherited from

[DBase](../classes/DBase.md).[getLocalBounds](../classes/DBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](DPadding.md) ; `width`: `number`  }

#### Inherited from

[DBase](../classes/DBase.md).[getParentOfSize](../classes/DBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1825](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1825)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeBase`](DThemeBase.md)

#### Returns

[`DThemeBase`](DThemeBase.md)

#### Inherited from

[DBase](../classes/DBase.md).[getThemeDefault](../classes/DBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2009](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2009)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Inherited from

[DBase](../classes/DBase.md).[getType](../classes/DBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2013](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2013)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DBase](../classes/DBase.md).[getWidth](../classes/DBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DBase](../classes/DBase.md).[getX](../classes/DBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1247)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DBase](../classes/DBase.md).[getY](../classes/DBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1287)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](../classes/DBase.md).[hasDirty](../classes/DBase.md#hasdirty)

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

#### Inherited from

[DBase](../classes/DBase.md).[hasRefitableHeight](../classes/DBase.md#hasrefitableheight)

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

#### Inherited from

[DBase](../classes/DBase.md).[hasRefitableWidth](../classes/DBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1781](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1781)

___

### hide

▸ **hide**(): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[hide](../classes/DBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1508)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\> |

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[init](../classes/DBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1133)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[initReflowable](../classes/DBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](../classes/DBase.md).[isDirty](../classes/DBase.md#isdirty)

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

#### Inherited from

[DBase](../classes/DBase.md).[isEventTarget](../classes/DBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1903](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1903)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](../classes/DBase.md).[isHidden](../classes/DBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1518](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1518)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](../classes/DBase.md).[isHierarchyDirty](../classes/DBase.md#ishierarchydirty)

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

#### Inherited from

[DBase](../classes/DBase.md).[isRefitable](../classes/DBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1771)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](../classes/DBase.md).[isShown](../classes/DBase.md#isshown)

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

#### Inherited from

[DBase](../classes/DBase.md).[listenerCount](../classes/DBase.md#listenercount)

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

[DBase](../classes/DBase.md).[listeners](../classes/DBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[off](../classes/DBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[on](../classes/DBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[on](../classes/DBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[onBlur](../classes/DBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1667](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1667)

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

[DBase](../classes/DBase.md).[onChildBlur](../classes/DBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1660](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1660)

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

[DBase](../classes/DBase.md).[onChildFocus](../classes/DBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1646](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1646)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[onChildrenChange](../classes/DBase.md#onchildrenchange)

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

#### Inherited from

[DBase](../classes/DBase.md).[onDblClick](../classes/DBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1990](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1990)

___

### onDown

▸ `Protected` **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[onDown](../classes/DBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1917](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1917)

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

[DBase](../classes/DBase.md).[onDownThis](../classes/DBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1924](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1924)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[onFocus](../classes/DBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1653)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[onHierarchyDirty](../classes/DBase.md#onhierarchydirty)

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

#### Inherited from

[DBase](../classes/DBase.md).[onKeyDown](../classes/DBase.md#onkeydown)

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

#### Inherited from

[DBase](../classes/DBase.md).[onKeyUp](../classes/DBase.md#onkeyup)

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

#### Inherited from

[DBase](../classes/DBase.md).[onMove](../classes/DBase.md#onmove)

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

#### Inherited from

[DBase](../classes/DBase.md).[onOut](../classes/DBase.md#onout)

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

#### Inherited from

[DBase](../classes/DBase.md).[onOver](../classes/DBase.md#onover)

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

#### Inherited from

[DBase](../classes/DBase.md).[onParentMove](../classes/DBase.md#onparentmove)

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
| `parentPadding` | [`DPadding`](DPadding.md) | - |

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[onParentResize](../classes/DBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1840](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1840)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[onRefit](../classes/DBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1727)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[onReflow](../classes/DBase.md#onreflow)

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

#### Inherited from

[DBase](../classes/DBase.md).[onResize](../classes/DBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1207)

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

[DBase](../classes/DBase.md).[onScale](../classes/DBase.md#onscale)

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

#### Inherited from

[DBase](../classes/DBase.md).[onShortcut](../classes/DBase.md#onshortcut)

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

#### Inherited from

[DBase](../classes/DBase.md).[onSkew](../classes/DBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1229)

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

[DBase](../classes/DBase.md).[onStateChange](../classes/DBase.md#onstatechange)

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

#### Inherited from

[DBase](../classes/DBase.md).[onUp](../classes/DBase.md#onup)

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

#### Inherited from

[DBase](../classes/DBase.md).[onUpThis](../classes/DBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1942](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1942)

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

[DBase](../classes/DBase.md).[onWheel](../classes/DBase.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1886](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1886)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[once](../classes/DBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[once](../classes/DBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[reflow](../classes/DBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1700](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1700)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[removeAllListeners](../classes/DBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[removeAllListeners](../classes/DBase.md#removealllisteners)

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

[DBase](../classes/DBase.md).[removeChild](../classes/DBase.md#removechild)

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

[DBase](../classes/DBase.md).[removeChildAt](../classes/DBase.md#removechildat)

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

[DBase](../classes/DBase.md).[removeChildren](../classes/DBase.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[removeListener](../classes/DBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[removeListener](../classes/DBase.md#removelistener)

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

[DBase](../classes/DBase.md).[render](../classes/DBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1999](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1999)

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

[DBase](../classes/DBase.md).[renderAdvanced](../classes/DBase.md#renderadvanced)

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

[DBase](../classes/DBase.md).[resize](../classes/DBase.md#resize)

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

#### Inherited from

[DBase](../classes/DBase.md).[setChildIndex](../classes/DBase.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[setFocused](../classes/DBase.md#setfocused)

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

#### Inherited from

[DBase](../classes/DBase.md).[setHeight](../classes/DBase.md#setheight)

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

#### Inherited from

[DBase](../classes/DBase.md).[setParent](../classes/DBase.md#setparent)

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

[DBase](../classes/DBase.md).[setTransform](../classes/DBase.md#settransform)

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

[DBase](../classes/DBase.md).[setWidth](../classes/DBase.md#setwidth)

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

#### Inherited from

[DBase](../classes/DBase.md).[setX](../classes/DBase.md#setx)

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

#### Inherited from

[DBase](../classes/DBase.md).[setY](../classes/DBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1296)

___

### show

▸ **show**(): [`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Returns

[`DChartPlotArea`](DChartPlotArea.md)<`CHART`\>

#### Inherited from

[DBase](../classes/DBase.md).[show](../classes/DBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1495](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1495)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[sortChildren](../classes/DBase.md#sortchildren)

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

[DBase](../classes/DBase.md).[swapChildren](../classes/DBase.md#swapchildren)

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

[DBase](../classes/DBase.md).[toCursor](../classes/DBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](../classes/DBase.md).[toDirty](../classes/DBase.md#todirty)

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

#### Inherited from

[DBase](../classes/DBase.md).[toGlobal](../classes/DBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](../classes/DBase.md).[toHasDirty](../classes/DBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1531)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](../classes/DBase.md).[toHierarchyDirty](../classes/DBase.md#tohierarchydirty)

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

#### Inherited from

[DBase](../classes/DBase.md).[toLocal](../classes/DBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[toParentHasDirty](../classes/DBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1540](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1540)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[toParentHierarchyDirty](../classes/DBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1557)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[toParentResized](../classes/DBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1818](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1818)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DBase](../classes/DBase.md).[updateTransform](../classes/DBase.md#updatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8381
