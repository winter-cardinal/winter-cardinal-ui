[Winter Cardinal UI - v0.227.0](../index.md) / DPagination

# Class: DPagination<THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemePagination`](../interfaces/DThemePagination.md) = [`DThemePagination`](../interfaces/DThemePagination.md) |
| `OPTIONS` | extends [`DPaginationOptions`](../interfaces/DPaginationOptions.md)<`THEME`\> = [`DPaginationOptions`](../interfaces/DPaginationOptions.md)<`THEME`\> |

## Hierarchy

- [`DLayoutHorizontal`](DLayoutHorizontal.md)<`THEME`, `OPTIONS`\>

  ↳ **`DPagination`**

## Table of contents

### Constructors

- [constructor](DPagination.md#constructor)

### Properties

- [\_accessibleActive](DPagination.md#_accessibleactive)
- [\_accessibleDiv](DPagination.md#_accessiblediv)
- [\_auto](DPagination.md#_auto)
- [\_background](DPagination.md#_background)
- [\_border](DPagination.md#_border)
- [\_bounds](DPagination.md#_bounds)
- [\_buttonLast](DPagination.md#_buttonlast)
- [\_buttonNext](DPagination.md#_buttonnext)
- [\_buttonPages0](DPagination.md#_buttonpages0)
- [\_buttonPages1](DPagination.md#_buttonpages1)
- [\_buttonPrevious](DPagination.md#_buttonprevious)
- [\_buttonTop](DPagination.md#_buttontop)
- [\_clearType](DPagination.md#_cleartype)
- [\_corner](DPagination.md#_corner)
- [\_cornerAdjust](DPagination.md#_corneradjust)
- [\_cursor](DPagination.md#_cursor)
- [\_destroyed](DPagination.md#_destroyed)
- [\_direction](DPagination.md#_direction)
- [\_dots0](DPagination.md#_dots0)
- [\_dots1](DPagination.md#_dots1)
- [\_lastDownPoint](DPagination.md#_lastdownpoint)
- [\_lastSortedIndex](DPagination.md#_lastsortedindex)
- [\_margin](DPagination.md#_margin)
- [\_mask](DPagination.md#_mask)
- [\_multiplicity](DPagination.md#_multiplicity)
- [\_options](DPagination.md#_options)
- [\_outline](DPagination.md#_outline)
- [\_padding](DPagination.md#_padding)
- [\_page](DPagination.md#_page)
- [\_reflowable](DPagination.md#_reflowable)
- [\_reverse](DPagination.md#_reverse)
- [\_shortcuts](DPagination.md#_shortcuts)
- [\_size](DPagination.md#_size)
- [\_snippet](DPagination.md#_snippet)
- [\_tempDisplayObjectParent](DPagination.md#_tempdisplayobjectparent)
- [\_title](DPagination.md#_title)
- [\_value](DPagination.md#_value)
- [\_zIndex](DPagination.md#_zindex)
- [accessible](DPagination.md#accessible)
- [accessibleChildren](DPagination.md#accessiblechildren)
- [accessibleHint](DPagination.md#accessiblehint)
- [accessiblePointerEvents](DPagination.md#accessiblepointerevents)
- [accessibleTitle](DPagination.md#accessibletitle)
- [accessibleType](DPagination.md#accessibletype)
- [alpha](DPagination.md#alpha)
- [angle](DPagination.md#angle)
- [buttonMode](DPagination.md#buttonmode)
- [cacheAsBitmap](DPagination.md#cacheasbitmap)
- [children](DPagination.md#children)
- [cursor](DPagination.md#cursor)
- [filterArea](DPagination.md#filterarea)
- [filters](DPagination.md#filters)
- [hitArea](DPagination.md#hitarea)
- [interactive](DPagination.md#interactive)
- [interactiveChildren](DPagination.md#interactivechildren)
- [isMask](DPagination.md#ismask)
- [isSprite](DPagination.md#issprite)
- [localTransform](DPagination.md#localtransform)
- [mask](DPagination.md#mask)
- [name](DPagination.md#name)
- [parent](DPagination.md#parent)
- [pivot](DPagination.md#pivot)
- [renderable](DPagination.md#renderable)
- [rotation](DPagination.md#rotation)
- [sortDirty](DPagination.md#sortdirty)
- [sortableChildren](DPagination.md#sortablechildren)
- [transform](DPagination.md#transform)
- [visible](DPagination.md#visible)
- [worldAlpha](DPagination.md#worldalpha)
- [worldTransform](DPagination.md#worldtransform)
- [worldVisible](DPagination.md#worldvisible)
- [zIndex](DPagination.md#zindex)
- [CORNER\_ADJUST\_WORK](DPagination.md#corner_adjust_work)
- [WORK\_CONTAINS\_POINT](DPagination.md#work_contains_point)

### Accessors

- [background](DPagination.md#background)
- [border](DPagination.md#border)
- [buttonLast](DPagination.md#buttonlast)
- [buttonNext](DPagination.md#buttonnext)
- [buttonPages0](DPagination.md#buttonpages0)
- [buttonPages1](DPagination.md#buttonpages1)
- [buttonPrevious](DPagination.md#buttonprevious)
- [buttonTop](DPagination.md#buttontop)
- [corner](DPagination.md#corner)
- [dots0](DPagination.md#dots0)
- [dots1](DPagination.md#dots1)
- [height](DPagination.md#height)
- [margin](DPagination.md#margin)
- [multiplicity](DPagination.md#multiplicity)
- [options](DPagination.md#options)
- [outline](DPagination.md#outline)
- [padding](DPagination.md#padding)
- [page](DPagination.md#page)
- [position](DPagination.md#position)
- [reflowable](DPagination.md#reflowable)
- [scale](DPagination.md#scale)
- [selected](DPagination.md#selected)
- [shadow](DPagination.md#shadow)
- [size](DPagination.md#size)
- [skew](DPagination.md#skew)
- [snippet](DPagination.md#snippet)
- [state](DPagination.md#state)
- [theme](DPagination.md#theme)
- [title](DPagination.md#title)
- [total](DPagination.md#total)
- [type](DPagination.md#type)
- [unsafe](DPagination.md#unsafe)
- [value](DPagination.md#value)
- [weight](DPagination.md#weight)
- [width](DPagination.md#width)
- [x](DPagination.md#x)
- [y](DPagination.md#y)

### Methods

- [\_calculateBounds](DPagination.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DPagination.md#_recursivepostupdatetransform)
- [\_render](DPagination.md#_render)
- [addChild](DPagination.md#addchild)
- [addChildAt](DPagination.md#addchildat)
- [addListener](DPagination.md#addlistener)
- [addSpace](DPagination.md#addspace)
- [applyTitle](DPagination.md#applytitle)
- [blur](DPagination.md#blur)
- [calcSpaceLeft](DPagination.md#calcspaceleft)
- [calculateBounds](DPagination.md#calculatebounds)
- [containsGlobalPoint](DPagination.md#containsglobalpoint)
- [containsLocalPoint](DPagination.md#containslocalpoint)
- [containsPoint](DPagination.md#containspoint)
- [countColumn](DPagination.md#countcolumn)
- [countRow](DPagination.md#countrow)
- [destroy](DPagination.md#destroy)
- [displayObjectUpdateTransform](DPagination.md#displayobjectupdatetransform)
- [emit](DPagination.md#emit)
- [eventNames](DPagination.md#eventnames)
- [findColumnIndexNext](DPagination.md#findcolumnindexnext)
- [findColumnIndexPrevious](DPagination.md#findcolumnindexprevious)
- [findRowIndexNext](DPagination.md#findrowindexnext)
- [findRowIndexPrevious](DPagination.md#findrowindexprevious)
- [focus](DPagination.md#focus)
- [focusOnClosest](DPagination.md#focusonclosest)
- [getBounds](DPagination.md#getbounds)
- [getChildAt](DPagination.md#getchildat)
- [getChildByName](DPagination.md#getchildbyname)
- [getChildIndex](DPagination.md#getchildindex)
- [getClearType](DPagination.md#getcleartype)
- [getClippingRect](DPagination.md#getclippingrect)
- [getGlobalPosition](DPagination.md#getglobalposition)
- [getHeight](DPagination.md#getheight)
- [getLocalBounds](DPagination.md#getlocalbounds)
- [getParentOfSize](DPagination.md#getparentofsize)
- [getSpaceLeft](DPagination.md#getspaceleft)
- [getThemeDefault](DPagination.md#getthemedefault)
- [getType](DPagination.md#gettype)
- [getWeightTotal](DPagination.md#getweighttotal)
- [getWidth](DPagination.md#getwidth)
- [getX](DPagination.md#getx)
- [getY](DPagination.md#gety)
- [hasClearType](DPagination.md#hascleartype)
- [hasClearTypeAfter](DPagination.md#hascleartypeafter)
- [hasClearTypeBefore](DPagination.md#hascleartypebefore)
- [hasDirty](DPagination.md#hasdirty)
- [hasRefitableHeight](DPagination.md#hasrefitableheight)
- [hasRefitableWidth](DPagination.md#hasrefitablewidth)
- [hide](DPagination.md#hide)
- [init](DPagination.md#init)
- [initReflowable](DPagination.md#initreflowable)
- [isDirty](DPagination.md#isdirty)
- [isEventTarget](DPagination.md#iseventtarget)
- [isHidden](DPagination.md#ishidden)
- [isHierarchyDirty](DPagination.md#ishierarchydirty)
- [isRefitable](DPagination.md#isrefitable)
- [isShown](DPagination.md#isshown)
- [listenerCount](DPagination.md#listenercount)
- [listeners](DPagination.md#listeners)
- [moveTo](DPagination.md#moveto)
- [newButtonLast](DPagination.md#newbuttonlast)
- [newButtonNext](DPagination.md#newbuttonnext)
- [newButtonPage](DPagination.md#newbuttonpage)
- [newButtonPages0](DPagination.md#newbuttonpages0)
- [newButtonPages1](DPagination.md#newbuttonpages1)
- [newButtonPrevious](DPagination.md#newbuttonprevious)
- [newButtonTop](DPagination.md#newbuttontop)
- [newDots](DPagination.md#newdots)
- [newPage](DPagination.md#newpage)
- [newSpace](DPagination.md#newspace)
- [off](DPagination.md#off)
- [on](DPagination.md#on)
- [onBlur](DPagination.md#onblur)
- [onButtonLastActive](DPagination.md#onbuttonlastactive)
- [onButtonNextActive](DPagination.md#onbuttonnextactive)
- [onButtonPageActive](DPagination.md#onbuttonpageactive)
- [onButtonPreviousActive](DPagination.md#onbuttonpreviousactive)
- [onButtonTopActive](DPagination.md#onbuttontopactive)
- [onChildBlur](DPagination.md#onchildblur)
- [onChildFocus](DPagination.md#onchildfocus)
- [onChildrenChange](DPagination.md#onchildrenchange)
- [onDblClick](DPagination.md#ondblclick)
- [onDown](DPagination.md#ondown)
- [onDownThis](DPagination.md#ondownthis)
- [onFocus](DPagination.md#onfocus)
- [onHierarchyDirty](DPagination.md#onhierarchydirty)
- [onKeyDown](DPagination.md#onkeydown)
- [onKeyUp](DPagination.md#onkeyup)
- [onMove](DPagination.md#onmove)
- [onOut](DPagination.md#onout)
- [onOver](DPagination.md#onover)
- [onParentMove](DPagination.md#onparentmove)
- [onParentResize](DPagination.md#onparentresize)
- [onRefit](DPagination.md#onrefit)
- [onReflow](DPagination.md#onreflow)
- [onResize](DPagination.md#onresize)
- [onScale](DPagination.md#onscale)
- [onShortcut](DPagination.md#onshortcut)
- [onSkew](DPagination.md#onskew)
- [onStateChange](DPagination.md#onstatechange)
- [onUp](DPagination.md#onup)
- [onUpThis](DPagination.md#onupthis)
- [onWheel](DPagination.md#onwheel)
- [once](DPagination.md#once)
- [reflow](DPagination.md#reflow)
- [removeAllListeners](DPagination.md#removealllisteners)
- [removeChild](DPagination.md#removechild)
- [removeChildAt](DPagination.md#removechildat)
- [removeChildren](DPagination.md#removechildren)
- [removeListener](DPagination.md#removelistener)
- [render](DPagination.md#render)
- [renderAdvanced](DPagination.md#renderadvanced)
- [resize](DPagination.md#resize)
- [setChildIndex](DPagination.md#setchildindex)
- [setFocused](DPagination.md#setfocused)
- [setHeight](DPagination.md#setheight)
- [setParent](DPagination.md#setparent)
- [setTransform](DPagination.md#settransform)
- [setWidth](DPagination.md#setwidth)
- [setX](DPagination.md#setx)
- [setY](DPagination.md#sety)
- [show](DPagination.md#show)
- [sortChildren](DPagination.md#sortchildren)
- [swapChildren](DPagination.md#swapchildren)
- [toCornerMaskColumn](DPagination.md#tocornermaskcolumn)
- [toCornerMaskRow](DPagination.md#tocornermaskrow)
- [toCursor](DPagination.md#tocursor)
- [toDirty](DPagination.md#todirty)
- [toGlobal](DPagination.md#toglobal)
- [toHasDirty](DPagination.md#tohasdirty)
- [toHierarchyDirty](DPagination.md#tohierarchydirty)
- [toLocal](DPagination.md#tolocal)
- [toParentHasDirty](DPagination.md#toparenthasdirty)
- [toParentHierarchyDirty](DPagination.md#toparenthierarchydirty)
- [toParentResized](DPagination.md#toparentresized)
- [update](DPagination.md#update)
- [updateTransform](DPagination.md#updatetransform)
- [mixin](DPagination.md#mixin)

## Constructors

### constructor

• **new DPagination**<`THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemePagination`](../interfaces/DThemePagination.md) = [`DThemePagination`](../interfaces/DThemePagination.md) |
| `OPTIONS` | extends [`DPaginationOptions`](../interfaces/DPaginationOptions.md)<`THEME`, `OPTIONS`\> = [`DPaginationOptions`](../interfaces/DPaginationOptions.md)<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Overrides

[DLayoutHorizontal](DLayoutHorizontal.md).[constructor](DLayoutHorizontal.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L115)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_accessibleActive](DLayoutHorizontal.md#_accessibleactive)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_accessibleDiv](DLayoutHorizontal.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_auto](DLayoutHorizontal.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_background](DLayoutHorizontal.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_border](DLayoutHorizontal.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_bounds](DLayoutHorizontal.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_buttonLast

• `Protected` `Optional` **\_buttonLast**: ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L113)

___

### \_buttonNext

• `Protected` `Optional` **\_buttonNext**: ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L112)

___

### \_buttonPages0

• `Protected` `Optional` **\_buttonPages0**: [`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L108)

___

### \_buttonPages1

• `Protected` `Optional` **\_buttonPages1**: [`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L110)

___

### \_buttonPrevious

• `Protected` `Optional` **\_buttonPrevious**: ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L106)

___

### \_buttonTop

• `Protected` `Optional` **\_buttonTop**: ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L105)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_clearType](DLayoutHorizontal.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_corner](DLayoutHorizontal.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cornerAdjust

• `Protected` **\_cornerAdjust**: `boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_cornerAdjust](DLayoutHorizontal.md#_corneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L126)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_cursor](DLayoutHorizontal.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_destroyed](DLayoutHorizontal.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_direction

• `Protected` **\_direction**: [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_direction](DLayoutHorizontal.md#_direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L128)

___

### \_dots0

• `Protected` `Optional` **\_dots0**: [`DPaginationDots`](DPaginationDots.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md), [`DPaginationDotsOptions`](../interfaces/DPaginationDotsOptions.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L107)

___

### \_dots1

• `Protected` `Optional` **\_dots1**: [`DPaginationDots`](DPaginationDots.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md), [`DPaginationDotsOptions`](../interfaces/DPaginationDotsOptions.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L111)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_lastDownPoint](DLayoutHorizontal.md#_lastdownpoint)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_lastSortedIndex](DLayoutHorizontal.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_margin

• `Protected` **\_margin**: [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_margin](DLayoutHorizontal.md#_margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L125)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_mask](DLayoutHorizontal.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_multiplicity

• `Protected` **\_multiplicity**: `number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_multiplicity](DLayoutHorizontal.md#_multiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L127)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_options](DLayoutHorizontal.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_outline](DLayoutHorizontal.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_padding](DLayoutHorizontal.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_page

• `Protected` `Optional` **\_page**: [`DPaginationPage`](DPaginationPage.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md), [`DPaginationPageOptions`](../interfaces/DPaginationPageOptions.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L109)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_reflowable](DLayoutHorizontal.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

___

### \_reverse

• `Protected` **\_reverse**: `boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_reverse](DLayoutHorizontal.md#_reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L129)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_shortcuts](DLayoutHorizontal.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L102)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_snippet](DLayoutHorizontal.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_tempDisplayObjectParent](DLayoutHorizontal.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_title](DLayoutHorizontal.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_value

• `Protected` **\_value**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L103)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_zIndex](DLayoutHorizontal.md#_zindex)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessible](DLayoutHorizontal.md#accessible)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleChildren](DLayoutHorizontal.md#accessiblechildren)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleHint](DLayoutHorizontal.md#accessiblehint)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessiblePointerEvents](DLayoutHorizontal.md#accessiblepointerevents)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleTitle](DLayoutHorizontal.md#accessibletitle)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleType](DLayoutHorizontal.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[alpha](DLayoutHorizontal.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[angle](DLayoutHorizontal.md#angle)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[buttonMode](DLayoutHorizontal.md#buttonmode)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[cacheAsBitmap](DLayoutHorizontal.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[children](DLayoutHorizontal.md#children)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[cursor](DLayoutHorizontal.md#cursor)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[filterArea](DLayoutHorizontal.md#filterarea)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[filters](DLayoutHorizontal.md#filters)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hitArea](DLayoutHorizontal.md#hitarea)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[interactive](DLayoutHorizontal.md#interactive)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[interactiveChildren](DLayoutHorizontal.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isMask](DLayoutHorizontal.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isSprite](DLayoutHorizontal.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[localTransform](DLayoutHorizontal.md#localtransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[mask](DLayoutHorizontal.md#mask)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[name](DLayoutHorizontal.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[parent](DLayoutHorizontal.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[pivot](DLayoutHorizontal.md#pivot)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[renderable](DLayoutHorizontal.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[rotation](DLayoutHorizontal.md#rotation)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[sortDirty](DLayoutHorizontal.md#sortdirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[sortableChildren](DLayoutHorizontal.md#sortablechildren)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[transform](DLayoutHorizontal.md#transform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[visible](DLayoutHorizontal.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[worldAlpha](DLayoutHorizontal.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[worldTransform](DLayoutHorizontal.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[worldVisible](DLayoutHorizontal.md#worldvisible)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[zIndex](DLayoutHorizontal.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### CORNER\_ADJUST\_WORK

▪ `Static` **CORNER\_ADJUST\_WORK**: ``null`` \| `Float32Array` = `null`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[CORNER_ADJUST_WORK](DLayoutHorizontal.md#corner_adjust_work)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L123)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[WORK_CONTAINS_POINT](DLayoutHorizontal.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:733](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L733)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DLayoutHorizontal.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DLayoutHorizontal.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### buttonLast

• `Protected` `get` **buttonLast**(): ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Returns

``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L282)

___

### buttonNext

• `Protected` `get` **buttonNext**(): ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Returns

``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L316)

___

### buttonPages0

• `Protected` `get` **buttonPages0**(): [`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Returns

[`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L399)

___

### buttonPages1

• `Protected` `get` **buttonPages1**(): [`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Returns

[`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L417)

___

### buttonPrevious

• `Protected` `get` **buttonPrevious**(): ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Returns

``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:341](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L341)

___

### buttonTop

• `Protected` `get` **buttonTop**(): ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Returns

``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L366)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DLayoutHorizontal.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### dots0

• `Protected` `get` **dots0**(): [`DPaginationDots`](DPaginationDots.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md), [`DPaginationDotsOptions`](../interfaces/DPaginationDotsOptions.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md)\>\>

#### Returns

[`DPaginationDots`](DPaginationDots.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md), [`DPaginationDotsOptions`](../interfaces/DPaginationDotsOptions.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L260)

___

### dots1

• `Protected` `get` **dots1**(): [`DPaginationDots`](DPaginationDots.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md), [`DPaginationDotsOptions`](../interfaces/DPaginationDotsOptions.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md)\>\>

#### Returns

[`DPaginationDots`](DPaginationDots.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md), [`DPaginationDotsOptions`](../interfaces/DPaginationDotsOptions.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:269](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L269)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.height

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

DLayoutHorizontal.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### margin

• `get` **margin**(): [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Returns

[`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

DLayoutHorizontal.margin

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L142)

___

### multiplicity

• `get` **multiplicity**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.multiplicity

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L146)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DLayoutHorizontal.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DLayoutHorizontal.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DLayoutHorizontal.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### page

• `Protected` `get` **page**(): [`DPaginationPage`](DPaginationPage.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md), [`DPaginationPageOptions`](../interfaces/DPaginationPageOptions.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md)\>\>

#### Returns

[`DPaginationPage`](DPaginationPage.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md), [`DPaginationPageOptions`](../interfaces/DPaginationPageOptions.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:435](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L435)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DLayoutHorizontal.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DLayoutHorizontal.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DLayoutHorizontal.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### selected

• `get` **selected**(): `number`

Returns an index of the selected page.

**`Deprecated`**

in favor of [value](DPagination.md#value).

#### Returns

`number`

an index of the selected page.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L210)

• `set` **selected**(`index`): `void`

Selects a page.

**`Deprecated`**

in favor of [#value](../index.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index of a page |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L200)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DLayoutHorizontal.shadow

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

DLayoutHorizontal.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### size

• `get` **size**(): `number`

Returns a number of total pages.

#### Returns

`number`

a number of total pages.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L236)

• `set` **size**(`size`): `void`

Sets a number of total pages.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | a number of pages |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L219)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DLayoutHorizontal.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DLayoutHorizontal.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DLayoutHorizontal.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DLayoutHorizontal.theme

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

DLayoutHorizontal.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DLayoutHorizontal.title

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

DLayoutHorizontal.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### total

• `get` **total**(): `number`

Returns a number of total pages.

**`Deprecated`**

in favor of [size](DPagination.md#size)

#### Returns

`number`

a number of total pages.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L256)

• `set` **total**(`total`): `void`

Sets a number of total pages.

**`Deprecated`**

in favor of [size](DPagination.md#size)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `total` | `number` | a number of pages |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L246)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DLayoutHorizontal.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DLayoutHorizontal.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### value

• `get` **value**(): `number`

Returns a value that is an index of a current page.

#### Returns

`number`

a value that is an index of a selected page.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L190)

• `set` **value**(`value`): `void`

Sets a value that is an index of a current page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | a value that is an index of a page |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L178)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.width

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

DLayoutHorizontal.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.x

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

DLayoutHorizontal.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.y

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

DLayoutHorizontal.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_calculateBounds](DLayoutHorizontal.md#_calculatebounds)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_recursivePostUpdateTransform](DLayoutHorizontal.md#_recursivepostupdatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_render](DLayoutHorizontal.md#_render)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[addChild](DLayoutHorizontal.md#addchild)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[addChildAt](DLayoutHorizontal.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[addListener](DLayoutHorizontal.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[addListener](DLayoutHorizontal.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### addSpace

▸ **addSpace**(`options?`): [`DLayoutSpace`](DLayoutSpace.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\> |

#### Returns

[`DLayoutSpace`](DLayoutSpace.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[addSpace](DLayoutHorizontal.md#addspace)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L804)

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[applyTitle](DLayoutHorizontal.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### blur

▸ **blur**(`recursively?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[blur](DLayoutHorizontal.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calcSpaceLeft

▸ `Protected` **calcSpaceLeft**(`isOn`, `size`, `padding`, `margin`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isOn` | `boolean` |
| `size` | `number` |
| `padding` | `number` |
| `margin` | `number` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[calcSpaceLeft](DLayoutHorizontal.md#calcspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L261)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[calculateBounds](DLayoutHorizontal.md#calculatebounds)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containsGlobalPoint](DLayoutHorizontal.md#containsglobalpoint)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containsLocalPoint](DLayoutHorizontal.md#containslocalpoint)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containsPoint](DLayoutHorizontal.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### countColumn

▸ `Protected` **countColumn**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[countColumn](DLayoutHorizontal.md#countcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L760)

___

### countRow

▸ `Protected` **countRow**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[countRow](DLayoutHorizontal.md#countrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:718](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L718)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[destroy](DLayoutHorizontal.md#destroy)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[displayObjectUpdateTransform](DLayoutHorizontal.md#displayobjectupdatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[emit](DLayoutHorizontal.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[eventNames](DLayoutHorizontal.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### findColumnIndexNext

▸ `Protected` **findColumnIndexNext**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[findColumnIndexNext](DLayoutHorizontal.md#findcolumnindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:699](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L699)

___

### findColumnIndexPrevious

▸ `Protected` **findColumnIndexPrevious**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[findColumnIndexPrevious](DLayoutHorizontal.md#findcolumnindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L686)

___

### findRowIndexNext

▸ `Protected` **findRowIndexNext**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[findRowIndexNext](DLayoutHorizontal.md#findrowindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L741)

___

### findRowIndexPrevious

▸ `Protected` **findRowIndexPrevious**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[findRowIndexPrevious](DLayoutHorizontal.md#findrowindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L728)

___

### focus

▸ **focus**(): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[focus](DLayoutHorizontal.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[focusOnClosest](DLayoutHorizontal.md#focusonclosest)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getBounds](DLayoutHorizontal.md#getbounds)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getChildAt](DLayoutHorizontal.md#getchildat)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getChildByName](DLayoutHorizontal.md#getchildbyname)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getChildIndex](DLayoutHorizontal.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getClearType](DLayoutHorizontal.md#getcleartype)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getClippingRect](DLayoutHorizontal.md#getclippingrect)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getGlobalPosition](DLayoutHorizontal.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getHeight](DLayoutHorizontal.md#getheight)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getLocalBounds](DLayoutHorizontal.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getParentOfSize](DLayoutHorizontal.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

___

### getSpaceLeft

▸ `Protected` **getSpaceLeft**(`baseSize`, `margin`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseSize` | `number` |
| `margin` | `number` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getSpaceLeft](DLayoutHorizontal.md#getspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L184)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getThemeDefault](DLayoutHorizontal.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DLayoutHorizontal](DLayoutHorizontal.md).[getType](DLayoutHorizontal.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L586)

___

### getWeightTotal

▸ `Protected` **getWeightTotal**(): `number`

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getWeightTotal](DLayoutHorizontal.md#getweighttotal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L150)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getWidth](DLayoutHorizontal.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getX](DLayoutHorizontal.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getY](DLayoutHorizontal.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasClearType

▸ `Protected` **hasClearType**(`children`, `index`, `clearType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |
| `clearType` | `number` |

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hasClearType](DLayoutHorizontal.md#hascleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:669](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L669)

___

### hasClearTypeAfter

▸ `Protected` **hasClearTypeAfter**(`children`, `index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hasClearTypeAfter](DLayoutHorizontal.md#hascleartypeafter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L665)

___

### hasClearTypeBefore

▸ `Protected` **hasClearTypeBefore**(`children`, `index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hasClearTypeBefore](DLayoutHorizontal.md#hascleartypebefore)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L661)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hasDirty](DLayoutHorizontal.md#hasdirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hasRefitableHeight](DLayoutHorizontal.md#hasrefitableheight)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hasRefitableWidth](DLayoutHorizontal.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hide

▸ **hide**(): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hide](DLayoutHorizontal.md#hide)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[init](DLayoutHorizontal.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L131)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[initReflowable](DLayoutHorizontal.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isDirty](DLayoutHorizontal.md#isdirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[isEventTarget](DLayoutHorizontal.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isHidden](DLayoutHorizontal.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isHierarchyDirty](DLayoutHorizontal.md#ishierarchydirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[isRefitable](DLayoutHorizontal.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1681)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isShown](DLayoutHorizontal.md#isshown)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[listenerCount](DLayoutHorizontal.md#listenercount)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[listeners](DLayoutHorizontal.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### moveTo

▸ `Protected` **moveTo**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L307)

___

### newButtonLast

▸ `Protected` **newButtonLast**(): ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Returns

``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L291)

___

### newButtonNext

▸ `Protected` **newButtonNext**(): ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Returns

``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:325](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L325)

___

### newButtonPage

▸ `Protected` **newButtonPage**(): [`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>

#### Returns

[`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L391)

___

### newButtonPages0

▸ `Protected` **newButtonPages0**(): [`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Returns

[`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:408](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L408)

___

### newButtonPages1

▸ `Protected` **newButtonPages1**(): [`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Returns

[`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L426)

___

### newButtonPrevious

▸ `Protected` **newButtonPrevious**(): ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Returns

``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L350)

___

### newButtonTop

▸ `Protected` **newButtonTop**(): ``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Returns

``null`` \| [`DButton`](DButton.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`string`, [`DThemeButton`](../interfaces/DThemeButton.md)<`string`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L375)

___

### newDots

▸ `Protected` **newDots**(): [`DPaginationDots`](DPaginationDots.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md), [`DPaginationDotsOptions`](../interfaces/DPaginationDotsOptions.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md)\>\>

#### Returns

[`DPaginationDots`](DPaginationDots.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md), [`DPaginationDotsOptions`](../interfaces/DPaginationDotsOptions.md)<[`DThemePaginationDots`](../interfaces/DThemePaginationDots.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L278)

___

### newPage

▸ `Protected` **newPage**(): [`DPaginationPage`](DPaginationPage.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md), [`DPaginationPageOptions`](../interfaces/DPaginationPageOptions.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md)\>\>

#### Returns

[`DPaginationPage`](DPaginationPage.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md), [`DPaginationPageOptions`](../interfaces/DPaginationPageOptions.md)<[`DThemePaginationPage`](../interfaces/DThemePaginationPage.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:444](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L444)

___

### newSpace

▸ `Protected` **newSpace**(): [`DLayoutSpace`](DLayoutSpace.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Returns

[`DLayoutSpace`](DLayoutSpace.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L167)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[off](DLayoutHorizontal.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[on](DLayoutHorizontal.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[on](DLayoutHorizontal.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onBlur](DLayoutHorizontal.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### onButtonLastActive

▸ `Protected` **onButtonLastActive**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L303)

___

### onButtonNextActive

▸ `Protected` **onButtonNextActive**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:337](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L337)

___

### onButtonPageActive

▸ `Protected` **onButtonPageActive**(`button`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `button` | [`DButton`](DButton.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`number`, [`DThemeButton`](../interfaces/DThemeButton.md)<`number`\>, `any`\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L448)

___

### onButtonPreviousActive

▸ `Protected` **onButtonPreviousActive**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L362)

___

### onButtonTopActive

▸ `Protected` **onButtonTopActive**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L387)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onChildBlur](DLayoutHorizontal.md#onchildblur)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onChildFocus](DLayoutHorizontal.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onChildrenChange](DLayoutHorizontal.md#onchildrenchange)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onDblClick](DLayoutHorizontal.md#ondblclick)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onDown](DLayoutHorizontal.md#ondown)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onDownThis](DLayoutHorizontal.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onFocus](DLayoutHorizontal.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onHierarchyDirty](DLayoutHorizontal.md#onhierarchydirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onKeyDown](DLayoutHorizontal.md#onkeydown)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onKeyUp](DLayoutHorizontal.md#onkeyup)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onMove](DLayoutHorizontal.md#onmove)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onOut](DLayoutHorizontal.md#onout)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onOver](DLayoutHorizontal.md#onover)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onParentMove](DLayoutHorizontal.md#onparentmove)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onParentResize](DLayoutHorizontal.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1750)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onRefit](DLayoutHorizontal.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:265](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L265)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onReflow](DLayoutHorizontal.md#onreflow)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onResize](DLayoutHorizontal.md#onresize)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onScale](DLayoutHorizontal.md#onscale)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onShortcut](DLayoutHorizontal.md#onshortcut)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onSkew](DLayoutHorizontal.md#onskew)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onStateChange](DLayoutHorizontal.md#onstatechange)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onUp](DLayoutHorizontal.md#onup)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onUpThis](DLayoutHorizontal.md#onupthis)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onWheel](DLayoutHorizontal.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[once](DLayoutHorizontal.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[once](DLayoutHorizontal.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[reflow](DLayoutHorizontal.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[removeAllListeners](DLayoutHorizontal.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[removeAllListeners](DLayoutHorizontal.md#removealllisteners)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeChild](DLayoutHorizontal.md#removechild)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeChildAt](DLayoutHorizontal.md#removechildat)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeChildren](DLayoutHorizontal.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[removeListener](DLayoutHorizontal.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[removeListener](DLayoutHorizontal.md#removelistener)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[render](DLayoutHorizontal.md#render)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[renderAdvanced](DLayoutHorizontal.md#renderadvanced)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[resize](DLayoutHorizontal.md#resize)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setChildIndex](DLayoutHorizontal.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[setFocused](DLayoutHorizontal.md#setfocused)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setHeight](DLayoutHorizontal.md#setheight)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setParent](DLayoutHorizontal.md#setparent)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setTransform](DLayoutHorizontal.md#settransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setWidth](DLayoutHorizontal.md#setwidth)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setX](DLayoutHorizontal.md#setx)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setY](DLayoutHorizontal.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DPagination`](DPagination.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[show](DLayoutHorizontal.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[sortChildren](DLayoutHorizontal.md#sortchildren)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[swapChildren](DLayoutHorizontal.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toCornerMaskColumn

▸ `Protected` **toCornerMaskColumn**(`i0`, `i1`, `i2`, `n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i0` | `number` |
| `i1` | `number` |
| `i2` | `number` |
| `n` | `number` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toCornerMaskColumn](DLayoutHorizontal.md#tocornermaskcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:770](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L770)

___

### toCornerMaskRow

▸ `Protected` **toCornerMaskRow**(`i0`, `i1`, `i2`, `n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i0` | `number` |
| `i1` | `number` |
| `i2` | `number` |
| `n` | `number` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toCornerMaskRow](DLayoutHorizontal.md#tocornermaskrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L787)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toCursor](DLayoutHorizontal.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toDirty](DLayoutHorizontal.md#todirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toGlobal](DLayoutHorizontal.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toHasDirty](DLayoutHorizontal.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toHierarchyDirty](DLayoutHorizontal.md#tohierarchydirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toLocal](DLayoutHorizontal.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toParentHasDirty](DLayoutHorizontal.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toParentHierarchyDirty](DLayoutHorizontal.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toParentResized](DLayoutHorizontal.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### update

▸ `Protected` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L459)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[updateTransform](DLayoutHorizontal.md#updatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[mixin](DLayoutHorizontal.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
