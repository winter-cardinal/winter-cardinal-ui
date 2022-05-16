[Winter Cardinal UI - v0.165.0](../index.md) / DTreeItemText

# Class: DTreeItemText<NODE, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |
| `THEME` | extends [`DThemeTreeItemText`](../interfaces/DThemeTreeItemText.md) = [`DThemeTreeItemText`](../interfaces/DThemeTreeItemText.md) |
| `OPTIONS` | extends [`DTreeItemTextOptions`](../interfaces/DTreeItemTextOptions.md)<`NODE`, `THEME`\> = [`DTreeItemTextOptions`](../interfaces/DTreeItemTextOptions.md)<`NODE`, `THEME`\> |

## Hierarchy

- [`DImageBase`](DImageBase.md)<`string`, `THEME`, `OPTIONS`\>

  ↳ **`DTreeItemText`**

  ↳↳ [`DTreeItemButton`](DTreeItemButton.md)

## Implements

- [`DTreeItem`](../interfaces/DTreeItem.md)<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTreeItemText.md#constructor)

### Properties

- [\_accessibleActive](DTreeItemText.md#_accessibleactive)
- [\_accessibleDiv](DTreeItemText.md#_accessiblediv)
- [\_auto](DTreeItemText.md#_auto)
- [\_background](DTreeItemText.md#_background)
- [\_border](DTreeItemText.md#_border)
- [\_bounds](DTreeItemText.md#_bounds)
- [\_clearType](DTreeItemText.md#_cleartype)
- [\_corner](DTreeItemText.md#_corner)
- [\_cursor](DTreeItemText.md#_cursor)
- [\_data](DTreeItemText.md#_data)
- [\_destroyed](DTreeItemText.md#_destroyed)
- [\_images](DTreeItemText.md#_images)
- [\_index](DTreeItemText.md#_index)
- [\_isOverflowMaskEnabled](DTreeItemText.md#_isoverflowmaskenabled)
- [\_isTextVisible](DTreeItemText.md#_istextvisible)
- [\_lastDownPoint](DTreeItemText.md#_lastdownpoint)
- [\_lastSortedIndex](DTreeItemText.md#_lastsortedindex)
- [\_mask](DTreeItemText.md#_mask)
- [\_node](DTreeItemText.md#_node)
- [\_options](DTreeItemText.md#_options)
- [\_outline](DTreeItemText.md#_outline)
- [\_overflowMask](DTreeItemText.md#_overflowmask)
- [\_padding](DTreeItemText.md#_padding)
- [\_reflowable](DTreeItemText.md#_reflowable)
- [\_shortcuts](DTreeItemText.md#_shortcuts)
- [\_snippet](DTreeItemText.md#_snippet)
- [\_tempDisplayObjectParent](DTreeItemText.md#_tempdisplayobjectparent)
- [\_text](DTreeItemText.md#_text)
- [\_textAlign](DTreeItemText.md#_textalign)
- [\_textAlpha](DTreeItemText.md#_textalpha)
- [\_textColor](DTreeItemText.md#_textcolor)
- [\_textFormatter](DTreeItemText.md#_textformatter)
- [\_textStyle](DTreeItemText.md#_textstyle)
- [\_textValue](DTreeItemText.md#_textvalue)
- [\_textValueComputed](DTreeItemText.md#_textvaluecomputed)
- [\_title](DTreeItemText.md#_title)
- [\_zIndex](DTreeItemText.md#_zindex)
- [accessible](DTreeItemText.md#accessible)
- [accessibleChildren](DTreeItemText.md#accessiblechildren)
- [accessibleHint](DTreeItemText.md#accessiblehint)
- [accessiblePointerEvents](DTreeItemText.md#accessiblepointerevents)
- [accessibleTitle](DTreeItemText.md#accessibletitle)
- [accessibleType](DTreeItemText.md#accessibletype)
- [alpha](DTreeItemText.md#alpha)
- [angle](DTreeItemText.md#angle)
- [buttonMode](DTreeItemText.md#buttonmode)
- [cacheAsBitmap](DTreeItemText.md#cacheasbitmap)
- [children](DTreeItemText.md#children)
- [cursor](DTreeItemText.md#cursor)
- [filterArea](DTreeItemText.md#filterarea)
- [filters](DTreeItemText.md#filters)
- [hitArea](DTreeItemText.md#hitarea)
- [interactive](DTreeItemText.md#interactive)
- [interactiveChildren](DTreeItemText.md#interactivechildren)
- [isMask](DTreeItemText.md#ismask)
- [isSprite](DTreeItemText.md#issprite)
- [localTransform](DTreeItemText.md#localtransform)
- [mask](DTreeItemText.md#mask)
- [name](DTreeItemText.md#name)
- [parent](DTreeItemText.md#parent)
- [pivot](DTreeItemText.md#pivot)
- [renderable](DTreeItemText.md#renderable)
- [rotation](DTreeItemText.md#rotation)
- [sortDirty](DTreeItemText.md#sortdirty)
- [sortableChildren](DTreeItemText.md#sortablechildren)
- [transform](DTreeItemText.md#transform)
- [visible](DTreeItemText.md#visible)
- [worldAlpha](DTreeItemText.md#worldalpha)
- [worldTransform](DTreeItemText.md#worldtransform)
- [worldVisible](DTreeItemText.md#worldvisible)
- [zIndex](DTreeItemText.md#zindex)
- [LAYOUTER](DTreeItemText.md#layouter)
- [WORK\_CONTAINS\_POINT](DTreeItemText.md#work_contains_point)

### Accessors

- [background](DTreeItemText.md#background)
- [border](DTreeItemText.md#border)
- [corner](DTreeItemText.md#corner)
- [data](DTreeItemText.md#data)
- [height](DTreeItemText.md#height)
- [image](DTreeItemText.md#image)
- [index](DTreeItemText.md#index)
- [node](DTreeItemText.md#node)
- [outline](DTreeItemText.md#outline)
- [padding](DTreeItemText.md#padding)
- [position](DTreeItemText.md#position)
- [reflowable](DTreeItemText.md#reflowable)
- [scale](DTreeItemText.md#scale)
- [shadow](DTreeItemText.md#shadow)
- [skew](DTreeItemText.md#skew)
- [snippet](DTreeItemText.md#snippet)
- [state](DTreeItemText.md#state)
- [text](DTreeItemText.md#text)
- [theme](DTreeItemText.md#theme)
- [title](DTreeItemText.md#title)
- [type](DTreeItemText.md#type)
- [unsafe](DTreeItemText.md#unsafe)
- [value](DTreeItemText.md#value)
- [weight](DTreeItemText.md#weight)
- [width](DTreeItemText.md#width)
- [x](DTreeItemText.md#x)
- [y](DTreeItemText.md#y)

### Methods

- [\_calculateBounds](DTreeItemText.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTreeItemText.md#_recursivepostupdatetransform)
- [\_render](DTreeItemText.md#_render)
- [addChild](DTreeItemText.md#addchild)
- [addChildAt](DTreeItemText.md#addchildat)
- [addListener](DTreeItemText.md#addlistener)
- [applyTitle](DTreeItemText.md#applytitle)
- [blur](DTreeItemText.md#blur)
- [calculateBounds](DTreeItemText.md#calculatebounds)
- [computeTextValue](DTreeItemText.md#computetextvalue)
- [containsGlobalPoint](DTreeItemText.md#containsglobalpoint)
- [containsLocalPoint](DTreeItemText.md#containslocalpoint)
- [containsPoint](DTreeItemText.md#containspoint)
- [createOrUpdateText](DTreeItemText.md#createorupdatetext)
- [createText](DTreeItemText.md#createtext)
- [destroy](DTreeItemText.md#destroy)
- [displayObjectUpdateTransform](DTreeItemText.md#displayobjectupdatetransform)
- [emit](DTreeItemText.md#emit)
- [eventNames](DTreeItemText.md#eventnames)
- [focus](DTreeItemText.md#focus)
- [focusOnClosest](DTreeItemText.md#focusonclosest)
- [getBounds](DTreeItemText.md#getbounds)
- [getChildAt](DTreeItemText.md#getchildat)
- [getChildByName](DTreeItemText.md#getchildbyname)
- [getChildIndex](DTreeItemText.md#getchildindex)
- [getClearType](DTreeItemText.md#getcleartype)
- [getClippingRect](DTreeItemText.md#getclippingrect)
- [getGlobalPosition](DTreeItemText.md#getglobalposition)
- [getHeight](DTreeItemText.md#getheight)
- [getLocalBounds](DTreeItemText.md#getlocalbounds)
- [getOverflowMask](DTreeItemText.md#getoverflowmask)
- [getParentOfSize](DTreeItemText.md#getparentofsize)
- [getTextAlpha](DTreeItemText.md#gettextalpha)
- [getTextColor](DTreeItemText.md#gettextcolor)
- [getThemeDefault](DTreeItemText.md#getthemedefault)
- [getType](DTreeItemText.md#gettype)
- [getWidth](DTreeItemText.md#getwidth)
- [getX](DTreeItemText.md#getx)
- [getY](DTreeItemText.md#gety)
- [hasDirty](DTreeItemText.md#hasdirty)
- [hasRefitableHeight](DTreeItemText.md#hasrefitableheight)
- [hasRefitableWidth](DTreeItemText.md#hasrefitablewidth)
- [hide](DTreeItemText.md#hide)
- [hideText](DTreeItemText.md#hidetext)
- [init](DTreeItemText.md#init)
- [initReflowable](DTreeItemText.md#initreflowable)
- [isDirty](DTreeItemText.md#isdirty)
- [isEventTarget](DTreeItemText.md#iseventtarget)
- [isHidden](DTreeItemText.md#ishidden)
- [isHierarchyDirty](DTreeItemText.md#ishierarchydirty)
- [isRefitable](DTreeItemText.md#isrefitable)
- [isShown](DTreeItemText.md#isshown)
- [listenerCount](DTreeItemText.md#listenercount)
- [listeners](DTreeItemText.md#listeners)
- [newImage](DTreeItemText.md#newimage)
- [newImages](DTreeItemText.md#newimages)
- [off](DTreeItemText.md#off)
- [on](DTreeItemText.md#on)
- [onBlur](DTreeItemText.md#onblur)
- [onChildBlur](DTreeItemText.md#onchildblur)
- [onChildFocus](DTreeItemText.md#onchildfocus)
- [onChildrenChange](DTreeItemText.md#onchildrenchange)
- [onDblClick](DTreeItemText.md#ondblclick)
- [onDown](DTreeItemText.md#ondown)
- [onDownThis](DTreeItemText.md#ondownthis)
- [onFocus](DTreeItemText.md#onfocus)
- [onHierarchyDirty](DTreeItemText.md#onhierarchydirty)
- [onKeyDown](DTreeItemText.md#onkeydown)
- [onKeyDownActivate](DTreeItemText.md#onkeydownactivate)
- [onKeyUp](DTreeItemText.md#onkeyup)
- [onMove](DTreeItemText.md#onmove)
- [onOut](DTreeItemText.md#onout)
- [onOver](DTreeItemText.md#onover)
- [onParentMove](DTreeItemText.md#onparentmove)
- [onParentResize](DTreeItemText.md#onparentresize)
- [onRefit](DTreeItemText.md#onrefit)
- [onReflow](DTreeItemText.md#onreflow)
- [onResize](DTreeItemText.md#onresize)
- [onScale](DTreeItemText.md#onscale)
- [onSelect](DTreeItemText.md#onselect)
- [onShortcut](DTreeItemText.md#onshortcut)
- [onSkew](DTreeItemText.md#onskew)
- [onStateChange](DTreeItemText.md#onstatechange)
- [onTextChange](DTreeItemText.md#ontextchange)
- [onUp](DTreeItemText.md#onup)
- [onUpThis](DTreeItemText.md#onupthis)
- [onWheel](DTreeItemText.md#onwheel)
- [once](DTreeItemText.md#once)
- [reflow](DTreeItemText.md#reflow)
- [removeAllListeners](DTreeItemText.md#removealllisteners)
- [removeChild](DTreeItemText.md#removechild)
- [removeChildAt](DTreeItemText.md#removechildat)
- [removeChildren](DTreeItemText.md#removechildren)
- [removeListener](DTreeItemText.md#removelistener)
- [render](DTreeItemText.md#render)
- [renderAdvanced](DTreeItemText.md#renderadvanced)
- [resize](DTreeItemText.md#resize)
- [set](DTreeItemText.md#set)
- [setChildIndex](DTreeItemText.md#setchildindex)
- [setFocused](DTreeItemText.md#setfocused)
- [setHeight](DTreeItemText.md#setheight)
- [setParent](DTreeItemText.md#setparent)
- [setTransform](DTreeItemText.md#settransform)
- [setWidth](DTreeItemText.md#setwidth)
- [setX](DTreeItemText.md#setx)
- [setY](DTreeItemText.md#sety)
- [show](DTreeItemText.md#show)
- [showText](DTreeItemText.md#showtext)
- [sortChildren](DTreeItemText.md#sortchildren)
- [swapChildren](DTreeItemText.md#swapchildren)
- [toCursor](DTreeItemText.md#tocursor)
- [toDirty](DTreeItemText.md#todirty)
- [toGlobal](DTreeItemText.md#toglobal)
- [toHasDirty](DTreeItemText.md#tohasdirty)
- [toHierarchyDirty](DTreeItemText.md#tohierarchydirty)
- [toImageOptions](DTreeItemText.md#toimageoptions)
- [toLocal](DTreeItemText.md#tolocal)
- [toParentHasDirty](DTreeItemText.md#toparenthasdirty)
- [toParentHierarchyDirty](DTreeItemText.md#toparenthierarchydirty)
- [toParentResized](DTreeItemText.md#toparentresized)
- [toggle](DTreeItemText.md#toggle)
- [unset](DTreeItemText.md#unset)
- [updateText](DTreeItemText.md#updatetext)
- [updateTextAndImage](DTreeItemText.md#updatetextandimage)
- [updateTextColor](DTreeItemText.md#updatetextcolor)
- [updateTextPosition](DTreeItemText.md#updatetextposition)
- [updateTextValue](DTreeItemText.md#updatetextvalue)
- [updateTransform](DTreeItemText.md#updatetransform)
- [mixin](DTreeItemText.md#mixin)

## Constructors

### constructor

• **new DTreeItemText**<`NODE`, `THEME`, `OPTIONS`\>(`data`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |
| `THEME` | extends [`DThemeTreeItemText`](../interfaces/DThemeTreeItemText.md)<`THEME`\> = [`DThemeTreeItemText`](../interfaces/DThemeTreeItemText.md) |
| `OPTIONS` | extends [`DTreeItemTextOptions`](../interfaces/DTreeItemTextOptions.md)<`NODE`, `THEME`, `any`, `OPTIONS`\> = [`DTreeItemTextOptions`](../interfaces/DTreeItemTextOptions.md)<`NODE`, `THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\> |
| `options?` | `OPTIONS` |

#### Overrides

[DImageBase](DImageBase.md).[constructor](DImageBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L76)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_accessibleActive](../interfaces/DTreeItem.md#_accessibleactive)

#### Inherited from

[DImageBase](DImageBase.md).[_accessibleActive](DImageBase.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_accessibleDiv](../interfaces/DTreeItem.md#_accessiblediv)

#### Inherited from

[DImageBase](DImageBase.md).[_accessibleDiv](DImageBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_auto](../interfaces/DTreeItem.md#_auto)

#### Inherited from

[DImageBase](DImageBase.md).[_auto](DImageBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_background](../interfaces/DTreeItem.md#_background)

#### Inherited from

[DImageBase](DImageBase.md).[_background](DImageBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_border](../interfaces/DTreeItem.md#_border)

#### Inherited from

[DImageBase](DImageBase.md).[_border](DImageBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_bounds](../interfaces/DTreeItem.md#_bounds)

#### Inherited from

[DImageBase](DImageBase.md).[_bounds](DImageBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_clearType](../interfaces/DTreeItem.md#_cleartype)

#### Inherited from

[DImageBase](DImageBase.md).[_clearType](DImageBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_corner](../interfaces/DTreeItem.md#_corner)

#### Inherited from

[DImageBase](DImageBase.md).[_corner](DImageBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_cursor](../interfaces/DTreeItem.md#_cursor)

#### Inherited from

[DImageBase](DImageBase.md).[_cursor](DImageBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_data

• `Protected` **\_data**: [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L72)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_destroyed](../interfaces/DTreeItem.md#_destroyed)

#### Inherited from

[DImageBase](DImageBase.md).[_destroyed](DImageBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_images

• `Protected` **\_images**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DImageBase](DImageBase.md).[_images](DImageBase.md#_images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L95)

___

### \_index

• `Protected` `Optional` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L74)

___

### \_isOverflowMaskEnabled

• `Protected` **\_isOverflowMaskEnabled**: `boolean`

#### Inherited from

[DImageBase](DImageBase.md).[_isOverflowMaskEnabled](DImageBase.md#_isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L168)

___

### \_isTextVisible

• `Protected` **\_isTextVisible**: `boolean`

#### Inherited from

[DImageBase](DImageBase.md).[_isTextVisible](DImageBase.md#_istextvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L170)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_lastDownPoint](../interfaces/DTreeItem.md#_lastdownpoint)

#### Inherited from

[DImageBase](DImageBase.md).[_lastDownPoint](DImageBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_lastSortedIndex](../interfaces/DTreeItem.md#_lastsortedindex)

#### Inherited from

[DImageBase](DImageBase.md).[_lastSortedIndex](DImageBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_mask](../interfaces/DTreeItem.md#_mask)

#### Inherited from

[DImageBase](DImageBase.md).[_mask](DImageBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_node

• `Protected` `Optional` **\_node**: `NODE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L73)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_options](../interfaces/DTreeItem.md#_options)

#### Inherited from

[DImageBase](DImageBase.md).[_options](DImageBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_outline](../interfaces/DTreeItem.md#_outline)

#### Inherited from

[DImageBase](DImageBase.md).[_outline](DImageBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DImageBase](DImageBase.md).[_overflowMask](DImageBase.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L169)

___

### \_padding

• `Protected` **\_padding**: [`DBasePaddingAdjustable`](DBasePaddingAdjustable.md)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_padding](../interfaces/DTreeItem.md#_padding)

#### Overrides

[DImageBase](DImageBase.md).[_padding](DImageBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L71)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_reflowable](../interfaces/DTreeItem.md#_reflowable)

#### Inherited from

[DImageBase](DImageBase.md).[_reflowable](DImageBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_shortcuts](../interfaces/DTreeItem.md#_shortcuts)

#### Inherited from

[DImageBase](DImageBase.md).[_shortcuts](DImageBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_snippet](../interfaces/DTreeItem.md#_snippet)

#### Inherited from

[DImageBase](DImageBase.md).[_snippet](DImageBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_tempDisplayObjectParent](../interfaces/DTreeItem.md#_tempdisplayobjectparent)

#### Inherited from

[DImageBase](DImageBase.md).[_tempDisplayObjectParent](DImageBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DImageBase](DImageBase.md).[_text](DImageBase.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L160)

___

### \_textAlign

• `Protected` **\_textAlign**: [`DTextBaseAlign`](../interfaces/DTextBaseAlign.md)

#### Inherited from

[DImageBase](DImageBase.md).[_textAlign](DImageBase.md#_textalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L166)

___

### \_textAlpha

• `Protected` **\_textAlpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DImageBase](DImageBase.md).[_textAlpha](DImageBase.md#_textalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L164)

___

### \_textColor

• `Protected` **\_textColor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DImageBase](DImageBase.md).[_textColor](DImageBase.md#_textcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L163)

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

[DImageBase](DImageBase.md).[_textFormatter](DImageBase.md#_textformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L167)

___

### \_textStyle

• `Protected` **\_textStyle**: [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)

#### Inherited from

[DImageBase](DImageBase.md).[_textStyle](DImageBase.md#_textstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L165)

___

### \_textValue

• `Protected` `Optional` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DImageBase](DImageBase.md).[_textValue](DImageBase.md#_textvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L161)

___

### \_textValueComputed

• `Protected` `Optional` **\_textValueComputed**: `string`

#### Inherited from

[DImageBase](DImageBase.md).[_textValueComputed](DImageBase.md#_textvaluecomputed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L162)

___

### \_title

• `Protected` **\_title**: `string`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_title](../interfaces/DTreeItem.md#_title)

#### Inherited from

[DImageBase](DImageBase.md).[_title](DImageBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_zIndex](../interfaces/DTreeItem.md#_zindex)

#### Inherited from

[DImageBase](DImageBase.md).[_zIndex](DImageBase.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[accessible](../interfaces/DTreeItem.md#accessible)

#### Inherited from

[DImageBase](DImageBase.md).[accessible](DImageBase.md#accessible)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[accessibleChildren](../interfaces/DTreeItem.md#accessiblechildren)

#### Inherited from

[DImageBase](DImageBase.md).[accessibleChildren](DImageBase.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[accessibleHint](../interfaces/DTreeItem.md#accessiblehint)

#### Inherited from

[DImageBase](DImageBase.md).[accessibleHint](DImageBase.md#accessiblehint)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[accessiblePointerEvents](../interfaces/DTreeItem.md#accessiblepointerevents)

#### Inherited from

[DImageBase](DImageBase.md).[accessiblePointerEvents](DImageBase.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8513

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[accessibleTitle](../interfaces/DTreeItem.md#accessibletitle)

#### Inherited from

[DImageBase](DImageBase.md).[accessibleTitle](DImageBase.md#accessibletitle)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[accessibleType](../interfaces/DTreeItem.md#accessibletype)

#### Inherited from

[DImageBase](DImageBase.md).[accessibleType](DImageBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[alpha](../interfaces/DTreeItem.md#alpha)

#### Inherited from

[DImageBase](DImageBase.md).[alpha](DImageBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[angle](../interfaces/DTreeItem.md#angle)

#### Inherited from

[DImageBase](DImageBase.md).[angle](DImageBase.md#angle)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[buttonMode](../interfaces/DTreeItem.md#buttonmode)

#### Inherited from

[DImageBase](DImageBase.md).[buttonMode](DImageBase.md#buttonmode)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[cacheAsBitmap](../interfaces/DTreeItem.md#cacheasbitmap)

#### Inherited from

[DImageBase](DImageBase.md).[cacheAsBitmap](DImageBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[children](../interfaces/DTreeItem.md#children)

#### Inherited from

[DImageBase](DImageBase.md).[children](DImageBase.md#children)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[cursor](../interfaces/DTreeItem.md#cursor)

#### Inherited from

[DImageBase](DImageBase.md).[cursor](DImageBase.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[filterArea](../interfaces/DTreeItem.md#filterarea)

#### Inherited from

[DImageBase](DImageBase.md).[filterArea](DImageBase.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[filters](../interfaces/DTreeItem.md#filters)

#### Inherited from

[DImageBase](DImageBase.md).[filters](DImageBase.md#filters)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[hitArea](../interfaces/DTreeItem.md#hitarea)

#### Inherited from

[DImageBase](DImageBase.md).[hitArea](DImageBase.md#hitarea)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[interactive](../interfaces/DTreeItem.md#interactive)

#### Inherited from

[DImageBase](DImageBase.md).[interactive](DImageBase.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8829

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`member`** {boolean}

**`memberof`** PIXI.Container#

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[interactiveChildren](../interfaces/DTreeItem.md#interactivechildren)

#### Inherited from

[DImageBase](DImageBase.md).[interactiveChildren](DImageBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[isMask](../interfaces/DTreeItem.md#ismask)

#### Inherited from

[DImageBase](DImageBase.md).[isMask](DImageBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[isSprite](../interfaces/DTreeItem.md#issprite)

#### Inherited from

[DImageBase](DImageBase.md).[isSprite](DImageBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[localTransform](../interfaces/DTreeItem.md#localtransform)

#### Inherited from

[DImageBase](DImageBase.md).[localTransform](DImageBase.md#localtransform)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[mask](../interfaces/DTreeItem.md#mask)

#### Inherited from

[DImageBase](DImageBase.md).[mask](DImageBase.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[name](../interfaces/DTreeItem.md#name)

#### Inherited from

[DImageBase](DImageBase.md).[name](DImageBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[parent](../interfaces/DTreeItem.md#parent)

#### Inherited from

[DImageBase](DImageBase.md).[parent](DImageBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[pivot](../interfaces/DTreeItem.md#pivot)

#### Inherited from

[DImageBase](DImageBase.md).[pivot](DImageBase.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8750

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[renderable](../interfaces/DTreeItem.md#renderable)

#### Inherited from

[DImageBase](DImageBase.md).[renderable](DImageBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[rotation](../interfaces/DTreeItem.md#rotation)

#### Inherited from

[DImageBase](DImageBase.md).[rotation](DImageBase.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[sortDirty](../interfaces/DTreeItem.md#sortdirty)

#### Inherited from

[DImageBase](DImageBase.md).[sortDirty](DImageBase.md#sortdirty)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[sortableChildren](../interfaces/DTreeItem.md#sortablechildren)

#### Inherited from

[DImageBase](DImageBase.md).[sortableChildren](DImageBase.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[transform](../interfaces/DTreeItem.md#transform)

#### Inherited from

[DImageBase](DImageBase.md).[transform](DImageBase.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[visible](../interfaces/DTreeItem.md#visible)

#### Inherited from

[DImageBase](DImageBase.md).[visible](DImageBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[worldAlpha](../interfaces/DTreeItem.md#worldalpha)

#### Inherited from

[DImageBase](DImageBase.md).[worldAlpha](DImageBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[worldTransform](../interfaces/DTreeItem.md#worldtransform)

#### Inherited from

[DImageBase](DImageBase.md).[worldTransform](DImageBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[worldVisible](../interfaces/DTreeItem.md#worldvisible)

#### Inherited from

[DImageBase](DImageBase.md).[worldVisible](DImageBase.md#worldvisible)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[zIndex](../interfaces/DTreeItem.md#zindex)

#### Inherited from

[DImageBase](DImageBase.md).[zIndex](DImageBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DImageBase](DImageBase.md).[LAYOUTER](DImageBase.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L94)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DImageBase](DImageBase.md).[WORK_CONTAINS_POINT](DImageBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

DTreeItem.background

#### Inherited from

DImageBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1355)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

DTreeItem.border

#### Inherited from

DImageBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Implementation of

DTreeItem.corner

#### Inherited from

DImageBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1351)

___

### data

• `get` **data**(): [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\>

#### Returns

[`DTreeData`](../interfaces/DTreeData.md)<`NODE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L94)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

DTreeItem.height

#### Inherited from

DImageBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

DTreeItem.height

#### Inherited from

DImageBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### image

• `get` **image**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Inherited from

DImageBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L125)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DImageBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L129)

___

### index

• `get` **index**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[index](../interfaces/DTreeItem.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L90)

___

### node

• `get` **node**(): `undefined` \| `NODE`

#### Returns

`undefined` \| `NODE`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[node](../interfaces/DTreeItem.md#node)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L82)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Implementation of

DTreeItem.outline

#### Inherited from

DImageBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1363)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Implementation of

DTreeItem.padding

#### Inherited from

DImageBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTreeItem.position

#### Inherited from

DImageBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1333)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

DTreeItem.reflowable

#### Inherited from

DImageBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTreeItem.scale

#### Inherited from

DImageBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1338)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

DTreeItem.shadow

#### Inherited from

DImageBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1678](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1678)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Implementation of

DTreeItem.shadow

#### Inherited from

DImageBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1682](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1682)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTreeItem.skew

#### Inherited from

DImageBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

DTreeItem.snippet

#### Inherited from

DImageBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

DTreeItem.state

#### Inherited from

DImageBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1565)

___

### text

• `get` **text**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Inherited from

DImageBase.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L197)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DImageBase.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L190)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Implementation of

DTreeItem.theme

#### Inherited from

DImageBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Implementation of

DTreeItem.theme

#### Inherited from

DImageBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Implementation of

DTreeItem.title

#### Inherited from

DImageBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1371)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Implementation of

DTreeItem.title

#### Inherited from

DImageBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1375)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

DTreeItem.type

#### Inherited from

DImageBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1130)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Implementation of

DTreeItem.unsafe

#### Inherited from

DImageBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1367)

___

### value

• `get` **value**(): `undefined` \| `NODE`

#### Returns

`undefined` \| `NODE`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[value](../interfaces/DTreeItem.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L86)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Implementation of

DTreeItem.weight

#### Inherited from

DImageBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

DTreeItem.width

#### Inherited from

DImageBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

DTreeItem.width

#### Inherited from

DImageBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

DTreeItem.x

#### Inherited from

DImageBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1135)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

DTreeItem.x

#### Inherited from

DImageBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

DTreeItem.y

#### Inherited from

DImageBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1175)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

DTreeItem.y

#### Inherited from

DImageBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1179)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_calculateBounds](../interfaces/DTreeItem.md#_calculatebounds)

#### Inherited from

[DImageBase](DImageBase.md).[_calculateBounds](DImageBase.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_recursivePostUpdateTransform](../interfaces/DTreeItem.md#_recursivepostupdatetransform)

#### Inherited from

[DImageBase](DImageBase.md).[_recursivePostUpdateTransform](DImageBase.md#_recursivepostupdatetransform)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[_render](../interfaces/DTreeItem.md#_render)

#### Inherited from

[DImageBase](DImageBase.md).[_render](DImageBase.md#_render)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[addChild](../interfaces/DTreeItem.md#addchild)

#### Inherited from

[DImageBase](DImageBase.md).[addChild](DImageBase.md#addchild)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[addChildAt](../interfaces/DTreeItem.md#addchildat)

#### Inherited from

[DImageBase](DImageBase.md).[addChildAt](DImageBase.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[addListener](../interfaces/DTreeItem.md#addlistener)

#### Inherited from

[DImageBase](DImageBase.md).[addListener](DImageBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[addListener](../interfaces/DTreeItem.md#addlistener)

#### Inherited from

[DImageBase](DImageBase.md).[addListener](DImageBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[applyTitle](../interfaces/DTreeItem.md#applytitle)

#### Inherited from

[DImageBase](DImageBase.md).[applyTitle](DImageBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L383)

___

### blur

▸ **blur**(`recursively?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[blur](../interfaces/DTreeItem.md#blur)

#### Inherited from

[DImageBase](DImageBase.md).[blur](DImageBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[calculateBounds](../interfaces/DTreeItem.md#calculatebounds)

#### Inherited from

[DImageBase](DImageBase.md).[calculateBounds](DImageBase.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### computeTextValue

▸ `Protected` **computeTextValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DImageBase](DImageBase.md).[computeTextValue](DImageBase.md#computetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L205)

___

### containsGlobalPoint

▸ `Protected` **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[containsGlobalPoint](../interfaces/DTreeItem.md#containsglobalpoint)

#### Inherited from

[DImageBase](DImageBase.md).[containsGlobalPoint](DImageBase.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1927](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1927)

___

### containsLocalPoint

▸ `Protected` **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[containsLocalPoint](../interfaces/DTreeItem.md#containslocalpoint)

#### Inherited from

[DImageBase](DImageBase.md).[containsLocalPoint](DImageBase.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1931](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1931)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[containsPoint](../interfaces/DTreeItem.md#containspoint)

#### Inherited from

[DImageBase](DImageBase.md).[containsPoint](DImageBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1918](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1918)

___

### createOrUpdateText

▸ `Protected` **createOrUpdateText**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[createOrUpdateText](DImageBase.md#createorupdatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L220)

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

[DImageBase](DImageBase.md).[createText](DImageBase.md#createtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L247)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[destroy](../interfaces/DTreeItem.md#destroy)

#### Inherited from

[DImageBase](DImageBase.md).[destroy](DImageBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L193)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`memberof`** PIXI.DisplayObject#

**`function`** displayObjectUpdateTransform

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[displayObjectUpdateTransform](../interfaces/DTreeItem.md#displayobjectupdatetransform)

#### Inherited from

[DImageBase](DImageBase.md).[displayObjectUpdateTransform](DImageBase.md#displayobjectupdatetransform)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[emit](../interfaces/DTreeItem.md#emit)

#### Inherited from

[DImageBase](DImageBase.md).[emit](DImageBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[eventNames](../interfaces/DTreeItem.md#eventnames)

#### Inherited from

[DImageBase](DImageBase.md).[eventNames](DImageBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[focus](../interfaces/DTreeItem.md#focus)

#### Inherited from

[DImageBase](DImageBase.md).[focus](DImageBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[focusOnClosest](../interfaces/DTreeItem.md#focusonclosest)

#### Inherited from

[DImageBase](DImageBase.md).[focusOnClosest](DImageBase.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1845](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1845)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getBounds](../interfaces/DTreeItem.md#getbounds)

#### Inherited from

[DImageBase](DImageBase.md).[getBounds](DImageBase.md#getbounds)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getChildAt](../interfaces/DTreeItem.md#getchildat)

#### Inherited from

[DImageBase](DImageBase.md).[getChildAt](DImageBase.md#getchildat)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getChildByName](../interfaces/DTreeItem.md#getchildbyname)

#### Inherited from

[DImageBase](DImageBase.md).[getChildByName](DImageBase.md#getchildbyname)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getChildIndex](../interfaces/DTreeItem.md#getchildindex)

#### Inherited from

[DImageBase](DImageBase.md).[getChildIndex](DImageBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getClearType](../interfaces/DTreeItem.md#getcleartype)

#### Inherited from

[DImageBase](DImageBase.md).[getClearType](DImageBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getClippingRect](../interfaces/DTreeItem.md#getclippingrect)

#### Inherited from

[DImageBase](DImageBase.md).[getClippingRect](DImageBase.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getGlobalPosition](../interfaces/DTreeItem.md#getglobalposition)

#### Inherited from

[DImageBase](DImageBase.md).[getGlobalPosition](DImageBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getHeight](../interfaces/DTreeItem.md#getheight)

#### Inherited from

[DImageBase](DImageBase.md).[getHeight](DImageBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1282)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getLocalBounds](../interfaces/DTreeItem.md#getlocalbounds)

#### Inherited from

[DImageBase](DImageBase.md).[getLocalBounds](DImageBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DImageBase](DImageBase.md).[getOverflowMask](DImageBase.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L251)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getParentOfSize](../interfaces/DTreeItem.md#getparentofsize)

#### Inherited from

[DImageBase](DImageBase.md).[getParentOfSize](DImageBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

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

[DImageBase](DImageBase.md).[getTextAlpha](DImageBase.md#gettextalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:318](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L318)

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

[DImageBase](DImageBase.md).[getTextColor](DImageBase.md#gettextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L303)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getThemeDefault](../interfaces/DTreeItem.md#getthemedefault)

#### Inherited from

[DImageBase](DImageBase.md).[getThemeDefault](DImageBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1893](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1893)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getType](../interfaces/DTreeItem.md#gettype)

#### Overrides

[DImageBase](DImageBase.md).[getType](DImageBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L243)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getWidth](../interfaces/DTreeItem.md#getwidth)

#### Inherited from

[DImageBase](DImageBase.md).[getWidth](DImageBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getX](../interfaces/DTreeItem.md#getx)

#### Inherited from

[DImageBase](DImageBase.md).[getX](DImageBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1143)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[getY](../interfaces/DTreeItem.md#gety)

#### Inherited from

[DImageBase](DImageBase.md).[getY](DImageBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1183)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[hasDirty](../interfaces/DTreeItem.md#hasdirty)

#### Inherited from

[DImageBase](DImageBase.md).[hasDirty](DImageBase.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1472)

___

### hasRefitableHeight

▸ `Protected` **hasRefitableHeight**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[hasRefitableHeight](../interfaces/DTreeItem.md#hasrefitableheight)

#### Inherited from

[DImageBase](DImageBase.md).[hasRefitableHeight](DImageBase.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1662](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1662)

___

### hasRefitableWidth

▸ `Protected` **hasRefitableWidth**(`target`): target is DBase<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase<any, any\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[hasRefitableWidth](../interfaces/DTreeItem.md#hasrefitablewidth)

#### Inherited from

[DImageBase](DImageBase.md).[hasRefitableWidth](DImageBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1668](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1668)

___

### hide

▸ **hide**(): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[hide](../interfaces/DTreeItem.md#hide)

#### Inherited from

[DImageBase](DImageBase.md).[hide](DImageBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

___

### hideText

▸ `Protected` **hideText**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[hideText](DImageBase.md#hidetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L366)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[init](../interfaces/DTreeItem.md#init)

#### Inherited from

[DImageBase](DImageBase.md).[init](DImageBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L97)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[initReflowable](../interfaces/DTreeItem.md#initreflowable)

#### Inherited from

[DImageBase](DImageBase.md).[initReflowable](DImageBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[isDirty](../interfaces/DTreeItem.md#isdirty)

#### Inherited from

[DImageBase](DImageBase.md).[isDirty](DImageBase.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1468)

___

### isEventTarget

▸ `Protected` **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[isEventTarget](../interfaces/DTreeItem.md#iseventtarget)

#### Inherited from

[DImageBase](DImageBase.md).[isEventTarget](DImageBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1790)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[isHidden](../interfaces/DTreeItem.md#ishidden)

#### Inherited from

[DImageBase](DImageBase.md).[isHidden](DImageBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[isHierarchyDirty](../interfaces/DTreeItem.md#ishierarchydirty)

#### Inherited from

[DImageBase](DImageBase.md).[isHierarchyDirty](DImageBase.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

___

### isRefitable

▸ `Protected` **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[isRefitable](../interfaces/DTreeItem.md#isrefitable)

#### Inherited from

[DImageBase](DImageBase.md).[isRefitable](DImageBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L174)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[isShown](../interfaces/DTreeItem.md#isshown)

#### Inherited from

[DImageBase](DImageBase.md).[isShown](DImageBase.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1400)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[listenerCount](../interfaces/DTreeItem.md#listenercount)

#### Inherited from

[DImageBase](DImageBase.md).[listenerCount](DImageBase.md#listenercount)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[listeners](../interfaces/DTreeItem.md#listeners)

#### Inherited from

[DImageBase](DImageBase.md).[listeners](DImageBase.md#listeners)

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

[DImageBase](DImageBase.md).[newImage](DImageBase.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L121)

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

[DImageBase](DImageBase.md).[newImages](DImageBase.md#newimages)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L102)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[off](../interfaces/DTreeItem.md#off)

#### Inherited from

[DImageBase](DImageBase.md).[off](DImageBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[on](../interfaces/DTreeItem.md#on)

#### Inherited from

[DImageBase](DImageBase.md).[on](DImageBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[on](../interfaces/DTreeItem.md#on)

#### Inherited from

[DImageBase](DImageBase.md).[on](DImageBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onBlur](../interfaces/DTreeItem.md#onblur)

#### Inherited from

[DImageBase](DImageBase.md).[onBlur](DImageBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1558)

___

### onChildBlur

▸ `Protected` **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onChildBlur](../interfaces/DTreeItem.md#onchildblur)

#### Inherited from

[DImageBase](DImageBase.md).[onChildBlur](DImageBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1551)

___

### onChildFocus

▸ `Protected` **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onChildFocus](../interfaces/DTreeItem.md#onchildfocus)

#### Inherited from

[DImageBase](DImageBase.md).[onChildFocus](DImageBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onChildrenChange](../interfaces/DTreeItem.md#onchildrenchange)

#### Inherited from

[DImageBase](DImageBase.md).[onChildrenChange](DImageBase.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onDblClick](../interfaces/DTreeItem.md#ondblclick)

#### Inherited from

[DImageBase](DImageBase.md).[onDblClick](DImageBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

___

### onDown

▸ `Protected` **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onDown](../interfaces/DTreeItem.md#ondown)

#### Inherited from

[DImageBase](DImageBase.md).[onDown](DImageBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1804)

___

### onDownThis

▸ `Protected` **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onDownThis](../interfaces/DTreeItem.md#ondownthis)

#### Inherited from

[DImageBase](DImageBase.md).[onDownThis](DImageBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1811)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onFocus](../interfaces/DTreeItem.md#onfocus)

#### Inherited from

[DImageBase](DImageBase.md).[onFocus](DImageBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1544)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onHierarchyDirty](../interfaces/DTreeItem.md#onhierarchydirty)

#### Inherited from

[DImageBase](DImageBase.md).[onHierarchyDirty](DImageBase.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1464)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onKeyDown](../interfaces/DTreeItem.md#onkeydown)

#### Overrides

[DImageBase](DImageBase.md).[onKeyDown](DImageBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L209)

___

### onKeyDownActivate

▸ `Protected` **onKeyDownActivate**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L232)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onKeyUp](../interfaces/DTreeItem.md#onkeyup)

#### Inherited from

[DImageBase](DImageBase.md).[onKeyUp](DImageBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1784](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1784)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onMove](../interfaces/DTreeItem.md#onmove)

#### Inherited from

[DImageBase](DImageBase.md).[onMove](DImageBase.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

___

### onOut

▸ `Protected` **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onOut](../interfaces/DTreeItem.md#onout)

#### Inherited from

[DImageBase](DImageBase.md).[onOut](DImageBase.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### onOver

▸ `Protected` **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onOver](../interfaces/DTreeItem.md#onover)

#### Inherited from

[DImageBase](DImageBase.md).[onOver](DImageBase.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1854](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1854)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onParentMove](../interfaces/DTreeItem.md#onparentmove)

#### Inherited from

[DImageBase](DImageBase.md).[onParentMove](DImageBase.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1768)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onParentResize](../interfaces/DTreeItem.md#onparentresize)

#### Inherited from

[DImageBase](DImageBase.md).[onParentResize](DImageBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1727)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onRefit](../interfaces/DTreeItem.md#onrefit)

#### Inherited from

[DImageBase](DImageBase.md).[onRefit](DImageBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1614)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onReflow](../interfaces/DTreeItem.md#onreflow)

#### Inherited from

[DImageBase](DImageBase.md).[onReflow](DImageBase.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L374)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onResize](../interfaces/DTreeItem.md#onresize)

#### Inherited from

[DImageBase](DImageBase.md).[onResize](DImageBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1103)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onScale](../interfaces/DTreeItem.md#onscale)

#### Inherited from

[DImageBase](DImageBase.md).[onScale](DImageBase.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L155)

___

### onShortcut

▸ `Protected` **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onShortcut](../interfaces/DTreeItem.md#onshortcut)

#### Inherited from

[DImageBase](DImageBase.md).[onShortcut](DImageBase.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onSkew](../interfaces/DTreeItem.md#onskew)

#### Inherited from

[DImageBase](DImageBase.md).[onSkew](DImageBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1125)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onStateChange](../interfaces/DTreeItem.md#onstatechange)

#### Inherited from

[DImageBase](DImageBase.md).[onStateChange](DImageBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L133)

___

### onTextChange

▸ `Protected` **onTextChange**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[onTextChange](DImageBase.md#ontextchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L201)

___

### onUp

▸ `Protected` **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onUp](../interfaces/DTreeItem.md#onup)

#### Inherited from

[DImageBase](DImageBase.md).[onUp](DImageBase.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1822](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1822)

___

### onUpThis

▸ `Protected` **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onUpThis](../interfaces/DTreeItem.md#onupthis)

#### Inherited from

[DImageBase](DImageBase.md).[onUpThis](DImageBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1829](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1829)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[onWheel](../interfaces/DTreeItem.md#onwheel)

#### Inherited from

[DImageBase](DImageBase.md).[onWheel](DImageBase.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1773](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1773)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[once](../interfaces/DTreeItem.md#once)

#### Inherited from

[DImageBase](DImageBase.md).[once](DImageBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[once](../interfaces/DTreeItem.md#once)

#### Inherited from

[DImageBase](DImageBase.md).[once](DImageBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[reflow](../interfaces/DTreeItem.md#reflow)

#### Inherited from

[DImageBase](DImageBase.md).[reflow](DImageBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1587](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1587)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[removeAllListeners](../interfaces/DTreeItem.md#removealllisteners)

#### Inherited from

[DImageBase](DImageBase.md).[removeAllListeners](DImageBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[removeAllListeners](../interfaces/DTreeItem.md#removealllisteners)

#### Inherited from

[DImageBase](DImageBase.md).[removeAllListeners](DImageBase.md#removealllisteners)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[removeChild](../interfaces/DTreeItem.md#removechild)

#### Inherited from

[DImageBase](DImageBase.md).[removeChild](DImageBase.md#removechild)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[removeChildAt](../interfaces/DTreeItem.md#removechildat)

#### Inherited from

[DImageBase](DImageBase.md).[removeChildAt](DImageBase.md#removechildat)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[removeChildren](../interfaces/DTreeItem.md#removechildren)

#### Inherited from

[DImageBase](DImageBase.md).[removeChildren](DImageBase.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[removeListener](../interfaces/DTreeItem.md#removelistener)

#### Inherited from

[DImageBase](DImageBase.md).[removeListener](DImageBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[removeListener](../interfaces/DTreeItem.md#removelistener)

#### Inherited from

[DImageBase](DImageBase.md).[removeListener](DImageBase.md#removelistener)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[render](../interfaces/DTreeItem.md#render)

#### Inherited from

[DImageBase](DImageBase.md).[render](DImageBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1883](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1883)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[renderAdvanced](../interfaces/DTreeItem.md#renderadvanced)

#### Inherited from

[DImageBase](DImageBase.md).[renderAdvanced](DImageBase.md#renderadvanced)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[resize](../interfaces/DTreeItem.md#resize)

#### Inherited from

[DImageBase](DImageBase.md).[resize](DImageBase.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[set](../interfaces/DTreeItem.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L105)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[setChildIndex](../interfaces/DTreeItem.md#setchildindex)

#### Inherited from

[DImageBase](DImageBase.md).[setChildIndex](DImageBase.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[setFocused](../interfaces/DTreeItem.md#setfocused)

#### Inherited from

[DImageBase](DImageBase.md).[setFocused](DImageBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1476)

___

### setHeight

▸ **setHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[setHeight](../interfaces/DTreeItem.md#setheight)

#### Inherited from

[DImageBase](DImageBase.md).[setHeight](DImageBase.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1286)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[setParent](../interfaces/DTreeItem.md#setparent)

#### Inherited from

[DImageBase](DImageBase.md).[setParent](DImageBase.md#setparent)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[setTransform](../interfaces/DTreeItem.md#settransform)

#### Inherited from

[DImageBase](DImageBase.md).[setTransform](DImageBase.md#settransform)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[setWidth](../interfaces/DTreeItem.md#setwidth)

#### Inherited from

[DImageBase](DImageBase.md).[setWidth](DImageBase.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1227)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[setX](../interfaces/DTreeItem.md#setx)

#### Inherited from

[DImageBase](DImageBase.md).[setX](DImageBase.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1152)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[setY](../interfaces/DTreeItem.md#sety)

#### Inherited from

[DImageBase](DImageBase.md).[setY](DImageBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1192)

___

### show

▸ **show**(): [`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTreeItemText`](DTreeItemText.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[show](../interfaces/DTreeItem.md#show)

#### Inherited from

[DImageBase](DImageBase.md).[show](DImageBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1391)

___

### showText

▸ `Protected` **showText**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[showText](DImageBase.md#showtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L358)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[sortChildren](../interfaces/DTreeItem.md#sortchildren)

#### Inherited from

[DImageBase](DImageBase.md).[sortChildren](DImageBase.md#sortchildren)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[swapChildren](../interfaces/DTreeItem.md#swapchildren)

#### Inherited from

[DImageBase](DImageBase.md).[swapChildren](DImageBase.md#swapchildren)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[toCursor](../interfaces/DTreeItem.md#tocursor)

#### Inherited from

[DImageBase](DImageBase.md).[toCursor](DImageBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[toDirty](../interfaces/DTreeItem.md#todirty)

#### Inherited from

[DImageBase](DImageBase.md).[toDirty](DImageBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[toGlobal](../interfaces/DTreeItem.md#toglobal)

#### Inherited from

[DImageBase](DImageBase.md).[toGlobal](DImageBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[toHasDirty](../interfaces/DTreeItem.md#tohasdirty)

#### Inherited from

[DImageBase](DImageBase.md).[toHasDirty](DImageBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1427)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[toHierarchyDirty](../interfaces/DTreeItem.md#tohierarchydirty)

#### Inherited from

[DImageBase](DImageBase.md).[toHierarchyDirty](DImageBase.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1443)

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

[DImageBase](DImageBase.md).[toImageOptions](DImageBase.md#toimageoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L114)

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

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[toLocal](../interfaces/DTreeItem.md#tolocal)

#### Inherited from

[DImageBase](DImageBase.md).[toLocal](DImageBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[toParentHasDirty](../interfaces/DTreeItem.md#toparenthasdirty)

#### Inherited from

[DImageBase](DImageBase.md).[toParentHasDirty](DImageBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[toParentHierarchyDirty](../interfaces/DTreeItem.md#toparenthierarchydirty)

#### Inherited from

[DImageBase](DImageBase.md).[toParentHierarchyDirty](DImageBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1453)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[toParentResized](../interfaces/DTreeItem.md#toparentresized)

#### Inherited from

[DImageBase](DImageBase.md).[toParentResized](DImageBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L98)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[unset](../interfaces/DTreeItem.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L136)

___

### updateText

▸ `Protected` **updateText**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[updateText](DImageBase.md#updatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L142)

___

### updateTextAndImage

▸ `Protected` **updateTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[updateTextAndImage](DImageBase.md#updatetextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L147)

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

[DImageBase](DImageBase.md).[updateTextColor](DImageBase.md#updatetextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L333)

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

[DImageBase](DImageBase.md).[updateTextPosition](DImageBase.md#updatetextposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L263)

___

### updateTextValue

▸ `Protected` **updateTextValue**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[updateTextValue](DImageBase.md#updatetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L340)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Implementation of

[DTreeItem](../interfaces/DTreeItem.md).[updateTransform](../interfaces/DTreeItem.md#updatetransform)

#### Inherited from

[DImageBase](DImageBase.md).[updateTransform](DImageBase.md#updatetransform)

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

[DImageBase](DImageBase.md).[mixin](DImageBase.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
