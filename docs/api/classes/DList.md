[Winter Cardinal UI - v0.442.0](../index.md) / DList

# Class: DList\<VALUE, DATA, THEME, CONTENT_OPTIONS, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `DATA` | extends [`DListData`](../interfaces/DListData.md)\<`VALUE`\> = [`DListData`](../interfaces/DListData.md)\<`VALUE`\> |
| `THEME` | extends [`DThemeList`](../interfaces/DThemeList.md) = [`DThemeList`](../interfaces/DThemeList.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](../interfaces/DBaseOptions.md) = [`DContentOptions`](../interfaces/DContentOptions.md) |
| `OPTIONS` | extends [`DListOptions`](../interfaces/DListOptions.md)\<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> = [`DListOptions`](../interfaces/DListOptions.md)\<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> |

## Hierarchy

- [`DPane`](DPane.md)\<`THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

  ↳ **`DList`**

  ↳↳ [`DDialogSelectList`](DDialogSelectList.md)

## Table of contents

### Constructors

- [constructor](DList.md#constructor)

### Properties

- [\_accessibleActive](DList.md#_accessibleactive)
- [\_accessibleDiv](DList.md#_accessiblediv)
- [\_auto](DList.md#_auto)
- [\_background](DList.md#_background)
- [\_border](DList.md#_border)
- [\_bounds](DList.md#_bounds)
- [\_boundsID](DList.md#_boundsid)
- [\_boundsRect](DList.md#_boundsrect)
- [\_clearType](DList.md#_cleartype)
- [\_content](DList.md#_content)
- [\_corner](DList.md#_corner)
- [\_cursor](DList.md#_cursor)
- [\_data](DList.md#_data)
- [\_destroyed](DList.md#_destroyed)
- [\_enabledFilters](DList.md#_enabledfilters)
- [\_gestureUtil](DList.md#_gestureutil)
- [\_lastDownPoint](DList.md#_lastdownpoint)
- [\_lastSortedIndex](DList.md#_lastsortedindex)
- [\_localBounds](DList.md#_localbounds)
- [\_localBoundsRect](DList.md#_localboundsrect)
- [\_mask](DList.md#_mask)
- [\_options](DList.md#_options)
- [\_outline](DList.md#_outline)
- [\_overflowMask](DList.md#_overflowmask)
- [\_padding](DList.md#_padding)
- [\_reflowable](DList.md#_reflowable)
- [\_scrollbar](DList.md#_scrollbar)
- [\_shortcuts](DList.md#_shortcuts)
- [\_snippet](DList.md#_snippet)
- [\_tempDisplayObjectParent](DList.md#_tempdisplayobjectparent)
- [\_title](DList.md#_title)
- [\_updater](DList.md#_updater)
- [\_zIndex](DList.md#_zindex)
- [accessible](DList.md#accessible)
- [accessibleChildren](DList.md#accessiblechildren)
- [accessibleHint](DList.md#accessiblehint)
- [accessiblePointerEvents](DList.md#accessiblepointerevents)
- [accessibleTitle](DList.md#accessibletitle)
- [accessibleType](DList.md#accessibletype)
- [alpha](DList.md#alpha)
- [angle](DList.md#angle)
- [buttonMode](DList.md#buttonmode)
- [cacheAsBitmap](DList.md#cacheasbitmap)
- [children](DList.md#children)
- [cursor](DList.md#cursor)
- [filterArea](DList.md#filterarea)
- [filters](DList.md#filters)
- [hitArea](DList.md#hitarea)
- [interactive](DList.md#interactive)
- [interactiveChildren](DList.md#interactivechildren)
- [isMask](DList.md#ismask)
- [isSprite](DList.md#issprite)
- [localTransform](DList.md#localtransform)
- [mask](DList.md#mask)
- [name](DList.md#name)
- [parent](DList.md#parent)
- [pivot](DList.md#pivot)
- [renderable](DList.md#renderable)
- [rotation](DList.md#rotation)
- [sortDirty](DList.md#sortdirty)
- [sortableChildren](DList.md#sortablechildren)
- [transform](DList.md#transform)
- [visible](DList.md#visible)
- [worldAlpha](DList.md#worldalpha)
- [worldTransform](DList.md#worldtransform)
- [worldVisible](DList.md#worldvisible)
- [zIndex](DList.md#zindex)
- [WORK\_CONTAINS\_POINT](DList.md#work_contains_point)
- [WORK\_POINT](DList.md#work_point)
- [WORK\_RECTANGLE](DList.md#work_rectangle)

### Accessors

- [background](DList.md#background)
- [border](DList.md#border)
- [content](DList.md#content)
- [corner](DList.md#corner)
- [data](DList.md#data)
- [height](DList.md#height)
- [options](DList.md#options)
- [outline](DList.md#outline)
- [padding](DList.md#padding)
- [position](DList.md#position)
- [reflowable](DList.md#reflowable)
- [scale](DList.md#scale)
- [scrollbar](DList.md#scrollbar)
- [selection](DList.md#selection)
- [shadow](DList.md#shadow)
- [skew](DList.md#skew)
- [snippet](DList.md#snippet)
- [state](DList.md#state)
- [theme](DList.md#theme)
- [title](DList.md#title)
- [type](DList.md#type)
- [unsafe](DList.md#unsafe)
- [updater](DList.md#updater)
- [weight](DList.md#weight)
- [width](DList.md#width)
- [x](DList.md#x)
- [y](DList.md#y)

### Methods

- [\_calculateBounds](DList.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DList.md#_recursivepostupdatetransform)
- [\_render](DList.md#_render)
- [addChild](DList.md#addchild)
- [addChildAt](DList.md#addchildat)
- [addListener](DList.md#addlistener)
- [applyTitle](DList.md#applytitle)
- [blur](DList.md#blur)
- [calculateBounds](DList.md#calculatebounds)
- [containerUpdateTransform](DList.md#containerupdatetransform)
- [containsGlobalPoint](DList.md#containsglobalpoint)
- [containsLocalPoint](DList.md#containslocalpoint)
- [containsPoint](DList.md#containspoint)
- [destroy](DList.md#destroy)
- [disableTempParent](DList.md#disabletempparent)
- [displayObjectUpdateTransform](DList.md#displayobjectupdatetransform)
- [emit](DList.md#emit)
- [enableTempParent](DList.md#enabletempparent)
- [eventNames](DList.md#eventnames)
- [focus](DList.md#focus)
- [focusOnClosest](DList.md#focusonclosest)
- [getBounds](DList.md#getbounds)
- [getChildAt](DList.md#getchildat)
- [getChildByName](DList.md#getchildbyname)
- [getChildIndex](DList.md#getchildindex)
- [getClearType](DList.md#getcleartype)
- [getClippingRect](DList.md#getclippingrect)
- [getFocusedChildClippingRect](DList.md#getfocusedchildclippingrect)
- [getGlobalPosition](DList.md#getglobalposition)
- [getHeight](DList.md#getheight)
- [getLocalBounds](DList.md#getlocalbounds)
- [getOverflowMask](DList.md#getoverflowmask)
- [getParentOfSize](DList.md#getparentofsize)
- [getThemeDefault](DList.md#getthemedefault)
- [getType](DList.md#gettype)
- [getWheelContentX](DList.md#getwheelcontentx)
- [getWheelContentY](DList.md#getwheelcontenty)
- [getWidth](DList.md#getwidth)
- [getX](DList.md#getx)
- [getY](DList.md#gety)
- [hasDirty](DList.md#hasdirty)
- [hasRefitableHeight](DList.md#hasrefitableheight)
- [hasRefitableWidth](DList.md#hasrefitablewidth)
- [hide](DList.md#hide)
- [init](DList.md#init)
- [initContent](DList.md#initcontent)
- [initGesture](DList.md#initgesture)
- [initReflowable](DList.md#initreflowable)
- [initScrollBar](DList.md#initscrollbar)
- [isDirty](DList.md#isdirty)
- [isEventTarget](DList.md#iseventtarget)
- [isHidden](DList.md#ishidden)
- [isHierarchyDirty](DList.md#ishierarchydirty)
- [isRefitable](DList.md#isrefitable)
- [isShown](DList.md#isshown)
- [listenerCount](DList.md#listenercount)
- [listeners](DList.md#listeners)
- [lock](DList.md#lock)
- [newContent](DList.md#newcontent)
- [newOverflowMask](DList.md#newoverflowmask)
- [newPadding](DList.md#newpadding)
- [newScrollBar](DList.md#newscrollbar)
- [newUpdater](DList.md#newupdater)
- [off](DList.md#off)
- [on](DList.md#on)
- [onBlur](DList.md#onblur)
- [onChildBlur](DList.md#onchildblur)
- [onChildFocus](DList.md#onchildfocus)
- [onChildrenChange](DList.md#onchildrenchange)
- [onContentChange](DList.md#oncontentchange)
- [onDblClick](DList.md#ondblclick)
- [onDown](DList.md#ondown)
- [onDownThis](DList.md#ondownthis)
- [onFocus](DList.md#onfocus)
- [onHierarchyDirty](DList.md#onhierarchydirty)
- [onKeyDown](DList.md#onkeydown)
- [onKeyUp](DList.md#onkeyup)
- [onMove](DList.md#onmove)
- [onOut](DList.md#onout)
- [onOver](DList.md#onover)
- [onParentMove](DList.md#onparentmove)
- [onParentResize](DList.md#onparentresize)
- [onRefit](DList.md#onrefit)
- [onReflow](DList.md#onreflow)
- [onResize](DList.md#onresize)
- [onScale](DList.md#onscale)
- [onScrollBarMoveX](DList.md#onscrollbarmovex)
- [onScrollBarMoveY](DList.md#onscrollbarmovey)
- [onScrollBarUpdate](DList.md#onscrollbarupdate)
- [onShortcut](DList.md#onshortcut)
- [onSkew](DList.md#onskew)
- [onStateChange](DList.md#onstatechange)
- [onUp](DList.md#onup)
- [onUpThis](DList.md#onupthis)
- [onWheel](DList.md#onwheel)
- [once](DList.md#once)
- [reflow](DList.md#reflow)
- [removeAllListeners](DList.md#removealllisteners)
- [removeChild](DList.md#removechild)
- [removeChildAt](DList.md#removechildat)
- [removeChildren](DList.md#removechildren)
- [removeListener](DList.md#removelistener)
- [render](DList.md#render)
- [renderAdvanced](DList.md#renderadvanced)
- [resize](DList.md#resize)
- [setChildIndex](DList.md#setchildindex)
- [setFocused](DList.md#setfocused)
- [setHeight](DList.md#setheight)
- [setParent](DList.md#setparent)
- [setTransform](DList.md#settransform)
- [setWidth](DList.md#setwidth)
- [setX](DList.md#setx)
- [setY](DList.md#sety)
- [show](DList.md#show)
- [sortChildren](DList.md#sortchildren)
- [swapChildren](DList.md#swapchildren)
- [toContent](DList.md#tocontent)
- [toContentX](DList.md#tocontentx)
- [toContentY](DList.md#tocontenty)
- [toCursor](DList.md#tocursor)
- [toData](DList.md#todata)
- [toDirty](DList.md#todirty)
- [toGlobal](DList.md#toglobal)
- [toHasDirty](DList.md#tohasdirty)
- [toHierarchyDirty](DList.md#tohierarchydirty)
- [toLocal](DList.md#tolocal)
- [toParentHasDirty](DList.md#toparenthasdirty)
- [toParentHierarchyDirty](DList.md#toparenthierarchydirty)
- [toParentResized](DList.md#toparentresized)
- [unlock](DList.md#unlock)
- [update](DList.md#update)
- [updateTransform](DList.md#updatetransform)
- [mixin](DList.md#mixin)

## Constructors

### constructor

• **new DList**\<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>(`options?`): [`DList`](DList.md)\<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `DATA` | extends [`DListData`](../interfaces/DListData.md)\<`VALUE`\> = [`DListData`](../interfaces/DListData.md)\<`VALUE`\> |
| `THEME` | extends [`DThemeList`](../interfaces/DThemeList.md) = [`DThemeList`](../interfaces/DThemeList.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\> = [`DContentOptions`](../interfaces/DContentOptions.md) |
| `OPTIONS` | extends [`DListOptions`](../interfaces/DListOptions.md)\<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> = [`DListOptions`](../interfaces/DListOptions.md)\<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DList`](DList.md)\<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Overrides

