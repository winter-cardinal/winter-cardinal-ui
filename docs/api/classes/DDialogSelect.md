[Winter Cardinal UI - v0.227.0](../index.md) / DDialogSelect

# Class: DDialogSelect<VALUE, THEME, OPTIONS\>

A dialog with a header, a content and a footer.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeDialogSelect`](../interfaces/DThemeDialogSelect.md)<`VALUE`\> = [`DThemeDialogSelect`](../interfaces/DThemeDialogSelect.md)<`VALUE`\> |
| `OPTIONS` | extends [`DDialogSelectOptions`](../interfaces/DDialogSelectOptions.md)<`VALUE`, `THEME`\> = [`DDialogSelectOptions`](../interfaces/DDialogSelectOptions.md)<`VALUE`, `THEME`\> |

## Hierarchy

- [`DDialogLayered`](DDialogLayered.md)<`VALUE` \| ``null``, `THEME`, `OPTIONS`\>

  ↳ **`DDialogSelect`**

## Table of contents

### Constructors

- [constructor](DDialogSelect.md#constructor)

### Properties

- [\_accessibleActive](DDialogSelect.md#_accessibleactive)
- [\_accessibleDiv](DDialogSelect.md#_accessiblediv)
- [\_align](DDialogSelect.md#_align)
- [\_animation](DDialogSelect.md#_animation)
- [\_auto](DDialogSelect.md#_auto)
- [\_background](DDialogSelect.md#_background)
- [\_border](DDialogSelect.md#_border)
- [\_bounds](DDialogSelect.md#_bounds)
- [\_clearType](DDialogSelect.md#_cleartype)
- [\_closeOn](DDialogSelect.md#_closeon)
- [\_content](DDialogSelect.md#_content)
- [\_corner](DDialogSelect.md#_corner)
- [\_cursor](DDialogSelect.md#_cursor)
- [\_destroyed](DDialogSelect.md#_destroyed)
- [\_focused](DDialogSelect.md#_focused)
- [\_footer](DDialogSelect.md#_footer)
- [\_gesture](DDialogSelect.md#_gesture)
- [\_header](DDialogSelect.md#_header)
- [\_input](DDialogSelect.md#_input)
- [\_inputLayout](DDialogSelect.md#_inputlayout)
- [\_lastDownPoint](DDialogSelect.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogSelect.md#_lastsortedindex)
- [\_layer](DDialogSelect.md#_layer)
- [\_layout](DDialogSelect.md#_layout)
- [\_list](DDialogSelect.md#_list)
- [\_mask](DDialogSelect.md#_mask)
- [\_mode](DDialogSelect.md#_mode)
- [\_noteError](DDialogSelect.md#_noteerror)
- [\_noteNoItemsFound](DDialogSelect.md#_notenoitemsfound)
- [\_noteSearching](DDialogSelect.md#_notesearching)
- [\_onPrerenderBound](DDialogSelect.md#_onprerenderbound)
- [\_opener](DDialogSelect.md#_opener)
- [\_options](DDialogSelect.md#_options)
- [\_outline](DDialogSelect.md#_outline)
- [\_overlay](DDialogSelect.md#_overlay)
- [\_padding](DDialogSelect.md#_padding)
- [\_promise](DDialogSelect.md#_promise)
- [\_reflowable](DDialogSelect.md#_reflowable)
- [\_reject](DDialogSelect.md#_reject)
- [\_resolve](DDialogSelect.md#_resolve)
- [\_search](DDialogSelect.md#_search)
- [\_shortcuts](DDialogSelect.md#_shortcuts)
- [\_snippet](DDialogSelect.md#_snippet)
- [\_sticky](DDialogSelect.md#_sticky)
- [\_tempDisplayObjectParent](DDialogSelect.md#_tempdisplayobjectparent)
- [\_title](DDialogSelect.md#_title)
- [\_value](DDialogSelect.md#_value)
- [\_zIndex](DDialogSelect.md#_zindex)
- [accessible](DDialogSelect.md#accessible)
- [accessibleChildren](DDialogSelect.md#accessiblechildren)
- [accessibleHint](DDialogSelect.md#accessiblehint)
- [accessiblePointerEvents](DDialogSelect.md#accessiblepointerevents)
- [accessibleTitle](DDialogSelect.md#accessibletitle)
- [accessibleType](DDialogSelect.md#accessibletype)
- [alpha](DDialogSelect.md#alpha)
- [angle](DDialogSelect.md#angle)
- [buttonMode](DDialogSelect.md#buttonmode)
- [cacheAsBitmap](DDialogSelect.md#cacheasbitmap)
- [children](DDialogSelect.md#children)
- [cursor](DDialogSelect.md#cursor)
- [filterArea](DDialogSelect.md#filterarea)
- [filters](DDialogSelect.md#filters)
- [hitArea](DDialogSelect.md#hitarea)
- [interactive](DDialogSelect.md#interactive)
- [interactiveChildren](DDialogSelect.md#interactivechildren)
- [isMask](DDialogSelect.md#ismask)
- [isSprite](DDialogSelect.md#issprite)
- [localTransform](DDialogSelect.md#localtransform)
- [mask](DDialogSelect.md#mask)
- [name](DDialogSelect.md#name)
- [parent](DDialogSelect.md#parent)
- [pivot](DDialogSelect.md#pivot)
- [renderable](DDialogSelect.md#renderable)
- [rotation](DDialogSelect.md#rotation)
- [sortDirty](DDialogSelect.md#sortdirty)
- [sortableChildren](DDialogSelect.md#sortablechildren)
- [transform](DDialogSelect.md#transform)
- [visible](DDialogSelect.md#visible)
- [worldAlpha](DDialogSelect.md#worldalpha)
- [worldTransform](DDialogSelect.md#worldtransform)
- [worldVisible](DDialogSelect.md#worldvisible)
- [zIndex](DDialogSelect.md#zindex)
- [WORK\_BOUNDS](DDialogSelect.md#work_bounds)
- [WORK\_CONTAINS\_POINT](DDialogSelect.md#work_contains_point)

### Accessors

- [algin](DDialogSelect.md#algin)
- [align](DDialogSelect.md#align)
- [background](DDialogSelect.md#background)
- [border](DDialogSelect.md#border)
- [content](DDialogSelect.md#content)
- [corner](DDialogSelect.md#corner)
- [footer](DDialogSelect.md#footer)
- [gesture](DDialogSelect.md#gesture)
- [header](DDialogSelect.md#header)
- [height](DDialogSelect.md#height)
- [input](DDialogSelect.md#input)
- [inputLayout](DDialogSelect.md#inputlayout)
- [layer](DDialogSelect.md#layer)
- [layout](DDialogSelect.md#layout)
- [list](DDialogSelect.md#list)
- [mode](DDialogSelect.md#mode)
- [noteError](DDialogSelect.md#noteerror)
- [noteNoItemsFound](DDialogSelect.md#notenoitemsfound)
- [noteSearching](DDialogSelect.md#notesearching)
- [options](DDialogSelect.md#options)
- [outline](DDialogSelect.md#outline)
- [padding](DDialogSelect.md#padding)
- [position](DDialogSelect.md#position)
- [reflowable](DDialogSelect.md#reflowable)
- [scale](DDialogSelect.md#scale)
- [search](DDialogSelect.md#search)
- [shadow](DDialogSelect.md#shadow)
- [skew](DDialogSelect.md#skew)
- [snippet](DDialogSelect.md#snippet)
- [state](DDialogSelect.md#state)
- [theme](DDialogSelect.md#theme)
- [title](DDialogSelect.md#title)
- [type](DDialogSelect.md#type)
- [unsafe](DDialogSelect.md#unsafe)
- [value](DDialogSelect.md#value)
- [weight](DDialogSelect.md#weight)
- [width](DDialogSelect.md#width)
- [x](DDialogSelect.md#x)
- [y](DDialogSelect.md#y)

### Methods

- [\_calculateBounds](DDialogSelect.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialogSelect.md#_recursivepostupdatetransform)
- [\_render](DDialogSelect.md#_render)
- [addChild](DDialogSelect.md#addchild)
- [addChildAt](DDialogSelect.md#addchildat)
- [addListener](DDialogSelect.md#addlistener)
- [applyTitle](DDialogSelect.md#applytitle)
- [blur](DDialogSelect.md#blur)
- [calculateBounds](DDialogSelect.md#calculatebounds)
- [cancel](DDialogSelect.md#cancel)
- [close](DDialogSelect.md#close)
- [containsGlobalPoint](DDialogSelect.md#containsglobalpoint)
- [containsLocalPoint](DDialogSelect.md#containslocalpoint)
- [containsPoint](DDialogSelect.md#containspoint)
- [destroy](DDialogSelect.md#destroy)
- [displayObjectUpdateTransform](DDialogSelect.md#displayobjectupdatetransform)
- [doReject](DDialogSelect.md#doreject)
- [doResolve](DDialogSelect.md#doresolve)
- [emit](DDialogSelect.md#emit)
- [eventNames](DDialogSelect.md#eventnames)
- [findFirstFocusable](DDialogSelect.md#findfirstfocusable)
- [focus](DDialogSelect.md#focus)
- [focusOnClosest](DDialogSelect.md#focusonclosest)
- [getAnimation](DDialogSelect.md#getanimation)
- [getBounds](DDialogSelect.md#getbounds)
- [getChildAt](DDialogSelect.md#getchildat)
- [getChildByName](DDialogSelect.md#getchildbyname)
- [getChildIndex](DDialogSelect.md#getchildindex)
- [getClearType](DDialogSelect.md#getcleartype)
- [getClippingRect](DDialogSelect.md#getclippingrect)
- [getGlobalPosition](DDialogSelect.md#getglobalposition)
- [getHeight](DDialogSelect.md#getheight)
- [getLocalBounds](DDialogSelect.md#getlocalbounds)
- [getParentOfSize](DDialogSelect.md#getparentofsize)
- [getRejectReason](DDialogSelect.md#getrejectreason)
- [getResolvedValue](DDialogSelect.md#getresolvedvalue)
- [getThemeDefault](DDialogSelect.md#getthemedefault)
- [getType](DDialogSelect.md#gettype)
- [getWidth](DDialogSelect.md#getwidth)
- [getX](DDialogSelect.md#getx)
- [getY](DDialogSelect.md#gety)
- [hasDirty](DDialogSelect.md#hasdirty)
- [hasRefitableHeight](DDialogSelect.md#hasrefitableheight)
- [hasRefitableWidth](DDialogSelect.md#hasrefitablewidth)
- [hide](DDialogSelect.md#hide)
- [init](DDialogSelect.md#init)
- [initReflowable](DDialogSelect.md#initreflowable)
- [isDirty](DDialogSelect.md#isdirty)
- [isEventTarget](DDialogSelect.md#iseventtarget)
- [isHidden](DDialogSelect.md#ishidden)
- [isHierarchyDirty](DDialogSelect.md#ishierarchydirty)
- [isOpened](DDialogSelect.md#isopened)
- [isRefitable](DDialogSelect.md#isrefitable)
- [isShown](DDialogSelect.md#isshown)
- [listenerCount](DDialogSelect.md#listenercount)
- [listeners](DDialogSelect.md#listeners)
- [newContent](DDialogSelect.md#newcontent)
- [newContentChildren](DDialogSelect.md#newcontentchildren)
- [newFooter](DDialogSelect.md#newfooter)
- [newHeader](DDialogSelect.md#newheader)
- [newInput](DDialogSelect.md#newinput)
- [newInputLayout](DDialogSelect.md#newinputlayout)
- [newLayout](DDialogSelect.md#newlayout)
- [newLayoutChildren](DDialogSelect.md#newlayoutchildren)
- [newLayoutOptions](DDialogSelect.md#newlayoutoptions)
- [newList](DDialogSelect.md#newlist)
- [newNoteError](DDialogSelect.md#newnoteerror)
- [newNoteNoItemsFound](DDialogSelect.md#newnotenoitemsfound)
- [newNoteSearching](DDialogSelect.md#newnotesearching)
- [newSearch](DDialogSelect.md#newsearch)
- [off](DDialogSelect.md#off)
- [ok](DDialogSelect.md#ok)
- [on](DDialogSelect.md#on)
- [onAnimationEnd](DDialogSelect.md#onanimationend)
- [onBlur](DDialogSelect.md#onblur)
- [onCancel](DDialogSelect.md#oncancel)
- [onChildBlur](DDialogSelect.md#onchildblur)
- [onChildFocus](DDialogSelect.md#onchildfocus)
- [onChildrenChange](DDialogSelect.md#onchildrenchange)
- [onClose](DDialogSelect.md#onclose)
- [onCloseOn](DDialogSelect.md#oncloseon)
- [onDblClick](DDialogSelect.md#ondblclick)
- [onDown](DDialogSelect.md#ondown)
- [onDownThis](DDialogSelect.md#ondownthis)
- [onFocus](DDialogSelect.md#onfocus)
- [onHierarchyDirty](DDialogSelect.md#onhierarchydirty)
- [onKeyDown](DDialogSelect.md#onkeydown)
- [onKeyUp](DDialogSelect.md#onkeyup)
- [onMove](DDialogSelect.md#onmove)
- [onOk](DDialogSelect.md#onok)
- [onOpen](DDialogSelect.md#onopen)
- [onOut](DDialogSelect.md#onout)
- [onOver](DDialogSelect.md#onover)
- [onParentMove](DDialogSelect.md#onparentmove)
- [onParentResize](DDialogSelect.md#onparentresize)
- [onPrerender](DDialogSelect.md#onprerender)
- [onRefit](DDialogSelect.md#onrefit)
- [onReflow](DDialogSelect.md#onreflow)
- [onResize](DDialogSelect.md#onresize)
- [onScale](DDialogSelect.md#onscale)
- [onSearched](DDialogSelect.md#onsearched)
- [onShortcut](DDialogSelect.md#onshortcut)
- [onSkew](DDialogSelect.md#onskew)
- [onStateChange](DDialogSelect.md#onstatechange)
- [onUp](DDialogSelect.md#onup)
- [onUpThis](DDialogSelect.md#onupthis)
- [onWheel](DDialogSelect.md#onwheel)
- [once](DDialogSelect.md#once)
- [open](DDialogSelect.md#open)
- [reflow](DDialogSelect.md#reflow)
- [removeAllListeners](DDialogSelect.md#removealllisteners)
- [removeChild](DDialogSelect.md#removechild)
- [removeChildAt](DDialogSelect.md#removechildat)
- [removeChildren](DDialogSelect.md#removechildren)
- [removeListener](DDialogSelect.md#removelistener)
- [render](DDialogSelect.md#render)
- [renderAdvanced](DDialogSelect.md#renderadvanced)
- [resize](DDialogSelect.md#resize)
- [setChildIndex](DDialogSelect.md#setchildindex)
- [setFocused](DDialogSelect.md#setfocused)
- [setHeight](DDialogSelect.md#setheight)
- [setParent](DDialogSelect.md#setparent)
- [setTransform](DDialogSelect.md#settransform)
- [setWidth](DDialogSelect.md#setwidth)
- [setX](DDialogSelect.md#setx)
- [setY](DDialogSelect.md#sety)
- [show](DDialogSelect.md#show)
- [sortChildren](DDialogSelect.md#sortchildren)
- [swapChildren](DDialogSelect.md#swapchildren)
- [toAlign](DDialogSelect.md#toalign)
- [toCloseOn](DDialogSelect.md#tocloseon)
- [toContentOptions](DDialogSelect.md#tocontentoptions)
- [toCursor](DDialogSelect.md#tocursor)
- [toDirty](DDialogSelect.md#todirty)
- [toFooterOptions](DDialogSelect.md#tofooteroptions)
- [toGestureOptions](DDialogSelect.md#togestureoptions)
- [toGlobal](DDialogSelect.md#toglobal)
- [toHasDirty](DDialogSelect.md#tohasdirty)
- [toHeaderOptions](DDialogSelect.md#toheaderoptions)
- [toHierarchyDirty](DDialogSelect.md#tohierarchydirty)
- [toInputLayoutOptions](DDialogSelect.md#toinputlayoutoptions)
- [toInputMargin](DDialogSelect.md#toinputmargin)
- [toInputOptions](DDialogSelect.md#toinputoptions)
- [toLayoutOptions](DDialogSelect.md#tolayoutoptions)
- [toListOptions](DDialogSelect.md#tolistoptions)
- [toLocal](DDialogSelect.md#tolocal)
- [toNoteOptions](DDialogSelect.md#tonoteoptions)
- [toParentHasDirty](DDialogSelect.md#toparenthasdirty)
- [toParentHierarchyDirty](DDialogSelect.md#toparenthierarchydirty)
- [toParentResized](DDialogSelect.md#toparentresized)
- [updateTransform](DDialogSelect.md#updatetransform)
- [mixin](DDialogSelect.md#mixin)

## Constructors

### constructor

• **new DDialogSelect**<`VALUE`, `THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeDialogSelect`](../interfaces/DThemeDialogSelect.md)<`VALUE`, `THEME`\> = [`DThemeDialogSelect`](../interfaces/DThemeDialogSelect.md)<`VALUE`\> |
| `OPTIONS` | extends [`DDialogSelectOptions`](../interfaces/DDialogSelectOptions.md)<`VALUE`, `THEME`, `any`, `OPTIONS`\> = [`DDialogSelectOptions`](../interfaces/DDialogSelectOptions.md)<`VALUE`, `THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Overrides

