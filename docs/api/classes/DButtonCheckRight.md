[Winter Cardinal UI - v0.374.0](../index.md) / DButtonCheckRight

# Class: DButtonCheckRight\<VALUE, THEME, OPTIONS\>

A base class for button classes.
See [DButtonBaseEvents](../interfaces/DButtonBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeButtonCheck`](../interfaces/DThemeButtonCheck.md)\<`VALUE`\> = [`DThemeButtonCheck`](../interfaces/DThemeButtonCheck.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DButtonCheckOptions`](../interfaces/DButtonCheckOptions.md)\<`VALUE`, `THEME`\> = [`DButtonCheckOptions`](../interfaces/DButtonCheckOptions.md)\<`VALUE`, `THEME`\> |

## Hierarchy

- [`DButtonCheck`](DButtonCheck.md)\<`VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DButtonCheckRight`**

## Table of contents

### Constructors

- [constructor](DButtonCheckRight.md#constructor)

### Properties

- [\_accessibleActive](DButtonCheckRight.md#_accessibleactive)
- [\_accessibleDiv](DButtonCheckRight.md#_accessiblediv)
- [\_auto](DButtonCheckRight.md#_auto)
- [\_background](DButtonCheckRight.md#_background)
- [\_border](DButtonCheckRight.md#_border)
- [\_bounds](DButtonCheckRight.md#_bounds)
- [\_clearType](DButtonCheckRight.md#_cleartype)
- [\_corner](DButtonCheckRight.md#_corner)
- [\_cursor](DButtonCheckRight.md#_cursor)
- [\_destroyed](DButtonCheckRight.md#_destroyed)
- [\_images](DButtonCheckRight.md#_images)
- [\_isGrouped](DButtonCheckRight.md#_isgrouped)
- [\_isOverflowMaskEnabled](DButtonCheckRight.md#_isoverflowmaskenabled)
- [\_isTextVisible](DButtonCheckRight.md#_istextvisible)
- [\_isToggle](DButtonCheckRight.md#_istoggle)
- [\_lastDownPoint](DButtonCheckRight.md#_lastdownpoint)
- [\_lastSortedIndex](DButtonCheckRight.md#_lastsortedindex)
- [\_mask](DButtonCheckRight.md#_mask)
- [\_options](DButtonCheckRight.md#_options)
- [\_outline](DButtonCheckRight.md#_outline)
- [\_overflowMask](DButtonCheckRight.md#_overflowmask)
- [\_padding](DButtonCheckRight.md#_padding)
- [\_reflowable](DButtonCheckRight.md#_reflowable)
- [\_shortcuts](DButtonCheckRight.md#_shortcuts)
- [\_snippet](DButtonCheckRight.md#_snippet)
- [\_tempDisplayObjectParent](DButtonCheckRight.md#_tempdisplayobjectparent)
- [\_text](DButtonCheckRight.md#_text)
- [\_textAlign](DButtonCheckRight.md#_textalign)
- [\_textAlpha](DButtonCheckRight.md#_textalpha)
- [\_textColor](DButtonCheckRight.md#_textcolor)
- [\_textFormatter](DButtonCheckRight.md#_textformatter)
- [\_textStyle](DButtonCheckRight.md#_textstyle)
- [\_textValue](DButtonCheckRight.md#_textvalue)
- [\_textValueComputed](DButtonCheckRight.md#_textvaluecomputed)
- [\_title](DButtonCheckRight.md#_title)
- [\_when](DButtonCheckRight.md#_when)
- [\_zIndex](DButtonCheckRight.md#_zindex)
- [accessible](DButtonCheckRight.md#accessible)
- [accessibleChildren](DButtonCheckRight.md#accessiblechildren)
- [accessibleHint](DButtonCheckRight.md#accessiblehint)
- [accessiblePointerEvents](DButtonCheckRight.md#accessiblepointerevents)
- [accessibleTitle](DButtonCheckRight.md#accessibletitle)
- [accessibleType](DButtonCheckRight.md#accessibletype)
- [alpha](DButtonCheckRight.md#alpha)
- [angle](DButtonCheckRight.md#angle)
- [buttonMode](DButtonCheckRight.md#buttonmode)
- [cacheAsBitmap](DButtonCheckRight.md#cacheasbitmap)
- [children](DButtonCheckRight.md#children)
- [cursor](DButtonCheckRight.md#cursor)
- [filterArea](DButtonCheckRight.md#filterarea)
- [filters](DButtonCheckRight.md#filters)
- [hitArea](DButtonCheckRight.md#hitarea)
- [interactive](DButtonCheckRight.md#interactive)
- [interactiveChildren](DButtonCheckRight.md#interactivechildren)
- [isMask](DButtonCheckRight.md#ismask)
- [isSprite](DButtonCheckRight.md#issprite)
- [localTransform](DButtonCheckRight.md#localtransform)
- [mask](DButtonCheckRight.md#mask)
- [name](DButtonCheckRight.md#name)
- [parent](DButtonCheckRight.md#parent)
- [pivot](DButtonCheckRight.md#pivot)
- [renderable](DButtonCheckRight.md#renderable)
- [rotation](DButtonCheckRight.md#rotation)
- [sortDirty](DButtonCheckRight.md#sortdirty)
- [sortableChildren](DButtonCheckRight.md#sortablechildren)
- [transform](DButtonCheckRight.md#transform)
- [visible](DButtonCheckRight.md#visible)
- [worldAlpha](DButtonCheckRight.md#worldalpha)
- [worldTransform](DButtonCheckRight.md#worldtransform)
- [worldVisible](DButtonCheckRight.md#worldvisible)
- [zIndex](DButtonCheckRight.md#zindex)
- [LAYOUTER](DButtonCheckRight.md#layouter)
- [WORK\_CONTAINS\_POINT](DButtonCheckRight.md#work_contains_point)

### Accessors

- [background](DButtonCheckRight.md#background)
- [border](DButtonCheckRight.md#border)
- [corner](DButtonCheckRight.md#corner)
- [height](DButtonCheckRight.md#height)
- [image](DButtonCheckRight.md#image)
- [isGrouped](DButtonCheckRight.md#isgrouped)
- [isToggle](DButtonCheckRight.md#istoggle)
- [options](DButtonCheckRight.md#options)
- [outline](DButtonCheckRight.md#outline)
- [padding](DButtonCheckRight.md#padding)
- [position](DButtonCheckRight.md#position)
- [reflowable](DButtonCheckRight.md#reflowable)
- [scale](DButtonCheckRight.md#scale)
- [shadow](DButtonCheckRight.md#shadow)
- [skew](DButtonCheckRight.md#skew)
- [snippet](DButtonCheckRight.md#snippet)
- [state](DButtonCheckRight.md#state)
- [text](DButtonCheckRight.md#text)
- [theme](DButtonCheckRight.md#theme)
- [title](DButtonCheckRight.md#title)
- [type](DButtonCheckRight.md#type)
- [unsafe](DButtonCheckRight.md#unsafe)
- [weight](DButtonCheckRight.md#weight)
- [width](DButtonCheckRight.md#width)
- [x](DButtonCheckRight.md#x)
- [y](DButtonCheckRight.md#y)

### Methods

- [\_calculateBounds](DButtonCheckRight.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DButtonCheckRight.md#_recursivepostupdatetransform)
- [\_render](DButtonCheckRight.md#_render)
- [activate](DButtonCheckRight.md#activate)
- [addChild](DButtonCheckRight.md#addchild)
- [addChildAt](DButtonCheckRight.md#addchildat)
- [addListener](DButtonCheckRight.md#addlistener)
- [applyTitle](DButtonCheckRight.md#applytitle)
- [blur](DButtonCheckRight.md#blur)
- [calculateBounds](DButtonCheckRight.md#calculatebounds)
- [computeTextValue](DButtonCheckRight.md#computetextvalue)
- [containsGlobalPoint](DButtonCheckRight.md#containsglobalpoint)
- [containsLocalPoint](DButtonCheckRight.md#containslocalpoint)
- [containsPoint](DButtonCheckRight.md#containspoint)
- [createOrUpdateText](DButtonCheckRight.md#createorupdatetext)
- [destroy](DButtonCheckRight.md#destroy)
- [displayObjectUpdateTransform](DButtonCheckRight.md#displayobjectupdatetransform)
- [emit](DButtonCheckRight.md#emit)
- [eventNames](DButtonCheckRight.md#eventnames)
- [focus](DButtonCheckRight.md#focus)
- [focusOnClosest](DButtonCheckRight.md#focusonclosest)
- [getBounds](DButtonCheckRight.md#getbounds)
- [getChildAt](DButtonCheckRight.md#getchildat)
- [getChildByName](DButtonCheckRight.md#getchildbyname)
- [getChildIndex](DButtonCheckRight.md#getchildindex)
- [getClearType](DButtonCheckRight.md#getcleartype)
- [getClippingRect](DButtonCheckRight.md#getclippingrect)
- [getGlobalPosition](DButtonCheckRight.md#getglobalposition)
- [getHeight](DButtonCheckRight.md#getheight)
- [getLocalBounds](DButtonCheckRight.md#getlocalbounds)
- [getOverflowMask](DButtonCheckRight.md#getoverflowmask)
- [getParentOfSize](DButtonCheckRight.md#getparentofsize)
- [getTextAlpha](DButtonCheckRight.md#gettextalpha)
- [getTextColor](DButtonCheckRight.md#gettextcolor)
- [getThemeDefault](DButtonCheckRight.md#getthemedefault)
- [getType](DButtonCheckRight.md#gettype)
- [getWidth](DButtonCheckRight.md#getwidth)
- [getX](DButtonCheckRight.md#getx)
- [getY](DButtonCheckRight.md#gety)
- [hasDirty](DButtonCheckRight.md#hasdirty)
- [hasRefitableHeight](DButtonCheckRight.md#hasrefitableheight)
- [hasRefitableWidth](DButtonCheckRight.md#hasrefitablewidth)
- [hide](DButtonCheckRight.md#hide)
- [hideText](DButtonCheckRight.md#hidetext)
- [init](DButtonCheckRight.md#init)
- [initOnPress](DButtonCheckRight.md#initonpress)
- [initReflowable](DButtonCheckRight.md#initreflowable)
- [isDirty](DButtonCheckRight.md#isdirty)
- [isEventTarget](DButtonCheckRight.md#iseventtarget)
- [isHidden](DButtonCheckRight.md#ishidden)
- [isHierarchyDirty](DButtonCheckRight.md#ishierarchydirty)
- [isRefitable](DButtonCheckRight.md#isrefitable)
- [isShown](DButtonCheckRight.md#isshown)
- [listenerCount](DButtonCheckRight.md#listenercount)
- [listeners](DButtonCheckRight.md#listeners)
- [newImage](DButtonCheckRight.md#newimage)
- [newImages](DButtonCheckRight.md#newimages)
- [newPadding](DButtonCheckRight.md#newpadding)
- [newText](DButtonCheckRight.md#newtext)
- [off](DButtonCheckRight.md#off)
- [on](DButtonCheckRight.md#on)
- [onActivate](DButtonCheckRight.md#onactivate)
- [onActivateKeyDown](DButtonCheckRight.md#onactivatekeydown)
- [onActivateKeyUp](DButtonCheckRight.md#onactivatekeyup)
- [onBlur](DButtonCheckRight.md#onblur)
- [onChildBlur](DButtonCheckRight.md#onchildblur)
- [onChildFocus](DButtonCheckRight.md#onchildfocus)
- [onChildrenChange](DButtonCheckRight.md#onchildrenchange)
- [onClick](DButtonCheckRight.md#onclick)
- [onDblClick](DButtonCheckRight.md#ondblclick)
- [onDown](DButtonCheckRight.md#ondown)
- [onDownThis](DButtonCheckRight.md#ondownthis)
- [onFocus](DButtonCheckRight.md#onfocus)
- [onHierarchyDirty](DButtonCheckRight.md#onhierarchydirty)
- [onInactivate](DButtonCheckRight.md#oninactivate)
- [onKeyDown](DButtonCheckRight.md#onkeydown)
- [onKeyUp](DButtonCheckRight.md#onkeyup)
- [onMove](DButtonCheckRight.md#onmove)
- [onOut](DButtonCheckRight.md#onout)
- [onOver](DButtonCheckRight.md#onover)
- [onParentMove](DButtonCheckRight.md#onparentmove)
- [onParentResize](DButtonCheckRight.md#onparentresize)
- [onPress](DButtonCheckRight.md#onpress)
- [onRefit](DButtonCheckRight.md#onrefit)
- [onReflow](DButtonCheckRight.md#onreflow)
- [onResize](DButtonCheckRight.md#onresize)
- [onScale](DButtonCheckRight.md#onscale)
- [onShortcut](DButtonCheckRight.md#onshortcut)
- [onSkew](DButtonCheckRight.md#onskew)
- [onStateChange](DButtonCheckRight.md#onstatechange)
- [onTextChange](DButtonCheckRight.md#ontextchange)
- [onToggleEnd](DButtonCheckRight.md#ontoggleend)
- [onToggleStart](DButtonCheckRight.md#ontogglestart)
- [onUnpress](DButtonCheckRight.md#onunpress)
- [onUp](DButtonCheckRight.md#onup)
- [onUpThis](DButtonCheckRight.md#onupthis)
- [onWheel](DButtonCheckRight.md#onwheel)
- [once](DButtonCheckRight.md#once)
- [reflow](DButtonCheckRight.md#reflow)
- [removeAllListeners](DButtonCheckRight.md#removealllisteners)
- [removeChild](DButtonCheckRight.md#removechild)
- [removeChildAt](DButtonCheckRight.md#removechildat)
- [removeChildren](DButtonCheckRight.md#removechildren)
- [removeListener](DButtonCheckRight.md#removelistener)
- [render](DButtonCheckRight.md#render)
- [renderAdvanced](DButtonCheckRight.md#renderadvanced)
- [resize](DButtonCheckRight.md#resize)
- [setChildIndex](DButtonCheckRight.md#setchildindex)
- [setFocused](DButtonCheckRight.md#setfocused)
- [setHeight](DButtonCheckRight.md#setheight)
- [setParent](DButtonCheckRight.md#setparent)
- [setTransform](DButtonCheckRight.md#settransform)
- [setWidth](DButtonCheckRight.md#setwidth)
- [setX](DButtonCheckRight.md#setx)
- [setY](DButtonCheckRight.md#sety)
- [show](DButtonCheckRight.md#show)
- [showText](DButtonCheckRight.md#showtext)
- [sortChildren](DButtonCheckRight.md#sortchildren)
- [swapChildren](DButtonCheckRight.md#swapchildren)
- [toCursor](DButtonCheckRight.md#tocursor)
- [toDirty](DButtonCheckRight.md#todirty)
- [toGlobal](DButtonCheckRight.md#toglobal)
- [toHasDirty](DButtonCheckRight.md#tohasdirty)
- [toHierarchyDirty](DButtonCheckRight.md#tohierarchydirty)
- [toImageOptions](DButtonCheckRight.md#toimageoptions)
- [toLocal](DButtonCheckRight.md#tolocal)
- [toParentHasDirty](DButtonCheckRight.md#toparenthasdirty)
- [toParentHierarchyDirty](DButtonCheckRight.md#toparenthierarchydirty)
- [toParentResized](DButtonCheckRight.md#toparentresized)
- [toggle](DButtonCheckRight.md#toggle)
- [updateText](DButtonCheckRight.md#updatetext)
- [updateTextAndImage](DButtonCheckRight.md#updatetextandimage)
- [updateTextColor](DButtonCheckRight.md#updatetextcolor)
- [updateTextPosition](DButtonCheckRight.md#updatetextposition)
- [updateTextValue](DButtonCheckRight.md#updatetextvalue)
- [updateTransform](DButtonCheckRight.md#updatetransform)
- [mixin](DButtonCheckRight.md#mixin)

## Constructors

### constructor

• **new DButtonCheckRight**\<`VALUE`, `THEME`, `OPTIONS`\>(`options?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeButtonCheck`](../interfaces/DThemeButtonCheck.md)\<`VALUE`\> = [`DThemeButtonCheck`](../interfaces/DThemeButtonCheck.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DButtonCheckOptions`](../interfaces/DButtonCheckOptions.md)\<`VALUE`, `THEME`\> = [`DButtonCheckOptions`](../interfaces/DButtonCheckOptions.md)\<`VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[constructor](DButtonCheck.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:799](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L799)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_accessibleActive](DButtonCheck.md#_accessibleactive)

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

[DButtonCheck](DButtonCheck.md).[_accessibleDiv](DButtonCheck.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_auto](DButtonCheck.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:778](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L778)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_background](DButtonCheck.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_border](DButtonCheck.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_bounds](DButtonCheck.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_clearType](DButtonCheck.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_corner](DButtonCheck.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:776](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L776)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_cursor](DButtonCheck.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L797)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_destroyed](DButtonCheck.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_images

• `Protected` **\_images**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_images](DButtonCheck.md#_images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L95)

___

### \_isGrouped

• `Protected` `Optional` **\_isGrouped**: `boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_isGrouped](DButtonCheck.md#_isgrouped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L111)

___

### \_isOverflowMaskEnabled

• `Protected` **\_isOverflowMaskEnabled**: `boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_isOverflowMaskEnabled](DButtonCheck.md#_isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L172)

___

### \_isTextVisible

• `Protected` **\_isTextVisible**: `boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_isTextVisible](DButtonCheck.md#_istextvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L174)

___

### \_isToggle

• `Protected` `Optional` **\_isToggle**: `boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_isToggle](DButtonCheck.md#_istoggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L110)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_lastDownPoint](DButtonCheck.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_lastSortedIndex](DButtonCheck.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Sprite` \| `Graphics`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_mask](DButtonCheck.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_options](DButtonCheck.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L772)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_outline](DButtonCheck.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_overflowMask](DButtonCheck.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L173)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_padding](DButtonCheck.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_reflowable](DButtonCheck.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_shortcuts](DButtonCheck.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_snippet](DButtonCheck.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_tempDisplayObjectParent](DButtonCheck.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_text](DButtonCheck.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L164)

___

### \_textAlign

• `Protected` **\_textAlign**: [`DTextBaseAlign`](../interfaces/DTextBaseAlign.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_textAlign](DButtonCheck.md#_textalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L170)

___

### \_textAlpha

• `Protected` **\_textAlpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_textAlpha](DButtonCheck.md#_textalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L168)

___

### \_textColor

• `Protected` **\_textColor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_textColor](DButtonCheck.md#_textcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L167)

___

### \_textFormatter

• `Protected` **\_textFormatter**: (`value`: `VALUE`, `caller`: `any`) => `string`

#### Type declaration

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_textFormatter](DButtonCheck.md#_textformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L171)

___

### \_textStyle

• `Protected` **\_textStyle**: [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_textStyle](DButtonCheck.md#_textstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L169)

___

### \_textValue

• `Protected` `Optional` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_textValue](DButtonCheck.md#_textvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L165)

___

### \_textValueComputed

• `Protected` `Optional` **\_textValueComputed**: `VALUE`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_textValueComputed](DButtonCheck.md#_textvaluecomputed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L166)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_title](DButtonCheck.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_when

• `Protected` `Optional` **\_when**: [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_when](DButtonCheck.md#_when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L112)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_zIndex](DButtonCheck.md#_zindex)

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

[DButtonCheck](DButtonCheck.md).[accessible](DButtonCheck.md#accessible)

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

```ts
true
```

#### Inherited from

[DButtonCheck](DButtonCheck.md).[accessibleChildren](DButtonCheck.md#accessiblechildren)

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

[DButtonCheck](DButtonCheck.md).[accessibleHint](DButtonCheck.md#accessiblehint)

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

```ts
'auto'
```

#### Inherited from

[DButtonCheck](DButtonCheck.md).[accessiblePointerEvents](DButtonCheck.md#accessiblepointerevents)

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

[DButtonCheck](DButtonCheck.md).[accessibleTitle](DButtonCheck.md#accessibletitle)

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

```ts
'button'
```

#### Inherited from

[DButtonCheck](DButtonCheck.md).[accessibleType](DButtonCheck.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DButtonCheck](DButtonCheck.md).[alpha](DButtonCheck.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DButtonCheck](DButtonCheck.md).[angle](DButtonCheck.md#angle)

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

[DButtonCheck](DButtonCheck.md).[buttonMode](DButtonCheck.md#buttonmode)

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

[DButtonCheck](DButtonCheck.md).[cacheAsBitmap](DButtonCheck.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DButtonCheck](DButtonCheck.md).[children](DButtonCheck.md#children)

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

[DButtonCheck](DButtonCheck.md).[cursor](DButtonCheck.md#cursor)

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

[DButtonCheck](DButtonCheck.md).[filterArea](DButtonCheck.md#filterarea)

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

[DButtonCheck](DButtonCheck.md).[filters](DButtonCheck.md#filters)

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

[DButtonCheck](DButtonCheck.md).[hitArea](DButtonCheck.md#hitarea)

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

[DButtonCheck](DButtonCheck.md).[interactive](DButtonCheck.md#interactive)

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

[DButtonCheck](DButtonCheck.md).[interactiveChildren](DButtonCheck.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DButtonCheck](DButtonCheck.md).[isMask](DButtonCheck.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DButtonCheck](DButtonCheck.md).[isSprite](DButtonCheck.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DButtonCheck](DButtonCheck.md).[localTransform](DButtonCheck.md#localtransform)

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

[DButtonCheck](DButtonCheck.md).[mask](DButtonCheck.md#mask)

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

[DButtonCheck](DButtonCheck.md).[name](DButtonCheck.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DButtonCheck](DButtonCheck.md).[parent](DButtonCheck.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DButtonCheck](DButtonCheck.md).[pivot](DButtonCheck.md#pivot)

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

[DButtonCheck](DButtonCheck.md).[renderable](DButtonCheck.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DButtonCheck](DButtonCheck.md).[rotation](DButtonCheck.md#rotation)

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

[DButtonCheck](DButtonCheck.md).[sortDirty](DButtonCheck.md#sortdirty)

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

[DButtonCheck](DButtonCheck.md).[sortableChildren](DButtonCheck.md#sortablechildren)

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

[DButtonCheck](DButtonCheck.md).[transform](DButtonCheck.md#transform)

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

[DButtonCheck](DButtonCheck.md).[visible](DButtonCheck.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DButtonCheck](DButtonCheck.md).[worldAlpha](DButtonCheck.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DButtonCheck](DButtonCheck.md).[worldTransform](DButtonCheck.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DButtonCheck](DButtonCheck.md).[worldVisible](DButtonCheck.md#worldvisible)

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

[DButtonCheck](DButtonCheck.md).[zIndex](DButtonCheck.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[LAYOUTER](DButtonCheck.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L94)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[WORK_CONTAINS_POINT](DButtonCheck.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L768)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DButtonCheck.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1464)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DButtonCheck.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1468)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DButtonCheck.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DButtonCheck.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1383)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DButtonCheck.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1387)

___

### image

• `get` **image**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Inherited from

DButtonCheck.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L125)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DButtonCheck.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L129)

___

### isGrouped

• `get` **isGrouped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DButtonCheck.isGrouped

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L145)

• `set` **isGrouped**(`isGrouped`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isGrouped` | `boolean` |

#### Returns

`void`

#### Inherited from

DButtonCheck.isGrouped

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L149)

___

### isToggle

• `get` **isToggle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DButtonCheck.isToggle

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L141)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DButtonCheck.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1683](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1683)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DButtonCheck.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1472)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DButtonCheck.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1456)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DButtonCheck.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1442)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DButtonCheck.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1121)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DButtonCheck.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1447](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1447)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DButtonCheck.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DButtonCheck.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1800](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1800)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DButtonCheck.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1452](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1452)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DButtonCheck.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1117)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DButtonCheck.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

___

### text

• `get` **text**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Inherited from

DButtonCheck.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L201)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DButtonCheck.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L194)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DButtonCheck.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1687)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DButtonCheck.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DButtonCheck.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1480)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DButtonCheck.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1484)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DButtonCheck.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1239)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DButtonCheck.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1476)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DButtonCheck.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1142)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DButtonCheck.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1324)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DButtonCheck.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1328)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DButtonCheck.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1244)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DButtonCheck.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1248)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DButtonCheck.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1284)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DButtonCheck.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1288)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_calculateBounds](DButtonCheck.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2023](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2023)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_recursivePostUpdateTransform](DButtonCheck.md#_recursivepostupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8641

___

### \_render

▸ **_render**(`renderer`): `void`

To be overridden by the subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[_render](DButtonCheck.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8413

___

### activate

▸ **activate**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[activate](DButtonCheck.md#activate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L200)

___

### addChild

▸ **addChild**\<`TChildren`\>(`...child`): `TChildren`[``0``]

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

[DButtonCheck](DButtonCheck.md).[addChild](DButtonCheck.md#addchild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8315

___

### addChildAt

▸ **addChildAt**\<`T`\>(`child`, `index`): `T`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `T` | The child to add |
| `index` | `number` | The index to place the child in |

#### Returns

`T`

The child that was added.

#### Inherited from

[DButtonCheck](DButtonCheck.md).[addChildAt](DButtonCheck.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[addListener](DButtonCheck.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[addListener](DButtonCheck.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[applyTitle](DButtonCheck.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:388](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L388)

___

### blur

▸ **blur**(`recursively?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[blur](DButtonCheck.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1599](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1599)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[calculateBounds](DButtonCheck.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### computeTextValue

▸ **computeTextValue**(): `undefined` \| `VALUE`

#### Returns

`undefined` \| `VALUE`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[computeTextValue](DButtonCheck.md#computetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L209)

___

### containsGlobalPoint

▸ **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[containsGlobalPoint](DButtonCheck.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2048](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2048)

___

### containsLocalPoint

▸ **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[containsLocalPoint](DButtonCheck.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2052](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2052)

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

[DButtonCheck](DButtonCheck.md).[containsPoint](DButtonCheck.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2039](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2039)

___

### createOrUpdateText

▸ **createOrUpdateText**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[createOrUpdateText](DButtonCheck.md#createorupdatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L224)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[destroy](DButtonCheck.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:312](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L312)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

#### Returns

`void`

**`Memberof`**

PIXI.DisplayObject#

**`Function`**

displayObjectUpdateTransform

#### Inherited from

[DButtonCheck](DButtonCheck.md).[displayObjectUpdateTransform](DButtonCheck.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

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

[DButtonCheck](DButtonCheck.md).[emit](DButtonCheck.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DButtonCheck](DButtonCheck.md).[eventNames](DButtonCheck.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[focus](DButtonCheck.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1595](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1595)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[focusOnClosest](DButtonCheck.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1963](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1963)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skipUpdate?` | `boolean` | Setting to `true` will stop the transforms of the scene graph from being updated. This means the calculation returned MAY be out of date BUT will give you a nice performance boost. |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getBounds](DButtonCheck.md#getbounds)

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

[DButtonCheck](DButtonCheck.md).[getChildAt](DButtonCheck.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8351

___

### getChildByName

▸ **getChildByName**(`name`): `DisplayObject`

Returns the display object in the container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |

#### Returns

`DisplayObject`

The child with the specified name.

**`Method`**

getChildByName

**`Memberof`**

PIXI.Container#

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getChildByName](DButtonCheck.md#getchildbyname)

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

[DButtonCheck](DButtonCheck.md).[getChildIndex](DButtonCheck.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getClearType](DButtonCheck.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1208)

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

[DButtonCheck](DButtonCheck.md).[getClippingRect](DButtonCheck.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2065](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2065)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point?` | `Point` | The point to write the global value to. |
| `skipUpdate?` | `boolean` | Setting to true will stop the transforms of the scene graph from being updated. This means the calculation returned MAY be out of date BUT will give you a nice performance boost. |

#### Returns

`Point`

The updated point.

**`Method`**

getGlobalPosition

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getGlobalPosition](DButtonCheck.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getHeight](DButtonCheck.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

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

[DButtonCheck](DButtonCheck.md).[getLocalBounds](DButtonCheck.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getOverflowMask](DButtonCheck.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L256)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getParentOfSize](DButtonCheck.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1830](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1830)

___

### getTextAlpha

▸ **getTextAlpha**(`theme`, `state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getTextAlpha](DButtonCheck.md#gettextalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L323)

___

### getTextColor

▸ **getTextColor**(`theme`, `state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getTextColor](DButtonCheck.md#gettextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L308)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getThemeDefault](DButtonCheck.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2014](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2014)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DButtonCheck](DButtonCheck.md).[getType](DButtonCheck.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-check-right.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-check-right.ts#L20)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getWidth](DButtonCheck.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1332)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getX](DButtonCheck.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1252)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[getY](DButtonCheck.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[hasDirty](DButtonCheck.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1581](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1581)

___

### hasRefitableHeight

▸ **hasRefitableHeight**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DButtonCheck](DButtonCheck.md).[hasRefitableHeight](DButtonCheck.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1780](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1780)

___

### hasRefitableWidth

▸ **hasRefitableWidth**(`target`): target is DBase\<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase\<any, any\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[hasRefitableWidth](DButtonCheck.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1786](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1786)

___

### hide

▸ **hide**(): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[hide](DButtonCheck.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1513)

___

### hideText

▸ **hideText**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[hideText](DButtonCheck.md#hidetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L371)

___

### init

▸ **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[init](DButtonCheck.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L114)

___

### initOnPress

▸ **initOnPress**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[initOnPress](DButtonCheck.md#initonpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L153)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[initReflowable](DButtonCheck.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1125)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[isDirty](DButtonCheck.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### isEventTarget

▸ **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[isEventTarget](DButtonCheck.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1908](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1908)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[isHidden](DButtonCheck.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1523)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[isHierarchyDirty](DButtonCheck.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### isRefitable

▸ **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DButtonCheck](DButtonCheck.md).[isRefitable](DButtonCheck.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L176)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[isShown](DButtonCheck.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1509)

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

[DButtonCheck](DButtonCheck.md).[listenerCount](DButtonCheck.md#listenercount)

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

[DButtonCheck](DButtonCheck.md).[listeners](DButtonCheck.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newImage

▸ **newImage**(`theme`, `options?`): [`DImagePiece`](DImagePiece.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Returns

[`DImagePiece`](DImagePiece.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[newImage](DButtonCheck.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L121)

___

### newImages

▸ **newImages**(`theme`, `options?`): [`DImagePiece`](DImagePiece.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DButtonCheck](DButtonCheck.md).[newImages](DButtonCheck.md#newimages)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L102)

___

### newPadding

▸ **newPadding**(`theme`, `options?`, `callback?`): [`DBasePadding`](DBasePadding.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |
| `callback?` | () => `void` |

#### Returns

[`DBasePadding`](DBasePadding.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[newPadding](DButtonCheck.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1096](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1096)

___

### newText

▸ **newText**(): [`DDynamicText`](DDynamicText.md)

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[newText](DButtonCheck.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L252)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[off](DButtonCheck.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[on](DButtonCheck.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[on](DButtonCheck.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onActivate

▸ **onActivate**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onActivate](DButtonCheck.md#onactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L216)

___

### onActivateKeyDown

▸ **onActivateKeyDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onActivateKeyDown](DButtonCheck.md#onactivatekeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L253)

___

### onActivateKeyUp

▸ **onActivateKeyUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onActivateKeyUp](DButtonCheck.md#onactivatekeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L263)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onBlur](DButtonCheck.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### onChildBlur

▸ **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onChildBlur](DButtonCheck.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onChildFocus

▸ **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onChildFocus](DButtonCheck.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1651](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1651)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onChildrenChange](DButtonCheck.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1129)

___

### onClick

▸ **onClick**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onClick](DButtonCheck.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L184)

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

[DButtonCheck](DButtonCheck.md).[onDblClick](DButtonCheck.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L190)

___

### onDown

▸ **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onDown](DButtonCheck.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1922](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1922)

___

### onDownThis

▸ **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onDownThis](DButtonCheck.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1929](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1929)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onFocus](DButtonCheck.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onHierarchyDirty](DButtonCheck.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

___

### onInactivate

▸ **onInactivate**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onInactivate](DButtonCheck.md#oninactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L222)

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

[DButtonCheck](DButtonCheck.md).[onKeyDown](DButtonCheck.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L276)

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

[DButtonCheck](DButtonCheck.md).[onKeyUp](DButtonCheck.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L284)

___

### onMove

▸ **onMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[DButtonCheck](DButtonCheck.md).[onMove](DButtonCheck.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1146)

___

### onOut

▸ **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onOut](DButtonCheck.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onOver

▸ **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onOver](DButtonCheck.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1972](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1972)

___

### onParentMove

▸ **onParentMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[DButtonCheck](DButtonCheck.md).[onParentMove](DButtonCheck.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1886](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1886)

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

[DButtonCheck](DButtonCheck.md).[onParentResize](DButtonCheck.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1845](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1845)

___

### onPress

▸ **onPress**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onPress](DButtonCheck.md#onpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:304](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L304)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onRefit](DButtonCheck.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1732)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onReflow](DButtonCheck.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:379](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L379)

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

[DButtonCheck](DButtonCheck.md).[onResize](DButtonCheck.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1212)

___

### onScale

▸ **onScale**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[DButtonCheck](DButtonCheck.md).[onScale](DButtonCheck.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1229)

___

### onShortcut

▸ **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onShortcut](DButtonCheck.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L134)

___

### onSkew

▸ **onSkew**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[DButtonCheck](DButtonCheck.md).[onSkew](DButtonCheck.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1234)

___

### onStateChange

▸ **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onStateChange](DButtonCheck.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L292)

___

### onTextChange

▸ **onTextChange**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onTextChange](DButtonCheck.md#ontextchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L205)

___

### onToggleEnd

▸ **onToggleEnd**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onToggleEnd](DButtonCheck.md#ontoggleend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L243)

___

### onToggleStart

▸ **onToggleStart**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onToggleStart](DButtonCheck.md#ontogglestart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L237)

___

### onUnpress

▸ **onUnpress**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onUnpress](DButtonCheck.md#onunpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L308)

___

### onUp

▸ **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onUp](DButtonCheck.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1940](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1940)

___

### onUpThis

▸ **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[onUpThis](DButtonCheck.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1947](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1947)

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

[DButtonCheck](DButtonCheck.md).[onWheel](DButtonCheck.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1891](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1891)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[once](DButtonCheck.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[once](DButtonCheck.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[reflow](DButtonCheck.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[removeAllListeners](DButtonCheck.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[removeAllListeners](DButtonCheck.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeChild

▸ **removeChild**\<`TChildren`\>(`...child`): `TChildren`[``0``]

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

[DButtonCheck](DButtonCheck.md).[removeChild](DButtonCheck.md#removechild)

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

[DButtonCheck](DButtonCheck.md).[removeChildAt](DButtonCheck.md#removechildat)

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

[DButtonCheck](DButtonCheck.md).[removeChildren](DButtonCheck.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[removeListener](DButtonCheck.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[removeListener](DButtonCheck.md#removelistener)

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

[DButtonCheck](DButtonCheck.md).[render](DButtonCheck.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2004](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2004)

___

### renderAdvanced

▸ **renderAdvanced**(`renderer`): `void`

Render the object using the WebGL renderer and advanced features.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[renderAdvanced](DButtonCheck.md#renderadvanced)

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

[DButtonCheck](DButtonCheck.md).[resize](DButtonCheck.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1158)

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

[DButtonCheck](DButtonCheck.md).[setChildIndex](DButtonCheck.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ **setFocused**(`isFocused`): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[setFocused](DButtonCheck.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1585)

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

[DButtonCheck](DButtonCheck.md).[setHeight](DButtonCheck.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1395](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1395)

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

[DButtonCheck](DButtonCheck.md).[setParent](DButtonCheck.md#setparent)

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

[DButtonCheck](DButtonCheck.md).[setTransform](DButtonCheck.md#settransform)

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

[DButtonCheck](DButtonCheck.md).[setWidth](DButtonCheck.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1336)

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

[DButtonCheck](DButtonCheck.md).[setX](DButtonCheck.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1261)

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

[DButtonCheck](DButtonCheck.md).[setY](DButtonCheck.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1301)

___

### show

▸ **show**(): [`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DButtonCheckRight`](DButtonCheckRight.md)\<`VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DButtonCheck](DButtonCheck.md).[show](DButtonCheck.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### showText

▸ **showText**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[showText](DButtonCheck.md#showtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L363)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[sortChildren](DButtonCheck.md#sortchildren)

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

[DButtonCheck](DButtonCheck.md).[swapChildren](DButtonCheck.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toCursor

▸ **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\> |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toCursor](DButtonCheck.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1100)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toDirty](DButtonCheck.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1527)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform. |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toGlobal](DButtonCheck.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toHasDirty](DButtonCheck.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1536)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toHierarchyDirty](DButtonCheck.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toImageOptions

▸ **toImageOptions**(`theme`, `options?`): `undefined` \| [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Returns

`undefined` \| [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md)

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toImageOptions](DButtonCheck.md#toimageoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L114)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | The DisplayObject to calculate the global position from. |
| `point?` | `IPoint` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform |

#### Returns

`IPoint`

A point object representing the position of this object

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toLocal](DButtonCheck.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toParentHasDirty](DButtonCheck.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1545)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toParentHierarchyDirty](DButtonCheck.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1562](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1562)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toParentResized](DButtonCheck.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1823](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1823)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[toggle](DButtonCheck.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L228)

___

### updateText

▸ **updateText**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[updateText](DButtonCheck.md#updatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L144)

___

### updateTextAndImage

▸ **updateTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[updateTextAndImage](DButtonCheck.md#updatetextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L149)

___

### updateTextColor

▸ **updateTextColor**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DDynamicText`](DDynamicText.md) |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[updateTextColor](DButtonCheck.md#updatetextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L338)

___

### updateTextPosition

▸ **updateTextPosition**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DDynamicText`](DDynamicText.md) |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[updateTextPosition](DButtonCheck.md#updatetextposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L268)

___

### updateTextValue

▸ **updateTextValue**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[updateTextValue](DButtonCheck.md#updatetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L345)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[updateTransform](DButtonCheck.md#updatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8381

___

### mixin

▸ **mixin**(`source`): `void`

Mixes all enumerable properties and methods from a source object to DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `any` | The source of properties and methods to mix in. |

#### Returns

`void`

#### Inherited from

[DButtonCheck](DButtonCheck.md).[mixin](DButtonCheck.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