[DPane](DPane.md).[constructor](DPane.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L44)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DPane](DPane.md).[_accessibleActive](DPane.md#_accessibleactive)

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

[DPane](DPane.md).[_accessibleDiv](DPane.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DPane](DPane.md).[_auto](DPane.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DPane](DPane.md).[_background](DPane.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DPane](DPane.md).[_border](DPane.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DPane](DPane.md).[_bounds](DPane.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DPane](DPane.md).[_boundsID](DPane.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DPane](DPane.md).[_boundsRect](DPane.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DPane](DPane.md).[_clearType](DPane.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_content

• `Protected` `Optional` **\_content**: [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DPane](DPane.md).[_content](DPane.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L67)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DPane](DPane.md).[_corner](DPane.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DPane](DPane.md).[_cursor](DPane.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_data

• `Protected` `Optional` **\_data**: `DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L41)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DPane](DPane.md).[_destroyed](DPane.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DPane](DPane.md).[_enabledFilters](DPane.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_gestureUtil

• `Protected` `Optional` **\_gestureUtil**: [`UtilGesture`](UtilGesture.md)\<[`DPane`](DPane.md)\<[`DThemePane`](../interfaces/DThemePane.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DPaneOptions`](../interfaces/DPaneOptions.md)\<[`DThemePane`](../interfaces/DThemePane.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>\>

#### Inherited from

[DPane](DPane.md).[_gestureUtil](DPane.md#_gestureutil)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L70)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DPane](DPane.md).[_lastDownPoint](DPane.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DPane](DPane.md).[_lastSortedIndex](DPane.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DPane](DPane.md).[_localBounds](DPane.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DPane](DPane.md).[_localBoundsRect](DPane.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DPane](DPane.md).[_mask](DPane.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DPane](DPane.md).[_options](DPane.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DPane](DPane.md).[_outline](DPane.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| `Graphics`

#### Inherited from

[DPane](DPane.md).[_overflowMask](DPane.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L68)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DPane](DPane.md).[_padding](DPane.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DPane](DPane.md).[_reflowable](DPane.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_scrollbar

• `Protected` `Optional` **\_scrollbar**: [`DPaneScrollBar`](DPaneScrollBar.md)\<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

[DPane](DPane.md).[_scrollbar](DPane.md#_scrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L69)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DPane](DPane.md).[_shortcuts](DPane.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DPane](DPane.md).[_snippet](DPane.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DPane](DPane.md).[_tempDisplayObjectParent](DPane.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DPane](DPane.md).[_title](DPane.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_updater

• `Protected` `Optional` **\_updater**: [`DListItemUpdater`](DListItemUpdater.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L42)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DPane](DPane.md).[_zIndex](DPane.md#_zindex)

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

[DPane](DPane.md).[accessible](DPane.md#accessible)

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

[DPane](DPane.md).[accessibleChildren](DPane.md#accessiblechildren)

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

[DPane](DPane.md).[accessibleHint](DPane.md#accessiblehint)

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

[DPane](DPane.md).[accessiblePointerEvents](DPane.md#accessiblepointerevents)

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

[DPane](DPane.md).[accessibleTitle](DPane.md#accessibletitle)

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

[DPane](DPane.md).[accessibleType](DPane.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DPane](DPane.md).[alpha](DPane.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DPane](DPane.md).[angle](DPane.md#angle)

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

[DPane](DPane.md).[buttonMode](DPane.md#buttonmode)

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

[DPane](DPane.md).[cacheAsBitmap](DPane.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DPane](DPane.md).[children](DPane.md#children)

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

[DPane](DPane.md).[cursor](DPane.md#cursor)

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

[DPane](DPane.md).[filterArea](DPane.md#filterarea)

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

[DPane](DPane.md).[filters](DPane.md#filters)

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

[DPane](DPane.md).[hitArea](DPane.md#hitarea)

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

[DPane](DPane.md).[interactive](DPane.md#interactive)

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

[DPane](DPane.md).[interactiveChildren](DPane.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DPane](DPane.md).[isMask](DPane.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DPane](DPane.md).[isSprite](DPane.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DPane](DPane.md).[localTransform](DPane.md#localtransform)

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

[DPane](DPane.md).[mask](DPane.md#mask)

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

[DPane](DPane.md).[name](DPane.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DPane](DPane.md).[parent](DPane.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DPane](DPane.md).[pivot](DPane.md#pivot)

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

[DPane](DPane.md).[renderable](DPane.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DPane](DPane.md).[rotation](DPane.md#rotation)

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

[DPane](DPane.md).[sortDirty](DPane.md#sortdirty)

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

[DPane](DPane.md).[sortableChildren](DPane.md#sortablechildren)

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

[DPane](DPane.md).[transform](DPane.md#transform)

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

[DPane](DPane.md).[visible](DPane.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DPane](DPane.md).[worldAlpha](DPane.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DPane](DPane.md).[worldTransform](DPane.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DPane](DPane.md).[worldVisible](DPane.md#worldvisible)

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

[DPane](DPane.md).[zIndex](DPane.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DPane](DPane.md).[WORK_CONTAINS_POINT](DPane.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

___

### WORK\_POINT

▪ `Static` `Protected` `Optional` **WORK\_POINT**: `Point`

#### Inherited from

[DPane](DPane.md).[WORK_POINT](DPane.md#work_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L64)

___

### WORK\_RECTANGLE

▪ `Static` `Protected` `Optional` **WORK\_RECTANGLE**: `Rectangle`

#### Inherited from

[DPane](DPane.md).[WORK_RECTANGLE](DPane.md#work_rectangle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L65)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DPane.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DPane.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### content

• `get` **content**(): [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Returns

[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

DPane.content

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L177)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DPane.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### data

• `get` **data**(): `DATA`

#### Returns

`DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L62)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DPane.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DPane.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DPane.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DPane.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DPane.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPane.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DPane.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPane.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### scrollbar

• `get` **scrollbar**(): [`DPaneScrollBar`](DPaneScrollBar.md)\<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Returns

[`DPaneScrollBar`](DPaneScrollBar.md)\<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

DPane.scrollbar

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L121)

___

### selection

• `get` **selection**(): [`DListDataSelection`](../interfaces/DListDataSelection.md)\<`VALUE`\>

#### Returns

[`DListDataSelection`](../interfaces/DListDataSelection.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L120)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DPane.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DPane.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPane.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DPane.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DPane.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DPane.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1694](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1694)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DPane.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DPane.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1487)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DPane.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DPane.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DPane.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### updater

• `get` **updater**(): [`DListItemUpdater`](DListItemUpdater.md)\<`VALUE`\>

#### Returns

[`DListItemUpdater`](DListItemUpdater.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L49)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DPane.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | `number` |

#### Returns

`void`

#### Inherited from

DPane.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DPane.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DPane.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DPane.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DPane.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DPane.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DPane.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[_calculateBounds](DPane.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2084](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2084)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[_recursivePostUpdateTransform](DPane.md#_recursivepostupdatetransform)

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

[DPane](DPane.md).[_render](DPane.md#_render)

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

[DPane](DPane.md).[addChild](DPane.md#addchild)

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

[DPane](DPane.md).[addChildAt](DPane.md#addchildat)

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

[DPane](DPane.md).[addListener](DPane.md#addlistener)

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

[DPane](DPane.md).[addListener](DPane.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[applyTitle](DPane.md#applytitle)

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

#### Inherited from

[DPane](DPane.md).[blur](DPane.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[calculateBounds](DPane.md#calculatebounds)

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

[DPane](DPane.md).[containerUpdateTransform](DPane.md#containerupdatetransform)

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

[DPane](DPane.md).[containsGlobalPoint](DPane.md#containsglobalpoint)

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

#### Inherited from

[DPane](DPane.md).[containsLocalPoint](DPane.md#containslocalpoint)

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

#### Inherited from

[DPane](DPane.md).[containsPoint](DPane.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[destroy](DPane.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L382)

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

[DPane](DPane.md).[disableTempParent](DPane.md#disabletempparent)

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

[DPane](DPane.md).[displayObjectUpdateTransform](DPane.md#displayobjectupdatetransform)

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

[DPane](DPane.md).[emit](DPane.md#emit)

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

[DPane](DPane.md).[enableTempParent](DPane.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DPane](DPane.md).[eventNames](DPane.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[DPane](DPane.md).[focus](DPane.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[focusOnClosest](DPane.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

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

[DPane](DPane.md).[getBounds](DPane.md#getbounds)

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

[DPane](DPane.md).[getChildAt](DPane.md#getchildat)

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

[DPane](DPane.md).[getChildByName](DPane.md#getchildbyname)

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

[DPane](DPane.md).[getChildIndex](DPane.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[getClearType](DPane.md#getcleartype)

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

#### Inherited from

[DPane](DPane.md).[getClippingRect](DPane.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

___

### getFocusedChildClippingRect

▸ **getFocusedChildClippingRect**(`focused`, `contentX`, `contentY`, `contentWidth`, `contentHeight`, `width`, `height`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `contentX` | `number` |
| `contentY` | `number` |
| `contentWidth` | `number` |
| `contentHeight` | `number` |
| `width` | `number` |
| `height` | `number` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[DPane](DPane.md).[getFocusedChildClippingRect](DPane.md#getfocusedchildclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L283)

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

[DPane](DPane.md).[getGlobalPosition](DPane.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DPane](DPane.md).[getHeight](DPane.md#getheight)

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

#### Inherited from

[DPane](DPane.md).[getLocalBounds](DPane.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DPane](DPane.md).[getOverflowMask](DPane.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L212)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DPane](DPane.md).[getParentOfSize](DPane.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DPane](DPane.md).[getThemeDefault](DPane.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DPane](DPane.md).[getType](DPane.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L147)

___

### getWheelContentX

▸ **getWheelContentX**(`content`, `delta`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `delta` | `number` |

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[getWheelContentX](DPane.md#getwheelcontentx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L243)

___

### getWheelContentY

▸ **getWheelContentY**(`content`, `delta`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `delta` | `number` |

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[getWheelContentY](DPane.md#getwheelcontenty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L251)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DPane](DPane.md).[getWidth](DPane.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DPane](DPane.md).[getX](DPane.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DPane](DPane.md).[getY](DPane.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[hasDirty](DPane.md#hasdirty)

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

#### Inherited from

[DPane](DPane.md).[hasRefitableHeight](DPane.md#hasrefitableheight)

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

#### Inherited from

[DPane](DPane.md).[hasRefitableWidth](DPane.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Inherited from

[DPane](DPane.md).[hide](DPane.md#hide)

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

#### Inherited from

[DPane](DPane.md).[init](DPane.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1137)

___

### initContent

▸ **initContent**(`content`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[initContent](DPane.md#initcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L203)

___

### initGesture

▸ **initGesture**(`theme`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[initGesture](DPane.md#initgesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L94)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[initReflowable](DPane.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### initScrollBar

▸ **initScrollBar**(`scrollbar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scrollbar` | [`DPaneScrollBar`](DPaneScrollBar.md)\<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\> |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[initScrollBar](DPane.md#initscrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L141)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isDirty](DPane.md#isdirty)

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

#### Inherited from

[DPane](DPane.md).[isEventTarget](DPane.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isHidden](DPane.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isHierarchyDirty](DPane.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

___

### isRefitable

▸ **isRefitable**(`target`): target is DBase\<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase\<any, any\>

#### Inherited from

[DPane](DPane.md).[isRefitable](DPane.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L267)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[isShown](DPane.md#isshown)

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

#### Inherited from

[DPane](DPane.md).[listenerCount](DPane.md#listenercount)

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

[DPane](DPane.md).[listeners](DPane.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L124)

___

### newContent

▸ **newContent**(`options?`): [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CONTENT_OPTIONS` |

#### Returns

[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DPane](DPane.md).[newContent](DPane.md#newcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L199)

___

### newOverflowMask

▸ **newOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DPane](DPane.md).[newOverflowMask](DPane.md#newoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:221](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L221)

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

[DPane](DPane.md).[newPadding](DPane.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newScrollBar

▸ **newScrollBar**(`options?`): [`DPaneScrollBar`](DPaneScrollBar.md)\<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DPaneScrollBarOptions`](../interfaces/DPaneScrollBarOptions.md) |

#### Returns

[`DPaneScrollBar`](DPaneScrollBar.md)\<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

[DPane](DPane.md).[newScrollBar](DPane.md#newscrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L131)

___

### newUpdater

▸ **newUpdater**(`data`, `content`, `options?`): [`DListItemUpdater`](DListItemUpdater.md)\<`VALUE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DATA` |
| `content` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `options?` | `OPTIONS` |

#### Returns

[`DListItemUpdater`](DListItemUpdater.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L58)

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

[DPane](DPane.md).[off](DPane.md#off)

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

[DPane](DPane.md).[on](DPane.md#on)

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

[DPane](DPane.md).[on](DPane.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onBlur](DPane.md#onblur)

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

#### Inherited from

[DPane](DPane.md).[onChildBlur](DPane.md#onchildblur)

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

#### Inherited from

[DPane](DPane.md).[onChildFocus](DPane.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L300)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onChildrenChange](DPane.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

___

### onContentChange

▸ **onContentChange**(): `void`

#### Returns

`void`

#### Overrides

[DPane](DPane.md).[onContentChange](DPane.md#oncontentchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L107)

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

[DPane](DPane.md).[onDblClick](DPane.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2051)

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

[DPane](DPane.md).[onDown](DPane.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1979](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1979)

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

[DPane](DPane.md).[onDownThis](DPane.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onFocus](DPane.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onHierarchyDirty](DPane.md#onhierarchydirty)

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

#### Overrides

[DPane](DPane.md).[onKeyDown](DPane.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L142)

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

[DPane](DPane.md).[onKeyUp](DPane.md#onkeyup)

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

#### Inherited from

[DPane](DPane.md).[onMove](DPane.md#onmove)

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

#### Inherited from

[DPane](DPane.md).[onOut](DPane.md#onout)

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

#### Inherited from

[DPane](DPane.md).[onOver](DPane.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L168)

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

[DPane](DPane.md).[onParentMove](DPane.md#onparentmove)

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

#### Inherited from

[DPane](DPane.md).[onParentResize](DPane.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onRefit](DPane.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onReflow](DPane.md#onreflow)

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

#### Overrides

[DPane](DPane.md).[onResize](DPane.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L112)

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

[DPane](DPane.md).[onScale](DPane.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1236)

___

### onScrollBarMoveX

▸ **onScrollBarMoveX**(`start`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onScrollBarMoveX](DPane.md#onscrollbarmovex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L150)

___

### onScrollBarMoveY

▸ **onScrollBarMoveY**(`start`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onScrollBarMoveY](DPane.md#onscrollbarmovey)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L159)

___

### onScrollBarUpdate

▸ **onScrollBarUpdate**(`isRegionVisible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRegionVisible` | `boolean` |

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[onScrollBarUpdate](DPane.md#onscrollbarupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L137)

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

[DPane](DPane.md).[onShortcut](DPane.md#onshortcut)

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

#### Inherited from

[DPane](DPane.md).[onSkew](DPane.md#onskew)

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

#### Inherited from

[DPane](DPane.md).[onStateChange](DPane.md#onstatechange)

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

#### Inherited from

[DPane](DPane.md).[onUp](DPane.md#onup)

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

#### Inherited from

[DPane](DPane.md).[onUpThis](DPane.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

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

[DPane](DPane.md).[onWheel](DPane.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L228)

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

[DPane](DPane.md).[once](DPane.md#once)

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

[DPane](DPane.md).[once](DPane.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[reflow](DPane.md#reflow)

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

#### Inherited from

[DPane](DPane.md).[removeAllListeners](DPane.md#removealllisteners)

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

[DPane](DPane.md).[removeAllListeners](DPane.md#removealllisteners)

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

[DPane](DPane.md).[removeChild](DPane.md#removechild)

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

[DPane](DPane.md).[removeChildAt](DPane.md#removechildat)

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

[DPane](DPane.md).[removeChildren](DPane.md#removechildren)

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

[DPane](DPane.md).[removeListener](DPane.md#removelistener)

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

[DPane](DPane.md).[removeListener](DPane.md#removelistener)

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

[DPane](DPane.md).[render](DPane.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

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

[DPane](DPane.md).[renderAdvanced](DPane.md#renderadvanced)

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

[DPane](DPane.md).[resize](DPane.md#resize)

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

#### Inherited from

[DPane](DPane.md).[setChildIndex](DPane.md#setchildindex)

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

[DPane](DPane.md).[setFocused](DPane.md#setfocused)

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

#### Inherited from

[DPane](DPane.md).[setHeight](DPane.md#setheight)

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

#### Inherited from

[DPane](DPane.md).[setParent](DPane.md#setparent)

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

[DPane](DPane.md).[setTransform](DPane.md#settransform)

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

[DPane](DPane.md).[setWidth](DPane.md#setwidth)

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

#### Inherited from

[DPane](DPane.md).[setX](DPane.md#setx)

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

#### Inherited from

[DPane](DPane.md).[setY](DPane.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Inherited from

[DPane](DPane.md).[show](DPane.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[sortChildren](DPane.md#sortchildren)

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

[DPane](DPane.md).[swapChildren](DPane.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

___

### toContent

▸ **toContent**(`options?`): [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DPane](DPane.md).[toContent](DPane.md#tocontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L187)

___

### toContentX

▸ **toContentX**(`content`, `x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `x` | `number` |

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[toContentX](DPane.md#tocontentx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L259)

___

### toContentY

▸ **toContentY**(`content`, `y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `y` | `number` |

#### Returns

`number`

#### Inherited from

[DPane](DPane.md).[toContentY](DPane.md#tocontenty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-pane.ts#L263)

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

[DPane](DPane.md).[toCursor](DPane.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toData

▸ **toData**(`options?`): `DATA`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L71)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[toDirty](DPane.md#todirty)

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

#### Inherited from

[DPane](DPane.md).[toGlobal](DPane.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[toHasDirty](DPane.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPane](DPane.md).[toHierarchyDirty](DPane.md#tohierarchydirty)

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

#### Inherited from

[DPane](DPane.md).[toLocal](DPane.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[toParentHasDirty](DPane.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[toParentHierarchyDirty](DPane.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[toParentResized](DPane.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### unlock

▸ **unlock**(`callIfNeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callIfNeeded` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L128)

___

### update

▸ **update**(`forcibly?`): `void`

Updates items. If the `forcibly` is true, some dirty checkings for
avoiding unnecessary state changes are skipped.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `forcibly?` | `boolean` | true to update forcibly |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-list.ts#L138)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[DPane](DPane.md).[updateTransform](DPane.md#updatetransform)

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

[DPane](DPane.md).[mixin](DPane.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
