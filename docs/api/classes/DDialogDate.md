[Winter Cardinal UI - v0.164.0](../index.md) / DDialogDate

# Class: DDialogDate<THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogDate`](../interfaces/DThemeDialogDate.md) = [`DThemeDialogDate`](../interfaces/DThemeDialogDate.md) |
| `OPTIONS` | extends [`DDialogDateOptions`](../interfaces/DDialogDateOptions.md)<`THEME`\> = [`DDialogDateOptions`](../interfaces/DDialogDateOptions.md)<`THEME`\> |

## Hierarchy

- [`DDialogCommand`](DDialogCommand.md)<`Date`, `THEME`, `OPTIONS`\>

  ↳ **`DDialogDate`**

## Table of contents

### Constructors

- [constructor](DDialogDate.md#constructor)

### Properties

- [\_accessibleActive](DDialogDate.md#_accessibleactive)
- [\_accessibleDiv](DDialogDate.md#_accessiblediv)
- [\_align](DDialogDate.md#_align)
- [\_animation](DDialogDate.md#_animation)
- [\_auto](DDialogDate.md#_auto)
- [\_background](DDialogDate.md#_background)
- [\_border](DDialogDate.md#_border)
- [\_bounds](DDialogDate.md#_bounds)
- [\_buttonCancel](DDialogDate.md#_buttoncancel)
- [\_buttonLayout](DDialogDate.md#_buttonlayout)
- [\_buttonOk](DDialogDate.md#_buttonok)
- [\_clearType](DDialogDate.md#_cleartype)
- [\_closeOn](DDialogDate.md#_closeon)
- [\_corner](DDialogDate.md#_corner)
- [\_cursor](DDialogDate.md#_cursor)
- [\_destroyed](DDialogDate.md#_destroyed)
- [\_focused](DDialogDate.md#_focused)
- [\_lastDownPoint](DDialogDate.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogDate.md#_lastsortedindex)
- [\_mask](DDialogDate.md#_mask)
- [\_mode](DDialogDate.md#_mode)
- [\_onPrerenderBound](DDialogDate.md#_onprerenderbound)
- [\_options](DDialogDate.md#_options)
- [\_outline](DDialogDate.md#_outline)
- [\_overlay](DDialogDate.md#_overlay)
- [\_owner](DDialogDate.md#_owner)
- [\_padding](DDialogDate.md#_padding)
- [\_picker](DDialogDate.md#_picker)
- [\_promise](DDialogDate.md#_promise)
- [\_reflowable](DDialogDate.md#_reflowable)
- [\_reject](DDialogDate.md#_reject)
- [\_resolve](DDialogDate.md#_resolve)
- [\_shortcuts](DDialogDate.md#_shortcuts)
- [\_snippet](DDialogDate.md#_snippet)
- [\_sticky](DDialogDate.md#_sticky)
- [\_tempDisplayObjectParent](DDialogDate.md#_tempdisplayobjectparent)
- [\_title](DDialogDate.md#_title)
- [\_zIndex](DDialogDate.md#_zindex)
- [accessible](DDialogDate.md#accessible)
- [accessibleChildren](DDialogDate.md#accessiblechildren)
- [accessibleHint](DDialogDate.md#accessiblehint)
- [accessiblePointerEvents](DDialogDate.md#accessiblepointerevents)
- [accessibleTitle](DDialogDate.md#accessibletitle)
- [accessibleType](DDialogDate.md#accessibletype)
- [alpha](DDialogDate.md#alpha)
- [angle](DDialogDate.md#angle)
- [buttonMode](DDialogDate.md#buttonmode)
- [cacheAsBitmap](DDialogDate.md#cacheasbitmap)
- [children](DDialogDate.md#children)
- [cursor](DDialogDate.md#cursor)
- [filterArea](DDialogDate.md#filterarea)
- [filters](DDialogDate.md#filters)
- [hitArea](DDialogDate.md#hitarea)
- [interactive](DDialogDate.md#interactive)
- [interactiveChildren](DDialogDate.md#interactivechildren)
- [isMask](DDialogDate.md#ismask)
- [isSprite](DDialogDate.md#issprite)
- [localTransform](DDialogDate.md#localtransform)
- [mask](DDialogDate.md#mask)
- [name](DDialogDate.md#name)
- [parent](DDialogDate.md#parent)
- [pivot](DDialogDate.md#pivot)
- [renderable](DDialogDate.md#renderable)
- [rotation](DDialogDate.md#rotation)
- [sortDirty](DDialogDate.md#sortdirty)
- [sortableChildren](DDialogDate.md#sortablechildren)
- [transform](DDialogDate.md#transform)
- [visible](DDialogDate.md#visible)
- [worldAlpha](DDialogDate.md#worldalpha)
- [worldTransform](DDialogDate.md#worldtransform)
- [worldVisible](DDialogDate.md#worldvisible)
- [zIndex](DDialogDate.md#zindex)
- [WORK\_CONTAINS\_POINT](DDialogDate.md#work_contains_point)

### Accessors

- [background](DDialogDate.md#background)
- [border](DDialogDate.md#border)
- [corner](DDialogDate.md#corner)
- [current](DDialogDate.md#current)
- [height](DDialogDate.md#height)
- [new](DDialogDate.md#new)
- [outline](DDialogDate.md#outline)
- [padding](DDialogDate.md#padding)
- [page](DDialogDate.md#page)
- [picker](DDialogDate.md#picker)
- [position](DDialogDate.md#position)
- [reflowable](DDialogDate.md#reflowable)
- [scale](DDialogDate.md#scale)
- [shadow](DDialogDate.md#shadow)
- [skew](DDialogDate.md#skew)
- [snippet](DDialogDate.md#snippet)
- [state](DDialogDate.md#state)
- [theme](DDialogDate.md#theme)
- [title](DDialogDate.md#title)
- [type](DDialogDate.md#type)
- [unsafe](DDialogDate.md#unsafe)
- [weight](DDialogDate.md#weight)
- [width](DDialogDate.md#width)
- [x](DDialogDate.md#x)
- [y](DDialogDate.md#y)

### Methods

- [\_calculateBounds](DDialogDate.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialogDate.md#_recursivepostupdatetransform)
- [\_render](DDialogDate.md#_render)
- [addChild](DDialogDate.md#addchild)
- [addChildAt](DDialogDate.md#addchildat)
- [addListener](DDialogDate.md#addlistener)
- [applyTitle](DDialogDate.md#applytitle)
- [blur](DDialogDate.md#blur)
- [calculateBounds](DDialogDate.md#calculatebounds)
- [cancel](DDialogDate.md#cancel)
- [close](DDialogDate.md#close)
- [containsGlobalPoint](DDialogDate.md#containsglobalpoint)
- [containsLocalPoint](DDialogDate.md#containslocalpoint)
- [containsPoint](DDialogDate.md#containspoint)
- [destroy](DDialogDate.md#destroy)
- [displayObjectUpdateTransform](DDialogDate.md#displayobjectupdatetransform)
- [doReject](DDialogDate.md#doreject)
- [doResolve](DDialogDate.md#doresolve)
- [emit](DDialogDate.md#emit)
- [eventNames](DDialogDate.md#eventnames)
- [focus](DDialogDate.md#focus)
- [focusOnClosest](DDialogDate.md#focusonclosest)
- [getAnimation](DDialogDate.md#getanimation)
- [getBounds](DDialogDate.md#getbounds)
- [getChildAt](DDialogDate.md#getchildat)
- [getChildByName](DDialogDate.md#getchildbyname)
- [getChildIndex](DDialogDate.md#getchildindex)
- [getClearType](DDialogDate.md#getcleartype)
- [getClippingRect](DDialogDate.md#getclippingrect)
- [getGlobalPosition](DDialogDate.md#getglobalposition)
- [getHeight](DDialogDate.md#getheight)
- [getLocalBounds](DDialogDate.md#getlocalbounds)
- [getParentOfSize](DDialogDate.md#getparentofsize)
- [getRejectReason](DDialogDate.md#getrejectreason)
- [getResolvedValue](DDialogDate.md#getresolvedvalue)
- [getThemeDefault](DDialogDate.md#getthemedefault)
- [getType](DDialogDate.md#gettype)
- [getWidth](DDialogDate.md#getwidth)
- [getX](DDialogDate.md#getx)
- [getY](DDialogDate.md#gety)
- [hasDirty](DDialogDate.md#hasdirty)
- [hasRefitableHeight](DDialogDate.md#hasrefitableheight)
- [hasRefitableWidth](DDialogDate.md#hasrefitablewidth)
- [hide](DDialogDate.md#hide)
- [init](DDialogDate.md#init)
- [initReflowable](DDialogDate.md#initreflowable)
- [isDirty](DDialogDate.md#isdirty)
- [isEventTarget](DDialogDate.md#iseventtarget)
- [isHidden](DDialogDate.md#ishidden)
- [isHierarchyDirty](DDialogDate.md#ishierarchydirty)
- [isOpened](DDialogDate.md#isopened)
- [isRefitable](DDialogDate.md#isrefitable)
- [isShown](DDialogDate.md#isshown)
- [listenerCount](DDialogDate.md#listenercount)
- [listeners](DDialogDate.md#listeners)
- [newLayout](DDialogDate.md#newlayout)
- [off](DDialogDate.md#off)
- [ok](DDialogDate.md#ok)
- [on](DDialogDate.md#on)
- [onAnimationEnd](DDialogDate.md#onanimationend)
- [onBlur](DDialogDate.md#onblur)
- [onCancel](DDialogDate.md#oncancel)
- [onChildBlur](DDialogDate.md#onchildblur)
- [onChildFocus](DDialogDate.md#onchildfocus)
- [onChildrenChange](DDialogDate.md#onchildrenchange)
- [onClose](DDialogDate.md#onclose)
- [onCloseOn](DDialogDate.md#oncloseon)
- [onDblClick](DDialogDate.md#ondblclick)
- [onDown](DDialogDate.md#ondown)
- [onDownThis](DDialogDate.md#ondownthis)
- [onFocus](DDialogDate.md#onfocus)
- [onHierarchyDirty](DDialogDate.md#onhierarchydirty)
- [onInit](DDialogDate.md#oninit)
- [onKeyDown](DDialogDate.md#onkeydown)
- [onKeyUp](DDialogDate.md#onkeyup)
- [onMove](DDialogDate.md#onmove)
- [onOk](DDialogDate.md#onok)
- [onOpen](DDialogDate.md#onopen)
- [onOut](DDialogDate.md#onout)
- [onOver](DDialogDate.md#onover)
- [onParentMove](DDialogDate.md#onparentmove)
- [onParentResize](DDialogDate.md#onparentresize)
- [onPrerender](DDialogDate.md#onprerender)
- [onRefit](DDialogDate.md#onrefit)
- [onReflow](DDialogDate.md#onreflow)
- [onResize](DDialogDate.md#onresize)
- [onScale](DDialogDate.md#onscale)
- [onShortcut](DDialogDate.md#onshortcut)
- [onSkew](DDialogDate.md#onskew)
- [onStateChange](DDialogDate.md#onstatechange)
- [onUp](DDialogDate.md#onup)
- [onUpThis](DDialogDate.md#onupthis)
- [onWheel](DDialogDate.md#onwheel)
- [once](DDialogDate.md#once)
- [open](DDialogDate.md#open)
- [reflow](DDialogDate.md#reflow)
- [removeAllListeners](DDialogDate.md#removealllisteners)
- [removeChild](DDialogDate.md#removechild)
- [removeChildAt](DDialogDate.md#removechildat)
- [removeChildren](DDialogDate.md#removechildren)
- [removeListener](DDialogDate.md#removelistener)
- [render](DDialogDate.md#render)
- [renderAdvanced](DDialogDate.md#renderadvanced)
- [resize](DDialogDate.md#resize)
- [setChildIndex](DDialogDate.md#setchildindex)
- [setFocused](DDialogDate.md#setfocused)
- [setHeight](DDialogDate.md#setheight)
- [setParent](DDialogDate.md#setparent)
- [setTransform](DDialogDate.md#settransform)
- [setWidth](DDialogDate.md#setwidth)
- [setX](DDialogDate.md#setx)
- [setY](DDialogDate.md#sety)
- [show](DDialogDate.md#show)
- [sortChildren](DDialogDate.md#sortchildren)
- [swapChildren](DDialogDate.md#swapchildren)
- [toCursor](DDialogDate.md#tocursor)
- [toDirty](DDialogDate.md#todirty)
- [toGlobal](DDialogDate.md#toglobal)
- [toHasDirty](DDialogDate.md#tohasdirty)
- [toHierarchyDirty](DDialogDate.md#tohierarchydirty)
- [toLayoutOptions](DDialogDate.md#tolayoutoptions)
- [toLocal](DDialogDate.md#tolocal)
- [toParentHasDirty](DDialogDate.md#toparenthasdirty)
- [toParentHierarchyDirty](DDialogDate.md#toparenthierarchydirty)
- [toParentResized](DDialogDate.md#toparentresized)
- [updateTransform](DDialogDate.md#updatetransform)
- [mixin](DDialogDate.md#mixin)

## Constructors

### constructor

• **new DDialogDate**<`THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogDate`](../interfaces/DThemeDialogDate.md) = [`DThemeDialogDate`](../interfaces/DThemeDialogDate.md) |
| `OPTIONS` | extends [`DDialogDateOptions`](../interfaces/DDialogDateOptions.md)<`THEME`, `OPTIONS`\> = [`DDialogDateOptions`](../interfaces/DDialogDateOptions.md)<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DDialogCommand](DDialogCommand.md).[constructor](DDialogCommand.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L750)

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L105)

___

### \_animation

• `Protected` `Optional` **\_animation**: ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_animation](DDialogCommand.md#_animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L98)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_auto](DDialogCommand.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_background](DDialogCommand.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_border](DDialogCommand.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

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

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L96)

___

### \_buttonLayout

• `Protected` `Optional` **\_buttonLayout**: [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_buttonLayout](DDialogCommand.md#_buttonlayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L94)

___

### \_buttonOk

• `Protected` `Optional` **\_buttonOk**: [`DButton`](DButton.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, [`DButtonOptions`](../interfaces/DButtonOptions.md)<`unknown`, [`DThemeButton`](../interfaces/DThemeButton.md)<`unknown`\>, `any`\>\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_buttonOk](DDialogCommand.md#_buttonok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L95)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_clearType](DDialogCommand.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_closeOn

• `Protected` **\_closeOn**: `number`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_closeOn](DDialogCommand.md#_closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L99)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_corner](DDialogCommand.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_cursor](DDialogCommand.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L100)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_lastDownPoint](DDialogCommand.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L102)

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L104)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_options](DDialogCommand.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_outline](DDialogCommand.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overlay

• `Protected` **\_overlay**: [`UtilOverlay`](UtilOverlay.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_overlay](DDialogCommand.md#_overlay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L101)

___

### \_owner

• `Protected` `Optional` **\_owner**: ``null`` \| [`DBase`](DBase.md)<`any`, `any`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_owner](DDialogCommand.md#_owner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L106)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_padding](DDialogCommand.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_picker

• `Protected` `Optional` **\_picker**: [`DPickerDate`](DPickerDate.md)<[`DThemePickerDate`](../interfaces/DThemePickerDate.md), [`DPickerDateOptions`](../interfaces/DPickerDateOptions.md)<[`DThemePickerDate`](../interfaces/DThemePickerDate.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L21)

___

### \_promise

• `Protected` `Optional` **\_promise**: `Promise`<`Date`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_promise](DDialogCommand.md#_promise)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L94)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_reflowable](DDialogCommand.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L96)

___

### \_resolve

• `Protected` `Optional` **\_resolve**: (`value`: `Date` \| `PromiseLike`<`Date`\>) => `void`

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` \| `PromiseLike`<`Date`\> |

##### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_resolve](DDialogCommand.md#_resolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L95)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_shortcuts](DDialogCommand.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_snippet](DDialogCommand.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_sticky

• `Protected` **\_sticky**: `boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_sticky](DDialogCommand.md#_sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L103)

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

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

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

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDialogCommand.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDialogCommand.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDialogCommand.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### current

• `get` **current**(): `Date`

#### Returns

`Date`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L28)

• `set` **current**(`dateCurrent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateCurrent` | `Date` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L32)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDialogCommand.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### new

• `get` **new**(): `Date`

#### Returns

`Date`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L36)

• `set` **new**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L40)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDialogCommand.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDialogCommand.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### page

• `get` **page**(): `Date`

#### Returns

`Date`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L44)

• `set` **page**(`page`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | `Date` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L48)

___

### picker

• `get` **picker**(): [`DPickerDate`](DPickerDate.md)<[`DThemePickerDate`](../interfaces/DThemePickerDate.md), [`DPickerDateOptions`](../interfaces/DPickerDateOptions.md)<[`DThemePickerDate`](../interfaces/DThemePickerDate.md)\>\>

#### Returns

[`DPickerDate`](DPickerDate.md)<[`DThemePickerDate`](../interfaces/DThemePickerDate.md), [`DPickerDateOptions`](../interfaces/DPickerDateOptions.md)<[`DThemePickerDate`](../interfaces/DThemePickerDate.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L52)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogCommand.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDialogCommand.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogCommand.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDialogCommand.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogCommand.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDialogCommand.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDialogCommand.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDialogCommand.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDialogCommand.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1371)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDialogCommand.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDialogCommand.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDialogCommand.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1135)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDialogCommand.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDialogCommand.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1175)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDialogCommand.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[_calculateBounds](DDialogCommand.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

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

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[addListener](DDialogCommand.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

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

[src/main/typescript/wcardinal/ui/d-base.ts:1384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1384)

___

### blur

▸ **blur**(`recursively?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[blur](DDialogCommand.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

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

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L210)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[close](DDialogCommand.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L277)

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L374)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1931](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1931)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1918](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1918)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[destroy](DDialogCommand.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1951](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1951)

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L294)

___

### doResolve

▸ `Protected` **doResolve**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` \| `PromiseLike`<`Date`\> |

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[doResolve](DDialogCommand.md#doresolve)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L281)

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

▸ **focus**(): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[focus](DDialogCommand.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[focusOnClosest](DDialogCommand.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1845](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1845)

___

### getAnimation

▸ `Protected` **getAnimation**(): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getAnimation](DDialogCommand.md#getanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L155)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1282)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

___

### getRejectReason

▸ `Protected` **getRejectReason**(): `any`

#### Returns

`any`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getRejectReason](DDialogCommand.md#getrejectreason)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L223)

___

### getResolvedValue

▸ `Protected` **getResolvedValue**(): `Date` \| `PromiseLike`<`Date`\>

#### Returns

`Date` \| `PromiseLike`<`Date`\>

#### Overrides

[DDialogCommand](DDialogCommand.md).[getResolvedValue](DDialogCommand.md#getresolvedvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L61)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getThemeDefault](DDialogCommand.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1893](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1893)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDialogCommand](DDialogCommand.md).[getType](DDialogCommand.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L65)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getWidth](DDialogCommand.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getX](DDialogCommand.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogCommand](DDialogCommand.md).[getY](DDialogCommand.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[hasDirty](DDialogCommand.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1472)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1662](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1662)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1668](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1668)

___

### hide

▸ **hide**(): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[hide](DDialogCommand.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

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

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L98)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[initReflowable](DDialogCommand.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isDirty](DDialogCommand.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1468)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1790)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isHidden](DDialogCommand.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isHierarchyDirty](DDialogCommand.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

___

### isOpened

▸ **isOpened**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isOpened](DDialogCommand.md#isopened)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L273)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[isShown](DDialogCommand.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1400)

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

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L177)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

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

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L199)

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[on](DDialogCommand.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L180)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onBlur](DDialogCommand.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1558)

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

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L214)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1551)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onChildrenChange](DDialogCommand.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onClose

▸ `Protected` **onClose**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onClose](DDialogCommand.md#onclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L307)

___

### onCloseOn

▸ `Protected` **onCloseOn**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onCloseOn](DDialogCommand.md#oncloseon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:370](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L370)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1804)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1811)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onFocus](DDialogCommand.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onHierarchyDirty](DDialogCommand.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1464)

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

[src/main/typescript/wcardinal/ui/d-dialog-date.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-date.ts#L23)

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

[src/main/typescript/wcardinal/ui/d-dialog.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L354)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1784](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1784)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

___

### onOk

▸ `Protected` **onOk**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Date` \| `PromiseLike`<`Date`\> |

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onOk](DDialogCommand.md#onok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L203)

___

### onOpen

▸ `Protected` **onOpen**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onOpen](DDialogCommand.md#onopen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L260)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1854](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1854)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1768)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1727)

___

### onPrerender

▸ `Protected` **onPrerender**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onPrerender](DDialogCommand.md#onprerender)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L238)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onRefit](DDialogCommand.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1614)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[onReflow](DDialogCommand.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1674](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1674)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1103)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1125)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1513)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1822](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1822)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1829](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1829)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1773](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1773)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[once](DDialogCommand.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[once](DDialogCommand.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### open

▸ **open**(`owner?`): `Promise`<`Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner?` | [`DBase`](DBase.md)<`any`, `any`\> |

#### Returns

`Promise`<`Date`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[open](DDialogCommand.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L197)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[reflow](DDialogCommand.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1587)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[removeAllListeners](DDialogCommand.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

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

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[removeListener](DDialogCommand.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

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

[src/main/typescript/wcardinal/ui/d-base.ts:1883](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1883)

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

▸ **resize**(`width?`, `height?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[resize](DDialogCommand.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

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

▸ `Protected` **setFocused**(`isFocused`): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[setFocused](DDialogCommand.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1476)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1286)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1227)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1152)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogDate`](DDialogDate.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogCommand](DDialogCommand.md).[show](DDialogCommand.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

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

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toDirty](DDialogCommand.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toHierarchyDirty](DDialogCommand.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1443)

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

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L181)

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

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toParentHasDirty](DDialogCommand.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toParentHierarchyDirty](DDialogCommand.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogCommand](DDialogCommand.md).[toParentResized](DDialogCommand.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

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
