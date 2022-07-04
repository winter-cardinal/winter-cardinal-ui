[Winter Cardinal UI - v0.194.0](../index.md) / DDialogFittedContent

# Class: DDialogFittedContent<THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md) = [`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md) |
| `OPTIONS` | extends [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<`THEME`\> = [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<`THEME`\> |

## Hierarchy

- [`DDialogLayeredContent`](DDialogLayeredContent.md)<`THEME`, `OPTIONS`\>

  ↳ **`DDialogFittedContent`**

## Table of contents

### Constructors

- [constructor](DDialogFittedContent.md#constructor)

### Properties

- [\_accessibleActive](DDialogFittedContent.md#_accessibleactive)
- [\_accessibleDiv](DDialogFittedContent.md#_accessiblediv)
- [\_auto](DDialogFittedContent.md#_auto)
- [\_background](DDialogFittedContent.md#_background)
- [\_border](DDialogFittedContent.md#_border)
- [\_bounds](DDialogFittedContent.md#_bounds)
- [\_clearType](DDialogFittedContent.md#_cleartype)
- [\_corner](DDialogFittedContent.md#_corner)
- [\_cornerAdjust](DDialogFittedContent.md#_corneradjust)
- [\_cursor](DDialogFittedContent.md#_cursor)
- [\_destroyed](DDialogFittedContent.md#_destroyed)
- [\_direction](DDialogFittedContent.md#_direction)
- [\_lastDownPoint](DDialogFittedContent.md#_lastdownpoint)
- [\_lastSortedIndex](DDialogFittedContent.md#_lastsortedindex)
- [\_margin](DDialogFittedContent.md#_margin)
- [\_mask](DDialogFittedContent.md#_mask)
- [\_multiplicity](DDialogFittedContent.md#_multiplicity)
- [\_options](DDialogFittedContent.md#_options)
- [\_outline](DDialogFittedContent.md#_outline)
- [\_padding](DDialogFittedContent.md#_padding)
- [\_reflowable](DDialogFittedContent.md#_reflowable)
- [\_reverse](DDialogFittedContent.md#_reverse)
- [\_shortcuts](DDialogFittedContent.md#_shortcuts)
- [\_snippet](DDialogFittedContent.md#_snippet)
- [\_tempDisplayObjectParent](DDialogFittedContent.md#_tempdisplayobjectparent)
- [\_title](DDialogFittedContent.md#_title)
- [\_zIndex](DDialogFittedContent.md#_zindex)
- [accessible](DDialogFittedContent.md#accessible)
- [accessibleChildren](DDialogFittedContent.md#accessiblechildren)
- [accessibleHint](DDialogFittedContent.md#accessiblehint)
- [accessiblePointerEvents](DDialogFittedContent.md#accessiblepointerevents)
- [accessibleTitle](DDialogFittedContent.md#accessibletitle)
- [accessibleType](DDialogFittedContent.md#accessibletype)
- [alpha](DDialogFittedContent.md#alpha)
- [angle](DDialogFittedContent.md#angle)
- [buttonMode](DDialogFittedContent.md#buttonmode)
- [cacheAsBitmap](DDialogFittedContent.md#cacheasbitmap)
- [children](DDialogFittedContent.md#children)
- [cursor](DDialogFittedContent.md#cursor)
- [filterArea](DDialogFittedContent.md#filterarea)
- [filters](DDialogFittedContent.md#filters)
- [hitArea](DDialogFittedContent.md#hitarea)
- [interactive](DDialogFittedContent.md#interactive)
- [interactiveChildren](DDialogFittedContent.md#interactivechildren)
- [isMask](DDialogFittedContent.md#ismask)
- [isSprite](DDialogFittedContent.md#issprite)
- [localTransform](DDialogFittedContent.md#localtransform)
- [mask](DDialogFittedContent.md#mask)
- [name](DDialogFittedContent.md#name)
- [parent](DDialogFittedContent.md#parent)
- [pivot](DDialogFittedContent.md#pivot)
- [renderable](DDialogFittedContent.md#renderable)
- [rotation](DDialogFittedContent.md#rotation)
- [sortDirty](DDialogFittedContent.md#sortdirty)
- [sortableChildren](DDialogFittedContent.md#sortablechildren)
- [transform](DDialogFittedContent.md#transform)
- [visible](DDialogFittedContent.md#visible)
- [worldAlpha](DDialogFittedContent.md#worldalpha)
- [worldTransform](DDialogFittedContent.md#worldtransform)
- [worldVisible](DDialogFittedContent.md#worldvisible)
- [zIndex](DDialogFittedContent.md#zindex)
- [CORNER\_ADJUST\_WORK](DDialogFittedContent.md#corner_adjust_work)
- [WORK\_CONTAINS\_POINT](DDialogFittedContent.md#work_contains_point)

### Accessors

- [background](DDialogFittedContent.md#background)
- [border](DDialogFittedContent.md#border)
- [corner](DDialogFittedContent.md#corner)
- [height](DDialogFittedContent.md#height)
- [margin](DDialogFittedContent.md#margin)
- [multiplicity](DDialogFittedContent.md#multiplicity)
- [options](DDialogFittedContent.md#options)
- [outline](DDialogFittedContent.md#outline)
- [padding](DDialogFittedContent.md#padding)
- [position](DDialogFittedContent.md#position)
- [reflowable](DDialogFittedContent.md#reflowable)
- [scale](DDialogFittedContent.md#scale)
- [shadow](DDialogFittedContent.md#shadow)
- [skew](DDialogFittedContent.md#skew)
- [snippet](DDialogFittedContent.md#snippet)
- [state](DDialogFittedContent.md#state)
- [theme](DDialogFittedContent.md#theme)
- [title](DDialogFittedContent.md#title)
- [type](DDialogFittedContent.md#type)
- [unsafe](DDialogFittedContent.md#unsafe)
- [weight](DDialogFittedContent.md#weight)
- [width](DDialogFittedContent.md#width)
- [x](DDialogFittedContent.md#x)
- [y](DDialogFittedContent.md#y)

### Methods

- [\_calculateBounds](DDialogFittedContent.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDialogFittedContent.md#_recursivepostupdatetransform)
- [\_render](DDialogFittedContent.md#_render)
- [addChild](DDialogFittedContent.md#addchild)
- [addChildAt](DDialogFittedContent.md#addchildat)
- [addListener](DDialogFittedContent.md#addlistener)
- [addSpace](DDialogFittedContent.md#addspace)
- [applyTitle](DDialogFittedContent.md#applytitle)
- [blur](DDialogFittedContent.md#blur)
- [calcSpaceLeft](DDialogFittedContent.md#calcspaceleft)
- [calculateBounds](DDialogFittedContent.md#calculatebounds)
- [containsGlobalPoint](DDialogFittedContent.md#containsglobalpoint)
- [containsLocalPoint](DDialogFittedContent.md#containslocalpoint)
- [containsPoint](DDialogFittedContent.md#containspoint)
- [countColumn](DDialogFittedContent.md#countcolumn)
- [countRow](DDialogFittedContent.md#countrow)
- [destroy](DDialogFittedContent.md#destroy)
- [displayObjectUpdateTransform](DDialogFittedContent.md#displayobjectupdatetransform)
- [emit](DDialogFittedContent.md#emit)
- [eventNames](DDialogFittedContent.md#eventnames)
- [findColumnIndexNext](DDialogFittedContent.md#findcolumnindexnext)
- [findColumnIndexPrevious](DDialogFittedContent.md#findcolumnindexprevious)
- [findRowIndexNext](DDialogFittedContent.md#findrowindexnext)
- [findRowIndexPrevious](DDialogFittedContent.md#findrowindexprevious)
- [focus](DDialogFittedContent.md#focus)
- [focusOnClosest](DDialogFittedContent.md#focusonclosest)
- [getBounds](DDialogFittedContent.md#getbounds)
- [getChildAt](DDialogFittedContent.md#getchildat)
- [getChildByName](DDialogFittedContent.md#getchildbyname)
- [getChildIndex](DDialogFittedContent.md#getchildindex)
- [getClearType](DDialogFittedContent.md#getcleartype)
- [getClippingRect](DDialogFittedContent.md#getclippingrect)
- [getGlobalPosition](DDialogFittedContent.md#getglobalposition)
- [getHeight](DDialogFittedContent.md#getheight)
- [getLocalBounds](DDialogFittedContent.md#getlocalbounds)
- [getParentOfSize](DDialogFittedContent.md#getparentofsize)
- [getSpaceLeft](DDialogFittedContent.md#getspaceleft)
- [getThemeDefault](DDialogFittedContent.md#getthemedefault)
- [getType](DDialogFittedContent.md#gettype)
- [getWeightTotal](DDialogFittedContent.md#getweighttotal)
- [getWidth](DDialogFittedContent.md#getwidth)
- [getX](DDialogFittedContent.md#getx)
- [getY](DDialogFittedContent.md#gety)
- [hasClearType](DDialogFittedContent.md#hascleartype)
- [hasClearTypeAfter](DDialogFittedContent.md#hascleartypeafter)
- [hasClearTypeBefore](DDialogFittedContent.md#hascleartypebefore)
- [hasDirty](DDialogFittedContent.md#hasdirty)
- [hasRefitableHeight](DDialogFittedContent.md#hasrefitableheight)
- [hasRefitableWidth](DDialogFittedContent.md#hasrefitablewidth)
- [hide](DDialogFittedContent.md#hide)
- [init](DDialogFittedContent.md#init)
- [initReflowable](DDialogFittedContent.md#initreflowable)
- [isDirty](DDialogFittedContent.md#isdirty)
- [isEventTarget](DDialogFittedContent.md#iseventtarget)
- [isHidden](DDialogFittedContent.md#ishidden)
- [isHierarchyDirty](DDialogFittedContent.md#ishierarchydirty)
- [isRefitable](DDialogFittedContent.md#isrefitable)
- [isShown](DDialogFittedContent.md#isshown)
- [listenerCount](DDialogFittedContent.md#listenercount)
- [listeners](DDialogFittedContent.md#listeners)
- [off](DDialogFittedContent.md#off)
- [on](DDialogFittedContent.md#on)
- [onBlur](DDialogFittedContent.md#onblur)
- [onChildBlur](DDialogFittedContent.md#onchildblur)
- [onChildFocus](DDialogFittedContent.md#onchildfocus)
- [onChildrenChange](DDialogFittedContent.md#onchildrenchange)
- [onDblClick](DDialogFittedContent.md#ondblclick)
- [onDown](DDialogFittedContent.md#ondown)
- [onDownThis](DDialogFittedContent.md#ondownthis)
- [onFocus](DDialogFittedContent.md#onfocus)
- [onHierarchyDirty](DDialogFittedContent.md#onhierarchydirty)
- [onKeyDown](DDialogFittedContent.md#onkeydown)
- [onKeyUp](DDialogFittedContent.md#onkeyup)
- [onMove](DDialogFittedContent.md#onmove)
- [onOut](DDialogFittedContent.md#onout)
- [onOver](DDialogFittedContent.md#onover)
- [onParentMove](DDialogFittedContent.md#onparentmove)
- [onParentResize](DDialogFittedContent.md#onparentresize)
- [onRefit](DDialogFittedContent.md#onrefit)
- [onReflow](DDialogFittedContent.md#onreflow)
- [onResize](DDialogFittedContent.md#onresize)
- [onScale](DDialogFittedContent.md#onscale)
- [onShortcut](DDialogFittedContent.md#onshortcut)
- [onSkew](DDialogFittedContent.md#onskew)
- [onStateChange](DDialogFittedContent.md#onstatechange)
- [onUp](DDialogFittedContent.md#onup)
- [onUpThis](DDialogFittedContent.md#onupthis)
- [onWheel](DDialogFittedContent.md#onwheel)
- [once](DDialogFittedContent.md#once)
- [reflow](DDialogFittedContent.md#reflow)
- [removeAllListeners](DDialogFittedContent.md#removealllisteners)
- [removeChild](DDialogFittedContent.md#removechild)
- [removeChildAt](DDialogFittedContent.md#removechildat)
- [removeChildren](DDialogFittedContent.md#removechildren)
- [removeListener](DDialogFittedContent.md#removelistener)
- [render](DDialogFittedContent.md#render)
- [renderAdvanced](DDialogFittedContent.md#renderadvanced)
- [resize](DDialogFittedContent.md#resize)
- [setChildIndex](DDialogFittedContent.md#setchildindex)
- [setFocused](DDialogFittedContent.md#setfocused)
- [setHeight](DDialogFittedContent.md#setheight)
- [setParent](DDialogFittedContent.md#setparent)
- [setTransform](DDialogFittedContent.md#settransform)
- [setWidth](DDialogFittedContent.md#setwidth)
- [setX](DDialogFittedContent.md#setx)
- [setY](DDialogFittedContent.md#sety)
- [show](DDialogFittedContent.md#show)
- [sortChildren](DDialogFittedContent.md#sortchildren)
- [swapChildren](DDialogFittedContent.md#swapchildren)
- [toCornerMaskColumn](DDialogFittedContent.md#tocornermaskcolumn)
- [toCornerMaskRow](DDialogFittedContent.md#tocornermaskrow)
- [toCursor](DDialogFittedContent.md#tocursor)
- [toDirty](DDialogFittedContent.md#todirty)
- [toGlobal](DDialogFittedContent.md#toglobal)
- [toHasDirty](DDialogFittedContent.md#tohasdirty)
- [toHierarchyDirty](DDialogFittedContent.md#tohierarchydirty)
- [toLocal](DDialogFittedContent.md#tolocal)
- [toParentHasDirty](DDialogFittedContent.md#toparenthasdirty)
- [toParentHierarchyDirty](DDialogFittedContent.md#toparenthierarchydirty)
- [toParentResized](DDialogFittedContent.md#toparentresized)
- [updateTransform](DDialogFittedContent.md#updatetransform)
- [mixin](DDialogFittedContent.md#mixin)

## Constructors

### constructor

• **new DDialogFittedContent**<`THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md) = [`DThemeDialogLayeredContent`](../interfaces/DThemeDialogLayeredContent.md) |
| `OPTIONS` | extends [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<`THEME`, `OPTIONS`\> = [`DDialogLayeredContentOptions`](../interfaces/DDialogLayeredContentOptions.md)<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[constructor](DDialogLayeredContent.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L750)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_accessibleActive](DDialogLayeredContent.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_accessibleDiv](DDialogLayeredContent.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_auto](DDialogLayeredContent.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_background](DDialogLayeredContent.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_border](DDialogLayeredContent.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_bounds](DDialogLayeredContent.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_clearType](DDialogLayeredContent.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_corner](DDialogLayeredContent.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cornerAdjust

• `Protected` **\_cornerAdjust**: `boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_cornerAdjust](DDialogLayeredContent.md#_corneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L126)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_cursor](DDialogLayeredContent.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_destroyed](DDialogLayeredContent.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_direction

• `Protected` **\_direction**: [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_direction](DDialogLayeredContent.md#_direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L128)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_lastDownPoint](DDialogLayeredContent.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_lastSortedIndex](DDialogLayeredContent.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_margin

• `Protected` **\_margin**: [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_margin](DDialogLayeredContent.md#_margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L125)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_mask](DDialogLayeredContent.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_multiplicity

• `Protected` **\_multiplicity**: `number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_multiplicity](DDialogLayeredContent.md#_multiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L127)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_options](DDialogLayeredContent.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_outline](DDialogLayeredContent.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_padding](DDialogLayeredContent.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_reflowable](DDialogLayeredContent.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_reverse

• `Protected` **\_reverse**: `boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_reverse](DDialogLayeredContent.md#_reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L129)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_shortcuts](DDialogLayeredContent.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_snippet](DDialogLayeredContent.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_tempDisplayObjectParent](DDialogLayeredContent.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_title](DDialogLayeredContent.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_zIndex](DDialogLayeredContent.md#_zindex)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[accessible](DDialogLayeredContent.md#accessible)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[accessibleChildren](DDialogLayeredContent.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[accessibleHint](DDialogLayeredContent.md#accessiblehint)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[accessiblePointerEvents](DDialogLayeredContent.md#accessiblepointerevents)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[accessibleTitle](DDialogLayeredContent.md#accessibletitle)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[accessibleType](DDialogLayeredContent.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[alpha](DDialogLayeredContent.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[angle](DDialogLayeredContent.md#angle)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[buttonMode](DDialogLayeredContent.md#buttonmode)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[cacheAsBitmap](DDialogLayeredContent.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[children](DDialogLayeredContent.md#children)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[cursor](DDialogLayeredContent.md#cursor)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[filterArea](DDialogLayeredContent.md#filterarea)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[filters](DDialogLayeredContent.md#filters)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[hitArea](DDialogLayeredContent.md#hitarea)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[interactive](DDialogLayeredContent.md#interactive)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[interactiveChildren](DDialogLayeredContent.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[isMask](DDialogLayeredContent.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[isSprite](DDialogLayeredContent.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[localTransform](DDialogLayeredContent.md#localtransform)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[mask](DDialogLayeredContent.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[name](DDialogLayeredContent.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[parent](DDialogLayeredContent.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[pivot](DDialogLayeredContent.md#pivot)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[renderable](DDialogLayeredContent.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[rotation](DDialogLayeredContent.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[sortDirty](DDialogLayeredContent.md#sortdirty)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[sortableChildren](DDialogLayeredContent.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[transform](DDialogLayeredContent.md#transform)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[visible](DDialogLayeredContent.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[worldAlpha](DDialogLayeredContent.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[worldTransform](DDialogLayeredContent.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[worldVisible](DDialogLayeredContent.md#worldvisible)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[zIndex](DDialogLayeredContent.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### CORNER\_ADJUST\_WORK

▪ `Static` **CORNER\_ADJUST\_WORK**: ``null`` \| `Float32Array` = `null`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[CORNER_ADJUST_WORK](DDialogLayeredContent.md#corner_adjust_work)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L123)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[WORK_CONTAINS_POINT](DDialogLayeredContent.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDialogLayeredContent.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDialogLayeredContent.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDialogLayeredContent.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayeredContent.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDialogLayeredContent.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### margin

• `get` **margin**(): [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Returns

[`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

DDialogLayeredContent.margin

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L142)

___

### multiplicity

• `get` **multiplicity**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayeredContent.multiplicity

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L146)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DDialogLayeredContent.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDialogLayeredContent.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDialogLayeredContent.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayeredContent.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDialogLayeredContent.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayeredContent.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDialogLayeredContent.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DDialogLayeredContent.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDialogLayeredContent.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDialogLayeredContent.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDialogLayeredContent.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDialogLayeredContent.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DDialogLayeredContent.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDialogLayeredContent.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1371)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DDialogLayeredContent.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDialogLayeredContent.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDialogLayeredContent.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayeredContent.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayeredContent.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDialogLayeredContent.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayeredContent.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1135)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDialogLayeredContent.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDialogLayeredContent.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1175)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDialogLayeredContent.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_calculateBounds](DDialogLayeredContent.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1906](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1906)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[_recursivePostUpdateTransform](DDialogLayeredContent.md#_recursivepostupdatetransform)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[_render](DDialogLayeredContent.md#_render)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[addChild](DDialogLayeredContent.md#addchild)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[addChildAt](DDialogLayeredContent.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[addListener](DDialogLayeredContent.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[addListener](DDialogLayeredContent.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### addSpace

▸ **addSpace**(`options?`): [`DLayoutSpace`](DLayoutSpace.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\> |

#### Returns

[`DLayoutSpace`](DLayoutSpace.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[addSpace](DDialogLayeredContent.md#addspace)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L804)

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[applyTitle](DDialogLayeredContent.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1384)

___

### blur

▸ **blur**(`recursively?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[blur](DDialogLayeredContent.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

___

### calcSpaceLeft

▸ `Protected` **calcSpaceLeft**(`isOn`, `size`, `padding`, `margin`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isOn` | `boolean` |
| `size` | `number` |
| `padding` | `number` |
| `margin` | `number` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[calcSpaceLeft](DDialogLayeredContent.md#calcspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L261)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[calculateBounds](DDialogLayeredContent.md#calculatebounds)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[containsGlobalPoint](DDialogLayeredContent.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1931](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1931)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[containsLocalPoint](DDialogLayeredContent.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1935](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1935)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[containsPoint](DDialogLayeredContent.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1922](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1922)

___

### countColumn

▸ `Protected` **countColumn**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[countColumn](DDialogLayeredContent.md#countcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L760)

___

### countRow

▸ `Protected` **countRow**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[countRow](DDialogLayeredContent.md#countrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:718](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L718)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[destroy](DDialogLayeredContent.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1955](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1955)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[displayObjectUpdateTransform](DDialogLayeredContent.md#displayobjectupdatetransform)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[emit](DDialogLayeredContent.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[eventNames](DDialogLayeredContent.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### findColumnIndexNext

▸ `Protected` **findColumnIndexNext**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[findColumnIndexNext](DDialogLayeredContent.md#findcolumnindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:699](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L699)

___

### findColumnIndexPrevious

▸ `Protected` **findColumnIndexPrevious**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[findColumnIndexPrevious](DDialogLayeredContent.md#findcolumnindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L686)

___

### findRowIndexNext

▸ `Protected` **findRowIndexNext**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[findRowIndexNext](DDialogLayeredContent.md#findrowindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L741)

___

### findRowIndexPrevious

▸ `Protected` **findRowIndexPrevious**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[findRowIndexPrevious](DDialogLayeredContent.md#findrowindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L728)

___

### focus

▸ **focus**(): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[focus](DDialogLayeredContent.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[focusOnClosest](DDialogLayeredContent.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[getBounds](DDialogLayeredContent.md#getbounds)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[getChildAt](DDialogLayeredContent.md#getchildat)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[getChildByName](DDialogLayeredContent.md#getchildbyname)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[getChildIndex](DDialogLayeredContent.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[getClearType](DDialogLayeredContent.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[getClippingRect](DDialogLayeredContent.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[getGlobalPosition](DDialogLayeredContent.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[getHeight](DDialogLayeredContent.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1282)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[getLocalBounds](DDialogLayeredContent.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[getParentOfSize](DDialogLayeredContent.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1716](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1716)

___

### getSpaceLeft

▸ `Protected` **getSpaceLeft**(`baseSize`, `margin`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseSize` | `number` |
| `margin` | `number` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[getSpaceLeft](DDialogLayeredContent.md#getspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L184)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[getThemeDefault](DDialogLayeredContent.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1897](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1897)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDialogLayeredContent](DDialogLayeredContent.md).[getType](DDialogLayeredContent.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-fitted-content.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-dialog-fitted-content.ts#L22)

___

### getWeightTotal

▸ `Protected` **getWeightTotal**(): `number`

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[getWeightTotal](DDialogLayeredContent.md#getweighttotal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L150)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[getWidth](DDialogLayeredContent.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[getX](DDialogLayeredContent.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[getY](DDialogLayeredContent.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

___

### hasClearType

▸ `Protected` **hasClearType**(`children`, `index`, `clearType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |
| `clearType` | `number` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[hasClearType](DDialogLayeredContent.md#hascleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:669](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L669)

___

### hasClearTypeAfter

▸ `Protected` **hasClearTypeAfter**(`children`, `index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[hasClearTypeAfter](DDialogLayeredContent.md#hascleartypeafter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L665)

___

### hasClearTypeBefore

▸ `Protected` **hasClearTypeBefore**(`children`, `index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[hasClearTypeBefore](DDialogLayeredContent.md#hascleartypebefore)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L661)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[hasDirty](DDialogLayeredContent.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1472)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[hasRefitableHeight](DDialogLayeredContent.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1666)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[hasRefitableWidth](DDialogLayeredContent.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### hide

▸ **hide**(): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[hide](DDialogLayeredContent.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[init](DDialogLayeredContent.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L131)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[initReflowable](DDialogLayeredContent.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[isDirty](DDialogLayeredContent.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1468)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[isEventTarget](DDialogLayeredContent.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1794)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[isHidden](DDialogLayeredContent.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[isHierarchyDirty](DDialogLayeredContent.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[isRefitable](DDialogLayeredContent.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1662](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1662)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[isShown](DDialogLayeredContent.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1400)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[listenerCount](DDialogLayeredContent.md#listenercount)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[listeners](DDialogLayeredContent.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[off](DDialogLayeredContent.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[on](DDialogLayeredContent.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[on](DDialogLayeredContent.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[onBlur](DDialogLayeredContent.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1558)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onChildBlur](DDialogLayeredContent.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1551)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onChildFocus](DDialogLayeredContent.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[onChildrenChange](DDialogLayeredContent.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onDblClick](DDialogLayeredContent.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1881](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1881)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onDown](DDialogLayeredContent.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1808](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1808)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onDownThis](DDialogLayeredContent.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1815](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1815)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[onFocus](DDialogLayeredContent.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[onHierarchyDirty](DDialogLayeredContent.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1464)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onKeyDown](DDialogLayeredContent.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1783](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1783)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onKeyUp](DDialogLayeredContent.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1788)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onMove](DDialogLayeredContent.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onOut](DDialogLayeredContent.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1872)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onOver](DDialogLayeredContent.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1858](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1858)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onParentMove](DDialogLayeredContent.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1772)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onParentResize](DDialogLayeredContent.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1731](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1731)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[onRefit](DDialogLayeredContent.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:265](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L265)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[onReflow](DDialogLayeredContent.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onResize](DDialogLayeredContent.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1103)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onScale](DDialogLayeredContent.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onShortcut](DDialogLayeredContent.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onSkew](DDialogLayeredContent.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1125)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onStateChange](DDialogLayeredContent.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1513)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onUp](DDialogLayeredContent.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1826)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onUpThis](DDialogLayeredContent.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1833](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1833)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[onWheel](DDialogLayeredContent.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1777)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[once](DDialogLayeredContent.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[once](DDialogLayeredContent.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[reflow](DDialogLayeredContent.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1591](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1591)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[removeAllListeners](DDialogLayeredContent.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[removeAllListeners](DDialogLayeredContent.md#removealllisteners)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[removeChild](DDialogLayeredContent.md#removechild)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[removeChildAt](DDialogLayeredContent.md#removechildat)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[removeChildren](DDialogLayeredContent.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[removeListener](DDialogLayeredContent.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[removeListener](DDialogLayeredContent.md#removelistener)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[render](DDialogLayeredContent.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[renderAdvanced](DDialogLayeredContent.md#renderadvanced)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[resize](DDialogLayeredContent.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[setChildIndex](DDialogLayeredContent.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[setFocused](DDialogLayeredContent.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1476)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[setHeight](DDialogLayeredContent.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1286)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[setParent](DDialogLayeredContent.md#setparent)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[setTransform](DDialogLayeredContent.md#settransform)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[setWidth](DDialogLayeredContent.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1227)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[setX](DDialogLayeredContent.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1152)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[setY](DDialogLayeredContent.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDialogFittedContent`](DDialogFittedContent.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[show](DDialogLayeredContent.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[sortChildren](DDialogLayeredContent.md#sortchildren)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[swapChildren](DDialogLayeredContent.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toCornerMaskColumn

▸ `Protected` **toCornerMaskColumn**(`i0`, `i1`, `i2`, `n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i0` | `number` |
| `i1` | `number` |
| `i2` | `number` |
| `n` | `number` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[toCornerMaskColumn](DDialogLayeredContent.md#tocornermaskcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:770](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L770)

___

### toCornerMaskRow

▸ `Protected` **toCornerMaskRow**(`i0`, `i1`, `i2`, `n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i0` | `number` |
| `i1` | `number` |
| `i2` | `number` |
| `n` | `number` |

#### Returns

`number`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[toCornerMaskRow](DDialogLayeredContent.md#tocornermaskrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L787)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[toCursor](DDialogLayeredContent.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[toDirty](DDialogLayeredContent.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[toGlobal](DDialogLayeredContent.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[toHasDirty](DDialogLayeredContent.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[toHierarchyDirty](DDialogLayeredContent.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1443)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[toLocal](DDialogLayeredContent.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[toParentHasDirty](DDialogLayeredContent.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[toParentHierarchyDirty](DDialogLayeredContent.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[toParentResized](DDialogLayeredContent.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1709)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DDialogLayeredContent](DDialogLayeredContent.md).[updateTransform](DDialogLayeredContent.md#updatetransform)

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

[DDialogLayeredContent](DDialogLayeredContent.md).[mixin](DDialogLayeredContent.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
