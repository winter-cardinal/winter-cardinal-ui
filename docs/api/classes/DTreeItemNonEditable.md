[Winter Cardinal UI - v0.227.0](../index.md) / DTreeItemNonEditable

# Class: DTreeItemNonEditable<NODE, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |
| `THEME` | extends [`DThemeTreeItemNonEditable`](../interfaces/DThemeTreeItemNonEditable.md) = [`DThemeTreeItemNonEditable`](../interfaces/DThemeTreeItemNonEditable.md) |
| `OPTIONS` | extends [`DTreeItemNonEditableOptions`](../interfaces/DTreeItemNonEditableOptions.md)<`NODE`, `THEME`\> = [`DTreeItemNonEditableOptions`](../interfaces/DTreeItemNonEditableOptions.md)<`NODE`, `THEME`\> |

## Hierarchy

- [`DTreeItemButton`](DTreeItemButton.md)<`NODE`, `THEME`, `OPTIONS`\>

  ↳ **`DTreeItemNonEditable`**

## Table of contents

### Constructors

- [constructor](DTreeItemNonEditable.md#constructor)

### Properties

- [\_accessibleActive](DTreeItemNonEditable.md#_accessibleactive)
- [\_accessibleDiv](DTreeItemNonEditable.md#_accessiblediv)
- [\_auto](DTreeItemNonEditable.md#_auto)
- [\_background](DTreeItemNonEditable.md#_background)
- [\_border](DTreeItemNonEditable.md#_border)
- [\_bounds](DTreeItemNonEditable.md#_bounds)
- [\_clearType](DTreeItemNonEditable.md#_cleartype)
- [\_corner](DTreeItemNonEditable.md#_corner)
- [\_cursor](DTreeItemNonEditable.md#_cursor)
- [\_data](DTreeItemNonEditable.md#_data)
- [\_destroyed](DTreeItemNonEditable.md#_destroyed)
- [\_images](DTreeItemNonEditable.md#_images)
- [\_index](DTreeItemNonEditable.md#_index)
- [\_isOverflowMaskEnabled](DTreeItemNonEditable.md#_isoverflowmaskenabled)
- [\_isTextVisible](DTreeItemNonEditable.md#_istextvisible)
- [\_lastDownPoint](DTreeItemNonEditable.md#_lastdownpoint)
- [\_lastSortedIndex](DTreeItemNonEditable.md#_lastsortedindex)
- [\_mask](DTreeItemNonEditable.md#_mask)
- [\_node](DTreeItemNonEditable.md#_node)
- [\_options](DTreeItemNonEditable.md#_options)
- [\_outline](DTreeItemNonEditable.md#_outline)
- [\_overflowMask](DTreeItemNonEditable.md#_overflowmask)
- [\_padding](DTreeItemNonEditable.md#_padding)
- [\_reflowable](DTreeItemNonEditable.md#_reflowable)
- [\_shortcuts](DTreeItemNonEditable.md#_shortcuts)
- [\_snippet](DTreeItemNonEditable.md#_snippet)
- [\_tempDisplayObjectParent](DTreeItemNonEditable.md#_tempdisplayobjectparent)
- [\_text](DTreeItemNonEditable.md#_text)
- [\_textAlign](DTreeItemNonEditable.md#_textalign)
- [\_textAlpha](DTreeItemNonEditable.md#_textalpha)
- [\_textColor](DTreeItemNonEditable.md#_textcolor)
- [\_textFormatter](DTreeItemNonEditable.md#_textformatter)
- [\_textStyle](DTreeItemNonEditable.md#_textstyle)
- [\_textValue](DTreeItemNonEditable.md#_textvalue)
- [\_textValueComputed](DTreeItemNonEditable.md#_textvaluecomputed)
- [\_title](DTreeItemNonEditable.md#_title)
- [\_when](DTreeItemNonEditable.md#_when)
- [\_zIndex](DTreeItemNonEditable.md#_zindex)
- [accessible](DTreeItemNonEditable.md#accessible)
- [accessibleChildren](DTreeItemNonEditable.md#accessiblechildren)
- [accessibleHint](DTreeItemNonEditable.md#accessiblehint)
- [accessiblePointerEvents](DTreeItemNonEditable.md#accessiblepointerevents)
- [accessibleTitle](DTreeItemNonEditable.md#accessibletitle)
- [accessibleType](DTreeItemNonEditable.md#accessibletype)
- [alpha](DTreeItemNonEditable.md#alpha)
- [angle](DTreeItemNonEditable.md#angle)
- [buttonMode](DTreeItemNonEditable.md#buttonmode)
- [cacheAsBitmap](DTreeItemNonEditable.md#cacheasbitmap)
- [children](DTreeItemNonEditable.md#children)
- [cursor](DTreeItemNonEditable.md#cursor)
- [filterArea](DTreeItemNonEditable.md#filterarea)
- [filters](DTreeItemNonEditable.md#filters)
- [hitArea](DTreeItemNonEditable.md#hitarea)
- [interactive](DTreeItemNonEditable.md#interactive)
- [interactiveChildren](DTreeItemNonEditable.md#interactivechildren)
- [isMask](DTreeItemNonEditable.md#ismask)
- [isSprite](DTreeItemNonEditable.md#issprite)
- [localTransform](DTreeItemNonEditable.md#localtransform)
- [mask](DTreeItemNonEditable.md#mask)
- [name](DTreeItemNonEditable.md#name)
- [parent](DTreeItemNonEditable.md#parent)
- [pivot](DTreeItemNonEditable.md#pivot)
- [renderable](DTreeItemNonEditable.md#renderable)
- [rotation](DTreeItemNonEditable.md#rotation)
- [sortDirty](DTreeItemNonEditable.md#sortdirty)
- [sortableChildren](DTreeItemNonEditable.md#sortablechildren)
- [transform](DTreeItemNonEditable.md#transform)
- [visible](DTreeItemNonEditable.md#visible)
- [worldAlpha](DTreeItemNonEditable.md#worldalpha)
- [worldTransform](DTreeItemNonEditable.md#worldtransform)
- [worldVisible](DTreeItemNonEditable.md#worldvisible)
- [zIndex](DTreeItemNonEditable.md#zindex)
- [LAYOUTER](DTreeItemNonEditable.md#layouter)
- [WORK\_CONTAINS\_POINT](DTreeItemNonEditable.md#work_contains_point)

### Accessors

- [background](DTreeItemNonEditable.md#background)
- [border](DTreeItemNonEditable.md#border)
- [corner](DTreeItemNonEditable.md#corner)
- [data](DTreeItemNonEditable.md#data)
- [height](DTreeItemNonEditable.md#height)
- [image](DTreeItemNonEditable.md#image)
- [index](DTreeItemNonEditable.md#index)
- [node](DTreeItemNonEditable.md#node)
- [options](DTreeItemNonEditable.md#options)
- [outline](DTreeItemNonEditable.md#outline)
- [padding](DTreeItemNonEditable.md#padding)
- [position](DTreeItemNonEditable.md#position)
- [reflowable](DTreeItemNonEditable.md#reflowable)
- [scale](DTreeItemNonEditable.md#scale)
- [shadow](DTreeItemNonEditable.md#shadow)
- [skew](DTreeItemNonEditable.md#skew)
- [snippet](DTreeItemNonEditable.md#snippet)
- [state](DTreeItemNonEditable.md#state)
- [text](DTreeItemNonEditable.md#text)
- [theme](DTreeItemNonEditable.md#theme)
- [title](DTreeItemNonEditable.md#title)
- [type](DTreeItemNonEditable.md#type)
- [unsafe](DTreeItemNonEditable.md#unsafe)
- [value](DTreeItemNonEditable.md#value)
- [weight](DTreeItemNonEditable.md#weight)
- [width](DTreeItemNonEditable.md#width)
- [x](DTreeItemNonEditable.md#x)
- [y](DTreeItemNonEditable.md#y)

### Methods

- [\_calculateBounds](DTreeItemNonEditable.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTreeItemNonEditable.md#_recursivepostupdatetransform)
- [\_render](DTreeItemNonEditable.md#_render)
- [activate](DTreeItemNonEditable.md#activate)
- [addChild](DTreeItemNonEditable.md#addchild)
- [addChildAt](DTreeItemNonEditable.md#addchildat)
- [addListener](DTreeItemNonEditable.md#addlistener)
- [applyTitle](DTreeItemNonEditable.md#applytitle)
- [blur](DTreeItemNonEditable.md#blur)
- [calculateBounds](DTreeItemNonEditable.md#calculatebounds)
- [computeTextValue](DTreeItemNonEditable.md#computetextvalue)
- [containsGlobalPoint](DTreeItemNonEditable.md#containsglobalpoint)
- [containsLocalPoint](DTreeItemNonEditable.md#containslocalpoint)
- [containsPoint](DTreeItemNonEditable.md#containspoint)
- [createOrUpdateText](DTreeItemNonEditable.md#createorupdatetext)
- [createText](DTreeItemNonEditable.md#createtext)
- [destroy](DTreeItemNonEditable.md#destroy)
- [displayObjectUpdateTransform](DTreeItemNonEditable.md#displayobjectupdatetransform)
- [emit](DTreeItemNonEditable.md#emit)
- [eventNames](DTreeItemNonEditable.md#eventnames)
- [focus](DTreeItemNonEditable.md#focus)
- [focusOnClosest](DTreeItemNonEditable.md#focusonclosest)
- [getBounds](DTreeItemNonEditable.md#getbounds)
- [getChildAt](DTreeItemNonEditable.md#getchildat)
- [getChildByName](DTreeItemNonEditable.md#getchildbyname)
- [getChildIndex](DTreeItemNonEditable.md#getchildindex)
- [getClearType](DTreeItemNonEditable.md#getcleartype)
- [getClippingRect](DTreeItemNonEditable.md#getclippingrect)
- [getGlobalPosition](DTreeItemNonEditable.md#getglobalposition)
- [getHeight](DTreeItemNonEditable.md#getheight)
- [getLocalBounds](DTreeItemNonEditable.md#getlocalbounds)
- [getOverflowMask](DTreeItemNonEditable.md#getoverflowmask)
- [getParentOfSize](DTreeItemNonEditable.md#getparentofsize)
- [getTextAlpha](DTreeItemNonEditable.md#gettextalpha)
- [getTextColor](DTreeItemNonEditable.md#gettextcolor)
- [getThemeDefault](DTreeItemNonEditable.md#getthemedefault)
- [getType](DTreeItemNonEditable.md#gettype)
- [getWidth](DTreeItemNonEditable.md#getwidth)
- [getX](DTreeItemNonEditable.md#getx)
- [getY](DTreeItemNonEditable.md#gety)
- [hasDirty](DTreeItemNonEditable.md#hasdirty)
- [hasRefitableHeight](DTreeItemNonEditable.md#hasrefitableheight)
- [hasRefitableWidth](DTreeItemNonEditable.md#hasrefitablewidth)
- [hide](DTreeItemNonEditable.md#hide)
- [hideText](DTreeItemNonEditable.md#hidetext)
- [init](DTreeItemNonEditable.md#init)
- [initReflowable](DTreeItemNonEditable.md#initreflowable)
- [isDirty](DTreeItemNonEditable.md#isdirty)
- [isEventTarget](DTreeItemNonEditable.md#iseventtarget)
- [isHidden](DTreeItemNonEditable.md#ishidden)
- [isHierarchyDirty](DTreeItemNonEditable.md#ishierarchydirty)
- [isRefitable](DTreeItemNonEditable.md#isrefitable)
- [isShown](DTreeItemNonEditable.md#isshown)
- [listenerCount](DTreeItemNonEditable.md#listenercount)
- [listeners](DTreeItemNonEditable.md#listeners)
- [newImage](DTreeItemNonEditable.md#newimage)
- [newImages](DTreeItemNonEditable.md#newimages)
- [off](DTreeItemNonEditable.md#off)
- [on](DTreeItemNonEditable.md#on)
- [onActivate](DTreeItemNonEditable.md#onactivate)
- [onActivateKeyDown](DTreeItemNonEditable.md#onactivatekeydown)
- [onActivateKeyUp](DTreeItemNonEditable.md#onactivatekeyup)
- [onBlur](DTreeItemNonEditable.md#onblur)
- [onChildBlur](DTreeItemNonEditable.md#onchildblur)
- [onChildFocus](DTreeItemNonEditable.md#onchildfocus)
- [onChildrenChange](DTreeItemNonEditable.md#onchildrenchange)
- [onClick](DTreeItemNonEditable.md#onclick)
- [onDblClick](DTreeItemNonEditable.md#ondblclick)
- [onDown](DTreeItemNonEditable.md#ondown)
- [onDownThis](DTreeItemNonEditable.md#ondownthis)
- [onFocus](DTreeItemNonEditable.md#onfocus)
- [onHierarchyDirty](DTreeItemNonEditable.md#onhierarchydirty)
- [onKeyDown](DTreeItemNonEditable.md#onkeydown)
- [onKeyDownActivate](DTreeItemNonEditable.md#onkeydownactivate)
- [onKeyUp](DTreeItemNonEditable.md#onkeyup)
- [onMove](DTreeItemNonEditable.md#onmove)
- [onOut](DTreeItemNonEditable.md#onout)
- [onOver](DTreeItemNonEditable.md#onover)
- [onParentMove](DTreeItemNonEditable.md#onparentmove)
- [onParentResize](DTreeItemNonEditable.md#onparentresize)
- [onRefit](DTreeItemNonEditable.md#onrefit)
- [onReflow](DTreeItemNonEditable.md#onreflow)
- [onResize](DTreeItemNonEditable.md#onresize)
- [onScale](DTreeItemNonEditable.md#onscale)
- [onSelect](DTreeItemNonEditable.md#onselect)
- [onShortcut](DTreeItemNonEditable.md#onshortcut)
- [onSkew](DTreeItemNonEditable.md#onskew)
- [onStateChange](DTreeItemNonEditable.md#onstatechange)
- [onTextChange](DTreeItemNonEditable.md#ontextchange)
- [onUp](DTreeItemNonEditable.md#onup)
- [onUpThis](DTreeItemNonEditable.md#onupthis)
- [onWheel](DTreeItemNonEditable.md#onwheel)
- [once](DTreeItemNonEditable.md#once)
- [reflow](DTreeItemNonEditable.md#reflow)
- [removeAllListeners](DTreeItemNonEditable.md#removealllisteners)
- [removeChild](DTreeItemNonEditable.md#removechild)
- [removeChildAt](DTreeItemNonEditable.md#removechildat)
- [removeChildren](DTreeItemNonEditable.md#removechildren)
- [removeListener](DTreeItemNonEditable.md#removelistener)
- [render](DTreeItemNonEditable.md#render)
- [renderAdvanced](DTreeItemNonEditable.md#renderadvanced)
- [resize](DTreeItemNonEditable.md#resize)
- [set](DTreeItemNonEditable.md#set)
- [setChildIndex](DTreeItemNonEditable.md#setchildindex)
- [setFocused](DTreeItemNonEditable.md#setfocused)
- [setHeight](DTreeItemNonEditable.md#setheight)
- [setParent](DTreeItemNonEditable.md#setparent)
- [setTransform](DTreeItemNonEditable.md#settransform)
- [setWidth](DTreeItemNonEditable.md#setwidth)
- [setX](DTreeItemNonEditable.md#setx)
- [setY](DTreeItemNonEditable.md#sety)
- [show](DTreeItemNonEditable.md#show)
- [showText](DTreeItemNonEditable.md#showtext)
- [sortChildren](DTreeItemNonEditable.md#sortchildren)
- [swapChildren](DTreeItemNonEditable.md#swapchildren)
- [toCursor](DTreeItemNonEditable.md#tocursor)
- [toDirty](DTreeItemNonEditable.md#todirty)
- [toGlobal](DTreeItemNonEditable.md#toglobal)
- [toHasDirty](DTreeItemNonEditable.md#tohasdirty)
- [toHierarchyDirty](DTreeItemNonEditable.md#tohierarchydirty)
- [toImageOptions](DTreeItemNonEditable.md#toimageoptions)
- [toLocal](DTreeItemNonEditable.md#tolocal)
- [toParentHasDirty](DTreeItemNonEditable.md#toparenthasdirty)
- [toParentHierarchyDirty](DTreeItemNonEditable.md#toparenthierarchydirty)
- [toParentResized](DTreeItemNonEditable.md#toparentresized)
- [toggle](DTreeItemNonEditable.md#toggle)
- [unset](DTreeItemNonEditable.md#unset)
- [updateText](DTreeItemNonEditable.md#updatetext)
- [updateTextAndImage](DTreeItemNonEditable.md#updatetextandimage)
- [updateTextColor](DTreeItemNonEditable.md#updatetextcolor)
- [updateTextPosition](DTreeItemNonEditable.md#updatetextposition)
- [updateTextValue](DTreeItemNonEditable.md#updatetextvalue)
- [updateTransform](DTreeItemNonEditable.md#updatetransform)
- [mixin](DTreeItemNonEditable.md#mixin)

## Constructors

### constructor

• **new DTreeItemNonEditable**<`NODE`, `THEME`, `OPTIONS`\>(`data`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) = [`DTreeNode`](../interfaces/DTreeNode.md) |
| `THEME` | extends [`DThemeTreeItemNonEditable`](../interfaces/DThemeTreeItemNonEditable.md)<`THEME`\> = [`DThemeTreeItemNonEditable`](../interfaces/DThemeTreeItemNonEditable.md) |
| `OPTIONS` | extends [`DTreeItemNonEditableOptions`](../interfaces/DTreeItemNonEditableOptions.md)<`NODE`, `THEME`, `any`, `OPTIONS`\> = [`DTreeItemNonEditableOptions`](../interfaces/DTreeItemNonEditableOptions.md)<`NODE`, `THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\> |
| `options?` | `OPTIONS` |

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[constructor](DTreeItemButton.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L32)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_accessibleActive](DTreeItemButton.md#_accessibleactive)

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

[DTreeItemButton](DTreeItemButton.md).[_accessibleDiv](DTreeItemButton.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_auto](DTreeItemButton.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_background](DTreeItemButton.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_border](DTreeItemButton.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_bounds](DTreeItemButton.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_clearType](DTreeItemButton.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_corner](DTreeItemButton.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_cursor](DTreeItemButton.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_data

• `Protected` **\_data**: [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_data](DTreeItemButton.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L70)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_destroyed](DTreeItemButton.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_images

• `Protected` **\_images**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_images](DTreeItemButton.md#_images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L95)

___

### \_index

• `Protected` `Optional` **\_index**: `number`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_index](DTreeItemButton.md#_index)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L72)

___

### \_isOverflowMaskEnabled

• `Protected` **\_isOverflowMaskEnabled**: `boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_isOverflowMaskEnabled](DTreeItemButton.md#_isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L168)

___

### \_isTextVisible

• `Protected` **\_isTextVisible**: `boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_isTextVisible](DTreeItemButton.md#_istextvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L170)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_lastDownPoint](DTreeItemButton.md#_lastdownpoint)

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

[DTreeItemButton](DTreeItemButton.md).[_lastSortedIndex](DTreeItemButton.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_mask](DTreeItemButton.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_node

• `Protected` `Optional` **\_node**: `NODE`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_node](DTreeItemButton.md#_node)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L71)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_options](DTreeItemButton.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_outline](DTreeItemButton.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_overflowMask](DTreeItemButton.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L169)

___

### \_padding

• `Protected` **\_padding**: [`DBasePaddingAdjustable`](DBasePaddingAdjustable.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_padding](DTreeItemButton.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L69)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_reflowable](DTreeItemButton.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_shortcuts](DTreeItemButton.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_snippet](DTreeItemButton.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_tempDisplayObjectParent](DTreeItemButton.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_text](DTreeItemButton.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L160)

___

### \_textAlign

• `Protected` **\_textAlign**: [`DTextBaseAlign`](../interfaces/DTextBaseAlign.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_textAlign](DTreeItemButton.md#_textalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L166)

___

### \_textAlpha

• `Protected` **\_textAlpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_textAlpha](DTreeItemButton.md#_textalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L164)

___

### \_textColor

• `Protected` **\_textColor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_textColor](DTreeItemButton.md#_textcolor)

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

[DTreeItemButton](DTreeItemButton.md).[_textFormatter](DTreeItemButton.md#_textformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L167)

___

### \_textStyle

• `Protected` **\_textStyle**: [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_textStyle](DTreeItemButton.md#_textstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L165)

___

### \_textValue

• `Protected` `Optional` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_textValue](DTreeItemButton.md#_textvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L161)

___

### \_textValueComputed

• `Protected` `Optional` **\_textValueComputed**: `string`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_textValueComputed](DTreeItemButton.md#_textvaluecomputed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L162)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_title](DTreeItemButton.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_when

• `Protected` **\_when**: [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_when](DTreeItemButton.md#_when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L30)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_zIndex](DTreeItemButton.md#_zindex)

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

[DTreeItemButton](DTreeItemButton.md).[accessible](DTreeItemButton.md#accessible)

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

[DTreeItemButton](DTreeItemButton.md).[accessibleChildren](DTreeItemButton.md#accessiblechildren)

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

[DTreeItemButton](DTreeItemButton.md).[accessibleHint](DTreeItemButton.md#accessiblehint)

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

[DTreeItemButton](DTreeItemButton.md).[accessiblePointerEvents](DTreeItemButton.md#accessiblepointerevents)

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

[DTreeItemButton](DTreeItemButton.md).[accessibleTitle](DTreeItemButton.md#accessibletitle)

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

[DTreeItemButton](DTreeItemButton.md).[accessibleType](DTreeItemButton.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[alpha](DTreeItemButton.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[angle](DTreeItemButton.md#angle)

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

[DTreeItemButton](DTreeItemButton.md).[buttonMode](DTreeItemButton.md#buttonmode)

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

[DTreeItemButton](DTreeItemButton.md).[cacheAsBitmap](DTreeItemButton.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[children](DTreeItemButton.md#children)

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

[DTreeItemButton](DTreeItemButton.md).[cursor](DTreeItemButton.md#cursor)

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

[DTreeItemButton](DTreeItemButton.md).[filterArea](DTreeItemButton.md#filterarea)

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

[DTreeItemButton](DTreeItemButton.md).[filters](DTreeItemButton.md#filters)

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

[DTreeItemButton](DTreeItemButton.md).[hitArea](DTreeItemButton.md#hitarea)

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

[DTreeItemButton](DTreeItemButton.md).[interactive](DTreeItemButton.md#interactive)

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

[DTreeItemButton](DTreeItemButton.md).[interactiveChildren](DTreeItemButton.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[isMask](DTreeItemButton.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[isSprite](DTreeItemButton.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[localTransform](DTreeItemButton.md#localtransform)

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

[DTreeItemButton](DTreeItemButton.md).[mask](DTreeItemButton.md#mask)

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

[DTreeItemButton](DTreeItemButton.md).[name](DTreeItemButton.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[parent](DTreeItemButton.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[pivot](DTreeItemButton.md#pivot)

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

[DTreeItemButton](DTreeItemButton.md).[renderable](DTreeItemButton.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[rotation](DTreeItemButton.md#rotation)

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

[DTreeItemButton](DTreeItemButton.md).[sortDirty](DTreeItemButton.md#sortdirty)

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

[DTreeItemButton](DTreeItemButton.md).[sortableChildren](DTreeItemButton.md#sortablechildren)

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

[DTreeItemButton](DTreeItemButton.md).[transform](DTreeItemButton.md#transform)

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

[DTreeItemButton](DTreeItemButton.md).[visible](DTreeItemButton.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[worldAlpha](DTreeItemButton.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[worldTransform](DTreeItemButton.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[worldVisible](DTreeItemButton.md#worldvisible)

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

[DTreeItemButton](DTreeItemButton.md).[zIndex](DTreeItemButton.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[LAYOUTER](DTreeItemButton.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L94)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[WORK_CONTAINS_POINT](DTreeItemButton.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:733](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L733)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DTreeItemButton.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DTreeItemButton.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DTreeItemButton.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### data

• `get` **data**(): [`DTreeData`](../interfaces/DTreeData.md)<`NODE`\>

#### Returns

[`DTreeData`](../interfaces/DTreeData.md)<`NODE`\>

#### Inherited from

DTreeItemButton.data

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L92)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemButton.height

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

DTreeItemButton.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### image

• `get` **image**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Inherited from

DTreeItemButton.image

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

DTreeItemButton.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L129)

___

### index

• `get` **index**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

DTreeItemButton.index

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L88)

___

### node

• `get` **node**(): `undefined` \| `NODE`

#### Returns

`undefined` \| `NODE`

#### Inherited from

DTreeItemButton.node

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L80)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DTreeItemButton.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DTreeItemButton.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DTreeItemButton.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTreeItemButton.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DTreeItemButton.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTreeItemButton.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DTreeItemButton.shadow

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

DTreeItemButton.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTreeItemButton.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DTreeItemButton.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DTreeItemButton.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### text

• `get` **text**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Inherited from

DTreeItemButton.text

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

DTreeItemButton.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L190)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DTreeItemButton.theme

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

DTreeItemButton.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DTreeItemButton.title

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

DTreeItemButton.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DTreeItemButton.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DTreeItemButton.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### value

• `get` **value**(): `undefined` \| `NODE`

#### Returns

`undefined` \| `NODE`

#### Inherited from

DTreeItemButton.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L84)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemButton.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemButton.width

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

DTreeItemButton.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemButton.x

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

DTreeItemButton.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DTreeItemButton.y

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

DTreeItemButton.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[_calculateBounds](DTreeItemButton.md#_calculatebounds)

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

[DTreeItemButton](DTreeItemButton.md).[_recursivePostUpdateTransform](DTreeItemButton.md#_recursivepostupdatetransform)

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

[DTreeItemButton](DTreeItemButton.md).[_render](DTreeItemButton.md#_render)

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

[DTreeItemButton](DTreeItemButton.md).[activate](DTreeItemButton.md#activate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L57)

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

[DTreeItemButton](DTreeItemButton.md).[addChild](DTreeItemButton.md#addchild)

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

[DTreeItemButton](DTreeItemButton.md).[addChildAt](DTreeItemButton.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[addListener](DTreeItemButton.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[addListener](DTreeItemButton.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[applyTitle](DTreeItemButton.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L383)

___

### blur

▸ **blur**(`recursively?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[blur](DTreeItemButton.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[calculateBounds](DTreeItemButton.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### computeTextValue

▸ `Protected` **computeTextValue**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[computeTextValue](DTreeItemButton.md#computetextvalue)

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

[DTreeItemButton](DTreeItemButton.md).[containsGlobalPoint](DTreeItemButton.md#containsglobalpoint)

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

[DTreeItemButton](DTreeItemButton.md).[containsLocalPoint](DTreeItemButton.md#containslocalpoint)

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

[DTreeItemButton](DTreeItemButton.md).[containsPoint](DTreeItemButton.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### createOrUpdateText

▸ `Protected` **createOrUpdateText**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[createOrUpdateText](DTreeItemButton.md#createorupdatetext)

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

[DTreeItemButton](DTreeItemButton.md).[createText](DTreeItemButton.md#createtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L247)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[destroy](DTreeItemButton.md#destroy)

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

[DTreeItemButton](DTreeItemButton.md).[displayObjectUpdateTransform](DTreeItemButton.md#displayobjectupdatetransform)

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

[DTreeItemButton](DTreeItemButton.md).[emit](DTreeItemButton.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[eventNames](DTreeItemButton.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[focus](DTreeItemButton.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[focusOnClosest](DTreeItemButton.md#focusonclosest)

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

[DTreeItemButton](DTreeItemButton.md).[getBounds](DTreeItemButton.md#getbounds)

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

[DTreeItemButton](DTreeItemButton.md).[getChildAt](DTreeItemButton.md#getchildat)

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

[DTreeItemButton](DTreeItemButton.md).[getChildByName](DTreeItemButton.md#getchildbyname)

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

[DTreeItemButton](DTreeItemButton.md).[getChildIndex](DTreeItemButton.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[getClearType](DTreeItemButton.md#getcleartype)

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

[DTreeItemButton](DTreeItemButton.md).[getClippingRect](DTreeItemButton.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1970](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1970)

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

[DTreeItemButton](DTreeItemButton.md).[getGlobalPosition](DTreeItemButton.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[getHeight](DTreeItemButton.md#getheight)

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

[DTreeItemButton](DTreeItemButton.md).[getLocalBounds](DTreeItemButton.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[getOverflowMask](DTreeItemButton.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L251)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[getParentOfSize](DTreeItemButton.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

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

[DTreeItemButton](DTreeItemButton.md).[getTextAlpha](DTreeItemButton.md#gettextalpha)

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

[DTreeItemButton](DTreeItemButton.md).[getTextColor](DTreeItemButton.md#gettextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L303)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[getThemeDefault](DTreeItemButton.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DTreeItemButton](DTreeItemButton.md).[getType](DTreeItemButton.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-non-editable.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-non-editable.ts#L57)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[getWidth](DTreeItemButton.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[getX](DTreeItemButton.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[getY](DTreeItemButton.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[hasDirty](DTreeItemButton.md#hasdirty)

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

[DTreeItemButton](DTreeItemButton.md).[hasRefitableHeight](DTreeItemButton.md#hasrefitableheight)

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

[DTreeItemButton](DTreeItemButton.md).[hasRefitableWidth](DTreeItemButton.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hide

▸ **hide**(): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[hide](DTreeItemButton.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

___

### hideText

▸ `Protected` **hideText**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[hideText](DTreeItemButton.md#hidetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L366)

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

[DTreeItemButton](DTreeItemButton.md).[init](DTreeItemButton.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L97)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[initReflowable](DTreeItemButton.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[isDirty](DTreeItemButton.md#isdirty)

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

[DTreeItemButton](DTreeItemButton.md).[isEventTarget](DTreeItemButton.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[isHidden](DTreeItemButton.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[isHierarchyDirty](DTreeItemButton.md#ishierarchydirty)

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

[DTreeItemButton](DTreeItemButton.md).[isRefitable](DTreeItemButton.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L176)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[isShown](DTreeItemButton.md#isshown)

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

[DTreeItemButton](DTreeItemButton.md).[listenerCount](DTreeItemButton.md#listenercount)

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

[DTreeItemButton](DTreeItemButton.md).[listeners](DTreeItemButton.md#listeners)

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

[DTreeItemButton](DTreeItemButton.md).[newImage](DTreeItemButton.md#newimage)

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

[DTreeItemButton](DTreeItemButton.md).[newImages](DTreeItemButton.md#newimages)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L102)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[off](DTreeItemButton.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[on](DTreeItemButton.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[on](DTreeItemButton.md#on)

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

#### Overrides

[DTreeItemButton](DTreeItemButton.md).[onActivate](DTreeItemButton.md#onactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-non-editable.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-non-editable.ts#L31)

___

### onActivateKeyDown

▸ `Protected` **onActivateKeyDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[onActivateKeyDown](DTreeItemButton.md#onactivatekeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L67)

___

### onActivateKeyUp

▸ `Protected` **onActivateKeyUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[onActivateKeyUp](DTreeItemButton.md#onactivatekeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L73)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[onBlur](DTreeItemButton.md#onblur)

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

[DTreeItemButton](DTreeItemButton.md).[onChildBlur](DTreeItemButton.md#onchildblur)

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

[DTreeItemButton](DTreeItemButton.md).[onChildFocus](DTreeItemButton.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[onChildrenChange](DTreeItemButton.md#onchildrenchange)

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

[DTreeItemButton](DTreeItemButton.md).[onClick](DTreeItemButton.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L41)

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

[DTreeItemButton](DTreeItemButton.md).[onDblClick](DTreeItemButton.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L47)

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

[DTreeItemButton](DTreeItemButton.md).[onDown](DTreeItemButton.md#ondown)

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

[DTreeItemButton](DTreeItemButton.md).[onDownThis](DTreeItemButton.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[onFocus](DTreeItemButton.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[onHierarchyDirty](DTreeItemButton.md#onhierarchydirty)

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

[DTreeItemButton](DTreeItemButton.md).[onKeyDown](DTreeItemButton.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L82)

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

[DTreeItemButton](DTreeItemButton.md).[onKeyDownActivate](DTreeItemButton.md#onkeydownactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L230)

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

[DTreeItemButton](DTreeItemButton.md).[onKeyUp](DTreeItemButton.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L90)

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

[DTreeItemButton](DTreeItemButton.md).[onMove](DTreeItemButton.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1051)

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

[DTreeItemButton](DTreeItemButton.md).[onOut](DTreeItemButton.md#onout)

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

[DTreeItemButton](DTreeItemButton.md).[onOver](DTreeItemButton.md#onover)

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

[DTreeItemButton](DTreeItemButton.md).[onParentMove](DTreeItemButton.md#onparentmove)

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

[DTreeItemButton](DTreeItemButton.md).[onParentResize](DTreeItemButton.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1750)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[onRefit](DTreeItemButton.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[onReflow](DTreeItemButton.md#onreflow)

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

[DTreeItemButton](DTreeItemButton.md).[onResize](DTreeItemButton.md#onresize)

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

[DTreeItemButton](DTreeItemButton.md).[onScale](DTreeItemButton.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

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

[DTreeItemButton](DTreeItemButton.md).[onSelect](DTreeItemButton.md#onselect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L153)

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

[DTreeItemButton](DTreeItemButton.md).[onShortcut](DTreeItemButton.md#onshortcut)

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

[DTreeItemButton](DTreeItemButton.md).[onSkew](DTreeItemButton.md#onskew)

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

[DTreeItemButton](DTreeItemButton.md).[onStateChange](DTreeItemButton.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L135)

___

### onTextChange

▸ `Protected` **onTextChange**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[onTextChange](DTreeItemButton.md#ontextchange)

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

[DTreeItemButton](DTreeItemButton.md).[onUp](DTreeItemButton.md#onup)

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

[DTreeItemButton](DTreeItemButton.md).[onUpThis](DTreeItemButton.md#onupthis)

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

[DTreeItemButton](DTreeItemButton.md).[onWheel](DTreeItemButton.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[once](DTreeItemButton.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[once](DTreeItemButton.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[reflow](DTreeItemButton.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[removeAllListeners](DTreeItemButton.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[removeAllListeners](DTreeItemButton.md#removealllisteners)

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

[DTreeItemButton](DTreeItemButton.md).[removeChild](DTreeItemButton.md#removechild)

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

[DTreeItemButton](DTreeItemButton.md).[removeChildAt](DTreeItemButton.md#removechildat)

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

[DTreeItemButton](DTreeItemButton.md).[removeChildren](DTreeItemButton.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[removeListener](DTreeItemButton.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[removeListener](DTreeItemButton.md#removelistener)

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

[DTreeItemButton](DTreeItemButton.md).[render](DTreeItemButton.md#render)

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

[DTreeItemButton](DTreeItemButton.md).[renderAdvanced](DTreeItemButton.md#renderadvanced)

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

[DTreeItemButton](DTreeItemButton.md).[resize](DTreeItemButton.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1063)

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

[DTreeItemButton](DTreeItemButton.md).[set](DTreeItemButton.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L103)

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

[DTreeItemButton](DTreeItemButton.md).[setChildIndex](DTreeItemButton.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[setFocused](DTreeItemButton.md#setfocused)

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

[DTreeItemButton](DTreeItemButton.md).[setHeight](DTreeItemButton.md#setheight)

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

[DTreeItemButton](DTreeItemButton.md).[setParent](DTreeItemButton.md#setparent)

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

[DTreeItemButton](DTreeItemButton.md).[setTransform](DTreeItemButton.md#settransform)

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

[DTreeItemButton](DTreeItemButton.md).[setWidth](DTreeItemButton.md#setwidth)

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

[DTreeItemButton](DTreeItemButton.md).[setX](DTreeItemButton.md#setx)

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

[DTreeItemButton](DTreeItemButton.md).[setY](DTreeItemButton.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTreeItemNonEditable`](DTreeItemNonEditable.md)<`NODE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[show](DTreeItemButton.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### showText

▸ `Protected` **showText**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[showText](DTreeItemButton.md#showtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L358)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[sortChildren](DTreeItemButton.md#sortchildren)

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

[DTreeItemButton](DTreeItemButton.md).[swapChildren](DTreeItemButton.md#swapchildren)

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

[DTreeItemButton](DTreeItemButton.md).[toCursor](DTreeItemButton.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[toDirty](DTreeItemButton.md#todirty)

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

[DTreeItemButton](DTreeItemButton.md).[toGlobal](DTreeItemButton.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[toHasDirty](DTreeItemButton.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[toHierarchyDirty](DTreeItemButton.md#tohierarchydirty)

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

[DTreeItemButton](DTreeItemButton.md).[toImageOptions](DTreeItemButton.md#toimageoptions)

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

[DTreeItemButton](DTreeItemButton.md).[toLocal](DTreeItemButton.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[toParentHasDirty](DTreeItemButton.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[toParentHierarchyDirty](DTreeItemButton.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[toParentResized](DTreeItemButton.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[toggle](DTreeItemButton.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L96)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[unset](DTreeItemButton.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L134)

___

### updateText

▸ `Protected` **updateText**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[updateText](DTreeItemButton.md#updatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L144)

___

### updateTextAndImage

▸ `Protected` **updateTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[updateTextAndImage](DTreeItemButton.md#updatetextandimage)

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

[DTreeItemButton](DTreeItemButton.md).[updateTextColor](DTreeItemButton.md#updatetextcolor)

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

[DTreeItemButton](DTreeItemButton.md).[updateTextPosition](DTreeItemButton.md#updatetextposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L263)

___

### updateTextValue

▸ `Protected` **updateTextValue**(): `void`

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[updateTextValue](DTreeItemButton.md#updatetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L340)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DTreeItemButton](DTreeItemButton.md).[updateTransform](DTreeItemButton.md#updatetransform)

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

[DTreeItemButton](DTreeItemButton.md).[mixin](DTreeItemButton.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
