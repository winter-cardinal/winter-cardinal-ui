[Winter Cardinal UI - v0.154.0](../index.md) / DDialogSelect

# Class: DDialogSelect<VALUE, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeDialogSelect`](../interfaces/DThemeDialogSelect.md)<`VALUE`\> = [`DThemeDialogSelect`](../interfaces/DThemeDialogSelect.md)<`VALUE`\> |
| `OPTIONS` | extends [`DDialogSelectOptions`](../interfaces/DDialogSelectOptions.md)<`VALUE`, `THEME`\> = [`DDialogSelectOptions`](../interfaces/DDialogSelectOptions.md)<`VALUE`, `THEME`\> |

## Hierarchy

- [`DDialogCommand`](DDialogCommand.md)<`VALUE` \| ``null``, `THEME`, `OPTIONS`\>

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
- [\_buttonCancel](DDialogSelect.md#_buttoncancel)
- [\_buttonLayout](DDialogSelect.md#_buttonlayout)
- [\_buttonOk](DDialogSelect.md#_buttonok)
- [\_clearType](DDialogSelect.md#_cleartype)
- [\_closeOn](DDialogSelect.md#_closeon)
- [\_corner](DDialogSelect.md#_corner)
- [\_cursor](DDialogSelect.md#_cursor)
- [\_destroyed](DDialogSelect.md#_destroyed)
- [\_focused](DDialogSelect.md#_focused)
- [\_input](DDialogSelect.md#_input)
- [\_isChildrenDirty](DDialogSelect.md#_ischildrendirty)
- [\_lastDownPoint](DDialogSelect.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogSelect.md#_lastsortedindex)
- [\_list](DDialogSelect.md#_list)
- [\_mask](DDialogSelect.md#_mask)
- [\_mode](DDialogSelect.md#_mode)
- [\_noteError](DDialogSelect.md#_noteerror)
- [\_noteNoItemsFound](DDialogSelect.md#_notenoitemsfound)
- [\_noteSearching](DDialogSelect.md#_notesearching)
- [\_onPrerenderBound](DDialogSelect.md#_onprerenderbound)
- [\_options](DDialogSelect.md#_options)
- [\_outline](DDialogSelect.md#_outline)
- [\_overlay](DDialogSelect.md#_overlay)
- [\_owner](DDialogSelect.md#_owner)
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
- [WORK\_CONTAINS\_POINT](DDialogSelect.md#work_contains_point)

### Accessors

- [background](DDialogSelect.md#background)
- [border](DDialogSelect.md#border)
- [corner](DDialogSelect.md#corner)
- [height](DDialogSelect.md#height)
- [input](DDialogSelect.md#input)
- [list](DDialogSelect.md#list)
- [outline](DDialogSelect.md#outline)
- [padding](DDialogSelect.md#padding)
- [position](DDialogSelect.md#position)
- [reflowable](DDialogSelect.md#reflowable)
- [scale](DDialogSelect.md#scale)
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
- [isChildrenDirty](DDialogSelect.md#ischildrendirty)
- [isDirty](DDialogSelect.md#isdirty)
- [isEventTarget](DDialogSelect.md#iseventtarget)
- [isHidden](DDialogSelect.md#ishidden)
- [isOpened](DDialogSelect.md#isopened)
- [isRefitable](DDialogSelect.md#isrefitable)
- [isShown](DDialogSelect.md#isshown)
- [listenerCount](DDialogSelect.md#listenercount)
- [listeners](DDialogSelect.md#listeners)
- [newInput](DDialogSelect.md#newinput)
- [newInputLayout](DDialogSelect.md#newinputlayout)
- [newLayout](DDialogSelect.md#newlayout)
- [newList](DDialogSelect.md#newlist)
- [newNoteError](DDialogSelect.md#newnoteerror)
- [newNoteNoItemsFound](DDialogSelect.md#newnotenoitemsfound)
- [newNoteSearching](DDialogSelect.md#newnotesearching)
- [off](DDialogSelect.md#off)
- [ok](DDialogSelect.md#ok)
- [on](DDialogSelect.md#on)
- [onAnimationEnd](DDialogSelect.md#onanimationend)
- [onBlur](DDialogSelect.md#onblur)
- [onCancel](DDialogSelect.md#oncancel)
- [onChildBlur](DDialogSelect.md#onchildblur)
- [onChildFocus](DDialogSelect.md#onchildfocus)
- [onChildrenChange](DDialogSelect.md#onchildrenchange)
- [onChildrenDirty](DDialogSelect.md#onchildrendirty)
- [onClose](DDialogSelect.md#onclose)
- [onCloseOn](DDialogSelect.md#oncloseon)
- [onDblClick](DDialogSelect.md#ondblclick)
- [onDown](DDialogSelect.md#ondown)
- [onDownThis](DDialogSelect.md#ondownthis)
- [onFocus](DDialogSelect.md#onfocus)
- [onInit](DDialogSelect.md#oninit)
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
- [refit](DDialogSelect.md#refit)
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
- [toChildrenDirty](DDialogSelect.md#tochildrendirty)
- [toCursor](DDialogSelect.md#tocursor)
- [toDirty](DDialogSelect.md#todirty)
- [toGlobal](DDialogSelect.md#toglobal)
- [toHasDirty](DDialogSelect.md#tohasdirty)
- [toInputLayoutOptions](DDialogSelect.md#toinputlayoutoptions)
- [toInputMargin](DDialogSelect.md#toinputmargin)
- [toInputOptions](DDialogSelect.md#toinputoptions)
- [toLayoutOptions](DDialogSelect.md#tolayoutoptions)
- [toListOptions](DDialogSelect.md#tolistoptions)
- [toLocal](DDialogSelect.md#tolocal)
- [toNoteOptions](DDialogSelect.md#tonoteoptions)
- [toParentChildrenDirty](DDialogSelect.md#toparentchildrendirty)
- [toParentHasDirty](DDialogSelect.md#toparenthasdirty)
- [toParentResized](DDialogSelect.md#toparentresized)
- [toSearch](DDialogSelect.md#tosearch)
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

#### Inherited from

[DDialogCommand](DDialogCommand.md).[constructor](DDialogCommand.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L750)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_accessibleActive](DDialogCommand.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_accessibleDiv](DDialogCommand.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_align

• `Protected` **\_align**: [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_align](DDialogCommand.md#_align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L105)

___

### \_animation

• `Protected` `Optional` **\_animation**: ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_animation](DDialogCommand.md#_animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L98)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_auto](DDialogCommand.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_background](DDialogCommand.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_border](DDialogCommand.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_bounds](DDialogCommand.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_buttonCancel

• `Protected` `Optional` **\_buttonCancel**: [`DButton`](DButton.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, `any`\>\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_buttonCancel](DDialogCommand.md#_buttoncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L96)

___

### \_buttonLayout

• `Protected` `Optional` **\_buttonLayout**: [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_buttonLayout](DDialogCommand.md#_buttonlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L94)

___

### \_buttonOk

• `Protected` `Optional` **\_buttonOk**: [`DButton`](DButton.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, `any`\>\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_buttonOk](DDialogCommand.md#_buttonok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L95)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_clearType](DDialogCommand.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_closeOn

• `Protected` **\_closeOn**: `number`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_closeOn](DDialogCommand.md#_closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L99)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_corner](DDialogCommand.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_cursor](DDialogCommand.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_destroyed](DDialogCommand.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_focused

• `Protected` `Optional` **\_focused**: ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_focused](DDialogCommand.md#_focused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L100)

___

### \_input

• `Protected` **\_input**: [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L120)

___

### \_isChildrenDirty

• `Protected` **\_isChildrenDirty**: `boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_isChildrenDirty](DDialogCommand.md#_ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L732)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_lastDownPoint](DDialogCommand.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_lastSortedIndex](DDialogCommand.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_list

• `Protected` **\_list**: [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L121)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_mask](DDialogCommand.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_mode

• `Protected` **\_mode**: [`DDialogMode`](../index.md#ddialogmode)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_mode](DDialogCommand.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L102)

___

### \_noteError

• `Protected` `Optional` **\_noteError**: ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L123)

___

### \_noteNoItemsFound

• `Protected` `Optional` **\_noteNoItemsFound**: ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L124)

___

### \_noteSearching

• `Protected` `Optional` **\_noteSearching**: ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L125)

___

### \_onPrerenderBound

• `Protected` **\_onPrerenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_onPrerenderBound](DDialogCommand.md#_onprerenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L104)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_options](DDialogCommand.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_outline](DDialogCommand.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overlay

• `Protected` **\_overlay**: [`UtilOverlay`](UtilOverlay.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_overlay](DDialogCommand.md#_overlay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L101)

___

### \_owner

• `Protected` `Optional` **\_owner**: ``null`` \| [`DBase`](DBase.md)<`any`, `any`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_owner](DDialogCommand.md#_owner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L106)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_padding](DDialogCommand.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_promise

• `Protected` `Optional` **\_promise**: `Promise`<``null`` \| `VALUE`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_promise](DDialogCommand.md#_promise)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L94)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_reflowable](DDialogCommand.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

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

[DDialogCommand](DDialogCommand.md).[_reject](DDialogCommand.md#_reject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L96)

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

[DDialogCommand](DDialogCommand.md).[_resolve](DDialogCommand.md#_resolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L95)

___

### \_search

• `Protected` **\_search**: [`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L122)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_shortcuts](DDialogCommand.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_snippet](DDialogCommand.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_sticky

• `Protected` **\_sticky**: `boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_sticky](DDialogCommand.md#_sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L103)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_tempDisplayObjectParent](DDialogCommand.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_title](DDialogCommand.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_value

• `Protected` **\_value**: ``null`` \| `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L119)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_zIndex](DDialogCommand.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogCommand](DDialogCommand.md).[accessible](DDialogCommand.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8468

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`default`** true

#### Inherited from

[DDialogCommand](DDialogCommand.md).[accessibleChildren](DDialogCommand.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogCommand](DDialogCommand.md).[accessibleHint](DDialogCommand.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8483

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'auto'

#### Inherited from

[DDialogCommand](DDialogCommand.md).[accessiblePointerEvents](DDialogCommand.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8513

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogCommand](DDialogCommand.md).[accessibleTitle](DDialogCommand.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8476

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'button'

#### Inherited from

[DDialogCommand](DDialogCommand.md).[accessibleType](DDialogCommand.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DDialogCommand](DDialogCommand.md).[alpha](DDialogCommand.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDialogCommand](DDialogCommand.md).[angle](DDialogCommand.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8771

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogCommand](DDialogCommand.md).[buttonMode](DDialogCommand.md#buttonmode)

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

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogCommand](DDialogCommand.md).[cacheAsBitmap](DDialogCommand.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DDialogCommand](DDialogCommand.md).[children](DDialogCommand.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8277

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';

**`see`** https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogCommand](DDialogCommand.md).[cursor](DDialogCommand.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Inherited from

[DDialogCommand](DDialogCommand.md).[filterArea](DDialogCommand.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Inherited from

[DDialogCommand](DDialogCommand.md).[filters](DDialogCommand.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8600

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);

**`member`** {PIXI.IHitArea}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogCommand](DDialogCommand.md).[hitArea](DDialogCommand.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8841

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogCommand](DDialogCommand.md).[interactive](DDialogCommand.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8829

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`member`** {boolean}

**`memberof`** PIXI.Container#

#### Inherited from

[DDialogCommand](DDialogCommand.md).[interactiveChildren](DDialogCommand.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isMask](DDialogCommand.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isSprite](DDialogCommand.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDialogCommand](DDialogCommand.md).[localTransform](DDialogCommand.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8729

___

### mask

• **mask**: `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
{@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`example`**
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;

**`todo`** At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`member`** {PIXI.Container|PIXI.MaskData}

#### Inherited from

[DDialogCommand](DDialogCommand.md).[mask](DDialogCommand.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DDialogCommand](DDialogCommand.md).[name](DDialogCommand.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DDialogCommand](DDialogCommand.md).[parent](DDialogCommand.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DDialogCommand](DDialogCommand.md).[pivot](DDialogCommand.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8750

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

[DDialogCommand](DDialogCommand.md).[renderable](DDialogCommand.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDialogCommand](DDialogCommand.md).[rotation](DDialogCommand.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DDialogCommand](DDialogCommand.md).[sortDirty](DDialogCommand.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8300

___

### sortableChildren

• **sortableChildren**: `boolean`

If set to true, the container will sort its children by zIndex value
when updateTransform() is called, or manually if sortChildren() is called.

This actually changes the order of elements in the array, so should be treated
as a basic solution that is not performant compared to other solutions,
such as @link https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`see`** PIXI.settings.SORTABLE_CHILDREN

**`member`** {boolean} PIXI.Container#sortableChildren

#### Inherited from

[DDialogCommand](DDialogCommand.md).[sortableChildren](DDialogCommand.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DDialogCommand](DDialogCommand.md).[transform](DDialogCommand.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

[DDialogCommand](DDialogCommand.md).[visible](DDialogCommand.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DDialogCommand](DDialogCommand.md).[worldAlpha](DDialogCommand.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDialogCommand](DDialogCommand.md).[worldTransform](DDialogCommand.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DDialogCommand](DDialogCommand.md).[worldVisible](DDialogCommand.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8787

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`member`** {number}

#### Inherited from

[DDialogCommand](DDialogCommand.md).[zIndex](DDialogCommand.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[WORK_CONTAINS_POINT](DDialogCommand.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDialogCommand.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDialogCommand.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDialogCommand.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1319)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

DDialogCommand.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1250)

___

### input

• `get` **input**(): [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Returns

[`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L342)

___

### list

• `get` **list**(): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L346)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDialogCommand.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDialogCommand.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1315)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogCommand.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1301)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDialogCommand.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogCommand.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1306)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDialogCommand.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1653)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DDialogCommand.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1657)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogCommand.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1311)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDialogCommand.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDialogCommand.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1533](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1533)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDialogCommand.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DDialogCommand.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1541](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1541)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDialogCommand.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DDialogCommand.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDialogCommand.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1129)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDialogCommand.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### value

• `get` **value**(): ``null`` \| `VALUE`

#### Returns

``null`` \| `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L350)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1196)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

DDialogCommand.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1200)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

DDialogCommand.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1138)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

DDialogCommand.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1169)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_calculateBounds](DDialogCommand.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_recursivePostUpdateTransform](DDialogCommand.md#_recursivepostupdatetransform)

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

[DDialogCommand](DDialogCommand.md).[_render](DDialogCommand.md#_render)

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

[DDialogCommand](DDialogCommand.md).[addChild](DDialogCommand.md#addchild)

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

[DDialogCommand](DDialogCommand.md).[addChildAt](DDialogCommand.md#addchildat)

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

[DDialogCommand](DDialogCommand.md).[addListener](DDialogCommand.md#addlistener)

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

[DDialogCommand](DDialogCommand.md).[addListener](DDialogCommand.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[applyTitle](DDialogCommand.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

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

[DDialogCommand](DDialogCommand.md).[blur](DDialogCommand.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1458)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[calculateBounds](DDialogCommand.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[cancel](DDialogCommand.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L210)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[close](DDialogCommand.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L277)

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

[DDialogCommand](DDialogCommand.md).[containsGlobalPoint](DDialogCommand.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L374)

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

[DDialogCommand](DDialogCommand.md).[containsLocalPoint](DDialogCommand.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1906](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1906)

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

[DDialogCommand](DDialogCommand.md).[containsPoint](DDialogCommand.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1893](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1893)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[DDialogCommand](DDialogCommand.md).[destroy](DDialogCommand.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L377)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`memberof`** PIXI.DisplayObject#

**`function`** displayObjectUpdateTransform

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[displayObjectUpdateTransform](DDialogCommand.md#displayobjectupdatetransform)

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

[DDialogCommand](DDialogCommand.md).[doReject](DDialogCommand.md#doreject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L294)

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

[DDialogCommand](DDialogCommand.md).[doResolve](DDialogCommand.md#doresolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L281)

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

[DDialogCommand](DDialogCommand.md).[emit](DDialogCommand.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDialogCommand](DDialogCommand.md).[eventNames](DDialogCommand.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[focus](DDialogCommand.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[focusOnClosest](DDialogCommand.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1820)

___

### getAnimation

▸ `Protected` **getAnimation**(): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getAnimation](DDialogCommand.md#getanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L155)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getBounds](DDialogCommand.md#getbounds)

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

[DDialogCommand](DDialogCommand.md).[getChildAt](DDialogCommand.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8351

___

### getChildByName

▸ **getChildByName**(`name`): `DisplayObject`

Returns the display object in the container.

**`method`** getChildByName

**`memberof`** PIXI.Container#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |

#### Returns

`DisplayObject`

The child with the specified name.

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getChildByName](DDialogCommand.md#getchildbyname)

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

[DDialogCommand](DDialogCommand.md).[getChildIndex](DDialogCommand.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getClearType](DDialogCommand.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1098)

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

[DDialogCommand](DDialogCommand.md).[getClippingRect](DDialogCommand.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

**`method`** getGlobalPosition

**`memberof`** PIXI.DisplayObject#

#### Parameters

| Name | Type |
| :------ | :------ |
| `point?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

The updated point.

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getGlobalPosition](DDialogCommand.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getHeight](DDialogCommand.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getLocalBounds](DDialogCommand.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getParentOfSize](DDialogCommand.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1687)

___

### getRejectReason

▸ `Protected` **getRejectReason**(): `any`

#### Returns

`any`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getRejectReason](DDialogCommand.md#getrejectreason)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L223)

___

### getResolvedValue

▸ `Protected` **getResolvedValue**(): ``null`` \| `VALUE` \| `PromiseLike`<``null`` \| `VALUE`\>

#### Returns

``null`` \| `VALUE` \| `PromiseLike`<``null`` \| `VALUE`\>

#### Overrides

[DDialogCommand](DDialogCommand.md).[getResolvedValue](DDialogCommand.md#getresolvedvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L358)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getThemeDefault](DDialogCommand.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDialogCommand](DDialogCommand.md).[getType](DDialogCommand.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L362)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getWidth](DDialogCommand.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getX](DDialogCommand.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1142)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getY](DDialogCommand.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1173)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[hasDirty](DDialogCommand.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1440)

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

[DDialogCommand](DDialogCommand.md).[hasRefitableHeight](DDialogCommand.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1619](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1619)

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

[DDialogCommand](DDialogCommand.md).[hasRefitableWidth](DDialogCommand.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1625](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1625)

___

### hide

▸ **hide**(): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[hide](DDialogCommand.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1372](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1372)

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

[DDialogCommand](DDialogCommand.md).[init](DDialogCommand.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L98)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[initReflowable](DDialogCommand.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isChildrenDirty

▸ **isChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isChildrenDirty](DDialogCommand.md#ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isDirty](DDialogCommand.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

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

[DDialogCommand](DDialogCommand.md).[isEventTarget](DDialogCommand.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1765](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1765)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isHidden](DDialogCommand.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

___

### isOpened

▸ **isOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isOpened](DDialogCommand.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L273)

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

[DDialogCommand](DDialogCommand.md).[isRefitable](DDialogCommand.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1615)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isShown](DDialogCommand.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1368)

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

[DDialogCommand](DDialogCommand.md).[listenerCount](DDialogCommand.md#listenercount)

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

[DDialogCommand](DDialogCommand.md).[listeners](DDialogCommand.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newInput

▸ `Protected` **newInput**(`theme`, `options?`): [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L190)

___

### newInputLayout

▸ `Protected` **newInputLayout**(`layout`, `input`, `theme`, `options`): [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\> \| [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\> |
| `input` | [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\> |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |

#### Returns

[`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L202)

___

### newLayout

▸ `Protected` **newLayout**(`theme`, `options?`): [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[newLayout](DDialogCommand.md#newlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L177)

___

### newList

▸ `Protected` **newList**(`theme`, `options?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:265](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L265)

___

### newNoteError

▸ `Protected` **newNoteError**(`list`, `options?`): `undefined` \| ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\> |
| `options?` | [`DDialogSelectNoteOptions`](../interfaces/DDialogSelectNoteOptions.md) |

#### Returns

`undefined` \| ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:293](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L293)

___

### newNoteNoItemsFound

▸ `Protected` **newNoteNoItemsFound**(`list`, `options?`): `undefined` \| ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\> |
| `options?` | [`DDialogSelectNoteOptions`](../interfaces/DDialogSelectNoteOptions.md) |

#### Returns

`undefined` \| ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:304](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L304)

___

### newNoteSearching

▸ `Protected` **newNoteSearching**(`list`, `options?`): `undefined` \| ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\> |
| `options?` | [`DDialogSelectNoteOptions`](../interfaces/DDialogSelectNoteOptions.md) |

#### Returns

`undefined` \| ``null`` \| [`DNote`](DNote.md)<[`DThemeNote`](../interfaces/DThemeNote.md), [`DNoteOptions`](../interfaces/DNoteOptions.md)<[`DThemeNote`](../interfaces/DThemeNote.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L315)

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

[DDialogCommand](DDialogCommand.md).[off](DDialogCommand.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### ok

▸ **ok**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[ok](DDialogCommand.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L199)

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

[DDialogCommand](DDialogCommand.md).[on](DDialogCommand.md#on)

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

[DDialogCommand](DDialogCommand.md).[on](DDialogCommand.md#on)

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

[DDialogCommand](DDialogCommand.md).[onAnimationEnd](DDialogCommand.md#onanimationend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L180)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onBlur](DDialogCommand.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1526)

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

[DDialogCommand](DDialogCommand.md).[onCancel](DDialogCommand.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L214)

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

[DDialogCommand](DDialogCommand.md).[onChildBlur](DDialogCommand.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1519](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1519)

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

[DDialogCommand](DDialogCommand.md).[onChildFocus](DDialogCommand.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1505)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onChildrenChange](DDialogCommand.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onChildrenDirty

▸ `Protected` **onChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onChildrenDirty](DDialogCommand.md#onchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1432)

___

### onClose

▸ `Protected` **onClose**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onClose](DDialogCommand.md#onclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L307)

___

### onCloseOn

▸ `Protected` **onCloseOn**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onCloseOn](DDialogCommand.md#oncloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:370](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L370)

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

[DDialogCommand](DDialogCommand.md).[onDblClick](DDialogCommand.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1852)

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

[DDialogCommand](DDialogCommand.md).[onDown](DDialogCommand.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1779](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1779)

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

[DDialogCommand](DDialogCommand.md).[onDownThis](DDialogCommand.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1786](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1786)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onFocus](DDialogCommand.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1512)

___

### onInit

▸ `Protected` **onInit**(`layout`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\> |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Overrides

[DDialogCommand](DDialogCommand.md).[onInit](DDialogCommand.md#oninit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L127)

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

[DDialogCommand](DDialogCommand.md).[onKeyDown](DDialogCommand.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L354)

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

[DDialogCommand](DDialogCommand.md).[onKeyUp](DDialogCommand.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1759)

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

[DDialogCommand](DDialogCommand.md).[onMove](DDialogCommand.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

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

[DDialogCommand](DDialogCommand.md).[onOk](DDialogCommand.md#onok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:372](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L372)

___

### onOpen

▸ `Protected` **onOpen**(): `void`

#### Returns

`void`

#### Overrides

[DDialogCommand](DDialogCommand.md).[onOpen](DDialogCommand.md#onopen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L366)

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

[DDialogCommand](DDialogCommand.md).[onOut](DDialogCommand.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

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

[DDialogCommand](DDialogCommand.md).[onOver](DDialogCommand.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1829](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1829)

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

[DDialogCommand](DDialogCommand.md).[onParentMove](DDialogCommand.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1743)

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

[DDialogCommand](DDialogCommand.md).[onParentResize](DDialogCommand.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1702](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1702)

___

### onPrerender

▸ `Protected` **onPrerender**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onPrerender](DDialogCommand.md#onprerender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L238)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onRefit](DDialogCommand.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1571)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onReflow](DDialogCommand.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1649)

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

[DDialogCommand](DDialogCommand.md).[onResize](DDialogCommand.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1102)

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

[DDialogCommand](DDialogCommand.md).[onScale](DDialogCommand.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1119)

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

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L354)

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

[DDialogCommand](DDialogCommand.md).[onShortcut](DDialogCommand.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

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

[DDialogCommand](DDialogCommand.md).[onSkew](DDialogCommand.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

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

[DDialogCommand](DDialogCommand.md).[onStateChange](DDialogCommand.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1481](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1481)

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

[DDialogCommand](DDialogCommand.md).[onUp](DDialogCommand.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1797)

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

[DDialogCommand](DDialogCommand.md).[onUpThis](DDialogCommand.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1804)

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

[DDialogCommand](DDialogCommand.md).[onWheel](DDialogCommand.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1748)

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

[DDialogCommand](DDialogCommand.md).[once](DDialogCommand.md#once)

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

[DDialogCommand](DDialogCommand.md).[once](DDialogCommand.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### open

▸ **open**(`owner?`): `Promise`<``null`` \| `VALUE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner?` | [`DBase`](DBase.md)<`any`, `any`\> |

#### Returns

`Promise`<``null`` \| `VALUE`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[open](DDialogCommand.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L197)

___

### refit

▸ **refit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[refit](DDialogCommand.md#refit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1555](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1555)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[reflow](DDialogCommand.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1631](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1631)

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

[DDialogCommand](DDialogCommand.md).[removeAllListeners](DDialogCommand.md#removealllisteners)

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

[DDialogCommand](DDialogCommand.md).[removeAllListeners](DDialogCommand.md#removealllisteners)

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

[DDialogCommand](DDialogCommand.md).[removeChild](DDialogCommand.md#removechild)

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

[DDialogCommand](DDialogCommand.md).[removeChildAt](DDialogCommand.md#removechildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `beginIndex?` | `number` |
| `endIndex?` | `number` |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

[DDialogCommand](DDialogCommand.md).[removeChildren](DDialogCommand.md#removechildren)

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

[DDialogCommand](DDialogCommand.md).[removeListener](DDialogCommand.md#removelistener)

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

[DDialogCommand](DDialogCommand.md).[removeListener](DDialogCommand.md#removelistener)

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

[DDialogCommand](DDialogCommand.md).[render](DDialogCommand.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1858](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1858)

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

[DDialogCommand](DDialogCommand.md).[renderAdvanced](DDialogCommand.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### resize

▸ **resize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[resize](DDialogCommand.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

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

[DDialogCommand](DDialogCommand.md).[setChildIndex](DDialogCommand.md#setchildindex)

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

[DDialogCommand](DDialogCommand.md).[setFocused](DDialogCommand.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1444](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1444)

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

[DDialogCommand](DDialogCommand.md).[setHeight](DDialogCommand.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

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

[DDialogCommand](DDialogCommand.md).[setParent](DDialogCommand.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8686

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `scaleX?` | `number` |
| `scaleY?` | `number` |
| `rotation?` | `number` |
| `skewX?` | `number` |
| `skewY?` | `number` |
| `pivotX?` | `number` |
| `pivotY?` | `number` |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

[DDialogCommand](DDialogCommand.md).[setTransform](DDialogCommand.md#settransform)

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

[DDialogCommand](DDialogCommand.md).[setWidth](DDialogCommand.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

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

[DDialogCommand](DDialogCommand.md).[setX](DDialogCommand.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1151)

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

[DDialogCommand](DDialogCommand.md).[setY](DDialogCommand.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1182)

___

### show

▸ **show**(): [`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialogSelect`](DDialogSelect.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[show](DDialogCommand.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[sortChildren](DDialogCommand.md#sortchildren)

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

[DDialogCommand](DDialogCommand.md).[swapChildren](DDialogCommand.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toChildrenDirty

▸ **toChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toChildrenDirty](DDialogCommand.md#tochildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1411)

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

[DDialogCommand](DDialogCommand.md).[toCursor](DDialogCommand.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toDirty](DDialogCommand.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toGlobal](DDialogCommand.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toHasDirty](DDialogCommand.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1395](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1395)

___

### toInputLayoutOptions

▸ `Protected` **toInputLayoutOptions**(`layout`, `input`, `theme`, `options`): [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`DLayoutVertical`](DLayoutVertical.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md), [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>\> \| [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\> |
| `input` | [`DInputSearch`](DInputSearch.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md), [`DInputSearchOptions`](../interfaces/DInputSearchOptions.md)<[`DThemeInputSearch`](../interfaces/DThemeInputSearch.md)\>\> |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |

#### Returns

[`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L211)

___

### toInputMargin

▸ `Protected` **toInputMargin**(`theme`, `options?`): [`DDialogSelectInputMargin`](../interfaces/DDialogSelectInputMargin.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogSelectInputMargin`](../interfaces/DDialogSelectInputMargin.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L234)

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

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L194)

___

### toLayoutOptions

▸ `Protected` **toLayoutOptions**(`theme`, `options?`): [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\> |

#### Returns

[`DLayoutVerticalOptions`](../interfaces/DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](../interfaces/DThemeLayoutVertical.md)\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toLayoutOptions](DDialogCommand.md#tolayoutoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L181)

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

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L257)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | - |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toLocal](DDialogCommand.md#tolocal)

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

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L277)

___

### toParentChildrenDirty

▸ **toParentChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toParentChildrenDirty](DDialogCommand.md#toparentchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1421)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toParentHasDirty](DDialogCommand.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toParentResized](DDialogCommand.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1680)

___

### toSearch

▸ `Protected` **toSearch**(`controller?`): [`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller?` | [`DDialogSelectController`](../interfaces/DDialogSelectController.md)<`VALUE`\> |

#### Returns

[`DDialogSelectSearch`](../interfaces/DDialogSelectSearch.md)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:329](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L329)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[updateTransform](DDialogCommand.md#updatetransform)

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

[DDialogCommand](DDialogCommand.md).[mixin](DDialogCommand.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
