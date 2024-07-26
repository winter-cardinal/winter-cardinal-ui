[Winter Cardinal UI - v0.442.0](../index.md) / DDialogConfirm

# Class: DDialogConfirm\<THEME, OPTIONS\>

A dialog with a header, a content and a footer.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogConfirm`](../interfaces/DThemeDialogConfirm.md) = [`DThemeDialogConfirm`](../interfaces/DThemeDialogConfirm.md) |
| `OPTIONS` | extends [`DDialogConfirmOptions`](../interfaces/DDialogConfirmOptions.md)\<`THEME`\> = [`DDialogConfirmOptions`](../interfaces/DDialogConfirmOptions.md)\<`THEME`\> |

## Hierarchy

- [`DDialogLayered`](DDialogLayered.md)\<`void`, `THEME`, `OPTIONS`\>

  ↳ **`DDialogConfirm`**

  ↳↳ [`DDialogConfirmDelete`](DDialogConfirmDelete.md)

  ↳↳ [`DDialogConfirmDiscard`](DDialogConfirmDiscard.md)

  ↳↳ [`DDialogMessage`](DDialogMessage.md)

  ↳↳ [`DDialogProcessing`](DDialogProcessing.md)

## Table of contents

### Constructors

- [constructor](DDialogConfirm.md#constructor)

### Properties

- [\_accessibleActive](DDialogConfirm.md#_accessibleactive)
- [\_accessibleDiv](DDialogConfirm.md#_accessiblediv)
- [\_align](DDialogConfirm.md#_align)
- [\_animation](DDialogConfirm.md#_animation)
- [\_auto](DDialogConfirm.md#_auto)
- [\_background](DDialogConfirm.md#_background)
- [\_border](DDialogConfirm.md#_border)
- [\_bounds](DDialogConfirm.md#_bounds)
- [\_boundsID](DDialogConfirm.md#_boundsid)
- [\_boundsRect](DDialogConfirm.md#_boundsrect)
- [\_clearType](DDialogConfirm.md#_cleartype)
- [\_closeOn](DDialogConfirm.md#_closeon)
- [\_content](DDialogConfirm.md#_content)
- [\_corner](DDialogConfirm.md#_corner)
- [\_cursor](DDialogConfirm.md#_cursor)
- [\_destroyed](DDialogConfirm.md#_destroyed)
- [\_enabledFilters](DDialogConfirm.md#_enabledfilters)
- [\_focused](DDialogConfirm.md#_focused)
- [\_footer](DDialogConfirm.md#_footer)
- [\_gesture](DDialogConfirm.md#_gesture)
- [\_header](DDialogConfirm.md#_header)
- [\_lastDownPoint](DDialogConfirm.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogConfirm.md#_lastsortedindex)
- [\_layer](DDialogConfirm.md#_layer)
- [\_layout](DDialogConfirm.md#_layout)
- [\_localBounds](DDialogConfirm.md#_localbounds)
- [\_localBoundsRect](DDialogConfirm.md#_localboundsrect)
- [\_mask](DDialogConfirm.md#_mask)
- [\_message](DDialogConfirm.md#_message)
- [\_mode](DDialogConfirm.md#_mode)
- [\_onPrerenderBound](DDialogConfirm.md#_onprerenderbound)
- [\_opener](DDialogConfirm.md#_opener)
- [\_options](DDialogConfirm.md#_options)
- [\_outline](DDialogConfirm.md#_outline)
- [\_overlay](DDialogConfirm.md#_overlay)
- [\_padding](DDialogConfirm.md#_padding)
- [\_promise](DDialogConfirm.md#_promise)
- [\_reflowable](DDialogConfirm.md#_reflowable)
- [\_reject](DDialogConfirm.md#_reject)
- [\_resolve](DDialogConfirm.md#_resolve)
- [\_shortcuts](DDialogConfirm.md#_shortcuts)
- [\_snippet](DDialogConfirm.md#_snippet)
- [\_sticky](DDialogConfirm.md#_sticky)
- [\_tempDisplayObjectParent](DDialogConfirm.md#_tempdisplayobjectparent)
- [\_title](DDialogConfirm.md#_title)
- [\_zIndex](DDialogConfirm.md#_zindex)
- [accessible](DDialogConfirm.md#accessible)
- [accessibleChildren](DDialogConfirm.md#accessiblechildren)
- [accessibleHint](DDialogConfirm.md#accessiblehint)
- [accessiblePointerEvents](DDialogConfirm.md#accessiblepointerevents)
- [accessibleTitle](DDialogConfirm.md#accessibletitle)
- [accessibleType](DDialogConfirm.md#accessibletype)
- [alpha](DDialogConfirm.md#alpha)
- [angle](DDialogConfirm.md#angle)
- [buttonMode](DDialogConfirm.md#buttonmode)
- [cacheAsBitmap](DDialogConfirm.md#cacheasbitmap)
- [children](DDialogConfirm.md#children)
- [cursor](DDialogConfirm.md#cursor)
- [filterArea](DDialogConfirm.md#filterarea)
- [filters](DDialogConfirm.md#filters)
- [hitArea](DDialogConfirm.md#hitarea)
- [interactive](DDialogConfirm.md#interactive)
- [interactiveChildren](DDialogConfirm.md#interactivechildren)
- [isMask](DDialogConfirm.md#ismask)
- [isSprite](DDialogConfirm.md#issprite)
- [localTransform](DDialogConfirm.md#localtransform)
- [mask](DDialogConfirm.md#mask)
- [name](DDialogConfirm.md#name)
- [parent](DDialogConfirm.md#parent)
- [pivot](DDialogConfirm.md#pivot)
- [renderable](DDialogConfirm.md#renderable)
- [rotation](DDialogConfirm.md#rotation)
- [sortDirty](DDialogConfirm.md#sortdirty)
- [sortableChildren](DDialogConfirm.md#sortablechildren)
- [transform](DDialogConfirm.md#transform)
- [visible](DDialogConfirm.md#visible)
- [worldAlpha](DDialogConfirm.md#worldalpha)
- [worldTransform](DDialogConfirm.md#worldtransform)
- [worldVisible](DDialogConfirm.md#worldvisible)
- [zIndex](DDialogConfirm.md#zindex)
- [WORK\_BOUNDS](DDialogConfirm.md#work_bounds)
- [WORK\_CONTAINS\_POINT](DDialogConfirm.md#work_contains_point)

### Accessors

- [algin](DDialogConfirm.md#algin)
- [align](DDialogConfirm.md#align)
- [background](DDialogConfirm.md#background)
- [border](DDialogConfirm.md#border)
- [content](DDialogConfirm.md#content)
- [corner](DDialogConfirm.md#corner)
- [footer](DDialogConfirm.md#footer)
- [gesture](DDialogConfirm.md#gesture)
- [header](DDialogConfirm.md#header)
- [height](DDialogConfirm.md#height)
- [layer](DDialogConfirm.md#layer)
- [layout](DDialogConfirm.md#layout)
- [message](DDialogConfirm.md#message)
- [mode](DDialogConfirm.md#mode)
- [options](DDialogConfirm.md#options)
- [outline](DDialogConfirm.md#outline)
- [padding](DDialogConfirm.md#padding)
- [position](DDialogConfirm.md#position)
- [reflowable](DDialogConfirm.md#reflowable)
- [scale](DDialogConfirm.md#scale)
- [shadow](DDialogConfirm.md#shadow)
- [skew](DDialogConfirm.md#skew)
- [snippet](DDialogConfirm.md#snippet)
- [state](DDialogConfirm.md#state)
- [theme](DDialogConfirm.md#theme)
- [title](DDialogConfirm.md#title)
- [type](DDialogConfirm.md#type)
- [unsafe](DDialogConfirm.md#unsafe)
- [weight](DDialogConfirm.md#weight)
- [width](DDialogConfirm.md#width)
- [x](DDialogConfirm.md#x)
- [y](DDialogConfirm.md#y)

### Methods

- [\_calculateBounds](DDialogConfirm.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialogConfirm.md#_recursivepostupdatetransform)
- [\_render](DDialogConfirm.md#_render)
- [addChild](DDialogConfirm.md#addchild)
- [addChildAt](DDialogConfirm.md#addchildat)
- [addListener](DDialogConfirm.md#addlistener)
- [applyTitle](DDialogConfirm.md#applytitle)
- [blur](DDialogConfirm.md#blur)
- [calculateBounds](DDialogConfirm.md#calculatebounds)
- [cancel](DDialogConfirm.md#cancel)
- [close](DDialogConfirm.md#close)
- [containerUpdateTransform](DDialogConfirm.md#containerupdatetransform)
- [containsGlobalPoint](DDialogConfirm.md#containsglobalpoint)
- [containsLocalPoint](DDialogConfirm.md#containslocalpoint)
- [containsPoint](DDialogConfirm.md#containspoint)
- [destroy](DDialogConfirm.md#destroy)
- [disableTempParent](DDialogConfirm.md#disabletempparent)
- [displayObjectUpdateTransform](DDialogConfirm.md#displayobjectupdatetransform)
- [doReject](DDialogConfirm.md#doreject)
- [doResolve](DDialogConfirm.md#doresolve)
- [emit](DDialogConfirm.md#emit)
- [enableTempParent](DDialogConfirm.md#enabletempparent)
- [eventNames](DDialogConfirm.md#eventnames)
- [findFirstFocusable](DDialogConfirm.md#findfirstfocusable)
- [focus](DDialogConfirm.md#focus)
- [focusOnClosest](DDialogConfirm.md#focusonclosest)
- [getAnimation](DDialogConfirm.md#getanimation)
- [getBounds](DDialogConfirm.md#getbounds)
- [getChildAt](DDialogConfirm.md#getchildat)
- [getChildByName](DDialogConfirm.md#getchildbyname)
- [getChildIndex](DDialogConfirm.md#getchildindex)
- [getClearType](DDialogConfirm.md#getcleartype)
- [getClippingRect](DDialogConfirm.md#getclippingrect)
- [getGlobalPosition](DDialogConfirm.md#getglobalposition)
- [getHeight](DDialogConfirm.md#getheight)
- [getLocalBounds](DDialogConfirm.md#getlocalbounds)
- [getParentOfSize](DDialogConfirm.md#getparentofsize)
- [getRejectReason](DDialogConfirm.md#getrejectreason)
- [getResolvedValue](DDialogConfirm.md#getresolvedvalue)
- [getThemeDefault](DDialogConfirm.md#getthemedefault)
- [getType](DDialogConfirm.md#gettype)
- [getWidth](DDialogConfirm.md#getwidth)
- [getX](DDialogConfirm.md#getx)
- [getY](DDialogConfirm.md#gety)
- [hasDirty](DDialogConfirm.md#hasdirty)
- [hasRefitableHeight](DDialogConfirm.md#hasrefitableheight)
- [hasRefitableWidth](DDialogConfirm.md#hasrefitablewidth)
- [hide](DDialogConfirm.md#hide)
- [init](DDialogConfirm.md#init)
- [initReflowable](DDialogConfirm.md#initreflowable)
- [isDirty](DDialogConfirm.md#isdirty)
- [isEventTarget](DDialogConfirm.md#iseventtarget)
- [isHidden](DDialogConfirm.md#ishidden)
- [isHierarchyDirty](DDialogConfirm.md#ishierarchydirty)
- [isOpened](DDialogConfirm.md#isopened)
- [isRefitable](DDialogConfirm.md#isrefitable)
- [isShown](DDialogConfirm.md#isshown)
- [listenerCount](DDialogConfirm.md#listenercount)
- [listeners](DDialogConfirm.md#listeners)
- [newContent](DDialogConfirm.md#newcontent)
- [newContentChildren](DDialogConfirm.md#newcontentchildren)
- [newFooter](DDialogConfirm.md#newfooter)
- [newHeader](DDialogConfirm.md#newheader)
- [newLayout](DDialogConfirm.md#newlayout)
- [newLayoutChildren](DDialogConfirm.md#newlayoutchildren)
- [newLayoutOptions](DDialogConfirm.md#newlayoutoptions)
- [newMessage](DDialogConfirm.md#newmessage)
- [newPadding](DDialogConfirm.md#newpadding)
- [off](DDialogConfirm.md#off)
- [ok](DDialogConfirm.md#ok)
- [on](DDialogConfirm.md#on)
- [onAnimationEnd](DDialogConfirm.md#onanimationend)
- [onBlur](DDialogConfirm.md#onblur)
- [onCancel](DDialogConfirm.md#oncancel)
- [onChildBlur](DDialogConfirm.md#onchildblur)
- [onChildFocus](DDialogConfirm.md#onchildfocus)
- [onChildrenChange](DDialogConfirm.md#onchildrenchange)
- [onClose](DDialogConfirm.md#onclose)
- [onCloseOn](DDialogConfirm.md#oncloseon)
- [onDblClick](DDialogConfirm.md#ondblclick)
- [onDown](DDialogConfirm.md#ondown)
- [onDownThis](DDialogConfirm.md#ondownthis)
- [onFocus](DDialogConfirm.md#onfocus)
- [onHierarchyDirty](DDialogConfirm.md#onhierarchydirty)
- [onKeyDown](DDialogConfirm.md#onkeydown)
- [onKeyUp](DDialogConfirm.md#onkeyup)
- [onMove](DDialogConfirm.md#onmove)
- [onOk](DDialogConfirm.md#onok)
- [onOpen](DDialogConfirm.md#onopen)
- [onOut](DDialogConfirm.md#onout)
- [onOver](DDialogConfirm.md#onover)
- [onParentMove](DDialogConfirm.md#onparentmove)
- [onParentResize](DDialogConfirm.md#onparentresize)
- [onPrerender](DDialogConfirm.md#onprerender)
- [onRefit](DDialogConfirm.md#onrefit)
- [onReflow](DDialogConfirm.md#onreflow)
- [onResize](DDialogConfirm.md#onresize)
- [onScale](DDialogConfirm.md#onscale)
- [onShortcut](DDialogConfirm.md#onshortcut)
- [onSkew](DDialogConfirm.md#onskew)
- [onStateChange](DDialogConfirm.md#onstatechange)
- [onUp](DDialogConfirm.md#onup)
- [onUpThis](DDialogConfirm.md#onupthis)
- [onWheel](DDialogConfirm.md#onwheel)
- [once](DDialogConfirm.md#once)
- [open](DDialogConfirm.md#open)
- [reflow](DDialogConfirm.md#reflow)
- [removeAllListeners](DDialogConfirm.md#removealllisteners)
- [removeChild](DDialogConfirm.md#removechild)
- [removeChildAt](DDialogConfirm.md#removechildat)
- [removeChildren](DDialogConfirm.md#removechildren)
- [removeListener](DDialogConfirm.md#removelistener)
- [render](DDialogConfirm.md#render)
- [renderAdvanced](DDialogConfirm.md#renderadvanced)
- [resize](DDialogConfirm.md#resize)
- [setChildIndex](DDialogConfirm.md#setchildindex)
- [setFocused](DDialogConfirm.md#setfocused)
- [setHeight](DDialogConfirm.md#setheight)
- [setParent](DDialogConfirm.md#setparent)
- [setTransform](DDialogConfirm.md#settransform)
- [setWidth](DDialogConfirm.md#setwidth)
- [setX](DDialogConfirm.md#setx)
- [setY](DDialogConfirm.md#sety)
- [show](DDialogConfirm.md#show)
- [sortChildren](DDialogConfirm.md#sortchildren)
- [swapChildren](DDialogConfirm.md#swapchildren)
- [toAlign](DDialogConfirm.md#toalign)
- [toCloseOn](DDialogConfirm.md#tocloseon)
- [toContentOptions](DDialogConfirm.md#tocontentoptions)
- [toCursor](DDialogConfirm.md#tocursor)
- [toDirty](DDialogConfirm.md#todirty)
- [toFooterOptions](DDialogConfirm.md#tofooteroptions)
- [toGestureOptions](DDialogConfirm.md#togestureoptions)
- [toGlobal](DDialogConfirm.md#toglobal)
- [toHasDirty](DDialogConfirm.md#tohasdirty)
- [toHeaderOptions](DDialogConfirm.md#toheaderoptions)
- [toHierarchyDirty](DDialogConfirm.md#tohierarchydirty)
- [toLayoutOptions](DDialogConfirm.md#tolayoutoptions)
- [toLocal](DDialogConfirm.md#tolocal)
- [toMessage](DDialogConfirm.md#tomessage)
- [toMessageOptions](DDialogConfirm.md#tomessageoptions)
- [toMessageOptionsMerged](DDialogConfirm.md#tomessageoptionsmerged)
- [toParentHasDirty](DDialogConfirm.md#toparenthasdirty)
- [toParentHierarchyDirty](DDialogConfirm.md#toparenthierarchydirty)
- [toParentResized](DDialogConfirm.md#toparentresized)
- [updateTransform](DDialogConfirm.md#updatetransform)
- [mixin](DDialogConfirm.md#mixin)

## Constructors

### constructor

• **new DDialogConfirm**\<`THEME`, `OPTIONS`\>(`options?`): [`DDialogConfirm`](DDialogConfirm.md)\<`THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogConfirm`](../interfaces/DThemeDialogConfirm.md) = [`DThemeDialogConfirm`](../interfaces/DThemeDialogConfirm.md) |
| `OPTIONS` | extends [`DDialogConfirmOptions`](../interfaces/DDialogConfirmOptions.md)\<`THEME`\> = [`DDialogConfirmOptions`](../interfaces/DDialogConfirmOptions.md)\<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogConfirm`](DDialogConfirm.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[constructor](DDialogLayered.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:798](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L798)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_accessibleActive](DDialogLayered.md#_accessibleactive)

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

[DDialogLayered](DDialogLayered.md).[_accessibleDiv](DDialogLayered.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_align

• `Protected` **\_align**: ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_align](DDialogLayered.md#_align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L129)

___

### \_animation

• `Protected` `Optional` **\_animation**: ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_animation](DDialogLayered.md#_animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L122)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_auto](DDialogLayered.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_background](DDialogLayered.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_border](DDialogLayered.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_bounds](DDialogLayered.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_boundsID](DDialogLayered.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_boundsRect](DDialogLayered.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_clearType](DDialogLayered.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_closeOn

• `Protected` **\_closeOn**: `number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_closeOn](DDialogLayered.md#_closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L123)

___

### \_content

• `Protected` `Optional` **\_content**: [`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_content](DDialogLayered.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L98)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_corner](DDialogLayered.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_cursor](DDialogLayered.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_destroyed](DDialogLayered.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_enabledFilters](DDialogLayered.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_focused

• `Protected` `Optional` **\_focused**: ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_focused](DDialogLayered.md#_focused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L124)

___

### \_footer

• `Protected` `Optional` **\_footer**: ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_footer](DDialogLayered.md#_footer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L99)

___

### \_gesture

• `Protected` **\_gesture**: [`DDialogGesture`](../interfaces/DDialogGesture.md)\<[`DDialogConfirm`](DDialogConfirm.md)\<`THEME`, `OPTIONS`\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_gesture](DDialogLayered.md#_gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L132)

___

### \_header

• `Protected` `Optional` **\_header**: ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_header](DDialogLayered.md#_header)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L97)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_lastDownPoint](DDialogLayered.md#_lastdownpoint)

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

[DDialogLayered](DDialogLayered.md).[_lastSortedIndex](DDialogLayered.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_layer

• `Protected` **\_layer**: ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_layer](DDialogLayered.md#_layer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L133)

___

### \_layout

• `Protected` `Optional` **\_layout**: [`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_layout](DDialogLayered.md#_layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L95)

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_localBounds](DDialogLayered.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_localBoundsRect](DDialogLayered.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_mask](DDialogLayered.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_message

• `Protected` `Optional` **\_message**: [`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L27)

___

### \_mode

• `Protected` **\_mode**: [`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_mode](DDialogLayered.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L126)

___

### \_onPrerenderBound

• `Protected` **\_onPrerenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_onPrerenderBound](DDialogLayered.md#_onprerenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L128)

___

### \_opener

• `Protected` `Optional` **\_opener**: ``null`` \| [`DDialogOpener`](../interfaces/DDialogOpener.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_opener](DDialogLayered.md#_opener)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L130)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_options](DDialogLayered.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_outline](DDialogLayered.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overlay

• `Protected` **\_overlay**: [`UtilOverlay`](UtilOverlay.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_overlay](DDialogLayered.md#_overlay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L125)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_padding](DDialogLayered.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_promise

• `Protected` `Optional` **\_promise**: `Promise`\<`void`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_promise](DDialogLayered.md#_promise)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L118)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_reflowable](DDialogLayered.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_reject

• `Protected` `Optional` **\_reject**: (`reason?`: `any`) => `void`

#### Type declaration

▸ (`reason?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

##### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_reject](DDialogLayered.md#_reject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L120)

___

### \_resolve

• `Protected` `Optional` **\_resolve**: (`value`: `void` \| `PromiseLike`\<`void`\>) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` \| `PromiseLike`\<`void`\> |

##### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_resolve](DDialogLayered.md#_resolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L119)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_shortcuts](DDialogLayered.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_snippet](DDialogLayered.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_sticky

• `Protected` **\_sticky**: `boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_sticky](DDialogLayered.md#_sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L127)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_tempDisplayObjectParent](DDialogLayered.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_title](DDialogLayered.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_zIndex](DDialogLayered.md#_zindex)

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

[DDialogLayered](DDialogLayered.md).[accessible](DDialogLayered.md#accessible)

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

[DDialogLayered](DDialogLayered.md).[accessibleChildren](DDialogLayered.md#accessiblechildren)

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

[DDialogLayered](DDialogLayered.md).[accessibleHint](DDialogLayered.md#accessiblehint)

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

[DDialogLayered](DDialogLayered.md).[accessiblePointerEvents](DDialogLayered.md#accessiblepointerevents)

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

[DDialogLayered](DDialogLayered.md).[accessibleTitle](DDialogLayered.md#accessibletitle)

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

[DDialogLayered](DDialogLayered.md).[accessibleType](DDialogLayered.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DDialogLayered](DDialogLayered.md).[alpha](DDialogLayered.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[angle](DDialogLayered.md#angle)

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

[DDialogLayered](DDialogLayered.md).[buttonMode](DDialogLayered.md#buttonmode)

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

[DDialogLayered](DDialogLayered.md).[cacheAsBitmap](DDialogLayered.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DDialogLayered](DDialogLayered.md).[children](DDialogLayered.md#children)

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

[DDialogLayered](DDialogLayered.md).[cursor](DDialogLayered.md#cursor)

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

[DDialogLayered](DDialogLayered.md).[filterArea](DDialogLayered.md#filterarea)

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

[DDialogLayered](DDialogLayered.md).[filters](DDialogLayered.md#filters)

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

[DDialogLayered](DDialogLayered.md).[hitArea](DDialogLayered.md#hitarea)

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

[DDialogLayered](DDialogLayered.md).[interactive](DDialogLayered.md#interactive)

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

[DDialogLayered](DDialogLayered.md).[interactiveChildren](DDialogLayered.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isMask](DDialogLayered.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isSprite](DDialogLayered.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[localTransform](DDialogLayered.md#localtransform)

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

[DDialogLayered](DDialogLayered.md).[mask](DDialogLayered.md#mask)

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

[DDialogLayered](DDialogLayered.md).[name](DDialogLayered.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DDialogLayered](DDialogLayered.md).[parent](DDialogLayered.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[pivot](DDialogLayered.md#pivot)

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

[DDialogLayered](DDialogLayered.md).[renderable](DDialogLayered.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[rotation](DDialogLayered.md#rotation)

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

[DDialogLayered](DDialogLayered.md).[sortDirty](DDialogLayered.md#sortdirty)

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

[DDialogLayered](DDialogLayered.md).[sortableChildren](DDialogLayered.md#sortablechildren)

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

[DDialogLayered](DDialogLayered.md).[transform](DDialogLayered.md#transform)

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

[DDialogLayered](DDialogLayered.md).[visible](DDialogLayered.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DDialogLayered](DDialogLayered.md).[worldAlpha](DDialogLayered.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[worldTransform](DDialogLayered.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[worldVisible](DDialogLayered.md#worldvisible)

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

[DDialogLayered](DDialogLayered.md).[zIndex](DDialogLayered.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### WORK\_BOUNDS

▪ `Static` `Protected` `Optional` **WORK\_BOUNDS**: `Rectangle`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[WORK_BOUNDS](DDialogLayered.md#work_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L116)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[WORK_CONTAINS_POINT](DDialogLayered.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### algin

• `set` **algin**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign) |

#### Returns

`void`

#### Inherited from

DDialogLayered.algin

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L223)

___

### align

• `get` **align**(): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

DDialogLayered.align

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L219)

___

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDialogLayered.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDialogLayered.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### content

• `get` **content**(): [`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

DDialogLayered.content

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L170)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDialogLayered.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### footer

• `get` **footer**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

DDialogLayered.footer

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L195)

___

### gesture

• `get` **gesture**(): [`DDialogGesture`](../interfaces/DDialogGesture.md)\<`this`\>

#### Returns

[`DDialogGesture`](../interfaces/DDialogGesture.md)\<`this`\>

#### Inherited from

DDialogLayered.gesture

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L227)

___

### header

• `get` **header**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

DDialogLayered.header

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L140)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.height

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

DDialogLayered.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### layer

• `get` **layer**(): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

DDialogLayered.layer

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L231)

___

### layout

• `get` **layout**(): [`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

DDialogLayered.layout

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L106)

___

### message

• `get` **message**(): [`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Returns

[`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L76)

___

### mode

• `get` **mode**(): [`DDialogMode`](../index.md#ddialogmode)

#### Returns

[`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

DDialogLayered.mode

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L215)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DDialogLayered.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDialogLayered.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDialogLayered.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayered.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDialogLayered.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayered.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDialogLayered.shadow

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

DDialogLayered.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayered.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDialogLayered.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDialogLayered.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDialogLayered.theme

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

DDialogLayered.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDialogLayered.title

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

DDialogLayered.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDialogLayered.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDialogLayered.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.weight

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

DDialogLayered.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.width

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

DDialogLayered.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.x

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

DDialogLayered.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.y

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

DDialogLayered.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_calculateBounds](DDialogLayered.md#_calculatebounds)

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

[DDialogLayered](DDialogLayered.md).[_recursivePostUpdateTransform](DDialogLayered.md#_recursivepostupdatetransform)

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

[DDialogLayered](DDialogLayered.md).[_render](DDialogLayered.md#_render)

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

[DDialogLayered](DDialogLayered.md).[addChild](DDialogLayered.md#addchild)

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

[DDialogLayered](DDialogLayered.md).[addChildAt](DDialogLayered.md#addchildat)

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

[DDialogLayered](DDialogLayered.md).[addListener](DDialogLayered.md#addlistener)

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

[DDialogLayered](DDialogLayered.md).[addListener](DDialogLayered.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[applyTitle](DDialogLayered.md#applytitle)

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

[DDialogLayered](DDialogLayered.md).[blur](DDialogLayered.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[calculateBounds](DDialogLayered.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[cancel](DDialogLayered.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L238)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[close](DDialogLayered.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L425)

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

[DDialogLayered](DDialogLayered.md).[containerUpdateTransform](DDialogLayered.md#containerupdatetransform)

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

[DDialogLayered](DDialogLayered.md).[containsGlobalPoint](DDialogLayered.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L508)

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

[DDialogLayered](DDialogLayered.md).[containsLocalPoint](DDialogLayered.md#containslocalpoint)

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

[DDialogLayered](DDialogLayered.md).[containsPoint](DDialogLayered.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[destroy](DDialogLayered.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2122)

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

[DDialogLayered](DDialogLayered.md).[disableTempParent](DDialogLayered.md#disabletempparent)

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

[DDialogLayered](DDialogLayered.md).[displayObjectUpdateTransform](DDialogLayered.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8926

___

### doReject

▸ **doReject**(`reason?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[doReject](DDialogLayered.md#doreject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L442)

___

### doResolve

▸ **doResolve**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` \| `PromiseLike`\<`void`\> |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[doResolve](DDialogLayered.md#doresolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:429](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L429)

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

[DDialogLayered](DDialogLayered.md).[emit](DDialogLayered.md#emit)

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

[DDialogLayered](DDialogLayered.md).[enableTempParent](DDialogLayered.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[eventNames](DDialogLayered.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### findFirstFocusable

▸ **findFirstFocusable**(`focusController`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusController` | [`DControllerFocus`](../interfaces/DControllerFocus.md) |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[findFirstFocusable](DDialogLayered.md#findfirstfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L225)

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[focus](DDialogLayered.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[focusOnClosest](DDialogLayered.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

___

### getAnimation

▸ **getAnimation**(): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)\<`unknown`\>

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)\<`unknown`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getAnimation](DDialogLayered.md#getanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L280)

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

[DDialogLayered](DDialogLayered.md).[getBounds](DDialogLayered.md#getbounds)

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

[DDialogLayered](DDialogLayered.md).[getChildAt](DDialogLayered.md#getchildat)

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

[DDialogLayered](DDialogLayered.md).[getChildByName](DDialogLayered.md#getchildbyname)

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

[DDialogLayered](DDialogLayered.md).[getChildIndex](DDialogLayered.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getClearType](DDialogLayered.md#getcleartype)

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

[DDialogLayered](DDialogLayered.md).[getClippingRect](DDialogLayered.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

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

[DDialogLayered](DDialogLayered.md).[getGlobalPosition](DDialogLayered.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getHeight](DDialogLayered.md#getheight)

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

[DDialogLayered](DDialogLayered.md).[getLocalBounds](DDialogLayered.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getParentOfSize](DDialogLayered.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getRejectReason

▸ **getRejectReason**(): `any`

#### Returns

`any`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getRejectReason](DDialogLayered.md#getrejectreason)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L249)

___

### getResolvedValue

▸ **getResolvedValue**(): `void` \| `PromiseLike`\<`void`\>

#### Returns

`void` \| `PromiseLike`\<`void`\>

#### Overrides

[DDialogLayered](DDialogLayered.md).[getResolvedValue](DDialogLayered.md#getresolvedvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L85)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getThemeDefault](DDialogLayered.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDialogLayered](DDialogLayered.md).[getType](DDialogLayered.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L89)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getWidth](DDialogLayered.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getX](DDialogLayered.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getY](DDialogLayered.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[hasDirty](DDialogLayered.md#hasdirty)

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

[DDialogLayered](DDialogLayered.md).[hasRefitableHeight](DDialogLayered.md#hasrefitableheight)

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

[DDialogLayered](DDialogLayered.md).[hasRefitableWidth](DDialogLayered.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[hide](DDialogLayered.md#hide)

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

[DDialogLayered](DDialogLayered.md).[init](DDialogLayered.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L101)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[initReflowable](DDialogLayered.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isDirty](DDialogLayered.md#isdirty)

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

[DDialogLayered](DDialogLayered.md).[isEventTarget](DDialogLayered.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isHidden](DDialogLayered.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isHierarchyDirty](DDialogLayered.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

___

### isOpened

▸ **isOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isOpened](DDialogLayered.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L421)

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

[DDialogLayered](DDialogLayered.md).[isRefitable](DDialogLayered.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1821)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isShown](DDialogLayered.md#isshown)

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

[DDialogLayered](DDialogLayered.md).[listenerCount](DDialogLayered.md#listenercount)

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

[DDialogLayered](DDialogLayered.md).[listeners](DDialogLayered.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newContent

▸ **newContent**(): [`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newContent](DDialogLayered.md#newcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L179)

___

### newContentChildren

▸ **newContentChildren**(`theme`, `options?`): (``null`` \| `DisplayObject`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

(``null`` \| `DisplayObject`)[]

#### Overrides

[DDialogLayered](DDialogLayered.md).[newContentChildren](DDialogLayered.md#newcontentchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L29)

___

### newFooter

▸ **newFooter**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newFooter](DDialogLayered.md#newfooter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L204)

___

### newHeader

▸ **newHeader**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newHeader](DDialogLayered.md#newheader)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L149)

___

### newLayout

▸ **newLayout**(): [`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newLayout](DDialogLayered.md#newlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L115)

___

### newLayoutChildren

▸ **newLayoutChildren**(`theme`, `options?`): (``null`` \| `DisplayObject`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

(``null`` \| `DisplayObject`)[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newLayoutChildren](DDialogLayered.md#newlayoutchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L136)

___

### newLayoutOptions

▸ **newLayoutOptions**(`theme`, `options?`): [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newLayoutOptions](DDialogLayered.md#newlayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L128)

___

### newMessage

▸ **newMessage**(`options`): [`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\> |

#### Returns

[`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L72)

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

[DDialogLayered](DDialogLayered.md).[newPadding](DDialogLayered.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

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

[DDialogLayered](DDialogLayered.md).[off](DDialogLayered.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25534

___

### ok

▸ **ok**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[ok](DDialogLayered.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L229)

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

[DDialogLayered](DDialogLayered.md).[on](DDialogLayered.md#on)

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

[DDialogLayered](DDialogLayered.md).[on](DDialogLayered.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onAnimationEnd

▸ **onAnimationEnd**(`isReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReverse` | `boolean` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onAnimationEnd](DDialogLayered.md#onanimationend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L295)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onBlur](DDialogLayered.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

___

### onCancel

▸ **onCancel**(`reason`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onCancel](DDialogLayered.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L242)

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

[DDialogLayered](DDialogLayered.md).[onChildBlur](DDialogLayered.md#onchildblur)

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

[DDialogLayered](DDialogLayered.md).[onChildFocus](DDialogLayered.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onChildrenChange](DDialogLayered.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

___

### onClose

▸ **onClose**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onClose](DDialogLayered.md#onclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L455)

___

### onCloseOn

▸ **onCloseOn**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onCloseOn](DDialogLayered.md#oncloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L504)

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

[DDialogLayered](DDialogLayered.md).[onDblClick](DDialogLayered.md#ondblclick)

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

[DDialogLayered](DDialogLayered.md).[onDown](DDialogLayered.md#ondown)

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

[DDialogLayered](DDialogLayered.md).[onDownThis](DDialogLayered.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onFocus](DDialogLayered.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onHierarchyDirty](DDialogLayered.md#onhierarchydirty)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onKeyDown](DDialogLayered.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:495](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L495)

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

[DDialogLayered](DDialogLayered.md).[onKeyUp](DDialogLayered.md#onkeyup)

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

[DDialogLayered](DDialogLayered.md).[onMove](DDialogLayered.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### onOk

▸ **onOk**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `void` \| `PromiseLike`\<`void`\> |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onOk](DDialogLayered.md#onok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L233)

___

### onOpen

▸ **onOpen**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onOpen](DDialogLayered.md#onopen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:408](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L408)

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

[DDialogLayered](DDialogLayered.md).[onOut](DDialogLayered.md#onout)

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

[DDialogLayered](DDialogLayered.md).[onOver](DDialogLayered.md#onover)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onParentMove](DDialogLayered.md#onparentmove)

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

[DDialogLayered](DDialogLayered.md).[onParentResize](DDialogLayered.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L266)

___

### onPrerender

▸ **onPrerender**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onPrerender](DDialogLayered.md#onprerender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:380](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L380)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onRefit](DDialogLayered.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onReflow](DDialogLayered.md#onreflow)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onResize](DDialogLayered.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

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

[DDialogLayered](DDialogLayered.md).[onScale](DDialogLayered.md#onscale)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onShortcut](DDialogLayered.md#onshortcut)

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

[DDialogLayered](DDialogLayered.md).[onSkew](DDialogLayered.md#onskew)

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

[DDialogLayered](DDialogLayered.md).[onStateChange](DDialogLayered.md#onstatechange)

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

[DDialogLayered](DDialogLayered.md).[onUp](DDialogLayered.md#onup)

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

[DDialogLayered](DDialogLayered.md).[onUpThis](DDialogLayered.md#onupthis)

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

[DDialogLayered](DDialogLayered.md).[onWheel](DDialogLayered.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

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

[DDialogLayered](DDialogLayered.md).[once](DDialogLayered.md#once)

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

[DDialogLayered](DDialogLayered.md).[once](DDialogLayered.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### open

▸ **open**(`opener?`): `Promise`\<`void`\>

Opens a dialog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opener?` | [`DDialogOpener`](../interfaces/DDialogOpener.md) | An opener of a dialog. The dialog position is determined based on a position and a size of the opener. If the opener is undefined, the dialog is placed at the center of the screen. |

#### Returns

`Promise`\<`void`\>

a value of this dialog

#### Inherited from

[DDialogLayered](DDialogLayered.md).[open](DDialogLayered.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L328)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[reflow](DDialogLayered.md#reflow)

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

[DDialogLayered](DDialogLayered.md).[removeAllListeners](DDialogLayered.md#removealllisteners)

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

[DDialogLayered](DDialogLayered.md).[removeAllListeners](DDialogLayered.md#removealllisteners)

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

[DDialogLayered](DDialogLayered.md).[removeChild](DDialogLayered.md#removechild)

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

[DDialogLayered](DDialogLayered.md).[removeChildAt](DDialogLayered.md#removechildat)

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

[DDialogLayered](DDialogLayered.md).[removeChildren](DDialogLayered.md#removechildren)

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

[DDialogLayered](DDialogLayered.md).[removeListener](DDialogLayered.md#removelistener)

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

[DDialogLayered](DDialogLayered.md).[removeListener](DDialogLayered.md#removelistener)

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

[DDialogLayered](DDialogLayered.md).[render](DDialogLayered.md#render)

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

[DDialogLayered](DDialogLayered.md).[renderAdvanced](DDialogLayered.md#renderadvanced)

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

[DDialogLayered](DDialogLayered.md).[resize](DDialogLayered.md#resize)

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

[DDialogLayered](DDialogLayered.md).[setChildIndex](DDialogLayered.md#setchildindex)

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

[DDialogLayered](DDialogLayered.md).[setFocused](DDialogLayered.md#setfocused)

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

[DDialogLayered](DDialogLayered.md).[setHeight](DDialogLayered.md#setheight)

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

[DDialogLayered](DDialogLayered.md).[setParent](DDialogLayered.md#setparent)

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

[DDialogLayered](DDialogLayered.md).[setTransform](DDialogLayered.md#settransform)

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

[DDialogLayered](DDialogLayered.md).[setWidth](DDialogLayered.md#setwidth)

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

[DDialogLayered](DDialogLayered.md).[setX](DDialogLayered.md#setx)

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

[DDialogLayered](DDialogLayered.md).[setY](DDialogLayered.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[show](DDialogLayered.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[sortChildren](DDialogLayered.md#sortchildren)

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

[DDialogLayered](DDialogLayered.md).[swapChildren](DDialogLayered.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

___

### toAlign

▸ **toAlign**(`mode`, `theme`, `options?`): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toAlign](DDialogLayered.md#toalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L204)

___

### toCloseOn

▸ **toCloseOn**(`mode`, `theme`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toCloseOn](DDialogLayered.md#tocloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L188)

___

### toContentOptions

▸ **toContentOptions**(`theme`, `options?`): [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toContentOptions](DDialogLayered.md#tocontentoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L183)

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

[DDialogLayered](DDialogLayered.md).[toCursor](DDialogLayered.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toDirty](DDialogLayered.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1534)

___

### toFooterOptions

▸ **toFooterOptions**(`theme`, `options?`): `undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toFooterOptions](DDialogLayered.md#tofooteroptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L212)

___

### toGestureOptions

▸ **toGestureOptions**(`mode`, `theme`, `options?`): [`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toGestureOptions](DDialogLayered.md#togestureoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L235)

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

[DDialogLayered](DDialogLayered.md).[toGlobal](DDialogLayered.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toHasDirty](DDialogLayered.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHeaderOptions

▸ **toHeaderOptions**(`theme`, `options?`): `undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toHeaderOptions](DDialogLayered.md#toheaderoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L157)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toHierarchyDirty](DDialogLayered.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

___

### toLayoutOptions

▸ **toLayoutOptions**(`theme`, `options?`): [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toLayoutOptions](DDialogLayered.md#tolayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L119)

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

[DDialogLayered](DDialogLayered.md).[toLocal](DDialogLayered.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toMessage

▸ **toMessage**(`theme`, `options?`): [`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L35)

___

### toMessageOptions

▸ **toMessageOptions**(`message`): [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`DStateAwareOrValue`](../index.md#dstateawareorvalue)\<`string`\> |

#### Returns

[`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L64)

___

### toMessageOptionsMerged

▸ **toMessageOptionsMerged**(`options`, `message`): [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\> |
| `message` | [`DStateAwareOrValue`](../index.md#dstateawareorvalue)\<`string`\> |

#### Returns

[`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L49)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toParentHasDirty](DDialogLayered.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toParentHierarchyDirty](DDialogLayered.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toParentResized](DDialogLayered.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[updateTransform](DDialogLayered.md#updatetransform)

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

[DDialogLayered](DDialogLayered.md).[mixin](DDialogLayered.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
