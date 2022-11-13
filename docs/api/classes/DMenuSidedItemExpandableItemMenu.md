[Winter Cardinal UI - v0.227.0](../index.md) / DMenuSidedItemExpandableItemMenu

# Class: DMenuSidedItemExpandableItemMenu<VALUE, THEME, OPTIONS\>

A base class for UI classes with an image support.
See [DImageBaseEvents](../interfaces/DImageBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemMenu`](../interfaces/DThemeMenuItemMenu.md) = [`DThemeMenuItemMenu`](../interfaces/DThemeMenuItemMenu.md) |
| `OPTIONS` | extends [`DMenuItemMenuOptions`](../interfaces/DMenuItemMenuOptions.md)<`VALUE`, `THEME`\> = [`DMenuItemMenuOptions`](../interfaces/DMenuItemMenuOptions.md)<`VALUE`, `THEME`\> |

## Hierarchy

- [`DMenuItemExpandableItemMenu`](DMenuItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DMenuSidedItemExpandableItemMenu`**

## Table of contents

### Constructors

- [constructor](DMenuSidedItemExpandableItemMenu.md#constructor)

### Properties

- [\_accessibleActive](DMenuSidedItemExpandableItemMenu.md#_accessibleactive)
- [\_accessibleDiv](DMenuSidedItemExpandableItemMenu.md#_accessiblediv)
- [\_auto](DMenuSidedItemExpandableItemMenu.md#_auto)
- [\_background](DMenuSidedItemExpandableItemMenu.md#_background)
- [\_border](DMenuSidedItemExpandableItemMenu.md#_border)
- [\_bounds](DMenuSidedItemExpandableItemMenu.md#_bounds)
- [\_clearType](DMenuSidedItemExpandableItemMenu.md#_cleartype)
- [\_corner](DMenuSidedItemExpandableItemMenu.md#_corner)
- [\_cursor](DMenuSidedItemExpandableItemMenu.md#_cursor)
- [\_destroyed](DMenuSidedItemExpandableItemMenu.md#_destroyed)
- [\_images](DMenuSidedItemExpandableItemMenu.md#_images)
- [\_isOverflowMaskEnabled](DMenuSidedItemExpandableItemMenu.md#_isoverflowmaskenabled)
- [\_isTextVisible](DMenuSidedItemExpandableItemMenu.md#_istextvisible)
- [\_lastDownPoint](DMenuSidedItemExpandableItemMenu.md#_lastdownpoint)
- [\_lastSortedIndex](DMenuSidedItemExpandableItemMenu.md#_lastsortedindex)
- [\_mask](DMenuSidedItemExpandableItemMenu.md#_mask)
- [\_menu](DMenuSidedItemExpandableItemMenu.md#_menu)
- [\_options](DMenuSidedItemExpandableItemMenu.md#_options)
- [\_outline](DMenuSidedItemExpandableItemMenu.md#_outline)
- [\_overflowMask](DMenuSidedItemExpandableItemMenu.md#_overflowmask)
- [\_padding](DMenuSidedItemExpandableItemMenu.md#_padding)
- [\_reflowable](DMenuSidedItemExpandableItemMenu.md#_reflowable)
- [\_shortcuts](DMenuSidedItemExpandableItemMenu.md#_shortcuts)
- [\_snippet](DMenuSidedItemExpandableItemMenu.md#_snippet)
- [\_tempDisplayObjectParent](DMenuSidedItemExpandableItemMenu.md#_tempdisplayobjectparent)
- [\_text](DMenuSidedItemExpandableItemMenu.md#_text)
- [\_textAlign](DMenuSidedItemExpandableItemMenu.md#_textalign)
- [\_textAlpha](DMenuSidedItemExpandableItemMenu.md#_textalpha)
- [\_textColor](DMenuSidedItemExpandableItemMenu.md#_textcolor)
- [\_textFormatter](DMenuSidedItemExpandableItemMenu.md#_textformatter)
- [\_textStyle](DMenuSidedItemExpandableItemMenu.md#_textstyle)
- [\_textValue](DMenuSidedItemExpandableItemMenu.md#_textvalue)
- [\_textValueComputed](DMenuSidedItemExpandableItemMenu.md#_textvaluecomputed)
- [\_title](DMenuSidedItemExpandableItemMenu.md#_title)
- [\_value](DMenuSidedItemExpandableItemMenu.md#_value)
- [\_zIndex](DMenuSidedItemExpandableItemMenu.md#_zindex)
- [accessible](DMenuSidedItemExpandableItemMenu.md#accessible)
- [accessibleChildren](DMenuSidedItemExpandableItemMenu.md#accessiblechildren)
- [accessibleHint](DMenuSidedItemExpandableItemMenu.md#accessiblehint)
- [accessiblePointerEvents](DMenuSidedItemExpandableItemMenu.md#accessiblepointerevents)
- [accessibleTitle](DMenuSidedItemExpandableItemMenu.md#accessibletitle)
- [accessibleType](DMenuSidedItemExpandableItemMenu.md#accessibletype)
- [alpha](DMenuSidedItemExpandableItemMenu.md#alpha)
- [angle](DMenuSidedItemExpandableItemMenu.md#angle)
- [buttonMode](DMenuSidedItemExpandableItemMenu.md#buttonmode)
- [cacheAsBitmap](DMenuSidedItemExpandableItemMenu.md#cacheasbitmap)
- [children](DMenuSidedItemExpandableItemMenu.md#children)
- [cursor](DMenuSidedItemExpandableItemMenu.md#cursor)
- [filterArea](DMenuSidedItemExpandableItemMenu.md#filterarea)
- [filters](DMenuSidedItemExpandableItemMenu.md#filters)
- [hitArea](DMenuSidedItemExpandableItemMenu.md#hitarea)
- [interactive](DMenuSidedItemExpandableItemMenu.md#interactive)
- [interactiveChildren](DMenuSidedItemExpandableItemMenu.md#interactivechildren)
- [isMask](DMenuSidedItemExpandableItemMenu.md#ismask)
- [isSprite](DMenuSidedItemExpandableItemMenu.md#issprite)
- [localTransform](DMenuSidedItemExpandableItemMenu.md#localtransform)
- [mask](DMenuSidedItemExpandableItemMenu.md#mask)
- [name](DMenuSidedItemExpandableItemMenu.md#name)
- [parent](DMenuSidedItemExpandableItemMenu.md#parent)
- [pivot](DMenuSidedItemExpandableItemMenu.md#pivot)
- [renderable](DMenuSidedItemExpandableItemMenu.md#renderable)
- [rotation](DMenuSidedItemExpandableItemMenu.md#rotation)
- [sortDirty](DMenuSidedItemExpandableItemMenu.md#sortdirty)
- [sortableChildren](DMenuSidedItemExpandableItemMenu.md#sortablechildren)
- [transform](DMenuSidedItemExpandableItemMenu.md#transform)
- [visible](DMenuSidedItemExpandableItemMenu.md#visible)
- [worldAlpha](DMenuSidedItemExpandableItemMenu.md#worldalpha)
- [worldTransform](DMenuSidedItemExpandableItemMenu.md#worldtransform)
- [worldVisible](DMenuSidedItemExpandableItemMenu.md#worldvisible)
- [zIndex](DMenuSidedItemExpandableItemMenu.md#zindex)
- [LAYOUTER](DMenuSidedItemExpandableItemMenu.md#layouter)
- [WORK\_CONTAINS\_POINT](DMenuSidedItemExpandableItemMenu.md#work_contains_point)

### Accessors

- [background](DMenuSidedItemExpandableItemMenu.md#background)
- [border](DMenuSidedItemExpandableItemMenu.md#border)
- [corner](DMenuSidedItemExpandableItemMenu.md#corner)
- [height](DMenuSidedItemExpandableItemMenu.md#height)
- [image](DMenuSidedItemExpandableItemMenu.md#image)
- [menu](DMenuSidedItemExpandableItemMenu.md#menu)
- [options](DMenuSidedItemExpandableItemMenu.md#options)
- [outline](DMenuSidedItemExpandableItemMenu.md#outline)
- [padding](DMenuSidedItemExpandableItemMenu.md#padding)
- [position](DMenuSidedItemExpandableItemMenu.md#position)
- [reflowable](DMenuSidedItemExpandableItemMenu.md#reflowable)
- [scale](DMenuSidedItemExpandableItemMenu.md#scale)
- [shadow](DMenuSidedItemExpandableItemMenu.md#shadow)
- [skew](DMenuSidedItemExpandableItemMenu.md#skew)
- [snippet](DMenuSidedItemExpandableItemMenu.md#snippet)
- [state](DMenuSidedItemExpandableItemMenu.md#state)
- [text](DMenuSidedItemExpandableItemMenu.md#text)
- [theme](DMenuSidedItemExpandableItemMenu.md#theme)
- [title](DMenuSidedItemExpandableItemMenu.md#title)
- [type](DMenuSidedItemExpandableItemMenu.md#type)
- [unsafe](DMenuSidedItemExpandableItemMenu.md#unsafe)
- [value](DMenuSidedItemExpandableItemMenu.md#value)
- [weight](DMenuSidedItemExpandableItemMenu.md#weight)
- [width](DMenuSidedItemExpandableItemMenu.md#width)
- [x](DMenuSidedItemExpandableItemMenu.md#x)
- [y](DMenuSidedItemExpandableItemMenu.md#y)

### Methods

- [\_calculateBounds](DMenuSidedItemExpandableItemMenu.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DMenuSidedItemExpandableItemMenu.md#_recursivepostupdatetransform)
- [\_render](DMenuSidedItemExpandableItemMenu.md#_render)
- [activate](DMenuSidedItemExpandableItemMenu.md#activate)
- [addChild](DMenuSidedItemExpandableItemMenu.md#addchild)
- [addChildAt](DMenuSidedItemExpandableItemMenu.md#addchildat)
- [addListener](DMenuSidedItemExpandableItemMenu.md#addlistener)
- [applyTitle](DMenuSidedItemExpandableItemMenu.md#applytitle)
- [blur](DMenuSidedItemExpandableItemMenu.md#blur)
- [calculateBounds](DMenuSidedItemExpandableItemMenu.md#calculatebounds)
- [close](DMenuSidedItemExpandableItemMenu.md#close)
- [computeTextValue](DMenuSidedItemExpandableItemMenu.md#computetextvalue)
- [containsGlobalPoint](DMenuSidedItemExpandableItemMenu.md#containsglobalpoint)
- [containsLocalPoint](DMenuSidedItemExpandableItemMenu.md#containslocalpoint)
- [containsPoint](DMenuSidedItemExpandableItemMenu.md#containspoint)
- [createOrUpdateText](DMenuSidedItemExpandableItemMenu.md#createorupdatetext)
- [createText](DMenuSidedItemExpandableItemMenu.md#createtext)
- [destroy](DMenuSidedItemExpandableItemMenu.md#destroy)
- [displayObjectUpdateTransform](DMenuSidedItemExpandableItemMenu.md#displayobjectupdatetransform)
- [emit](DMenuSidedItemExpandableItemMenu.md#emit)
- [eventNames](DMenuSidedItemExpandableItemMenu.md#eventnames)
- [focus](DMenuSidedItemExpandableItemMenu.md#focus)
- [focusOnClosest](DMenuSidedItemExpandableItemMenu.md#focusonclosest)
- [getBounds](DMenuSidedItemExpandableItemMenu.md#getbounds)
- [getChildAt](DMenuSidedItemExpandableItemMenu.md#getchildat)
- [getChildByName](DMenuSidedItemExpandableItemMenu.md#getchildbyname)
- [getChildIndex](DMenuSidedItemExpandableItemMenu.md#getchildindex)
- [getClearType](DMenuSidedItemExpandableItemMenu.md#getcleartype)
- [getClippingRect](DMenuSidedItemExpandableItemMenu.md#getclippingrect)
- [getCloseable](DMenuSidedItemExpandableItemMenu.md#getcloseable)
- [getContext](DMenuSidedItemExpandableItemMenu.md#getcontext)
- [getGlobalPosition](DMenuSidedItemExpandableItemMenu.md#getglobalposition)
- [getHeight](DMenuSidedItemExpandableItemMenu.md#getheight)
- [getLocalBounds](DMenuSidedItemExpandableItemMenu.md#getlocalbounds)
- [getOverflowMask](DMenuSidedItemExpandableItemMenu.md#getoverflowmask)
- [getParentOfSize](DMenuSidedItemExpandableItemMenu.md#getparentofsize)
- [getSelection](DMenuSidedItemExpandableItemMenu.md#getselection)
- [getTextAlpha](DMenuSidedItemExpandableItemMenu.md#gettextalpha)
- [getTextColor](DMenuSidedItemExpandableItemMenu.md#gettextcolor)
- [getThemeDefault](DMenuSidedItemExpandableItemMenu.md#getthemedefault)
- [getType](DMenuSidedItemExpandableItemMenu.md#gettype)
- [getWidth](DMenuSidedItemExpandableItemMenu.md#getwidth)
- [getX](DMenuSidedItemExpandableItemMenu.md#getx)
- [getY](DMenuSidedItemExpandableItemMenu.md#gety)
- [hasDirty](DMenuSidedItemExpandableItemMenu.md#hasdirty)
- [hasRefitableHeight](DMenuSidedItemExpandableItemMenu.md#hasrefitableheight)
- [hasRefitableWidth](DMenuSidedItemExpandableItemMenu.md#hasrefitablewidth)
- [hasSelection](DMenuSidedItemExpandableItemMenu.md#hasselection)
- [hide](DMenuSidedItemExpandableItemMenu.md#hide)
- [hideText](DMenuSidedItemExpandableItemMenu.md#hidetext)
- [init](DMenuSidedItemExpandableItemMenu.md#init)
- [initHover](DMenuSidedItemExpandableItemMenu.md#inithover)
- [initReflowable](DMenuSidedItemExpandableItemMenu.md#initreflowable)
- [isDirty](DMenuSidedItemExpandableItemMenu.md#isdirty)
- [isEventTarget](DMenuSidedItemExpandableItemMenu.md#iseventtarget)
- [isHidden](DMenuSidedItemExpandableItemMenu.md#ishidden)
- [isHierarchyDirty](DMenuSidedItemExpandableItemMenu.md#ishierarchydirty)
- [isRefitable](DMenuSidedItemExpandableItemMenu.md#isrefitable)
- [isShown](DMenuSidedItemExpandableItemMenu.md#isshown)
- [listenerCount](DMenuSidedItemExpandableItemMenu.md#listenercount)
- [listeners](DMenuSidedItemExpandableItemMenu.md#listeners)
- [newImage](DMenuSidedItemExpandableItemMenu.md#newimage)
- [newImages](DMenuSidedItemExpandableItemMenu.md#newimages)
- [newMenu](DMenuSidedItemExpandableItemMenu.md#newmenu)
- [off](DMenuSidedItemExpandableItemMenu.md#off)
- [on](DMenuSidedItemExpandableItemMenu.md#on)
- [onBlur](DMenuSidedItemExpandableItemMenu.md#onblur)
- [onChildBlur](DMenuSidedItemExpandableItemMenu.md#onchildblur)
- [onChildFocus](DMenuSidedItemExpandableItemMenu.md#onchildfocus)
- [onChildrenChange](DMenuSidedItemExpandableItemMenu.md#onchildrenchange)
- [onClick](DMenuSidedItemExpandableItemMenu.md#onclick)
- [onDblClick](DMenuSidedItemExpandableItemMenu.md#ondblclick)
- [onDown](DMenuSidedItemExpandableItemMenu.md#ondown)
- [onDownThis](DMenuSidedItemExpandableItemMenu.md#ondownthis)
- [onFocus](DMenuSidedItemExpandableItemMenu.md#onfocus)
- [onHierarchyDirty](DMenuSidedItemExpandableItemMenu.md#onhierarchydirty)
- [onKeyDown](DMenuSidedItemExpandableItemMenu.md#onkeydown)
- [onKeyDownActivate](DMenuSidedItemExpandableItemMenu.md#onkeydownactivate)
- [onKeyDownArrowRight](DMenuSidedItemExpandableItemMenu.md#onkeydownarrowright)
- [onKeyUp](DMenuSidedItemExpandableItemMenu.md#onkeyup)
- [onMenuSelect](DMenuSidedItemExpandableItemMenu.md#onmenuselect)
- [onMove](DMenuSidedItemExpandableItemMenu.md#onmove)
- [onOpen](DMenuSidedItemExpandableItemMenu.md#onopen)
- [onOut](DMenuSidedItemExpandableItemMenu.md#onout)
- [onOver](DMenuSidedItemExpandableItemMenu.md#onover)
- [onParentMove](DMenuSidedItemExpandableItemMenu.md#onparentmove)
- [onParentResize](DMenuSidedItemExpandableItemMenu.md#onparentresize)
- [onRefit](DMenuSidedItemExpandableItemMenu.md#onrefit)
- [onReflow](DMenuSidedItemExpandableItemMenu.md#onreflow)
- [onResize](DMenuSidedItemExpandableItemMenu.md#onresize)
- [onScale](DMenuSidedItemExpandableItemMenu.md#onscale)
- [onSelect](DMenuSidedItemExpandableItemMenu.md#onselect)
- [onShortcut](DMenuSidedItemExpandableItemMenu.md#onshortcut)
- [onSkew](DMenuSidedItemExpandableItemMenu.md#onskew)
- [onStateChange](DMenuSidedItemExpandableItemMenu.md#onstatechange)
- [onTextChange](DMenuSidedItemExpandableItemMenu.md#ontextchange)
- [onUp](DMenuSidedItemExpandableItemMenu.md#onup)
- [onUpThis](DMenuSidedItemExpandableItemMenu.md#onupthis)
- [onWheel](DMenuSidedItemExpandableItemMenu.md#onwheel)
- [once](DMenuSidedItemExpandableItemMenu.md#once)
- [open](DMenuSidedItemExpandableItemMenu.md#open)
- [reflow](DMenuSidedItemExpandableItemMenu.md#reflow)
- [removeAllListeners](DMenuSidedItemExpandableItemMenu.md#removealllisteners)
- [removeChild](DMenuSidedItemExpandableItemMenu.md#removechild)
- [removeChildAt](DMenuSidedItemExpandableItemMenu.md#removechildat)
- [removeChildren](DMenuSidedItemExpandableItemMenu.md#removechildren)
- [removeListener](DMenuSidedItemExpandableItemMenu.md#removelistener)
- [render](DMenuSidedItemExpandableItemMenu.md#render)
- [renderAdvanced](DMenuSidedItemExpandableItemMenu.md#renderadvanced)
- [resize](DMenuSidedItemExpandableItemMenu.md#resize)
- [setChildIndex](DMenuSidedItemExpandableItemMenu.md#setchildindex)
- [setFocused](DMenuSidedItemExpandableItemMenu.md#setfocused)
- [setHeight](DMenuSidedItemExpandableItemMenu.md#setheight)
- [setParent](DMenuSidedItemExpandableItemMenu.md#setparent)
- [setTransform](DMenuSidedItemExpandableItemMenu.md#settransform)
- [setWidth](DMenuSidedItemExpandableItemMenu.md#setwidth)
- [setX](DMenuSidedItemExpandableItemMenu.md#setx)
- [setY](DMenuSidedItemExpandableItemMenu.md#sety)
- [show](DMenuSidedItemExpandableItemMenu.md#show)
- [showText](DMenuSidedItemExpandableItemMenu.md#showtext)
- [sortChildren](DMenuSidedItemExpandableItemMenu.md#sortchildren)
- [swapChildren](DMenuSidedItemExpandableItemMenu.md#swapchildren)
- [toCursor](DMenuSidedItemExpandableItemMenu.md#tocursor)
- [toDirty](DMenuSidedItemExpandableItemMenu.md#todirty)
- [toGlobal](DMenuSidedItemExpandableItemMenu.md#toglobal)
- [toHasDirty](DMenuSidedItemExpandableItemMenu.md#tohasdirty)
- [toHierarchyDirty](DMenuSidedItemExpandableItemMenu.md#tohierarchydirty)
- [toImageOptions](DMenuSidedItemExpandableItemMenu.md#toimageoptions)
- [toLocal](DMenuSidedItemExpandableItemMenu.md#tolocal)
- [toMenu](DMenuSidedItemExpandableItemMenu.md#tomenu)
- [toParentHasDirty](DMenuSidedItemExpandableItemMenu.md#toparenthasdirty)
- [toParentHierarchyDirty](DMenuSidedItemExpandableItemMenu.md#toparenthierarchydirty)
- [toParentResized](DMenuSidedItemExpandableItemMenu.md#toparentresized)
- [toggle](DMenuSidedItemExpandableItemMenu.md#toggle)
- [updateText](DMenuSidedItemExpandableItemMenu.md#updatetext)
- [updateTextAndImage](DMenuSidedItemExpandableItemMenu.md#updatetextandimage)
- [updateTextColor](DMenuSidedItemExpandableItemMenu.md#updatetextcolor)
- [updateTextPosition](DMenuSidedItemExpandableItemMenu.md#updatetextposition)
- [updateTextValue](DMenuSidedItemExpandableItemMenu.md#updatetextvalue)
- [updateTransform](DMenuSidedItemExpandableItemMenu.md#updatetransform)
- [mixin](DMenuSidedItemExpandableItemMenu.md#mixin)

## Constructors

### constructor

• **new DMenuSidedItemExpandableItemMenu**<`VALUE`, `THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemMenu`](../interfaces/DThemeMenuItemMenu.md)<`THEME`\> = [`DThemeMenuItemMenu`](../interfaces/DThemeMenuItemMenu.md) |
| `OPTIONS` | extends [`DMenuItemMenuOptions`](../interfaces/DMenuItemMenuOptions.md)<`VALUE`, `THEME`, `OPTIONS`\> = [`DMenuItemMenuOptions`](../interfaces/DMenuItemMenuOptions.md)<`VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[constructor](DMenuItemExpandableItemMenu.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L28)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_accessibleActive](DMenuItemExpandableItemMenu.md#_accessibleactive)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_accessibleDiv](DMenuItemExpandableItemMenu.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_auto](DMenuItemExpandableItemMenu.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_background](DMenuItemExpandableItemMenu.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_border](DMenuItemExpandableItemMenu.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_bounds](DMenuItemExpandableItemMenu.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_clearType](DMenuItemExpandableItemMenu.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_corner](DMenuItemExpandableItemMenu.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_cursor](DMenuItemExpandableItemMenu.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_destroyed](DMenuItemExpandableItemMenu.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_images

• `Protected` **\_images**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_images](DMenuItemExpandableItemMenu.md#_images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L95)

___

### \_isOverflowMaskEnabled

• `Protected` **\_isOverflowMaskEnabled**: `boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_isOverflowMaskEnabled](DMenuItemExpandableItemMenu.md#_isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L168)

___

### \_isTextVisible

• `Protected` **\_isTextVisible**: `boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_isTextVisible](DMenuItemExpandableItemMenu.md#_istextvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L170)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_lastDownPoint](DMenuItemExpandableItemMenu.md#_lastdownpoint)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_lastSortedIndex](DMenuItemExpandableItemMenu.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_mask](DMenuItemExpandableItemMenu.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_menu

• `Protected` `Optional` **\_menu**: [`DMenu`](DMenu.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_menu](DMenuItemExpandableItemMenu.md#_menu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L27)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_options](DMenuItemExpandableItemMenu.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_outline](DMenuItemExpandableItemMenu.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_overflowMask](DMenuItemExpandableItemMenu.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L169)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_padding](DMenuItemExpandableItemMenu.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_reflowable](DMenuItemExpandableItemMenu.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_shortcuts](DMenuItemExpandableItemMenu.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_snippet](DMenuItemExpandableItemMenu.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_tempDisplayObjectParent](DMenuItemExpandableItemMenu.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_text](DMenuItemExpandableItemMenu.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L160)

___

### \_textAlign

• `Protected` **\_textAlign**: [`DTextBaseAlign`](../interfaces/DTextBaseAlign.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_textAlign](DMenuItemExpandableItemMenu.md#_textalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L166)

___

### \_textAlpha

• `Protected` **\_textAlpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_textAlpha](DMenuItemExpandableItemMenu.md#_textalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L164)

___

### \_textColor

• `Protected` **\_textColor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_textColor](DMenuItemExpandableItemMenu.md#_textcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L163)

___

### \_textFormatter

• `Protected` **\_textFormatter**: (`value`: `string`, `caller`: `any`) => `string`

#### Type declaration

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_textFormatter](DMenuItemExpandableItemMenu.md#_textformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L167)

___

### \_textStyle

• `Protected` **\_textStyle**: [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_textStyle](DMenuItemExpandableItemMenu.md#_textstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L165)

___

### \_textValue

• `Protected` `Optional` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_textValue](DMenuItemExpandableItemMenu.md#_textvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L161)

___

### \_textValueComputed

• `Protected` `Optional` **\_textValueComputed**: `string`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_textValueComputed](DMenuItemExpandableItemMenu.md#_textvaluecomputed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L162)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_title](DMenuItemExpandableItemMenu.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_value

• `Protected` **\_value**: ``null`` \| `VALUE`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_value](DMenuItemExpandableItemMenu.md#_value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L26)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_zIndex](DMenuItemExpandableItemMenu.md#_zindex)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[accessible](DMenuItemExpandableItemMenu.md#accessible)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[accessibleChildren](DMenuItemExpandableItemMenu.md#accessiblechildren)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[accessibleHint](DMenuItemExpandableItemMenu.md#accessiblehint)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[accessiblePointerEvents](DMenuItemExpandableItemMenu.md#accessiblepointerevents)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[accessibleTitle](DMenuItemExpandableItemMenu.md#accessibletitle)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[accessibleType](DMenuItemExpandableItemMenu.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[alpha](DMenuItemExpandableItemMenu.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[angle](DMenuItemExpandableItemMenu.md#angle)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[buttonMode](DMenuItemExpandableItemMenu.md#buttonmode)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[cacheAsBitmap](DMenuItemExpandableItemMenu.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[children](DMenuItemExpandableItemMenu.md#children)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[cursor](DMenuItemExpandableItemMenu.md#cursor)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[filterArea](DMenuItemExpandableItemMenu.md#filterarea)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[filters](DMenuItemExpandableItemMenu.md#filters)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[hitArea](DMenuItemExpandableItemMenu.md#hitarea)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[interactive](DMenuItemExpandableItemMenu.md#interactive)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[interactiveChildren](DMenuItemExpandableItemMenu.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[isMask](DMenuItemExpandableItemMenu.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[isSprite](DMenuItemExpandableItemMenu.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[localTransform](DMenuItemExpandableItemMenu.md#localtransform)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[mask](DMenuItemExpandableItemMenu.md#mask)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[name](DMenuItemExpandableItemMenu.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[parent](DMenuItemExpandableItemMenu.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[pivot](DMenuItemExpandableItemMenu.md#pivot)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[renderable](DMenuItemExpandableItemMenu.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[rotation](DMenuItemExpandableItemMenu.md#rotation)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[sortDirty](DMenuItemExpandableItemMenu.md#sortdirty)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[sortableChildren](DMenuItemExpandableItemMenu.md#sortablechildren)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[transform](DMenuItemExpandableItemMenu.md#transform)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[visible](DMenuItemExpandableItemMenu.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[worldAlpha](DMenuItemExpandableItemMenu.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[worldTransform](DMenuItemExpandableItemMenu.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[worldVisible](DMenuItemExpandableItemMenu.md#worldvisible)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[zIndex](DMenuItemExpandableItemMenu.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[LAYOUTER](DMenuItemExpandableItemMenu.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L94)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[WORK_CONTAINS_POINT](DMenuItemExpandableItemMenu.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:733](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L733)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DMenuItemExpandableItemMenu.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DMenuItemExpandableItemMenu.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DMenuItemExpandableItemMenu.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemMenu.height

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

DMenuItemExpandableItemMenu.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### image

• `get` **image**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Inherited from

DMenuItemExpandableItemMenu.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L125)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DMenuItemExpandableItemMenu.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L129)

___

### menu

• `get` **menu**(): [`DMenu`](DMenu.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Returns

[`DMenu`](DMenu.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Inherited from

DMenuItemExpandableItemMenu.menu

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L54)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DMenuItemExpandableItemMenu.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DMenuItemExpandableItemMenu.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DMenuItemExpandableItemMenu.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItemExpandableItemMenu.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DMenuItemExpandableItemMenu.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItemExpandableItemMenu.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DMenuItemExpandableItemMenu.shadow

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

DMenuItemExpandableItemMenu.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DMenuItemExpandableItemMenu.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DMenuItemExpandableItemMenu.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DMenuItemExpandableItemMenu.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### text

• `get` **text**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Inherited from

DMenuItemExpandableItemMenu.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L197)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DMenuItemExpandableItemMenu.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L190)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DMenuItemExpandableItemMenu.theme

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

DMenuItemExpandableItemMenu.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DMenuItemExpandableItemMenu.title

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

DMenuItemExpandableItemMenu.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DMenuItemExpandableItemMenu.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DMenuItemExpandableItemMenu.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### value

• `get` **value**(): ``null`` \| `VALUE`

#### Returns

``null`` \| `VALUE`

#### Inherited from

DMenuItemExpandableItemMenu.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L50)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `VALUE` |

#### Returns

`void`

#### Inherited from

DMenuItemExpandableItemMenu.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L54)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemMenu.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemMenu.width

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

DMenuItemExpandableItemMenu.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemMenu.x

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

DMenuItemExpandableItemMenu.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DMenuItemExpandableItemMenu.y

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

DMenuItemExpandableItemMenu.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_calculateBounds](DMenuItemExpandableItemMenu.md#_calculatebounds)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_recursivePostUpdateTransform](DMenuItemExpandableItemMenu.md#_recursivepostupdatetransform)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[_render](DMenuItemExpandableItemMenu.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8413

___

### activate

▸ **activate**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[activate](DMenuItemExpandableItemMenu.md#activate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L46)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[addChild](DMenuItemExpandableItemMenu.md#addchild)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[addChildAt](DMenuItemExpandableItemMenu.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[addListener](DMenuItemExpandableItemMenu.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[addListener](DMenuItemExpandableItemMenu.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[applyTitle](DMenuItemExpandableItemMenu.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L383)

___

### blur

▸ **blur**(`recursively?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[blur](DMenuItemExpandableItemMenu.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[calculateBounds](DMenuItemExpandableItemMenu.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[close](DMenuItemExpandableItemMenu.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L87)

___

### computeTextValue

▸ `Protected` **computeTextValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[computeTextValue](DMenuItemExpandableItemMenu.md#computetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L205)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[containsGlobalPoint](DMenuItemExpandableItemMenu.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1953](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1953)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[containsLocalPoint](DMenuItemExpandableItemMenu.md#containslocalpoint)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[containsPoint](DMenuItemExpandableItemMenu.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### createOrUpdateText

▸ `Protected` **createOrUpdateText**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[createOrUpdateText](DMenuItemExpandableItemMenu.md#createorupdatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L220)

___

### createText

▸ `Protected` **createText**(`formatted`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatted` | `string` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[createText](DMenuItemExpandableItemMenu.md#createtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L247)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[destroy](DMenuItemExpandableItemMenu.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L195)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[displayObjectUpdateTransform](DMenuItemExpandableItemMenu.md#displayobjectupdatetransform)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[emit](DMenuItemExpandableItemMenu.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[eventNames](DMenuItemExpandableItemMenu.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[focus](DMenuItemExpandableItemMenu.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[focusOnClosest](DMenuItemExpandableItemMenu.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getBounds](DMenuItemExpandableItemMenu.md#getbounds)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getChildAt](DMenuItemExpandableItemMenu.md#getchildat)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getChildByName](DMenuItemExpandableItemMenu.md#getchildbyname)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getChildIndex](DMenuItemExpandableItemMenu.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getClearType](DMenuItemExpandableItemMenu.md#getcleartype)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getClippingRect](DMenuItemExpandableItemMenu.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1970](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1970)

___

### getCloseable

▸ **getCloseable**(): ``null`` \| [`Closeable`](../interfaces/Closeable.md)

#### Returns

``null`` \| [`Closeable`](../interfaces/Closeable.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getCloseable](DMenuItemExpandableItemMenu.md#getcloseable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item.ts#L30)

___

### getContext

▸ **getContext**(): ``null`` \| [`DMenuContext`](DMenuContext.md)

#### Returns

``null`` \| [`DMenuContext`](DMenuContext.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getContext](DMenuItemExpandableItemMenu.md#getcontext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item.ts#L19)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getGlobalPosition](DMenuItemExpandableItemMenu.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getHeight](DMenuItemExpandableItemMenu.md#getheight)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getLocalBounds](DMenuItemExpandableItemMenu.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getOverflowMask](DMenuItemExpandableItemMenu.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L251)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getParentOfSize](DMenuItemExpandableItemMenu.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

___

### getSelection

▸ `Protected` **getSelection**(): ``null`` \| [`DMenuItemBaseSelection`](../interfaces/DMenuItemBaseSelection.md)

#### Returns

``null`` \| [`DMenuItemBaseSelection`](../interfaces/DMenuItemBaseSelection.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getSelection](DMenuItemExpandableItemMenu.md#getselection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L62)

___

### getTextAlpha

▸ `Protected` **getTextAlpha**(`theme`, `state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getTextAlpha](DMenuItemExpandableItemMenu.md#gettextalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:318](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L318)

___

### getTextColor

▸ `Protected` **getTextColor**(`theme`, `state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getTextColor](DMenuItemExpandableItemMenu.md#gettextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L303)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getThemeDefault](DMenuItemExpandableItemMenu.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getType](DMenuItemExpandableItemMenu.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable-item-menu.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable-item-menu.ts#L19)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getWidth](DMenuItemExpandableItemMenu.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getX](DMenuItemExpandableItemMenu.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[getY](DMenuItemExpandableItemMenu.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[hasDirty](DMenuItemExpandableItemMenu.md#hasdirty)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[hasRefitableHeight](DMenuItemExpandableItemMenu.md#hasrefitableheight)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[hasRefitableWidth](DMenuItemExpandableItemMenu.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hasSelection

▸ `Protected` **hasSelection**(`target`): target is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is Object

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[hasSelection](DMenuItemExpandableItemMenu.md#hasselection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L58)

___

### hide

▸ **hide**(): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[hide](DMenuItemExpandableItemMenu.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

___

### hideText

▸ `Protected` **hideText**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[hideText](DMenuItemExpandableItemMenu.md#hidetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L366)

___

### init

▸ `Protected` **init**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[init](DMenuItemExpandableItemMenu.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L29)

___

### initHover

▸ `Protected` **initHover**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[initHover](DMenuItemExpandableItemMenu.md#inithover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L34)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[initReflowable](DMenuItemExpandableItemMenu.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[isDirty](DMenuItemExpandableItemMenu.md#isdirty)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[isEventTarget](DMenuItemExpandableItemMenu.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[isHidden](DMenuItemExpandableItemMenu.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[isHierarchyDirty](DMenuItemExpandableItemMenu.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1474)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[isRefitable](DMenuItemExpandableItemMenu.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L176)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[isShown](DMenuItemExpandableItemMenu.md#isshown)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[listenerCount](DMenuItemExpandableItemMenu.md#listenercount)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[listeners](DMenuItemExpandableItemMenu.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newImage

▸ `Protected` **newImage**(`theme`, `options?`): [`DImagePiece`](DImagePiece.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Returns

[`DImagePiece`](DImagePiece.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[newImage](DMenuItemExpandableItemMenu.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L121)

___

### newImages

▸ `Protected` **newImages**(`theme`, `options?`): [`DImagePiece`](DImagePiece.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[newImages](DMenuItemExpandableItemMenu.md#newimages)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L102)

___

### newMenu

▸ `Protected` **newMenu**(`options?`): [`DMenu`](DMenu.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\> |

#### Returns

[`DMenu`](DMenu.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[newMenu](DMenuItemExpandableItemMenu.md#newmenu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L50)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[off](DMenuItemExpandableItemMenu.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[on](DMenuItemExpandableItemMenu.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[on](DMenuItemExpandableItemMenu.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onBlur](DMenuItemExpandableItemMenu.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onChildBlur](DMenuItemExpandableItemMenu.md#onchildblur)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onChildFocus](DMenuItemExpandableItemMenu.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onChildrenChange](DMenuItemExpandableItemMenu.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1034)

___

### onClick

▸ `Protected` **onClick**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onClick](DMenuItemExpandableItemMenu.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L40)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onDblClick](DMenuItemExpandableItemMenu.md#ondblclick)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onDown](DMenuItemExpandableItemMenu.md#ondown)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onDownThis](DMenuItemExpandableItemMenu.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onFocus](DMenuItemExpandableItemMenu.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onHierarchyDirty](DMenuItemExpandableItemMenu.md#onhierarchydirty)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onKeyDown](DMenuItemExpandableItemMenu.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L114)

___

### onKeyDownActivate

▸ `Protected` **onKeyDownActivate**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onKeyDownActivate](DMenuItemExpandableItemMenu.md#onkeydownactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L90)

___

### onKeyDownArrowRight

▸ `Protected` **onKeyDownArrowRight**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onKeyDownArrowRight](DMenuItemExpandableItemMenu.md#onkeydownarrowright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L121)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onKeyUp](DMenuItemExpandableItemMenu.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1807](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1807)

___

### onMenuSelect

▸ `Protected` **onMenuSelect**(`value`, `item`, `menu`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `item` | [`DMenuItem`](DMenuItem.md)<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\> |
| `menu` | [`DMenu`](DMenu.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onMenuSelect](DMenuItemExpandableItemMenu.md#onmenuselect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L107)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onMove](DMenuItemExpandableItemMenu.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1051)

___

### onOpen

▸ `Protected` **onOpen**(`menu`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu` | [`DMenu`](DMenu.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Overrides

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onOpen](DMenuItemExpandableItemMenu.md#onopen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable-item-menu.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-sided-item-expandable-item-menu.ts#L15)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onOut](DMenuItemExpandableItemMenu.md#onout)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onOver](DMenuItemExpandableItemMenu.md#onover)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onParentMove](DMenuItemExpandableItemMenu.md#onparentmove)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onParentResize](DMenuItemExpandableItemMenu.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1750)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onRefit](DMenuItemExpandableItemMenu.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onReflow](DMenuItemExpandableItemMenu.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L374)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onResize](DMenuItemExpandableItemMenu.md#onresize)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onScale](DMenuItemExpandableItemMenu.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

___

### onSelect

▸ `Protected` **onSelect**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onSelect](DMenuItemExpandableItemMenu.md#onselect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L100)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onShortcut](DMenuItemExpandableItemMenu.md#onshortcut)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onSkew](DMenuItemExpandableItemMenu.md#onskew)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onStateChange](DMenuItemExpandableItemMenu.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L135)

___

### onTextChange

▸ `Protected` **onTextChange**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onTextChange](DMenuItemExpandableItemMenu.md#ontextchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L201)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onUp](DMenuItemExpandableItemMenu.md#onup)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onUpThis](DMenuItemExpandableItemMenu.md#onupthis)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[onWheel](DMenuItemExpandableItemMenu.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[once](DMenuItemExpandableItemMenu.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[once](DMenuItemExpandableItemMenu.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[open](DMenuItemExpandableItemMenu.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L73)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[reflow](DMenuItemExpandableItemMenu.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[removeAllListeners](DMenuItemExpandableItemMenu.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[removeAllListeners](DMenuItemExpandableItemMenu.md#removealllisteners)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[removeChild](DMenuItemExpandableItemMenu.md#removechild)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[removeChildAt](DMenuItemExpandableItemMenu.md#removechildat)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[removeChildren](DMenuItemExpandableItemMenu.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[removeListener](DMenuItemExpandableItemMenu.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[removeListener](DMenuItemExpandableItemMenu.md#removelistener)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[render](DMenuItemExpandableItemMenu.md#render)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[renderAdvanced](DMenuItemExpandableItemMenu.md#renderadvanced)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[resize](DMenuItemExpandableItemMenu.md#resize)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[setChildIndex](DMenuItemExpandableItemMenu.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[setFocused](DMenuItemExpandableItemMenu.md#setfocused)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[setHeight](DMenuItemExpandableItemMenu.md#setheight)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[setParent](DMenuItemExpandableItemMenu.md#setparent)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[setTransform](DMenuItemExpandableItemMenu.md#settransform)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[setWidth](DMenuItemExpandableItemMenu.md#setwidth)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[setX](DMenuItemExpandableItemMenu.md#setx)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[setY](DMenuItemExpandableItemMenu.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DMenuSidedItemExpandableItemMenu`](DMenuSidedItemExpandableItemMenu.md)<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[show](DMenuItemExpandableItemMenu.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### showText

▸ `Protected` **showText**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[showText](DMenuItemExpandableItemMenu.md#showtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L358)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[sortChildren](DMenuItemExpandableItemMenu.md#sortchildren)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[swapChildren](DMenuItemExpandableItemMenu.md#swapchildren)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toCursor](DMenuItemExpandableItemMenu.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toDirty](DMenuItemExpandableItemMenu.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1432)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toGlobal](DMenuItemExpandableItemMenu.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toHasDirty](DMenuItemExpandableItemMenu.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toHierarchyDirty](DMenuItemExpandableItemMenu.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1457)

___

### toImageOptions

▸ `Protected` **toImageOptions**(`theme`, `options?`): `undefined` \| [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Returns

`undefined` \| [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md)

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toImageOptions](DMenuItemExpandableItemMenu.md#toimageoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L114)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toLocal](DMenuItemExpandableItemMenu.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toMenu

▸ `Protected` **toMenu**(`options?`): [`DMenu`](DMenu.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DMenu`](DMenu.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toMenu](DMenuItemExpandableItemMenu.md#tomenu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L42)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toParentHasDirty](DMenuItemExpandableItemMenu.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toParentHierarchyDirty](DMenuItemExpandableItemMenu.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toParentResized](DMenuItemExpandableItemMenu.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[toggle](DMenuItemExpandableItemMenu.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-menu.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-menu.ts#L91)

___

### updateText

▸ `Protected` **updateText**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[updateText](DMenuItemExpandableItemMenu.md#updatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L144)

___

### updateTextAndImage

▸ `Protected` **updateTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[updateTextAndImage](DMenuItemExpandableItemMenu.md#updatetextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L149)

___

### updateTextColor

▸ `Protected` **updateTextColor**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DDynamicText`](DDynamicText.md) |

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[updateTextColor](DMenuItemExpandableItemMenu.md#updatetextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L333)

___

### updateTextPosition

▸ `Protected` **updateTextPosition**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DDynamicText`](DDynamicText.md) |

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[updateTextPosition](DMenuItemExpandableItemMenu.md#updatetextposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L263)

___

### updateTextValue

▸ `Protected` **updateTextValue**(): `void`

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[updateTextValue](DMenuItemExpandableItemMenu.md#updatetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L340)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[updateTransform](DMenuItemExpandableItemMenu.md#updatetransform)

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

[DMenuItemExpandableItemMenu](DMenuItemExpandableItemMenu.md).[mixin](DMenuItemExpandableItemMenu.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
