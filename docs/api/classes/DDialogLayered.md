[Winter Cardinal UI - v0.227.0](../index.md) / DDialogLayered

# Class: DDialogLayered<VALUE, THEME, OPTIONS\>

A dialog with a header, a content and a footer.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `void` |
| `THEME` | extends [`DThemeDialogLayered`](../interfaces/DThemeDialogLayered.md) = [`DThemeDialogLayered`](../interfaces/DThemeDialogLayered.md) |
| `OPTIONS` | extends [`DDialogLayeredOptions`](../interfaces/DDialogLayeredOptions.md)<`VALUE`, `THEME`\> = [`DDialogLayeredOptions`](../interfaces/DDialogLayeredOptions.md)<`VALUE`, `THEME`\> |

## Hierarchy

- [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DDialogLayered`**

  ↳↳ [`DDialogConfirm`](DDialogConfirm.md)

  ↳↳ [`DDialogFitted`](DDialogFitted.md)

  ↳↳ [`DDialogInput`](DDialogInput.md)

  ↳↳ [`DDialogSelect`](DDialogSelect.md)

## Table of contents

### Constructors

- [constructor](DDialogLayered.md#constructor)

### Properties

- [\_accessibleActive](DDialogLayered.md#_accessibleactive)
- [\_accessibleDiv](DDialogLayered.md#_accessiblediv)
- [\_align](DDialogLayered.md#_align)
- [\_animation](DDialogLayered.md#_animation)
- [\_auto](DDialogLayered.md#_auto)
- [\_background](DDialogLayered.md#_background)
- [\_border](DDialogLayered.md#_border)
- [\_bounds](DDialogLayered.md#_bounds)
- [\_clearType](DDialogLayered.md#_cleartype)
- [\_closeOn](DDialogLayered.md#_closeon)
- [\_content](DDialogLayered.md#_content)
- [\_corner](DDialogLayered.md#_corner)
- [\_cursor](DDialogLayered.md#_cursor)
- [\_destroyed](DDialogLayered.md#_destroyed)
- [\_focused](DDialogLayered.md#_focused)
- [\_footer](DDialogLayered.md#_footer)
- [\_gesture](DDialogLayered.md#_gesture)
- [\_header](DDialogLayered.md#_header)
- [\_lastDownPoint](DDialogLayered.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogLayered.md#_lastsortedindex)
- [\_layer](DDialogLayered.md#_layer)
- [\_layout](DDialogLayered.md#_layout)
- [\_mask](DDialogLayered.md#_mask)
- [\_mode](DDialogLayered.md#_mode)
- [\_onPrerenderBound](DDialogLayered.md#_onprerenderbound)
- [\_opener](DDialogLayered.md#_opener)
- [\_options](DDialogLayered.md#_options)
- [\_outline](DDialogLayered.md#_outline)
- [\_overlay](DDialogLayered.md#_overlay)
- [\_padding](DDialogLayered.md#_padding)
- [\_promise](DDialogLayered.md#_promise)
- [\_reflowable](DDialogLayered.md#_reflowable)
- [\_reject](DDialogLayered.md#_reject)
- [\_resolve](DDialogLayered.md#_resolve)
- [\_shortcuts](DDialogLayered.md#_shortcuts)
- [\_snippet](DDialogLayered.md#_snippet)
- [\_sticky](DDialogLayered.md#_sticky)
- [\_tempDisplayObjectParent](DDialogLayered.md#_tempdisplayobjectparent)
- [\_title](DDialogLayered.md#_title)
- [\_zIndex](DDialogLayered.md#_zindex)
- [accessible](DDialogLayered.md#accessible)
- [accessibleChildren](DDialogLayered.md#accessiblechildren)
- [accessibleHint](DDialogLayered.md#accessiblehint)
- [accessiblePointerEvents](DDialogLayered.md#accessiblepointerevents)
- [accessibleTitle](DDialogLayered.md#accessibletitle)
- [accessibleType](DDialogLayered.md#accessibletype)
- [alpha](DDialogLayered.md#alpha)
- [angle](DDialogLayered.md#angle)
- [buttonMode](DDialogLayered.md#buttonmode)
- [cacheAsBitmap](DDialogLayered.md#cacheasbitmap)
- [children](DDialogLayered.md#children)
- [cursor](DDialogLayered.md#cursor)
- [filterArea](DDialogLayered.md#filterarea)
- [filters](DDialogLayered.md#filters)
- [hitArea](DDialogLayered.md#hitarea)
- [interactive](DDialogLayered.md#interactive)
- [interactiveChildren](DDialogLayered.md#interactivechildren)
- [isMask](DDialogLayered.md#ismask)
- [isSprite](DDialogLayered.md#issprite)
- [localTransform](DDialogLayered.md#localtransform)
- [mask](DDialogLayered.md#mask)
- [name](DDialogLayered.md#name)
- [parent](DDialogLayered.md#parent)
- [pivot](DDialogLayered.md#pivot)
- [renderable](DDialogLayered.md#renderable)
- [rotation](DDialogLayered.md#rotation)
- [sortDirty](DDialogLayered.md#sortdirty)
- [sortableChildren](DDialogLayered.md#sortablechildren)
- [transform](DDialogLayered.md#transform)
- [visible](DDialogLayered.md#visible)
- [worldAlpha](DDialogLayered.md#worldalpha)
- [worldTransform](DDialogLayered.md#worldtransform)
- [worldVisible](DDialogLayered.md#worldvisible)
- [zIndex](DDialogLayered.md#zindex)
- [WORK\_BOUNDS](DDialogLayered.md#work_bounds)
- [WORK\_CONTAINS\_POINT](DDialogLayered.md#work_contains_point)

### Accessors

- [algin](DDialogLayered.md#algin)
- [align](DDialogLayered.md#align)
- [background](DDialogLayered.md#background)
- [border](DDialogLayered.md#border)
- [content](DDialogLayered.md#content)
- [corner](DDialogLayered.md#corner)
- [footer](DDialogLayered.md#footer)
- [gesture](DDialogLayered.md#gesture)
- [header](DDialogLayered.md#header)
- [height](DDialogLayered.md#height)
- [layer](DDialogLayered.md#layer)
- [layout](DDialogLayered.md#layout)
- [mode](DDialogLayered.md#mode)
- [options](DDialogLayered.md#options)
- [outline](DDialogLayered.md#outline)
- [padding](DDialogLayered.md#padding)
- [position](DDialogLayered.md#position)
- [reflowable](DDialogLayered.md#reflowable)
- [scale](DDialogLayered.md#scale)
- [shadow](DDialogLayered.md#shadow)
- [skew](DDialogLayered.md#skew)
- [snippet](DDialogLayered.md#snippet)
- [state](DDialogLayered.md#state)
- [theme](DDialogLayered.md#theme)
- [title](DDialogLayered.md#title)
- [type](DDialogLayered.md#type)
- [unsafe](DDialogLayered.md#unsafe)
- [weight](DDialogLayered.md#weight)
- [width](DDialogLayered.md#width)
- [x](DDialogLayered.md#x)
- [y](DDialogLayered.md#y)

### Methods

- [\_calculateBounds](DDialogLayered.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialogLayered.md#_recursivepostupdatetransform)
- [\_render](DDialogLayered.md#_render)
- [addChild](DDialogLayered.md#addchild)
- [addChildAt](DDialogLayered.md#addchildat)
- [addListener](DDialogLayered.md#addlistener)
- [applyTitle](DDialogLayered.md#applytitle)
- [blur](DDialogLayered.md#blur)
- [calculateBounds](DDialogLayered.md#calculatebounds)
- [cancel](DDialogLayered.md#cancel)
- [close](DDialogLayered.md#close)
- [containsGlobalPoint](DDialogLayered.md#containsglobalpoint)
- [containsLocalPoint](DDialogLayered.md#containslocalpoint)
- [containsPoint](DDialogLayered.md#containspoint)
- [destroy](DDialogLayered.md#destroy)
- [displayObjectUpdateTransform](DDialogLayered.md#displayobjectupdatetransform)
- [doReject](DDialogLayered.md#doreject)
- [doResolve](DDialogLayered.md#doresolve)
- [emit](DDialogLayered.md#emit)
- [eventNames](DDialogLayered.md#eventnames)
- [findFirstFocusable](DDialogLayered.md#findfirstfocusable)
- [focus](DDialogLayered.md#focus)
- [focusOnClosest](DDialogLayered.md#focusonclosest)
- [getAnimation](DDialogLayered.md#getanimation)
- [getBounds](DDialogLayered.md#getbounds)
- [getChildAt](DDialogLayered.md#getchildat)
- [getChildByName](DDialogLayered.md#getchildbyname)
- [getChildIndex](DDialogLayered.md#getchildindex)
- [getClearType](DDialogLayered.md#getcleartype)
- [getClippingRect](DDialogLayered.md#getclippingrect)
- [getGlobalPosition](DDialogLayered.md#getglobalposition)
- [getHeight](DDialogLayered.md#getheight)
- [getLocalBounds](DDialogLayered.md#getlocalbounds)
- [getParentOfSize](DDialogLayered.md#getparentofsize)
- [getRejectReason](DDialogLayered.md#getrejectreason)
- [getResolvedValue](DDialogLayered.md#getresolvedvalue)
- [getThemeDefault](DDialogLayered.md#getthemedefault)
- [getType](DDialogLayered.md#gettype)
- [getWidth](DDialogLayered.md#getwidth)
- [getX](DDialogLayered.md#getx)
- [getY](DDialogLayered.md#gety)
- [hasDirty](DDialogLayered.md#hasdirty)
- [hasRefitableHeight](DDialogLayered.md#hasrefitableheight)
- [hasRefitableWidth](DDialogLayered.md#hasrefitablewidth)
- [hide](DDialogLayered.md#hide)
- [init](DDialogLayered.md#init)
- [initReflowable](DDialogLayered.md#initreflowable)
- [isDirty](DDialogLayered.md#isdirty)
- [isEventTarget](DDialogLayered.md#iseventtarget)
- [isHidden](DDialogLayered.md#ishidden)
- [isHierarchyDirty](DDialogLayered.md#ishierarchydirty)
- [isOpened](DDialogLayered.md#isopened)
- [isRefitable](DDialogLayered.md#isrefitable)
- [isShown](DDialogLayered.md#isshown)
- [listenerCount](DDialogLayered.md#listenercount)
- [listeners](DDialogLayered.md#listeners)
- [newContent](DDialogLayered.md#newcontent)
- [newContentChildren](DDialogLayered.md#newcontentchildren)
- [newFooter](DDialogLayered.md#newfooter)
- [newHeader](DDialogLayered.md#newheader)
- [newLayout](DDialogLayered.md#newlayout)
- [newLayoutChildren](DDialogLayered.md#newlayoutchildren)
- [newLayoutOptions](DDialogLayered.md#newlayoutoptions)
- [off](DDialogLayered.md#off)
- [ok](DDialogLayered.md#ok)
- [on](DDialogLayered.md#on)
- [onAnimationEnd](DDialogLayered.md#onanimationend)
- [onBlur](DDialogLayered.md#onblur)
- [onCancel](DDialogLayered.md#oncancel)
- [onChildBlur](DDialogLayered.md#onchildblur)
- [onChildFocus](DDialogLayered.md#onchildfocus)
- [onChildrenChange](DDialogLayered.md#onchildrenchange)
- [onClose](DDialogLayered.md#onclose)
- [onCloseOn](DDialogLayered.md#oncloseon)
- [onDblClick](DDialogLayered.md#ondblclick)
- [onDown](DDialogLayered.md#ondown)
- [onDownThis](DDialogLayered.md#ondownthis)
- [onFocus](DDialogLayered.md#onfocus)
- [onHierarchyDirty](DDialogLayered.md#onhierarchydirty)
- [onKeyDown](DDialogLayered.md#onkeydown)
- [onKeyUp](DDialogLayered.md#onkeyup)
- [onMove](DDialogLayered.md#onmove)
- [onOk](DDialogLayered.md#onok)
- [onOpen](DDialogLayered.md#onopen)
- [onOut](DDialogLayered.md#onout)
- [onOver](DDialogLayered.md#onover)
- [onParentMove](DDialogLayered.md#onparentmove)
- [onParentResize](DDialogLayered.md#onparentresize)
- [onPrerender](DDialogLayered.md#onprerender)
- [onRefit](DDialogLayered.md#onrefit)
- [onReflow](DDialogLayered.md#onreflow)
- [onResize](DDialogLayered.md#onresize)
- [onScale](DDialogLayered.md#onscale)
- [onShortcut](DDialogLayered.md#onshortcut)
- [onSkew](DDialogLayered.md#onskew)
- [onStateChange](DDialogLayered.md#onstatechange)
- [onUp](DDialogLayered.md#onup)
- [onUpThis](DDialogLayered.md#onupthis)
- [onWheel](DDialogLayered.md#onwheel)
- [once](DDialogLayered.md#once)
- [open](DDialogLayered.md#open)
- [reflow](DDialogLayered.md#reflow)
- [removeAllListeners](DDialogLayered.md#removealllisteners)
- [removeChild](DDialogLayered.md#removechild)
- [removeChildAt](DDialogLayered.md#removechildat)
- [removeChildren](DDialogLayered.md#removechildren)
- [removeListener](DDialogLayered.md#removelistener)
- [render](DDialogLayered.md#render)
- [renderAdvanced](DDialogLayered.md#renderadvanced)
- [resize](DDialogLayered.md#resize)
- [setChildIndex](DDialogLayered.md#setchildindex)
- [setFocused](DDialogLayered.md#setfocused)
- [setHeight](DDialogLayered.md#setheight)
- [setParent](DDialogLayered.md#setparent)
- [setTransform](DDialogLayered.md#settransform)
- [setWidth](DDialogLayered.md#setwidth)
- [setX](DDialogLayered.md#setx)
- [setY](DDialogLayered.md#sety)
- [show](DDialogLayered.md#show)
- [sortChildren](DDialogLayered.md#sortchildren)
- [swapChildren](DDialogLayered.md#swapchildren)
- [toAlign](DDialogLayered.md#toalign)
- [toCloseOn](DDialogLayered.md#tocloseon)
- [toContentOptions](DDialogLayered.md#tocontentoptions)
- [toCursor](DDialogLayered.md#tocursor)
- [toDirty](DDialogLayered.md#todirty)
- [toFooterOptions](DDialogLayered.md#tofooteroptions)
- [toGestureOptions](DDialogLayered.md#togestureoptions)
- [toGlobal](DDialogLayered.md#toglobal)
- [toHasDirty](DDialogLayered.md#tohasdirty)
- [toHeaderOptions](DDialogLayered.md#toheaderoptions)
- [toHierarchyDirty](DDialogLayered.md#tohierarchydirty)
- [toLayoutOptions](DDialogLayered.md#tolayoutoptions)
- [toLocal](DDialogLayered.md#tolocal)
- [toParentHasDirty](DDialogLayered.md#toparenthasdirty)
- [toParentHierarchyDirty](DDialogLayered.md#toparenthierarchydirty)
- [toParentResized](DDialogLayered.md#toparentresized)
- [updateTransform](DDialogLayered.md#updatetransform)
- [mixin](DDialogLayered.md#mixin)

## Constructors

### constructor

• **new DDialogLayered**<`VALUE`, `THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `void` |
| `THEME` | extends [`DThemeDialogLayered`](../interfaces/DThemeDialogLayered.md) = [`DThemeDialogLayered`](../interfaces/DThemeDialogLayered.md) |
| `OPTIONS` | extends [`DDialogLayeredOptions`](../interfaces/DDialogLayeredOptions.md)<`VALUE`, `THEME`, `any`, `OPTIONS`\> = [`DDialogLayeredOptions`](../interfaces/DDialogLayeredOptions.md)<`VALUE`, `THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DDialog](DDialog.md).[constructor](DDialog.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:764](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L764)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DDialog](DDialog.md).[_accessibleActive](DDialog.md#_accessibleactive)

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

[DDialog](DDialog.md).[_accessibleDiv](DDialog.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_align

• `Protected` **\_align**: ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DDialog](DDialog.md).[_align](DDialog.md#_align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L125)

___

### \_animation

• `Protected` `Optional` **\_animation**: ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialog](DDialog.md).[_animation](DDialog.md#_animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L118)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDialog](DDialog.md).[_auto](DDialog.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDialog](DDialog.md).[_background](DDialog.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDialog](DDialog.md).[_border](DDialog.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DDialog](DDialog.md).[_bounds](DDialog.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDialog](DDialog.md).[_clearType](DDialog.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_closeOn

• `Protected` **\_closeOn**: `number`

#### Inherited from

[DDialog](DDialog.md).[_closeOn](DDialog.md#_closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L119)

___

### \_content

• `Protected` `Optional` **\_content**: [`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L98)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDialog](DDialog.md).[_corner](DDialog.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DDialog](DDialog.md).[_cursor](DDialog.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DDialog](DDialog.md).[_destroyed](DDialog.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_focused

• `Protected` `Optional` **\_focused**: ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Inherited from

[DDialog](DDialog.md).[_focused](DDialog.md#_focused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L120)

___

### \_footer

• `Protected` `Optional` **\_footer**: ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L99)

___

### \_gesture

• `Protected` **\_gesture**: [`DDialogGesture`](../interfaces/DDialogGesture.md)<[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>\>

#### Inherited from

[DDialog](DDialog.md).[_gesture](DDialog.md#_gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L128)

___

### \_header

• `Protected` `Optional` **\_header**: ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L97)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDialog](DDialog.md).[_lastDownPoint](DDialog.md#_lastdownpoint)

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

[DDialog](DDialog.md).[_lastSortedIndex](DDialog.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_layer

• `Protected` **\_layer**: ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

[DDialog](DDialog.md).[_layer](DDialog.md#_layer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L129)

___

### \_layout

• `Protected` `Optional` **\_layout**: [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L95)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DDialog](DDialog.md).[_mask](DDialog.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_mode

• `Protected` **\_mode**: [`DDialogMode`](../index.md#ddialogmode-1)

#### Inherited from

[DDialog](DDialog.md).[_mode](DDialog.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L122)

___

### \_onPrerenderBound

• `Protected` **\_onPrerenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[_onPrerenderBound](DDialog.md#_onprerenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L124)

___

### \_opener

• `Protected` `Optional` **\_opener**: ``null`` \| [`DDialogOpener`](../interfaces/DDialogOpener.md)

#### Inherited from

[DDialog](DDialog.md).[_opener](DDialog.md#_opener)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L126)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDialog](DDialog.md).[_options](DDialog.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDialog](DDialog.md).[_outline](DDialog.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_overlay

• `Protected` **\_overlay**: [`UtilOverlay`](UtilOverlay.md)

#### Inherited from

[DDialog](DDialog.md).[_overlay](DDialog.md#_overlay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L121)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDialog](DDialog.md).[_padding](DDialog.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_promise

• `Protected` `Optional` **\_promise**: `Promise`<`VALUE`\>

#### Inherited from

[DDialog](DDialog.md).[_promise](DDialog.md#_promise)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L114)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDialog](DDialog.md).[_reflowable](DDialog.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

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

[DDialog](DDialog.md).[_reject](DDialog.md#_reject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L116)

___

### \_resolve

• `Protected` `Optional` **\_resolve**: (`value`: `VALUE` \| `PromiseLike`<`VALUE`\>) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` \| `PromiseLike`<`VALUE`\> |

##### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[_resolve](DDialog.md#_resolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L115)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDialog](DDialog.md).[_shortcuts](DDialog.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDialog](DDialog.md).[_snippet](DDialog.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_sticky

• `Protected` **\_sticky**: `boolean`

#### Inherited from

[DDialog](DDialog.md).[_sticky](DDialog.md#_sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L123)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DDialog](DDialog.md).[_tempDisplayObjectParent](DDialog.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDialog](DDialog.md).[_title](DDialog.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DDialog](DDialog.md).[_zIndex](DDialog.md#_zindex)

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

[DDialog](DDialog.md).[accessible](DDialog.md#accessible)

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

[DDialog](DDialog.md).[accessibleChildren](DDialog.md#accessiblechildren)

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

[DDialog](DDialog.md).[accessibleHint](DDialog.md#accessiblehint)

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

[DDialog](DDialog.md).[accessiblePointerEvents](DDialog.md#accessiblepointerevents)

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

[DDialog](DDialog.md).[accessibleTitle](DDialog.md#accessibletitle)

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

[DDialog](DDialog.md).[accessibleType](DDialog.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DDialog](DDialog.md).[alpha](DDialog.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDialog](DDialog.md).[angle](DDialog.md#angle)

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

[DDialog](DDialog.md).[buttonMode](DDialog.md#buttonmode)

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

[DDialog](DDialog.md).[cacheAsBitmap](DDialog.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DDialog](DDialog.md).[children](DDialog.md#children)

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

[DDialog](DDialog.md).[cursor](DDialog.md#cursor)

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

[DDialog](DDialog.md).[filterArea](DDialog.md#filterarea)

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

[DDialog](DDialog.md).[filters](DDialog.md#filters)

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

[DDialog](DDialog.md).[hitArea](DDialog.md#hitarea)

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

[DDialog](DDialog.md).[interactive](DDialog.md#interactive)

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

[DDialog](DDialog.md).[interactiveChildren](DDialog.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DDialog](DDialog.md).[isMask](DDialog.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DDialog](DDialog.md).[isSprite](DDialog.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DDialog](DDialog.md).[localTransform](DDialog.md#localtransform)

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

[DDialog](DDialog.md).[mask](DDialog.md#mask)

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

[DDialog](DDialog.md).[name](DDialog.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DDialog](DDialog.md).[parent](DDialog.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DDialog](DDialog.md).[pivot](DDialog.md#pivot)

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

[DDialog](DDialog.md).[renderable](DDialog.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDialog](DDialog.md).[rotation](DDialog.md#rotation)

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

[DDialog](DDialog.md).[sortDirty](DDialog.md#sortdirty)

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

[DDialog](DDialog.md).[sortableChildren](DDialog.md#sortablechildren)

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

[DDialog](DDialog.md).[transform](DDialog.md#transform)

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

[DDialog](DDialog.md).[visible](DDialog.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DDialog](DDialog.md).[worldAlpha](DDialog.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DDialog](DDialog.md).[worldTransform](DDialog.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DDialog](DDialog.md).[worldVisible](DDialog.md#worldvisible)

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

[DDialog](DDialog.md).[zIndex](DDialog.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_BOUNDS

▪ `Static` `Protected` `Optional` **WORK\_BOUNDS**: `Rectangle`

#### Inherited from

[DDialog](DDialog.md).[WORK_BOUNDS](DDialog.md#work_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L112)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDialog](DDialog.md).[WORK_CONTAINS_POINT](DDialog.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:733](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L733)

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

DDialog.algin

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L219)

___

### align

• `get` **align**(): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

DDialog.align

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L215)

___

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDialog.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDialog.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### content

• `get` **content**(): [`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L170)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDialog.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### footer

• `get` **footer**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L195)

___

### gesture

• `get` **gesture**(): [`DDialogGesture`](../interfaces/DDialogGesture.md)<`this`\>

#### Returns

[`DDialogGesture`](../interfaces/DDialogGesture.md)<`this`\>

#### Inherited from

DDialog.gesture

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L223)

___

### header

• `get` **header**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L140)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDialog.height

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

DDialog.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### layer

• `get` **layer**(): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

DDialog.layer

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L227)

___

### layout

• `get` **layout**(): [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L106)

___

### mode

• `get` **mode**(): [`DDialogMode`](../index.md#ddialogmode-1)

#### Returns

[`DDialogMode`](../index.md#ddialogmode-1)

#### Inherited from

DDialog.mode

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L211)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DDialog.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDialog.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDialog.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialog.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDialog.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialog.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDialog.shadow

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

DDialog.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialog.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDialog.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDialog.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDialog.theme

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

DDialog.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDialog.title

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

DDialog.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDialog.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDialog.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDialog.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDialog.width

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

DDialog.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDialog.x

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

DDialog.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDialog.y

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

DDialog.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[_calculateBounds](DDialog.md#_calculatebounds)

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

[DDialog](DDialog.md).[_recursivePostUpdateTransform](DDialog.md#_recursivepostupdatetransform)

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

[DDialog](DDialog.md).[_render](DDialog.md#_render)

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

[DDialog](DDialog.md).[addChild](DDialog.md#addchild)

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

[DDialog](DDialog.md).[addChildAt](DDialog.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[addListener](DDialog.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[addListener](DDialog.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[applyTitle](DDialog.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### blur

▸ **blur**(`recursively?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[blur](DDialog.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[calculateBounds](DDialog.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L238)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[close](DDialog.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L418)

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

[DDialog](DDialog.md).[containsGlobalPoint](DDialog.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:501](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L501)

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

[DDialog](DDialog.md).[containsLocalPoint](DDialog.md#containslocalpoint)

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

[DDialog](DDialog.md).[containsPoint](DDialog.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[destroy](DDialog.md#destroy)

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

[DDialog](DDialog.md).[displayObjectUpdateTransform](DDialog.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

___

### doReject

▸ `Protected` **doReject**(`reason?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[doReject](DDialog.md#doreject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:435](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L435)

___

### doResolve

▸ `Protected` **doResolve**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` \| `PromiseLike`<`VALUE`\> |

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[doResolve](DDialog.md#doresolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L422)

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

[DDialog](DDialog.md).[emit](DDialog.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDialog](DDialog.md).[eventNames](DDialog.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### findFirstFocusable

▸ `Protected` **findFirstFocusable**(`focusController`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusController` | [`DControllerFocus`](../interfaces/DControllerFocus.md) |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Overrides

[DDialog](DDialog.md).[findFirstFocusable](DDialog.md#findfirstfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L225)

___

### focus

▸ **focus**(): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[focus](DDialog.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[focusOnClosest](DDialog.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### getAnimation

▸ `Protected` **getAnimation**(): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Inherited from

[DDialog](DDialog.md).[getAnimation](DDialog.md#getanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L276)

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

[DDialog](DDialog.md).[getBounds](DDialog.md#getbounds)

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

[DDialog](DDialog.md).[getChildAt](DDialog.md#getchildat)

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

[DDialog](DDialog.md).[getChildByName](DDialog.md#getchildbyname)

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

[DDialog](DDialog.md).[getChildIndex](DDialog.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDialog](DDialog.md).[getClearType](DDialog.md#getcleartype)

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

[DDialog](DDialog.md).[getClippingRect](DDialog.md#getclippingrect)

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

[DDialog](DDialog.md).[getGlobalPosition](DDialog.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialog](DDialog.md).[getHeight](DDialog.md#getheight)

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

[DDialog](DDialog.md).[getLocalBounds](DDialog.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDialog](DDialog.md).[getParentOfSize](DDialog.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

___

### getRejectReason

▸ `Protected` **getRejectReason**(): `any`

#### Returns

`any`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L249)

___

### getResolvedValue

▸ `Protected` `Abstract` **getResolvedValue**(): `VALUE` \| `PromiseLike`<`VALUE`\>

#### Returns

`VALUE` \| `PromiseLike`<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L247)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDialog](DDialog.md).[getThemeDefault](DDialog.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDialog](DDialog.md).[getType](DDialog.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L253)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialog](DDialog.md).[getWidth](DDialog.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialog](DDialog.md).[getX](DDialog.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialog](DDialog.md).[getY](DDialog.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialog](DDialog.md).[hasDirty](DDialog.md#hasdirty)

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

[DDialog](DDialog.md).[hasRefitableHeight](DDialog.md#hasrefitableheight)

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

[DDialog](DDialog.md).[hasRefitableWidth](DDialog.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hide

▸ **hide**(): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[hide](DDialog.md#hide)

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

#### Overrides

[DDialog](DDialog.md).[init](DDialog.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L101)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[initReflowable](DDialog.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialog](DDialog.md).[isDirty](DDialog.md#isdirty)

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

[DDialog](DDialog.md).[isEventTarget](DDialog.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialog](DDialog.md).[isHidden](DDialog.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialog](DDialog.md).[isHierarchyDirty](DDialog.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1474)

___

### isOpened

▸ **isOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialog](DDialog.md).[isOpened](DDialog.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L414)

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

[DDialog](DDialog.md).[isRefitable](DDialog.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1681)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialog](DDialog.md).[isShown](DDialog.md#isshown)

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

[DDialog](DDialog.md).[listenerCount](DDialog.md#listenercount)

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

[DDialog](DDialog.md).[listeners](DDialog.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newContent

▸ `Protected` **newContent**(): [`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L179)

___

### newContentChildren

▸ `Protected` **newContentChildren**(`theme`, `options?`): (``null`` \| `DisplayObject`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

(``null`` \| `DisplayObject`)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L191)

___

### newFooter

▸ `Protected` **newFooter**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L204)

___

### newHeader

▸ `Protected` **newHeader**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L149)

___

### newLayout

▸ `Protected` **newLayout**(): [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L115)

___

### newLayoutChildren

▸ `Protected` **newLayoutChildren**(`theme`, `options?`): (``null`` \| `DisplayObject`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

(``null`` \| `DisplayObject`)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L136)

___

### newLayoutOptions

▸ `Protected` **newLayoutOptions**(`theme`, `options?`): [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L128)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[off](DDialog.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### ok

▸ **ok**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L229)

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[on](DDialog.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[on](DDialog.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onAnimationEnd

▸ `Protected` **onAnimationEnd**(`isReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReverse` | `boolean` |

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onAnimationEnd](DDialog.md#onanimationend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L291)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onBlur](DDialog.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### onCancel

▸ `Protected` **onCancel**(`reason`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L242)

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

[DDialog](DDialog.md).[onChildBlur](DDialog.md#onchildblur)

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

[DDialog](DDialog.md).[onChildFocus](DDialog.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onChildrenChange](DDialog.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1034)

___

### onClose

▸ `Protected` **onClose**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onClose](DDialog.md#onclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L448)

___

### onCloseOn

▸ `Protected` **onCloseOn**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onCloseOn](DDialog.md#oncloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L497)

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

[DDialog](DDialog.md).[onDblClick](DDialog.md#ondblclick)

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

[DDialog](DDialog.md).[onDown](DDialog.md#ondown)

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

[DDialog](DDialog.md).[onDownThis](DDialog.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onFocus](DDialog.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onHierarchyDirty](DDialog.md#onhierarchydirty)

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

[DDialog](DDialog.md).[onKeyDown](DDialog.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L488)

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

[DDialog](DDialog.md).[onKeyUp](DDialog.md#onkeyup)

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

[DDialog](DDialog.md).[onMove](DDialog.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1051)

___

### onOk

▸ `Protected` **onOk**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` \| `PromiseLike`<`VALUE`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L233)

___

### onOpen

▸ `Protected` **onOpen**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onOpen](DDialog.md#onopen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:401](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L401)

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

[DDialog](DDialog.md).[onOut](DDialog.md#onout)

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

[DDialog](DDialog.md).[onOver](DDialog.md#onover)

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

[DDialog](DDialog.md).[onParentMove](DDialog.md#onparentmove)

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

[DDialog](DDialog.md).[onParentResize](DDialog.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L262)

___

### onPrerender

▸ `Protected` **onPrerender**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onPrerender](DDialog.md#onprerender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:376](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L376)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onRefit](DDialog.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[onReflow](DDialog.md#onreflow)

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

[DDialog](DDialog.md).[onResize](DDialog.md#onresize)

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

[DDialog](DDialog.md).[onScale](DDialog.md#onscale)

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

[DDialog](DDialog.md).[onShortcut](DDialog.md#onshortcut)

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

[DDialog](DDialog.md).[onSkew](DDialog.md#onskew)

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

[DDialog](DDialog.md).[onStateChange](DDialog.md#onstatechange)

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

[DDialog](DDialog.md).[onUp](DDialog.md#onup)

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

[DDialog](DDialog.md).[onUpThis](DDialog.md#onupthis)

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

[DDialog](DDialog.md).[onWheel](DDialog.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[once](DDialog.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[once](DDialog.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### open

▸ **open**(`opener?`): `Promise`<`VALUE`\>

Opens a dialog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opener?` | [`DDialogOpener`](../interfaces/DDialogOpener.md) | An opener of a dialog. The dialog position is determined based on a position and a size of the opener. If the opener is undefined, the dialog is placed at the center of the screen. |

#### Returns

`Promise`<`VALUE`\>

a value of this dialog

#### Inherited from

[DDialog](DDialog.md).[open](DDialog.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L324)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[reflow](DDialog.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[removeAllListeners](DDialog.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[removeAllListeners](DDialog.md#removealllisteners)

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

[DDialog](DDialog.md).[removeChild](DDialog.md#removechild)

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

[DDialog](DDialog.md).[removeChildAt](DDialog.md#removechildat)

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

[DDialog](DDialog.md).[removeChildren](DDialog.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[removeListener](DDialog.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[removeListener](DDialog.md#removelistener)

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

[DDialog](DDialog.md).[render](DDialog.md#render)

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

[DDialog](DDialog.md).[renderAdvanced](DDialog.md#renderadvanced)

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

[DDialog](DDialog.md).[resize](DDialog.md#resize)

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

[DDialog](DDialog.md).[setChildIndex](DDialog.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[setFocused](DDialog.md#setfocused)

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

[DDialog](DDialog.md).[setHeight](DDialog.md#setheight)

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

[DDialog](DDialog.md).[setParent](DDialog.md#setparent)

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

[DDialog](DDialog.md).[setTransform](DDialog.md#settransform)

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

[DDialog](DDialog.md).[setWidth](DDialog.md#setwidth)

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

[DDialog](DDialog.md).[setX](DDialog.md#setx)

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

[DDialog](DDialog.md).[setY](DDialog.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogLayered`](DDialogLayered.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialog](DDialog.md).[show](DDialog.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[sortChildren](DDialog.md#sortchildren)

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

[DDialog](DDialog.md).[swapChildren](DDialog.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toAlign

▸ `Protected` **toAlign**(`mode`, `theme`, `options?`): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DDialog](DDialog.md).[toAlign](DDialog.md#toalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L200)

___

### toCloseOn

▸ `Protected` **toCloseOn**(`mode`, `theme`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`number`

#### Inherited from

[DDialog](DDialog.md).[toCloseOn](DDialog.md#tocloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L184)

___

### toContentOptions

▸ `Protected` **toContentOptions**(`theme`, `options?`): [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L183)

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

[DDialog](DDialog.md).[toCursor](DDialog.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialog](DDialog.md).[toDirty](DDialog.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1432)

___

### toFooterOptions

▸ `Protected` **toFooterOptions**(`theme`, `options?`): `undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L212)

___

### toGestureOptions

▸ `Protected` **toGestureOptions**(`mode`, `theme`, `options?`): [`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Inherited from

[DDialog](DDialog.md).[toGestureOptions](DDialog.md#togestureoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L231)

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

[DDialog](DDialog.md).[toGlobal](DDialog.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialog](DDialog.md).[toHasDirty](DDialog.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHeaderOptions

▸ `Protected` **toHeaderOptions**(`theme`, `options?`): `undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L157)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialog](DDialog.md).[toHierarchyDirty](DDialog.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1457)

___

### toLayoutOptions

▸ `Protected` **toLayoutOptions**(`theme`, `options?`): [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L119)

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

[DDialog](DDialog.md).[toLocal](DDialog.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[toParentHasDirty](DDialog.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[toParentHierarchyDirty](DDialog.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[toParentResized](DDialog.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DDialog](DDialog.md).[updateTransform](DDialog.md#updatetransform)

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

[DDialog](DDialog.md).[mixin](DDialog.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