[DDialogLayered](DDialogLayered.md).[constructor](DDialogLayered.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L119)

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

[DDialogLayered](DDialogLayered.md).[_accessibleDiv](DDialogLayered.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_align

• `Protected` **\_align**: ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_align](DDialogLayered.md#_align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L125)

___

### \_animation

• `Protected` `Optional` **\_animation**: ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_animation](DDialogLayered.md#_animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L118)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_auto](DDialogLayered.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_background](DDialogLayered.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_border](DDialogLayered.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_bounds](DDialogLayered.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_clearType](DDialogLayered.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_closeOn

• `Protected` **\_closeOn**: `number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_closeOn](DDialogLayered.md#_closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L119)

___

### \_content

• `Protected` `Optional` **\_content**: [`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_content](DDialogLayered.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L98)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_corner](DDialogLayered.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_cursor](DDialogLayered.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_destroyed](DDialogLayered.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_focused

• `Protected` `Optional` **\_focused**: ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_focused](DDialogLayered.md#_focused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L120)

___

### \_footer

• `Protected` `Optional` **\_footer**: ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_footer](DDialogLayered.md#_footer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L99)

___

### \_gesture

• `Protected` **\_gesture**: [`DDialogGesture`](../interfaces/DDialogGesture.md)<[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_gesture](DDialogLayered.md#_gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L128)

___

### \_header

• `Protected` `Optional` **\_header**: ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_header](DDialogLayered.md#_header)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L97)

___

### \_input

• `Protected` `Optional` **\_input**: [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L111)

___

### \_inputLayout

• `Protected` `Optional` **\_inputLayout**: [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L112)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_lastDownPoint](DDialogLayered.md#_lastdownpoint)

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

[DDialogLayered](DDialogLayered.md).[_lastSortedIndex](DDialogLayered.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_layer

• `Protected` **\_layer**: ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_layer](DDialogLayered.md#_layer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L129)

___

### \_layout

• `Protected` `Optional` **\_layout**: [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_layout](DDialogLayered.md#_layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L95)

___

### \_list

• `Protected` `Optional` **\_list**: [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L113)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_mask](DDialogLayered.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_mode

• `Protected` **\_mode**: [`DDialogMode`](../index.md#ddialogmode-1)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_mode](DDialogLayered.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L122)

___

### \_noteError

• `Protected` `Optional` **\_noteError**: ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L115)

___

### \_noteNoItemsFound

• `Protected` `Optional` **\_noteNoItemsFound**: ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L116)

___

### \_noteSearching

• `Protected` `Optional` **\_noteSearching**: ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L117)

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L124)

___

### \_opener

• `Protected` `Optional` **\_opener**: ``null`` \| [`DDialogOpener`](../interfaces/DDialogOpener.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_opener](DDialogLayered.md#_opener)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L126)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_options](DDialogLayered.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_outline](DDialogLayered.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_overlay

• `Protected` **\_overlay**: [`UtilOverlay`](UtilOverlay.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_overlay](DDialogLayered.md#_overlay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L121)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_padding](DDialogLayered.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_promise

• `Protected` `Optional` **\_promise**: `Promise`<``null`` \| `VALUE`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_promise](DDialogLayered.md#_promise)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L114)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_reflowable](DDialogLayered.md#_reflowable)

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

[DDialogLayered](DDialogLayered.md).[_reject](DDialogLayered.md#_reject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L116)

___

### \_resolve

• `Protected` `Optional` **\_resolve**: (`value`: ``null`` \| `VALUE` \| `PromiseLike`<``null`` \| `VALUE`\>) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `VALUE` \| `PromiseLike`<``null`` \| `VALUE`\> |

##### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_resolve](DDialogLayered.md#_resolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L115)

___

### \_search

• `Protected` `Optional` **\_search**: [`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L114)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_shortcuts](DDialogLayered.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_snippet](DDialogLayered.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_sticky

• `Protected` **\_sticky**: `boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_sticky](DDialogLayered.md#_sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L123)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_tempDisplayObjectParent](DDialogLayered.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_title](DDialogLayered.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_value

• `Protected` **\_value**: ``null`` \| `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L110)

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

[DDialogLayered](DDialogLayered.md).[accessible](DDialogLayered.md#accessible)

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

[DDialogLayered](DDialogLayered.md).[accessibleChildren](DDialogLayered.md#accessiblechildren)

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

[DDialogLayered](DDialogLayered.md).[accessibleHint](DDialogLayered.md#accessiblehint)

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

[DDialogLayered](DDialogLayered.md).[accessiblePointerEvents](DDialogLayered.md#accessiblepointerevents)

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

[DDialogLayered](DDialogLayered.md).[accessibleTitle](DDialogLayered.md#accessibletitle)

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

[DDialogLayered](DDialogLayered.md).[accessibleType](DDialogLayered.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DDialogLayered](DDialogLayered.md).[alpha](DDialogLayered.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[angle](DDialogLayered.md#angle)

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

[DDialogLayered](DDialogLayered.md).[buttonMode](DDialogLayered.md#buttonmode)

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

[DDialogLayered](DDialogLayered.md).[cacheAsBitmap](DDialogLayered.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DDialogLayered](DDialogLayered.md).[children](DDialogLayered.md#children)

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

[DDialogLayered](DDialogLayered.md).[cursor](DDialogLayered.md#cursor)

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

[DDialogLayered](DDialogLayered.md).[filterArea](DDialogLayered.md#filterarea)

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

[DDialogLayered](DDialogLayered.md).[filters](DDialogLayered.md#filters)

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

[DDialogLayered](DDialogLayered.md).[hitArea](DDialogLayered.md#hitarea)

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

[DDialogLayered](DDialogLayered.md).[interactive](DDialogLayered.md#interactive)

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

[DDialogLayered](DDialogLayered.md).[interactiveChildren](DDialogLayered.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isMask](DDialogLayered.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isSprite](DDialogLayered.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[localTransform](DDialogLayered.md#localtransform)

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

[DDialogLayered](DDialogLayered.md).[mask](DDialogLayered.md#mask)

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

[DDialogLayered](DDialogLayered.md).[name](DDialogLayered.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DDialogLayered](DDialogLayered.md).[parent](DDialogLayered.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[pivot](DDialogLayered.md#pivot)

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

[DDialogLayered](DDialogLayered.md).[renderable](DDialogLayered.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[rotation](DDialogLayered.md#rotation)

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

[DDialogLayered](DDialogLayered.md).[sortDirty](DDialogLayered.md#sortdirty)

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

[DDialogLayered](DDialogLayered.md).[sortableChildren](DDialogLayered.md#sortablechildren)

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

[DDialogLayered](DDialogLayered.md).[transform](DDialogLayered.md#transform)

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

[DDialogLayered](DDialogLayered.md).[visible](DDialogLayered.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DDialogLayered](DDialogLayered.md).[worldAlpha](DDialogLayered.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[worldTransform](DDialogLayered.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DDialogLayered](DDialogLayered.md).[worldVisible](DDialogLayered.md#worldvisible)

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

[DDialogLayered](DDialogLayered.md).[zIndex](DDialogLayered.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_BOUNDS

▪ `Static` `Protected` `Optional` **WORK\_BOUNDS**: `Rectangle`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[WORK_BOUNDS](DDialogLayered.md#work_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L112)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[WORK_CONTAINS_POINT](DDialogLayered.md#work_contains_point)

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

DDialogLayered.algin

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L219)

___

### align

• `get` **align**(): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

DDialogLayered.align

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L215)

___

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDialogLayered.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDialogLayered.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### content

• `get` **content**(): [`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

DDialogLayered.content

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L170)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDialogLayered.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### footer

• `get` **footer**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

DDialogLayered.footer

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L195)

___

### gesture

• `get` **gesture**(): [`DDialogGesture`](../interfaces/DDialogGesture.md)<`this`\>

#### Returns

[`DDialogGesture`](../interfaces/DDialogGesture.md)<`this`\>

#### Inherited from

DDialogLayered.gesture

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L223)

___

### header

• `get` **header**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

DDialogLayered.header

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L140)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.height

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

DDialogLayered.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### input

• `get` **input**(): [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Returns

[`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L194)

___

### inputLayout

• `Protected` `get` **inputLayout**(): [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Returns

[`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L160)

___

### layer

• `get` **layer**(): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Inherited from

DDialogLayered.layer

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L227)

___

### layout

• `get` **layout**(): [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

DDialogLayered.layout

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L106)

___

### list

• `get` **list**(): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L223)

