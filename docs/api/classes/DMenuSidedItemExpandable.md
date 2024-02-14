[Winter Cardinal UI - v0.407.0](../index.md) / DMenuSidedItemExpandable

# Class: DMenuSidedItemExpandable\<VALUE, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemExpandable`](../interfaces/DThemeMenuItemExpandable.md) = [`DThemeMenuItemExpandable`](../interfaces/DThemeMenuItemExpandable.md) |
| `OPTIONS` | extends [`DMenuItemExpandableOptions`](../interfaces/DMenuItemExpandableOptions.md)\<`VALUE`, `THEME`\> = [`DMenuItemExpandableOptions`](../interfaces/DMenuItemExpandableOptions.md)\<`VALUE`, `THEME`\> |

## Hierarchy

- [`DMenuItemExpandable`](DMenuItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DMenuSidedItemExpandable`**

## Table of contents

### Constructors

- [constructor](DMenuSidedItemExpandable.md#constructor)

### Properties

- [\_accessibleActive](DMenuSidedItemExpandable.md#_accessibleactive)
- [\_accessibleDiv](DMenuSidedItemExpandable.md#_accessiblediv)
- [\_auto](DMenuSidedItemExpandable.md#_auto)
- [\_background](DMenuSidedItemExpandable.md#_background)
- [\_body](DMenuSidedItemExpandable.md#_body)
- [\_border](DMenuSidedItemExpandable.md#_border)
- [\_bounds](DMenuSidedItemExpandable.md#_bounds)
- [\_boundsID](DMenuSidedItemExpandable.md#_boundsid)
- [\_boundsRect](DMenuSidedItemExpandable.md#_boundsrect)
- [\_clearType](DMenuSidedItemExpandable.md#_cleartype)
- [\_corner](DMenuSidedItemExpandable.md#_corner)
- [\_cornerAdjust](DMenuSidedItemExpandable.md#_corneradjust)
- [\_cursor](DMenuSidedItemExpandable.md#_cursor)
- [\_destroyed](DMenuSidedItemExpandable.md#_destroyed)
- [\_direction](DMenuSidedItemExpandable.md#_direction)
- [\_enabledFilters](DMenuSidedItemExpandable.md#_enabledfilters)
- [\_header](DMenuSidedItemExpandable.md#_header)
- [\_lastDownPoint](DMenuSidedItemExpandable.md#_lastdownpoint)
- [\_lastSortedIndex](DMenuSidedItemExpandable.md#_lastsortedindex)
- [\_localBounds](DMenuSidedItemExpandable.md#_localbounds)
- [\_localBoundsRect](DMenuSidedItemExpandable.md#_localboundsrect)
- [\_margin](DMenuSidedItemExpandable.md#_margin)
- [\_mask](DMenuSidedItemExpandable.md#_mask)
- [\_multiplicity](DMenuSidedItemExpandable.md#_multiplicity)
- [\_options](DMenuSidedItemExpandable.md#_options)
- [\_outline](DMenuSidedItemExpandable.md#_outline)
- [\_padding](DMenuSidedItemExpandable.md#_padding)
- [\_reflowable](DMenuSidedItemExpandable.md#_reflowable)
- [\_reverse](DMenuSidedItemExpandable.md#_reverse)
- [\_shortcuts](DMenuSidedItemExpandable.md#_shortcuts)
- [\_snippet](DMenuSidedItemExpandable.md#_snippet)
- [\_tempDisplayObjectParent](DMenuSidedItemExpandable.md#_tempdisplayobjectparent)
- [\_title](DMenuSidedItemExpandable.md#_title)
- [\_zIndex](DMenuSidedItemExpandable.md#_zindex)
- [accessible](DMenuSidedItemExpandable.md#accessible)
- [accessibleChildren](DMenuSidedItemExpandable.md#accessiblechildren)
- [accessibleHint](DMenuSidedItemExpandable.md#accessiblehint)
- [accessiblePointerEvents](DMenuSidedItemExpandable.md#accessiblepointerevents)
- [accessibleTitle](DMenuSidedItemExpandable.md#accessibletitle)
- [accessibleType](DMenuSidedItemExpandable.md#accessibletype)
- [alpha](DMenuSidedItemExpandable.md#alpha)
- [angle](DMenuSidedItemExpandable.md#angle)
- [buttonMode](DMenuSidedItemExpandable.md#buttonmode)
- [cacheAsBitmap](DMenuSidedItemExpandable.md#cacheasbitmap)
- [children](DMenuSidedItemExpandable.md#children)
- [cursor](DMenuSidedItemExpandable.md#cursor)
- [filterArea](DMenuSidedItemExpandable.md#filterarea)
- [filters](DMenuSidedItemExpandable.md#filters)
- [hitArea](DMenuSidedItemExpandable.md#hitarea)
- [interactive](DMenuSidedItemExpandable.md#interactive)
- [interactiveChildren](DMenuSidedItemExpandable.md#interactivechildren)
- [isMask](DMenuSidedItemExpandable.md#ismask)
- [isSprite](DMenuSidedItemExpandable.md#issprite)
- [localTransform](DMenuSidedItemExpandable.md#localtransform)
- [mask](DMenuSidedItemExpandable.md#mask)
- [name](DMenuSidedItemExpandable.md#name)
- [parent](DMenuSidedItemExpandable.md#parent)
- [pivot](DMenuSidedItemExpandable.md#pivot)
- [renderable](DMenuSidedItemExpandable.md#renderable)
- [rotation](DMenuSidedItemExpandable.md#rotation)
- [sortDirty](DMenuSidedItemExpandable.md#sortdirty)
- [sortableChildren](DMenuSidedItemExpandable.md#sortablechildren)
- [transform](DMenuSidedItemExpandable.md#transform)
- [visible](DMenuSidedItemExpandable.md#visible)
- [worldAlpha](DMenuSidedItemExpandable.md#worldalpha)
- [worldTransform](DMenuSidedItemExpandable.md#worldtransform)
- [worldVisible](DMenuSidedItemExpandable.md#worldvisible)
- [zIndex](DMenuSidedItemExpandable.md#zindex)
- [CORNER\_ADJUST\_WORK](DMenuSidedItemExpandable.md#corner_adjust_work)
- [WORK\_CONTAINS\_POINT](DMenuSidedItemExpandable.md#work_contains_point)

### Accessors

- [background](DMenuSidedItemExpandable.md#background)
- [border](DMenuSidedItemExpandable.md#border)
- [corner](DMenuSidedItemExpandable.md#corner)
- [height](DMenuSidedItemExpandable.md#height)
- [margin](DMenuSidedItemExpandable.md#margin)
- [multiplicity](DMenuSidedItemExpandable.md#multiplicity)
- [options](DMenuSidedItemExpandable.md#options)
- [outline](DMenuSidedItemExpandable.md#outline)
- [padding](DMenuSidedItemExpandable.md#padding)
- [position](DMenuSidedItemExpandable.md#position)
- [reflowable](DMenuSidedItemExpandable.md#reflowable)
- [scale](DMenuSidedItemExpandable.md#scale)
- [shadow](DMenuSidedItemExpandable.md#shadow)
- [skew](DMenuSidedItemExpandable.md#skew)
- [snippet](DMenuSidedItemExpandable.md#snippet)
- [state](DMenuSidedItemExpandable.md#state)
- [theme](DMenuSidedItemExpandable.md#theme)
- [title](DMenuSidedItemExpandable.md#title)
- [type](DMenuSidedItemExpandable.md#type)
- [unsafe](DMenuSidedItemExpandable.md#unsafe)
- [weight](DMenuSidedItemExpandable.md#weight)
- [width](DMenuSidedItemExpandable.md#width)
- [x](DMenuSidedItemExpandable.md#x)
- [y](DMenuSidedItemExpandable.md#y)

### Methods

- [\_calculateBounds](DMenuSidedItemExpandable.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DMenuSidedItemExpandable.md#_recursivepostupdatetransform)
- [\_render](DMenuSidedItemExpandable.md#_render)
- [addChild](DMenuSidedItemExpandable.md#addchild)
- [addChildAt](DMenuSidedItemExpandable.md#addchildat)
- [addListener](DMenuSidedItemExpandable.md#addlistener)
- [addSpace](DMenuSidedItemExpandable.md#addspace)
- [applyTitle](DMenuSidedItemExpandable.md#applytitle)
- [blur](DMenuSidedItemExpandable.md#blur)
- [calcSpaceLeft](DMenuSidedItemExpandable.md#calcspaceleft)
- [calculateBounds](DMenuSidedItemExpandable.md#calculatebounds)
- [close](DMenuSidedItemExpandable.md#close)
- [containerUpdateTransform](DMenuSidedItemExpandable.md#containerupdatetransform)
- [containsGlobalPoint](DMenuSidedItemExpandable.md#containsglobalpoint)
- [containsLocalPoint](DMenuSidedItemExpandable.md#containslocalpoint)
- [containsPoint](DMenuSidedItemExpandable.md#containspoint)
- [countColumn](DMenuSidedItemExpandable.md#countcolumn)
- [countRow](DMenuSidedItemExpandable.md#countrow)
- [destroy](DMenuSidedItemExpandable.md#destroy)
- [disableTempParent](DMenuSidedItemExpandable.md#disabletempparent)
- [displayObjectUpdateTransform](DMenuSidedItemExpandable.md#displayobjectupdatetransform)
- [emit](DMenuSidedItemExpandable.md#emit)
- [enableTempParent](DMenuSidedItemExpandable.md#enabletempparent)
- [eventNames](DMenuSidedItemExpandable.md#eventnames)
- [findColumnIndexNext](DMenuSidedItemExpandable.md#findcolumnindexnext)
- [findColumnIndexPrevious](DMenuSidedItemExpandable.md#findcolumnindexprevious)
- [findRowIndexNext](DMenuSidedItemExpandable.md#findrowindexnext)
- [findRowIndexPrevious](DMenuSidedItemExpandable.md#findrowindexprevious)
- [focus](DMenuSidedItemExpandable.md#focus)
- [focusOnClosest](DMenuSidedItemExpandable.md#focusonclosest)
- [getBounds](DMenuSidedItemExpandable.md#getbounds)
- [getChildAt](DMenuSidedItemExpandable.md#getchildat)
- [getChildByName](DMenuSidedItemExpandable.md#getchildbyname)
- [getChildIndex](DMenuSidedItemExpandable.md#getchildindex)
- [getClearType](DMenuSidedItemExpandable.md#getcleartype)
- [getClippingRect](DMenuSidedItemExpandable.md#getclippingrect)
- [getGlobalPosition](DMenuSidedItemExpandable.md#getglobalposition)
- [getHeight](DMenuSidedItemExpandable.md#getheight)
- [getLocalBounds](DMenuSidedItemExpandable.md#getlocalbounds)
- [getParentOfSize](DMenuSidedItemExpandable.md#getparentofsize)
- [getSpaceLeft](DMenuSidedItemExpandable.md#getspaceleft)
- [getThemeDefault](DMenuSidedItemExpandable.md#getthemedefault)
- [getType](DMenuSidedItemExpandable.md#gettype)
- [getWeightTotal](DMenuSidedItemExpandable.md#getweighttotal)
- [getWidth](DMenuSidedItemExpandable.md#getwidth)
- [getX](DMenuSidedItemExpandable.md#getx)
- [getY](DMenuSidedItemExpandable.md#gety)
- [hasClearType](DMenuSidedItemExpandable.md#hascleartype)
- [hasClearTypeAfter](DMenuSidedItemExpandable.md#hascleartypeafter)
- [hasClearTypeBefore](DMenuSidedItemExpandable.md#hascleartypebefore)
- [hasDirty](DMenuSidedItemExpandable.md#hasdirty)
- [hasRefitableHeight](DMenuSidedItemExpandable.md#hasrefitableheight)
- [hasRefitableWidth](DMenuSidedItemExpandable.md#hasrefitablewidth)
- [hide](DMenuSidedItemExpandable.md#hide)
- [init](DMenuSidedItemExpandable.md#init)
- [initReflowable](DMenuSidedItemExpandable.md#initreflowable)
- [isDirty](DMenuSidedItemExpandable.md#isdirty)
- [isEventTarget](DMenuSidedItemExpandable.md#iseventtarget)
- [isHidden](DMenuSidedItemExpandable.md#ishidden)
- [isHierarchyDirty](DMenuSidedItemExpandable.md#ishierarchydirty)
- [isRefitable](DMenuSidedItemExpandable.md#isrefitable)
- [isShown](DMenuSidedItemExpandable.md#isshown)
- [listenerCount](DMenuSidedItemExpandable.md#listenercount)
- [listeners](DMenuSidedItemExpandable.md#listeners)
- [newBody](DMenuSidedItemExpandable.md#newbody)
- [newHeader](DMenuSidedItemExpandable.md#newheader)
- [newItems](DMenuSidedItemExpandable.md#newitems)
- [newPadding](DMenuSidedItemExpandable.md#newpadding)
- [off](DMenuSidedItemExpandable.md#off)
- [on](DMenuSidedItemExpandable.md#on)
- [onActivated](DMenuSidedItemExpandable.md#onactivated)
- [onBlur](DMenuSidedItemExpandable.md#onblur)
- [onChildBlur](DMenuSidedItemExpandable.md#onchildblur)
- [onChildFocus](DMenuSidedItemExpandable.md#onchildfocus)
- [onChildrenChange](DMenuSidedItemExpandable.md#onchildrenchange)
- [onDblClick](DMenuSidedItemExpandable.md#ondblclick)
- [onDeactivated](DMenuSidedItemExpandable.md#ondeactivated)
- [onDown](DMenuSidedItemExpandable.md#ondown)
- [onDownThis](DMenuSidedItemExpandable.md#ondownthis)
- [onFocus](DMenuSidedItemExpandable.md#onfocus)
- [onHierarchyDirty](DMenuSidedItemExpandable.md#onhierarchydirty)
- [onKeyDown](DMenuSidedItemExpandable.md#onkeydown)
- [onKeyUp](DMenuSidedItemExpandable.md#onkeyup)
- [onMove](DMenuSidedItemExpandable.md#onmove)
- [onOut](DMenuSidedItemExpandable.md#onout)
- [onOver](DMenuSidedItemExpandable.md#onover)
- [onParentMove](DMenuSidedItemExpandable.md#onparentmove)
- [onParentResize](DMenuSidedItemExpandable.md#onparentresize)
- [onRefit](DMenuSidedItemExpandable.md#onrefit)
- [onReflow](DMenuSidedItemExpandable.md#onreflow)
- [onResize](DMenuSidedItemExpandable.md#onresize)
- [onScale](DMenuSidedItemExpandable.md#onscale)
- [onShortcut](DMenuSidedItemExpandable.md#onshortcut)
- [onSkew](DMenuSidedItemExpandable.md#onskew)
- [onStateChange](DMenuSidedItemExpandable.md#onstatechange)
- [onUp](DMenuSidedItemExpandable.md#onup)
- [onUpThis](DMenuSidedItemExpandable.md#onupthis)
- [onWheel](DMenuSidedItemExpandable.md#onwheel)
- [once](DMenuSidedItemExpandable.md#once)
- [open](DMenuSidedItemExpandable.md#open)
- [reflow](DMenuSidedItemExpandable.md#reflow)
- [removeAllListeners](DMenuSidedItemExpandable.md#removealllisteners)
- [removeChild](DMenuSidedItemExpandable.md#removechild)
- [removeChildAt](DMenuSidedItemExpandable.md#removechildat)
- [removeChildren](DMenuSidedItemExpandable.md#removechildren)
- [removeListener](DMenuSidedItemExpandable.md#removelistener)
- [render](DMenuSidedItemExpandable.md#render)
- [renderAdvanced](DMenuSidedItemExpandable.md#renderadvanced)
- [resize](DMenuSidedItemExpandable.md#resize)
- [setChildIndex](DMenuSidedItemExpandable.md#setchildindex)
- [setFocused](DMenuSidedItemExpandable.md#setfocused)
- [setHeight](DMenuSidedItemExpandable.md#setheight)
- [setParent](DMenuSidedItemExpandable.md#setparent)
- [setTransform](DMenuSidedItemExpandable.md#settransform)
- [setWidth](DMenuSidedItemExpandable.md#setwidth)
- [setX](DMenuSidedItemExpandable.md#setx)
- [setY](DMenuSidedItemExpandable.md#sety)
- [show](DMenuSidedItemExpandable.md#show)
- [sortChildren](DMenuSidedItemExpandable.md#sortchildren)
- [swapChildren](DMenuSidedItemExpandable.md#swapchildren)
- [toBody](DMenuSidedItemExpandable.md#tobody)
- [toCornerMaskColumn](DMenuSidedItemExpandable.md#tocornermaskcolumn)
- [toCornerMaskRow](DMenuSidedItemExpandable.md#tocornermaskrow)
- [toCursor](DMenuSidedItemExpandable.md#tocursor)
- [toDirty](DMenuSidedItemExpandable.md#todirty)
- [toGlobal](DMenuSidedItemExpandable.md#toglobal)
- [toHasDirty](DMenuSidedItemExpandable.md#tohasdirty)
- [toHeader](DMenuSidedItemExpandable.md#toheader)
- [toHierarchyDirty](DMenuSidedItemExpandable.md#tohierarchydirty)
- [toLocal](DMenuSidedItemExpandable.md#tolocal)
- [toParentHasDirty](DMenuSidedItemExpandable.md#toparenthasdirty)
- [toParentHierarchyDirty](DMenuSidedItemExpandable.md#toparenthierarchydirty)
- [toParentResized](DMenuSidedItemExpandable.md#toparentresized)
- [toggle](DMenuSidedItemExpandable.md#toggle)
- [updateTransform](DMenuSidedItemExpandable.md#updatetransform)
- [mixin](DMenuSidedItemExpandable.md#mixin)

## Constructors

### constructor

• **new DMenuSidedItemExpandable**\<`VALUE`, `THEME`, `OPTIONS`\>(`options?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemExpandable`](../interfaces/DThemeMenuItemExpandable.md) = [`DThemeMenuItemExpandable`](../interfaces/DThemeMenuItemExpandable.md) |
| `OPTIONS` | extends [`DMenuItemExpandableOptions`](../interfaces/DMenuItemExpandableOptions.md)\<`VALUE`, `THEME`\> = [`DMenuItemExpandableOptions`](../interfaces/DMenuItemExpandableOptions.md)\<`VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[constructor](DMenuItemExpandable.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:798](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L798)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_accessibleActive](DMenuItemExpandable.md#_accessibleactive)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[_accessibleDiv](DMenuItemExpandable.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_auto](DMenuItemExpandable.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_background](DMenuItemExpandable.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_body

• `Protected` **\_body**: `DisplayObject`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_body](DMenuItemExpandable.md#_body)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L43)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_border](DMenuItemExpandable.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_bounds](DMenuItemExpandable.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_boundsID](DMenuItemExpandable.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_boundsRect](DMenuItemExpandable.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_clearType](DMenuItemExpandable.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_corner](DMenuItemExpandable.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cornerAdjust

• `Protected` **\_cornerAdjust**: `boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_cornerAdjust](DMenuItemExpandable.md#_corneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L126)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_cursor](DMenuItemExpandable.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_destroyed](DMenuItemExpandable.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_direction

• `Protected` **\_direction**: [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_direction](DMenuItemExpandable.md#_direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L128)

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_enabledFilters](DMenuItemExpandable.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_header

• `Protected` **\_header**: `DisplayObject`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_header](DMenuItemExpandable.md#_header)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L42)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_lastDownPoint](DMenuItemExpandable.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_lastSortedIndex](DMenuItemExpandable.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_localBounds](DMenuItemExpandable.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_localBoundsRect](DMenuItemExpandable.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_margin

• `Protected` **\_margin**: [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_margin](DMenuItemExpandable.md#_margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L125)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_mask](DMenuItemExpandable.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_multiplicity

• `Protected` **\_multiplicity**: `number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_multiplicity](DMenuItemExpandable.md#_multiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L127)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_options](DMenuItemExpandable.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_outline](DMenuItemExpandable.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_padding](DMenuItemExpandable.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_reflowable](DMenuItemExpandable.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_reverse

• `Protected` **\_reverse**: `boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_reverse](DMenuItemExpandable.md#_reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L129)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_shortcuts](DMenuItemExpandable.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_snippet](DMenuItemExpandable.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_tempDisplayObjectParent](DMenuItemExpandable.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_title](DMenuItemExpandable.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_zIndex](DMenuItemExpandable.md#_zindex)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[accessible](DMenuItemExpandable.md#accessible)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[accessibleChildren](DMenuItemExpandable.md#accessiblechildren)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[accessibleHint](DMenuItemExpandable.md#accessiblehint)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[accessiblePointerEvents](DMenuItemExpandable.md#accessiblepointerevents)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[accessibleTitle](DMenuItemExpandable.md#accessibletitle)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[accessibleType](DMenuItemExpandable.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[alpha](DMenuItemExpandable.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[angle](DMenuItemExpandable.md#angle)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[buttonMode](DMenuItemExpandable.md#buttonmode)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[cacheAsBitmap](DMenuItemExpandable.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[children](DMenuItemExpandable.md#children)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[cursor](DMenuItemExpandable.md#cursor)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[filterArea](DMenuItemExpandable.md#filterarea)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[filters](DMenuItemExpandable.md#filters)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[hitArea](DMenuItemExpandable.md#hitarea)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[interactive](DMenuItemExpandable.md#interactive)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[interactiveChildren](DMenuItemExpandable.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[isMask](DMenuItemExpandable.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[isSprite](DMenuItemExpandable.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[localTransform](DMenuItemExpandable.md#localtransform)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[mask](DMenuItemExpandable.md#mask)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[name](DMenuItemExpandable.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[parent](DMenuItemExpandable.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[pivot](DMenuItemExpandable.md#pivot)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[renderable](DMenuItemExpandable.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[rotation](DMenuItemExpandable.md#rotation)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[sortDirty](DMenuItemExpandable.md#sortdirty)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[sortableChildren](DMenuItemExpandable.md#sortablechildren)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[transform](DMenuItemExpandable.md#transform)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[visible](DMenuItemExpandable.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[worldAlpha](DMenuItemExpandable.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[worldTransform](DMenuItemExpandable.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[worldVisible](DMenuItemExpandable.md#worldvisible)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[zIndex](DMenuItemExpandable.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### CORNER\_ADJUST\_WORK

▪ `Static` **CORNER\_ADJUST\_WORK**: ``null`` \| `Float32Array` = `null`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[CORNER_ADJUST_WORK](DMenuItemExpandable.md#corner_adjust_work)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L123)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[WORK_CONTAINS_POINT](DMenuItemExpandable.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DMenuItemExpandable.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DMenuItemExpandable.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DMenuItemExpandable.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandable.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DMenuItemExpandable.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

___

### margin

• `get` **margin**(): [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Returns

[`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

DMenuItemExpandable.margin

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L142)

