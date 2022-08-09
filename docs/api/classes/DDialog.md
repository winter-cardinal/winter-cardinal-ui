[Winter Cardinal UI - v0.205.1](../index.md) / DDialog

# Class: DDialog<VALUE, THEME, OPTIONS\>

A dialog class.

If multiple application instances are there, better to set the constructor
option `parent` to an `application.stage` so that the dialog picks a right
application. By default, the dialog assumes the last created application is
the one it belongs to at the time when it is created.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `void` |
| `THEME` | extends [`DThemeDialog`](../interfaces/DThemeDialog.md) = [`DThemeDialog`](../interfaces/DThemeDialog.md) |
| `OPTIONS` | extends [`DDialogOptions`](../interfaces/DDialogOptions.md)<`THEME`\> = [`DDialogOptions`](../interfaces/DDialogOptions.md)<`THEME`\> |

## Hierarchy

- [`DBase`](DBase.md)<`THEME`, `OPTIONS`\>

  ↳ **`DDialog`**

  ↳↳ [`DDialogLayered`](DDialogLayered.md)

## Table of contents

### Constructors

- [constructor](DDialog.md#constructor)

### Properties

- [\_accessibleActive](DDialog.md#_accessibleactive)
- [\_accessibleDiv](DDialog.md#_accessiblediv)
- [\_align](DDialog.md#_align)
- [\_animation](DDialog.md#_animation)
- [\_auto](DDialog.md#_auto)
- [\_background](DDialog.md#_background)
- [\_border](DDialog.md#_border)
- [\_bounds](DDialog.md#_bounds)
- [\_clearType](DDialog.md#_cleartype)
- [\_closeOn](DDialog.md#_closeon)
- [\_corner](DDialog.md#_corner)
- [\_cursor](DDialog.md#_cursor)
- [\_destroyed](DDialog.md#_destroyed)
- [\_focused](DDialog.md#_focused)
- [\_gesture](DDialog.md#_gesture)
- [\_lastDownPoint](DDialog.md#_lastdownpoint)
- [\_lastSortedIndex](DDialog.md#_lastsortedindex)
- [\_layer](DDialog.md#_layer)
- [\_mask](DDialog.md#_mask)
- [\_mode](DDialog.md#_mode)
- [\_onPrerenderBound](DDialog.md#_onprerenderbound)
- [\_opener](DDialog.md#_opener)
- [\_options](DDialog.md#_options)
- [\_outline](DDialog.md#_outline)
- [\_overlay](DDialog.md#_overlay)
- [\_padding](DDialog.md#_padding)
- [\_promise](DDialog.md#_promise)
- [\_reflowable](DDialog.md#_reflowable)
- [\_reject](DDialog.md#_reject)
- [\_resolve](DDialog.md#_resolve)
- [\_shortcuts](DDialog.md#_shortcuts)
- [\_snippet](DDialog.md#_snippet)
- [\_sticky](DDialog.md#_sticky)
- [\_tempDisplayObjectParent](DDialog.md#_tempdisplayobjectparent)
- [\_title](DDialog.md#_title)
- [\_zIndex](DDialog.md#_zindex)
- [accessible](DDialog.md#accessible)
- [accessibleChildren](DDialog.md#accessiblechildren)
- [accessibleHint](DDialog.md#accessiblehint)
- [accessiblePointerEvents](DDialog.md#accessiblepointerevents)
- [accessibleTitle](DDialog.md#accessibletitle)
- [accessibleType](DDialog.md#accessibletype)
- [alpha](DDialog.md#alpha)
- [angle](DDialog.md#angle)
- [buttonMode](DDialog.md#buttonmode)
- [cacheAsBitmap](DDialog.md#cacheasbitmap)
- [children](DDialog.md#children)
- [cursor](DDialog.md#cursor)
- [filterArea](DDialog.md#filterarea)
- [filters](DDialog.md#filters)
- [hitArea](DDialog.md#hitarea)
- [interactive](DDialog.md#interactive)
- [interactiveChildren](DDialog.md#interactivechildren)
- [isMask](DDialog.md#ismask)
- [isSprite](DDialog.md#issprite)
- [localTransform](DDialog.md#localtransform)
- [mask](DDialog.md#mask)
- [name](DDialog.md#name)
- [parent](DDialog.md#parent)
- [pivot](DDialog.md#pivot)
- [renderable](DDialog.md#renderable)
- [rotation](DDialog.md#rotation)
- [sortDirty](DDialog.md#sortdirty)
- [sortableChildren](DDialog.md#sortablechildren)
- [transform](DDialog.md#transform)
- [visible](DDialog.md#visible)
- [worldAlpha](DDialog.md#worldalpha)
- [worldTransform](DDialog.md#worldtransform)
- [worldVisible](DDialog.md#worldvisible)
- [zIndex](DDialog.md#zindex)
- [WORK\_BOUNDS](DDialog.md#work_bounds)
- [WORK\_CONTAINS\_POINT](DDialog.md#work_contains_point)

### Accessors

- [algin](DDialog.md#algin)
- [align](DDialog.md#align)
- [background](DDialog.md#background)
- [border](DDialog.md#border)
- [corner](DDialog.md#corner)
- [gesture](DDialog.md#gesture)
- [height](DDialog.md#height)
- [layer](DDialog.md#layer)
- [mode](DDialog.md#mode)
- [options](DDialog.md#options)
- [outline](DDialog.md#outline)
- [padding](DDialog.md#padding)
- [position](DDialog.md#position)
- [reflowable](DDialog.md#reflowable)
- [scale](DDialog.md#scale)
- [shadow](DDialog.md#shadow)
- [skew](DDialog.md#skew)
- [snippet](DDialog.md#snippet)
- [state](DDialog.md#state)
- [theme](DDialog.md#theme)
- [title](DDialog.md#title)
- [type](DDialog.md#type)
- [unsafe](DDialog.md#unsafe)
- [weight](DDialog.md#weight)
- [width](DDialog.md#width)
- [x](DDialog.md#x)
- [y](DDialog.md#y)

### Methods

- [\_calculateBounds](DDialog.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialog.md#_recursivepostupdatetransform)
- [\_render](DDialog.md#_render)
- [addChild](DDialog.md#addchild)
- [addChildAt](DDialog.md#addchildat)
- [addListener](DDialog.md#addlistener)
- [applyTitle](DDialog.md#applytitle)
- [blur](DDialog.md#blur)
- [calculateBounds](DDialog.md#calculatebounds)
- [close](DDialog.md#close)
- [containsGlobalPoint](DDialog.md#containsglobalpoint)
- [containsLocalPoint](DDialog.md#containslocalpoint)
- [containsPoint](DDialog.md#containspoint)
- [destroy](DDialog.md#destroy)
- [displayObjectUpdateTransform](DDialog.md#displayobjectupdatetransform)
- [doReject](DDialog.md#doreject)
- [doResolve](DDialog.md#doresolve)
- [emit](DDialog.md#emit)
- [eventNames](DDialog.md#eventnames)
- [findFirstFocusable](DDialog.md#findfirstfocusable)
- [focus](DDialog.md#focus)
- [focusOnClosest](DDialog.md#focusonclosest)
- [getAnimation](DDialog.md#getanimation)
- [getBounds](DDialog.md#getbounds)
- [getChildAt](DDialog.md#getchildat)
- [getChildByName](DDialog.md#getchildbyname)
- [getChildIndex](DDialog.md#getchildindex)
- [getClearType](DDialog.md#getcleartype)
- [getClippingRect](DDialog.md#getclippingrect)
- [getGlobalPosition](DDialog.md#getglobalposition)
- [getHeight](DDialog.md#getheight)
- [getLocalBounds](DDialog.md#getlocalbounds)
- [getParentOfSize](DDialog.md#getparentofsize)
- [getThemeDefault](DDialog.md#getthemedefault)
- [getType](DDialog.md#gettype)
- [getWidth](DDialog.md#getwidth)
- [getX](DDialog.md#getx)
- [getY](DDialog.md#gety)
- [hasDirty](DDialog.md#hasdirty)
- [hasRefitableHeight](DDialog.md#hasrefitableheight)
- [hasRefitableWidth](DDialog.md#hasrefitablewidth)
- [hide](DDialog.md#hide)
- [init](DDialog.md#init)
- [initReflowable](DDialog.md#initreflowable)
- [isDirty](DDialog.md#isdirty)
- [isEventTarget](DDialog.md#iseventtarget)
- [isHidden](DDialog.md#ishidden)
- [isHierarchyDirty](DDialog.md#ishierarchydirty)
- [isOpened](DDialog.md#isopened)
- [isRefitable](DDialog.md#isrefitable)
- [isShown](DDialog.md#isshown)
- [listenerCount](DDialog.md#listenercount)
- [listeners](DDialog.md#listeners)
- [off](DDialog.md#off)
- [on](DDialog.md#on)
- [onAnimationEnd](DDialog.md#onanimationend)
- [onBlur](DDialog.md#onblur)
- [onChildBlur](DDialog.md#onchildblur)
- [onChildFocus](DDialog.md#onchildfocus)
- [onChildrenChange](DDialog.md#onchildrenchange)
- [onClose](DDialog.md#onclose)
- [onCloseOn](DDialog.md#oncloseon)
- [onDblClick](DDialog.md#ondblclick)
- [onDown](DDialog.md#ondown)
- [onDownThis](DDialog.md#ondownthis)
- [onFocus](DDialog.md#onfocus)
- [onHierarchyDirty](DDialog.md#onhierarchydirty)
- [onKeyDown](DDialog.md#onkeydown)
- [onKeyUp](DDialog.md#onkeyup)
- [onMove](DDialog.md#onmove)
- [onOpen](DDialog.md#onopen)
- [onOut](DDialog.md#onout)
- [onOver](DDialog.md#onover)
- [onParentMove](DDialog.md#onparentmove)
- [onParentResize](DDialog.md#onparentresize)
- [onPrerender](DDialog.md#onprerender)
- [onRefit](DDialog.md#onrefit)
- [onReflow](DDialog.md#onreflow)
- [onResize](DDialog.md#onresize)
- [onScale](DDialog.md#onscale)
- [onShortcut](DDialog.md#onshortcut)
- [onSkew](DDialog.md#onskew)
- [onStateChange](DDialog.md#onstatechange)
- [onUp](DDialog.md#onup)
- [onUpThis](DDialog.md#onupthis)
- [onWheel](DDialog.md#onwheel)
- [once](DDialog.md#once)
- [open](DDialog.md#open)
- [reflow](DDialog.md#reflow)
- [removeAllListeners](DDialog.md#removealllisteners)
- [removeChild](DDialog.md#removechild)
- [removeChildAt](DDialog.md#removechildat)
- [removeChildren](DDialog.md#removechildren)
- [removeListener](DDialog.md#removelistener)
- [render](DDialog.md#render)
- [renderAdvanced](DDialog.md#renderadvanced)
- [resize](DDialog.md#resize)
- [setChildIndex](DDialog.md#setchildindex)
- [setFocused](DDialog.md#setfocused)
- [setHeight](DDialog.md#setheight)
- [setParent](DDialog.md#setparent)
- [setTransform](DDialog.md#settransform)
- [setWidth](DDialog.md#setwidth)
- [setX](DDialog.md#setx)
- [setY](DDialog.md#sety)
- [show](DDialog.md#show)
- [sortChildren](DDialog.md#sortchildren)
- [swapChildren](DDialog.md#swapchildren)
- [toAlign](DDialog.md#toalign)
- [toCloseOn](DDialog.md#tocloseon)
- [toCursor](DDialog.md#tocursor)
- [toDirty](DDialog.md#todirty)
- [toGestureOptions](DDialog.md#togestureoptions)
- [toGlobal](DDialog.md#toglobal)
- [toHasDirty](DDialog.md#tohasdirty)
- [toHierarchyDirty](DDialog.md#tohierarchydirty)
- [toLocal](DDialog.md#tolocal)
- [toParentHasDirty](DDialog.md#toparenthasdirty)
- [toParentHierarchyDirty](DDialog.md#toparenthierarchydirty)
- [toParentResized](DDialog.md#toparentresized)
- [updateTransform](DDialog.md#updatetransform)
- [mixin](DDialog.md#mixin)

## Constructors

### constructor

• **new DDialog**<`VALUE`, `THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `void` |
| `THEME` | extends [`DThemeDialog`](../interfaces/DThemeDialog.md) = [`DThemeDialog`](../interfaces/DThemeDialog.md) |
| `OPTIONS` | extends [`DDialogOptions`](../interfaces/DDialogOptions.md)<`THEME`, `any`, `OPTIONS`\> = [`DDialogOptions`](../interfaces/DDialogOptions.md)<`THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DBase](DBase.md).[constructor](DBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L750)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DBase](DBase.md).[_accessibleActive](DBase.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DBase](DBase.md).[_accessibleDiv](DBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_align

• `Protected` **\_align**: ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L125)

___

### \_animation

• `Protected` `Optional` **\_animation**: ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L118)

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DBase](DBase.md).[_auto](DBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DBase](DBase.md).[_background](DBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DBase](DBase.md).[_border](DBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DBase](DBase.md).[_bounds](DBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DBase](DBase.md).[_clearType](DBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_closeOn

• `Protected` **\_closeOn**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L119)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DBase](DBase.md).[_corner](DBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DBase](DBase.md).[_cursor](DBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DBase](DBase.md).[_destroyed](DBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_focused

• `Protected` `Optional` **\_focused**: ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L120)

___

### \_gesture

• `Protected` **\_gesture**: [`DDialogGesture`](../interfaces/DDialogGesture.md)<[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L128)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DBase](DBase.md).[_lastDownPoint](DBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DBase](DBase.md).[_lastSortedIndex](DBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_layer

• `Protected` **\_layer**: ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L129)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DBase](DBase.md).[_mask](DBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_mode

• `Protected` **\_mode**: [`DDialogMode`](../index.md#ddialogmode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L122)

___

### \_onPrerenderBound

• `Protected` **\_onPrerenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L124)

___

### \_opener

• `Protected` `Optional` **\_opener**: ``null`` \| [`DDialogOpener`](../interfaces/DDialogOpener.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L126)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DBase](DBase.md).[_options](DBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DBase](DBase.md).[_outline](DBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overlay

• `Protected` **\_overlay**: [`UtilOverlay`](UtilOverlay.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L121)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DBase](DBase.md).[_padding](DBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_promise

• `Protected` `Optional` **\_promise**: `Promise`<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L114)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DBase](DBase.md).[_reflowable](DBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L746)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L116)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L115)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DBase](DBase.md).[_shortcuts](DBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DBase](DBase.md).[_snippet](DBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_sticky

• `Protected` **\_sticky**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L123)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DBase](DBase.md).[_tempDisplayObjectParent](DBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DBase](DBase.md).[_title](DBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DBase](DBase.md).[_zIndex](DBase.md#_zindex)

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

[DBase](DBase.md).[accessible](DBase.md#accessible)

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

[DBase](DBase.md).[accessibleChildren](DBase.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DBase](DBase.md).[accessibleHint](DBase.md#accessiblehint)

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

[DBase](DBase.md).[accessiblePointerEvents](DBase.md#accessiblepointerevents)

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

[DBase](DBase.md).[accessibleTitle](DBase.md#accessibletitle)

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

[DBase](DBase.md).[accessibleType](DBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DBase](DBase.md).[alpha](DBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DBase](DBase.md).[angle](DBase.md#angle)

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

[DBase](DBase.md).[buttonMode](DBase.md#buttonmode)

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

[DBase](DBase.md).[cacheAsBitmap](DBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DBase](DBase.md).[children](DBase.md#children)

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

[DBase](DBase.md).[cursor](DBase.md#cursor)

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

[DBase](DBase.md).[filterArea](DBase.md#filterarea)

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

[DBase](DBase.md).[filters](DBase.md#filters)

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

[DBase](DBase.md).[hitArea](DBase.md#hitarea)

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

[DBase](DBase.md).[interactive](DBase.md#interactive)

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

[DBase](DBase.md).[interactiveChildren](DBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DBase](DBase.md).[isMask](DBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DBase](DBase.md).[isSprite](DBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DBase](DBase.md).[localTransform](DBase.md#localtransform)

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

[DBase](DBase.md).[mask](DBase.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DBase](DBase.md).[name](DBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DBase](DBase.md).[parent](DBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DBase](DBase.md).[pivot](DBase.md#pivot)

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

[DBase](DBase.md).[renderable](DBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DBase](DBase.md).[rotation](DBase.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DBase](DBase.md).[sortDirty](DBase.md#sortdirty)

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

[DBase](DBase.md).[sortableChildren](DBase.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DBase](DBase.md).[transform](DBase.md#transform)

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

[DBase](DBase.md).[visible](DBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DBase](DBase.md).[worldAlpha](DBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DBase](DBase.md).[worldTransform](DBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DBase](DBase.md).[worldVisible](DBase.md#worldvisible)

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

[DBase](DBase.md).[zIndex](DBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_BOUNDS

▪ `Static` `Protected` `Optional` **WORK\_BOUNDS**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L112)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DBase](DBase.md).[WORK_CONTAINS_POINT](DBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### algin

• `set` **algin**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L219)

___

### align

• `get` **align**(): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L215)

___

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### gesture

• `get` **gesture**(): [`DDialogGesture`](../interfaces/DDialogGesture.md)<`this`\>

#### Returns

[`DDialogGesture`](../interfaces/DDialogGesture.md)<`this`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L223)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### layer

• `get` **layer**(): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L227)

___

### mode

• `get` **mode**(): [`DDialogMode`](../index.md#ddialogmode)

#### Returns

[`DDialogMode`](../index.md#ddialogmode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L211)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DBase.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1371)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1135)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1175)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[_calculateBounds](DBase.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1906](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1906)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[_recursivePostUpdateTransform](DBase.md#_recursivepostupdatetransform)

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

[DBase](DBase.md).[_render](DBase.md#_render)

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

[DBase](DBase.md).[addChild](DBase.md#addchild)

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

[DBase](DBase.md).[addChildAt](DBase.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[addListener](DBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[addListener](DBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[applyTitle](DBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1384)

___

### blur

▸ **blur**(`recursively?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[blur](DBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[calculateBounds](DBase.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L418)

___

### containsGlobalPoint

▸ `Protected` **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Overrides

[DBase](DBase.md).[containsGlobalPoint](DBase.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:501](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L501)

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

[DBase](DBase.md).[containsLocalPoint](DBase.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1935](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1935)

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

[DBase](DBase.md).[containsPoint](DBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1922](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1922)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[destroy](DBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1955](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1955)

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

[DBase](DBase.md).[displayObjectUpdateTransform](DBase.md#displayobjectupdatetransform)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:435](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L435)

___

### doResolve

▸ `Protected` **doResolve**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` \| `PromiseLike`<`VALUE`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L422)

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

[DBase](DBase.md).[emit](DBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DBase](DBase.md).[eventNames](DBase.md#eventnames)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L311)

___

### focus

▸ **focus**(): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[focus](DBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[focusOnClosest](DBase.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

___

### getAnimation

▸ `Protected` **getAnimation**(): ``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Returns

``null`` \| [`DAnimation`](../interfaces/DAnimation.md)<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L276)

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

[DBase](DBase.md).[getBounds](DBase.md#getbounds)

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

[DBase](DBase.md).[getChildAt](DBase.md#getchildat)

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

[DBase](DBase.md).[getChildByName](DBase.md#getchildbyname)

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

[DBase](DBase.md).[getChildIndex](DBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DBase](DBase.md).[getClearType](DBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

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

[DBase](DBase.md).[getClippingRect](DBase.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

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

[DBase](DBase.md).[getGlobalPosition](DBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DBase](DBase.md).[getHeight](DBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1282)

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

[DBase](DBase.md).[getLocalBounds](DBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DBase](DBase.md).[getParentOfSize](DBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1716](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1716)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DBase](DBase.md).[getThemeDefault](DBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1897](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1897)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DBase](DBase.md).[getType](DBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L511)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DBase](DBase.md).[getWidth](DBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DBase](DBase.md).[getX](DBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DBase](DBase.md).[getY](DBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[hasDirty](DBase.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1472)

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

[DBase](DBase.md).[hasRefitableHeight](DBase.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1666)

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

[DBase](DBase.md).[hasRefitableWidth](DBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### hide

▸ **hide**(): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[hide](DBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

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

[DBase](DBase.md).[init](DBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L131)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[initReflowable](DBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[isDirty](DBase.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1468)

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

[DBase](DBase.md).[isEventTarget](DBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1794)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[isHidden](DBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[isHierarchyDirty](DBase.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

___

### isOpened

▸ **isOpened**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L414)

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

[DBase](DBase.md).[isRefitable](DBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1662](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1662)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[isShown](DBase.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1400)

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

[DBase](DBase.md).[listenerCount](DBase.md#listenercount)

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

[DBase](DBase.md).[listeners](DBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[off](DBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[on](DBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[on](DBase.md#on)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L291)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onBlur](DBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1558)

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

[DBase](DBase.md).[onChildBlur](DBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1551)

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

[DBase](DBase.md).[onChildFocus](DBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onChildrenChange](DBase.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onClose

▸ `Protected` **onClose**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L448)

___

### onCloseOn

▸ `Protected` **onCloseOn**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L497)

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

[DBase](DBase.md).[onDblClick](DBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1881](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1881)

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

[DBase](DBase.md).[onDown](DBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1808](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1808)

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

[DBase](DBase.md).[onDownThis](DBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1815](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1815)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onFocus](DBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onHierarchyDirty](DBase.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1464)

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

[DBase](DBase.md).[onKeyDown](DBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L488)

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

[DBase](DBase.md).[onKeyUp](DBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1788)

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

[DBase](DBase.md).[onMove](DBase.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

___

### onOpen

▸ `Protected` **onOpen**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:401](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L401)

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

[DBase](DBase.md).[onOut](DBase.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1872)

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

[DBase](DBase.md).[onOver](DBase.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1858](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1858)

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

[DBase](DBase.md).[onParentMove](DBase.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1772)

___

### onParentResize

▸ **onParentResize**(`parentWidth`, `parentHeight`, `parentPadding`): `void`

Called when a parent resized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentWidth` | `number` |
| `parentHeight` | `number` |
| `parentPadding` | [`DPadding`](../interfaces/DPadding.md) |

#### Returns

`void`

#### Overrides

[DBase](DBase.md).[onParentResize](DBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L262)

___

### onPrerender

▸ `Protected` **onPrerender**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:376](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L376)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onRefit](DBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1618)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onReflow](DBase.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

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

[DBase](DBase.md).[onResize](DBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1103)

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

[DBase](DBase.md).[onScale](DBase.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

[DBase](DBase.md).[onShortcut](DBase.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

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

[DBase](DBase.md).[onSkew](DBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1125)

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

[DBase](DBase.md).[onStateChange](DBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1513)

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

[DBase](DBase.md).[onUp](DBase.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1826)

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

[DBase](DBase.md).[onUpThis](DBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1833](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1833)

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

[DBase](DBase.md).[onWheel](DBase.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1777)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[once](DBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[once](DBase.md#once)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L324)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[reflow](DBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1591](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1591)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[removeAllListeners](DBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[removeAllListeners](DBase.md#removealllisteners)

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

[DBase](DBase.md).[removeChild](DBase.md#removechild)

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

[DBase](DBase.md).[removeChildAt](DBase.md#removechildat)

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

[DBase](DBase.md).[removeChildren](DBase.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[removeListener](DBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[removeListener](DBase.md#removelistener)

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

[DBase](DBase.md).[render](DBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

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

[DBase](DBase.md).[renderAdvanced](DBase.md#renderadvanced)

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

[DBase](DBase.md).[resize](DBase.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

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

[DBase](DBase.md).[setChildIndex](DBase.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[setFocused](DBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1476)

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

[DBase](DBase.md).[setHeight](DBase.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1286)

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

[DBase](DBase.md).[setParent](DBase.md#setparent)

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

[DBase](DBase.md).[setTransform](DBase.md#settransform)

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

[DBase](DBase.md).[setWidth](DBase.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1227)

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

[DBase](DBase.md).[setX](DBase.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1152)

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

[DBase](DBase.md).[setY](DBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DDialog`](DDialog.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[show](DBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[sortChildren](DBase.md#sortchildren)

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

[DBase](DBase.md).[swapChildren](DBase.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toAlign

▸ `Protected` **toAlign**(`mode`, `theme`, `options?`): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L200)

___

### toCloseOn

▸ `Protected` **toCloseOn**(`mode`, `theme`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L184)

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

[DBase](DBase.md).[toCursor](DBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[toDirty](DBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

___

### toGestureOptions

▸ `Protected` **toGestureOptions**(`mode`, `theme`, `options?`): [`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog.ts#L231)

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

[DBase](DBase.md).[toGlobal](DBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[toHasDirty](DBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[toHierarchyDirty](DBase.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1443)

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

[DBase](DBase.md).[toLocal](DBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[toParentHasDirty](DBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[toParentHierarchyDirty](DBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[toParentResized](DBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1709)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[updateTransform](DBase.md#updatetransform)

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

[DBase](DBase.md).[mixin](DBase.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
