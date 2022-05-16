[Winter Cardinal UI - v0.167.0](../index.md) / DSlider

# Class: DSlider<THEME, OPTIONS\>

A slider class.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeSlider`](../interfaces/DThemeSlider.md) = [`DThemeSlider`](../interfaces/DThemeSlider.md) |
| `OPTIONS` | extends [`DSliderOptions`](../interfaces/DSliderOptions.md)<`THEME`\> = [`DSliderOptions`](../interfaces/DSliderOptions.md)<`THEME`\> |

## Hierarchy

- [`DBase`](DBase.md)<`THEME`, `OPTIONS`\>

  ↳ **`DSlider`**

  ↳↳ [`DSliderHorizontal`](DSliderHorizontal.md)

  ↳↳ [`DSliderVertical`](DSliderVertical.md)

## Table of contents

### Constructors

- [constructor](DSlider.md#constructor)

### Properties

- [\_accessibleActive](DSlider.md#_accessibleactive)
- [\_accessibleDiv](DSlider.md#_accessiblediv)
- [\_auto](DSlider.md#_auto)
- [\_background](DSlider.md#_background)
- [\_border](DSlider.md#_border)
- [\_bounds](DSlider.md#_bounds)
- [\_clearType](DSlider.md#_cleartype)
- [\_corner](DSlider.md#_corner)
- [\_cursor](DSlider.md#_cursor)
- [\_destroyed](DSlider.md#_destroyed)
- [\_interactionManager](DSlider.md#_interactionmanager)
- [\_lastDownPoint](DSlider.md#_lastdownpoint)
- [\_lastSortedIndex](DSlider.md#_lastsortedindex)
- [\_mask](DSlider.md#_mask)
- [\_max](DSlider.md#_max)
- [\_min](DSlider.md#_min)
- [\_offset](DSlider.md#_offset)
- [\_onThumbMoveBound](DSlider.md#_onthumbmovebound)
- [\_onThumbUpBound](DSlider.md#_onthumbupbound)
- [\_onTrackSelectedUpBound](DSlider.md#_ontrackselectedupbound)
- [\_onTrackUpBound](DSlider.md#_ontrackupbound)
- [\_options](DSlider.md#_options)
- [\_outline](DSlider.md#_outline)
- [\_padding](DSlider.md#_padding)
- [\_ratioValue](DSlider.md#_ratiovalue)
- [\_reflowable](DSlider.md#_reflowable)
- [\_roundNumber](DSlider.md#_roundnumber)
- [\_shortcuts](DSlider.md#_shortcuts)
- [\_snippet](DSlider.md#_snippet)
- [\_tempDisplayObjectParent](DSlider.md#_tempdisplayobjectparent)
- [\_thumb](DSlider.md#_thumb)
- [\_title](DSlider.md#_title)
- [\_track](DSlider.md#_track)
- [\_trackSelected](DSlider.md#_trackselected)
- [\_value](DSlider.md#_value)
- [\_yOffset](DSlider.md#_yoffset)
- [\_zIndex](DSlider.md#_zindex)
- [accessible](DSlider.md#accessible)
- [accessibleChildren](DSlider.md#accessiblechildren)
- [accessibleHint](DSlider.md#accessiblehint)
- [accessiblePointerEvents](DSlider.md#accessiblepointerevents)
- [accessibleTitle](DSlider.md#accessibletitle)
- [accessibleType](DSlider.md#accessibletype)
- [alpha](DSlider.md#alpha)
- [angle](DSlider.md#angle)
- [buttonMode](DSlider.md#buttonmode)
- [cacheAsBitmap](DSlider.md#cacheasbitmap)
- [children](DSlider.md#children)
- [cursor](DSlider.md#cursor)
- [filterArea](DSlider.md#filterarea)
- [filters](DSlider.md#filters)
- [hitArea](DSlider.md#hitarea)
- [interactive](DSlider.md#interactive)
- [interactiveChildren](DSlider.md#interactivechildren)
- [isMask](DSlider.md#ismask)
- [isSprite](DSlider.md#issprite)
- [localTransform](DSlider.md#localtransform)
- [mask](DSlider.md#mask)
- [name](DSlider.md#name)
- [parent](DSlider.md#parent)
- [pivot](DSlider.md#pivot)
- [renderable](DSlider.md#renderable)
- [rotation](DSlider.md#rotation)
- [sortDirty](DSlider.md#sortdirty)
- [sortableChildren](DSlider.md#sortablechildren)
- [transform](DSlider.md#transform)
- [visible](DSlider.md#visible)
- [worldAlpha](DSlider.md#worldalpha)
- [worldTransform](DSlider.md#worldtransform)
- [worldVisible](DSlider.md#worldvisible)
- [zIndex](DSlider.md#zindex)
- [WORK\_CONTAINS\_POINT](DSlider.md#work_contains_point)

### Accessors

- [background](DSlider.md#background)
- [border](DSlider.md#border)
- [corner](DSlider.md#corner)
- [height](DSlider.md#height)
- [max](DSlider.md#max)
- [min](DSlider.md#min)
- [outline](DSlider.md#outline)
- [padding](DSlider.md#padding)
- [position](DSlider.md#position)
- [reflowable](DSlider.md#reflowable)
- [scale](DSlider.md#scale)
- [shadow](DSlider.md#shadow)
- [skew](DSlider.md#skew)
- [snippet](DSlider.md#snippet)
- [state](DSlider.md#state)
- [theme](DSlider.md#theme)
- [title](DSlider.md#title)
- [type](DSlider.md#type)
- [unsafe](DSlider.md#unsafe)
- [value](DSlider.md#value)
- [weight](DSlider.md#weight)
- [width](DSlider.md#width)
- [x](DSlider.md#x)
- [y](DSlider.md#y)

### Methods

- [\_calculateBounds](DSlider.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DSlider.md#_recursivepostupdatetransform)
- [\_render](DSlider.md#_render)
- [addChild](DSlider.md#addchild)
- [addChildAt](DSlider.md#addchildat)
- [addListener](DSlider.md#addlistener)
- [applyTitle](DSlider.md#applytitle)
- [blur](DSlider.md#blur)
- [calculateBounds](DSlider.md#calculatebounds)
- [containsGlobalPoint](DSlider.md#containsglobalpoint)
- [containsLocalPoint](DSlider.md#containslocalpoint)
- [containsPoint](DSlider.md#containspoint)
- [destroy](DSlider.md#destroy)
- [displayObjectUpdateTransform](DSlider.md#displayobjectupdatetransform)
- [emit](DSlider.md#emit)
- [eventNames](DSlider.md#eventnames)
- [focus](DSlider.md#focus)
- [focusOnClosest](DSlider.md#focusonclosest)
- [getBounds](DSlider.md#getbounds)
- [getChildAt](DSlider.md#getchildat)
- [getChildByName](DSlider.md#getchildbyname)
- [getChildIndex](DSlider.md#getchildindex)
- [getClearType](DSlider.md#getcleartype)
- [getClippingRect](DSlider.md#getclippingrect)
- [getGlobalPosition](DSlider.md#getglobalposition)
- [getHeight](DSlider.md#getheight)
- [getLocalBounds](DSlider.md#getlocalbounds)
- [getParentOfSize](DSlider.md#getparentofsize)
- [getThemeDefault](DSlider.md#getthemedefault)
- [getType](DSlider.md#gettype)
- [getValueMargin](DSlider.md#getvaluemargin)
- [getWidth](DSlider.md#getwidth)
- [getX](DSlider.md#getx)
- [getY](DSlider.md#gety)
- [hasDirty](DSlider.md#hasdirty)
- [hasRefitableHeight](DSlider.md#hasrefitableheight)
- [hasRefitableWidth](DSlider.md#hasrefitablewidth)
- [hide](DSlider.md#hide)
- [init](DSlider.md#init)
- [initReflowable](DSlider.md#initreflowable)
- [isDirty](DSlider.md#isdirty)
- [isEventTarget](DSlider.md#iseventtarget)
- [isHidden](DSlider.md#ishidden)
- [isHierarchyDirty](DSlider.md#ishierarchydirty)
- [isRefitable](DSlider.md#isrefitable)
- [isShown](DSlider.md#isshown)
- [listenerCount](DSlider.md#listenercount)
- [listeners](DSlider.md#listeners)
- [moveThumbPosition](DSlider.md#movethumbposition)
- [newLabelMax](DSlider.md#newlabelmax)
- [newLabelMin](DSlider.md#newlabelmin)
- [newThumb](DSlider.md#newthumb)
- [newTrack](DSlider.md#newtrack)
- [newTrackSelected](DSlider.md#newtrackselected)
- [newValue](DSlider.md#newvalue)
- [off](DSlider.md#off)
- [on](DSlider.md#on)
- [onBlur](DSlider.md#onblur)
- [onChildBlur](DSlider.md#onchildblur)
- [onChildFocus](DSlider.md#onchildfocus)
- [onChildrenChange](DSlider.md#onchildrenchange)
- [onDblClick](DSlider.md#ondblclick)
- [onDown](DSlider.md#ondown)
- [onDownThis](DSlider.md#ondownthis)
- [onFocus](DSlider.md#onfocus)
- [onHierarchyDirty](DSlider.md#onhierarchydirty)
- [onKeyDown](DSlider.md#onkeydown)
- [onKeyUp](DSlider.md#onkeyup)
- [onMove](DSlider.md#onmove)
- [onOut](DSlider.md#onout)
- [onOver](DSlider.md#onover)
- [onParentMove](DSlider.md#onparentmove)
- [onParentResize](DSlider.md#onparentresize)
- [onPick](DSlider.md#onpick)
- [onRefit](DSlider.md#onrefit)
- [onReflow](DSlider.md#onreflow)
- [onResize](DSlider.md#onresize)
- [onScale](DSlider.md#onscale)
- [onShortcut](DSlider.md#onshortcut)
- [onSkew](DSlider.md#onskew)
- [onStateChange](DSlider.md#onstatechange)
- [onThumbDown](DSlider.md#onthumbdown)
- [onThumbMove](DSlider.md#onthumbmove)
- [onThumbUp](DSlider.md#onthumbup)
- [onTrackDown](DSlider.md#ontrackdown)
- [onTrackSelectedDown](DSlider.md#ontrackselecteddown)
- [onTrackSelectedUpBound](DSlider.md#ontrackselectedupbound)
- [onTrackUpBound](DSlider.md#ontrackupbound)
- [onUp](DSlider.md#onup)
- [onUpThis](DSlider.md#onupthis)
- [onValuesChange](DSlider.md#onvalueschange)
- [onWheel](DSlider.md#onwheel)
- [once](DSlider.md#once)
- [reflow](DSlider.md#reflow)
- [removeAllListeners](DSlider.md#removealllisteners)
- [removeChild](DSlider.md#removechild)
- [removeChildAt](DSlider.md#removechildat)
- [removeChildren](DSlider.md#removechildren)
- [removeListener](DSlider.md#removelistener)
- [render](DSlider.md#render)
- [renderAdvanced](DSlider.md#renderadvanced)
- [resize](DSlider.md#resize)
- [setChildIndex](DSlider.md#setchildindex)
- [setFocused](DSlider.md#setfocused)
- [setHeight](DSlider.md#setheight)
- [setParent](DSlider.md#setparent)
- [setTransform](DSlider.md#settransform)
- [setWidth](DSlider.md#setwidth)
- [setX](DSlider.md#setx)
- [setY](DSlider.md#sety)
- [show](DSlider.md#show)
- [sortChildren](DSlider.md#sortchildren)
- [swapChildren](DSlider.md#swapchildren)
- [toCursor](DSlider.md#tocursor)
- [toDirty](DSlider.md#todirty)
- [toGlobal](DSlider.md#toglobal)
- [toHasDirty](DSlider.md#tohasdirty)
- [toHierarchyDirty](DSlider.md#tohierarchydirty)
- [toLabelMaxOptions](DSlider.md#tolabelmaxoptions)
- [toLabelMinOptions](DSlider.md#tolabelminoptions)
- [toLocal](DSlider.md#tolocal)
- [toParentHasDirty](DSlider.md#toparenthasdirty)
- [toParentHierarchyDirty](DSlider.md#toparenthierarchydirty)
- [toParentResized](DSlider.md#toparentresized)
- [toValueOptions](DSlider.md#tovalueoptions)
- [updateTransform](DSlider.md#updatetransform)
- [updateValue](DSlider.md#updatevalue)
- [mixin](DSlider.md#mixin)

## Constructors

### constructor

• **new DSlider**<`THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeSlider`](../interfaces/DThemeSlider.md) = [`DThemeSlider`](../interfaces/DThemeSlider.md) |
| `OPTIONS` | extends [`DSliderOptions`](../interfaces/DSliderOptions.md)<`THEME`, `any`, `OPTIONS`\> = [`DSliderOptions`](../interfaces/DSliderOptions.md)<`THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DBase](DBase.md).[constructor](DBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L750)

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

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DBase](DBase.md).[_auto](DBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DBase](DBase.md).[_background](DBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DBase](DBase.md).[_border](DBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

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

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DBase](DBase.md).[_corner](DBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DBase](DBase.md).[_cursor](DBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

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

### \_interactionManager

• `Protected` `Optional` **\_interactionManager**: `InteractionManager`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L76)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DBase](DBase.md).[_lastDownPoint](DBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

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

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DBase](DBase.md).[_mask](DBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_max

• `Protected` **\_max**: [`DSliderLabel`](DSliderLabel.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>, [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L71)

___

### \_min

• `Protected` **\_min**: [`DSliderLabel`](DSliderLabel.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>, [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L70)

___

### \_offset

• `Protected` **\_offset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L67)

___

### \_onThumbMoveBound

• `Protected` **\_onThumbMoveBound**: (`e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L72)

___

### \_onThumbUpBound

• `Protected` **\_onThumbUpBound**: (`e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L73)

___

### \_onTrackSelectedUpBound

• `Protected` **\_onTrackSelectedUpBound**: (`e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L75)

___

### \_onTrackUpBound

• `Protected` **\_onTrackUpBound**: (`e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L74)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DBase](DBase.md).[_options](DBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DBase](DBase.md).[_outline](DBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DBase](DBase.md).[_padding](DBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_ratioValue

• `Protected` **\_ratioValue**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L69)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DBase](DBase.md).[_reflowable](DBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_roundNumber

• `Protected` **\_roundNumber**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L66)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DBase](DBase.md).[_shortcuts](DBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DBase](DBase.md).[_snippet](DBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DBase](DBase.md).[_tempDisplayObjectParent](DBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_thumb

• `Protected` **\_thumb**: [`DSliderThumb`](DSliderThumb.md)<`unknown`, [`DThemeSliderThumb`](../interfaces/DThemeSliderThumb.md)<`unknown`\>, [`DSliderThumbOptions`](../interfaces/DSliderThumbOptions.md)<`unknown`, [`DThemeSliderThumb`](../interfaces/DThemeSliderThumb.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L63)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DBase](DBase.md).[_title](DBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_track

• `Protected` **\_track**: [`DSliderTrack`](DSliderTrack.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>, [`DSliderTrackOptions`](../interfaces/DSliderTrackOptions.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L62)

___

### \_trackSelected

• `Protected` **\_trackSelected**: [`DSliderTrack`](DSliderTrack.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>, [`DSliderTrackOptions`](../interfaces/DSliderTrackOptions.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L64)

___

### \_value

• `Protected` **\_value**: [`DSliderValue`](DSliderValue.md)<`number`, [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)<`number`\>, [`DSliderValueOptions`](../interfaces/DSliderValueOptions.md)<`number`, [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)<`number`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L65)

___

### \_yOffset

• `Protected` **\_yOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L68)

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

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DBase](DBase.md).[WORK_CONTAINS_POINT](DBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DBase.height

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

DBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### max

• `get` **max**(): `number`

Returns a maximum value.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L354)

