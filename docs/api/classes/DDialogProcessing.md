[Winter Cardinal UI - v0.407.0](../index.md) / DDialogProcessing

# Class: DDialogProcessing\<THEME, OPTIONS\>

A dialog with a header, a content and a footer.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogProcessing`](../interfaces/DThemeDialogProcessing.md) = [`DThemeDialogProcessing`](../interfaces/DThemeDialogProcessing.md) |
| `OPTIONS` | extends [`DDialogProcessingOptions`](../interfaces/DDialogProcessingOptions.md)\<`THEME`\> = [`DDialogProcessingOptions`](../interfaces/DDialogProcessingOptions.md)\<`THEME`\> |

## Hierarchy

- [`DDialogConfirm`](DDialogConfirm.md)\<`THEME`, `OPTIONS`\>

  ↳ **`DDialogProcessing`**

## Table of contents

### Constructors

- [constructor](DDialogProcessing.md#constructor)

### Properties

- [\_accessibleActive](DDialogProcessing.md#_accessibleactive)
- [\_accessibleDiv](DDialogProcessing.md#_accessiblediv)
- [\_align](DDialogProcessing.md#_align)
- [\_animation](DDialogProcessing.md#_animation)
- [\_auto](DDialogProcessing.md#_auto)
- [\_background](DDialogProcessing.md#_background)
- [\_border](DDialogProcessing.md#_border)
- [\_bounds](DDialogProcessing.md#_bounds)
- [\_boundsID](DDialogProcessing.md#_boundsid)
- [\_boundsRect](DDialogProcessing.md#_boundsrect)
- [\_clearType](DDialogProcessing.md#_cleartype)
- [\_closeOn](DDialogProcessing.md#_closeon)
- [\_closeTimeoutId](DDialogProcessing.md#_closetimeoutid)
- [\_content](DDialogProcessing.md#_content)
- [\_corner](DDialogProcessing.md#_corner)
- [\_cursor](DDialogProcessing.md#_cursor)
- [\_delayClose](DDialogProcessing.md#_delayclose)
- [\_delayDone](DDialogProcessing.md#_delaydone)
- [\_destroyed](DDialogProcessing.md#_destroyed)
- [\_enabledFilters](DDialogProcessing.md#_enabledfilters)
- [\_focused](DDialogProcessing.md#_focused)
- [\_footer](DDialogProcessing.md#_footer)
- [\_gesture](DDialogProcessing.md#_gesture)
- [\_header](DDialogProcessing.md#_header)
- [\_isDone](DDialogProcessing.md#_isdone)
- [\_lastDownPoint](DDialogProcessing.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogProcessing.md#_lastsortedindex)
- [\_layer](DDialogProcessing.md#_layer)
- [\_layout](DDialogProcessing.md#_layout)
- [\_localBounds](DDialogProcessing.md#_localbounds)
- [\_localBoundsRect](DDialogProcessing.md#_localboundsrect)
- [\_mask](DDialogProcessing.md#_mask)
- [\_message](DDialogProcessing.md#_message)
- [\_messageText](DDialogProcessing.md#_messagetext)
- [\_mode](DDialogProcessing.md#_mode)
- [\_onPrerenderBound](DDialogProcessing.md#_onprerenderbound)
- [\_opener](DDialogProcessing.md#_opener)
- [\_options](DDialogProcessing.md#_options)
- [\_outline](DDialogProcessing.md#_outline)
- [\_overlay](DDialogProcessing.md#_overlay)
- [\_padding](DDialogProcessing.md#_padding)
- [\_promise](DDialogProcessing.md#_promise)
- [\_reflowable](DDialogProcessing.md#_reflowable)
- [\_reject](DDialogProcessing.md#_reject)
- [\_resolve](DDialogProcessing.md#_resolve)
- [\_shortcuts](DDialogProcessing.md#_shortcuts)
- [\_snippet](DDialogProcessing.md#_snippet)
- [\_startTime](DDialogProcessing.md#_starttime)
- [\_sticky](DDialogProcessing.md#_sticky)
- [\_tempDisplayObjectParent](DDialogProcessing.md#_tempdisplayobjectparent)
- [\_timeoutId](DDialogProcessing.md#_timeoutid)
- [\_title](DDialogProcessing.md#_title)
- [\_zIndex](DDialogProcessing.md#_zindex)
- [accessible](DDialogProcessing.md#accessible)
- [accessibleChildren](DDialogProcessing.md#accessiblechildren)
- [accessibleHint](DDialogProcessing.md#accessiblehint)
- [accessiblePointerEvents](DDialogProcessing.md#accessiblepointerevents)
- [accessibleTitle](DDialogProcessing.md#accessibletitle)
- [accessibleType](DDialogProcessing.md#accessibletype)
- [alpha](DDialogProcessing.md#alpha)
- [angle](DDialogProcessing.md#angle)
- [buttonMode](DDialogProcessing.md#buttonmode)
- [cacheAsBitmap](DDialogProcessing.md#cacheasbitmap)
- [children](DDialogProcessing.md#children)
- [cursor](DDialogProcessing.md#cursor)
- [filterArea](DDialogProcessing.md#filterarea)
- [filters](DDialogProcessing.md#filters)
- [hitArea](DDialogProcessing.md#hitarea)
- [interactive](DDialogProcessing.md#interactive)
- [interactiveChildren](DDialogProcessing.md#interactivechildren)
- [isMask](DDialogProcessing.md#ismask)
- [isSprite](DDialogProcessing.md#issprite)
- [localTransform](DDialogProcessing.md#localtransform)
- [mask](DDialogProcessing.md#mask)
- [name](DDialogProcessing.md#name)
- [parent](DDialogProcessing.md#parent)
- [pivot](DDialogProcessing.md#pivot)
- [renderable](DDialogProcessing.md#renderable)
- [rotation](DDialogProcessing.md#rotation)
- [sortDirty](DDialogProcessing.md#sortdirty)
- [sortableChildren](DDialogProcessing.md#sortablechildren)
- [transform](DDialogProcessing.md#transform)
- [visible](DDialogProcessing.md#visible)
- [worldAlpha](DDialogProcessing.md#worldalpha)
- [worldTransform](DDialogProcessing.md#worldtransform)
- [worldVisible](DDialogProcessing.md#worldvisible)
- [zIndex](DDialogProcessing.md#zindex)
- [WORK\_BOUNDS](DDialogProcessing.md#work_bounds)
- [WORK\_CONTAINS\_POINT](DDialogProcessing.md#work_contains_point)

### Accessors

- [algin](DDialogProcessing.md#algin)
- [align](DDialogProcessing.md#align)
- [background](DDialogProcessing.md#background)
- [border](DDialogProcessing.md#border)
- [content](DDialogProcessing.md#content)
- [corner](DDialogProcessing.md#corner)
- [footer](DDialogProcessing.md#footer)
- [gesture](DDialogProcessing.md#gesture)
- [header](DDialogProcessing.md#header)
- [height](DDialogProcessing.md#height)
- [layer](DDialogProcessing.md#layer)
- [layout](DDialogProcessing.md#layout)
- [message](DDialogProcessing.md#message)
- [mode](DDialogProcessing.md#mode)
- [options](DDialogProcessing.md#options)
- [outline](DDialogProcessing.md#outline)
- [padding](DDialogProcessing.md#padding)
- [position](DDialogProcessing.md#position)
- [reflowable](DDialogProcessing.md#reflowable)
- [scale](DDialogProcessing.md#scale)
- [shadow](DDialogProcessing.md#shadow)
- [skew](DDialogProcessing.md#skew)
- [snippet](DDialogProcessing.md#snippet)
- [state](DDialogProcessing.md#state)
- [theme](DDialogProcessing.md#theme)
- [title](DDialogProcessing.md#title)
- [type](DDialogProcessing.md#type)
- [unsafe](DDialogProcessing.md#unsafe)
- [weight](DDialogProcessing.md#weight)
- [width](DDialogProcessing.md#width)
- [x](DDialogProcessing.md#x)
- [y](DDialogProcessing.md#y)

### Methods

- [\_calculateBounds](DDialogProcessing.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialogProcessing.md#_recursivepostupdatetransform)
- [\_render](DDialogProcessing.md#_render)
- [addChild](DDialogProcessing.md#addchild)
- [addChildAt](DDialogProcessing.md#addchildat)
- [addListener](DDialogProcessing.md#addlistener)
- [applyTitle](DDialogProcessing.md#applytitle)
- [blur](DDialogProcessing.md#blur)
- [calculateBounds](DDialogProcessing.md#calculatebounds)
- [cancel](DDialogProcessing.md#cancel)
- [close](DDialogProcessing.md#close)
- [containerUpdateTransform](DDialogProcessing.md#containerupdatetransform)
- [containsGlobalPoint](DDialogProcessing.md#containsglobalpoint)
- [containsLocalPoint](DDialogProcessing.md#containslocalpoint)
- [containsPoint](DDialogProcessing.md#containspoint)
- [destroy](DDialogProcessing.md#destroy)
- [disableTempParent](DDialogProcessing.md#disabletempparent)
- [displayObjectUpdateTransform](DDialogProcessing.md#displayobjectupdatetransform)
- [doReject](DDialogProcessing.md#doreject)
- [doResolve](DDialogProcessing.md#doresolve)
- [emit](DDialogProcessing.md#emit)
- [enableTempParent](DDialogProcessing.md#enabletempparent)
- [eventNames](DDialogProcessing.md#eventnames)
- [findFirstFocusable](DDialogProcessing.md#findfirstfocusable)
- [focus](DDialogProcessing.md#focus)
- [focusOnClosest](DDialogProcessing.md#focusonclosest)
- [getAnimation](DDialogProcessing.md#getanimation)
- [getBounds](DDialogProcessing.md#getbounds)
- [getChildAt](DDialogProcessing.md#getchildat)
- [getChildByName](DDialogProcessing.md#getchildbyname)
- [getChildIndex](DDialogProcessing.md#getchildindex)
- [getClearType](DDialogProcessing.md#getcleartype)
- [getClippingRect](DDialogProcessing.md#getclippingrect)
- [getGlobalPosition](DDialogProcessing.md#getglobalposition)
- [getHeight](DDialogProcessing.md#getheight)
- [getLocalBounds](DDialogProcessing.md#getlocalbounds)
- [getParentOfSize](DDialogProcessing.md#getparentofsize)
- [getRejectReason](DDialogProcessing.md#getrejectreason)
- [getResolvedValue](DDialogProcessing.md#getresolvedvalue)
- [getThemeDefault](DDialogProcessing.md#getthemedefault)
- [getType](DDialogProcessing.md#gettype)
- [getWidth](DDialogProcessing.md#getwidth)
- [getX](DDialogProcessing.md#getx)
- [getY](DDialogProcessing.md#gety)
- [hasDirty](DDialogProcessing.md#hasdirty)
- [hasRefitableHeight](DDialogProcessing.md#hasrefitableheight)
- [hasRefitableWidth](DDialogProcessing.md#hasrefitablewidth)
- [hide](DDialogProcessing.md#hide)
- [init](DDialogProcessing.md#init)
- [initReflowable](DDialogProcessing.md#initreflowable)
- [isDirty](DDialogProcessing.md#isdirty)
- [isEventTarget](DDialogProcessing.md#iseventtarget)
- [isHidden](DDialogProcessing.md#ishidden)
- [isHierarchyDirty](DDialogProcessing.md#ishierarchydirty)
- [isOpened](DDialogProcessing.md#isopened)
- [isRefitable](DDialogProcessing.md#isrefitable)
- [isShown](DDialogProcessing.md#isshown)
- [listenerCount](DDialogProcessing.md#listenercount)
- [listeners](DDialogProcessing.md#listeners)
- [newContent](DDialogProcessing.md#newcontent)
- [newContentChildren](DDialogProcessing.md#newcontentchildren)
- [newFooter](DDialogProcessing.md#newfooter)
- [newHeader](DDialogProcessing.md#newheader)
- [newLayout](DDialogProcessing.md#newlayout)
- [newLayoutChildren](DDialogProcessing.md#newlayoutchildren)
- [newLayoutOptions](DDialogProcessing.md#newlayoutoptions)
- [newMessage](DDialogProcessing.md#newmessage)
- [newPadding](DDialogProcessing.md#newpadding)
- [off](DDialogProcessing.md#off)
- [ok](DDialogProcessing.md#ok)
- [on](DDialogProcessing.md#on)
- [onAnimationEnd](DDialogProcessing.md#onanimationend)
- [onBlur](DDialogProcessing.md#onblur)
- [onCancel](DDialogProcessing.md#oncancel)
- [onChildBlur](DDialogProcessing.md#onchildblur)
- [onChildFocus](DDialogProcessing.md#onchildfocus)
- [onChildrenChange](DDialogProcessing.md#onchildrenchange)
- [onClose](DDialogProcessing.md#onclose)
- [onCloseOn](DDialogProcessing.md#oncloseon)
- [onDblClick](DDialogProcessing.md#ondblclick)
- [onDone](DDialogProcessing.md#ondone)
- [onDown](DDialogProcessing.md#ondown)
- [onDownThis](DDialogProcessing.md#ondownthis)
- [onFocus](DDialogProcessing.md#onfocus)
- [onHierarchyDirty](DDialogProcessing.md#onhierarchydirty)
- [onKeyDown](DDialogProcessing.md#onkeydown)
- [onKeyUp](DDialogProcessing.md#onkeyup)
- [onMove](DDialogProcessing.md#onmove)
- [onOk](DDialogProcessing.md#onok)
- [onOpen](DDialogProcessing.md#onopen)
- [onOut](DDialogProcessing.md#onout)
- [onOver](DDialogProcessing.md#onover)
- [onParentMove](DDialogProcessing.md#onparentmove)
- [onParentResize](DDialogProcessing.md#onparentresize)
- [onPrerender](DDialogProcessing.md#onprerender)
- [onRefit](DDialogProcessing.md#onrefit)
- [onReflow](DDialogProcessing.md#onreflow)
- [onRejected](DDialogProcessing.md#onrejected)
- [onResize](DDialogProcessing.md#onresize)
- [onResolved](DDialogProcessing.md#onresolved)
- [onScale](DDialogProcessing.md#onscale)
- [onShortcut](DDialogProcessing.md#onshortcut)
- [onSkew](DDialogProcessing.md#onskew)
- [onStateChange](DDialogProcessing.md#onstatechange)
- [onUp](DDialogProcessing.md#onup)
- [onUpThis](DDialogProcessing.md#onupthis)
- [onWheel](DDialogProcessing.md#onwheel)
- [once](DDialogProcessing.md#once)
- [open](DDialogProcessing.md#open)
- [reflow](DDialogProcessing.md#reflow)
- [reject](DDialogProcessing.md#reject)
- [removeAllListeners](DDialogProcessing.md#removealllisteners)
- [removeChild](DDialogProcessing.md#removechild)
- [removeChildAt](DDialogProcessing.md#removechildat)
- [removeChildren](DDialogProcessing.md#removechildren)
- [removeListener](DDialogProcessing.md#removelistener)
- [render](DDialogProcessing.md#render)
- [renderAdvanced](DDialogProcessing.md#renderadvanced)
- [resize](DDialogProcessing.md#resize)
- [resolve](DDialogProcessing.md#resolve)
- [setChildIndex](DDialogProcessing.md#setchildindex)
- [setFocused](DDialogProcessing.md#setfocused)
- [setHeight](DDialogProcessing.md#setheight)
- [setParent](DDialogProcessing.md#setparent)
- [setTransform](DDialogProcessing.md#settransform)
- [setWidth](DDialogProcessing.md#setwidth)
- [setX](DDialogProcessing.md#setx)
- [setY](DDialogProcessing.md#sety)
- [show](DDialogProcessing.md#show)
- [sortChildren](DDialogProcessing.md#sortchildren)
- [swapChildren](DDialogProcessing.md#swapchildren)
- [toAlign](DDialogProcessing.md#toalign)
- [toCloseOn](DDialogProcessing.md#tocloseon)
- [toContentOptions](DDialogProcessing.md#tocontentoptions)
- [toCursor](DDialogProcessing.md#tocursor)
- [toDirty](DDialogProcessing.md#todirty)
- [toFooterOptions](DDialogProcessing.md#tofooteroptions)
- [toGestureOptions](DDialogProcessing.md#togestureoptions)
- [toGlobal](DDialogProcessing.md#toglobal)
- [toHasDirty](DDialogProcessing.md#tohasdirty)
- [toHeaderOptions](DDialogProcessing.md#toheaderoptions)
- [toHierarchyDirty](DDialogProcessing.md#tohierarchydirty)
- [toLayoutOptions](DDialogProcessing.md#tolayoutoptions)
- [toLocal](DDialogProcessing.md#tolocal)
- [toMessage](DDialogProcessing.md#tomessage)
- [toMessageOptions](DDialogProcessing.md#tomessageoptions)
- [toMessageOptionsMerged](DDialogProcessing.md#tomessageoptionsmerged)
- [toParentHasDirty](DDialogProcessing.md#toparenthasdirty)
- [toParentHierarchyDirty](DDialogProcessing.md#toparenthierarchydirty)
- [toParentResized](DDialogProcessing.md#toparentresized)
- [updateTransform](DDialogProcessing.md#updatetransform)
- [mixin](DDialogProcessing.md#mixin)

## Constructors

### constructor

• **new DDialogProcessing**\<`THEME`, `OPTIONS`\>(`options?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogProcessing`](../interfaces/DThemeDialogProcessing.md) = [`DThemeDialogProcessing`](../interfaces/DThemeDialogProcessing.md) |
| `OPTIONS` | extends [`DDialogProcessingOptions`](../interfaces/DDialogProcessingOptions.md)\<`THEME`\> = [`DDialogProcessingOptions`](../interfaces/DDialogProcessingOptions.md)\<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Overrides

[DDialogConfirm](DDialogConfirm.md).[constructor](DDialogConfirm.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L39)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_accessibleActive](DDialogConfirm.md#_accessibleactive)

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

[DDialogConfirm](DDialogConfirm.md).[_accessibleDiv](DDialogConfirm.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_align

• `Protected` **\_align**: ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_align](DDialogConfirm.md#_align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L129)

___

### \_animation

• `Protected` `Optional` **\_animation**: ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_animation](DDialogConfirm.md#_animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L122)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_auto](DDialogConfirm.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_background](DDialogConfirm.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_border](DDialogConfirm.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_bounds](DDialogConfirm.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_boundsID](DDialogConfirm.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_boundsRect](DDialogConfirm.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_clearType](DDialogConfirm.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_closeOn

• `Protected` **\_closeOn**: `number`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_closeOn](DDialogConfirm.md#_closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L123)

___

### \_closeTimeoutId

• `Protected` `Optional` **\_closeTimeoutId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L37)

___

### \_content

• `Protected` `Optional` **\_content**: [`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_content](DDialogConfirm.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L98)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_corner](DDialogConfirm.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_cursor](DDialogConfirm.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_delayClose

• `Protected` **\_delayClose**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L34)

