[Winter Cardinal UI - v0.205.1](../index.md) / DDialogSelectList

# Class: DDialogSelectList<VALUE, DATA, THEME, CONTENT_OPTIONS, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `DATA` | extends [`DListData`](../interfaces/DListData.md)<`VALUE`\> = [`DListData`](../interfaces/DListData.md)<`VALUE`\> |
| `THEME` | extends [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md) = [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](../interfaces/DBaseOptions.md) = [`DContentOptions`](../interfaces/DContentOptions.md) |
| `OPTIONS` | extends [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> = [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> |

## Hierarchy

- [`DList`](DList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

  ↳ **`DDialogSelectList`**

## Table of contents

### Constructors

- [constructor](DDialogSelectList.md#constructor)

### Properties

- [\_accessibleActive](DDialogSelectList.md#_accessibleactive)
- [\_accessibleDiv](DDialogSelectList.md#_accessiblediv)
- [\_auto](DDialogSelectList.md#_auto)
- [\_background](DDialogSelectList.md#_background)
- [\_border](DDialogSelectList.md#_border)
- [\_bounds](DDialogSelectList.md#_bounds)
- [\_clearType](DDialogSelectList.md#_cleartype)
- [\_content](DDialogSelectList.md#_content)
- [\_corner](DDialogSelectList.md#_corner)
- [\_cursor](DDialogSelectList.md#_cursor)
- [\_data](DDialogSelectList.md#_data)
- [\_destroyed](DDialogSelectList.md#_destroyed)
- [\_gestureUtil](DDialogSelectList.md#_gestureutil)
- [\_lastDownPoint](DDialogSelectList.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogSelectList.md#_lastsortedindex)
- [\_mask](DDialogSelectList.md#_mask)
- [\_options](DDialogSelectList.md#_options)
- [\_outline](DDialogSelectList.md#_outline)
- [\_overflowMask](DDialogSelectList.md#_overflowmask)
- [\_padding](DDialogSelectList.md#_padding)
- [\_reflowable](DDialogSelectList.md#_reflowable)
- [\_scrollbar](DDialogSelectList.md#_scrollbar)
- [\_shortcuts](DDialogSelectList.md#_shortcuts)
- [\_snippet](DDialogSelectList.md#_snippet)
- [\_tempDisplayObjectParent](DDialogSelectList.md#_tempdisplayobjectparent)
- [\_title](DDialogSelectList.md#_title)
- [\_updater](DDialogSelectList.md#_updater)
- [\_zIndex](DDialogSelectList.md#_zindex)
- [accessible](DDialogSelectList.md#accessible)
- [accessibleChildren](DDialogSelectList.md#accessiblechildren)
- [accessibleHint](DDialogSelectList.md#accessiblehint)
- [accessiblePointerEvents](DDialogSelectList.md#accessiblepointerevents)
- [accessibleTitle](DDialogSelectList.md#accessibletitle)
- [accessibleType](DDialogSelectList.md#accessibletype)
- [alpha](DDialogSelectList.md#alpha)
- [angle](DDialogSelectList.md#angle)
- [buttonMode](DDialogSelectList.md#buttonmode)
- [cacheAsBitmap](DDialogSelectList.md#cacheasbitmap)
- [children](DDialogSelectList.md#children)
- [cursor](DDialogSelectList.md#cursor)
- [filterArea](DDialogSelectList.md#filterarea)
- [filters](DDialogSelectList.md#filters)
- [hitArea](DDialogSelectList.md#hitarea)
- [interactive](DDialogSelectList.md#interactive)
- [interactiveChildren](DDialogSelectList.md#interactivechildren)
- [isMask](DDialogSelectList.md#ismask)
- [isSprite](DDialogSelectList.md#issprite)
- [localTransform](DDialogSelectList.md#localtransform)
- [mask](DDialogSelectList.md#mask)
- [name](DDialogSelectList.md#name)
- [parent](DDialogSelectList.md#parent)
- [pivot](DDialogSelectList.md#pivot)
- [renderable](DDialogSelectList.md#renderable)
- [rotation](DDialogSelectList.md#rotation)
- [sortDirty](DDialogSelectList.md#sortdirty)
- [sortableChildren](DDialogSelectList.md#sortablechildren)
- [transform](DDialogSelectList.md#transform)
- [visible](DDialogSelectList.md#visible)
- [worldAlpha](DDialogSelectList.md#worldalpha)
- [worldTransform](DDialogSelectList.md#worldtransform)
- [worldVisible](DDialogSelectList.md#worldvisible)
- [zIndex](DDialogSelectList.md#zindex)
- [WORK\_CONTAINS\_POINT](DDialogSelectList.md#work_contains_point)
- [WORK\_POINT](DDialogSelectList.md#work_point)
- [WORK\_RECTANGLE](DDialogSelectList.md#work_rectangle)

### Accessors

- [background](DDialogSelectList.md#background)
- [border](DDialogSelectList.md#border)
- [content](DDialogSelectList.md#content)
- [corner](DDialogSelectList.md#corner)
- [data](DDialogSelectList.md#data)
- [height](DDialogSelectList.md#height)
- [options](DDialogSelectList.md#options)
- [outline](DDialogSelectList.md#outline)
- [padding](DDialogSelectList.md#padding)
- [position](DDialogSelectList.md#position)
- [reflowable](DDialogSelectList.md#reflowable)
- [scale](DDialogSelectList.md#scale)
- [scrollbar](DDialogSelectList.md#scrollbar)
- [selection](DDialogSelectList.md#selection)
- [shadow](DDialogSelectList.md#shadow)
- [skew](DDialogSelectList.md#skew)
- [snippet](DDialogSelectList.md#snippet)
- [state](DDialogSelectList.md#state)
- [theme](DDialogSelectList.md#theme)
- [title](DDialogSelectList.md#title)
- [type](DDialogSelectList.md#type)
- [unsafe](DDialogSelectList.md#unsafe)
- [updater](DDialogSelectList.md#updater)
- [weight](DDialogSelectList.md#weight)
- [width](DDialogSelectList.md#width)
- [x](DDialogSelectList.md#x)
- [y](DDialogSelectList.md#y)

### Methods

- [\_calculateBounds](DDialogSelectList.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialogSelectList.md#_recursivepostupdatetransform)
- [\_render](DDialogSelectList.md#_render)
- [addChild](DDialogSelectList.md#addchild)
- [addChildAt](DDialogSelectList.md#addchildat)
- [addListener](DDialogSelectList.md#addlistener)
- [applyTitle](DDialogSelectList.md#applytitle)
- [blur](DDialogSelectList.md#blur)
- [calculateBounds](DDialogSelectList.md#calculatebounds)
- [containsGlobalPoint](DDialogSelectList.md#containsglobalpoint)
- [containsLocalPoint](DDialogSelectList.md#containslocalpoint)
- [containsPoint](DDialogSelectList.md#containspoint)
- [destroy](DDialogSelectList.md#destroy)
- [displayObjectUpdateTransform](DDialogSelectList.md#displayobjectupdatetransform)
- [emit](DDialogSelectList.md#emit)
- [eventNames](DDialogSelectList.md#eventnames)
- [focus](DDialogSelectList.md#focus)
- [focusOnClosest](DDialogSelectList.md#focusonclosest)
- [getBounds](DDialogSelectList.md#getbounds)
- [getChildAt](DDialogSelectList.md#getchildat)
- [getChildByName](DDialogSelectList.md#getchildbyname)
- [getChildIndex](DDialogSelectList.md#getchildindex)
- [getClearType](DDialogSelectList.md#getcleartype)
- [getClippingRect](DDialogSelectList.md#getclippingrect)
- [getFocusedChildClippingRect](DDialogSelectList.md#getfocusedchildclippingrect)
- [getGlobalPosition](DDialogSelectList.md#getglobalposition)
- [getHeight](DDialogSelectList.md#getheight)
- [getLocalBounds](DDialogSelectList.md#getlocalbounds)
- [getOverflowMask](DDialogSelectList.md#getoverflowmask)
- [getParentOfSize](DDialogSelectList.md#getparentofsize)
- [getThemeDefault](DDialogSelectList.md#getthemedefault)
- [getType](DDialogSelectList.md#gettype)
- [getWheelContentX](DDialogSelectList.md#getwheelcontentx)
- [getWheelContentY](DDialogSelectList.md#getwheelcontenty)
- [getWidth](DDialogSelectList.md#getwidth)
- [getX](DDialogSelectList.md#getx)
- [getY](DDialogSelectList.md#gety)
- [hasDirty](DDialogSelectList.md#hasdirty)
- [hasRefitableHeight](DDialogSelectList.md#hasrefitableheight)
- [hasRefitableWidth](DDialogSelectList.md#hasrefitablewidth)
- [hide](DDialogSelectList.md#hide)
- [init](DDialogSelectList.md#init)
- [initContent](DDialogSelectList.md#initcontent)
- [initGesture](DDialogSelectList.md#initgesture)
- [initReflowable](DDialogSelectList.md#initreflowable)
- [initScrollBar](DDialogSelectList.md#initscrollbar)
- [isDirty](DDialogSelectList.md#isdirty)
- [isEventTarget](DDialogSelectList.md#iseventtarget)
- [isHidden](DDialogSelectList.md#ishidden)
- [isHierarchyDirty](DDialogSelectList.md#ishierarchydirty)
- [isRefitable](DDialogSelectList.md#isrefitable)
- [isShown](DDialogSelectList.md#isshown)
- [listenerCount](DDialogSelectList.md#listenercount)
- [listeners](DDialogSelectList.md#listeners)
- [lock](DDialogSelectList.md#lock)
- [newContent](DDialogSelectList.md#newcontent)
- [newScrollBar](DDialogSelectList.md#newscrollbar)
- [newUpdater](DDialogSelectList.md#newupdater)
- [off](DDialogSelectList.md#off)
- [on](DDialogSelectList.md#on)
- [onBlur](DDialogSelectList.md#onblur)
- [onChildBlur](DDialogSelectList.md#onchildblur)
- [onChildFocus](DDialogSelectList.md#onchildfocus)
- [onChildrenChange](DDialogSelectList.md#onchildrenchange)
- [onContentChange](DDialogSelectList.md#oncontentchange)
- [onDblClick](DDialogSelectList.md#ondblclick)
- [onDown](DDialogSelectList.md#ondown)
- [onDownThis](DDialogSelectList.md#ondownthis)
- [onFocus](DDialogSelectList.md#onfocus)
- [onHierarchyDirty](DDialogSelectList.md#onhierarchydirty)
- [onKeyDown](DDialogSelectList.md#onkeydown)
- [onKeyUp](DDialogSelectList.md#onkeyup)
- [onMove](DDialogSelectList.md#onmove)
- [onOut](DDialogSelectList.md#onout)
- [onOver](DDialogSelectList.md#onover)
- [onParentMove](DDialogSelectList.md#onparentmove)
- [onParentResize](DDialogSelectList.md#onparentresize)
- [onRefit](DDialogSelectList.md#onrefit)
- [onReflow](DDialogSelectList.md#onreflow)
- [onResize](DDialogSelectList.md#onresize)
- [onScale](DDialogSelectList.md#onscale)
- [onScrollBarMoveX](DDialogSelectList.md#onscrollbarmovex)
- [onScrollBarMoveY](DDialogSelectList.md#onscrollbarmovey)
- [onScrollBarUpdate](DDialogSelectList.md#onscrollbarupdate)
- [onShortcut](DDialogSelectList.md#onshortcut)
- [onSkew](DDialogSelectList.md#onskew)
- [onStateChange](DDialogSelectList.md#onstatechange)
- [onUp](DDialogSelectList.md#onup)
- [onUpThis](DDialogSelectList.md#onupthis)
- [onWheel](DDialogSelectList.md#onwheel)
- [once](DDialogSelectList.md#once)
- [reflow](DDialogSelectList.md#reflow)
- [removeAllListeners](DDialogSelectList.md#removealllisteners)
- [removeChild](DDialogSelectList.md#removechild)
- [removeChildAt](DDialogSelectList.md#removechildat)
- [removeChildren](DDialogSelectList.md#removechildren)
- [removeListener](DDialogSelectList.md#removelistener)
- [render](DDialogSelectList.md#render)
- [renderAdvanced](DDialogSelectList.md#renderadvanced)
- [resize](DDialogSelectList.md#resize)
- [setChildIndex](DDialogSelectList.md#setchildindex)
- [setFocused](DDialogSelectList.md#setfocused)
- [setHeight](DDialogSelectList.md#setheight)
- [setParent](DDialogSelectList.md#setparent)
- [setTransform](DDialogSelectList.md#settransform)
- [setWidth](DDialogSelectList.md#setwidth)
- [setX](DDialogSelectList.md#setx)
- [setY](DDialogSelectList.md#sety)
- [show](DDialogSelectList.md#show)
- [sortChildren](DDialogSelectList.md#sortchildren)
- [swapChildren](DDialogSelectList.md#swapchildren)
- [toContent](DDialogSelectList.md#tocontent)
- [toContentX](DDialogSelectList.md#tocontentx)
- [toContentY](DDialogSelectList.md#tocontenty)
- [toCursor](DDialogSelectList.md#tocursor)
- [toData](DDialogSelectList.md#todata)
- [toDirty](DDialogSelectList.md#todirty)
- [toGlobal](DDialogSelectList.md#toglobal)
- [toHasDirty](DDialogSelectList.md#tohasdirty)
- [toHierarchyDirty](DDialogSelectList.md#tohierarchydirty)
- [toLocal](DDialogSelectList.md#tolocal)
- [toParentHasDirty](DDialogSelectList.md#toparenthasdirty)
- [toParentHierarchyDirty](DDialogSelectList.md#toparenthierarchydirty)
- [toParentResized](DDialogSelectList.md#toparentresized)
- [unlock](DDialogSelectList.md#unlock)
- [update](DDialogSelectList.md#update)
- [updateTransform](DDialogSelectList.md#updatetransform)
- [mixin](DDialogSelectList.md#mixin)

## Constructors

### constructor

• **new DDialogSelectList**<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `DATA` | extends [`DListData`](../interfaces/DListData.md)<`VALUE`, `DATA`\> = [`DListData`](../interfaces/DListData.md)<`VALUE`\> |
| `THEME` | extends [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md) = [`DThemeDialogSelecList`](../interfaces/DThemeDialogSelecList.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`, `CONTENT_OPTIONS`\> = [`DContentOptions`](../interfaces/DContentOptions.md) |
| `OPTIONS` | extends [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\> = [`DDialogSelectListOptions`](../interfaces/DDialogSelectListOptions.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DList](DList.md).[constructor](DList.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L44)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DList](DList.md).[_accessibleActive](DList.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DList](DList.md).[_accessibleDiv](DList.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DList](DList.md).[_auto](DList.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DList](DList.md).[_background](DList.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DList](DList.md).[_border](DList.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DList](DList.md).[_bounds](DList.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DList](DList.md).[_clearType](DList.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_content

• `Protected` `Optional` **\_content**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DList](DList.md).[_content](DList.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L68)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DList](DList.md).[_corner](DList.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DList](DList.md).[_cursor](DList.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_data

• `Protected` `Optional` **\_data**: `DATA`

#### Inherited from

[DList](DList.md).[_data](DList.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L41)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DList](DList.md).[_destroyed](DList.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_gestureUtil

• `Protected` `Optional` **\_gestureUtil**: [`UtilGesture`](UtilGesture.md)<[`DPane`](DPane.md)<[`DThemePane`](../interfaces/DThemePane.md), [`DContentOptions`](../interfaces/DContentOptions.md), [`DPaneOptions`](../interfaces/DPaneOptions.md)<[`DThemePane`](../interfaces/DThemePane.md), [`DContentOptions`](../interfaces/DContentOptions.md)\>\>\>

#### Inherited from

[DList](DList.md).[_gestureUtil](DList.md#_gestureutil)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L71)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DList](DList.md).[_lastDownPoint](DList.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DList](DList.md).[_lastSortedIndex](DList.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DList](DList.md).[_mask](DList.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DList](DList.md).[_options](DList.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DList](DList.md).[_outline](DList.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DList](DList.md).[_overflowMask](DList.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L69)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DList](DList.md).[_padding](DList.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DList](DList.md).[_reflowable](DList.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_scrollbar

• `Protected` `Optional` **\_scrollbar**: [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

[DList](DList.md).[_scrollbar](DList.md#_scrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L70)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DList](DList.md).[_shortcuts](DList.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DList](DList.md).[_snippet](DList.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DList](DList.md).[_tempDisplayObjectParent](DList.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DList](DList.md).[_title](DList.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_updater

• `Protected` `Optional` **\_updater**: [`DListItemUpdater`](DListItemUpdater.md)<`VALUE`\>

#### Inherited from

[DList](DList.md).[_updater](DList.md#_updater)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L42)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DList](DList.md).[_zIndex](DList.md#_zindex)

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

[DList](DList.md).[accessible](DList.md#accessible)

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

[DList](DList.md).[accessibleChildren](DList.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DList](DList.md).[accessibleHint](DList.md#accessiblehint)

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

[DList](DList.md).[accessiblePointerEvents](DList.md#accessiblepointerevents)

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

[DList](DList.md).[accessibleTitle](DList.md#accessibletitle)

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

[DList](DList.md).[accessibleType](DList.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DList](DList.md).[alpha](DList.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DList](DList.md).[angle](DList.md#angle)

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

[DList](DList.md).[buttonMode](DList.md#buttonmode)

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

[DList](DList.md).[cacheAsBitmap](DList.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DList](DList.md).[children](DList.md#children)

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

[DList](DList.md).[cursor](DList.md#cursor)

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

[DList](DList.md).[filterArea](DList.md#filterarea)

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

[DList](DList.md).[filters](DList.md#filters)

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

[DList](DList.md).[hitArea](DList.md#hitarea)

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

[DList](DList.md).[interactive](DList.md#interactive)

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

[DList](DList.md).[interactiveChildren](DList.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DList](DList.md).[isMask](DList.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DList](DList.md).[isSprite](DList.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DList](DList.md).[localTransform](DList.md#localtransform)

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

[DList](DList.md).[mask](DList.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DList](DList.md).[name](DList.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DList](DList.md).[parent](DList.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DList](DList.md).[pivot](DList.md#pivot)

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

[DList](DList.md).[renderable](DList.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DList](DList.md).[rotation](DList.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DList](DList.md).[sortDirty](DList.md#sortdirty)

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

[DList](DList.md).[sortableChildren](DList.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DList](DList.md).[transform](DList.md#transform)

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

[DList](DList.md).[visible](DList.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DList](DList.md).[worldAlpha](DList.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DList](DList.md).[worldTransform](DList.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DList](DList.md).[worldVisible](DList.md#worldvisible)

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

[DList](DList.md).[zIndex](DList.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DList](DList.md).[WORK_CONTAINS_POINT](DList.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L719)

___

### WORK\_POINT

▪ `Static` `Protected` `Optional` **WORK\_POINT**: `Point`

#### Inherited from

[DList](DList.md).[WORK_POINT](DList.md#work_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L65)

___

### WORK\_RECTANGLE

▪ `Static` `Protected` `Optional` **WORK\_RECTANGLE**: `Rectangle`

#### Inherited from

[DList](DList.md).[WORK_RECTANGLE](DList.md#work_rectangle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L66)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DList.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DList.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### content

• `get` **content**(): [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Returns

[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

DList.content

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L187)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DList.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### data

• `get` **data**(): `DATA`

#### Returns

`DATA`

#### Inherited from

DList.data

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L62)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DList.height

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

DList.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DList.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DList.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DList.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DList.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DList.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DList.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### scrollbar

• `get` **scrollbar**(): [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Returns

[`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

DList.scrollbar

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L122)

___

### selection

• `get` **selection**(): [`DListDataSelection`](../interfaces/DListDataSelection.md)<`VALUE`\>

#### Returns

[`DListDataSelection`](../interfaces/DListDataSelection.md)<`VALUE`\>

#### Inherited from

DList.selection

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L120)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DList.shadow

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

DList.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DList.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DList.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DList.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DList.theme

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

DList.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DList.title

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

DList.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DList.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DList.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### updater

• `Protected` `get` **updater**(): [`DListItemUpdater`](DListItemUpdater.md)<`VALUE`\>

#### Returns

[`DListItemUpdater`](DListItemUpdater.md)<`VALUE`\>

#### Inherited from

DList.updater

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L49)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DList.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DList.width

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

DList.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DList.x

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

DList.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DList.y

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

DList.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[_calculateBounds](DList.md#_calculatebounds)

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

[DList](DList.md).[_recursivePostUpdateTransform](DList.md#_recursivepostupdatetransform)

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

[DList](DList.md).[_render](DList.md#_render)

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

[DList](DList.md).[addChild](DList.md#addchild)

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

[DList](DList.md).[addChildAt](DList.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[addListener](DList.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[addListener](DList.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[applyTitle](DList.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1384)

___

### blur

▸ **blur**(`recursively?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[blur](DList.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DList](DList.md).[calculateBounds](DList.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

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

[DList](DList.md).[containsGlobalPoint](DList.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1931](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1931)

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

[DList](DList.md).[containsLocalPoint](DList.md#containslocalpoint)

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

[DList](DList.md).[containsPoint](DList.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1922](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1922)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[destroy](DList.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L387)

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

[DList](DList.md).[displayObjectUpdateTransform](DList.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

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

[DList](DList.md).[emit](DList.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DList](DList.md).[eventNames](DList.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[focus](DList.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[focusOnClosest](DList.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

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

[DList](DList.md).[getBounds](DList.md#getbounds)

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

[DList](DList.md).[getChildAt](DList.md#getchildat)

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

[DList](DList.md).[getChildByName](DList.md#getchildbyname)

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

[DList](DList.md).[getChildIndex](DList.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DList](DList.md).[getClearType](DList.md#getcleartype)

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

[DList](DList.md).[getClippingRect](DList.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

___

### getFocusedChildClippingRect

▸ `Protected` **getFocusedChildClippingRect**(`focused`, `contentX`, `contentY`, `contentWidth`, `contentHeight`, `width`, `height`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
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

[DList](DList.md).[getFocusedChildClippingRect](DList.md#getfocusedchildclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L288)

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

[DList](DList.md).[getGlobalPosition](DList.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DList](DList.md).[getHeight](DList.md#getheight)

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

[DList](DList.md).[getLocalBounds](DList.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ `Protected` **getOverflowMask**(): [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Returns

[`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DList](DList.md).[getOverflowMask](DList.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L222)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DList](DList.md).[getParentOfSize](DList.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1716](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1716)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DList](DList.md).[getThemeDefault](DList.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1897](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1897)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DList](DList.md).[getType](DList.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-list.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog-select-list.ts#L41)

___

### getWheelContentX

▸ `Protected` **getWheelContentX**(`content`, `delta`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `delta` | `number` |

#### Returns

`number`

#### Inherited from

[DList](DList.md).[getWheelContentX](DList.md#getwheelcontentx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L248)

___

### getWheelContentY

▸ `Protected` **getWheelContentY**(`content`, `delta`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `delta` | `number` |

#### Returns

`number`

#### Inherited from

[DList](DList.md).[getWheelContentY](DList.md#getwheelcontenty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L256)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DList](DList.md).[getWidth](DList.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DList](DList.md).[getX](DList.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DList](DList.md).[getY](DList.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DList](DList.md).[hasDirty](DList.md#hasdirty)

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

[DList](DList.md).[hasRefitableHeight](DList.md#hasrefitableheight)

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

[DList](DList.md).[hasRefitableWidth](DList.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### hide

▸ **hide**(): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[hide](DList.md#hide)

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

#### Inherited from

[DList](DList.md).[init](DList.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1029](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1029)

___

### initContent

▸ `Protected` **initContent**(`content`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DList](DList.md).[initContent](DList.md#initcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:213](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L213)

___

### initGesture

▸ `Protected` **initGesture**(`theme`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DList](DList.md).[initGesture](DList.md#initgesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L95)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[initReflowable](DList.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### initScrollBar

▸ `Protected` **initScrollBar**(`scrollbar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scrollbar` | [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\> |

#### Returns

`void`

#### Inherited from

[DList](DList.md).[initScrollBar](DList.md#initscrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L156)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DList](DList.md).[isDirty](DList.md#isdirty)

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

[DList](DList.md).[isEventTarget](DList.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1794)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DList](DList.md).[isHidden](DList.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DList](DList.md).[isHierarchyDirty](DList.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

___

### isRefitable

▸ `Protected` **isRefitable**(`target`): target is DBase<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase<any, any\>

#### Inherited from

[DList](DList.md).[isRefitable](DList.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:272](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L272)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DList](DList.md).[isShown](DList.md#isshown)

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

[DList](DList.md).[listenerCount](DList.md#listenercount)

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

[DList](DList.md).[listeners](DList.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[lock](DList.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L124)

___

### newContent

▸ `Protected` **newContent**(`options?`): [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CONTENT_OPTIONS` |

#### Returns

[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DList](DList.md).[newContent](DList.md#newcontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L209)

___

### newScrollBar

▸ `Protected` **newScrollBar**(`options?`): [`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DPaneScrollBarOptions`](../interfaces/DPaneScrollBarOptions.md) |

#### Returns

[`DPaneScrollBar`](DPaneScrollBar.md)<[`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md)\>

#### Inherited from

[DList](DList.md).[newScrollBar](DList.md#newscrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L132)

___

### newUpdater

▸ `Protected` **newUpdater**(`data`, `content`, `options?`): [`DDialogSelectListItemUpdater`](DDialogSelectListItemUpdater.md)<`VALUE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DATA` |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `options?` | `OPTIONS` |

#### Returns

[`DDialogSelectListItemUpdater`](DDialogSelectListItemUpdater.md)<`VALUE`\>

#### Overrides

[DList](DList.md).[newUpdater](DList.md#newupdater)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-list.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog-select-list.ts#L33)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[off](DList.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[on](DList.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[on](DList.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onBlur](DList.md#onblur)

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

[DList](DList.md).[onChildBlur](DList.md#onchildblur)

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

[DList](DList.md).[onChildFocus](DList.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L305)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onChildrenChange](DList.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onContentChange

▸ `Protected` **onContentChange**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onContentChange](DList.md#oncontentchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L107)

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

[DList](DList.md).[onDblClick](DList.md#ondblclick)

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

[DList](DList.md).[onDown](DList.md#ondown)

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

[DList](DList.md).[onDownThis](DList.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1815](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1815)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onFocus](DList.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onHierarchyDirty](DList.md#onhierarchydirty)

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

#### Inherited from

[DList](DList.md).[onKeyDown](DList.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L142)

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

[DList](DList.md).[onKeyUp](DList.md#onkeyup)

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

[DList](DList.md).[onMove](DList.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

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

[DList](DList.md).[onOut](DList.md#onout)

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

[DList](DList.md).[onOver](DList.md#onover)

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

[DList](DList.md).[onParentMove](DList.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1772)

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

[DList](DList.md).[onParentResize](DList.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1731](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1731)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onRefit](DList.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1618)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onReflow](DList.md#onreflow)

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

[DList](DList.md).[onResize](DList.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L112)

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

[DList](DList.md).[onScale](DList.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### onScrollBarMoveX

▸ `Protected` **onScrollBarMoveX**(`start`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onScrollBarMoveX](DList.md#onscrollbarmovex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L165)

___

### onScrollBarMoveY

▸ `Protected` **onScrollBarMoveY**(`start`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onScrollBarMoveY](DList.md#onscrollbarmovey)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L174)

___

### onScrollBarUpdate

▸ `Protected` **onScrollBarUpdate**(`isRegionVisible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRegionVisible` | `boolean` |

#### Returns

`void`

#### Inherited from

[DList](DList.md).[onScrollBarUpdate](DList.md#onscrollbarupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L138)

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

[DList](DList.md).[onShortcut](DList.md#onshortcut)

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

[DList](DList.md).[onSkew](DList.md#onskew)

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

[DList](DList.md).[onStateChange](DList.md#onstatechange)

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

[DList](DList.md).[onUp](DList.md#onup)

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

[DList](DList.md).[onUpThis](DList.md#onupthis)

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

[DList](DList.md).[onWheel](DList.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L233)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[once](DList.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[once](DList.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[reflow](DList.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1591](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1591)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[removeAllListeners](DList.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[removeAllListeners](DList.md#removealllisteners)

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

[DList](DList.md).[removeChild](DList.md#removechild)

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

[DList](DList.md).[removeChildAt](DList.md#removechildat)

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

[DList](DList.md).[removeChildren](DList.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[removeListener](DList.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[removeListener](DList.md#removelistener)

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

[DList](DList.md).[render](DList.md#render)

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

[DList](DList.md).[renderAdvanced](DList.md#renderadvanced)

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

[DList](DList.md).[resize](DList.md#resize)

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

[DList](DList.md).[setChildIndex](DList.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[setFocused](DList.md#setfocused)

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

[DList](DList.md).[setHeight](DList.md#setheight)

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

[DList](DList.md).[setParent](DList.md#setparent)

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

[DList](DList.md).[setTransform](DList.md#settransform)

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

[DList](DList.md).[setWidth](DList.md#setwidth)

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

[DList](DList.md).[setX](DList.md#setx)

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

[DList](DList.md).[setY](DList.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Returns

[`DDialogSelectList`](DDialogSelectList.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`, `OPTIONS`\>

#### Inherited from

[DList](DList.md).[show](DList.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DList](DList.md).[sortChildren](DList.md#sortchildren)

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

[DList](DList.md).[swapChildren](DList.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toContent

▸ `Protected` **toContent**(`options?`): [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DList](DList.md).[toContent](DList.md#tocontent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L197)

___

### toContentX

▸ `Protected` **toContentX**(`content`, `x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `x` | `number` |

#### Returns

`number`

#### Inherited from

[DList](DList.md).[toContentX](DList.md#tocontentx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L264)

___

### toContentY

▸ `Protected` **toContentY**(`content`, `y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `y` | `number` |

#### Returns

`number`

#### Inherited from

[DList](DList.md).[toContentY](DList.md#tocontenty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-pane.ts#L268)

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

[DList](DList.md).[toCursor](DList.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toData

▸ `Protected` **toData**(`options?`): `DATA`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`DATA`

#### Inherited from

[DList](DList.md).[toData](DList.md#todata)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L71)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DList](DList.md).[toDirty](DList.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

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

[DList](DList.md).[toGlobal](DList.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DList](DList.md).[toHasDirty](DList.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DList](DList.md).[toHierarchyDirty](DList.md#tohierarchydirty)

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

[DList](DList.md).[toLocal](DList.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[toParentHasDirty](DList.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[toParentHierarchyDirty](DList.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DList](DList.md).[toParentResized](DList.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L1709)

___

### unlock

▸ **unlock**(`callIfNeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callIfNeeded` | `boolean` |

#### Returns

`void`

#### Inherited from

[DList](DList.md).[unlock](DList.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L128)

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

#### Inherited from

[DList](DList.md).[update](DList.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list.ts#L138)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DList](DList.md).[updateTransform](DList.md#updatetransform)

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

[DList](DList.md).[mixin](DList.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
