[Winter Cardinal UI - v0.407.0](../index.md) / DMenuSidedItemExpandableItemSeparator

# Class: DMenuSidedItemExpandableItemSeparator\<VALUE, THEME, OPTIONS\>

A base class for UI classes with an image support.
See [DImageBaseEvents](../interfaces/DImageBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemSeparator`](../interfaces/DThemeMenuItemSeparator.md) = [`DThemeMenuItemSeparator`](../interfaces/DThemeMenuItemSeparator.md) |
| `OPTIONS` | extends [`DMenuItemSeparatorOptions`](../interfaces/DMenuItemSeparatorOptions.md)\<`VALUE`, `THEME`\> = [`DMenuItemSeparatorOptions`](../interfaces/DMenuItemSeparatorOptions.md)\<`VALUE`, `THEME`\> |

## Hierarchy

- [`DMenuItemExpandableItemSeparator`](DMenuItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DMenuSidedItemExpandableItemSeparator`**

## Table of contents

### Constructors

- [constructor](DMenuSidedItemExpandableItemSeparator.md#constructor)

### Properties

- [\_accessibleActive](DMenuSidedItemExpandableItemSeparator.md#_accessibleactive)
- [\_accessibleDiv](DMenuSidedItemExpandableItemSeparator.md#_accessiblediv)
- [\_auto](DMenuSidedItemExpandableItemSeparator.md#_auto)
- [\_background](DMenuSidedItemExpandableItemSeparator.md#_background)
- [\_border](DMenuSidedItemExpandableItemSeparator.md#_border)
- [\_bounds](DMenuSidedItemExpandableItemSeparator.md#_bounds)
- [\_boundsID](DMenuSidedItemExpandableItemSeparator.md#_boundsid)
- [\_boundsRect](DMenuSidedItemExpandableItemSeparator.md#_boundsrect)
- [\_clearType](DMenuSidedItemExpandableItemSeparator.md#_cleartype)
- [\_corner](DMenuSidedItemExpandableItemSeparator.md#_corner)
- [\_cursor](DMenuSidedItemExpandableItemSeparator.md#_cursor)
- [\_destroyed](DMenuSidedItemExpandableItemSeparator.md#_destroyed)
- [\_enabledFilters](DMenuSidedItemExpandableItemSeparator.md#_enabledfilters)
- [\_image](DMenuSidedItemExpandableItemSeparator.md#_image)
- [\_lastDownPoint](DMenuSidedItemExpandableItemSeparator.md#_lastdownpoint)
- [\_lastSortedIndex](DMenuSidedItemExpandableItemSeparator.md#_lastsortedindex)
- [\_localBounds](DMenuSidedItemExpandableItemSeparator.md#_localbounds)
- [\_localBoundsRect](DMenuSidedItemExpandableItemSeparator.md#_localboundsrect)
- [\_mask](DMenuSidedItemExpandableItemSeparator.md#_mask)
- [\_options](DMenuSidedItemExpandableItemSeparator.md#_options)
- [\_outline](DMenuSidedItemExpandableItemSeparator.md#_outline)
- [\_overflowMask](DMenuSidedItemExpandableItemSeparator.md#_overflowmask)
- [\_padding](DMenuSidedItemExpandableItemSeparator.md#_padding)
- [\_reflowable](DMenuSidedItemExpandableItemSeparator.md#_reflowable)
- [\_shortcuts](DMenuSidedItemExpandableItemSeparator.md#_shortcuts)
- [\_snippet](DMenuSidedItemExpandableItemSeparator.md#_snippet)
- [\_tempDisplayObjectParent](DMenuSidedItemExpandableItemSeparator.md#_tempdisplayobjectparent)
- [\_text](DMenuSidedItemExpandableItemSeparator.md#_text)
- [\_title](DMenuSidedItemExpandableItemSeparator.md#_title)
- [\_value](DMenuSidedItemExpandableItemSeparator.md#_value)
- [\_zIndex](DMenuSidedItemExpandableItemSeparator.md#_zindex)
- [accessible](DMenuSidedItemExpandableItemSeparator.md#accessible)
- [accessibleChildren](DMenuSidedItemExpandableItemSeparator.md#accessiblechildren)
- [accessibleHint](DMenuSidedItemExpandableItemSeparator.md#accessiblehint)
- [accessiblePointerEvents](DMenuSidedItemExpandableItemSeparator.md#accessiblepointerevents)
- [accessibleTitle](DMenuSidedItemExpandableItemSeparator.md#accessibletitle)
- [accessibleType](DMenuSidedItemExpandableItemSeparator.md#accessibletype)
- [alpha](DMenuSidedItemExpandableItemSeparator.md#alpha)
- [angle](DMenuSidedItemExpandableItemSeparator.md#angle)
- [buttonMode](DMenuSidedItemExpandableItemSeparator.md#buttonmode)
- [cacheAsBitmap](DMenuSidedItemExpandableItemSeparator.md#cacheasbitmap)
- [children](DMenuSidedItemExpandableItemSeparator.md#children)
- [cursor](DMenuSidedItemExpandableItemSeparator.md#cursor)
- [filterArea](DMenuSidedItemExpandableItemSeparator.md#filterarea)
- [filters](DMenuSidedItemExpandableItemSeparator.md#filters)
- [hitArea](DMenuSidedItemExpandableItemSeparator.md#hitarea)
- [interactive](DMenuSidedItemExpandableItemSeparator.md#interactive)
- [interactiveChildren](DMenuSidedItemExpandableItemSeparator.md#interactivechildren)
- [isMask](DMenuSidedItemExpandableItemSeparator.md#ismask)
- [isSprite](DMenuSidedItemExpandableItemSeparator.md#issprite)
- [localTransform](DMenuSidedItemExpandableItemSeparator.md#localtransform)
- [mask](DMenuSidedItemExpandableItemSeparator.md#mask)
- [name](DMenuSidedItemExpandableItemSeparator.md#name)
- [parent](DMenuSidedItemExpandableItemSeparator.md#parent)
- [pivot](DMenuSidedItemExpandableItemSeparator.md#pivot)
- [renderable](DMenuSidedItemExpandableItemSeparator.md#renderable)
- [rotation](DMenuSidedItemExpandableItemSeparator.md#rotation)
- [sortDirty](DMenuSidedItemExpandableItemSeparator.md#sortdirty)
- [sortableChildren](DMenuSidedItemExpandableItemSeparator.md#sortablechildren)
- [transform](DMenuSidedItemExpandableItemSeparator.md#transform)
- [visible](DMenuSidedItemExpandableItemSeparator.md#visible)
- [worldAlpha](DMenuSidedItemExpandableItemSeparator.md#worldalpha)
- [worldTransform](DMenuSidedItemExpandableItemSeparator.md#worldtransform)
- [worldVisible](DMenuSidedItemExpandableItemSeparator.md#worldvisible)
- [zIndex](DMenuSidedItemExpandableItemSeparator.md#zindex)
- [LAYOUTER](DMenuSidedItemExpandableItemSeparator.md#layouter)
- [WORK\_CONTAINS\_POINT](DMenuSidedItemExpandableItemSeparator.md#work_contains_point)

### Accessors

- [background](DMenuSidedItemExpandableItemSeparator.md#background)
- [border](DMenuSidedItemExpandableItemSeparator.md#border)
- [corner](DMenuSidedItemExpandableItemSeparator.md#corner)
- [height](DMenuSidedItemExpandableItemSeparator.md#height)
- [image](DMenuSidedItemExpandableItemSeparator.md#image)
- [options](DMenuSidedItemExpandableItemSeparator.md#options)
- [outline](DMenuSidedItemExpandableItemSeparator.md#outline)
- [padding](DMenuSidedItemExpandableItemSeparator.md#padding)
- [position](DMenuSidedItemExpandableItemSeparator.md#position)
- [reflowable](DMenuSidedItemExpandableItemSeparator.md#reflowable)
- [scale](DMenuSidedItemExpandableItemSeparator.md#scale)
- [shadow](DMenuSidedItemExpandableItemSeparator.md#shadow)
- [skew](DMenuSidedItemExpandableItemSeparator.md#skew)
- [snippet](DMenuSidedItemExpandableItemSeparator.md#snippet)
- [state](DMenuSidedItemExpandableItemSeparator.md#state)
- [text](DMenuSidedItemExpandableItemSeparator.md#text)
- [theme](DMenuSidedItemExpandableItemSeparator.md#theme)
- [title](DMenuSidedItemExpandableItemSeparator.md#title)
- [type](DMenuSidedItemExpandableItemSeparator.md#type)
- [unsafe](DMenuSidedItemExpandableItemSeparator.md#unsafe)
- [value](DMenuSidedItemExpandableItemSeparator.md#value)
- [weight](DMenuSidedItemExpandableItemSeparator.md#weight)
- [width](DMenuSidedItemExpandableItemSeparator.md#width)
- [x](DMenuSidedItemExpandableItemSeparator.md#x)
- [y](DMenuSidedItemExpandableItemSeparator.md#y)

### Methods

- [\_calculateBounds](DMenuSidedItemExpandableItemSeparator.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DMenuSidedItemExpandableItemSeparator.md#_recursivepostupdatetransform)
- [\_render](DMenuSidedItemExpandableItemSeparator.md#_render)
- [activate](DMenuSidedItemExpandableItemSeparator.md#activate)
- [addChild](DMenuSidedItemExpandableItemSeparator.md#addchild)
- [addChildAt](DMenuSidedItemExpandableItemSeparator.md#addchildat)
- [addListener](DMenuSidedItemExpandableItemSeparator.md#addlistener)
- [applyTitle](DMenuSidedItemExpandableItemSeparator.md#applytitle)
- [blur](DMenuSidedItemExpandableItemSeparator.md#blur)
- [calculateBounds](DMenuSidedItemExpandableItemSeparator.md#calculatebounds)
- [containerUpdateTransform](DMenuSidedItemExpandableItemSeparator.md#containerupdatetransform)
- [containsGlobalPoint](DMenuSidedItemExpandableItemSeparator.md#containsglobalpoint)
- [containsLocalPoint](DMenuSidedItemExpandableItemSeparator.md#containslocalpoint)
- [containsPoint](DMenuSidedItemExpandableItemSeparator.md#containspoint)
- [destroy](DMenuSidedItemExpandableItemSeparator.md#destroy)
- [disableTempParent](DMenuSidedItemExpandableItemSeparator.md#disabletempparent)
- [displayObjectUpdateTransform](DMenuSidedItemExpandableItemSeparator.md#displayobjectupdatetransform)
- [emit](DMenuSidedItemExpandableItemSeparator.md#emit)
- [enableTempParent](DMenuSidedItemExpandableItemSeparator.md#enabletempparent)
- [eventNames](DMenuSidedItemExpandableItemSeparator.md#eventnames)
- [focus](DMenuSidedItemExpandableItemSeparator.md#focus)
- [focusOnClosest](DMenuSidedItemExpandableItemSeparator.md#focusonclosest)
- [getBounds](DMenuSidedItemExpandableItemSeparator.md#getbounds)
- [getChildAt](DMenuSidedItemExpandableItemSeparator.md#getchildat)
- [getChildByName](DMenuSidedItemExpandableItemSeparator.md#getchildbyname)
- [getChildIndex](DMenuSidedItemExpandableItemSeparator.md#getchildindex)
- [getClearType](DMenuSidedItemExpandableItemSeparator.md#getcleartype)
- [getClippingRect](DMenuSidedItemExpandableItemSeparator.md#getclippingrect)
- [getGlobalPosition](DMenuSidedItemExpandableItemSeparator.md#getglobalposition)
- [getHeight](DMenuSidedItemExpandableItemSeparator.md#getheight)
- [getImage](DMenuSidedItemExpandableItemSeparator.md#getimage)
- [getLayouter](DMenuSidedItemExpandableItemSeparator.md#getlayouter)
- [getLocalBounds](DMenuSidedItemExpandableItemSeparator.md#getlocalbounds)
- [getOverflowMask](DMenuSidedItemExpandableItemSeparator.md#getoverflowmask)
- [getParentOfSize](DMenuSidedItemExpandableItemSeparator.md#getparentofsize)
- [getSelection](DMenuSidedItemExpandableItemSeparator.md#getselection)
- [getText](DMenuSidedItemExpandableItemSeparator.md#gettext)
- [getThemeDefault](DMenuSidedItemExpandableItemSeparator.md#getthemedefault)
- [getType](DMenuSidedItemExpandableItemSeparator.md#gettype)
- [getWidth](DMenuSidedItemExpandableItemSeparator.md#getwidth)
- [getX](DMenuSidedItemExpandableItemSeparator.md#getx)
- [getY](DMenuSidedItemExpandableItemSeparator.md#gety)
- [hasDirty](DMenuSidedItemExpandableItemSeparator.md#hasdirty)
- [hasRefitableHeight](DMenuSidedItemExpandableItemSeparator.md#hasrefitableheight)
- [hasRefitableWidth](DMenuSidedItemExpandableItemSeparator.md#hasrefitablewidth)
- [hasSelection](DMenuSidedItemExpandableItemSeparator.md#hasselection)
- [hide](DMenuSidedItemExpandableItemSeparator.md#hide)
- [init](DMenuSidedItemExpandableItemSeparator.md#init)
- [initReflowable](DMenuSidedItemExpandableItemSeparator.md#initreflowable)
- [isDirty](DMenuSidedItemExpandableItemSeparator.md#isdirty)
- [isEventTarget](DMenuSidedItemExpandableItemSeparator.md#iseventtarget)
- [isHidden](DMenuSidedItemExpandableItemSeparator.md#ishidden)
- [isHierarchyDirty](DMenuSidedItemExpandableItemSeparator.md#ishierarchydirty)
- [isRefitable](DMenuSidedItemExpandableItemSeparator.md#isrefitable)
- [isShown](DMenuSidedItemExpandableItemSeparator.md#isshown)
- [listenerCount](DMenuSidedItemExpandableItemSeparator.md#listenercount)
- [listeners](DMenuSidedItemExpandableItemSeparator.md#listeners)
- [newImage](DMenuSidedItemExpandableItemSeparator.md#newimage)
- [newOverflowMask](DMenuSidedItemExpandableItemSeparator.md#newoverflowmask)
- [newPadding](DMenuSidedItemExpandableItemSeparator.md#newpadding)
- [newText](DMenuSidedItemExpandableItemSeparator.md#newtext)
- [off](DMenuSidedItemExpandableItemSeparator.md#off)
- [on](DMenuSidedItemExpandableItemSeparator.md#on)
- [onBlur](DMenuSidedItemExpandableItemSeparator.md#onblur)
- [onChildBlur](DMenuSidedItemExpandableItemSeparator.md#onchildblur)
- [onChildFocus](DMenuSidedItemExpandableItemSeparator.md#onchildfocus)
- [onChildrenChange](DMenuSidedItemExpandableItemSeparator.md#onchildrenchange)
- [onClick](DMenuSidedItemExpandableItemSeparator.md#onclick)
- [onDblClick](DMenuSidedItemExpandableItemSeparator.md#ondblclick)
- [onDown](DMenuSidedItemExpandableItemSeparator.md#ondown)
- [onDownThis](DMenuSidedItemExpandableItemSeparator.md#ondownthis)
- [onFocus](DMenuSidedItemExpandableItemSeparator.md#onfocus)
- [onHierarchyDirty](DMenuSidedItemExpandableItemSeparator.md#onhierarchydirty)
- [onKeyDown](DMenuSidedItemExpandableItemSeparator.md#onkeydown)
- [onKeyDownActivate](DMenuSidedItemExpandableItemSeparator.md#onkeydownactivate)
- [onKeyUp](DMenuSidedItemExpandableItemSeparator.md#onkeyup)
- [onMove](DMenuSidedItemExpandableItemSeparator.md#onmove)
- [onOut](DMenuSidedItemExpandableItemSeparator.md#onout)
- [onOver](DMenuSidedItemExpandableItemSeparator.md#onover)
- [onParentMove](DMenuSidedItemExpandableItemSeparator.md#onparentmove)
- [onParentResize](DMenuSidedItemExpandableItemSeparator.md#onparentresize)
- [onRefit](DMenuSidedItemExpandableItemSeparator.md#onrefit)
- [onReflow](DMenuSidedItemExpandableItemSeparator.md#onreflow)
- [onReflowTextAndImage](DMenuSidedItemExpandableItemSeparator.md#onreflowtextandimage)
- [onResize](DMenuSidedItemExpandableItemSeparator.md#onresize)
- [onScale](DMenuSidedItemExpandableItemSeparator.md#onscale)
- [onSelect](DMenuSidedItemExpandableItemSeparator.md#onselect)
- [onShortcut](DMenuSidedItemExpandableItemSeparator.md#onshortcut)
- [onSkew](DMenuSidedItemExpandableItemSeparator.md#onskew)
- [onStateChange](DMenuSidedItemExpandableItemSeparator.md#onstatechange)
- [onUp](DMenuSidedItemExpandableItemSeparator.md#onup)
- [onUpThis](DMenuSidedItemExpandableItemSeparator.md#onupthis)
- [onWheel](DMenuSidedItemExpandableItemSeparator.md#onwheel)
- [once](DMenuSidedItemExpandableItemSeparator.md#once)
- [reflow](DMenuSidedItemExpandableItemSeparator.md#reflow)
- [removeAllListeners](DMenuSidedItemExpandableItemSeparator.md#removealllisteners)
- [removeChild](DMenuSidedItemExpandableItemSeparator.md#removechild)
- [removeChildAt](DMenuSidedItemExpandableItemSeparator.md#removechildat)
- [removeChildren](DMenuSidedItemExpandableItemSeparator.md#removechildren)
- [removeListener](DMenuSidedItemExpandableItemSeparator.md#removelistener)
- [render](DMenuSidedItemExpandableItemSeparator.md#render)
- [renderAdvanced](DMenuSidedItemExpandableItemSeparator.md#renderadvanced)
- [resize](DMenuSidedItemExpandableItemSeparator.md#resize)
- [setChildIndex](DMenuSidedItemExpandableItemSeparator.md#setchildindex)
- [setFocused](DMenuSidedItemExpandableItemSeparator.md#setfocused)
- [setHeight](DMenuSidedItemExpandableItemSeparator.md#setheight)
- [setParent](DMenuSidedItemExpandableItemSeparator.md#setparent)
- [setTransform](DMenuSidedItemExpandableItemSeparator.md#settransform)
- [setWidth](DMenuSidedItemExpandableItemSeparator.md#setwidth)
- [setX](DMenuSidedItemExpandableItemSeparator.md#setx)
- [setY](DMenuSidedItemExpandableItemSeparator.md#sety)
- [show](DMenuSidedItemExpandableItemSeparator.md#show)
- [sortChildren](DMenuSidedItemExpandableItemSeparator.md#sortchildren)
- [swapChildren](DMenuSidedItemExpandableItemSeparator.md#swapchildren)
- [toCursor](DMenuSidedItemExpandableItemSeparator.md#tocursor)
- [toDirty](DMenuSidedItemExpandableItemSeparator.md#todirty)
- [toGlobal](DMenuSidedItemExpandableItemSeparator.md#toglobal)
- [toHasDirty](DMenuSidedItemExpandableItemSeparator.md#tohasdirty)
- [toHierarchyDirty](DMenuSidedItemExpandableItemSeparator.md#tohierarchydirty)
- [toLocal](DMenuSidedItemExpandableItemSeparator.md#tolocal)
- [toParentHasDirty](DMenuSidedItemExpandableItemSeparator.md#toparenthasdirty)
- [toParentHierarchyDirty](DMenuSidedItemExpandableItemSeparator.md#toparenthierarchydirty)
- [toParentResized](DMenuSidedItemExpandableItemSeparator.md#toparentresized)
- [updateTransform](DMenuSidedItemExpandableItemSeparator.md#updatetransform)
- [mixin](DMenuSidedItemExpandableItemSeparator.md#mixin)

## Constructors

### constructor

• **new DMenuSidedItemExpandableItemSeparator**\<`VALUE`, `THEME`, `OPTIONS`\>(`options?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemSeparator`](../interfaces/DThemeMenuItemSeparator.md) = [`DThemeMenuItemSeparator`](../interfaces/DThemeMenuItemSeparator.md) |
| `OPTIONS` | extends [`DMenuItemSeparatorOptions`](../interfaces/DMenuItemSeparatorOptions.md)\<`VALUE`, `THEME`\> = [`DMenuItemSeparatorOptions`](../interfaces/DMenuItemSeparatorOptions.md)\<`VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[constructor](DMenuItemExpandableItemSeparator.md#constructor)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_accessibleActive](DMenuItemExpandableItemSeparator.md#_accessibleactive)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_accessibleDiv](DMenuItemExpandableItemSeparator.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_auto](DMenuItemExpandableItemSeparator.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_background](DMenuItemExpandableItemSeparator.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_border](DMenuItemExpandableItemSeparator.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_bounds](DMenuItemExpandableItemSeparator.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_boundsID](DMenuItemExpandableItemSeparator.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_boundsRect](DMenuItemExpandableItemSeparator.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_clearType](DMenuItemExpandableItemSeparator.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_corner](DMenuItemExpandableItemSeparator.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_cursor](DMenuItemExpandableItemSeparator.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_destroyed](DMenuItemExpandableItemSeparator.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_enabledFilters](DMenuItemExpandableItemSeparator.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_image

• `Protected` `Optional` **\_image**: [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_image](DMenuItemExpandableItemSeparator.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L61)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_lastDownPoint](DMenuItemExpandableItemSeparator.md#_lastdownpoint)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_lastSortedIndex](DMenuItemExpandableItemSeparator.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_localBounds](DMenuItemExpandableItemSeparator.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_localBoundsRect](DMenuItemExpandableItemSeparator.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_mask](DMenuItemExpandableItemSeparator.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_options](DMenuItemExpandableItemSeparator.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_outline](DMenuItemExpandableItemSeparator.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_overflowMask](DMenuItemExpandableItemSeparator.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L57)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_padding](DMenuItemExpandableItemSeparator.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_reflowable](DMenuItemExpandableItemSeparator.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_shortcuts](DMenuItemExpandableItemSeparator.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_snippet](DMenuItemExpandableItemSeparator.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_tempDisplayObjectParent](DMenuItemExpandableItemSeparator.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_text

• `Protected` `Optional` **\_text**: [`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_text](DMenuItemExpandableItemSeparator.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L56)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_title](DMenuItemExpandableItemSeparator.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_value

• `Protected` **\_value**: ``null`` \| `VALUE`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_value](DMenuItemExpandableItemSeparator.md#_value)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_zIndex](DMenuItemExpandableItemSeparator.md#_zindex)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[accessible](DMenuItemExpandableItemSeparator.md#accessible)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[accessibleChildren](DMenuItemExpandableItemSeparator.md#accessiblechildren)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[accessibleHint](DMenuItemExpandableItemSeparator.md#accessiblehint)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[accessiblePointerEvents](DMenuItemExpandableItemSeparator.md#accessiblepointerevents)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[accessibleTitle](DMenuItemExpandableItemSeparator.md#accessibletitle)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[accessibleType](DMenuItemExpandableItemSeparator.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[alpha](DMenuItemExpandableItemSeparator.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[angle](DMenuItemExpandableItemSeparator.md#angle)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[buttonMode](DMenuItemExpandableItemSeparator.md#buttonmode)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[cacheAsBitmap](DMenuItemExpandableItemSeparator.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[children](DMenuItemExpandableItemSeparator.md#children)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[cursor](DMenuItemExpandableItemSeparator.md#cursor)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[filterArea](DMenuItemExpandableItemSeparator.md#filterarea)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[filters](DMenuItemExpandableItemSeparator.md#filters)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[hitArea](DMenuItemExpandableItemSeparator.md#hitarea)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[interactive](DMenuItemExpandableItemSeparator.md#interactive)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[interactiveChildren](DMenuItemExpandableItemSeparator.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[isMask](DMenuItemExpandableItemSeparator.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[isSprite](DMenuItemExpandableItemSeparator.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[localTransform](DMenuItemExpandableItemSeparator.md#localtransform)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[mask](DMenuItemExpandableItemSeparator.md#mask)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[name](DMenuItemExpandableItemSeparator.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[parent](DMenuItemExpandableItemSeparator.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[pivot](DMenuItemExpandableItemSeparator.md#pivot)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[renderable](DMenuItemExpandableItemSeparator.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[rotation](DMenuItemExpandableItemSeparator.md#rotation)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[sortDirty](DMenuItemExpandableItemSeparator.md#sortdirty)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[sortableChildren](DMenuItemExpandableItemSeparator.md#sortablechildren)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[transform](DMenuItemExpandableItemSeparator.md#transform)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[visible](DMenuItemExpandableItemSeparator.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[worldAlpha](DMenuItemExpandableItemSeparator.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[worldTransform](DMenuItemExpandableItemSeparator.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[worldVisible](DMenuItemExpandableItemSeparator.md#worldvisible)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[zIndex](DMenuItemExpandableItemSeparator.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[LAYOUTER](DMenuItemExpandableItemSeparator.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L55)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[WORK_CONTAINS_POINT](DMenuItemExpandableItemSeparator.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DMenuItemExpandableItemSeparator.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DMenuItemExpandableItemSeparator.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DMenuItemExpandableItemSeparator.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemSeparator.height

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

DMenuItemExpandableItemSeparator.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

___

### image

• `get` **image**(): [`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Returns

[`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Inherited from

DMenuItemExpandableItemSeparator.image

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

DMenuItemExpandableItemSeparator.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L80)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DMenuItemExpandableItemSeparator.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DMenuItemExpandableItemSeparator.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DMenuItemExpandableItemSeparator.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1455)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItemExpandableItemSeparator.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DMenuItemExpandableItemSeparator.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItemExpandableItemSeparator.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1446](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1446)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DMenuItemExpandableItemSeparator.shadow

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

DMenuItemExpandableItemSeparator.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItemExpandableItemSeparator.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1451)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DMenuItemExpandableItemSeparator.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DMenuItemExpandableItemSeparator.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

___

### text

• `get` **text**(): [`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Returns

[`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Inherited from

DMenuItemExpandableItemSeparator.text

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

DMenuItemExpandableItemSeparator.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L96)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DMenuItemExpandableItemSeparator.theme

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

DMenuItemExpandableItemSeparator.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DMenuItemExpandableItemSeparator.title

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

DMenuItemExpandableItemSeparator.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DMenuItemExpandableItemSeparator.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1238)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DMenuItemExpandableItemSeparator.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### value

• `get` **value**(): ``null`` \| `VALUE`

#### Returns

``null`` \| `VALUE`

#### Inherited from

DMenuItemExpandableItemSeparator.value

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

DMenuItemExpandableItemSeparator.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L54)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemSeparator.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemSeparator.width

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

DMenuItemExpandableItemSeparator.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemSeparator.x

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

DMenuItemExpandableItemSeparator.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1247)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemSeparator.y

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

DMenuItemExpandableItemSeparator.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1287)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_calculateBounds](DMenuItemExpandableItemSeparator.md#_calculatebounds)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_recursivePostUpdateTransform](DMenuItemExpandableItemSeparator.md#_recursivepostupdatetransform)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[_render](DMenuItemExpandableItemSeparator.md#_render)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[activate](DMenuItemExpandableItemSeparator.md#activate)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[addChild](DMenuItemExpandableItemSeparator.md#addchild)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[addChildAt](DMenuItemExpandableItemSeparator.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[addListener](DMenuItemExpandableItemSeparator.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25521

▸ **addListener**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[addListener](DMenuItemExpandableItemSeparator.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[applyTitle](DMenuItemExpandableItemSeparator.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L136)

___

### blur

▸ **blur**(`recursively?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[blur](DMenuItemExpandableItemSeparator.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1598)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[calculateBounds](DMenuItemExpandableItemSeparator.md#calculatebounds)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[containerUpdateTransform](DMenuItemExpandableItemSeparator.md#containerupdatetransform)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[containsGlobalPoint](DMenuItemExpandableItemSeparator.md#containsglobalpoint)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[containsLocalPoint](DMenuItemExpandableItemSeparator.md#containslocalpoint)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[containsPoint](DMenuItemExpandableItemSeparator.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2077](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2077)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[destroy](DMenuItemExpandableItemSeparator.md#destroy)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[disableTempParent](DMenuItemExpandableItemSeparator.md#disabletempparent)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[displayObjectUpdateTransform](DMenuItemExpandableItemSeparator.md#displayobjectupdatetransform)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[emit](DMenuItemExpandableItemSeparator.md#emit)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[enableTempParent](DMenuItemExpandableItemSeparator.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[eventNames](DMenuItemExpandableItemSeparator.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[focus](DMenuItemExpandableItemSeparator.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1594)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[focusOnClosest](DMenuItemExpandableItemSeparator.md#focusonclosest)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getBounds](DMenuItemExpandableItemSeparator.md#getbounds)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getChildAt](DMenuItemExpandableItemSeparator.md#getchildat)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getChildByName](DMenuItemExpandableItemSeparator.md#getchildbyname)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getChildIndex](DMenuItemExpandableItemSeparator.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getClearType](DMenuItemExpandableItemSeparator.md#getcleartype)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getClippingRect](DMenuItemExpandableItemSeparator.md#getclippingrect)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getGlobalPosition](DMenuItemExpandableItemSeparator.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getHeight](DMenuItemExpandableItemSeparator.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

___

### getImage

▸ **getImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getImage](DMenuItemExpandableItemSeparator.md#getimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L72)

___

### getLayouter

▸ **getLayouter**(): [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Returns

[`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getLayouter](DMenuItemExpandableItemSeparator.md#getlayouter)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getLocalBounds](DMenuItemExpandableItemSeparator.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getOverflowMask](DMenuItemExpandableItemSeparator.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L64)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getParentOfSize](DMenuItemExpandableItemSeparator.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1879](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1879)

___

### getSelection

▸ **getSelection**(): ``null`` \| [`DMenuItemBaseSelection`](../interfaces/DMenuItemBaseSelection.md)

#### Returns

``null`` \| [`DMenuItemBaseSelection`](../interfaces/DMenuItemBaseSelection.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getSelection](DMenuItemExpandableItemSeparator.md#getselection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L62)

___

### getText

▸ **getText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getText](DMenuItemExpandableItemSeparator.md#gettext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getThemeDefault](DMenuItemExpandableItemSeparator.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2063)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getType](DMenuItemExpandableItemSeparator.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable-item-separator.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable-item-separator.ts#L17)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getWidth](DMenuItemExpandableItemSeparator.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getX](DMenuItemExpandableItemSeparator.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[getY](DMenuItemExpandableItemSeparator.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[hasDirty](DMenuItemExpandableItemSeparator.md#hasdirty)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[hasRefitableHeight](DMenuItemExpandableItemSeparator.md#hasrefitableheight)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[hasRefitableWidth](DMenuItemExpandableItemSeparator.md#hasrefitablewidth)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[hasSelection](DMenuItemExpandableItemSeparator.md#hasselection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L58)

___

### hide

▸ **hide**(): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[hide](DMenuItemExpandableItemSeparator.md#hide)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[init](DMenuItemExpandableItemSeparator.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L33)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[initReflowable](DMenuItemExpandableItemSeparator.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-separator.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-separator.ts#L33)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[isDirty](DMenuItemExpandableItemSeparator.md#isdirty)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[isEventTarget](DMenuItemExpandableItemSeparator.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1957](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1957)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[isHidden](DMenuItemExpandableItemSeparator.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1522)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[isHierarchyDirty](DMenuItemExpandableItemSeparator.md#ishierarchydirty)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[isRefitable](DMenuItemExpandableItemSeparator.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L107)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[isShown](DMenuItemExpandableItemSeparator.md#isshown)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[listenerCount](DMenuItemExpandableItemSeparator.md#listenercount)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[listeners](DMenuItemExpandableItemSeparator.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newImage

▸ **newImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[newImage](DMenuItemExpandableItemSeparator.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L76)

___

### newOverflowMask

▸ **newOverflowMask**(): ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Returns

``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[newOverflowMask](DMenuItemExpandableItemSeparator.md#newoverflowmask)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[newPadding](DMenuItemExpandableItemSeparator.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newText

▸ **newText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[newText](DMenuItemExpandableItemSeparator.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L92)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[off](DMenuItemExpandableItemSeparator.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25534

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[on](DMenuItemExpandableItemSeparator.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25530

▸ **on**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[on](DMenuItemExpandableItemSeparator.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onBlur](DMenuItemExpandableItemSeparator.md#onblur)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onChildBlur](DMenuItemExpandableItemSeparator.md#onchildblur)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onChildFocus](DMenuItemExpandableItemSeparator.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1650)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onChildrenChange](DMenuItemExpandableItemSeparator.md#onchildrenchange)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onClick](DMenuItemExpandableItemSeparator.md#onclick)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onDblClick](DMenuItemExpandableItemSeparator.md#ondblclick)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onDown](DMenuItemExpandableItemSeparator.md#ondown)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onDownThis](DMenuItemExpandableItemSeparator.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1978](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1978)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onFocus](DMenuItemExpandableItemSeparator.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1657)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onHierarchyDirty](DMenuItemExpandableItemSeparator.md#onhierarchydirty)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onKeyDown](DMenuItemExpandableItemSeparator.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L81)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onKeyDownActivate](DMenuItemExpandableItemSeparator.md#onkeydownactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L88)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onKeyUp](DMenuItemExpandableItemSeparator.md#onkeyup)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onMove](DMenuItemExpandableItemSeparator.md#onmove)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onOut](DMenuItemExpandableItemSeparator.md#onout)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onOver](DMenuItemExpandableItemSeparator.md#onover)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onParentMove](DMenuItemExpandableItemSeparator.md#onparentmove)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onParentResize](DMenuItemExpandableItemSeparator.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1894](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1894)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onRefit](DMenuItemExpandableItemSeparator.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1731](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1731)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onReflow](DMenuItemExpandableItemSeparator.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L100)

___

### onReflowTextAndImage

▸ **onReflowTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onReflowTextAndImage](DMenuItemExpandableItemSeparator.md#onreflowtextandimage)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onResize](DMenuItemExpandableItemSeparator.md#onresize)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onScale](DMenuItemExpandableItemSeparator.md#onscale)

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

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onSelect](DMenuItemExpandableItemSeparator.md#onselect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L73)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onShortcut](DMenuItemExpandableItemSeparator.md#onshortcut)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onSkew](DMenuItemExpandableItemSeparator.md#onskew)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onStateChange](DMenuItemExpandableItemSeparator.md#onstatechange)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onUp](DMenuItemExpandableItemSeparator.md#onup)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onUpThis](DMenuItemExpandableItemSeparator.md#onupthis)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[onWheel](DMenuItemExpandableItemSeparator.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1940](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1940)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[once](DMenuItemExpandableItemSeparator.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25527

▸ **once**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[once](DMenuItemExpandableItemSeparator.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[reflow](DMenuItemExpandableItemSeparator.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1704)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[removeAllListeners](DMenuItemExpandableItemSeparator.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[removeAllListeners](DMenuItemExpandableItemSeparator.md#removealllisteners)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[removeChild](DMenuItemExpandableItemSeparator.md#removechild)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[removeChildAt](DMenuItemExpandableItemSeparator.md#removechildat)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[removeChildren](DMenuItemExpandableItemSeparator.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8423

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[removeListener](DMenuItemExpandableItemSeparator.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25513

▸ **removeListener**(`event`, `fn?`, `context?`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[removeListener](DMenuItemExpandableItemSeparator.md#removelistener)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[render](DMenuItemExpandableItemSeparator.md#render)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[renderAdvanced](DMenuItemExpandableItemSeparator.md#renderadvanced)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[resize](DMenuItemExpandableItemSeparator.md#resize)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[setChildIndex](DMenuItemExpandableItemSeparator.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8394

___

### setFocused

▸ **setFocused**(`isFocused`): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[setFocused](DMenuItemExpandableItemSeparator.md#setfocused)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[setHeight](DMenuItemExpandableItemSeparator.md#setheight)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[setParent](DMenuItemExpandableItemSeparator.md#setparent)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[setTransform](DMenuItemExpandableItemSeparator.md#settransform)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[setWidth](DMenuItemExpandableItemSeparator.md#setwidth)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[setX](DMenuItemExpandableItemSeparator.md#setx)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[setY](DMenuItemExpandableItemSeparator.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1300)

___

### show

▸ **show**(): [`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuSidedItemExpandableItemSeparator`](DMenuSidedItemExpandableItemSeparator.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[show](DMenuItemExpandableItemSeparator.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1499)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[sortChildren](DMenuItemExpandableItemSeparator.md#sortchildren)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[swapChildren](DMenuItemExpandableItemSeparator.md#swapchildren)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[toCursor](DMenuItemExpandableItemSeparator.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[toDirty](DMenuItemExpandableItemSeparator.md#todirty)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[toGlobal](DMenuItemExpandableItemSeparator.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[toHasDirty](DMenuItemExpandableItemSeparator.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1535](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1535)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[toHierarchyDirty](DMenuItemExpandableItemSeparator.md#tohierarchydirty)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[toLocal](DMenuItemExpandableItemSeparator.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[toParentHasDirty](DMenuItemExpandableItemSeparator.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[toParentHierarchyDirty](DMenuItemExpandableItemSeparator.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1561](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1561)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[toParentResized](DMenuItemExpandableItemSeparator.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1872)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[updateTransform](DMenuItemExpandableItemSeparator.md#updatetransform)

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

[DMenuItemExpandableItemSeparator](DMenuItemExpandableItemSeparator.md).[mixin](DMenuItemExpandableItemSeparator.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
