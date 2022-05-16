[Winter Cardinal UI - v0.167.0](../index.md) / DInputAndLabel

# Class: DInputAndLabel<INPUT, INPUT_OPTIONS, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `INPUT` | extends [`DInputAndLabelInput`](../interfaces/DInputAndLabelInput.md) |
| `INPUT_OPTIONS` | extends [`DInputAndLabelInputOptions`](../interfaces/DInputAndLabelInputOptions.md) |
| `THEME` | extends [`DThemeInputAndLabel`](../interfaces/DThemeInputAndLabel.md) = [`DThemeInputAndLabel`](../interfaces/DThemeInputAndLabel.md) |
| `OPTIONS` | extends [`DInputAndLabelOptions`](../interfaces/DInputAndLabelOptions.md)<`INPUT_OPTIONS`, `THEME`\> = [`DInputAndLabelOptions`](../interfaces/DInputAndLabelOptions.md)<`INPUT_OPTIONS`, `THEME`\> |

## Hierarchy

- [`DLayoutHorizontal`](DLayoutHorizontal.md)<`THEME`, `OPTIONS`\>

  ↳ **`DInputAndLabel`**

  ↳↳ [`DInputIntegerAndLabel`](DInputIntegerAndLabel.md)

  ↳↳ [`DInputRealAndLabel`](DInputRealAndLabel.md)

  ↳↳ [`DInputTextAndLabel`](DInputTextAndLabel.md)

## Table of contents

### Constructors