___

### mode

• `get` **mode**(): [`DDialogMode`](../index.md#ddialogmode-1)

#### Returns

[`DDialogMode`](../index.md#ddialogmode-1)

#### Inherited from

DDialogLayered.mode

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L211)

___

### noteError

• `Protected` `get` **noteError**(): ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Returns

``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L252)

___

### noteNoItemsFound

• `Protected` `get` **noteNoItemsFound**(): ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Returns

``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:269](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L269)

___

### noteSearching

• `Protected` `get` **noteSearching**(): ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Returns

``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L286)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DDialogLayered.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDialogLayered.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDialogLayered.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayered.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDialogLayered.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayered.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### search

• `Protected` `get` **search**(): [`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

#### Returns

[`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:322](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L322)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDialogLayered.shadow

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

DDialogLayered.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayered.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDialogLayered.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDialogLayered.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDialogLayered.theme

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

DDialogLayered.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDialogLayered.title

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

DDialogLayered.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDialogLayered.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDialogLayered.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### value

• `get` **value**(): ``null`` \| `VALUE`

#### Returns

``null`` \| `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L347)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.width

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

DDialogLayered.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.x

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

DDialogLayered.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayered.y

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

DDialogLayered.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[_calculateBounds](DDialogLayered.md#_calculatebounds)

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

[DDialogLayered](DDialogLayered.md).[_recursivePostUpdateTransform](DDialogLayered.md#_recursivepostupdatetransform)

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

[DDialogLayered](DDialogLayered.md).[_render](DDialogLayered.md#_render)

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

[DDialogLayered](DDialogLayered.md).[addChild](DDialogLayered.md#addchild)

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

[DDialogLayered](DDialogLayered.md).[addChildAt](DDialogLayered.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[addListener](DDialogLayered.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[addListener](DDialogLayered.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[applyTitle](DDialogLayered.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### blur

▸ **blur**(`recursively?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[blur](DDialogLayered.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[calculateBounds](DDialogLayered.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[cancel](DDialogLayered.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L238)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[close](DDialogLayered.md#close)

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

[DDialogLayered](DDialogLayered.md).[containsGlobalPoint](DDialogLayered.md#containsglobalpoint)

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

[DDialogLayered](DDialogLayered.md).[containsLocalPoint](DDialogLayered.md#containslocalpoint)

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

[DDialogLayered](DDialogLayered.md).[containsPoint](DDialogLayered.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[DDialogLayered](DDialogLayered.md).[destroy](DDialogLayered.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L374)

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

[DDialogLayered](DDialogLayered.md).[displayObjectUpdateTransform](DDialogLayered.md#displayobjectupdatetransform)

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

[DDialogLayered](DDialogLayered.md).[doReject](DDialogLayered.md#doreject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:435](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L435)

___

### doResolve

▸ `Protected` **doResolve**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `VALUE` \| `PromiseLike`<``null`` \| `VALUE`\> |

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[doResolve](DDialogLayered.md#doresolve)

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

[DDialogLayered](DDialogLayered.md).[emit](DDialogLayered.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDialogLayered](DDialogLayered.md).[eventNames](DDialogLayered.md#eventnames)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[findFirstFocusable](DDialogLayered.md#findfirstfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L225)

___

### focus

▸ **focus**(): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[focus](DDialogLayered.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[focusOnClosest](DDialogLayered.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### getAnimation

▸ `Protected` **getAnimation**(): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getAnimation](DDialogLayered.md#getanimation)

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

[DDialogLayered](DDialogLayered.md).[getBounds](DDialogLayered.md#getbounds)

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

[DDialogLayered](DDialogLayered.md).[getChildAt](DDialogLayered.md#getchildat)

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

[DDialogLayered](DDialogLayered.md).[getChildByName](DDialogLayered.md#getchildbyname)

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

[DDialogLayered](DDialogLayered.md).[getChildIndex](DDialogLayered.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getClearType](DDialogLayered.md#getcleartype)

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

[DDialogLayered](DDialogLayered.md).[getClippingRect](DDialogLayered.md#getclippingrect)

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

[DDialogLayered](DDialogLayered.md).[getGlobalPosition](DDialogLayered.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getHeight](DDialogLayered.md#getheight)

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

[DDialogLayered](DDialogLayered.md).[getLocalBounds](DDialogLayered.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getParentOfSize](DDialogLayered.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

___

### getRejectReason

▸ `Protected` **getRejectReason**(): `any`

#### Returns

`any`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getRejectReason](DDialogLayered.md#getrejectreason)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L249)

___

### getResolvedValue

▸ `Protected` **getResolvedValue**(): ``null`` \| `VALUE` \| `PromiseLike`<``null`` \| `VALUE`\>

#### Returns

``null`` \| `VALUE` \| `PromiseLike`<``null`` \| `VALUE`\>

#### Overrides

[DDialogLayered](DDialogLayered.md).[getResolvedValue](DDialogLayered.md#getresolvedvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L355)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getThemeDefault](DDialogLayered.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDialogLayered](DDialogLayered.md).[getType](DDialogLayered.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L359)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getWidth](DDialogLayered.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getX](DDialogLayered.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogLayered](DDialogLayered.md).[getY](DDialogLayered.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[hasDirty](DDialogLayered.md#hasdirty)

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

[DDialogLayered](DDialogLayered.md).[hasRefitableHeight](DDialogLayered.md#hasrefitableheight)

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

[DDialogLayered](DDialogLayered.md).[hasRefitableWidth](DDialogLayered.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hide

▸ **hide**(): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[hide](DDialogLayered.md#hide)

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

[DDialogLayered](DDialogLayered.md).[init](DDialogLayered.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L101)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[initReflowable](DDialogLayered.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isDirty](DDialogLayered.md#isdirty)

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

[DDialogLayered](DDialogLayered.md).[isEventTarget](DDialogLayered.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isHidden](DDialogLayered.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isHierarchyDirty](DDialogLayered.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1474)

___

### isOpened

▸ **isOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isOpened](DDialogLayered.md#isopened)

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

[DDialogLayered](DDialogLayered.md).[isRefitable](DDialogLayered.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1681)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[isShown](DDialogLayered.md#isshown)

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

[DDialogLayered](DDialogLayered.md).[listenerCount](DDialogLayered.md#listenercount)

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

[DDialogLayered](DDialogLayered.md).[listeners](DDialogLayered.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newContent

▸ `Protected` **newContent**(): [`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Returns

[`DDialogLayeredContent`](DDialogLayeredContent.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md), [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newContent](DDialogLayered.md#newcontent)

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

#### Overrides

[DDialogLayered](DDialogLayered.md).[newContentChildren](DDialogLayered.md#newcontentchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L154)

___

### newFooter

▸ `Protected` **newFooter**(): ``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredFooter`](DDialogLayeredFooter.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md), [`DDialogLayeredFooterOptions`](../interfaces/DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](../interfaces/DThemeDialogLayeredFooter.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newFooter](DDialogLayered.md#newfooter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L204)

___

### newHeader

▸ `Protected` **newHeader**(): ``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Returns

``null`` \| [`DDialogLayeredHeader`](DDialogLayeredHeader.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md), [`DDialogLayeredHeaderOptions`](../interfaces/DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](../interfaces/DThemeDialogLayeredHeader.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newHeader](DDialogLayered.md#newheader)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L149)

___

### newInput

▸ `Protected` **newInput**(): [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Returns

[`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L203)

___

### newInputLayout

▸ `Protected` **newInputLayout**(`input`, `theme`, `options`): [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\> |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |

#### Returns

[`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L169)

___

### newLayout

▸ `Protected` **newLayout**(): [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newLayout](DDialogLayered.md#newlayout)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newLayoutChildren](DDialogLayered.md#newlayoutchildren)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[newLayoutOptions](DDialogLayered.md#newlayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L128)

___

### newList

▸ `Protected` **newList**(): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L232)

___

### newNoteError

▸ `Protected` **newNoteError**(): ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Returns

``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L261)

___

### newNoteNoItemsFound

▸ `Protected` **newNoteNoItemsFound**(): ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Returns

``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L278)

___

### newNoteSearching

▸ `Protected` **newNoteSearching**(): ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Returns

``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L295)

___

### newSearch

▸ `Protected` **newSearch**(): [`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

#### Returns

[`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L331)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[off](DDialogLayered.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### ok

▸ **ok**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[ok](DDialogLayered.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L229)

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[on](DDialogLayered.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[on](DDialogLayered.md#on)

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

[DDialogLayered](DDialogLayered.md).[onAnimationEnd](DDialogLayered.md#onanimationend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L291)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onBlur](DDialogLayered.md#onblur)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onCancel](DDialogLayered.md#oncancel)

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

[DDialogLayered](DDialogLayered.md).[onChildBlur](DDialogLayered.md#onchildblur)

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

[DDialogLayered](DDialogLayered.md).[onChildFocus](DDialogLayered.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onChildrenChange](DDialogLayered.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1034)

___

### onClose

▸ `Protected` **onClose**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onClose](DDialogLayered.md#onclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L448)

___

### onCloseOn

▸ `Protected` **onCloseOn**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onCloseOn](DDialogLayered.md#oncloseon)

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

[DDialogLayered](DDialogLayered.md).[onDblClick](DDialogLayered.md#ondblclick)

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

[DDialogLayered](DDialogLayered.md).[onDown](DDialogLayered.md#ondown)

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

[DDialogLayered](DDialogLayered.md).[onDownThis](DDialogLayered.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onFocus](DDialogLayered.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onHierarchyDirty](DDialogLayered.md#onhierarchydirty)

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

[DDialogLayered](DDialogLayered.md).[onKeyDown](DDialogLayered.md#onkeydown)

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

[DDialogLayered](DDialogLayered.md).[onKeyUp](DDialogLayered.md#onkeyup)

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

[DDialogLayered](DDialogLayered.md).[onMove](DDialogLayered.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1051)

___

### onOk

▸ `Protected` **onOk**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `VALUE` \| `PromiseLike`<``null`` \| `VALUE`\> |

#### Returns

`void`

#### Overrides

[DDialogLayered](DDialogLayered.md).[onOk](DDialogLayered.md#onok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L369)

___

### onOpen

▸ `Protected` **onOpen**(): `void`

#### Returns

`void`

#### Overrides

[DDialogLayered](DDialogLayered.md).[onOpen](DDialogLayered.md#onopen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L363)

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

[DDialogLayered](DDialogLayered.md).[onOut](DDialogLayered.md#onout)

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

[DDialogLayered](DDialogLayered.md).[onOver](DDialogLayered.md#onover)

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

[DDialogLayered](DDialogLayered.md).[onParentMove](DDialogLayered.md#onparentmove)

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

[DDialogLayered](DDialogLayered.md).[onParentResize](DDialogLayered.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L262)

___

### onPrerender

▸ `Protected` **onPrerender**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onPrerender](DDialogLayered.md#onprerender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:376](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L376)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onRefit](DDialogLayered.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[onReflow](DDialogLayered.md#onreflow)

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

[DDialogLayered](DDialogLayered.md).[onResize](DDialogLayered.md#onresize)

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

[DDialogLayered](DDialogLayered.md).[onScale](DDialogLayered.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

___

### onSearched

▸ `Protected` **onSearched**(`results`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | `VALUE`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L351)

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

[DDialogLayered](DDialogLayered.md).[onShortcut](DDialogLayered.md#onshortcut)

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

[DDialogLayered](DDialogLayered.md).[onSkew](DDialogLayered.md#onskew)

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

[DDialogLayered](DDialogLayered.md).[onStateChange](DDialogLayered.md#onstatechange)

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

[DDialogLayered](DDialogLayered.md).[onUp](DDialogLayered.md#onup)

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

[DDialogLayered](DDialogLayered.md).[onUpThis](DDialogLayered.md#onupthis)

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

[DDialogLayered](DDialogLayered.md).[onWheel](DDialogLayered.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[once](DDialogLayered.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[once](DDialogLayered.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### open

▸ **open**(`opener?`): `Promise`<``null`` \| `VALUE`\>

Opens a dialog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opener?` | [`DDialogOpener`](../interfaces/DDialogOpener.md) | An opener of a dialog. The dialog position is determined based on a position and a size of the opener. If the opener is undefined, the dialog is placed at the center of the screen. |

#### Returns

`Promise`<``null`` \| `VALUE`\>

a value of this dialog

#### Inherited from

[DDialogLayered](DDialogLayered.md).[open](DDialogLayered.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L324)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[reflow](DDialogLayered.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeAllListeners](DDialogLayered.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeAllListeners](DDialogLayered.md#removealllisteners)

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

[DDialogLayered](DDialogLayered.md).[removeChild](DDialogLayered.md#removechild)

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

[DDialogLayered](DDialogLayered.md).[removeChildAt](DDialogLayered.md#removechildat)

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

[DDialogLayered](DDialogLayered.md).[removeChildren](DDialogLayered.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeListener](DDialogLayered.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[removeListener](DDialogLayered.md#removelistener)

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

[DDialogLayered](DDialogLayered.md).[render](DDialogLayered.md#render)

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

[DDialogLayered](DDialogLayered.md).[renderAdvanced](DDialogLayered.md#renderadvanced)

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

[DDialogLayered](DDialogLayered.md).[resize](DDialogLayered.md#resize)

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

[DDialogLayered](DDialogLayered.md).[setChildIndex](DDialogLayered.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[setFocused](DDialogLayered.md#setfocused)

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

[DDialogLayered](DDialogLayered.md).[setHeight](DDialogLayered.md#setheight)

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

[DDialogLayered](DDialogLayered.md).[setParent](DDialogLayered.md#setparent)

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

[DDialogLayered](DDialogLayered.md).[setTransform](DDialogLayered.md#settransform)

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

[DDialogLayered](DDialogLayered.md).[setWidth](DDialogLayered.md#setwidth)

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

[DDialogLayered](DDialogLayered.md).[setX](DDialogLayered.md#setx)

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

[DDialogLayered](DDialogLayered.md).[setY](DDialogLayered.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayered](DDialogLayered.md).[show](DDialogLayered.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[sortChildren](DDialogLayered.md#sortchildren)

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

[DDialogLayered](DDialogLayered.md).[swapChildren](DDialogLayered.md#swapchildren)

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

[DDialogLayered](DDialogLayered.md).[toAlign](DDialogLayered.md#toalign)

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

[DDialogLayered](DDialogLayered.md).[toCloseOn](DDialogLayered.md#tocloseon)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toContentOptions](DDialogLayered.md#tocontentoptions)

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

[DDialogLayered](DDialogLayered.md).[toCursor](DDialogLayered.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toDirty](DDialogLayered.md#todirty)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toFooterOptions](DDialogLayered.md#tofooteroptions)

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

[DDialogLayered](DDialogLayered.md).[toGestureOptions](DDialogLayered.md#togestureoptions)

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

[DDialogLayered](DDialogLayered.md).[toGlobal](DDialogLayered.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toHasDirty](DDialogLayered.md#tohasdirty)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toHeaderOptions](DDialogLayered.md#toheaderoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L157)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toHierarchyDirty](DDialogLayered.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1457)

___

### toInputLayoutOptions

▸ `Protected` **toInputLayoutOptions**(`input`, `theme`, `options`): [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\> |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |

#### Returns

[`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L177)

___

### toInputMargin

▸ `Protected` **toInputMargin**(`theme`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L219)

___

### toInputOptions

▸ `Protected` **toInputOptions**(`theme`, `options?`): [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L211)

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

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toLayoutOptions](DDialogLayered.md#tolayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L119)

___

### toListOptions

▸ `Protected` **toListOptions**(`theme`, `options?`): [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L244)

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

[DDialogLayered](DDialogLayered.md).[toLocal](DDialogLayered.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toNoteOptions

▸ `Protected` **toNoteOptions**(`parent`, `options?`): [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `options?` | [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\> |

#### Returns

[`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L306)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toParentHasDirty](DDialogLayered.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toParentHierarchyDirty](DDialogLayered.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[toParentResized](DDialogLayered.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DDialogLayered](DDialogLayered.md).[updateTransform](DDialogLayered.md#updatetransform)

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

[DDialogLayered](DDialogLayered.md).[mixin](DDialogLayered.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
