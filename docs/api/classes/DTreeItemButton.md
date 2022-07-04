[Winter Cardinal UI - v0.194.0](../index.md) / DTreeItemButton

# Class: DTreeItemButton<NODE, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |
| `THEME` | extends [`DThemeTreeItemButton`](../interfaces/DThemeTreeItemButton.md) = [`DThemeTreeItemButton`](../interfaces/DThemeTreeItemButton.md) |
| `OPTIONS` | extends [`DTreeItemButtonOptions`](../interfaces/DTreeItemButtonOptions.md)<`NODE`, `THEME`\> = [`DTreeItemButtonOptions`](../interfaces/DTreeItemButtonOptions.md)<`NODE`, `THEME`\> |

## Hierarchy

- [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

  ↳ **`DTreeItemButton`**

  ↳↳ [`DTreeItemNonEditable`](DTreeItemNonEditable.md)

## Table of contents

### Constructors

- [constructor](DTreeItemButton.md#constructor)

### Properties

- [\_accessibleActive](DTreeItemButton.md#_accessibleactive)
- [\_accessibleDiv](DTreeItemButton.md#_accessiblediv)
- [\_auto](DTreeItemButton.md#_auto)
- [\_background](DTreeItemButton.md#_background)
- [\_border](DTreeItemButton.md#_border)
- [\_bounds](DTreeItemButton.md#_bounds)
- [\_clearType](DTreeItemButton.md#_cleartype)
- [\_corner](DTreeItemButton.md#_corner)
- [\_cursor](DTreeItemButton.md#_cursor)
- [\_data](DTreeItemButton.md#_data)
- [\_destroyed](DTreeItemButton.md#_destroyed)
- [\_images](DTreeItemButton.md#_images)
- [\_index](DTreeItemButton.md#_index)
- [\_isOverflowMaskEnabled](DTreeItemButton.md#_isoverflowmaskenabled)
- [\_isTextVisible](DTreeItemButton.md#_istextvisible)
- [\_lastDownPoint](DTreeItemButton.md#_lastdownpoint)
- [\_lastSortedIndex](DTreeItemButton.md#_lastsortedindex)
- [\_mask](DTreeItemButton.md#_mask)
- [\_node](DTreeItemButton.md#_node)
- [\_options](DTreeItemButton.md#_options)
- [\_outline](DTreeItemButton.md#_outline)
- [\_overflowMask](DTreeItemButton.md#_overflowmask)
- [\_padding](DTreeItemButton.md#_padding)
- [\_reflowable](DTreeItemButton.md#_reflowable)
- [\_shortcuts](DTreeItemButton.md#_shortcuts)
- [\_snippet](DTreeItemButton.md#_snippet)
- [\_tempDisplayObjectParent](DTreeItemButton.md#_tempdisplayobjectparent)
- [\_text](DTreeItemButton.md#_text)
- [\_textAlign](DTreeItemButton.md#_textalign)
- [\_textAlpha](DTreeItemButton.md#_textalpha)
- [\_textColor](DTreeItemButton.md#_textcolor)
- [\_textFormatter](DTreeItemButton.md#_textformatter)
- [\_textStyle](DTreeItemButton.md#_textstyle)
- [\_textValue](DTreeItemButton.md#_textvalue)
- [\_textValueComputed](DTreeItemButton.md#_textvaluecomputed)
- [\_title](DTreeItemButton.md#_title)
- [\_when](DTreeItemButton.md#_when)
- [\_zIndex](DTreeItemButton.md#_zindex)
- [accessible](DTreeItemButton.md#accessible)
- [accessibleChildren](DTreeItemButton.md#accessiblechildren)
- [accessibleHint](DTreeItemButton.md#accessiblehint)
- [accessiblePointerEvents](DTreeItemButton.md#accessiblepointerevents)
- [accessibleTitle](DTreeItemButton.md#accessibletitle)
- [accessibleType](DTreeItemButton.md#accessibletype)
- [alpha](DTreeItemButton.md#alpha)
- [angle](DTreeItemButton.md#angle)
- [buttonMode](DTreeItemButton.md#buttonmode)
- [cacheAsBitmap](DTreeItemButton.md#cacheasbitmap)
- [children](DTreeItemButton.md#children)
- [cursor](DTreeItemButton.md#cursor)
- [filterArea](DTreeItemButton.md#filterarea)
- [filters](DTreeItemButton.md#filters)
- [hitArea](DTreeItemButton.md#hitarea)
- [interactive](DTreeItemButton.md#interactive)
- [interactiveChildren](DTreeItemButton.md#interactivechildren)
- [isMask](DTreeItemButton.md#ismask)
- [isSprite](DTreeItemButton.md#issprite)
- [localTransform](DTreeItemButton.md#localtransform)
- [mask](DTreeItemButton.md#mask)
- [name](DTreeItemButton.md#name)
- [parent](DTreeItemButton.md#parent)
- [pivot](DTreeItemButton.md#pivot)
- [renderable](DTreeItemButton.md#renderable)
- [rotation](DTreeItemButton.md#rotation)
- [sortDirty](DTreeItemButton.md#sortdirty)
- [sortableChildren](DTreeItemButton.md#sortablechildren)
- [transform](DTreeItemButton.md#transform)
- [visible](DTreeItemButton.md#visible)
- [worldAlpha](DTreeItemButton.md#worldalpha)
- [worldTransform](DTreeItemButton.md#worldtransform)
- [worldVisible](DTreeItemButton.md#worldvisible)
- [zIndex](DTreeItemButton.md#zindex)
- [LAYOUTER](DTreeItemButton.md#layouter)
- [WORK\_CONTAINS\_POINT](DTreeItemButton.md#work_contains_point)

### Accessors

- [background](DTreeItemButton.md#background)
- [border](DTreeItemButton.md#border)
- [corner](DTreeItemButton.md#corner)
- [data](DTreeItemButton.md#data)
- [height](DTreeItemButton.md#height)
- [image](DTreeItemButton.md#image)
- [index](DTreeItemButton.md#index)
- [node](DTreeItemButton.md#node)
- [options](DTreeItemButton.md#options)
- [outline](DTreeItemButton.md#outline)
- [padding](DTreeItemButton.md#padding)
- [position](DTreeItemButton.md#position)
- [reflowable](DTreeItemButton.md#reflowable)
- [scale](DTreeItemButton.md#scale)
- [shadow](DTreeItemButton.md#shadow)
- [skew](DTreeItemButton.md#skew)
- [snippet](DTreeItemButton.md#snippet)
- [state](DTreeItemButton.md#state)
- [text](DTreeItemButton.md#text)
- [theme](DTreeItemButton.md#theme)
- [title](DTreeItemButton.md#title)
- [type](DTreeItemButton.md#type)
- [unsafe](DTreeItemButton.md#unsafe)
- [value](DTreeItemButton.md#value)
- [weight](DTreeItemButton.md#weight)
- [width](DTreeItemButton.md#width)
- [x](DTreeItemButton.md#x)
- [y](DTreeItemButton.md#y)

### Methods

- [\_calculateBounds](DTreeItemButton.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTreeItemButton.md#_recursivepostupdatetransform)
- [\_render](DTreeItemButton.md#_render)
- [addChild](DTreeItemButton.md#addchild)
- [addChildAt](DTreeItemButton.md#addchildat)
- [addListener](DTreeItemButton.md#addlistener)
- [applyTitle](DTreeItemButton.md#applytitle)
- [blur](DTreeItemButton.md#blur)
- [calculateBounds](DTreeItemButton.md#calculatebounds)
- [computeTextValue](DTreeItemButton.md#computetextvalue)
- [containsGlobalPoint](DTreeItemButton.md#containsglobalpoint)
- [containsLocalPoint](DTreeItemButton.md#containslocalpoint)
- [containsPoint](DTreeItemButton.md#containspoint)
- [createOrUpdateText](DTreeItemButton.md#createorupdatetext)
- [createText](DTreeItemButton.md#createtext)
- [destroy](DTreeItemButton.md#destroy)
- [displayObjectUpdateTransform](DTreeItemButton.md#displayobjectupdatetransform)
- [emit](DTreeItemButton.md#emit)
- [eventNames](DTreeItemButton.md#eventnames)
- [focus](DTreeItemButton.md#focus)
- [focusOnClosest](DTreeItemButton.md#focusonclosest)
- [getBounds](DTreeItemButton.md#getbounds)
- [getChildAt](DTreeItemButton.md#getchildat)
- [getChildByName](DTreeItemButton.md#getchildbyname)
- [getChildIndex](DTreeItemButton.md#getchildindex)
- [getClearType](DTreeItemButton.md#getcleartype)
- [getClippingRect](DTreeItemButton.md#getclippingrect)
- [getGlobalPosition](DTreeItemButton.md#getglobalposition)
- [getHeight](DTreeItemButton.md#getheight)
- [getLocalBounds](DTreeItemButton.md#getlocalbounds)
- [getOverflowMask](DTreeItemButton.md#getoverflowmask)
- [getParentOfSize](DTreeItemButton.md#getparentofsize)
- [getTextAlpha](DTreeItemButton.md#gettextalpha)
- [getTextColor](DTreeItemButton.md#gettextcolor)
- [getThemeDefault](DTreeItemButton.md#getthemedefault)
- [getType](DTreeItemButton.md#gettype)
- [getWidth](DTreeItemButton.md#getwidth)
- [getX](DTreeItemButton.md#getx)
- [getY](DTreeItemButton.md#gety)
- [hasDirty](DTreeItemButton.md#hasdirty)
- [hasRefitableHeight](DTreeItemButton.md#hasrefitableheight)
- [hasRefitableWidth](DTreeItemButton.md#hasrefitablewidth)
- [hide](DTreeItemButton.md#hide)
- [hideText](DTreeItemButton.md#hidetext)
- [init](DTreeItemButton.md#init)
- [initOnClick](DTreeItemButton.md#initonclick)
- [initReflowable](DTreeItemButton.md#initreflowable)
- [isDirty](DTreeItemButton.md#isdirty)
- [isEventTarget](DTreeItemButton.md#iseventtarget)
- [isHidden](DTreeItemButton.md#ishidden)
- [isHierarchyDirty](DTreeItemButton.md#ishierarchydirty)
- [isRefitable](DTreeItemButton.md#isrefitable)
- [isShown](DTreeItemButton.md#isshown)
- [listenerCount](DTreeItemButton.md#listenercount)
- [listeners](DTreeItemButton.md#listeners)
- [newImage](DTreeItemButton.md#newimage)
- [newImages](DTreeItemButton.md#newimages)
- [off](DTreeItemButton.md#off)
- [on](DTreeItemButton.md#on)
- [onActivate](DTreeItemButton.md#onactivate)
- [onActivateKeyDown](DTreeItemButton.md#onactivatekeydown)
- [onActivateKeyUp](DTreeItemButton.md#onactivatekeyup)
- [onBlur](DTreeItemButton.md#onblur)
- [onChildBlur](DTreeItemButton.md#onchildblur)
- [onChildFocus](DTreeItemButton.md#onchildfocus)
- [onChildrenChange](DTreeItemButton.md#onchildrenchange)
- [onClick](DTreeItemButton.md#onclick)
- [onDblClick](DTreeItemButton.md#ondblclick)
- [onDown](DTreeItemButton.md#ondown)
- [onDownThis](DTreeItemButton.md#ondownthis)
- [onFocus](DTreeItemButton.md#onfocus)
- [onHierarchyDirty](DTreeItemButton.md#onhierarchydirty)
- [onKeyDown](DTreeItemButton.md#onkeydown)
- [onKeyDownActivate](DTreeItemButton.md#onkeydownactivate)
- [onKeyUp](DTreeItemButton.md#onkeyup)
- [onMove](DTreeItemButton.md#onmove)
- [onOut](DTreeItemButton.md#onout)
- [onOver](DTreeItemButton.md#onover)
- [onParentMove](DTreeItemButton.md#onparentmove)
- [onParentResize](DTreeItemButton.md#onparentresize)
- [onRefit](DTreeItemButton.md#onrefit)
- [onReflow](DTreeItemButton.md#onreflow)
- [onResize](DTreeItemButton.md#onresize)
- [onScale](DTreeItemButton.md#onscale)
- [onSelect](DTreeItemButton.md#onselect)
- [onShortcut](DTreeItemButton.md#onshortcut)
- [onSkew](DTreeItemButton.md#onskew)
- [onStateChange](DTreeItemButton.md#onstatechange)
- [onTextChange](DTreeItemButton.md#ontextchange)
- [onUp](DTreeItemButton.md#onup)
- [onUpThis](DTreeItemButton.md#onupthis)
- [onWheel](DTreeItemButton.md#onwheel)
- [once](DTreeItemButton.md#once)
- [reflow](DTreeItemButton.md#reflow)
- [removeAllListeners](DTreeItemButton.md#removealllisteners)
- [removeChild](DTreeItemButton.md#removechild)
- [removeChildAt](DTreeItemButton.md#removechildat)
- [removeChildren](DTreeItemButton.md#removechildren)
- [removeListener](DTreeItemButton.md#removelistener)
- [render](DTreeItemButton.md#render)
- [renderAdvanced](DTreeItemButton.md#renderadvanced)
- [resize](DTreeItemButton.md#resize)
- [set](DTreeItemButton.md#set)
- [setChildIndex](DTreeItemButton.md#setchildindex)
- [setFocused](DTreeItemButton.md#setfocused)
- [setHeight](DTreeItemButton.md#setheight)
- [setParent](DTreeItemButton.md#setparent)
- [setTransform](DTreeItemButton.md#settransform)
- [setWidth](DTreeItemButton.md#setwidth)
- [setX](DTreeItemButton.md#setx)
- [setY](DTreeItemButton.md#sety)
- [show](DTreeItemButton.md#show)
- [showText](DTreeItemButton.md#showtext)
- [sortChildren](DTreeItemButton.md#sortchildren)
- [swapChildren](DTreeItemButton.md#swapchildren)
- [toCursor](DTreeItemButton.md#tocursor)
- [toDirty](DTreeItemButton.md#todirty)
- [toGlobal](DTreeItemButton.md#toglobal)
- [toHasDirty](DTreeItemButton.md#tohasdirty)
- [toHierarchyDirty](DTreeItemButton.md#tohierarchydirty)
- [toImageOptions](DTreeItemButton.md#toimageoptions)
- [toLocal](DTreeItemButton.md#tolocal)
- [toParentHasDirty](DTreeItemButton.md#toparenthasdirty)
- [toParentHierarchyDirty](DTreeItemButton.md#toparenthierarchydirty)
- [toParentResized](DTreeItemButton.md#toparentresized)
- [toggle](DTreeItemButton.md#toggle)
- [unset](DTreeItemButton.md#unset)
- [updateText](DTreeItemButton.md#updatetext)
- [updateTextAndImage](DTreeItemButton.md#updatetextandimage)
- [updateTextColor](DTreeItemButton.md#updatetextcolor)
- [updateTextPosition](DTreeItemButton.md#updatetextposition)
- [updateTextValue](DTreeItemButton.md#updatetextvalue)
- [updateTransform](DTreeItemButton.md#updatetransform)
- [mixin](DTreeItemButton.md#mixin)

## Constructors

### constructor

• **new DTreeItemButton**<`NODE`, `THEME`, `OPTIONS`\>(`data`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |
| `THEME` | extends [`DThemeTreeItemButton`](../interfaces/DThemeTreeItemButton.md)<`THEME`\> = [`DThemeTreeItemButton`](../interfaces/DThemeTreeItemButton.md) |
| `OPTIONS` | extends [`DTreeItemButtonOptions`](../interfaces/DTreeItemButtonOptions.md)<`NODE`, `THEME`, `any`, `OPTIONS`\> = [`DTreeItemButtonOptions`](../interfaces/DTreeItemButtonOptions.md)<`NODE`, `THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\> |
| `options?` | `OPTIONS` |

#### Overrides

[DTreeItemText](DTreeItemText.md).[constructor](DTreeItemText.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L32)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_accessibleActive](DTreeItemText.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_accessibleDiv](DTreeItemText.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_auto](DTreeItemText.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_background](DTreeItemText.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_border](DTreeItemText.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_bounds](DTreeItemText.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_clearType](DTreeItemText.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_corner](DTreeItemText.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_cursor](DTreeItemText.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_data

• `Protected` **\_data**: [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_data](DTreeItemText.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L72)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_destroyed](DTreeItemText.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_images

• `Protected` **\_images**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_images](DTreeItemText.md#_images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L95)

___

### \_index

• `Protected` `Optional` **\_index**: `number`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_index](DTreeItemText.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L74)

___

### \_isOverflowMaskEnabled

• `Protected` **\_isOverflowMaskEnabled**: `boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_isOverflowMaskEnabled](DTreeItemText.md#_isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L168)

___

### \_isTextVisible

• `Protected` **\_isTextVisible**: `boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_isTextVisible](DTreeItemText.md#_istextvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L170)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_lastDownPoint](DTreeItemText.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_lastSortedIndex](DTreeItemText.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_mask](DTreeItemText.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_node

• `Protected` `Optional` **\_node**: `NODE`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_node](DTreeItemText.md#_node)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L73)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_options](DTreeItemText.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_outline](DTreeItemText.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_overflowMask](DTreeItemText.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L169)

___

### \_padding

• `Protected` **\_padding**: [`DBasePaddingAdjustable`](DBasePaddingAdjustable.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_padding](DTreeItemText.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L71)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_reflowable](DTreeItemText.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_shortcuts](DTreeItemText.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_snippet](DTreeItemText.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_tempDisplayObjectParent](DTreeItemText.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_text](DTreeItemText.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L160)

___

### \_textAlign

• `Protected` **\_textAlign**: [`DTextBaseAlign`](../interfaces/DTextBaseAlign.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_textAlign](DTreeItemText.md#_textalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L166)

___

### \_textAlpha

• `Protected` **\_textAlpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_textAlpha](DTreeItemText.md#_textalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L164)

___

### \_textColor

• `Protected` **\_textColor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_textColor](DTreeItemText.md#_textcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L163)

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

[DTreeItemText](DTreeItemText.md).[_textFormatter](DTreeItemText.md#_textformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L167)

___

### \_textStyle

• `Protected` **\_textStyle**: [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_textStyle](DTreeItemText.md#_textstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L165)

___

### \_textValue

• `Protected` `Optional` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_textValue](DTreeItemText.md#_textvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L161)

___

### \_textValueComputed

• `Protected` `Optional` **\_textValueComputed**: `string`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_textValueComputed](DTreeItemText.md#_textvaluecomputed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L162)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_title](DTreeItemText.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_when

• `Protected` **\_when**: [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L30)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_zIndex](DTreeItemText.md#_zindex)

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

[DTreeItemText](DTreeItemText.md).[accessible](DTreeItemText.md#accessible)

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

[DTreeItemText](DTreeItemText.md).[accessibleChildren](DTreeItemText.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DTreeItemText](DTreeItemText.md).[accessibleHint](DTreeItemText.md#accessiblehint)

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

[DTreeItemText](DTreeItemText.md).[accessiblePointerEvents](DTreeItemText.md#accessiblepointerevents)

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

[DTreeItemText](DTreeItemText.md).[accessibleTitle](DTreeItemText.md#accessibletitle)

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

[DTreeItemText](DTreeItemText.md).[accessibleType](DTreeItemText.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DTreeItemText](DTreeItemText.md).[alpha](DTreeItemText.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DTreeItemText](DTreeItemText.md).[angle](DTreeItemText.md#angle)

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

[DTreeItemText](DTreeItemText.md).[buttonMode](DTreeItemText.md#buttonmode)

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

[DTreeItemText](DTreeItemText.md).[cacheAsBitmap](DTreeItemText.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DTreeItemText](DTreeItemText.md).[children](DTreeItemText.md#children)

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

[DTreeItemText](DTreeItemText.md).[cursor](DTreeItemText.md#cursor)

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

[DTreeItemText](DTreeItemText.md).[filterArea](DTreeItemText.md#filterarea)

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

[DTreeItemText](DTreeItemText.md).[filters](DTreeItemText.md#filters)

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

[DTreeItemText](DTreeItemText.md).[hitArea](DTreeItemText.md#hitarea)

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

[DTreeItemText](DTreeItemText.md).[interactive](DTreeItemText.md#interactive)

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

[DTreeItemText](DTreeItemText.md).[interactiveChildren](DTreeItemText.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DTreeItemText](DTreeItemText.md).[isMask](DTreeItemText.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DTreeItemText](DTreeItemText.md).[isSprite](DTreeItemText.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DTreeItemText](DTreeItemText.md).[localTransform](DTreeItemText.md#localtransform)

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

[DTreeItemText](DTreeItemText.md).[mask](DTreeItemText.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DTreeItemText](DTreeItemText.md).[name](DTreeItemText.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DTreeItemText](DTreeItemText.md).[parent](DTreeItemText.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DTreeItemText](DTreeItemText.md).[pivot](DTreeItemText.md#pivot)

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

[DTreeItemText](DTreeItemText.md).[renderable](DTreeItemText.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DTreeItemText](DTreeItemText.md).[rotation](DTreeItemText.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DTreeItemText](DTreeItemText.md).[sortDirty](DTreeItemText.md#sortdirty)

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

[DTreeItemText](DTreeItemText.md).[sortableChildren](DTreeItemText.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DTreeItemText](DTreeItemText.md).[transform](DTreeItemText.md#transform)

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

[DTreeItemText](DTreeItemText.md).[visible](DTreeItemText.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DTreeItemText](DTreeItemText.md).[worldAlpha](DTreeItemText.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DTreeItemText](DTreeItemText.md).[worldTransform](DTreeItemText.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DTreeItemText](DTreeItemText.md).[worldVisible](DTreeItemText.md#worldvisible)

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

[DTreeItemText](DTreeItemText.md).[zIndex](DTreeItemText.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[LAYOUTER](DTreeItemText.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L94)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[WORK_CONTAINS_POINT](DTreeItemText.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DTreeItemText.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DTreeItemText.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DTreeItemText.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### data

• `get` **data**(): [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\>

#### Returns

[`DTreeData`](../interfaces/DTreeData.md)<`NODE`\>

#### Inherited from

DTreeItemText.data

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L94)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemText.height

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

DTreeItemText.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### image

• `get` **image**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Inherited from

DTreeItemText.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L125)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DTreeItemText.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L129)

___

### index

• `get` **index**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

DTreeItemText.index

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L90)

___

### node

• `get` **node**(): `undefined` \| `NODE`

#### Returns

`undefined` \| `NODE`

#### Inherited from

DTreeItemText.node

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L82)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DTreeItemText.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DTreeItemText.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DTreeItemText.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTreeItemText.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DTreeItemText.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTreeItemText.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DTreeItemText.shadow

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

DTreeItemText.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTreeItemText.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DTreeItemText.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DTreeItemText.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### text

• `get` **text**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Inherited from

DTreeItemText.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L197)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DTreeItemText.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L190)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DTreeItemText.theme

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

DTreeItemText.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DTreeItemText.title

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

DTreeItemText.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DTreeItemText.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DTreeItemText.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### value

• `get` **value**(): `undefined` \| `NODE`

#### Returns

`undefined` \| `NODE`

#### Inherited from

DTreeItemText.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L86)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemText.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemText.width

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

DTreeItemText.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemText.x

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

DTreeItemText.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemText.y

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

DTreeItemText.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[_calculateBounds](DTreeItemText.md#_calculatebounds)

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

[DTreeItemText](DTreeItemText.md).[_recursivePostUpdateTransform](DTreeItemText.md#_recursivepostupdatetransform)

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

[DTreeItemText](DTreeItemText.md).[_render](DTreeItemText.md#_render)

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

[DTreeItemText](DTreeItemText.md).[addChild](DTreeItemText.md#addchild)

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

[DTreeItemText](DTreeItemText.md).[addChildAt](DTreeItemText.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[addListener](DTreeItemText.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[addListener](DTreeItemText.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[applyTitle](DTreeItemText.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L383)

___

### blur

▸ **blur**(`recursively?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[blur](DTreeItemText.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[calculateBounds](DTreeItemText.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### computeTextValue

▸ `Protected` **computeTextValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[computeTextValue](DTreeItemText.md#computetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L205)

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

[DTreeItemText](DTreeItemText.md).[containsGlobalPoint](DTreeItemText.md#containsglobalpoint)

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

[DTreeItemText](DTreeItemText.md).[containsLocalPoint](DTreeItemText.md#containslocalpoint)

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

[DTreeItemText](DTreeItemText.md).[containsPoint](DTreeItemText.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1922](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1922)

___

### createOrUpdateText

▸ `Protected` **createOrUpdateText**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[createOrUpdateText](DTreeItemText.md#createorupdatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L220)

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

[DTreeItemText](DTreeItemText.md).[createText](DTreeItemText.md#createtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L247)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[destroy](DTreeItemText.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L195)

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

[DTreeItemText](DTreeItemText.md).[displayObjectUpdateTransform](DTreeItemText.md#displayobjectupdatetransform)

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

[DTreeItemText](DTreeItemText.md).[emit](DTreeItemText.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DTreeItemText](DTreeItemText.md).[eventNames](DTreeItemText.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[focus](DTreeItemText.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[focusOnClosest](DTreeItemText.md#focusonclosest)

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

[DTreeItemText](DTreeItemText.md).[getBounds](DTreeItemText.md#getbounds)

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

[DTreeItemText](DTreeItemText.md).[getChildAt](DTreeItemText.md#getchildat)

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

[DTreeItemText](DTreeItemText.md).[getChildByName](DTreeItemText.md#getchildbyname)

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

[DTreeItemText](DTreeItemText.md).[getChildIndex](DTreeItemText.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[getClearType](DTreeItemText.md#getcleartype)

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

[DTreeItemText](DTreeItemText.md).[getClippingRect](DTreeItemText.md#getclippingrect)

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

[DTreeItemText](DTreeItemText.md).[getGlobalPosition](DTreeItemText.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[getHeight](DTreeItemText.md#getheight)

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

[DTreeItemText](DTreeItemText.md).[getLocalBounds](DTreeItemText.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[getOverflowMask](DTreeItemText.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L251)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DTreeItemText](DTreeItemText.md).[getParentOfSize](DTreeItemText.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1716](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1716)

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

[DTreeItemText](DTreeItemText.md).[getTextAlpha](DTreeItemText.md#gettextalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:318](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L318)

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

[DTreeItemText](DTreeItemText.md).[getTextColor](DTreeItemText.md#gettextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L303)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[getThemeDefault](DTreeItemText.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1897](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1897)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DTreeItemText](DTreeItemText.md).[getType](DTreeItemText.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L101)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[getWidth](DTreeItemText.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[getX](DTreeItemText.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTreeItemText](DTreeItemText.md).[getY](DTreeItemText.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[hasDirty](DTreeItemText.md#hasdirty)

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

[DTreeItemText](DTreeItemText.md).[hasRefitableHeight](DTreeItemText.md#hasrefitableheight)

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

[DTreeItemText](DTreeItemText.md).[hasRefitableWidth](DTreeItemText.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### hide

▸ **hide**(): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[hide](DTreeItemText.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

___

### hideText

▸ `Protected` **hideText**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[hideText](DTreeItemText.md#hidetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L366)

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

[DTreeItemText](DTreeItemText.md).[init](DTreeItemText.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L97)

___

### initOnClick

▸ `Protected` **initOnClick**(`when`, `theme`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `when` | [`DButtonBaseWhen`](../index.md#dbuttonbasewhen) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L40)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[initReflowable](DTreeItemText.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[isDirty](DTreeItemText.md#isdirty)

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

[DTreeItemText](DTreeItemText.md).[isEventTarget](DTreeItemText.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1794)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[isHidden](DTreeItemText.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[isHierarchyDirty](DTreeItemText.md#ishierarchydirty)

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

[DTreeItemText](DTreeItemText.md).[isRefitable](DTreeItemText.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L176)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[isShown](DTreeItemText.md#isshown)

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

[DTreeItemText](DTreeItemText.md).[listenerCount](DTreeItemText.md#listenercount)

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

[DTreeItemText](DTreeItemText.md).[listeners](DTreeItemText.md#listeners)

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

[DTreeItemText](DTreeItemText.md).[newImage](DTreeItemText.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L121)

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

[DTreeItemText](DTreeItemText.md).[newImages](DTreeItemText.md#newimages)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L102)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[off](DTreeItemText.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[on](DTreeItemText.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[on](DTreeItemText.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onActivate

▸ `Protected` **onActivate**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L64)

___

### onActivateKeyDown

▸ `Protected` **onActivateKeyDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L70)

___

### onActivateKeyUp

▸ `Protected` **onActivateKeyUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L76)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[onBlur](DTreeItemText.md#onblur)

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

[DTreeItemText](DTreeItemText.md).[onChildBlur](DTreeItemText.md#onchildblur)

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

[DTreeItemText](DTreeItemText.md).[onChildFocus](DTreeItemText.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[onChildrenChange](DTreeItemText.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onClick

▸ **onClick**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L48)

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

#### Overrides

[DTreeItemText](DTreeItemText.md).[onDblClick](DTreeItemText.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L54)

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

[DTreeItemText](DTreeItemText.md).[onDown](DTreeItemText.md#ondown)

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

[DTreeItemText](DTreeItemText.md).[onDownThis](DTreeItemText.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1815](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1815)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[onFocus](DTreeItemText.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[onHierarchyDirty](DTreeItemText.md#onhierarchydirty)

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

#### Overrides

[DTreeItemText](DTreeItemText.md).[onKeyDown](DTreeItemText.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L85)

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

[DTreeItemText](DTreeItemText.md).[onKeyDownActivate](DTreeItemText.md#onkeydownactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L232)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Overrides

[DTreeItemText](DTreeItemText.md).[onKeyUp](DTreeItemText.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L93)

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

[DTreeItemText](DTreeItemText.md).[onMove](DTreeItemText.md#onmove)

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

[DTreeItemText](DTreeItemText.md).[onOut](DTreeItemText.md#onout)

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

[DTreeItemText](DTreeItemText.md).[onOver](DTreeItemText.md#onover)

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

[DTreeItemText](DTreeItemText.md).[onParentMove](DTreeItemText.md#onparentmove)

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

[DTreeItemText](DTreeItemText.md).[onParentResize](DTreeItemText.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1731](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1731)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[onRefit](DTreeItemText.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1618)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[onReflow](DTreeItemText.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L374)

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

[DTreeItemText](DTreeItemText.md).[onResize](DTreeItemText.md#onresize)

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

[DTreeItemText](DTreeItemText.md).[onScale](DTreeItemText.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### onSelect

▸ `Protected` **onSelect**(`e`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `undefined` \| `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |
| `value` | `NODE` |

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[onSelect](DTreeItemText.md#onselect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L155)

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

[DTreeItemText](DTreeItemText.md).[onShortcut](DTreeItemText.md#onshortcut)

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

[DTreeItemText](DTreeItemText.md).[onSkew](DTreeItemText.md#onskew)

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

[DTreeItemText](DTreeItemText.md).[onStateChange](DTreeItemText.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L135)

___

### onTextChange

▸ `Protected` **onTextChange**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[onTextChange](DTreeItemText.md#ontextchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L201)

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

[DTreeItemText](DTreeItemText.md).[onUp](DTreeItemText.md#onup)

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

[DTreeItemText](DTreeItemText.md).[onUpThis](DTreeItemText.md#onupthis)

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

[DTreeItemText](DTreeItemText.md).[onWheel](DTreeItemText.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1777)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[once](DTreeItemText.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[once](DTreeItemText.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[reflow](DTreeItemText.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1591](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1591)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[removeAllListeners](DTreeItemText.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[removeAllListeners](DTreeItemText.md#removealllisteners)

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

[DTreeItemText](DTreeItemText.md).[removeChild](DTreeItemText.md#removechild)

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

[DTreeItemText](DTreeItemText.md).[removeChildAt](DTreeItemText.md#removechildat)

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

[DTreeItemText](DTreeItemText.md).[removeChildren](DTreeItemText.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[removeListener](DTreeItemText.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[removeListener](DTreeItemText.md#removelistener)

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

[DTreeItemText](DTreeItemText.md).[render](DTreeItemText.md#render)

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

[DTreeItemText](DTreeItemText.md).[renderAdvanced](DTreeItemText.md#renderadvanced)

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

[DTreeItemText](DTreeItemText.md).[resize](DTreeItemText.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

___

### set

▸ **set**(`node`, `index`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |
| `index` | `number` |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[set](DTreeItemText.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L105)

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

[DTreeItemText](DTreeItemText.md).[setChildIndex](DTreeItemText.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[setFocused](DTreeItemText.md#setfocused)

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

[DTreeItemText](DTreeItemText.md).[setHeight](DTreeItemText.md#setheight)

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

[DTreeItemText](DTreeItemText.md).[setParent](DTreeItemText.md#setparent)

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

[DTreeItemText](DTreeItemText.md).[setTransform](DTreeItemText.md#settransform)

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

[DTreeItemText](DTreeItemText.md).[setWidth](DTreeItemText.md#setwidth)

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

[DTreeItemText](DTreeItemText.md).[setX](DTreeItemText.md#setx)

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

[DTreeItemText](DTreeItemText.md).[setY](DTreeItemText.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemText](DTreeItemText.md).[show](DTreeItemText.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

___

### showText

▸ `Protected` **showText**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[showText](DTreeItemText.md#showtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L358)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[sortChildren](DTreeItemText.md#sortchildren)

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

[DTreeItemText](DTreeItemText.md).[swapChildren](DTreeItemText.md#swapchildren)

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

[DTreeItemText](DTreeItemText.md).[toCursor](DTreeItemText.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[toDirty](DTreeItemText.md#todirty)

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

[DTreeItemText](DTreeItemText.md).[toGlobal](DTreeItemText.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[toHasDirty](DTreeItemText.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[toHierarchyDirty](DTreeItemText.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1443)

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

[DTreeItemText](DTreeItemText.md).[toImageOptions](DTreeItemText.md#toimageoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L114)

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

[DTreeItemText](DTreeItemText.md).[toLocal](DTreeItemText.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[toParentHasDirty](DTreeItemText.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[toParentHierarchyDirty](DTreeItemText.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[toParentResized](DTreeItemText.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1709](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L1709)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[toggle](DTreeItemText.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L98)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[unset](DTreeItemText.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L136)

___

### updateText

▸ `Protected` **updateText**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[updateText](DTreeItemText.md#updatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L144)

___

### updateTextAndImage

▸ `Protected` **updateTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[updateTextAndImage](DTreeItemText.md#updatetextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L149)

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

[DTreeItemText](DTreeItemText.md).[updateTextColor](DTreeItemText.md#updatetextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L333)

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

[DTreeItemText](DTreeItemText.md).[updateTextPosition](DTreeItemText.md#updatetextposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L263)

___

### updateTextValue

▸ `Protected` **updateTextValue**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[updateTextValue](DTreeItemText.md#updatetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L340)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DTreeItemText](DTreeItemText.md).[updateTransform](DTreeItemText.md#updatetransform)

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

[DTreeItemText](DTreeItemText.md).[mixin](DTreeItemText.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
