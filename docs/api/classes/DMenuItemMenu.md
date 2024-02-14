[Winter Cardinal UI - v0.407.0](../index.md) / DMenuItemMenu

# Class: DMenuItemMenu\<VALUE, THEME, OPTIONS\>

A base class for UI classes with an image support.
See [DImageBaseEvents](../interfaces/DImageBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemMenu`](../interfaces/DThemeMenuItemMenu.md) = [`DThemeMenuItemMenu`](../interfaces/DThemeMenuItemMenu.md) |
| `OPTIONS` | extends [`DMenuItemMenuOptions`](../interfaces/DMenuItemMenuOptions.md)\<`VALUE`, `THEME`\> = [`DMenuItemMenuOptions`](../interfaces/DMenuItemMenuOptions.md)\<`VALUE`, `THEME`\> |

## Hierarchy

- [`DMenuItem`](DMenuItem.md)\<`VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DMenuItemMenu`**

  ↳↳ [`DMenuItemExpandableItemMenu`](DMenuItemExpandableItemMenu.md)

  ↳↳ [`DMenuSidedItemMenu`](DMenuSidedItemMenu.md)

## Table of contents

### Constructors

- [constructor](DMenuItemMenu.md#constructor)

### Properties

- [\_accessibleActive](DMenuItemMenu.md#_accessibleactive)
- [\_accessibleDiv](DMenuItemMenu.md#_accessiblediv)
- [\_auto](DMenuItemMenu.md#_auto)
- [\_background](DMenuItemMenu.md#_background)
- [\_border](DMenuItemMenu.md#_border)
- [\_bounds](DMenuItemMenu.md#_bounds)
- [\_boundsID](DMenuItemMenu.md#_boundsid)
- [\_boundsRect](DMenuItemMenu.md#_boundsrect)
- [\_clearType](DMenuItemMenu.md#_cleartype)
- [\_corner](DMenuItemMenu.md#_corner)
- [\_cursor](DMenuItemMenu.md#_cursor)
- [\_destroyed](DMenuItemMenu.md#_destroyed)
- [\_enabledFilters](DMenuItemMenu.md#_enabledfilters)
- [\_image](DMenuItemMenu.md#_image)
- [\_lastDownPoint](DMenuItemMenu.md#_lastdownpoint)
- [\_lastSortedIndex](DMenuItemMenu.md#_lastsortedindex)
- [\_localBounds](DMenuItemMenu.md#_localbounds)
- [\_localBoundsRect](DMenuItemMenu.md#_localboundsrect)
- [\_mask](DMenuItemMenu.md#_mask)
- [\_menu](DMenuItemMenu.md#_menu)
- [\_options](DMenuItemMenu.md#_options)
- [\_outline](DMenuItemMenu.md#_outline)
- [\_overflowMask](DMenuItemMenu.md#_overflowmask)
- [\_padding](DMenuItemMenu.md#_padding)
- [\_reflowable](DMenuItemMenu.md#_reflowable)
- [\_shortcuts](DMenuItemMenu.md#_shortcuts)
- [\_snippet](DMenuItemMenu.md#_snippet)
- [\_tempDisplayObjectParent](DMenuItemMenu.md#_tempdisplayobjectparent)
- [\_text](DMenuItemMenu.md#_text)
- [\_title](DMenuItemMenu.md#_title)
- [\_value](DMenuItemMenu.md#_value)
- [\_zIndex](DMenuItemMenu.md#_zindex)
- [accessible](DMenuItemMenu.md#accessible)
- [accessibleChildren](DMenuItemMenu.md#accessiblechildren)
- [accessibleHint](DMenuItemMenu.md#accessiblehint)
- [accessiblePointerEvents](DMenuItemMenu.md#accessiblepointerevents)
- [accessibleTitle](DMenuItemMenu.md#accessibletitle)
- [accessibleType](DMenuItemMenu.md#accessibletype)
- [alpha](DMenuItemMenu.md#alpha)
- [angle](DMenuItemMenu.md#angle)
- [buttonMode](DMenuItemMenu.md#buttonmode)
- [cacheAsBitmap](DMenuItemMenu.md#cacheasbitmap)
- [children](DMenuItemMenu.md#children)
- [cursor](DMenuItemMenu.md#cursor)
- [filterArea](DMenuItemMenu.md#filterarea)
- [filters](DMenuItemMenu.md#filters)
- [hitArea](DMenuItemMenu.md#hitarea)
- [interactive](DMenuItemMenu.md#interactive)
- [interactiveChildren](DMenuItemMenu.md#interactivechildren)
- [isMask](DMenuItemMenu.md#ismask)
- [isSprite](DMenuItemMenu.md#issprite)
- [localTransform](DMenuItemMenu.md#localtransform)
- [mask](DMenuItemMenu.md#mask)
- [name](DMenuItemMenu.md#name)
- [parent](DMenuItemMenu.md#parent)
- [pivot](DMenuItemMenu.md#pivot)
- [renderable](DMenuItemMenu.md#renderable)
- [rotation](DMenuItemMenu.md#rotation)
- [sortDirty](DMenuItemMenu.md#sortdirty)
- [sortableChildren](DMenuItemMenu.md#sortablechildren)
- [transform](DMenuItemMenu.md#transform)
- [visible](DMenuItemMenu.md#visible)
- [worldAlpha](DMenuItemMenu.md#worldalpha)
- [worldTransform](DMenuItemMenu.md#worldtransform)
- [worldVisible](DMenuItemMenu.md#worldvisible)
- [zIndex](DMenuItemMenu.md#zindex)
- [LAYOUTER](DMenuItemMenu.md#layouter)
- [WORK\_CONTAINS\_POINT](DMenuItemMenu.md#work_contains_point)

### Accessors

- [background](DMenuItemMenu.md#background)
- [border](DMenuItemMenu.md#border)
- [corner](DMenuItemMenu.md#corner)
- [height](DMenuItemMenu.md#height)
- [image](DMenuItemMenu.md#image)
- [menu](DMenuItemMenu.md#menu)
- [options](DMenuItemMenu.md#options)
- [outline](DMenuItemMenu.md#outline)
- [padding](DMenuItemMenu.md#padding)
- [position](DMenuItemMenu.md#position)
- [reflowable](DMenuItemMenu.md#reflowable)
- [scale](DMenuItemMenu.md#scale)
- [shadow](DMenuItemMenu.md#shadow)
- [skew](DMenuItemMenu.md#skew)
- [snippet](DMenuItemMenu.md#snippet)
- [state](DMenuItemMenu.md#state)
- [text](DMenuItemMenu.md#text)
- [theme](DMenuItemMenu.md#theme)
- [title](DMenuItemMenu.md#title)
- [type](DMenuItemMenu.md#type)
- [unsafe](DMenuItemMenu.md#unsafe)
- [value](DMenuItemMenu.md#value)
- [weight](DMenuItemMenu.md#weight)
- [width](DMenuItemMenu.md#width)
- [x](DMenuItemMenu.md#x)
- [y](DMenuItemMenu.md#y)

### Methods

- [\_calculateBounds](DMenuItemMenu.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DMenuItemMenu.md#_recursivepostupdatetransform)
- [\_render](DMenuItemMenu.md#_render)
- [activate](DMenuItemMenu.md#activate)
- [addChild](DMenuItemMenu.md#addchild)
- [addChildAt](DMenuItemMenu.md#addchildat)
- [addListener](DMenuItemMenu.md#addlistener)
- [applyTitle](DMenuItemMenu.md#applytitle)
- [blur](DMenuItemMenu.md#blur)
- [calculateBounds](DMenuItemMenu.md#calculatebounds)
- [close](DMenuItemMenu.md#close)
- [containerUpdateTransform](DMenuItemMenu.md#containerupdatetransform)
- [containsGlobalPoint](DMenuItemMenu.md#containsglobalpoint)
- [containsLocalPoint](DMenuItemMenu.md#containslocalpoint)
- [containsPoint](DMenuItemMenu.md#containspoint)
- [destroy](DMenuItemMenu.md#destroy)
- [disableTempParent](DMenuItemMenu.md#disabletempparent)
- [displayObjectUpdateTransform](DMenuItemMenu.md#displayobjectupdatetransform)
- [emit](DMenuItemMenu.md#emit)
- [enableTempParent](DMenuItemMenu.md#enabletempparent)
- [eventNames](DMenuItemMenu.md#eventnames)
- [focus](DMenuItemMenu.md#focus)
- [focusOnClosest](DMenuItemMenu.md#focusonclosest)
- [getBounds](DMenuItemMenu.md#getbounds)
- [getChildAt](DMenuItemMenu.md#getchildat)
- [getChildByName](DMenuItemMenu.md#getchildbyname)
- [getChildIndex](DMenuItemMenu.md#getchildindex)
- [getClearType](DMenuItemMenu.md#getcleartype)
- [getClippingRect](DMenuItemMenu.md#getclippingrect)
- [getCloseable](DMenuItemMenu.md#getcloseable)
- [getContext](DMenuItemMenu.md#getcontext)
- [getGlobalPosition](DMenuItemMenu.md#getglobalposition)
- [getHeight](DMenuItemMenu.md#getheight)
- [getImage](DMenuItemMenu.md#getimage)
- [getLayouter](DMenuItemMenu.md#getlayouter)
- [getLocalBounds](DMenuItemMenu.md#getlocalbounds)
- [getOverflowMask](DMenuItemMenu.md#getoverflowmask)
- [getParentOfSize](DMenuItemMenu.md#getparentofsize)
- [getSelection](DMenuItemMenu.md#getselection)
- [getText](DMenuItemMenu.md#gettext)
- [getThemeDefault](DMenuItemMenu.md#getthemedefault)
- [getType](DMenuItemMenu.md#gettype)
- [getWidth](DMenuItemMenu.md#getwidth)
- [getX](DMenuItemMenu.md#getx)
- [getY](DMenuItemMenu.md#gety)
- [hasDirty](DMenuItemMenu.md#hasdirty)
- [hasRefitableHeight](DMenuItemMenu.md#hasrefitableheight)
- [hasRefitableWidth](DMenuItemMenu.md#hasrefitablewidth)
- [hasSelection](DMenuItemMenu.md#hasselection)
- [hide](DMenuItemMenu.md#hide)
- [init](DMenuItemMenu.md#init)
- [initHover](DMenuItemMenu.md#inithover)
- [initReflowable](DMenuItemMenu.md#initreflowable)
- [isDirty](DMenuItemMenu.md#isdirty)
- [isEventTarget](DMenuItemMenu.md#iseventtarget)
- [isHidden](DMenuItemMenu.md#ishidden)
- [isHierarchyDirty](DMenuItemMenu.md#ishierarchydirty)
- [isRefitable](DMenuItemMenu.md#isrefitable)
- [isShown](DMenuItemMenu.md#isshown)
- [listenerCount](DMenuItemMenu.md#listenercount)
- [listeners](DMenuItemMenu.md#listeners)
- [newImage](DMenuItemMenu.md#newimage)
- [newMenu](DMenuItemMenu.md#newmenu)
- [newOverflowMask](DMenuItemMenu.md#newoverflowmask)
- [newPadding](DMenuItemMenu.md#newpadding)
- [newText](DMenuItemMenu.md#newtext)
- [off](DMenuItemMenu.md#off)
- [on](DMenuItemMenu.md#on)
- [onBlur](DMenuItemMenu.md#onblur)
- [onChildBlur](DMenuItemMenu.md#onchildblur)
- [onChildFocus](DMenuItemMenu.md#onchildfocus)
- [onChildrenChange](DMenuItemMenu.md#onchildrenchange)
- [onClick](DMenuItemMenu.md#onclick)
- [onDblClick](DMenuItemMenu.md#ondblclick)
- [onDown](DMenuItemMenu.md#ondown)
- [onDownThis](DMenuItemMenu.md#ondownthis)
- [onFocus](DMenuItemMenu.md#onfocus)
- [onHierarchyDirty](DMenuItemMenu.md#onhierarchydirty)
- [onKeyDown](DMenuItemMenu.md#onkeydown)
- [onKeyDownActivate](DMenuItemMenu.md#onkeydownactivate)
- [onKeyDownArrowRight](DMenuItemMenu.md#onkeydownarrowright)
- [onKeyUp](DMenuItemMenu.md#onkeyup)
- [onMenuSelect](DMenuItemMenu.md#onmenuselect)
- [onMove](DMenuItemMenu.md#onmove)
- [onOpen](DMenuItemMenu.md#onopen)
- [onOut](DMenuItemMenu.md#onout)
- [onOver](DMenuItemMenu.md#onover)
- [onParentMove](DMenuItemMenu.md#onparentmove)
- [onParentResize](DMenuItemMenu.md#onparentresize)
- [onRefit](DMenuItemMenu.md#onrefit)
- [onReflow](DMenuItemMenu.md#onreflow)
- [onReflowTextAndImage](DMenuItemMenu.md#onreflowtextandimage)
- [onResize](DMenuItemMenu.md#onresize)
- [onScale](DMenuItemMenu.md#onscale)
- [onSelect](DMenuItemMenu.md#onselect)
- [onShortcut](DMenuItemMenu.md#onshortcut)
- [onSkew](DMenuItemMenu.md#onskew)
- [onStateChange](DMenuItemMenu.md#onstatechange)
- [onUp](DMenuItemMenu.md#onup)
- [onUpThis](DMenuItemMenu.md#onupthis)
- [onWheel](DMenuItemMenu.md#onwheel)
- [once](DMenuItemMenu.md#once)
- [open](DMenuItemMenu.md#open)
- [reflow](DMenuItemMenu.md#reflow)
- [removeAllListeners](DMenuItemMenu.md#removealllisteners)
- [removeChild](DMenuItemMenu.md#removechild)
- [removeChildAt](DMenuItemMenu.md#removechildat)
- [removeChildren](DMenuItemMenu.md#removechildren)
- [removeListener](DMenuItemMenu.md#removelistener)
- [render](DMenuItemMenu.md#render)
- [renderAdvanced](DMenuItemMenu.md#renderadvanced)
- [resize](DMenuItemMenu.md#resize)
- [setChildIndex](DMenuItemMenu.md#setchildindex)
- [setFocused](DMenuItemMenu.md#setfocused)
- [setHeight](DMenuItemMenu.md#setheight)
- [setParent](DMenuItemMenu.md#setparent)
- [setTransform](DMenuItemMenu.md#settransform)
- [setWidth](DMenuItemMenu.md#setwidth)
- [setX](DMenuItemMenu.md#setx)
- [setY](DMenuItemMenu.md#sety)
- [show](DMenuItemMenu.md#show)
- [sortChildren](DMenuItemMenu.md#sortchildren)
- [swapChildren](DMenuItemMenu.md#swapchildren)
- [toCursor](DMenuItemMenu.md#tocursor)
- [toDirty](DMenuItemMenu.md#todirty)
- [toGlobal](DMenuItemMenu.md#toglobal)
- [toHasDirty](DMenuItemMenu.md#tohasdirty)
- [toHierarchyDirty](DMenuItemMenu.md#tohierarchydirty)
- [toLocal](DMenuItemMenu.md#tolocal)
- [toMenu](DMenuItemMenu.md#tomenu)
- [toParentHasDirty](DMenuItemMenu.md#toparenthasdirty)
- [toParentHierarchyDirty](DMenuItemMenu.md#toparenthierarchydirty)
- [toParentResized](DMenuItemMenu.md#toparentresized)
- [toggle](DMenuItemMenu.md#toggle)
- [updateTransform](DMenuItemMenu.md#updatetransform)
- [mixin](DMenuItemMenu.md#mixin)

## Constructors

### constructor

• **new DMenuItemMenu**\<`VALUE`, `THEME`, `OPTIONS`\>(`options?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemMenu`](../interfaces/DThemeMenuItemMenu.md) = [`DThemeMenuItemMenu`](../interfaces/DThemeMenuItemMenu.md) |
| `OPTIONS` | extends [`DMenuItemMenuOptions`](../interfaces/DMenuItemMenuOptions.md)\<`VALUE`, `THEME`\> = [`DMenuItemMenuOptions`](../interfaces/DMenuItemMenuOptions.md)\<`VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[constructor](DMenuItem.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L28)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DMenuItem](DMenuItem.md).[_accessibleActive](DMenuItem.md#_accessibleactive)

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

[DMenuItem](DMenuItem.md).[_accessibleDiv](DMenuItem.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_auto](DMenuItem.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_background](DMenuItem.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_border](DMenuItem.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DMenuItem](DMenuItem.md).[_bounds](DMenuItem.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DMenuItem](DMenuItem.md).[_boundsID](DMenuItem.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DMenuItem](DMenuItem.md).[_boundsRect](DMenuItem.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DMenuItem](DMenuItem.md).[_clearType](DMenuItem.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_corner](DMenuItem.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[_cursor](DMenuItem.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DMenuItem](DMenuItem.md).[_destroyed](DMenuItem.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DMenuItem](DMenuItem.md).[_enabledFilters](DMenuItem.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_image

• `Protected` `Optional` **\_image**: [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_image](DMenuItem.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L61)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DMenuItem](DMenuItem.md).[_lastDownPoint](DMenuItem.md#_lastdownpoint)

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

[DMenuItem](DMenuItem.md).[_lastSortedIndex](DMenuItem.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DMenuItem](DMenuItem.md).[_localBounds](DMenuItem.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DMenuItem](DMenuItem.md).[_localBoundsRect](DMenuItem.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DMenuItem](DMenuItem.md).[_mask](DMenuItem.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_menu

• `Protected` `Optional` **\_menu**: [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L27)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DMenuItem](DMenuItem.md).[_options](DMenuItem.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_outline](DMenuItem.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_overflowMask](DMenuItem.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L57)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_padding](DMenuItem.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_reflowable](DMenuItem.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DMenuItem](DMenuItem.md).[_shortcuts](DMenuItem.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[_snippet](DMenuItem.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DMenuItem](DMenuItem.md).[_tempDisplayObjectParent](DMenuItem.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_text

• `Protected` `Optional` **\_text**: [`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[_text](DMenuItem.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L56)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DMenuItem](DMenuItem.md).[_title](DMenuItem.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_value

• `Protected` **\_value**: ``null`` \| `VALUE`

#### Inherited from

[DMenuItem](DMenuItem.md).[_value](DMenuItem.md#_value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L26)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DMenuItem](DMenuItem.md).[_zIndex](DMenuItem.md#_zindex)

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

[DMenuItem](DMenuItem.md).[accessible](DMenuItem.md#accessible)

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

[DMenuItem](DMenuItem.md).[accessibleChildren](DMenuItem.md#accessiblechildren)

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

[DMenuItem](DMenuItem.md).[accessibleHint](DMenuItem.md#accessiblehint)

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

[DMenuItem](DMenuItem.md).[accessiblePointerEvents](DMenuItem.md#accessiblepointerevents)

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

[DMenuItem](DMenuItem.md).[accessibleTitle](DMenuItem.md#accessibletitle)

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

[DMenuItem](DMenuItem.md).[accessibleType](DMenuItem.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DMenuItem](DMenuItem.md).[alpha](DMenuItem.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DMenuItem](DMenuItem.md).[angle](DMenuItem.md#angle)

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

[DMenuItem](DMenuItem.md).[buttonMode](DMenuItem.md#buttonmode)

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

[DMenuItem](DMenuItem.md).[cacheAsBitmap](DMenuItem.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DMenuItem](DMenuItem.md).[children](DMenuItem.md#children)

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

[DMenuItem](DMenuItem.md).[cursor](DMenuItem.md#cursor)

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

[DMenuItem](DMenuItem.md).[filterArea](DMenuItem.md#filterarea)

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

[DMenuItem](DMenuItem.md).[filters](DMenuItem.md#filters)

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

[DMenuItem](DMenuItem.md).[hitArea](DMenuItem.md#hitarea)

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

[DMenuItem](DMenuItem.md).[interactive](DMenuItem.md#interactive)

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

[DMenuItem](DMenuItem.md).[interactiveChildren](DMenuItem.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DMenuItem](DMenuItem.md).[isMask](DMenuItem.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DMenuItem](DMenuItem.md).[isSprite](DMenuItem.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DMenuItem](DMenuItem.md).[localTransform](DMenuItem.md#localtransform)

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

[DMenuItem](DMenuItem.md).[mask](DMenuItem.md#mask)

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

[DMenuItem](DMenuItem.md).[name](DMenuItem.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DMenuItem](DMenuItem.md).[parent](DMenuItem.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DMenuItem](DMenuItem.md).[pivot](DMenuItem.md#pivot)

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

[DMenuItem](DMenuItem.md).[renderable](DMenuItem.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DMenuItem](DMenuItem.md).[rotation](DMenuItem.md#rotation)

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

[DMenuItem](DMenuItem.md).[sortDirty](DMenuItem.md#sortdirty)

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

[DMenuItem](DMenuItem.md).[sortableChildren](DMenuItem.md#sortablechildren)

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

[DMenuItem](DMenuItem.md).[transform](DMenuItem.md#transform)

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

[DMenuItem](DMenuItem.md).[visible](DMenuItem.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DMenuItem](DMenuItem.md).[worldAlpha](DMenuItem.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DMenuItem](DMenuItem.md).[worldTransform](DMenuItem.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DMenuItem](DMenuItem.md).[worldVisible](DMenuItem.md#worldvisible)

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

[DMenuItem](DMenuItem.md).[zIndex](DMenuItem.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[LAYOUTER](DMenuItem.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L55)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DMenuItem](DMenuItem.md).[WORK_CONTAINS_POINT](DMenuItem.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DMenuItem.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DMenuItem.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DMenuItem.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItem.height

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

DMenuItem.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

___

### image

• `get` **image**(): [`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Returns

[`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Inherited from

DMenuItem.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L68)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DMenuItem.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L80)

___

### menu

• `get` **menu**(): [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Returns

[`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L54)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DMenuItem.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DMenuItem.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DMenuItem.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1455)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItem.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DMenuItem.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItem.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1446](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1446)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DMenuItem.shadow

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

DMenuItem.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItem.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1451)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DMenuItem.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DMenuItem.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

___

### text

• `get` **text**(): [`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Returns

[`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Inherited from

DMenuItem.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L84)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DMenuItem.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L96)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DMenuItem.theme

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

DMenuItem.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DMenuItem.title

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

DMenuItem.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DMenuItem.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1238)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DMenuItem.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### value