___

### \_delayDone

• `Protected` **\_delayDone**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L33)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_destroyed](DDialogConfirm.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_enabledFilters](DDialogConfirm.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_focused

• `Protected` `Optional` **\_focused**: ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_focused](DDialogConfirm.md#_focused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L124)

___

### \_footer

• `Protected` `Optional` **\_footer**: ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_footer](DDialogConfirm.md#_footer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L99)

___

### \_gesture

• `Protected` **\_gesture**: [`DDialogGesture`](../interfaces/DDialogGesture.md)\<[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_gesture](DDialogConfirm.md#_gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L132)

___

### \_header

• `Protected` `Optional` **\_header**: ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_header](DDialogConfirm.md#_header)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L97)

___

### \_isDone

• `Protected` **\_isDone**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L31)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_lastDownPoint](DDialogConfirm.md#_lastdownpoint)

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

[DDialogConfirm](DDialogConfirm.md).[_lastSortedIndex](DDialogConfirm.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_layer

• `Protected` **\_layer**: ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_layer](DDialogConfirm.md#_layer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L133)

___

### \_layout

• `Protected` `Optional` **\_layout**: [`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_layout](DDialogConfirm.md#_layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L95)

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_localBounds](DDialogConfirm.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_localBoundsRect](DDialogConfirm.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_mask](DDialogConfirm.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_message

• `Protected` `Optional` **\_message**: [`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_message](DDialogConfirm.md#_message)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L27)

___

### \_messageText

• `Protected` **\_messageText**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L36)

___

### \_mode

• `Protected` **\_mode**: [`DDialogMode`](../index.md#ddialogmode-1)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_mode](DDialogConfirm.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L126)

___

### \_onPrerenderBound

• `Protected` **\_onPrerenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_onPrerenderBound](DDialogConfirm.md#_onprerenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L128)

___

### \_opener

• `Protected` `Optional` **\_opener**: ``null`` \| [`DDialogOpener`](../interfaces/DDialogOpener.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_opener](DDialogConfirm.md#_opener)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L130)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_options](DDialogConfirm.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_outline](DDialogConfirm.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overlay

• `Protected` **\_overlay**: [`UtilOverlay`](UtilOverlay.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_overlay](DDialogConfirm.md#_overlay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L125)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_padding](DDialogConfirm.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_promise

• `Protected` `Optional` **\_promise**: `Promise`\<`void`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_promise](DDialogConfirm.md#_promise)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L118)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_reflowable](DDialogConfirm.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

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

[DDialogConfirm](DDialogConfirm.md).[_reject](DDialogConfirm.md#_reject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L120)

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

[DDialogConfirm](DDialogConfirm.md).[_resolve](DDialogConfirm.md#_resolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L119)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_shortcuts](DDialogConfirm.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_snippet](DDialogConfirm.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_startTime

• `Protected` **\_startTime**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L32)

___

### \_sticky

• `Protected` **\_sticky**: `boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_sticky](DDialogConfirm.md#_sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L127)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_tempDisplayObjectParent](DDialogConfirm.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_timeoutId

• `Protected` `Optional` **\_timeoutId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L35)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_title](DDialogConfirm.md#_title)

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

[DDialogConfirm](DDialogConfirm.md).[_zIndex](DDialogConfirm.md#_zindex)

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

[DDialogConfirm](DDialogConfirm.md).[accessible](DDialogConfirm.md#accessible)

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

[DDialogConfirm](DDialogConfirm.md).[accessibleChildren](DDialogConfirm.md#accessiblechildren)

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

[DDialogConfirm](DDialogConfirm.md).[accessibleHint](DDialogConfirm.md#accessiblehint)

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

[DDialogConfirm](DDialogConfirm.md).[accessiblePointerEvents](DDialogConfirm.md#accessiblepointerevents)

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

[DDialogConfirm](DDialogConfirm.md).[accessibleTitle](DDialogConfirm.md#accessibletitle)

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

[DDialogConfirm](DDialogConfirm.md).[accessibleType](DDialogConfirm.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[alpha](DDialogConfirm.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[angle](DDialogConfirm.md#angle)

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

[DDialogConfirm](DDialogConfirm.md).[buttonMode](DDialogConfirm.md#buttonmode)

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

[DDialogConfirm](DDialogConfirm.md).[cacheAsBitmap](DDialogConfirm.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[children](DDialogConfirm.md#children)

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

[DDialogConfirm](DDialogConfirm.md).[cursor](DDialogConfirm.md#cursor)

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

[DDialogConfirm](DDialogConfirm.md).[filterArea](DDialogConfirm.md#filterarea)

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

[DDialogConfirm](DDialogConfirm.md).[filters](DDialogConfirm.md#filters)

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

[DDialogConfirm](DDialogConfirm.md).[hitArea](DDialogConfirm.md#hitarea)

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

[DDialogConfirm](DDialogConfirm.md).[interactive](DDialogConfirm.md#interactive)

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

[DDialogConfirm](DDialogConfirm.md).[interactiveChildren](DDialogConfirm.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[isMask](DDialogConfirm.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[isSprite](DDialogConfirm.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[localTransform](DDialogConfirm.md#localtransform)

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

[DDialogConfirm](DDialogConfirm.md).[mask](DDialogConfirm.md#mask)

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

[DDialogConfirm](DDialogConfirm.md).[name](DDialogConfirm.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[parent](DDialogConfirm.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[pivot](DDialogConfirm.md#pivot)

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

[DDialogConfirm](DDialogConfirm.md).[renderable](DDialogConfirm.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[rotation](DDialogConfirm.md#rotation)

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

[DDialogConfirm](DDialogConfirm.md).[sortDirty](DDialogConfirm.md#sortdirty)

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

[DDialogConfirm](DDialogConfirm.md).[sortableChildren](DDialogConfirm.md#sortablechildren)

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

[DDialogConfirm](DDialogConfirm.md).[transform](DDialogConfirm.md#transform)

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

[DDialogConfirm](DDialogConfirm.md).[visible](DDialogConfirm.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[worldAlpha](DDialogConfirm.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[worldTransform](DDialogConfirm.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[worldVisible](DDialogConfirm.md#worldvisible)

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

[DDialogConfirm](DDialogConfirm.md).[zIndex](DDialogConfirm.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### WORK\_BOUNDS

▪ `Static` `Protected` `Optional` **WORK\_BOUNDS**: `Rectangle`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[WORK_BOUNDS](DDialogConfirm.md#work_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L116)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[WORK_CONTAINS_POINT](DDialogConfirm.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### algin

• `set` **algin**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1) |

#### Returns

`void`

#### Inherited from

DDialogConfirm.algin

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L223)

___

### align

• `get` **align**(): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

DDialogConfirm.align

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L219)

___

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDialogConfirm.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDialogConfirm.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### content

• `get` **content**(): [`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

DDialogConfirm.content

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L170)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDialogConfirm.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### footer

• `get` **footer**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

DDialogConfirm.footer

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L195)

___

### gesture

• `get` **gesture**(): [`DDialogGesture`](../interfaces/DDialogGesture.md)\<`this`\>

#### Returns

[`DDialogGesture`](../interfaces/DDialogGesture.md)\<`this`\>

#### Inherited from

DDialogConfirm.gesture

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L227)

___

### header

• `get` **header**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

DDialogConfirm.header

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L140)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDialogConfirm.height

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

DDialogConfirm.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

___

### layer

• `get` **layer**(): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

DDialogConfirm.layer

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L231)

___

### layout

• `get` **layout**(): [`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

DDialogConfirm.layout

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L106)

___

### message

• `get` **message**(): [`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Returns

[`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Inherited from

DDialogConfirm.message

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L76)

___

### mode

• `get` **mode**(): [`DDialogMode`](../index.md#ddialogmode-1)

#### Returns

[`DDialogMode`](../index.md#ddialogmode-1)

#### Inherited from

DDialogConfirm.mode

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L215)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DDialogConfirm.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDialogConfirm.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDialogConfirm.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1455)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogConfirm.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDialogConfirm.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogConfirm.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1446](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1446)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDialogConfirm.shadow

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

DDialogConfirm.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogConfirm.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1451)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDialogConfirm.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDialogConfirm.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDialogConfirm.theme

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

DDialogConfirm.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDialogConfirm.title

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

DDialogConfirm.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDialogConfirm.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1238)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDialogConfirm.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDialogConfirm.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDialogConfirm.width

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

DDialogConfirm.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDialogConfirm.x

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

DDialogConfirm.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1247)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDialogConfirm.y

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

DDialogConfirm.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1287)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[_calculateBounds](DDialogConfirm.md#_calculatebounds)

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

[DDialogConfirm](DDialogConfirm.md).[_recursivePostUpdateTransform](DDialogConfirm.md#_recursivepostupdatetransform)

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

[DDialogConfirm](DDialogConfirm.md).[_render](DDialogConfirm.md#_render)

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

[DDialogConfirm](DDialogConfirm.md).[addChild](DDialogConfirm.md#addchild)

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

[DDialogConfirm](DDialogConfirm.md).[addChildAt](DDialogConfirm.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[addListener](DDialogConfirm.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25521

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[addListener](DDialogConfirm.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[applyTitle](DDialogConfirm.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1492)

___

### blur

▸ **blur**(`recursively?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[blur](DDialogConfirm.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1598)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[calculateBounds](DDialogConfirm.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[cancel](DDialogConfirm.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L238)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[close](DDialogConfirm.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L425)

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

[DDialogConfirm](DDialogConfirm.md).[containerUpdateTransform](DDialogConfirm.md#containerupdatetransform)

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

[DDialogConfirm](DDialogConfirm.md).[containsGlobalPoint](DDialogConfirm.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L508)

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

[DDialogConfirm](DDialogConfirm.md).[containsLocalPoint](DDialogConfirm.md#containslocalpoint)

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

[DDialogConfirm](DDialogConfirm.md).[containsPoint](DDialogConfirm.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2077](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2077)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[destroy](DDialogConfirm.md#destroy)

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

[DDialogConfirm](DDialogConfirm.md).[disableTempParent](DDialogConfirm.md#disabletempparent)

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

[DDialogConfirm](DDialogConfirm.md).[displayObjectUpdateTransform](DDialogConfirm.md#displayobjectupdatetransform)

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

[DDialogConfirm](DDialogConfirm.md).[doReject](DDialogConfirm.md#doreject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L442)

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

[DDialogConfirm](DDialogConfirm.md).[doResolve](DDialogConfirm.md#doresolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:429](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L429)

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

[DDialogConfirm](DDialogConfirm.md).[emit](DDialogConfirm.md#emit)

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

[DDialogConfirm](DDialogConfirm.md).[enableTempParent](DDialogConfirm.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[eventNames](DDialogConfirm.md#eventnames)

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

[DDialogConfirm](DDialogConfirm.md).[findFirstFocusable](DDialogConfirm.md#findfirstfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L225)

___

### focus

▸ **focus**(): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[focus](DDialogConfirm.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1594)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[focusOnClosest](DDialogConfirm.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2012)

___

### getAnimation

▸ **getAnimation**(): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)\<`unknown`\>

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)\<`unknown`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getAnimation](DDialogConfirm.md#getanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L280)

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

[DDialogConfirm](DDialogConfirm.md).[getBounds](DDialogConfirm.md#getbounds)

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

[DDialogConfirm](DDialogConfirm.md).[getChildAt](DDialogConfirm.md#getchildat)

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

[DDialogConfirm](DDialogConfirm.md).[getChildByName](DDialogConfirm.md#getchildbyname)

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

[DDialogConfirm](DDialogConfirm.md).[getChildIndex](DDialogConfirm.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getClearType](DDialogConfirm.md#getcleartype)

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

[DDialogConfirm](DDialogConfirm.md).[getClippingRect](DDialogConfirm.md#getclippingrect)

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

[DDialogConfirm](DDialogConfirm.md).[getGlobalPosition](DDialogConfirm.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getHeight](DDialogConfirm.md#getheight)

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

[DDialogConfirm](DDialogConfirm.md).[getLocalBounds](DDialogConfirm.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getParentOfSize](DDialogConfirm.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1879](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1879)

___

### getRejectReason

▸ **getRejectReason**(): `any`

#### Returns

`any`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getRejectReason](DDialogConfirm.md#getrejectreason)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L249)

___

### getResolvedValue

▸ **getResolvedValue**(): `void` \| `PromiseLike`\<`void`\>

#### Returns

`void` \| `PromiseLike`\<`void`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getResolvedValue](DDialogConfirm.md#getresolvedvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L85)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getThemeDefault](DDialogConfirm.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2063)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDialogConfirm](DDialogConfirm.md).[getType](DDialogConfirm.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L155)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getWidth](DDialogConfirm.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getX](DDialogConfirm.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[getY](DDialogConfirm.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[hasDirty](DDialogConfirm.md#hasdirty)

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

[DDialogConfirm](DDialogConfirm.md).[hasRefitableHeight](DDialogConfirm.md#hasrefitableheight)

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

[DDialogConfirm](DDialogConfirm.md).[hasRefitableWidth](DDialogConfirm.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1835](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1835)

___

### hide

▸ **hide**(): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[hide](DDialogConfirm.md#hide)

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

[DDialogConfirm](DDialogConfirm.md).[init](DDialogConfirm.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L101)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[initReflowable](DDialogConfirm.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[isDirty](DDialogConfirm.md#isdirty)

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

[DDialogConfirm](DDialogConfirm.md).[isEventTarget](DDialogConfirm.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1957](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1957)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[isHidden](DDialogConfirm.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1522)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[isHierarchyDirty](DDialogConfirm.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1568)

___

### isOpened

▸ **isOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[isOpened](DDialogConfirm.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L421)

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

[DDialogConfirm](DDialogConfirm.md).[isRefitable](DDialogConfirm.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[isShown](DDialogConfirm.md#isshown)

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

[DDialogConfirm](DDialogConfirm.md).[listenerCount](DDialogConfirm.md#listenercount)

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

[DDialogConfirm](DDialogConfirm.md).[listeners](DDialogConfirm.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newContent

▸ **newContent**(): [`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogLayeredContent`](DDialogLayeredContent.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[newContent](DDialogConfirm.md#newcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L179)

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

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[newContentChildren](DDialogConfirm.md#newcontentchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L29)

___

### newFooter

▸ **newFooter**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[newFooter](DDialogConfirm.md#newfooter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L204)

___

### newHeader

▸ **newHeader**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[newHeader](DDialogConfirm.md#newheader)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L149)

___

### newLayout

▸ **newLayout**(): [`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[newLayout](DDialogConfirm.md#newlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L115)

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

[DDialogConfirm](DDialogConfirm.md).[newLayoutChildren](DDialogConfirm.md#newlayoutchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L136)

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

[DDialogConfirm](DDialogConfirm.md).[newLayoutOptions](DDialogConfirm.md#newlayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L128)

___

### newMessage

▸ **newMessage**(`options`): [`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\> |

#### Returns

[`DDialogConfirmMessage`](DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>\>

#### Overrides

[DDialogConfirm](DDialogConfirm.md).[newMessage](DDialogConfirm.md#newmessage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L51)

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

[DDialogConfirm](DDialogConfirm.md).[newPadding](DDialogConfirm.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[off](DDialogConfirm.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25534

___

### ok

▸ **ok**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[ok](DDialogConfirm.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L229)

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[on](DDialogConfirm.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25530

▸ **on**(`event`, `fn`, `context?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[on](DDialogConfirm.md#on)

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

[DDialogConfirm](DDialogConfirm.md).[onAnimationEnd](DDialogConfirm.md#onanimationend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L295)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[onBlur](DDialogConfirm.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1671)

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

[DDialogConfirm](DDialogConfirm.md).[onCancel](DDialogConfirm.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L242)

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

[DDialogConfirm](DDialogConfirm.md).[onChildBlur](DDialogConfirm.md#onchildblur)

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

[DDialogConfirm](DDialogConfirm.md).[onChildFocus](DDialogConfirm.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1650)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[onChildrenChange](DDialogConfirm.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

___

### onClose

▸ **onClose**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[onClose](DDialogConfirm.md#onclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L455)

___

### onCloseOn

▸ **onCloseOn**(): `void`

#### Returns

`void`

#### Overrides

[DDialogConfirm](DDialogConfirm.md).[onCloseOn](DDialogConfirm.md#oncloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L149)

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

[DDialogConfirm](DDialogConfirm.md).[onDblClick](DDialogConfirm.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2044](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L2044)

___

### onDone

▸ **onDone**(`delay`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L76)

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

[DDialogConfirm](DDialogConfirm.md).[onDown](DDialogConfirm.md#ondown)

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

[DDialogConfirm](DDialogConfirm.md).[onDownThis](DDialogConfirm.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1978](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1978)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[onFocus](DDialogConfirm.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1657)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[onHierarchyDirty](DDialogConfirm.md#onhierarchydirty)

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

[DDialogConfirm](DDialogConfirm.md).[onKeyDown](DDialogConfirm.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:495](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L495)

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

[DDialogConfirm](DDialogConfirm.md).[onKeyUp](DDialogConfirm.md#onkeyup)

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

[DDialogConfirm](DDialogConfirm.md).[onMove](DDialogConfirm.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

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

[DDialogConfirm](DDialogConfirm.md).[onOk](DDialogConfirm.md#onok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L233)

___

### onOpen

▸ **onOpen**(): `void`

#### Returns

`void`

#### Overrides

[DDialogConfirm](DDialogConfirm.md).[onOpen](DDialogConfirm.md#onopen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L55)

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

[DDialogConfirm](DDialogConfirm.md).[onOut](DDialogConfirm.md#onout)

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

[DDialogConfirm](DDialogConfirm.md).[onOver](DDialogConfirm.md#onover)

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

[DDialogConfirm](DDialogConfirm.md).[onParentMove](DDialogConfirm.md#onparentmove)

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

[DDialogConfirm](DDialogConfirm.md).[onParentResize](DDialogConfirm.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L266)

___

### onPrerender

▸ **onPrerender**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[onPrerender](DDialogConfirm.md#onprerender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:380](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L380)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[onRefit](DDialogConfirm.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1731](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1731)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[onReflow](DDialogConfirm.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1841](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1841)

___

### onRejected

▸ **onRejected**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L104)

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

[DDialogConfirm](DDialogConfirm.md).[onResize](DDialogConfirm.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1211)

___

### onResolved

▸ **onResolved**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L86)

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

[DDialogConfirm](DDialogConfirm.md).[onScale](DDialogConfirm.md#onscale)

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

[DDialogConfirm](DDialogConfirm.md).[onShortcut](DDialogConfirm.md#onshortcut)

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

[DDialogConfirm](DDialogConfirm.md).[onSkew](DDialogConfirm.md#onskew)

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

[DDialogConfirm](DDialogConfirm.md).[onStateChange](DDialogConfirm.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1621](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1621)

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

[DDialogConfirm](DDialogConfirm.md).[onUp](DDialogConfirm.md#onup)

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

[DDialogConfirm](DDialogConfirm.md).[onUpThis](DDialogConfirm.md#onupthis)

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

[DDialogConfirm](DDialogConfirm.md).[onWheel](DDialogConfirm.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1940](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1940)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[once](DDialogConfirm.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25527

▸ **once**(`event`, `fn`, `context?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[once](DDialogConfirm.md#once)

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

[DDialogConfirm](DDialogConfirm.md).[open](DDialogConfirm.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L328)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[reflow](DDialogConfirm.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1704)

___

### reject

▸ **reject**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L133)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[removeAllListeners](DDialogConfirm.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[removeAllListeners](DDialogConfirm.md#removealllisteners)

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

[DDialogConfirm](DDialogConfirm.md).[removeChild](DDialogConfirm.md#removechild)

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

[DDialogConfirm](DDialogConfirm.md).[removeChildAt](DDialogConfirm.md#removechildat)

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

[DDialogConfirm](DDialogConfirm.md).[removeChildren](DDialogConfirm.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8423

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[removeListener](DDialogConfirm.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25513

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[removeListener](DDialogConfirm.md#removelistener)

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

[DDialogConfirm](DDialogConfirm.md).[render](DDialogConfirm.md#render)

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

[DDialogConfirm](DDialogConfirm.md).[renderAdvanced](DDialogConfirm.md#renderadvanced)

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

[DDialogConfirm](DDialogConfirm.md).[resize](DDialogConfirm.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### resolve

▸ **resolve**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-processing.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-processing.ts#L117)

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

[DDialogConfirm](DDialogConfirm.md).[setChildIndex](DDialogConfirm.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8394

___

### setFocused

▸ **setFocused**(`isFocused`): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[setFocused](DDialogConfirm.md#setfocused)

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

[DDialogConfirm](DDialogConfirm.md).[setHeight](DDialogConfirm.md#setheight)

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

[DDialogConfirm](DDialogConfirm.md).[setParent](DDialogConfirm.md#setparent)

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

[DDialogConfirm](DDialogConfirm.md).[setTransform](DDialogConfirm.md#settransform)

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

[DDialogConfirm](DDialogConfirm.md).[setWidth](DDialogConfirm.md#setwidth)

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

[DDialogConfirm](DDialogConfirm.md).[setX](DDialogConfirm.md#setx)

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

[DDialogConfirm](DDialogConfirm.md).[setY](DDialogConfirm.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1300)

___

### show

▸ **show**(): [`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogProcessing`](DDialogProcessing.md)\<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[show](DDialogConfirm.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1499)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[sortChildren](DDialogConfirm.md#sortchildren)

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

[DDialogConfirm](DDialogConfirm.md).[swapChildren](DDialogConfirm.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

___

### toAlign

▸ **toAlign**(`mode`, `theme`, `options?`): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toAlign](DDialogConfirm.md#toalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L204)

___

### toCloseOn

▸ **toCloseOn**(`mode`, `theme`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`number`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toCloseOn](DDialogConfirm.md#tocloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L188)

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

[DDialogConfirm](DDialogConfirm.md).[toContentOptions](DDialogConfirm.md#tocontentoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L183)

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

[DDialogConfirm](DDialogConfirm.md).[toCursor](DDialogConfirm.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toDirty](DDialogConfirm.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1526)

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

[DDialogConfirm](DDialogConfirm.md).[toFooterOptions](DDialogConfirm.md#tofooteroptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L212)

___

### toGestureOptions

▸ **toGestureOptions**(`mode`, `theme`, `options?`): [`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toGestureOptions](DDialogConfirm.md#togestureoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L235)

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

[DDialogConfirm](DDialogConfirm.md).[toGlobal](DDialogConfirm.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toHasDirty](DDialogConfirm.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1535](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1535)

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

[DDialogConfirm](DDialogConfirm.md).[toHeaderOptions](DDialogConfirm.md#toheaderoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L157)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toHierarchyDirty](DDialogConfirm.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1551)

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

[DDialogConfirm](DDialogConfirm.md).[toLayoutOptions](DDialogConfirm.md#tolayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L119)

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

[DDialogConfirm](DDialogConfirm.md).[toLocal](DDialogConfirm.md#tolocal)

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

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toMessage](DDialogConfirm.md#tomessage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L35)

___

### toMessageOptions

▸ **toMessageOptions**(`message`): [`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`DStateAwareOrValue`](../index.md#dstateawareorvalue)\<`string`\> |

#### Returns

[`DDialogConfirmMessageOptions`](../interfaces/DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](../interfaces/DThemeDialogConfirmMessage.md)\>

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toMessageOptions](DDialogConfirm.md#tomessageoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L64)

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

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toMessageOptionsMerged](DDialogConfirm.md#tomessageoptionsmerged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L49)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toParentHasDirty](DDialogConfirm.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toParentHierarchyDirty](DDialogConfirm.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1561](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1561)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[toParentResized](DDialogConfirm.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L1872)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DDialogConfirm](DDialogConfirm.md).[updateTransform](DDialogConfirm.md#updatetransform)

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

[DDialogConfirm](DDialogConfirm.md).[mixin](DDialogConfirm.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