- [constructor](DInputAndLabel.md#constructor)

### Properties

- [\_accessibleActive](DInputAndLabel.md#_accessibleactive)
- [\_accessibleDiv](DInputAndLabel.md#_accessiblediv)
- [\_auto](DInputAndLabel.md#_auto)
- [\_background](DInputAndLabel.md#_background)
- [\_border](DInputAndLabel.md#_border)
- [\_bounds](DInputAndLabel.md#_bounds)
- [\_clearType](DInputAndLabel.md#_cleartype)
- [\_corner](DInputAndLabel.md#_corner)
- [\_cornerAdjust](DInputAndLabel.md#_corneradjust)
- [\_cursor](DInputAndLabel.md#_cursor)
- [\_destroyed](DInputAndLabel.md#_destroyed)
- [\_direction](DInputAndLabel.md#_direction)
- [\_input](DInputAndLabel.md#_input)
- [\_label](DInputAndLabel.md#_label)
- [\_lastDownPoint](DInputAndLabel.md#_lastdownpoint)
- [\_lastSortedIndex](DInputAndLabel.md#_lastsortedindex)
- [\_margin](DInputAndLabel.md#_margin)
- [\_mask](DInputAndLabel.md#_mask)
- [\_multiplicity](DInputAndLabel.md#_multiplicity)
- [\_options](DInputAndLabel.md#_options)
- [\_outline](DInputAndLabel.md#_outline)
- [\_padding](DInputAndLabel.md#_padding)
- [\_reflowable](DInputAndLabel.md#_reflowable)
- [\_reverse](DInputAndLabel.md#_reverse)
- [\_shortcuts](DInputAndLabel.md#_shortcuts)
- [\_snippet](DInputAndLabel.md#_snippet)
- [\_tempDisplayObjectParent](DInputAndLabel.md#_tempdisplayobjectparent)
- [\_title](DInputAndLabel.md#_title)
- [\_zIndex](DInputAndLabel.md#_zindex)
- [accessible](DInputAndLabel.md#accessible)
- [accessibleChildren](DInputAndLabel.md#accessiblechildren)
- [accessibleHint](DInputAndLabel.md#accessiblehint)
- [accessiblePointerEvents](DInputAndLabel.md#accessiblepointerevents)
- [accessibleTitle](DInputAndLabel.md#accessibletitle)
- [accessibleType](DInputAndLabel.md#accessibletype)
- [alpha](DInputAndLabel.md#alpha)
- [angle](DInputAndLabel.md#angle)
- [buttonMode](DInputAndLabel.md#buttonmode)
- [cacheAsBitmap](DInputAndLabel.md#cacheasbitmap)
- [children](DInputAndLabel.md#children)
- [cursor](DInputAndLabel.md#cursor)
- [filterArea](DInputAndLabel.md#filterarea)
- [filters](DInputAndLabel.md#filters)
- [hitArea](DInputAndLabel.md#hitarea)
- [interactive](DInputAndLabel.md#interactive)
- [interactiveChildren](DInputAndLabel.md#interactivechildren)
- [isMask](DInputAndLabel.md#ismask)
- [isSprite](DInputAndLabel.md#issprite)
- [localTransform](DInputAndLabel.md#localtransform)
- [mask](DInputAndLabel.md#mask)
- [name](DInputAndLabel.md#name)
- [parent](DInputAndLabel.md#parent)
- [pivot](DInputAndLabel.md#pivot)
- [renderable](DInputAndLabel.md#renderable)
- [rotation](DInputAndLabel.md#rotation)
- [sortDirty](DInputAndLabel.md#sortdirty)
- [sortableChildren](DInputAndLabel.md#sortablechildren)
- [transform](DInputAndLabel.md#transform)
- [visible](DInputAndLabel.md#visible)
- [worldAlpha](DInputAndLabel.md#worldalpha)
- [worldTransform](DInputAndLabel.md#worldtransform)
- [worldVisible](DInputAndLabel.md#worldvisible)
- [zIndex](DInputAndLabel.md#zindex)
- [CORNER\_ADJUST\_WORK](DInputAndLabel.md#corner_adjust_work)
- [WORK\_CONTAINS\_POINT](DInputAndLabel.md#work_contains_point)

### Accessors

- [background](DInputAndLabel.md#background)
- [border](DInputAndLabel.md#border)
- [corner](DInputAndLabel.md#corner)
- [height](DInputAndLabel.md#height)
- [input](DInputAndLabel.md#input)
- [label](DInputAndLabel.md#label)
- [margin](DInputAndLabel.md#margin)
- [multiplicity](DInputAndLabel.md#multiplicity)
- [outline](DInputAndLabel.md#outline)
- [padding](DInputAndLabel.md#padding)
- [position](DInputAndLabel.md#position)
- [reflowable](DInputAndLabel.md#reflowable)
- [scale](DInputAndLabel.md#scale)
- [shadow](DInputAndLabel.md#shadow)
- [skew](DInputAndLabel.md#skew)
- [snippet](DInputAndLabel.md#snippet)
- [state](DInputAndLabel.md#state)
- [theme](DInputAndLabel.md#theme)
- [title](DInputAndLabel.md#title)
- [type](DInputAndLabel.md#type)
- [unsafe](DInputAndLabel.md#unsafe)
- [weight](DInputAndLabel.md#weight)
- [width](DInputAndLabel.md#width)
- [x](DInputAndLabel.md#x)
- [y](DInputAndLabel.md#y)

### Methods

- [\_calculateBounds](DInputAndLabel.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DInputAndLabel.md#_recursivepostupdatetransform)
- [\_render](DInputAndLabel.md#_render)
- [addChild](DInputAndLabel.md#addchild)
- [addChildAt](DInputAndLabel.md#addchildat)
- [addListener](DInputAndLabel.md#addlistener)
- [addSpace](DInputAndLabel.md#addspace)
- [applyTitle](DInputAndLabel.md#applytitle)
- [blur](DInputAndLabel.md#blur)
- [calcSpaceLeft](DInputAndLabel.md#calcspaceleft)
- [calculateBounds](DInputAndLabel.md#calculatebounds)
- [containsGlobalPoint](DInputAndLabel.md#containsglobalpoint)
- [containsLocalPoint](DInputAndLabel.md#containslocalpoint)
- [containsPoint](DInputAndLabel.md#containspoint)
- [countColumn](DInputAndLabel.md#countcolumn)
- [countRow](DInputAndLabel.md#countrow)
- [createInput](DInputAndLabel.md#createinput)
- [destroy](DInputAndLabel.md#destroy)
- [displayObjectUpdateTransform](DInputAndLabel.md#displayobjectupdatetransform)
- [emit](DInputAndLabel.md#emit)
- [eventNames](DInputAndLabel.md#eventnames)
- [findColumnIndexNext](DInputAndLabel.md#findcolumnindexnext)
- [findColumnIndexPrevious](DInputAndLabel.md#findcolumnindexprevious)
- [findRowIndexNext](DInputAndLabel.md#findrowindexnext)
- [findRowIndexPrevious](DInputAndLabel.md#findrowindexprevious)
- [focus](DInputAndLabel.md#focus)
- [focusOnClosest](DInputAndLabel.md#focusonclosest)
- [getBounds](DInputAndLabel.md#getbounds)
- [getChildAt](DInputAndLabel.md#getchildat)
- [getChildByName](DInputAndLabel.md#getchildbyname)
- [getChildIndex](DInputAndLabel.md#getchildindex)
- [getClearType](DInputAndLabel.md#getcleartype)
- [getClippingRect](DInputAndLabel.md#getclippingrect)
- [getGlobalPosition](DInputAndLabel.md#getglobalposition)
- [getHeight](DInputAndLabel.md#getheight)
- [getLocalBounds](DInputAndLabel.md#getlocalbounds)
- [getParentOfSize](DInputAndLabel.md#getparentofsize)
- [getSpaceLeft](DInputAndLabel.md#getspaceleft)
- [getThemeDefault](DInputAndLabel.md#getthemedefault)
- [getType](DInputAndLabel.md#gettype)
- [getWeightTotal](DInputAndLabel.md#getweighttotal)
- [getWidth](DInputAndLabel.md#getwidth)
- [getX](DInputAndLabel.md#getx)
- [getY](DInputAndLabel.md#gety)
- [hasClearType](DInputAndLabel.md#hascleartype)
- [hasClearTypeAfter](DInputAndLabel.md#hascleartypeafter)
- [hasClearTypeBefore](DInputAndLabel.md#hascleartypebefore)
- [hasDirty](DInputAndLabel.md#hasdirty)
- [hasRefitableHeight](DInputAndLabel.md#hasrefitableheight)
- [hasRefitableWidth](DInputAndLabel.md#hasrefitablewidth)
- [hide](DInputAndLabel.md#hide)
- [init](DInputAndLabel.md#init)
- [initReflowable](DInputAndLabel.md#initreflowable)
- [isDirty](DInputAndLabel.md#isdirty)
- [isEventTarget](DInputAndLabel.md#iseventtarget)
- [isHidden](DInputAndLabel.md#ishidden)
- [isHierarchyDirty](DInputAndLabel.md#ishierarchydirty)
- [isRefitable](DInputAndLabel.md#isrefitable)
- [isShown](DInputAndLabel.md#isshown)
- [listenerCount](DInputAndLabel.md#listenercount)
- [listeners](DInputAndLabel.md#listeners)
- [off](DInputAndLabel.md#off)
- [on](DInputAndLabel.md#on)
- [onBlur](DInputAndLabel.md#onblur)
- [onChildBlur](DInputAndLabel.md#onchildblur)
- [onChildFocus](DInputAndLabel.md#onchildfocus)
- [onChildrenChange](DInputAndLabel.md#onchildrenchange)
- [onDblClick](DInputAndLabel.md#ondblclick)
- [onDown](DInputAndLabel.md#ondown)
- [onDownThis](DInputAndLabel.md#ondownthis)
- [onFocus](DInputAndLabel.md#onfocus)
- [onHierarchyDirty](DInputAndLabel.md#onhierarchydirty)
- [onKeyDown](DInputAndLabel.md#onkeydown)
- [onKeyUp](DInputAndLabel.md#onkeyup)
- [onMove](DInputAndLabel.md#onmove)
- [onOut](DInputAndLabel.md#onout)
- [onOver](DInputAndLabel.md#onover)
- [onParentMove](DInputAndLabel.md#onparentmove)
- [onParentResize](DInputAndLabel.md#onparentresize)
- [onRefit](DInputAndLabel.md#onrefit)
- [onReflow](DInputAndLabel.md#onreflow)
- [onResize](DInputAndLabel.md#onresize)
- [onScale](DInputAndLabel.md#onscale)
- [onShortcut](DInputAndLabel.md#onshortcut)
- [onSkew](DInputAndLabel.md#onskew)
- [onStateChange](DInputAndLabel.md#onstatechange)
- [onUp](DInputAndLabel.md#onup)
- [onUpThis](DInputAndLabel.md#onupthis)
- [onWheel](DInputAndLabel.md#onwheel)
- [once](DInputAndLabel.md#once)
- [reflow](DInputAndLabel.md#reflow)
- [removeAllListeners](DInputAndLabel.md#removealllisteners)
- [removeChild](DInputAndLabel.md#removechild)
- [removeChildAt](DInputAndLabel.md#removechildat)
- [removeChildren](DInputAndLabel.md#removechildren)
- [removeListener](DInputAndLabel.md#removelistener)
- [render](DInputAndLabel.md#render)
- [renderAdvanced](DInputAndLabel.md#renderadvanced)
- [resize](DInputAndLabel.md#resize)
- [setChildIndex](DInputAndLabel.md#setchildindex)
- [setFocused](DInputAndLabel.md#setfocused)
- [setHeight](DInputAndLabel.md#setheight)
- [setParent](DInputAndLabel.md#setparent)
- [setTransform](DInputAndLabel.md#settransform)
- [setWidth](DInputAndLabel.md#setwidth)
- [setX](DInputAndLabel.md#setx)
- [setY](DInputAndLabel.md#sety)
- [show](DInputAndLabel.md#show)
- [sortChildren](DInputAndLabel.md#sortchildren)
- [swapChildren](DInputAndLabel.md#swapchildren)
- [toCornerMaskColumn](DInputAndLabel.md#tocornermaskcolumn)
- [toCornerMaskRow](DInputAndLabel.md#tocornermaskrow)
- [toCursor](DInputAndLabel.md#tocursor)
- [toDirty](DInputAndLabel.md#todirty)
- [toGlobal](DInputAndLabel.md#toglobal)
- [toHasDirty](DInputAndLabel.md#tohasdirty)
- [toHierarchyDirty](DInputAndLabel.md#tohierarchydirty)
- [toLocal](DInputAndLabel.md#tolocal)
- [toParentHasDirty](DInputAndLabel.md#toparenthasdirty)
- [toParentHierarchyDirty](DInputAndLabel.md#toparenthierarchydirty)
- [toParentResized](DInputAndLabel.md#toparentresized)
- [updateTransform](DInputAndLabel.md#updatetransform)
- [mixin](DInputAndLabel.md#mixin)

## Constructors

### constructor

• **new DInputAndLabel**<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `INPUT` | extends [`DInputAndLabelInput`](../interfaces/DInputAndLabelInput.md)<`INPUT`\> |
| `INPUT_OPTIONS` | extends [`DInputAndLabelInputOptions`](../interfaces/DInputAndLabelInputOptions.md) |
| `THEME` | extends [`DThemeInputAndLabel`](../interfaces/DThemeInputAndLabel.md) = [`DThemeInputAndLabel`](../interfaces/DThemeInputAndLabel.md) |
| `OPTIONS` | extends [`DInputAndLabelOptions`](../interfaces/DInputAndLabelOptions.md)<`INPUT_OPTIONS`, `THEME`, `OPTIONS`\> = [`DInputAndLabelOptions`](../interfaces/DInputAndLabelOptions.md)<`INPUT_OPTIONS`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Overrides

[DLayoutHorizontal](DLayoutHorizontal.md).[constructor](DLayoutHorizontal.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L43)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_accessibleActive](DLayoutHorizontal.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_accessibleDiv](DLayoutHorizontal.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_auto](DLayoutHorizontal.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_background](DLayoutHorizontal.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_border](DLayoutHorizontal.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_bounds](DLayoutHorizontal.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_clearType](DLayoutHorizontal.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_corner](DLayoutHorizontal.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cornerAdjust

• `Protected` **\_cornerAdjust**: `boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_cornerAdjust](DLayoutHorizontal.md#_corneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L126)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_cursor](DLayoutHorizontal.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_destroyed](DLayoutHorizontal.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_direction

• `Protected` **\_direction**: [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_direction](DLayoutHorizontal.md#_direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L128)

___

### \_input

• `Protected` **\_input**: `INPUT`

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L40)

___

### \_label

• `Protected` **\_label**: [`DInputLabel`](DInputLabel.md)<`unknown`, [`DThemeInputLabel`](../interfaces/DThemeInputLabel.md)<`unknown`\>, [`DInputLabelOptions`](../interfaces/DInputLabelOptions.md)<`unknown`, [`DThemeInputLabel`](../interfaces/DThemeInputLabel.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L41)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_lastDownPoint](DLayoutHorizontal.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_lastSortedIndex](DLayoutHorizontal.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_margin

• `Protected` **\_margin**: [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_margin](DLayoutHorizontal.md#_margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L125)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_mask](DLayoutHorizontal.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_multiplicity

• `Protected` **\_multiplicity**: `number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_multiplicity](DLayoutHorizontal.md#_multiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L127)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_options](DLayoutHorizontal.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_outline](DLayoutHorizontal.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_padding](DLayoutHorizontal.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_reflowable](DLayoutHorizontal.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_reverse

• `Protected` **\_reverse**: `boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_reverse](DLayoutHorizontal.md#_reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L129)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_shortcuts](DLayoutHorizontal.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_snippet](DLayoutHorizontal.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_tempDisplayObjectParent](DLayoutHorizontal.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_title](DLayoutHorizontal.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_zIndex](DLayoutHorizontal.md#_zindex)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessible](DLayoutHorizontal.md#accessible)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleChildren](DLayoutHorizontal.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleHint](DLayoutHorizontal.md#accessiblehint)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessiblePointerEvents](DLayoutHorizontal.md#accessiblepointerevents)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleTitle](DLayoutHorizontal.md#accessibletitle)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleType](DLayoutHorizontal.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[alpha](DLayoutHorizontal.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[angle](DLayoutHorizontal.md#angle)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[buttonMode](DLayoutHorizontal.md#buttonmode)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[cacheAsBitmap](DLayoutHorizontal.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[children](DLayoutHorizontal.md#children)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[cursor](DLayoutHorizontal.md#cursor)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[filterArea](DLayoutHorizontal.md#filterarea)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[filters](DLayoutHorizontal.md#filters)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hitArea](DLayoutHorizontal.md#hitarea)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[interactive](DLayoutHorizontal.md#interactive)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[interactiveChildren](DLayoutHorizontal.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isMask](DLayoutHorizontal.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isSprite](DLayoutHorizontal.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[localTransform](DLayoutHorizontal.md#localtransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[mask](DLayoutHorizontal.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[name](DLayoutHorizontal.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[parent](DLayoutHorizontal.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[pivot](DLayoutHorizontal.md#pivot)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[renderable](DLayoutHorizontal.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[rotation](DLayoutHorizontal.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[sortDirty](DLayoutHorizontal.md#sortdirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[sortableChildren](DLayoutHorizontal.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[transform](DLayoutHorizontal.md#transform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[visible](DLayoutHorizontal.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[worldAlpha](DLayoutHorizontal.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[worldTransform](DLayoutHorizontal.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[worldVisible](DLayoutHorizontal.md#worldvisible)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[zIndex](DLayoutHorizontal.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### CORNER\_ADJUST\_WORK

▪ `Static` **CORNER\_ADJUST\_WORK**: ``null`` \| `Float32Array` = `null`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[CORNER_ADJUST_WORK](DLayoutHorizontal.md#corner_adjust_work)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L123)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[WORK_CONTAINS_POINT](DLayoutHorizontal.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DLayoutHorizontal.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DLayoutHorizontal.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DLayoutHorizontal.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DLayoutHorizontal.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### input

• `get` **input**(): `INPUT`

#### Returns

`INPUT`

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L53)

___

### label

• `get` **label**(): [`DInputLabel`](DInputLabel.md)<`unknown`, [`DThemeInputLabel`](../interfaces/DThemeInputLabel.md)<`unknown`\>, [`DInputLabelOptions`](../interfaces/DInputLabelOptions.md)<`unknown`, [`DThemeInputLabel`](../interfaces/DThemeInputLabel.md)<`unknown`\>\>\>

#### Returns

[`DInputLabel`](DInputLabel.md)<`unknown`, [`DThemeInputLabel`](../interfaces/DThemeInputLabel.md)<`unknown`\>, [`DInputLabelOptions`](../interfaces/DInputLabelOptions.md)<`unknown`, [`DThemeInputLabel`](../interfaces/DThemeInputLabel.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L57)

___

### margin

• `get` **margin**(): [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Returns

[`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

DLayoutHorizontal.margin

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L142)

___

### multiplicity

• `get` **multiplicity**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.multiplicity

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L146)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DLayoutHorizontal.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DLayoutHorizontal.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DLayoutHorizontal.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DLayoutHorizontal.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DLayoutHorizontal.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DLayoutHorizontal.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DLayoutHorizontal.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DLayoutHorizontal.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DLayoutHorizontal.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DLayoutHorizontal.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DLayoutHorizontal.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DLayoutHorizontal.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DLayoutHorizontal.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1371)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DLayoutHorizontal.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DLayoutHorizontal.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DLayoutHorizontal.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DLayoutHorizontal.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1135)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DLayoutHorizontal.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1175)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DLayoutHorizontal.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_calculateBounds](DLayoutHorizontal.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_recursivePostUpdateTransform](DLayoutHorizontal.md#_recursivepostupdatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_render](DLayoutHorizontal.md#_render)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[addChild](DLayoutHorizontal.md#addchild)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[addChildAt](DLayoutHorizontal.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[addListener](DLayoutHorizontal.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[addListener](DLayoutHorizontal.md#addlistener)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[addSpace](DLayoutHorizontal.md#addspace)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L804)

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[applyTitle](DLayoutHorizontal.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1384)

___

### blur

▸ **blur**(`recursively?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[blur](DLayoutHorizontal.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[calcSpaceLeft](DLayoutHorizontal.md#calcspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L261)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[calculateBounds](DLayoutHorizontal.md#calculatebounds)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containsGlobalPoint](DLayoutHorizontal.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1927](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1927)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containsLocalPoint](DLayoutHorizontal.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1931](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1931)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containsPoint](DLayoutHorizontal.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1918](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1918)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[countColumn](DLayoutHorizontal.md#countcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L760)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[countRow](DLayoutHorizontal.md#countrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:718](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L718)

___

### createInput

▸ `Protected` `Abstract` **createInput**(`options?`): `INPUT`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `INPUT_OPTIONS` \| { `weight`: `number`  } |

#### Returns

`INPUT`

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L61)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[destroy](DLayoutHorizontal.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1951](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1951)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[displayObjectUpdateTransform](DLayoutHorizontal.md#displayobjectupdatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[emit](DLayoutHorizontal.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[eventNames](DLayoutHorizontal.md#eventnames)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[findColumnIndexNext](DLayoutHorizontal.md#findcolumnindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:699](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L699)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[findColumnIndexPrevious](DLayoutHorizontal.md#findcolumnindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L686)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[findRowIndexNext](DLayoutHorizontal.md#findrowindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L741)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[findRowIndexPrevious](DLayoutHorizontal.md#findrowindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L728)

___

### focus

▸ **focus**(): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[focus](DLayoutHorizontal.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[focusOnClosest](DLayoutHorizontal.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1845](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1845)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getBounds](DLayoutHorizontal.md#getbounds)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getChildAt](DLayoutHorizontal.md#getchildat)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getChildByName](DLayoutHorizontal.md#getchildbyname)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getChildIndex](DLayoutHorizontal.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getClearType](DLayoutHorizontal.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getClippingRect](DLayoutHorizontal.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getGlobalPosition](DLayoutHorizontal.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getHeight](DLayoutHorizontal.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1282)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getLocalBounds](DLayoutHorizontal.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getParentOfSize](DLayoutHorizontal.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getSpaceLeft](DLayoutHorizontal.md#getspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L184)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getThemeDefault](DLayoutHorizontal.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1893](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1893)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DLayoutHorizontal](DLayoutHorizontal.md).[getType](DLayoutHorizontal.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L63)

___

### getWeightTotal

▸ `Protected` **getWeightTotal**(): `number`

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getWeightTotal](DLayoutHorizontal.md#getweighttotal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L150)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getWidth](DLayoutHorizontal.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getX](DLayoutHorizontal.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getY](DLayoutHorizontal.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hasClearType](DLayoutHorizontal.md#hascleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:669](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L669)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hasClearTypeAfter](DLayoutHorizontal.md#hascleartypeafter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L665)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hasClearTypeBefore](DLayoutHorizontal.md#hascleartypebefore)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L661)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hasDirty](DLayoutHorizontal.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1472)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hasRefitableHeight](DLayoutHorizontal.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1662](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1662)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hasRefitableWidth](DLayoutHorizontal.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1668](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1668)

___

### hide

▸ **hide**(): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hide](DLayoutHorizontal.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[init](DLayoutHorizontal.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L131)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[initReflowable](DLayoutHorizontal.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isDirty](DLayoutHorizontal.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1468)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[isEventTarget](DLayoutHorizontal.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1790)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isHidden](DLayoutHorizontal.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isHierarchyDirty](DLayoutHorizontal.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[isRefitable](DLayoutHorizontal.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isShown](DLayoutHorizontal.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1400)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[listenerCount](DLayoutHorizontal.md#listenercount)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[listeners](DLayoutHorizontal.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[off](DLayoutHorizontal.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[on](DLayoutHorizontal.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[on](DLayoutHorizontal.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onBlur](DLayoutHorizontal.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1558)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onChildBlur](DLayoutHorizontal.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1551)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onChildFocus](DLayoutHorizontal.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onChildrenChange](DLayoutHorizontal.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onDblClick](DLayoutHorizontal.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onDown](DLayoutHorizontal.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1804)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onDownThis](DLayoutHorizontal.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1811)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onFocus](DLayoutHorizontal.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onHierarchyDirty](DLayoutHorizontal.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1464)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onKeyDown](DLayoutHorizontal.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1779](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1779)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onKeyUp](DLayoutHorizontal.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1784](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1784)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onMove](DLayoutHorizontal.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onOut](DLayoutHorizontal.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onOver](DLayoutHorizontal.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1854](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1854)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onParentMove](DLayoutHorizontal.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1768)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onParentResize](DLayoutHorizontal.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1727)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onRefit](DLayoutHorizontal.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:265](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L265)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onReflow](DLayoutHorizontal.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1674](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1674)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onResize](DLayoutHorizontal.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1103)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onScale](DLayoutHorizontal.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onShortcut](DLayoutHorizontal.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onSkew](DLayoutHorizontal.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1125)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onStateChange](DLayoutHorizontal.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1513)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onUp](DLayoutHorizontal.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1822](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1822)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onUpThis](DLayoutHorizontal.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1829](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1829)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onWheel](DLayoutHorizontal.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1773](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1773)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[once](DLayoutHorizontal.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[once](DLayoutHorizontal.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[reflow](DLayoutHorizontal.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1587)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[removeAllListeners](DLayoutHorizontal.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[removeAllListeners](DLayoutHorizontal.md#removealllisteners)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeChild](DLayoutHorizontal.md#removechild)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeChildAt](DLayoutHorizontal.md#removechildat)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeChildren](DLayoutHorizontal.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[removeListener](DLayoutHorizontal.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[removeListener](DLayoutHorizontal.md#removelistener)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[render](DLayoutHorizontal.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1883](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1883)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[renderAdvanced](DLayoutHorizontal.md#renderadvanced)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[resize](DLayoutHorizontal.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setChildIndex](DLayoutHorizontal.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[setFocused](DLayoutHorizontal.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1476)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setHeight](DLayoutHorizontal.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1286)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setParent](DLayoutHorizontal.md#setparent)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setTransform](DLayoutHorizontal.md#settransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setWidth](DLayoutHorizontal.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1227)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setX](DLayoutHorizontal.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1152)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setY](DLayoutHorizontal.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Returns

[`DInputAndLabel`](DInputAndLabel.md)<`INPUT`, `INPUT_OPTIONS`, `THEME`, `OPTIONS`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[show](DLayoutHorizontal.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[sortChildren](DLayoutHorizontal.md#sortchildren)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[swapChildren](DLayoutHorizontal.md#swapchildren)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toCornerMaskColumn](DLayoutHorizontal.md#tocornermaskcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:770](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L770)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toCornerMaskRow](DLayoutHorizontal.md#tocornermaskrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-layout.ts#L787)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toCursor](DLayoutHorizontal.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toDirty](DLayoutHorizontal.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toGlobal](DLayoutHorizontal.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toHasDirty](DLayoutHorizontal.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toHierarchyDirty](DLayoutHorizontal.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1443)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toLocal](DLayoutHorizontal.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toParentHasDirty](DLayoutHorizontal.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toParentHierarchyDirty](DLayoutHorizontal.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toParentResized](DLayoutHorizontal.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[updateTransform](DLayoutHorizontal.md#updatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[mixin](DLayoutHorizontal.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
