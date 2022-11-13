[Winter Cardinal UI - v0.227.0](../index.md) / DScrollBarHorizontal

# Class: DScrollBarHorizontal<THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeScrollBar`](../interfaces/DThemeScrollBar.md) = [`DThemeScrollBar`](../interfaces/DThemeScrollBar.md) |
| `OPTIONS` | extends [`DScrollBarOptions`](../interfaces/DScrollBarOptions.md)<`THEME`\> = [`DScrollBarOptions`](../interfaces/DScrollBarOptions.md)<`THEME`\> |

## Hierarchy

- [`DScrollBar`](DScrollBar.md)<`THEME`, `OPTIONS`\>

  ↳ **`DScrollBarHorizontal`**

## Table of contents

### Constructors

- [constructor](DScrollBarHorizontal.md#constructor)

### Properties

- [\_accessibleActive](DScrollBarHorizontal.md#_accessibleactive)
- [\_accessibleDiv](DScrollBarHorizontal.md#_accessiblediv)
- [\_auto](DScrollBarHorizontal.md#_auto)
- [\_background](DScrollBarHorizontal.md#_background)
- [\_border](DScrollBarHorizontal.md#_border)
- [\_bounds](DScrollBarHorizontal.md#_bounds)
- [\_clearType](DScrollBarHorizontal.md#_cleartype)
- [\_corner](DScrollBarHorizontal.md#_corner)
- [\_cursor](DScrollBarHorizontal.md#_cursor)
- [\_destroyed](DScrollBarHorizontal.md#_destroyed)
- [\_end](DScrollBarHorizontal.md#_end)
- [\_fadeOutDelay](DScrollBarHorizontal.md#_fadeoutdelay)
- [\_fadeOutTimeoutId](DScrollBarHorizontal.md#_fadeouttimeoutid)
- [\_isSilent](DScrollBarHorizontal.md#_issilent)
- [\_isTouched](DScrollBarHorizontal.md#_istouched)
- [\_lastDownPoint](DScrollBarHorizontal.md#_lastdownpoint)
- [\_lastSortedIndex](DScrollBarHorizontal.md#_lastsortedindex)
- [\_mask](DScrollBarHorizontal.md#_mask)
- [\_onFadeOutTimeoutBound](DScrollBarHorizontal.md#_onfadeouttimeoutbound)
- [\_options](DScrollBarHorizontal.md#_options)
- [\_outline](DScrollBarHorizontal.md#_outline)
- [\_padding](DScrollBarHorizontal.md#_padding)
- [\_reflowable](DScrollBarHorizontal.md#_reflowable)
- [\_shortcuts](DScrollBarHorizontal.md#_shortcuts)
- [\_snippet](DScrollBarHorizontal.md#_snippet)
- [\_start](DScrollBarHorizontal.md#_start)
- [\_tempDisplayObjectParent](DScrollBarHorizontal.md#_tempdisplayobjectparent)
- [\_thumb](DScrollBarHorizontal.md#_thumb)
- [\_title](DScrollBarHorizontal.md#_title)
- [\_touchedAt](DScrollBarHorizontal.md#_touchedat)
- [\_zIndex](DScrollBarHorizontal.md#_zindex)
- [accessible](DScrollBarHorizontal.md#accessible)
- [accessibleChildren](DScrollBarHorizontal.md#accessiblechildren)
- [accessibleHint](DScrollBarHorizontal.md#accessiblehint)
- [accessiblePointerEvents](DScrollBarHorizontal.md#accessiblepointerevents)
- [accessibleTitle](DScrollBarHorizontal.md#accessibletitle)
- [accessibleType](DScrollBarHorizontal.md#accessibletype)
- [alpha](DScrollBarHorizontal.md#alpha)
- [angle](DScrollBarHorizontal.md#angle)
- [buttonMode](DScrollBarHorizontal.md#buttonmode)
- [cacheAsBitmap](DScrollBarHorizontal.md#cacheasbitmap)
- [children](DScrollBarHorizontal.md#children)
- [cursor](DScrollBarHorizontal.md#cursor)
- [filterArea](DScrollBarHorizontal.md#filterarea)
- [filters](DScrollBarHorizontal.md#filters)
- [hitArea](DScrollBarHorizontal.md#hitarea)
- [interactive](DScrollBarHorizontal.md#interactive)
- [interactiveChildren](DScrollBarHorizontal.md#interactivechildren)
- [isMask](DScrollBarHorizontal.md#ismask)
- [isSprite](DScrollBarHorizontal.md#issprite)
- [localTransform](DScrollBarHorizontal.md#localtransform)
- [mask](DScrollBarHorizontal.md#mask)
- [name](DScrollBarHorizontal.md#name)
- [parent](DScrollBarHorizontal.md#parent)
- [pivot](DScrollBarHorizontal.md#pivot)
- [renderable](DScrollBarHorizontal.md#renderable)
- [rotation](DScrollBarHorizontal.md#rotation)
- [sortDirty](DScrollBarHorizontal.md#sortdirty)
- [sortableChildren](DScrollBarHorizontal.md#sortablechildren)
- [transform](DScrollBarHorizontal.md#transform)
- [visible](DScrollBarHorizontal.md#visible)
- [worldAlpha](DScrollBarHorizontal.md#worldalpha)
- [worldTransform](DScrollBarHorizontal.md#worldtransform)
- [worldVisible](DScrollBarHorizontal.md#worldvisible)
- [zIndex](DScrollBarHorizontal.md#zindex)
- [WORK\_CONTAINS\_POINT](DScrollBarHorizontal.md#work_contains_point)

### Accessors

- [background](DScrollBarHorizontal.md#background)
- [border](DScrollBarHorizontal.md#border)
- [corner](DScrollBarHorizontal.md#corner)
- [end](DScrollBarHorizontal.md#end)
- [height](DScrollBarHorizontal.md#height)
- [options](DScrollBarHorizontal.md#options)
- [outline](DScrollBarHorizontal.md#outline)
- [padding](DScrollBarHorizontal.md#padding)
- [position](DScrollBarHorizontal.md#position)
- [reflowable](DScrollBarHorizontal.md#reflowable)
- [scale](DScrollBarHorizontal.md#scale)
- [shadow](DScrollBarHorizontal.md#shadow)
- [skew](DScrollBarHorizontal.md#skew)
- [snippet](DScrollBarHorizontal.md#snippet)
- [start](DScrollBarHorizontal.md#start)
- [state](DScrollBarHorizontal.md#state)
- [theme](DScrollBarHorizontal.md#theme)
- [thumb](DScrollBarHorizontal.md#thumb)
- [title](DScrollBarHorizontal.md#title)
- [type](DScrollBarHorizontal.md#type)
- [unsafe](DScrollBarHorizontal.md#unsafe)
- [weight](DScrollBarHorizontal.md#weight)
- [width](DScrollBarHorizontal.md#width)
- [x](DScrollBarHorizontal.md#x)
- [y](DScrollBarHorizontal.md#y)

### Methods

- [\_calculateBounds](DScrollBarHorizontal.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DScrollBarHorizontal.md#_recursivepostupdatetransform)
- [\_render](DScrollBarHorizontal.md#_render)
- [addChild](DScrollBarHorizontal.md#addchild)
- [addChildAt](DScrollBarHorizontal.md#addchildat)
- [addListener](DScrollBarHorizontal.md#addlistener)
- [applyTitle](DScrollBarHorizontal.md#applytitle)
- [blur](DScrollBarHorizontal.md#blur)
- [calculateBounds](DScrollBarHorizontal.md#calculatebounds)
- [containsGlobalPoint](DScrollBarHorizontal.md#containsglobalpoint)
- [containsLocalPoint](DScrollBarHorizontal.md#containslocalpoint)
- [containsPoint](DScrollBarHorizontal.md#containspoint)
- [destroy](DScrollBarHorizontal.md#destroy)
- [displayObjectUpdateTransform](DScrollBarHorizontal.md#displayobjectupdatetransform)
- [emit](DScrollBarHorizontal.md#emit)
- [eventNames](DScrollBarHorizontal.md#eventnames)
- [focus](DScrollBarHorizontal.md#focus)
- [focusOnClosest](DScrollBarHorizontal.md#focusonclosest)
- [getBounds](DScrollBarHorizontal.md#getbounds)
- [getChildAt](DScrollBarHorizontal.md#getchildat)
- [getChildByName](DScrollBarHorizontal.md#getchildbyname)
- [getChildIndex](DScrollBarHorizontal.md#getchildindex)
- [getClearType](DScrollBarHorizontal.md#getcleartype)
- [getClippingRect](DScrollBarHorizontal.md#getclippingrect)
- [getGlobalPosition](DScrollBarHorizontal.md#getglobalposition)
- [getHeight](DScrollBarHorizontal.md#getheight)
- [getLocalBounds](DScrollBarHorizontal.md#getlocalbounds)
- [getParentOfSize](DScrollBarHorizontal.md#getparentofsize)
- [getThemeDefault](DScrollBarHorizontal.md#getthemedefault)
- [getType](DScrollBarHorizontal.md#gettype)
- [getWidth](DScrollBarHorizontal.md#getwidth)
- [getX](DScrollBarHorizontal.md#getx)
- [getY](DScrollBarHorizontal.md#gety)
- [hasDirty](DScrollBarHorizontal.md#hasdirty)
- [hasRefitableHeight](DScrollBarHorizontal.md#hasrefitableheight)
- [hasRefitableWidth](DScrollBarHorizontal.md#hasrefitablewidth)
- [hide](DScrollBarHorizontal.md#hide)
- [init](DScrollBarHorizontal.md#init)
- [initReflowable](DScrollBarHorizontal.md#initreflowable)
- [isDirty](DScrollBarHorizontal.md#isdirty)
- [isEventTarget](DScrollBarHorizontal.md#iseventtarget)
- [isHidden](DScrollBarHorizontal.md#ishidden)
- [isHierarchyDirty](DScrollBarHorizontal.md#ishierarchydirty)
- [isRefitable](DScrollBarHorizontal.md#isrefitable)
- [isRegionVisible](DScrollBarHorizontal.md#isregionvisible)
- [isShown](DScrollBarHorizontal.md#isshown)
- [listenerCount](DScrollBarHorizontal.md#listenercount)
- [listeners](DScrollBarHorizontal.md#listeners)
- [newThumb](DScrollBarHorizontal.md#newthumb)
- [off](DScrollBarHorizontal.md#off)
- [on](DScrollBarHorizontal.md#on)
- [onBlur](DScrollBarHorizontal.md#onblur)
- [onChange](DScrollBarHorizontal.md#onchange)
- [onChildBlur](DScrollBarHorizontal.md#onchildblur)
- [onChildFocus](DScrollBarHorizontal.md#onchildfocus)
- [onChildrenChange](DScrollBarHorizontal.md#onchildrenchange)
- [onDblClick](DScrollBarHorizontal.md#ondblclick)
- [onDown](DScrollBarHorizontal.md#ondown)
- [onDownThis](DScrollBarHorizontal.md#ondownthis)
- [onFadeOutTimeout](DScrollBarHorizontal.md#onfadeouttimeout)
- [onFocus](DScrollBarHorizontal.md#onfocus)
- [onHierarchyDirty](DScrollBarHorizontal.md#onhierarchydirty)
- [onKeyDown](DScrollBarHorizontal.md#onkeydown)
- [onKeyUp](DScrollBarHorizontal.md#onkeyup)
- [onMove](DScrollBarHorizontal.md#onmove)
- [onOut](DScrollBarHorizontal.md#onout)
- [onOver](DScrollBarHorizontal.md#onover)
- [onParentMove](DScrollBarHorizontal.md#onparentmove)
- [onParentResize](DScrollBarHorizontal.md#onparentresize)
- [onRefit](DScrollBarHorizontal.md#onrefit)
- [onReflow](DScrollBarHorizontal.md#onreflow)
- [onResize](DScrollBarHorizontal.md#onresize)
- [onScale](DScrollBarHorizontal.md#onscale)
- [onShortcut](DScrollBarHorizontal.md#onshortcut)
- [onSkew](DScrollBarHorizontal.md#onskew)
- [onStateChange](DScrollBarHorizontal.md#onstatechange)
- [onThumbRegionMove](DScrollBarHorizontal.md#onthumbregionmove)
- [onThumbStateChange](DScrollBarHorizontal.md#onthumbstatechange)
- [onUp](DScrollBarHorizontal.md#onup)
- [onUpThis](DScrollBarHorizontal.md#onupthis)
- [onWheel](DScrollBarHorizontal.md#onwheel)
- [once](DScrollBarHorizontal.md#once)
- [reflow](DScrollBarHorizontal.md#reflow)
- [removeAllListeners](DScrollBarHorizontal.md#removealllisteners)
- [removeChild](DScrollBarHorizontal.md#removechild)
- [removeChildAt](DScrollBarHorizontal.md#removechildat)
- [removeChildren](DScrollBarHorizontal.md#removechildren)
- [removeListener](DScrollBarHorizontal.md#removelistener)
- [render](DScrollBarHorizontal.md#render)
- [renderAdvanced](DScrollBarHorizontal.md#renderadvanced)
- [resize](DScrollBarHorizontal.md#resize)
- [set](DScrollBarHorizontal.md#set)
- [setChildIndex](DScrollBarHorizontal.md#setchildindex)
- [setFocused](DScrollBarHorizontal.md#setfocused)
- [setHeight](DScrollBarHorizontal.md#setheight)
- [setParent](DScrollBarHorizontal.md#setparent)
- [setTransform](DScrollBarHorizontal.md#settransform)
- [setWidth](DScrollBarHorizontal.md#setwidth)
- [setX](DScrollBarHorizontal.md#setx)
- [setY](DScrollBarHorizontal.md#sety)
- [show](DScrollBarHorizontal.md#show)
- [sortChildren](DScrollBarHorizontal.md#sortchildren)
- [swapChildren](DScrollBarHorizontal.md#swapchildren)
- [toCursor](DScrollBarHorizontal.md#tocursor)
- [toDirty](DScrollBarHorizontal.md#todirty)
- [toGlobal](DScrollBarHorizontal.md#toglobal)
- [toHasDirty](DScrollBarHorizontal.md#tohasdirty)
- [toHierarchyDirty](DScrollBarHorizontal.md#tohierarchydirty)
- [toLocal](DScrollBarHorizontal.md#tolocal)
- [toParentHasDirty](DScrollBarHorizontal.md#toparenthasdirty)
- [toParentHierarchyDirty](DScrollBarHorizontal.md#toparenthierarchydirty)
- [toParentResized](DScrollBarHorizontal.md#toparentresized)
- [updateThumb](DScrollBarHorizontal.md#updatethumb)
- [updateTransform](DScrollBarHorizontal.md#updatetransform)
- [mixin](DScrollBarHorizontal.md#mixin)

## Constructors

### constructor

• **new DScrollBarHorizontal**<`THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeScrollBar`](../interfaces/DThemeScrollBar.md) = [`DThemeScrollBar`](../interfaces/DThemeScrollBar.md) |
| `OPTIONS` | extends [`DScrollBarOptions`](../interfaces/DScrollBarOptions.md)<`THEME`, `OPTIONS`\> = [`DScrollBarOptions`](../interfaces/DScrollBarOptions.md)<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Overrides

[DScrollBar](DScrollBar.md).[constructor](DScrollBar.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts#L16)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DScrollBar](DScrollBar.md).[_accessibleActive](DScrollBar.md#_accessibleactive)

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

[DScrollBar](DScrollBar.md).[_accessibleDiv](DScrollBar.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DScrollBar](DScrollBar.md).[_auto](DScrollBar.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DScrollBar](DScrollBar.md).[_background](DScrollBar.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DScrollBar](DScrollBar.md).[_border](DScrollBar.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DScrollBar](DScrollBar.md).[_bounds](DScrollBar.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DScrollBar](DScrollBar.md).[_clearType](DScrollBar.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DScrollBar](DScrollBar.md).[_corner](DScrollBar.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[_cursor](DScrollBar.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DScrollBar](DScrollBar.md).[_destroyed](DScrollBar.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_end

• `Protected` **\_end**: `number`

#### Inherited from

[DScrollBar](DScrollBar.md).[_end](DScrollBar.md#_end)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L30)

___

### \_fadeOutDelay

• `Protected` **\_fadeOutDelay**: `number`

#### Inherited from

[DScrollBar](DScrollBar.md).[_fadeOutDelay](DScrollBar.md#_fadeoutdelay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L35)

___

### \_fadeOutTimeoutId

• `Protected` **\_fadeOutTimeoutId**: ``null`` \| `number`

#### Inherited from

[DScrollBar](DScrollBar.md).[_fadeOutTimeoutId](DScrollBar.md#_fadeouttimeoutid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L34)

___

### \_isSilent

• `Protected` **\_isSilent**: `boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[_isSilent](DScrollBar.md#_issilent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L37)

___

### \_isTouched

• `Protected` **\_isTouched**: `boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[_isTouched](DScrollBar.md#_istouched)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L33)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DScrollBar](DScrollBar.md).[_lastDownPoint](DScrollBar.md#_lastdownpoint)

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

[DScrollBar](DScrollBar.md).[_lastSortedIndex](DScrollBar.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DScrollBar](DScrollBar.md).[_mask](DScrollBar.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_onFadeOutTimeoutBound

• `Protected` **\_onFadeOutTimeoutBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[_onFadeOutTimeoutBound](DScrollBar.md#_onfadeouttimeoutbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L36)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DScrollBar](DScrollBar.md).[_options](DScrollBar.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DScrollBar](DScrollBar.md).[_outline](DScrollBar.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DScrollBar](DScrollBar.md).[_padding](DScrollBar.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DScrollBar](DScrollBar.md).[_reflowable](DScrollBar.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DScrollBar](DScrollBar.md).[_shortcuts](DScrollBar.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DScrollBar](DScrollBar.md).[_snippet](DScrollBar.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_start

• `Protected` **\_start**: `number`

#### Inherited from

[DScrollBar](DScrollBar.md).[_start](DScrollBar.md#_start)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L29)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DScrollBar](DScrollBar.md).[_tempDisplayObjectParent](DScrollBar.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_thumb

• `Protected` **\_thumb**: [`DScrollBarThumb`](DScrollBarThumb.md)

#### Inherited from

[DScrollBar](DScrollBar.md).[_thumb](DScrollBar.md#_thumb)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L31)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DScrollBar](DScrollBar.md).[_title](DScrollBar.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_touchedAt

• `Protected` **\_touchedAt**: `number`

#### Inherited from

[DScrollBar](DScrollBar.md).[_touchedAt](DScrollBar.md#_touchedat)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L32)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DScrollBar](DScrollBar.md).[_zIndex](DScrollBar.md#_zindex)

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

[DScrollBar](DScrollBar.md).[accessible](DScrollBar.md#accessible)

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

[DScrollBar](DScrollBar.md).[accessibleChildren](DScrollBar.md#accessiblechildren)

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

[DScrollBar](DScrollBar.md).[accessibleHint](DScrollBar.md#accessiblehint)

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

[DScrollBar](DScrollBar.md).[accessiblePointerEvents](DScrollBar.md#accessiblepointerevents)

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

[DScrollBar](DScrollBar.md).[accessibleTitle](DScrollBar.md#accessibletitle)

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

[DScrollBar](DScrollBar.md).[accessibleType](DScrollBar.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DScrollBar](DScrollBar.md).[alpha](DScrollBar.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DScrollBar](DScrollBar.md).[angle](DScrollBar.md#angle)

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

[DScrollBar](DScrollBar.md).[buttonMode](DScrollBar.md#buttonmode)

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

[DScrollBar](DScrollBar.md).[cacheAsBitmap](DScrollBar.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DScrollBar](DScrollBar.md).[children](DScrollBar.md#children)

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

[DScrollBar](DScrollBar.md).[cursor](DScrollBar.md#cursor)

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

[DScrollBar](DScrollBar.md).[filterArea](DScrollBar.md#filterarea)

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

[DScrollBar](DScrollBar.md).[filters](DScrollBar.md#filters)

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

[DScrollBar](DScrollBar.md).[hitArea](DScrollBar.md#hitarea)

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

[DScrollBar](DScrollBar.md).[interactive](DScrollBar.md#interactive)

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

[DScrollBar](DScrollBar.md).[interactiveChildren](DScrollBar.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DScrollBar](DScrollBar.md).[isMask](DScrollBar.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DScrollBar](DScrollBar.md).[isSprite](DScrollBar.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DScrollBar](DScrollBar.md).[localTransform](DScrollBar.md#localtransform)

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

[DScrollBar](DScrollBar.md).[mask](DScrollBar.md#mask)

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

[DScrollBar](DScrollBar.md).[name](DScrollBar.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DScrollBar](DScrollBar.md).[parent](DScrollBar.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DScrollBar](DScrollBar.md).[pivot](DScrollBar.md#pivot)

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

[DScrollBar](DScrollBar.md).[renderable](DScrollBar.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DScrollBar](DScrollBar.md).[rotation](DScrollBar.md#rotation)

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

[DScrollBar](DScrollBar.md).[sortDirty](DScrollBar.md#sortdirty)

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

[DScrollBar](DScrollBar.md).[sortableChildren](DScrollBar.md#sortablechildren)

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

[DScrollBar](DScrollBar.md).[transform](DScrollBar.md#transform)

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

[DScrollBar](DScrollBar.md).[visible](DScrollBar.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DScrollBar](DScrollBar.md).[worldAlpha](DScrollBar.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DScrollBar](DScrollBar.md).[worldTransform](DScrollBar.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DScrollBar](DScrollBar.md).[worldVisible](DScrollBar.md#worldvisible)

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

[DScrollBar](DScrollBar.md).[zIndex](DScrollBar.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DScrollBar](DScrollBar.md).[WORK_CONTAINS_POINT](DScrollBar.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:733](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L733)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DScrollBar.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DScrollBar.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DScrollBar.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### end

• `get` **end**(): `number`

#### Returns

`number`

#### Inherited from

DScrollBar.end

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L69)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DScrollBar.height

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

DScrollBar.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DScrollBar.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DScrollBar.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DScrollBar.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DScrollBar.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DScrollBar.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DScrollBar.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DScrollBar.shadow

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

DScrollBar.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DScrollBar.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DScrollBar.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### start

• `get` **start**(): `number`

#### Returns

`number`

#### Inherited from

DScrollBar.start

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L65)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DScrollBar.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DScrollBar.theme

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

DScrollBar.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### thumb

• `get` **thumb**(): [`DScrollBarThumb`](DScrollBarThumb.md)

#### Returns

[`DScrollBarThumb`](DScrollBarThumb.md)

#### Inherited from

DScrollBar.thumb

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L61)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DScrollBar.title

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

DScrollBar.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DScrollBar.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DScrollBar.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DScrollBar.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DScrollBar.width

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

DScrollBar.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DScrollBar.x

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

DScrollBar.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DScrollBar.y

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

DScrollBar.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[_calculateBounds](DScrollBar.md#_calculatebounds)

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

[DScrollBar](DScrollBar.md).[_recursivePostUpdateTransform](DScrollBar.md#_recursivepostupdatetransform)

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

[DScrollBar](DScrollBar.md).[_render](DScrollBar.md#_render)

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

[DScrollBar](DScrollBar.md).[addChild](DScrollBar.md#addchild)

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

[DScrollBar](DScrollBar.md).[addChildAt](DScrollBar.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[addListener](DScrollBar.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[addListener](DScrollBar.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[applyTitle](DScrollBar.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### blur

▸ **blur**(`recursively?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[blur](DScrollBar.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[calculateBounds](DScrollBar.md#calculatebounds)

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

[DScrollBar](DScrollBar.md).[containsGlobalPoint](DScrollBar.md#containsglobalpoint)

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

[DScrollBar](DScrollBar.md).[containsLocalPoint](DScrollBar.md#containslocalpoint)

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

[DScrollBar](DScrollBar.md).[containsPoint](DScrollBar.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[destroy](DScrollBar.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1977](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1977)

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

[DScrollBar](DScrollBar.md).[displayObjectUpdateTransform](DScrollBar.md#displayobjectupdatetransform)

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

[DScrollBar](DScrollBar.md).[emit](DScrollBar.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DScrollBar](DScrollBar.md).[eventNames](DScrollBar.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[focus](DScrollBar.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[focusOnClosest](DScrollBar.md#focusonclosest)

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

[DScrollBar](DScrollBar.md).[getBounds](DScrollBar.md#getbounds)

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

[DScrollBar](DScrollBar.md).[getChildAt](DScrollBar.md#getchildat)

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

[DScrollBar](DScrollBar.md).[getChildByName](DScrollBar.md#getchildbyname)

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

[DScrollBar](DScrollBar.md).[getChildIndex](DScrollBar.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DScrollBar](DScrollBar.md).[getClearType](DScrollBar.md#getcleartype)

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

[DScrollBar](DScrollBar.md).[getClippingRect](DScrollBar.md#getclippingrect)

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

[DScrollBar](DScrollBar.md).[getGlobalPosition](DScrollBar.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DScrollBar](DScrollBar.md).[getHeight](DScrollBar.md#getheight)

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

[DScrollBar](DScrollBar.md).[getLocalBounds](DScrollBar.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DScrollBar](DScrollBar.md).[getParentOfSize](DScrollBar.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DScrollBar](DScrollBar.md).[getThemeDefault](DScrollBar.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Inherited from

[DScrollBar](DScrollBar.md).[getType](DScrollBar.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L191)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DScrollBar](DScrollBar.md).[getWidth](DScrollBar.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DScrollBar](DScrollBar.md).[getX](DScrollBar.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DScrollBar](DScrollBar.md).[getY](DScrollBar.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[hasDirty](DScrollBar.md#hasdirty)

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

[DScrollBar](DScrollBar.md).[hasRefitableHeight](DScrollBar.md#hasrefitableheight)

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

[DScrollBar](DScrollBar.md).[hasRefitableWidth](DScrollBar.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hide

▸ **hide**(): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[hide](DScrollBar.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

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

[DScrollBar](DScrollBar.md).[init](DScrollBar.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1043](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1043)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[initReflowable](DScrollBar.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[isDirty](DScrollBar.md#isdirty)

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

[DScrollBar](DScrollBar.md).[isEventTarget](DScrollBar.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[isHidden](DScrollBar.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[isHierarchyDirty](DScrollBar.md#ishierarchydirty)

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

[DScrollBar](DScrollBar.md).[isRefitable](DScrollBar.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1681)

___

### isRegionVisible

▸ **isRegionVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[isRegionVisible](DScrollBar.md#isregionvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L100)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[isShown](DScrollBar.md#isshown)

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

[DScrollBar](DScrollBar.md).[listenerCount](DScrollBar.md#listenercount)

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

[DScrollBar](DScrollBar.md).[listeners](DScrollBar.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newThumb

▸ `Protected` **newThumb**(`options?`): [`DScrollBarThumb`](DScrollBarThumb.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DScrollBarThumbOptions`](../interfaces/DScrollBarThumbOptions.md) |

#### Returns

[`DScrollBarThumb`](DScrollBarThumb.md)

#### Overrides

[DScrollBar](DScrollBar.md).[newThumb](DScrollBar.md#newthumb)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts#L48)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[off](DScrollBar.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[on](DScrollBar.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[on](DScrollBar.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[onBlur](DScrollBar.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### onChange

▸ `Protected` **onChange**(`silently?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `silently?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[onChange](DScrollBar.md#onchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L88)

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

[DScrollBar](DScrollBar.md).[onChildBlur](DScrollBar.md#onchildblur)

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

[DScrollBar](DScrollBar.md).[onChildFocus](DScrollBar.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[onChildrenChange](DScrollBar.md#onchildrenchange)

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

[DScrollBar](DScrollBar.md).[onDblClick](DScrollBar.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1900](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1900)

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

[DScrollBar](DScrollBar.md).[onDown](DScrollBar.md#ondown)

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

#### Overrides

[DScrollBar](DScrollBar.md).[onDownThis](DScrollBar.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts#L34)

___

### onFadeOutTimeout

▸ `Protected` **onFadeOutTimeout**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[onFadeOutTimeout](DScrollBar.md#onfadeouttimeout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L140)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[onFocus](DScrollBar.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[onHierarchyDirty](DScrollBar.md#onhierarchydirty)

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

[DScrollBar](DScrollBar.md).[onKeyDown](DScrollBar.md#onkeydown)

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

[DScrollBar](DScrollBar.md).[onKeyUp](DScrollBar.md#onkeyup)

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

[DScrollBar](DScrollBar.md).[onMove](DScrollBar.md#onmove)

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

[DScrollBar](DScrollBar.md).[onOut](DScrollBar.md#onout)

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

[DScrollBar](DScrollBar.md).[onOver](DScrollBar.md#onover)

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

[DScrollBar](DScrollBar.md).[onParentMove](DScrollBar.md#onparentmove)

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

[DScrollBar](DScrollBar.md).[onParentResize](DScrollBar.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1750)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[onRefit](DScrollBar.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[onReflow](DScrollBar.md#onreflow)

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

[DScrollBar](DScrollBar.md).[onResize](DScrollBar.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L133)

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

[DScrollBar](DScrollBar.md).[onScale](DScrollBar.md#onscale)

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

[DScrollBar](DScrollBar.md).[onShortcut](DScrollBar.md#onshortcut)

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

[DScrollBar](DScrollBar.md).[onSkew](DScrollBar.md#onskew)

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

[DScrollBar](DScrollBar.md).[onStateChange](DScrollBar.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L179)

___

### onThumbRegionMove

▸ `Protected` **onThumbRegionMove**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts#L23)

___

### onThumbStateChange

▸ `Protected` **onThumbStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[onThumbStateChange](DScrollBar.md#onthumbstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L171)

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

[DScrollBar](DScrollBar.md).[onUp](DScrollBar.md#onup)

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

[DScrollBar](DScrollBar.md).[onUpThis](DScrollBar.md#onupthis)

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

[DScrollBar](DScrollBar.md).[onWheel](DScrollBar.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[once](DScrollBar.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[once](DScrollBar.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[reflow](DScrollBar.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[removeAllListeners](DScrollBar.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[removeAllListeners](DScrollBar.md#removealllisteners)

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

[DScrollBar](DScrollBar.md).[removeChild](DScrollBar.md#removechild)

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

[DScrollBar](DScrollBar.md).[removeChildAt](DScrollBar.md#removechildat)

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

[DScrollBar](DScrollBar.md).[removeChildren](DScrollBar.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[removeListener](DScrollBar.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[removeListener](DScrollBar.md#removelistener)

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

[DScrollBar](DScrollBar.md).[render](DScrollBar.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L104)

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

[DScrollBar](DScrollBar.md).[renderAdvanced](DScrollBar.md#renderadvanced)

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

[DScrollBar](DScrollBar.md).[resize](DScrollBar.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1063)

___

### set

▸ **set**(`start`, `end`, `size`, `silently?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `size` | `number` |
| `silently?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[set](DScrollBar.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar.ts#L73)

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

[DScrollBar](DScrollBar.md).[setChildIndex](DScrollBar.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[setFocused](DScrollBar.md#setfocused)

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

[DScrollBar](DScrollBar.md).[setHeight](DScrollBar.md#setheight)

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

[DScrollBar](DScrollBar.md).[setParent](DScrollBar.md#setparent)

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

[DScrollBar](DScrollBar.md).[setTransform](DScrollBar.md#settransform)

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

[DScrollBar](DScrollBar.md).[setWidth](DScrollBar.md#setwidth)

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

[DScrollBar](DScrollBar.md).[setX](DScrollBar.md#setx)

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

[DScrollBar](DScrollBar.md).[setY](DScrollBar.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DScrollBarHorizontal`](DScrollBarHorizontal.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DScrollBar](DScrollBar.md).[show](DScrollBar.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[sortChildren](DScrollBar.md#sortchildren)

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

[DScrollBar](DScrollBar.md).[swapChildren](DScrollBar.md#swapchildren)

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

#### Inherited from

[DScrollBar](DScrollBar.md).[toCursor](DScrollBar.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[toDirty](DScrollBar.md#todirty)

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

[DScrollBar](DScrollBar.md).[toGlobal](DScrollBar.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[toHasDirty](DScrollBar.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DScrollBar](DScrollBar.md).[toHierarchyDirty](DScrollBar.md#tohierarchydirty)

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

[DScrollBar](DScrollBar.md).[toLocal](DScrollBar.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[toParentHasDirty](DScrollBar.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[toParentHierarchyDirty](DScrollBar.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[toParentResized](DScrollBar.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### updateThumb

▸ `Protected` **updateThumb**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Overrides

[DScrollBar](DScrollBar.md).[updateThumb](DScrollBar.md#updatethumb)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-scroll-bar-horizontal.ts#L52)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DScrollBar](DScrollBar.md).[updateTransform](DScrollBar.md#updatetransform)

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

[DScrollBar](DScrollBar.md).[mixin](DScrollBar.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
