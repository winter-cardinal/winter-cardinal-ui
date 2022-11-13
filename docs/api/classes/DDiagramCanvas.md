[Winter Cardinal UI - v0.227.0](../index.md) / DDiagramCanvas

# Class: DDiagramCanvas<THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramCanvas`](../interfaces/DThemeDiagramCanvas.md) = [`DThemeDiagramCanvas`](../interfaces/DThemeDiagramCanvas.md) |
| `OPTIONS` | extends [`DDiagramCanvasOptions`](../interfaces/DDiagramCanvasOptions.md)<`THEME`\> = [`DDiagramCanvasOptions`](../interfaces/DDiagramCanvasOptions.md)<`THEME`\> |

## Hierarchy

- [`DDiagramCanvasBase`](DDiagramCanvasBase.md)<`THEME`, `OPTIONS`\>

  ↳ **`DDiagramCanvas`**

## Table of contents

### Constructors

- [constructor](DDiagramCanvas.md#constructor)

### Properties

- [\_accessibleActive](DDiagramCanvas.md#_accessibleactive)
- [\_accessibleDiv](DDiagramCanvas.md#_accessiblediv)
- [\_actionables](DDiagramCanvas.md#_actionables)
- [\_auto](DDiagramCanvas.md#_auto)
- [\_background](DDiagramCanvas.md#_background)
- [\_border](DDiagramCanvas.md#_border)
- [\_bounds](DDiagramCanvas.md#_bounds)
- [\_clearType](DDiagramCanvas.md#_cleartype)
- [\_corner](DDiagramCanvas.md#_corner)
- [\_cursor](DDiagramCanvas.md#_cursor)
- [\_data](DDiagramCanvas.md#_data)
- [\_destroyed](DDiagramCanvas.md#_destroyed)
- [\_downed](DDiagramCanvas.md#_downed)
- [\_downeds](DDiagramCanvas.md#_downeds)
- [\_lastDownPoint](DDiagramCanvas.md#_lastdownpoint)
- [\_lastSortedIndex](DDiagramCanvas.md#_lastsortedindex)
- [\_layer](DDiagramCanvas.md#_layer)
- [\_mask](DDiagramCanvas.md#_mask)
- [\_options](DDiagramCanvas.md#_options)
- [\_outline](DDiagramCanvas.md#_outline)
- [\_overed](DDiagramCanvas.md#_overed)
- [\_padding](DDiagramCanvas.md#_padding)
- [\_reflowable](DDiagramCanvas.md#_reflowable)
- [\_shape](DDiagramCanvas.md#_shape)
- [\_shortcuts](DDiagramCanvas.md#_shortcuts)
- [\_snippet](DDiagramCanvas.md#_snippet)
- [\_tempDisplayObjectParent](DDiagramCanvas.md#_tempdisplayobjectparent)
- [\_ticker](DDiagramCanvas.md#_ticker)
- [\_tile](DDiagramCanvas.md#_tile)
- [\_title](DDiagramCanvas.md#_title)
- [\_updateBound](DDiagramCanvas.md#_updatebound)
- [\_zIndex](DDiagramCanvas.md#_zindex)
- [accessible](DDiagramCanvas.md#accessible)
- [accessibleChildren](DDiagramCanvas.md#accessiblechildren)
- [accessibleHint](DDiagramCanvas.md#accessiblehint)
- [accessiblePointerEvents](DDiagramCanvas.md#accessiblepointerevents)
- [accessibleTitle](DDiagramCanvas.md#accessibletitle)
- [accessibleType](DDiagramCanvas.md#accessibletype)
- [alpha](DDiagramCanvas.md#alpha)
- [angle](DDiagramCanvas.md#angle)
- [buttonMode](DDiagramCanvas.md#buttonmode)
- [cacheAsBitmap](DDiagramCanvas.md#cacheasbitmap)
- [children](DDiagramCanvas.md#children)
- [cursor](DDiagramCanvas.md#cursor)
- [filterArea](DDiagramCanvas.md#filterarea)
- [filters](DDiagramCanvas.md#filters)
- [hitArea](DDiagramCanvas.md#hitarea)
- [interactive](DDiagramCanvas.md#interactive)
- [interactiveChildren](DDiagramCanvas.md#interactivechildren)
- [isMask](DDiagramCanvas.md#ismask)
- [isSprite](DDiagramCanvas.md#issprite)
- [localTransform](DDiagramCanvas.md#localtransform)
- [mask](DDiagramCanvas.md#mask)
- [name](DDiagramCanvas.md#name)
- [parent](DDiagramCanvas.md#parent)
- [pivot](DDiagramCanvas.md#pivot)
- [renderable](DDiagramCanvas.md#renderable)
- [rotation](DDiagramCanvas.md#rotation)
- [sortDirty](DDiagramCanvas.md#sortdirty)
- [sortableChildren](DDiagramCanvas.md#sortablechildren)
- [transform](DDiagramCanvas.md#transform)
- [visible](DDiagramCanvas.md#visible)
- [worldAlpha](DDiagramCanvas.md#worldalpha)
- [worldTransform](DDiagramCanvas.md#worldtransform)
- [worldVisible](DDiagramCanvas.md#worldvisible)
- [zIndex](DDiagramCanvas.md#zindex)
- [WORK\_CONTAINS\_POINT](DDiagramCanvas.md#work_contains_point)
- [WORK\_DBLCLICK](DDiagramCanvas.md#work_dblclick)

### Accessors

- [background](DDiagramCanvas.md#background)
- [border](DDiagramCanvas.md#border)
- [corner](DDiagramCanvas.md#corner)
- [data](DDiagramCanvas.md#data)
- [height](DDiagramCanvas.md#height)
- [layer](DDiagramCanvas.md#layer)
- [options](DDiagramCanvas.md#options)
- [outline](DDiagramCanvas.md#outline)
- [padding](DDiagramCanvas.md#padding)
- [position](DDiagramCanvas.md#position)
- [reflowable](DDiagramCanvas.md#reflowable)
- [scale](DDiagramCanvas.md#scale)
- [shadow](DDiagramCanvas.md#shadow)
- [shape](DDiagramCanvas.md#shape)
- [skew](DDiagramCanvas.md#skew)
- [snippet](DDiagramCanvas.md#snippet)
- [state](DDiagramCanvas.md#state)
- [theme](DDiagramCanvas.md#theme)
- [ticker](DDiagramCanvas.md#ticker)
- [tile](DDiagramCanvas.md#tile)
- [title](DDiagramCanvas.md#title)
- [type](DDiagramCanvas.md#type)
- [unsafe](DDiagramCanvas.md#unsafe)
- [weight](DDiagramCanvas.md#weight)
- [width](DDiagramCanvas.md#width)
- [x](DDiagramCanvas.md#x)
- [y](DDiagramCanvas.md#y)

### Methods

- [\_calculateBounds](DDiagramCanvas.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDiagramCanvas.md#_recursivepostupdatetransform)
- [\_render](DDiagramCanvas.md#_render)
- [addChild](DDiagramCanvas.md#addchild)
- [addChildAt](DDiagramCanvas.md#addchildat)
- [addListener](DDiagramCanvas.md#addlistener)
- [applyTitle](DDiagramCanvas.md#applytitle)
- [blur](DDiagramCanvas.md#blur)
- [calcFormatter](DDiagramCanvas.md#calcformatter)
- [calcInitial](DDiagramCanvas.md#calcinitial)
- [calculateBounds](DDiagramCanvas.md#calculatebounds)
- [containsGlobalPoint](DDiagramCanvas.md#containsglobalpoint)
- [containsLocalPoint](DDiagramCanvas.md#containslocalpoint)
- [containsPoint](DDiagramCanvas.md#containspoint)
- [destroy](DDiagramCanvas.md#destroy)
- [displayObjectUpdateTransform](DDiagramCanvas.md#displayobjectupdatetransform)
- [emit](DDiagramCanvas.md#emit)
- [eventNames](DDiagramCanvas.md#eventnames)
- [focus](DDiagramCanvas.md#focus)
- [focusOnClosest](DDiagramCanvas.md#focusonclosest)
- [getBounds](DDiagramCanvas.md#getbounds)
- [getChildAt](DDiagramCanvas.md#getchildat)
- [getChildByName](DDiagramCanvas.md#getchildbyname)
- [getChildIndex](DDiagramCanvas.md#getchildindex)
- [getClearType](DDiagramCanvas.md#getcleartype)
- [getClippingRect](DDiagramCanvas.md#getclippingrect)
- [getGlobalPosition](DDiagramCanvas.md#getglobalposition)
- [getHeight](DDiagramCanvas.md#getheight)
- [getLocalBounds](DDiagramCanvas.md#getlocalbounds)
- [getParentOfSize](DDiagramCanvas.md#getparentofsize)
- [getThemeDefault](DDiagramCanvas.md#getthemedefault)
- [getType](DDiagramCanvas.md#gettype)
- [getWidth](DDiagramCanvas.md#getwidth)
- [getX](DDiagramCanvas.md#getx)
- [getY](DDiagramCanvas.md#gety)
- [hasDirty](DDiagramCanvas.md#hasdirty)
- [hasRefitableHeight](DDiagramCanvas.md#hasrefitableheight)
- [hasRefitableWidth](DDiagramCanvas.md#hasrefitablewidth)
- [hide](DDiagramCanvas.md#hide)
- [hitTest](DDiagramCanvas.md#hittest)
- [hitTestInteractives](DDiagramCanvas.md#hittestinteractives)
- [init](DDiagramCanvas.md#init)
- [initActions](DDiagramCanvas.md#initactions)
- [initData](DDiagramCanvas.md#initdata)
- [initDataExtension](DDiagramCanvas.md#initdataextension)
- [initDataTicker](DDiagramCanvas.md#initdataticker)
- [initDataValue](DDiagramCanvas.md#initdatavalue)
- [initReflowable](DDiagramCanvas.md#initreflowable)
- [initialize](DDiagramCanvas.md#initialize)
- [initialize\_](DDiagramCanvas.md#initialize_)
- [isAmbient](DDiagramCanvas.md#isambient)
- [isDirty](DDiagramCanvas.md#isdirty)
- [isEventTarget](DDiagramCanvas.md#iseventtarget)
- [isHidden](DDiagramCanvas.md#ishidden)
- [isHierarchyDirty](DDiagramCanvas.md#ishierarchydirty)
- [isRefitable](DDiagramCanvas.md#isrefitable)
- [isShown](DDiagramCanvas.md#isshown)
- [listenerCount](DDiagramCanvas.md#listenercount)
- [listeners](DDiagramCanvas.md#listeners)
- [off](DDiagramCanvas.md#off)
- [on](DDiagramCanvas.md#on)
- [onBlur](DDiagramCanvas.md#onblur)
- [onChildBlur](DDiagramCanvas.md#onchildblur)
- [onChildFocus](DDiagramCanvas.md#onchildfocus)
- [onChildrenChange](DDiagramCanvas.md#onchildrenchange)
- [onDblClick](DDiagramCanvas.md#ondblclick)
- [onDestroy](DDiagramCanvas.md#ondestroy)
- [onDown](DDiagramCanvas.md#ondown)
- [onDownThis](DDiagramCanvas.md#ondownthis)
- [onFocus](DDiagramCanvas.md#onfocus)
- [onHierarchyDirty](DDiagramCanvas.md#onhierarchydirty)
- [onKeyDown](DDiagramCanvas.md#onkeydown)
- [onKeyUp](DDiagramCanvas.md#onkeyup)
- [onMove](DDiagramCanvas.md#onmove)
- [onOut](DDiagramCanvas.md#onout)
- [onOver](DDiagramCanvas.md#onover)
- [onParentMove](DDiagramCanvas.md#onparentmove)
- [onParentResize](DDiagramCanvas.md#onparentresize)
- [onRefit](DDiagramCanvas.md#onrefit)
- [onReflow](DDiagramCanvas.md#onreflow)
- [onRender](DDiagramCanvas.md#onrender)
- [onResize](DDiagramCanvas.md#onresize)
- [onScale](DDiagramCanvas.md#onscale)
- [onShapeCancel](DDiagramCanvas.md#onshapecancel)
- [onShapeClick](DDiagramCanvas.md#onshapeclick)
- [onShapeDblClick](DDiagramCanvas.md#onshapedblclick)
- [onShapeDown](DDiagramCanvas.md#onshapedown)
- [onShapeMove](DDiagramCanvas.md#onshapemove)
- [onShapeOut](DDiagramCanvas.md#onshapeout)
- [onShapeOver](DDiagramCanvas.md#onshapeover)
- [onShapeUp](DDiagramCanvas.md#onshapeup)
- [onShortcut](DDiagramCanvas.md#onshortcut)
- [onSkew](DDiagramCanvas.md#onskew)
- [onStateChange](DDiagramCanvas.md#onstatechange)
- [onUp](DDiagramCanvas.md#onup)
- [onUpThis](DDiagramCanvas.md#onupthis)
- [onWheel](DDiagramCanvas.md#onwheel)
- [once](DDiagramCanvas.md#once)
- [reflow](DDiagramCanvas.md#reflow)
- [removeAllListeners](DDiagramCanvas.md#removealllisteners)
- [removeChild](DDiagramCanvas.md#removechild)
- [removeChildAt](DDiagramCanvas.md#removechildat)
- [removeChildren](DDiagramCanvas.md#removechildren)
- [removeListener](DDiagramCanvas.md#removelistener)
- [render](DDiagramCanvas.md#render)
- [renderAdvanced](DDiagramCanvas.md#renderadvanced)
- [resize](DDiagramCanvas.md#resize)
- [setChildIndex](DDiagramCanvas.md#setchildindex)
- [setFocused](DDiagramCanvas.md#setfocused)
- [setHeight](DDiagramCanvas.md#setheight)
- [setParent](DDiagramCanvas.md#setparent)
- [setTransform](DDiagramCanvas.md#settransform)
- [setWidth](DDiagramCanvas.md#setwidth)
- [setX](DDiagramCanvas.md#setx)
- [setY](DDiagramCanvas.md#sety)
- [show](DDiagramCanvas.md#show)
- [sortChildren](DDiagramCanvas.md#sortchildren)
- [swapChildren](DDiagramCanvas.md#swapchildren)
- [toBackgroundBase](DDiagramCanvas.md#tobackgroundbase)
- [toCursor](DDiagramCanvas.md#tocursor)
- [toDirty](DDiagramCanvas.md#todirty)
- [toGlobal](DDiagramCanvas.md#toglobal)
- [toHasDirty](DDiagramCanvas.md#tohasdirty)
- [toHierarchyDirty](DDiagramCanvas.md#tohierarchydirty)
- [toInitial](DDiagramCanvas.md#toinitial)
- [toInitializer](DDiagramCanvas.md#toinitializer)
- [toLocal](DDiagramCanvas.md#tolocal)
- [toParentHasDirty](DDiagramCanvas.md#toparenthasdirty)
- [toParentHierarchyDirty](DDiagramCanvas.md#toparenthierarchydirty)
- [toParentResized](DDiagramCanvas.md#toparentresized)
- [toShapeCursor](DDiagramCanvas.md#toshapecursor)
- [toShapeTitle](DDiagramCanvas.md#toshapetitle)
- [update](DDiagramCanvas.md#update)
- [updateTransform](DDiagramCanvas.md#updatetransform)
- [mixin](DDiagramCanvas.md#mixin)

## Constructors

### constructor

• **new DDiagramCanvas**<`THEME`, `OPTIONS`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramCanvas`](../interfaces/DThemeDiagramCanvas.md) = [`DThemeDiagramCanvas`](../interfaces/DThemeDiagramCanvas.md) |
| `OPTIONS` | extends [`DDiagramCanvasOptions`](../interfaces/DDiagramCanvasOptions.md)<`THEME`, `OPTIONS`\> = [`DDiagramCanvasOptions`](../interfaces/DDiagramCanvasOptions.md)<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `OPTIONS` |

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[constructor](DDiagramCanvasBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L88)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_accessibleActive](DDiagramCanvasBase.md#_accessibleactive)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_accessibleDiv](DDiagramCanvasBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_actionables

• `Protected` **\_actionables**: [`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L80)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_auto](DDiagramCanvasBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_background](DDiagramCanvasBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_border](DDiagramCanvasBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_bounds](DDiagramCanvasBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_clearType](DDiagramCanvasBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_corner](DDiagramCanvasBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_cursor](DDiagramCanvasBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_data

• `Protected` **\_data**: [`DDiagramCanvasData`](../interfaces/DDiagramCanvasData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L77)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_destroyed](DDiagramCanvasBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_downed

• `Protected` `Optional` **\_downed**: ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L83)

___

### \_downeds

• `Protected` **\_downeds**: `Set`<[`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L84)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_lastDownPoint](DDiagramCanvasBase.md#_lastdownpoint)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_lastSortedIndex](DDiagramCanvasBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_layer

• `Protected` **\_layer**: [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_layer](DDiagramCanvasBase.md#_layer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L36)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_mask](DDiagramCanvasBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_options](DDiagramCanvasBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_outline](DDiagramCanvasBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_overed

• `Protected` `Optional` **\_overed**: ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L82)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_padding](DDiagramCanvasBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_reflowable](DDiagramCanvasBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

___

### \_shape

• `Protected` **\_shape**: [`DDiagramCanvasShape`](../interfaces/DDiagramCanvasShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L78)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_shortcuts](DDiagramCanvasBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_snippet](DDiagramCanvasBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_tempDisplayObjectParent](DDiagramCanvasBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_ticker

• `Protected` **\_ticker**: [`DDiagramCanvasTicker`](../interfaces/DDiagramCanvasTicker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L79)

___

### \_tile

• `Protected` **\_tile**: [`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_tile](DDiagramCanvasBase.md#_tile)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L37)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_title](DDiagramCanvasBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_updateBound

• `Protected` **\_updateBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L86)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_zIndex](DDiagramCanvasBase.md#_zindex)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessible](DDiagramCanvasBase.md#accessible)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleChildren](DDiagramCanvasBase.md#accessiblechildren)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleHint](DDiagramCanvasBase.md#accessiblehint)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessiblePointerEvents](DDiagramCanvasBase.md#accessiblepointerevents)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleTitle](DDiagramCanvasBase.md#accessibletitle)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleType](DDiagramCanvasBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[alpha](DDiagramCanvasBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[angle](DDiagramCanvasBase.md#angle)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[buttonMode](DDiagramCanvasBase.md#buttonmode)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[cacheAsBitmap](DDiagramCanvasBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[children](DDiagramCanvasBase.md#children)

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

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[cursor](DDiagramCanvasBase.md#cursor)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[filterArea](DDiagramCanvasBase.md#filterarea)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[filters](DDiagramCanvasBase.md#filters)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hitArea](DDiagramCanvasBase.md#hitarea)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[interactive](DDiagramCanvasBase.md#interactive)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[interactiveChildren](DDiagramCanvasBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isMask](DDiagramCanvasBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isSprite](DDiagramCanvasBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[localTransform](DDiagramCanvasBase.md#localtransform)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[mask](DDiagramCanvasBase.md#mask)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[name](DDiagramCanvasBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[parent](DDiagramCanvasBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[pivot](DDiagramCanvasBase.md#pivot)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[renderable](DDiagramCanvasBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[rotation](DDiagramCanvasBase.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[sortDirty](DDiagramCanvasBase.md#sortdirty)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[sortableChildren](DDiagramCanvasBase.md#sortablechildren)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[transform](DDiagramCanvasBase.md#transform)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[visible](DDiagramCanvasBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[worldAlpha](DDiagramCanvasBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[worldTransform](DDiagramCanvasBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[worldVisible](DDiagramCanvasBase.md#worldvisible)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[zIndex](DDiagramCanvasBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[WORK_CONTAINS_POINT](DDiagramCanvasBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:733](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L733)

___

### WORK\_DBLCLICK

▪ `Static` `Protected` `Optional` **WORK\_DBLCLICK**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L75)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDiagramCanvasBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDiagramCanvasBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDiagramCanvasBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### data

• `get` **data**(): [`DDiagramCanvasData`](../interfaces/DDiagramCanvasData.md)

#### Returns

[`DDiagramCanvasData`](../interfaces/DDiagramCanvasData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L100)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.height

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

DDiagramCanvasBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### layer

• `get` **layer**(): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

DDiagramCanvasBase.layer

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L74)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DDiagramCanvasBase.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDiagramCanvasBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDiagramCanvasBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramCanvasBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDiagramCanvasBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramCanvasBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDiagramCanvasBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1701](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1701)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### shape

• `get` **shape**(): [`DDiagramCanvasShape`](../interfaces/DDiagramCanvasShape.md)

#### Returns

[`DDiagramCanvasShape`](../interfaces/DDiagramCanvasShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L104)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramCanvasBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDiagramCanvasBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDiagramCanvasBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDiagramCanvasBase.theme

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

DDiagramCanvasBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### ticker

• `get` **ticker**(): [`DDiagramCanvasTicker`](../interfaces/DDiagramCanvasTicker.md)

#### Returns

[`DDiagramCanvasTicker`](../interfaces/DDiagramCanvasTicker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L108)

___

### tile

• `get` **tile**(): [`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Returns

[`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Inherited from

DDiagramCanvasBase.tile

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L70)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramCanvasBase.title

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

DDiagramCanvasBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramCanvasBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDiagramCanvasBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.width

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

DDiagramCanvasBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.x

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

DDiagramCanvasBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.y

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

DDiagramCanvasBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_calculateBounds](DDiagramCanvasBase.md#_calculatebounds)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_recursivePostUpdateTransform](DDiagramCanvasBase.md#_recursivepostupdatetransform)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_render](DDiagramCanvasBase.md#_render)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addChild](DDiagramCanvasBase.md#addchild)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addChildAt](DDiagramCanvasBase.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addListener](DDiagramCanvasBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addListener](DDiagramCanvasBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[applyTitle](DDiagramCanvasBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### blur

▸ **blur**(`recursively?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[blur](DDiagramCanvasBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calcFormatter

▸ `Protected` **calcFormatter**(`value`, `format`, `initial`): (`value`: `unknown`) => `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |
| `format` | `string` |
| `initial` | `string` |

#### Returns

`fn`

▸ (`value`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

##### Returns

`unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L405)

___

### calcInitial

▸ `Protected` **calcInitial**(`value`, `initial`): () => `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |
| `initial` | `string` |

#### Returns

`fn`

▸ (): `unknown`

##### Returns

`unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L431)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[calculateBounds](DDiagramCanvasBase.md#calculatebounds)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[containsGlobalPoint](DDiagramCanvasBase.md#containsglobalpoint)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[containsLocalPoint](DDiagramCanvasBase.md#containslocalpoint)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[containsPoint](DDiagramCanvasBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[destroy](DDiagramCanvasBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L82)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[displayObjectUpdateTransform](DDiagramCanvasBase.md#displayobjectupdatetransform)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[emit](DDiagramCanvasBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[eventNames](DDiagramCanvasBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[focus](DDiagramCanvasBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[focusOnClosest](DDiagramCanvasBase.md#focusonclosest)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getBounds](DDiagramCanvasBase.md#getbounds)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getChildAt](DDiagramCanvasBase.md#getchildat)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getChildByName](DDiagramCanvasBase.md#getchildbyname)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getChildIndex](DDiagramCanvasBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getClearType](DDiagramCanvasBase.md#getcleartype)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getClippingRect](DDiagramCanvasBase.md#getclippingrect)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getGlobalPosition](DDiagramCanvasBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getHeight](DDiagramCanvasBase.md#getheight)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getLocalBounds](DDiagramCanvasBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getParentOfSize](DDiagramCanvasBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getThemeDefault](DDiagramCanvasBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getType](DDiagramCanvasBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L768)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getWidth](DDiagramCanvasBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getX](DDiagramCanvasBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getY](DDiagramCanvasBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hasDirty](DDiagramCanvasBase.md#hasdirty)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hasRefitableHeight](DDiagramCanvasBase.md#hasrefitableheight)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hasRefitableWidth](DDiagramCanvasBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hide

▸ **hide**(): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hide](DDiagramCanvasBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hitTest](DDiagramCanvasBase.md#hittest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L94)

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L516)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[init](DDiagramCanvasBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1043](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1043)

___

### initActions

▸ `Protected` **initActions**(`shape`, `shapeRuntime`, `valueToRuntime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `shapeRuntime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `valueToRuntime` | `Map`<[`EShapeActionValue`](../interfaces/EShapeActionValue.md), [`EShapeActionRuntime`](EShapeActionRuntime.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L381)

___

### initData

▸ `Protected` **initData**(`shape`, `dataShape`, `containerShape`, `mapper`, `formatters`, `initializers`, `canvasTicker`, `canvasData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `dataShape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `containerShape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `mapper` | `undefined` \| ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper) |
| `formatters` | `Map`<`number`, `Map`<`string`, (`value`: `unknown`) => `unknown`\>\> |
| `initializers` | `Map`<`number`, `Map`<`string`, () => `unknown`\>\> |
| `canvasTicker` | [`DDiagramCanvasTicker`](../interfaces/DDiagramCanvasTicker.md) |
| `canvasData` | [`DDiagramCanvasData`](../interfaces/DDiagramCanvasData.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L236)

___

### initDataExtension

▸ `Protected` **initDataExtension**(`value`, `canvasData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |
| `canvasData` | [`DDiagramCanvasData`](../interfaces/DDiagramCanvasData.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L373)

___

### initDataTicker

▸ `Protected` **initDataTicker**(`value`, `initializers`, `canvasTicker`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |
| `initializers` | `Map`<`number`, `Map`<`string`, () => `unknown`\>\> |
| `canvasTicker` | [`DDiagramCanvasTicker`](../interfaces/DDiagramCanvasTicker.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L350)

___

### initDataValue

▸ `Protected` **initDataValue**(`value`, `shape`, `dataShape`, `containerShape`, `mapper`, `formatters`, `initializers`, `canvasData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `dataShape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `containerShape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `mapper` | `undefined` \| ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper) |
| `formatters` | `Map`<`number`, `Map`<`string`, (`value`: `unknown`) => `unknown`\>\> |
| `initializers` | `Map`<`number`, `Map`<`string`, () => `unknown`\>\> |
| `canvasData` | [`DDiagramCanvasData`](../interfaces/DDiagramCanvasData.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L282)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[initReflowable](DDiagramCanvasBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### initialize

▸ **initialize**(`shapes`, `mapper?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `mapper?` | ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper) |

#### Returns

`void`

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[initialize](DDiagramCanvasBase.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L112)

___

### initialize\_

▸ `Protected` **initialize_**(`shapes`, `dataShape`, `containerShape`, `mapper`, `formatters`, `initializers`, `actionValueToRuntime`, `canvasTicker`, `canvasShape`, `canvasData`, `actionables`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `dataShape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `containerShape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `mapper` | `undefined` \| ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper) |
| `formatters` | `Map`<`number`, `Map`<`string`, (`value`: `unknown`) => `unknown`\>\> |
| `initializers` | `Map`<`number`, `Map`<`string`, () => `unknown`\>\> |
| `actionValueToRuntime` | `Map`<[`EShapeActionValue`](../interfaces/EShapeActionValue.md), [`EShapeActionRuntime`](EShapeActionRuntime.md)\> |
| `canvasTicker` | [`DDiagramCanvasTicker`](../interfaces/DDiagramCanvasTicker.md) |
| `canvasShape` | [`DDiagramCanvasShape`](../interfaces/DDiagramCanvasShape.md) |
| `canvasData` | [`DDiagramCanvasData`](../interfaces/DDiagramCanvasData.md) |
| `actionables` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L151)

___

### isAmbient

▸ `Protected` **isAmbient**(`theme`, `options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isAmbient](DDiagramCanvasBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L62)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isDirty](DDiagramCanvasBase.md#isdirty)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isEventTarget](DDiagramCanvasBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isHidden](DDiagramCanvasBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isHierarchyDirty](DDiagramCanvasBase.md#ishierarchydirty)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isRefitable](DDiagramCanvasBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1681)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isShown](DDiagramCanvasBase.md#isshown)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[listenerCount](DDiagramCanvasBase.md#listenercount)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[listeners](DDiagramCanvasBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[off](DDiagramCanvasBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[on](DDiagramCanvasBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[on](DDiagramCanvasBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onBlur](DDiagramCanvasBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### onChildBlur

▸ `Protected` **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildBlur](DDiagramCanvasBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1570](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1570)

___

### onChildFocus

▸ `Protected` **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildFocus](DDiagramCanvasBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildrenChange](DDiagramCanvasBase.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1034)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDblClick](DDiagramCanvasBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1900](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1900)

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

#### Returns

`void`

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDestroy](DDiagramCanvasBase.md#ondestroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L502)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDown](DDiagramCanvasBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1827](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1827)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDownThis](DDiagramCanvasBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onFocus](DDiagramCanvasBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onHierarchyDirty](DDiagramCanvasBase.md#onhierarchydirty)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onKeyDown](DDiagramCanvasBase.md#onkeydown)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onKeyUp](DDiagramCanvasBase.md#onkeyup)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onMove](DDiagramCanvasBase.md#onmove)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onOut](DDiagramCanvasBase.md#onout)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onOver](DDiagramCanvasBase.md#onover)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onParentMove](DDiagramCanvasBase.md#onparentmove)

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
| `parentPadding` | [`DPadding`](../interfaces/DPadding.md) | - |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onParentResize](DDiagramCanvasBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1750)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onRefit](DDiagramCanvasBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onReflow](DDiagramCanvasBase.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1697)

___

### onRender

▸ **onRender**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L746)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onResize](DDiagramCanvasBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1117)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onScale](DDiagramCanvasBase.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

___

### onShapeCancel

▸ **onShapeCancel**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L653)

___

### onShapeClick

▸ **onShapeClick**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:677](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L677)

___

### onShapeDblClick

▸ **onShapeDblClick**(`e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L698)

___

### onShapeDown

▸ **onShapeDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L607)

___

### onShapeMove

▸ **onShapeMove**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L530)

___

### onShapeOut

▸ `Protected` **onShapeOut**(`e`, `target?`, `except?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `target?` | ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `except?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L579)

___

### onShapeOver

▸ `Protected` **onShapeOver**(`e`, `target?`, `except?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `target?` | ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `except?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L593)

___

### onShapeUp

▸ **onShapeUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:630](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L630)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onShortcut](DDiagramCanvasBase.md#onshortcut)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onSkew](DDiagramCanvasBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

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

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onStateChange](DDiagramCanvasBase.md#onstatechange)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onUp](DDiagramCanvasBase.md#onup)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onUpThis](DDiagramCanvasBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1852)

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

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onWheel](DDiagramCanvasBase.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[once](DDiagramCanvasBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[once](DDiagramCanvasBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[reflow](DDiagramCanvasBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeAllListeners](DDiagramCanvasBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeAllListeners](DDiagramCanvasBase.md#removealllisteners)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeChild](DDiagramCanvasBase.md#removechild)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeChildAt](DDiagramCanvasBase.md#removechildat)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeChildren](DDiagramCanvasBase.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeListener](DDiagramCanvasBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeListener](DDiagramCanvasBase.md#removelistener)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[render](DDiagramCanvasBase.md#render)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[renderAdvanced](DDiagramCanvasBase.md#renderadvanced)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[resize](DDiagramCanvasBase.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1063)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setChildIndex](DDiagramCanvasBase.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setFocused](DDiagramCanvasBase.md#setfocused)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setHeight](DDiagramCanvasBase.md#setheight)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setParent](DDiagramCanvasBase.md#setparent)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setTransform](DDiagramCanvasBase.md#settransform)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setWidth](DDiagramCanvasBase.md#setwidth)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setX](DDiagramCanvasBase.md#setx)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setY](DDiagramCanvasBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDiagramCanvas`](DDiagramCanvas.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[show](DDiagramCanvasBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[sortChildren](DDiagramCanvasBase.md#sortchildren)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[swapChildren](DDiagramCanvasBase.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toBackgroundBase

▸ `Protected` **toBackgroundBase**(`theme`, `options?`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| `number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toBackgroundBase](DDiagramCanvasBase.md#tobackgroundbase)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L66)

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

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toCursor](DDiagramCanvasBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toDirty](DDiagramCanvasBase.md#todirty)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toGlobal](DDiagramCanvasBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toHasDirty](DDiagramCanvasBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toHierarchyDirty](DDiagramCanvasBase.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1457)

___

### toInitial

▸ `Protected` **toInitial**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L450)

___

### toInitializer

▸ `Protected` **toInitializer**(`value`): () => `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |

#### Returns

`fn`

▸ (): `unknown`

##### Returns

`unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L476)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toLocal](DDiagramCanvasBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toParentHasDirty](DDiagramCanvasBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toParentHierarchyDirty](DDiagramCanvasBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toParentResized](DDiagramCanvasBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### toShapeCursor

▸ `Protected` **toShapeCursor**(`target`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:562](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L562)

___

### toShapeTitle

▸ `Protected` **toShapeTitle**(`target`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L572)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas.ts:724](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas.ts#L724)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[updateTransform](DDiagramCanvasBase.md#updatetransform)

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

[DDiagramCanvasBase](DDiagramCanvasBase.md).[mixin](DDiagramCanvasBase.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