• `set` **max**(`newMax`): `void`

Sets a maximum value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newMax` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L361)

___

### min

• `get` **min**(): `number`

Returns a minimum value.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L333)

• `set` **min**(`newMin`): `void`

Sets a minimum value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newMin` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L340)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DBase.shadow

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

DBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DBase.theme

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

DBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DBase.title

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

DBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### value

• `get` **value**(): `number`

Returns a current value.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L314)

• `set` **value**(`value`): `void`

Sets a current value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:321](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L321)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DBase.width

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

DBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DBase.x

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

DBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DBase.y

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

DBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[_calculateBounds](DBase.md#_calculatebounds)

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

▸ **addListener**(`event`, `fn`, `context?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[addListener](DBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

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

[src/main/typescript/wcardinal/ui/d-base.ts:1384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1384)

___

### blur

▸ **blur**(`recursively?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[blur](DBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

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

### containsGlobalPoint

▸ `Protected` **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[containsGlobalPoint](DBase.md#containsglobalpoint)

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

[DBase](DBase.md).[containsLocalPoint](DBase.md#containslocalpoint)

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

[DBase](DBase.md).[containsPoint](DBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1918](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1918)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[destroy](DBase.md#destroy)

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

[DBase](DBase.md).[displayObjectUpdateTransform](DBase.md#displayobjectupdatetransform)

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

### focus

▸ **focus**(): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[focus](DBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[focusOnClosest](DBase.md#focusonclosest)

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

[DBase](DBase.md).[getClippingRect](DBase.md#getclippingrect)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DBase](DBase.md).[getThemeDefault](DBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1893](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1893)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DBase](DBase.md).[getType](DBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:372](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L372)

___

### getValueMargin

▸ `Protected` **getValueMargin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L201)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DBase](DBase.md).[getWidth](DBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DBase](DBase.md).[getX](DBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DBase](DBase.md).[getY](DBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[hasDirty](DBase.md#hasdirty)

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

[DBase](DBase.md).[hasRefitableHeight](DBase.md#hasrefitableheight)

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

[DBase](DBase.md).[hasRefitableWidth](DBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1668](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1668)

___

### hide

▸ **hide**(): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[hide](DBase.md#hide)

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

#### Overrides

[DBase](DBase.md).[init](DBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L78)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[initReflowable](DBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[isDirty](DBase.md#isdirty)

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

[DBase](DBase.md).[isEventTarget](DBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1790)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[isHidden](DBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[isHierarchyDirty](DBase.md#ishierarchydirty)

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

[DBase](DBase.md).[isRefitable](DBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[isShown](DBase.md#isshown)

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

### moveThumbPosition

▸ `Protected` `Abstract` **moveThumbPosition**(`thumbCoordinate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thumbCoordinate` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L199)

___

### newLabelMax

▸ `Protected` **newLabelMax**(`options?`): [`DSliderLabel`](DSliderLabel.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>, [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DSliderLabel`](DSliderLabel.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>, [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L177)

___

### newLabelMin

▸ `Protected` **newLabelMin**(`options?`): [`DSliderLabel`](DSliderLabel.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>, [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DSliderLabel`](DSliderLabel.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>, [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L160)

___

### newThumb

▸ `Protected` **newThumb**(`options?`): [`DSliderThumb`](DSliderThumb.md)<`unknown`, [`DThemeSliderThumb`](../interfaces/DThemeSliderThumb.md)<`unknown`\>, [`DSliderThumbOptions`](../interfaces/DSliderThumbOptions.md)<`unknown`, [`DThemeSliderThumb`](../interfaces/DThemeSliderThumb.md)<`unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DSliderThumb`](DSliderThumb.md)<`unknown`, [`DThemeSliderThumb`](../interfaces/DThemeSliderThumb.md)<`unknown`\>, [`DSliderThumbOptions`](../interfaces/DSliderThumbOptions.md)<`unknown`, [`DThemeSliderThumb`](../interfaces/DThemeSliderThumb.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L136)

___

### newTrack

▸ `Protected` `Abstract` **newTrack**(`options?`): [`DSliderTrack`](DSliderTrack.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>, [`DSliderTrackOptions`](../interfaces/DSliderTrackOptions.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DSliderTrack`](DSliderTrack.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>, [`DSliderTrackOptions`](../interfaces/DSliderTrackOptions.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L194)

___

### newTrackSelected

▸ `Protected` `Abstract` **newTrackSelected**(`options?`): [`DSliderTrack`](DSliderTrack.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>, [`DSliderTrackOptions`](../interfaces/DSliderTrackOptions.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DSliderTrack`](DSliderTrack.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>, [`DSliderTrackOptions`](../interfaces/DSliderTrackOptions.md)<`unknown`, [`DThemeSliderTrack`](../interfaces/DThemeSliderTrack.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L195)

___

### newValue

▸ `Protected` **newValue**(`options?`): [`DSliderValue`](DSliderValue.md)<`number`, [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)<`number`\>, [`DSliderValueOptions`](../interfaces/DSliderValueOptions.md)<`number`, [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)<`number`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DSliderValue`](DSliderValue.md)<`number`, [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)<`number`\>, [`DSliderValueOptions`](../interfaces/DSliderValueOptions.md)<`number`, [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)<`number`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L140)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[off](DBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[on](DBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[on](DBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onBlur](DBase.md#onblur)

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

[DBase](DBase.md).[onChildBlur](DBase.md#onchildblur)

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

[DBase](DBase.md).[onChildFocus](DBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onChildrenChange](DBase.md#onchildrenchange)

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

[DBase](DBase.md).[onDblClick](DBase.md#ondblclick)

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

[DBase](DBase.md).[onDown](DBase.md#ondown)

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

[DBase](DBase.md).[onDownThis](DBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1811)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onFocus](DBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onHierarchyDirty](DBase.md#onhierarchydirty)

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

[DBase](DBase.md).[onKeyDown](DBase.md#onkeydown)

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

[DBase](DBase.md).[onKeyUp](DBase.md#onkeyup)

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

[DBase](DBase.md).[onMove](DBase.md#onmove)

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

[DBase](DBase.md).[onOut](DBase.md#onout)

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

[DBase](DBase.md).[onOver](DBase.md#onover)

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

[DBase](DBase.md).[onParentMove](DBase.md#onparentmove)

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

[DBase](DBase.md).[onParentResize](DBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1727)

___

### onPick

▸ `Protected` `Abstract` **onPick**(`global`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `Point` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L197)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onRefit](DBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1614)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[onReflow](DBase.md#onreflow)

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

#### Overrides

[DBase](DBase.md).[onResize](DBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L306)

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

[DBase](DBase.md).[onShortcut](DBase.md#onshortcut)

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

[DBase](DBase.md).[onSkew](DBase.md#onskew)

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

[DBase](DBase.md).[onStateChange](DBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1513)

___

### onThumbDown

▸ `Protected` **onThumbDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L266)

___

### onThumbMove

▸ `Protected` **onThumbMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L259)

___

### onThumbUp

▸ `Protected` **onThumbUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L280)

___

### onTrackDown

▸ `Protected` **onTrackDown**(`global`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `Point` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L205)

___

### onTrackSelectedDown

▸ `Protected` **onTrackSelectedDown**(`global`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `Point` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:221](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L221)

___

### onTrackSelectedUpBound

▸ `Protected` **onTrackSelectedUpBound**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L248)

___

### onTrackUpBound

▸ `Protected` **onTrackUpBound**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L237)

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

[DBase](DBase.md).[onUpThis](DBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1829](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1829)

___

### onValuesChange

▸ `Protected` `Abstract` **onValuesChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L198)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1773](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1773)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[once](DBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[once](DBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[reflow](DBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1587)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[removeAllListeners](DBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

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

▸ **removeListener**(`event`, `fn?`, `context?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[removeListener](DBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

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

[DBase](DBase.md).[setChildIndex](DBase.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[setFocused](DBase.md#setfocused)

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

[DBase](DBase.md).[setHeight](DBase.md#setheight)

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

[DBase](DBase.md).[setX](DBase.md#setx)

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

[DBase](DBase.md).[setY](DBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DSlider`](DSlider.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DBase](DBase.md).[show](DBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

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

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[toDirty](DBase.md#todirty)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DBase](DBase.md).[toHierarchyDirty](DBase.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1443)

___

### toLabelMaxOptions

▸ `Protected` **toLabelMaxOptions**(`options?`): [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\> |

#### Returns

[`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L181)

___

### toLabelMinOptions

▸ `Protected` **toLabelMinOptions**(`options?`): [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\> |

#### Returns

[`DSliderLabelOptions`](../interfaces/DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](../interfaces/DThemeSliderLabel.md)<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L164)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[toParentHierarchyDirty](DBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DBase](DBase.md).[toParentResized](DBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### toValueOptions

▸ `Protected` **toValueOptions**(`options?`): [`DSliderValueOptions`](../interfaces/DSliderValueOptions.md)<`number`, [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)<`number`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DSliderValueOptions`](../interfaces/DSliderValueOptions.md)<`number`, [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)<`number`\>\> |

#### Returns

[`DSliderValueOptions`](../interfaces/DSliderValueOptions.md)<`number`, [`DThemeSliderValue`](../interfaces/DThemeSliderValue.md)<`number`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L144)

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

### updateValue

▸ `Protected` **updateValue**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:293](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L293)

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