___

### multiplicity

• `get` **multiplicity**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandable.multiplicity

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L146)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DMenuItemExpandable.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DMenuItemExpandable.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DMenuItemExpandable.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1455)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItemExpandable.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DMenuItemExpandable.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItemExpandable.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1446](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1446)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DMenuItemExpandable.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1845](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1845)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DMenuItemExpandable.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItemExpandable.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1451)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DMenuItemExpandable.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DMenuItemExpandable.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DMenuItemExpandable.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DMenuItemExpandable.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DMenuItemExpandable.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DMenuItemExpandable.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DMenuItemExpandable.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1238)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DMenuItemExpandable.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandable.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandable.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DMenuItemExpandable.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandable.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1243)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DMenuItemExpandable.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1247)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandable.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1283)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DMenuItemExpandable.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1287)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_calculateBounds](DMenuItemExpandable.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2072](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2072)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[_recursivePostUpdateTransform](DMenuItemExpandable.md#_recursivepostupdatetransform)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[_render](DMenuItemExpandable.md#_render)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[addChild](DMenuItemExpandable.md#addchild)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[addChildAt](DMenuItemExpandable.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[addListener](DMenuItemExpandable.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25521

▸ **addListener**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[addListener](DMenuItemExpandable.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### addSpace

▸ **addSpace**(`options?`): [`DLayoutSpace`](DLayoutSpace.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\> |

#### Returns

[`DLayoutSpace`](DLayoutSpace.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[addSpace](DMenuItemExpandable.md#addspace)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L804)

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[applyTitle](DMenuItemExpandable.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1492)

___

### blur

▸ **blur**(`recursively?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[blur](DMenuItemExpandable.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1598)

___

### calcSpaceLeft

▸ **calcSpaceLeft**(`isOn`, `size`, `padding`, `margin`): `number`

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

[DMenuItemExpandable](DMenuItemExpandable.md).[calcSpaceLeft](DMenuItemExpandable.md#calcspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L261)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[calculateBounds](DMenuItemExpandable.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[close](DMenuItemExpandable.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L122)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[containerUpdateTransform](DMenuItemExpandable.md#containerupdatetransform)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[containsGlobalPoint](DMenuItemExpandable.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2086](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2086)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[containsLocalPoint](DMenuItemExpandable.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2090](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2090)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[containsPoint](DMenuItemExpandable.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2077](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2077)

___

### countColumn

▸ **countColumn**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[countColumn](DMenuItemExpandable.md#countcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L760)

___

### countRow

▸ **countRow**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[countRow](DMenuItemExpandable.md#countrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:718](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L718)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[destroy](DMenuItemExpandable.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2110)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[disableTempParent](DMenuItemExpandable.md#disabletempparent)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[displayObjectUpdateTransform](DMenuItemExpandable.md#displayobjectupdatetransform)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[emit](DMenuItemExpandable.md#emit)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[enableTempParent](DMenuItemExpandable.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[eventNames](DMenuItemExpandable.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### findColumnIndexNext

▸ **findColumnIndexNext**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[findColumnIndexNext](DMenuItemExpandable.md#findcolumnindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:699](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L699)

___

### findColumnIndexPrevious

▸ **findColumnIndexPrevious**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[findColumnIndexPrevious](DMenuItemExpandable.md#findcolumnindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L686)

___

### findRowIndexNext

▸ **findRowIndexNext**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[findRowIndexNext](DMenuItemExpandable.md#findrowindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L741)

___

### findRowIndexPrevious

▸ **findRowIndexPrevious**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[findRowIndexPrevious](DMenuItemExpandable.md#findrowindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L728)

___

### focus

▸ **focus**(): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[focus](DMenuItemExpandable.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1594)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[focusOnClosest](DMenuItemExpandable.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2012)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[getBounds](DMenuItemExpandable.md#getbounds)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[getChildAt](DMenuItemExpandable.md#getchildat)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[getChildByName](DMenuItemExpandable.md#getchildbyname)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[getChildIndex](DMenuItemExpandable.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[getClearType](DMenuItemExpandable.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1207)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[getClippingRect](DMenuItemExpandable.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2103)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[getGlobalPosition](DMenuItemExpandable.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[getHeight](DMenuItemExpandable.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[getLocalBounds](DMenuItemExpandable.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[getParentOfSize](DMenuItemExpandable.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1879](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1879)

___

### getSpaceLeft

▸ **getSpaceLeft**(`baseSize`, `margin`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseSize` | `number` |
| `margin` | `number` |

#### Returns

`number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[getSpaceLeft](DMenuItemExpandable.md#getspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L184)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[getThemeDefault](DMenuItemExpandable.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2063)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DMenuItemExpandable](DMenuItemExpandable.md).[getType](DMenuItemExpandable.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable.ts#L33)

___

### getWeightTotal

▸ **getWeightTotal**(): `number`

#### Returns

`number`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[getWeightTotal](DMenuItemExpandable.md#getweighttotal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L150)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[getWidth](DMenuItemExpandable.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[getX](DMenuItemExpandable.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[getY](DMenuItemExpandable.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

___

### hasClearType

▸ **hasClearType**(`children`, `index`, `clearType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |
| `clearType` | `number` |

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[hasClearType](DMenuItemExpandable.md#hascleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:669](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L669)

___

### hasClearTypeAfter

▸ **hasClearTypeAfter**(`children`, `index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[hasClearTypeAfter](DMenuItemExpandable.md#hascleartypeafter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L665)

___

### hasClearTypeBefore

▸ **hasClearTypeBefore**(`children`, `index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[hasClearTypeBefore](DMenuItemExpandable.md#hascleartypebefore)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L661)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[hasDirty](DMenuItemExpandable.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[hasRefitableHeight](DMenuItemExpandable.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1823](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1823)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[hasRefitableWidth](DMenuItemExpandable.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1835](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1835)

___

### hide

▸ **hide**(): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[hide](DMenuItemExpandable.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1512)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[init](DMenuItemExpandable.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L45)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[initReflowable](DMenuItemExpandable.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[isDirty](DMenuItemExpandable.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[isEventTarget](DMenuItemExpandable.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1957](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1957)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[isHidden](DMenuItemExpandable.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1522)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[isHierarchyDirty](DMenuItemExpandable.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1568)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[isRefitable](DMenuItemExpandable.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[isShown](DMenuItemExpandable.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1508)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[listenerCount](DMenuItemExpandable.md#listenercount)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[listeners](DMenuItemExpandable.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newBody

▸ **newBody**(`theme`, `options?`): `Container`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DMenuItemExpandableBodyOptions`](../interfaces/DMenuItemExpandableBodyOptions.md)\<[`DThemeMenuItemExpandableBody`](../interfaces/DThemeMenuItemExpandableBody.md)\> |

#### Returns

`Container`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[newBody](DMenuItemExpandable.md#newbody)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L114)

___

### newHeader

▸ **newHeader**(`theme`, `options?`): `DisplayObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DMenuItemExpandableHeaderOptions`](../interfaces/DMenuItemExpandableHeaderOptions.md)\<`VALUE`, [`DThemeMenuItemExpandableHeader`](../interfaces/DThemeMenuItemExpandableHeader.md)\> |

#### Returns

`DisplayObject`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[newHeader](DMenuItemExpandable.md#newheader)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L95)

___

### newItems

▸ **newItems**(`body`, `sticky`, `theme`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Container` |
| `sticky` | `boolean` |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |

#### Returns

`void`

#### Overrides

[DMenuItemExpandable](DMenuItemExpandable.md).[newItems](DMenuItemExpandable.md#newitems)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable.ts#L22)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[newPadding](DMenuItemExpandable.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[off](DMenuItemExpandable.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25534

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[on](DMenuItemExpandable.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25530

▸ **on**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[on](DMenuItemExpandable.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onActivated

▸ **onActivated**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[onActivated](DMenuItemExpandable.md#onactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L130)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[onBlur](DMenuItemExpandable.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1671)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onChildBlur](DMenuItemExpandable.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1664](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1664)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onChildFocus](DMenuItemExpandable.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1650)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[onChildrenChange](DMenuItemExpandable.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onDblClick](DMenuItemExpandable.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2044](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2044)

___

### onDeactivated

▸ **onDeactivated**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[onDeactivated](DMenuItemExpandable.md#ondeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L139)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onDown](DMenuItemExpandable.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1971](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1971)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onDownThis](DMenuItemExpandable.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1978](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1978)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[onFocus](DMenuItemExpandable.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1657)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[onHierarchyDirty](DMenuItemExpandable.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1572)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onKeyDown](DMenuItemExpandable.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L162)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onKeyUp](DMenuItemExpandable.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1951](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1951)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onMove](DMenuItemExpandable.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onOut](DMenuItemExpandable.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2035](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2035)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onOver](DMenuItemExpandable.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2021](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2021)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onParentMove](DMenuItemExpandable.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1935](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1935)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onParentResize](DMenuItemExpandable.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1894](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1894)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[onRefit](DMenuItemExpandable.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:265](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L265)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[onReflow](DMenuItemExpandable.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1841](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1841)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onResize](DMenuItemExpandable.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1211)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onScale](DMenuItemExpandable.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1228)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onShortcut](DMenuItemExpandable.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1133)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onSkew](DMenuItemExpandable.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onStateChange](DMenuItemExpandable.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L148)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onUp](DMenuItemExpandable.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1989](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1989)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onUpThis](DMenuItemExpandable.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1996](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1996)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[onWheel](DMenuItemExpandable.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1940](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1940)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[once](DMenuItemExpandable.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25527

▸ **once**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[once](DMenuItemExpandable.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[open](DMenuItemExpandable.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L118)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[reflow](DMenuItemExpandable.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1704)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[removeAllListeners](DMenuItemExpandable.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[removeAllListeners](DMenuItemExpandable.md#removealllisteners)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[removeChild](DMenuItemExpandable.md#removechild)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[removeChildAt](DMenuItemExpandable.md#removechildat)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[removeChildren](DMenuItemExpandable.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8423

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[removeListener](DMenuItemExpandable.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25513

▸ **removeListener**(`event`, `fn?`, `context?`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[removeListener](DMenuItemExpandable.md#removelistener)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[render](DMenuItemExpandable.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2053](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2053)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[renderAdvanced](DMenuItemExpandable.md#renderadvanced)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[resize](DMenuItemExpandable.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[setChildIndex](DMenuItemExpandable.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8394

___

### setFocused

▸ **setFocused**(`isFocused`): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[setFocused](DMenuItemExpandable.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[setHeight](DMenuItemExpandable.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[setParent](DMenuItemExpandable.md#setparent)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[setTransform](DMenuItemExpandable.md#settransform)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[setWidth](DMenuItemExpandable.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[setX](DMenuItemExpandable.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1260)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[setY](DMenuItemExpandable.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1300)

___

### show

▸ **show**(): [`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuSidedItemExpandable`](DMenuSidedItemExpandable.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[show](DMenuItemExpandable.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1499)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[sortChildren](DMenuItemExpandable.md#sortchildren)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[swapChildren](DMenuItemExpandable.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

___

### toBody

▸ **toBody**(`theme`, `options?`): `Container`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`Container`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[toBody](DMenuItemExpandable.md#tobody)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L102)

___

### toCornerMaskColumn

▸ **toCornerMaskColumn**(`i0`, `i1`, `i2`, `n`): `number`

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

[DMenuItemExpandable](DMenuItemExpandable.md).[toCornerMaskColumn](DMenuItemExpandable.md#tocornermaskcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:770](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L770)

___

### toCornerMaskRow

▸ **toCornerMaskRow**(`i0`, `i1`, `i2`, `n`): `number`

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

[DMenuItemExpandable](DMenuItemExpandable.md).[toCornerMaskRow](DMenuItemExpandable.md#tocornermaskrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-layout.ts#L787)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[toCursor](DMenuItemExpandable.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[toDirty](DMenuItemExpandable.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1526)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[toGlobal](DMenuItemExpandable.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[toHasDirty](DMenuItemExpandable.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1535](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1535)

___

### toHeader

▸ **toHeader**(`theme`, `options?`): `DisplayObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`DisplayObject`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[toHeader](DMenuItemExpandable.md#toheader)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L84)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[toHierarchyDirty](DMenuItemExpandable.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1551)

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

[DMenuItemExpandable](DMenuItemExpandable.md).[toLocal](DMenuItemExpandable.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[toParentHasDirty](DMenuItemExpandable.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[toParentHierarchyDirty](DMenuItemExpandable.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1561](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1561)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[toParentResized](DMenuItemExpandable.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1872)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[toggle](DMenuItemExpandable.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L126)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DMenuItemExpandable](DMenuItemExpandable.md).[updateTransform](DMenuItemExpandable.md#updatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8431

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

[DMenuItemExpandable](DMenuItemExpandable.md).[mixin](DMenuItemExpandable.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