• `get` **value**(): ``null`` \| `VALUE`

#### Returns

``null`` \| `VALUE`

#### Inherited from

DMenuItem.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L50)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `VALUE` |

#### Returns

`void`

#### Inherited from

DMenuItem.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L54)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItem.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItem.width

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

DMenuItem.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItem.x

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

DMenuItem.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1247)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItem.y

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

DMenuItem.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1287)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[_calculateBounds](DMenuItem.md#_calculatebounds)

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

[DMenuItem](DMenuItem.md).[_recursivePostUpdateTransform](DMenuItem.md#_recursivepostupdatetransform)

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

[DMenuItem](DMenuItem.md).[_render](DMenuItem.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8472

___

### activate

▸ **activate**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[activate](DMenuItem.md#activate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L46)

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

[DMenuItem](DMenuItem.md).[addChild](DMenuItem.md#addchild)

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

[DMenuItem](DMenuItem.md).[addChildAt](DMenuItem.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[addListener](DMenuItem.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25521

▸ **addListener**(`event`, `fn`, `context?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[addListener](DMenuItem.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[applyTitle](DMenuItem.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L136)

___

### blur

▸ **blur**(`recursively?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[blur](DMenuItem.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1598)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[calculateBounds](DMenuItem.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L87)

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

[DMenuItem](DMenuItem.md).[containerUpdateTransform](DMenuItem.md#containerupdatetransform)

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

[DMenuItem](DMenuItem.md).[containsGlobalPoint](DMenuItem.md#containsglobalpoint)

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

[DMenuItem](DMenuItem.md).[containsLocalPoint](DMenuItem.md#containslocalpoint)

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

[DMenuItem](DMenuItem.md).[containsPoint](DMenuItem.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2077](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2077)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[destroy](DMenuItem.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L121)

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

[DMenuItem](DMenuItem.md).[disableTempParent](DMenuItem.md#disabletempparent)

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

[DMenuItem](DMenuItem.md).[displayObjectUpdateTransform](DMenuItem.md#displayobjectupdatetransform)

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

[DMenuItem](DMenuItem.md).[emit](DMenuItem.md#emit)

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

[DMenuItem](DMenuItem.md).[enableTempParent](DMenuItem.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DMenuItem](DMenuItem.md).[eventNames](DMenuItem.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[focus](DMenuItem.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1594)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[focusOnClosest](DMenuItem.md#focusonclosest)

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

[DMenuItem](DMenuItem.md).[getBounds](DMenuItem.md#getbounds)

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

[DMenuItem](DMenuItem.md).[getChildAt](DMenuItem.md#getchildat)

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

[DMenuItem](DMenuItem.md).[getChildByName](DMenuItem.md#getchildbyname)

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

[DMenuItem](DMenuItem.md).[getChildIndex](DMenuItem.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DMenuItem](DMenuItem.md).[getClearType](DMenuItem.md#getcleartype)

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

[DMenuItem](DMenuItem.md).[getClippingRect](DMenuItem.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2103)

___

### getCloseable

▸ **getCloseable**(): ``null`` \| [`DMenuCloseable`](../interfaces/DMenuCloseable.md)

#### Returns

``null`` \| [`DMenuCloseable`](../interfaces/DMenuCloseable.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[getCloseable](DMenuItem.md#getcloseable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item.ts#L31)

___

### getContext

▸ **getContext**(): ``null`` \| [`DMenuContext`](DMenuContext.md)

#### Returns

``null`` \| [`DMenuContext`](DMenuContext.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[getContext](DMenuItem.md#getcontext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item.ts#L20)

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

[DMenuItem](DMenuItem.md).[getGlobalPosition](DMenuItem.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DMenuItem](DMenuItem.md).[getHeight](DMenuItem.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

___

### getImage

▸ **getImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[getImage](DMenuItem.md#getimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L72)

___

### getLayouter

▸ **getLayouter**(): [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Returns

[`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[getLayouter](DMenuItem.md#getlayouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L105)

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

[DMenuItem](DMenuItem.md).[getLocalBounds](DMenuItem.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DMenuItem](DMenuItem.md).[getOverflowMask](DMenuItem.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L64)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DMenuItem](DMenuItem.md).[getParentOfSize](DMenuItem.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1879](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1879)

___

### getSelection

▸ **getSelection**(): ``null`` \| [`DMenuItemBaseSelection`](../interfaces/DMenuItemBaseSelection.md)

#### Returns

``null`` \| [`DMenuItemBaseSelection`](../interfaces/DMenuItemBaseSelection.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[getSelection](DMenuItem.md#getselection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L62)

___

### getText

▸ **getText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[getText](DMenuItem.md#gettext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DMenuItem](DMenuItem.md).[getThemeDefault](DMenuItem.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2063)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DMenuItem](DMenuItem.md).[getType](DMenuItem.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L69)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DMenuItem](DMenuItem.md).[getWidth](DMenuItem.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DMenuItem](DMenuItem.md).[getX](DMenuItem.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DMenuItem](DMenuItem.md).[getY](DMenuItem.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItem](DMenuItem.md).[hasDirty](DMenuItem.md#hasdirty)

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

[DMenuItem](DMenuItem.md).[hasRefitableHeight](DMenuItem.md#hasrefitableheight)

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

[DMenuItem](DMenuItem.md).[hasRefitableWidth](DMenuItem.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1835](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1835)

___

### hasSelection

▸ **hasSelection**(`target`): target is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is Object

#### Inherited from

[DMenuItem](DMenuItem.md).[hasSelection](DMenuItem.md#hasselection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L58)

___

### hide

▸ **hide**(): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[hide](DMenuItem.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1512)

___

### init

▸ **init**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `OPTIONS` |

#### Returns

`void`

#### Overrides

[DMenuItem](DMenuItem.md).[init](DMenuItem.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L29)

___

### initHover

▸ **initHover**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `OPTIONS` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L34)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[initReflowable](DMenuItem.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItem](DMenuItem.md).[isDirty](DMenuItem.md#isdirty)

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

[DMenuItem](DMenuItem.md).[isEventTarget](DMenuItem.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1957](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1957)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItem](DMenuItem.md).[isHidden](DMenuItem.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1522)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItem](DMenuItem.md).[isHierarchyDirty](DMenuItem.md#ishierarchydirty)

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

[DMenuItem](DMenuItem.md).[isRefitable](DMenuItem.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L107)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItem](DMenuItem.md).[isShown](DMenuItem.md#isshown)

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

[DMenuItem](DMenuItem.md).[listenerCount](DMenuItem.md#listenercount)

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

[DMenuItem](DMenuItem.md).[listeners](DMenuItem.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newImage

▸ **newImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[newImage](DMenuItem.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L76)

___

### newMenu

▸ **newMenu**(`options?`): [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\> |

#### Returns

[`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L50)

___

### newOverflowMask

▸ **newOverflowMask**(): ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Returns

``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DMenuItem](DMenuItem.md).[newOverflowMask](DMenuItem.md#newoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L73)

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

[DMenuItem](DMenuItem.md).[newPadding](DMenuItem.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newText

▸ **newText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[newText](DMenuItem.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L92)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[off](DMenuItem.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25534

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[on](DMenuItem.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25530

▸ **on**(`event`, `fn`, `context?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[on](DMenuItem.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[onBlur](DMenuItem.md#onblur)

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

[DMenuItem](DMenuItem.md).[onChildBlur](DMenuItem.md#onchildblur)

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

[DMenuItem](DMenuItem.md).[onChildFocus](DMenuItem.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1650)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[onChildrenChange](DMenuItem.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

___

### onClick

▸ **onClick**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[onClick](DMenuItem.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L40)

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

[DMenuItem](DMenuItem.md).[onDblClick](DMenuItem.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2044](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2044)

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

[DMenuItem](DMenuItem.md).[onDown](DMenuItem.md#ondown)

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

[DMenuItem](DMenuItem.md).[onDownThis](DMenuItem.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1978](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1978)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[onFocus](DMenuItem.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1657)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[onHierarchyDirty](DMenuItem.md#onhierarchydirty)

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

#### Overrides

[DMenuItem](DMenuItem.md).[onKeyDown](DMenuItem.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L112)

___

### onKeyDownActivate

▸ **onKeyDownActivate**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DMenuItem](DMenuItem.md).[onKeyDownActivate](DMenuItem.md#onkeydownactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L88)

___

### onKeyDownArrowRight

▸ **onKeyDownArrowRight**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L119)

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

[DMenuItem](DMenuItem.md).[onKeyUp](DMenuItem.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1951](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1951)

___

### onMenuSelect

▸ **onMenuSelect**(`value`, `item`, `menu`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `item` | [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\> |
| `menu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L105)

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

[DMenuItem](DMenuItem.md).[onMove](DMenuItem.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### onOpen

▸ **onOpen**(`menu`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L80)

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

[DMenuItem](DMenuItem.md).[onOut](DMenuItem.md#onout)

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

[DMenuItem](DMenuItem.md).[onOver](DMenuItem.md#onover)

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

[DMenuItem](DMenuItem.md).[onParentMove](DMenuItem.md#onparentmove)

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

[DMenuItem](DMenuItem.md).[onParentResize](DMenuItem.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1894](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1894)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[onRefit](DMenuItem.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1731](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1731)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[onReflow](DMenuItem.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L100)

___

### onReflowTextAndImage

▸ **onReflowTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[onReflowTextAndImage](DMenuItem.md#onreflowtextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L92)

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

[DMenuItem](DMenuItem.md).[onResize](DMenuItem.md#onresize)

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

[DMenuItem](DMenuItem.md).[onScale](DMenuItem.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1228)

___

### onSelect

▸ **onSelect**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Overrides

[DMenuItem](DMenuItem.md).[onSelect](DMenuItem.md#onselect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L100)

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

[DMenuItem](DMenuItem.md).[onShortcut](DMenuItem.md#onshortcut)

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

[DMenuItem](DMenuItem.md).[onSkew](DMenuItem.md#onskew)

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

[DMenuItem](DMenuItem.md).[onStateChange](DMenuItem.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L87)

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

[DMenuItem](DMenuItem.md).[onUp](DMenuItem.md#onup)

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

[DMenuItem](DMenuItem.md).[onUpThis](DMenuItem.md#onupthis)

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

[DMenuItem](DMenuItem.md).[onWheel](DMenuItem.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1940](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1940)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[once](DMenuItem.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25527

▸ **once**(`event`, `fn`, `context?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[once](DMenuItem.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L73)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[reflow](DMenuItem.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1704)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[removeAllListeners](DMenuItem.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[removeAllListeners](DMenuItem.md#removealllisteners)

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

[DMenuItem](DMenuItem.md).[removeChild](DMenuItem.md#removechild)

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

[DMenuItem](DMenuItem.md).[removeChildAt](DMenuItem.md#removechildat)

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

[DMenuItem](DMenuItem.md).[removeChildren](DMenuItem.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8423

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[removeListener](DMenuItem.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25513

▸ **removeListener**(`event`, `fn?`, `context?`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[removeListener](DMenuItem.md#removelistener)

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

[DMenuItem](DMenuItem.md).[render](DMenuItem.md#render)

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

[DMenuItem](DMenuItem.md).[renderAdvanced](DMenuItem.md#renderadvanced)

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

[DMenuItem](DMenuItem.md).[resize](DMenuItem.md#resize)

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

[DMenuItem](DMenuItem.md).[setChildIndex](DMenuItem.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8394

___

### setFocused

▸ **setFocused**(`isFocused`): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[setFocused](DMenuItem.md#setfocused)

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

[DMenuItem](DMenuItem.md).[setHeight](DMenuItem.md#setheight)

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

[DMenuItem](DMenuItem.md).[setParent](DMenuItem.md#setparent)

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

[DMenuItem](DMenuItem.md).[setTransform](DMenuItem.md#settransform)

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

[DMenuItem](DMenuItem.md).[setWidth](DMenuItem.md#setwidth)

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

[DMenuItem](DMenuItem.md).[setX](DMenuItem.md#setx)

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

[DMenuItem](DMenuItem.md).[setY](DMenuItem.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1300)

___

### show

▸ **show**(): [`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuItemMenu`](DMenuItemMenu.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItem](DMenuItem.md).[show](DMenuItem.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1499)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[sortChildren](DMenuItem.md#sortchildren)

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

[DMenuItem](DMenuItem.md).[swapChildren](DMenuItem.md#swapchildren)

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

[DMenuItem](DMenuItem.md).[toCursor](DMenuItem.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItem](DMenuItem.md).[toDirty](DMenuItem.md#todirty)

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

[DMenuItem](DMenuItem.md).[toGlobal](DMenuItem.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItem](DMenuItem.md).[toHasDirty](DMenuItem.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1535](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1535)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItem](DMenuItem.md).[toHierarchyDirty](DMenuItem.md#tohierarchydirty)

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

[DMenuItem](DMenuItem.md).[toLocal](DMenuItem.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toMenu

▸ **toMenu**(`options?`): [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L42)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[toParentHasDirty](DMenuItem.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[toParentHierarchyDirty](DMenuItem.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1561](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1561)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[toParentResized](DMenuItem.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1872)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L91)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DMenuItem](DMenuItem.md).[updateTransform](DMenuItem.md#updatetransform)

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

[DMenuItem](DMenuItem.md).[mixin](DMenuItem.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
