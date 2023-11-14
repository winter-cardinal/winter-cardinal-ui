[Winter Cardinal UI - v0.374.0](../index.md) / DTableBodyCellTextArea

# Class: DTableBodyCellTextArea\<ROW, VALUE, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellTextArea`](../interfaces/DThemeTableBodyCellTextArea.md)\<`VALUE`\> = [`DThemeTableBodyCellTextArea`](../interfaces/DThemeTableBodyCellTextArea.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellTextAreaOptions`](../interfaces/DTableBodyCellTextAreaOptions.md)\<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellTextAreaOptions`](../interfaces/DTableBodyCellTextAreaOptions.md)\<`ROW`, `VALUE`, `THEME`\> |

## Hierarchy

- [`DTableBodyCellText`](DTableBodyCellText.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DTableBodyCellTextArea`**

## Table of contents

### Constructors

- [constructor](DTableBodyCellTextArea.md#constructor)

### Properties

- [\_accessibleActive](DTableBodyCellTextArea.md#_accessibleactive)
- [\_accessibleDiv](DTableBodyCellTextArea.md#_accessiblediv)
- [\_auto](DTableBodyCellTextArea.md#_auto)
- [\_background](DTableBodyCellTextArea.md#_background)
- [\_border](DTableBodyCellTextArea.md#_border)
- [\_bounds](DTableBodyCellTextArea.md#_bounds)
- [\_clearType](DTableBodyCellTextArea.md#_cleartype)
- [\_column](DTableBodyCellTextArea.md#_column)
- [\_columnIndex](DTableBodyCellTextArea.md#_columnindex)
- [\_corner](DTableBodyCellTextArea.md#_corner)
- [\_cursor](DTableBodyCellTextArea.md#_cursor)
- [\_destroyed](DTableBodyCellTextArea.md#_destroyed)
- [\_images](DTableBodyCellTextArea.md#_images)
- [\_isOverflowMaskEnabled](DTableBodyCellTextArea.md#_isoverflowmaskenabled)
- [\_isTextVisible](DTableBodyCellTextArea.md#_istextvisible)
- [\_lastDownPoint](DTableBodyCellTextArea.md#_lastdownpoint)
- [\_lastSortedIndex](DTableBodyCellTextArea.md#_lastsortedindex)
- [\_mask](DTableBodyCellTextArea.md#_mask)
- [\_onChange](DTableBodyCellTextArea.md#_onchange)
- [\_options](DTableBodyCellTextArea.md#_options)
- [\_outline](DTableBodyCellTextArea.md#_outline)
- [\_overflowMask](DTableBodyCellTextArea.md#_overflowmask)
- [\_padding](DTableBodyCellTextArea.md#_padding)
- [\_reflowable](DTableBodyCellTextArea.md#_reflowable)
- [\_row](DTableBodyCellTextArea.md#_row)
- [\_rowIndex](DTableBodyCellTextArea.md#_rowindex)
- [\_shortcuts](DTableBodyCellTextArea.md#_shortcuts)
- [\_snippet](DTableBodyCellTextArea.md#_snippet)
- [\_tempDisplayObjectParent](DTableBodyCellTextArea.md#_tempdisplayobjectparent)
- [\_text](DTableBodyCellTextArea.md#_text)
- [\_textAlign](DTableBodyCellTextArea.md#_textalign)
- [\_textAlpha](DTableBodyCellTextArea.md#_textalpha)
- [\_textColor](DTableBodyCellTextArea.md#_textcolor)
- [\_textFormatter](DTableBodyCellTextArea.md#_textformatter)
- [\_textStyle](DTableBodyCellTextArea.md#_textstyle)
- [\_textValue](DTableBodyCellTextArea.md#_textvalue)
- [\_textValueComputed](DTableBodyCellTextArea.md#_textvaluecomputed)
- [\_title](DTableBodyCellTextArea.md#_title)
- [\_zIndex](DTableBodyCellTextArea.md#_zindex)
- [accessible](DTableBodyCellTextArea.md#accessible)
- [accessibleChildren](DTableBodyCellTextArea.md#accessiblechildren)
- [accessibleHint](DTableBodyCellTextArea.md#accessiblehint)
- [accessiblePointerEvents](DTableBodyCellTextArea.md#accessiblepointerevents)
- [accessibleTitle](DTableBodyCellTextArea.md#accessibletitle)
- [accessibleType](DTableBodyCellTextArea.md#accessibletype)
- [alpha](DTableBodyCellTextArea.md#alpha)
- [angle](DTableBodyCellTextArea.md#angle)
- [buttonMode](DTableBodyCellTextArea.md#buttonmode)
- [cacheAsBitmap](DTableBodyCellTextArea.md#cacheasbitmap)
- [children](DTableBodyCellTextArea.md#children)
- [cursor](DTableBodyCellTextArea.md#cursor)
- [filterArea](DTableBodyCellTextArea.md#filterarea)
- [filters](DTableBodyCellTextArea.md#filters)
- [hitArea](DTableBodyCellTextArea.md#hitarea)
- [interactive](DTableBodyCellTextArea.md#interactive)
- [interactiveChildren](DTableBodyCellTextArea.md#interactivechildren)
- [isMask](DTableBodyCellTextArea.md#ismask)
- [isSprite](DTableBodyCellTextArea.md#issprite)
- [localTransform](DTableBodyCellTextArea.md#localtransform)
- [mask](DTableBodyCellTextArea.md#mask)
- [name](DTableBodyCellTextArea.md#name)
- [parent](DTableBodyCellTextArea.md#parent)
- [pivot](DTableBodyCellTextArea.md#pivot)
- [renderable](DTableBodyCellTextArea.md#renderable)
- [rotation](DTableBodyCellTextArea.md#rotation)
- [sortDirty](DTableBodyCellTextArea.md#sortdirty)
- [sortableChildren](DTableBodyCellTextArea.md#sortablechildren)
- [transform](DTableBodyCellTextArea.md#transform)
- [visible](DTableBodyCellTextArea.md#visible)
- [worldAlpha](DTableBodyCellTextArea.md#worldalpha)
- [worldTransform](DTableBodyCellTextArea.md#worldtransform)
- [worldVisible](DTableBodyCellTextArea.md#worldvisible)
- [zIndex](DTableBodyCellTextArea.md#zindex)
- [LAYOUTER](DTableBodyCellTextArea.md#layouter)
- [WORK\_CONTAINS\_POINT](DTableBodyCellTextArea.md#work_contains_point)

### Accessors

- [background](DTableBodyCellTextArea.md#background)
- [border](DTableBodyCellTextArea.md#border)
- [column](DTableBodyCellTextArea.md#column)
- [columnIndex](DTableBodyCellTextArea.md#columnindex)
- [corner](DTableBodyCellTextArea.md#corner)
- [height](DTableBodyCellTextArea.md#height)
- [image](DTableBodyCellTextArea.md#image)
- [options](DTableBodyCellTextArea.md#options)
- [outline](DTableBodyCellTextArea.md#outline)
- [padding](DTableBodyCellTextArea.md#padding)
- [position](DTableBodyCellTextArea.md#position)
- [reflowable](DTableBodyCellTextArea.md#reflowable)
- [row](DTableBodyCellTextArea.md#row)
- [rowIndex](DTableBodyCellTextArea.md#rowindex)
- [scale](DTableBodyCellTextArea.md#scale)
- [shadow](DTableBodyCellTextArea.md#shadow)
- [skew](DTableBodyCellTextArea.md#skew)
- [snippet](DTableBodyCellTextArea.md#snippet)
- [state](DTableBodyCellTextArea.md#state)
- [text](DTableBodyCellTextArea.md#text)
- [theme](DTableBodyCellTextArea.md#theme)
- [title](DTableBodyCellTextArea.md#title)
- [type](DTableBodyCellTextArea.md#type)
- [unsafe](DTableBodyCellTextArea.md#unsafe)
- [weight](DTableBodyCellTextArea.md#weight)
- [width](DTableBodyCellTextArea.md#width)
- [x](DTableBodyCellTextArea.md#x)
- [y](DTableBodyCellTextArea.md#y)

### Methods

- [\_calculateBounds](DTableBodyCellTextArea.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTableBodyCellTextArea.md#_recursivepostupdatetransform)
- [\_render](DTableBodyCellTextArea.md#_render)
- [addChild](DTableBodyCellTextArea.md#addchild)
- [addChildAt](DTableBodyCellTextArea.md#addchildat)
- [addListener](DTableBodyCellTextArea.md#addlistener)
- [applyTitle](DTableBodyCellTextArea.md#applytitle)
- [blur](DTableBodyCellTextArea.md#blur)
- [calculateBounds](DTableBodyCellTextArea.md#calculatebounds)
- [computeTextValue](DTableBodyCellTextArea.md#computetextvalue)
- [containsGlobalPoint](DTableBodyCellTextArea.md#containsglobalpoint)
- [containsLocalPoint](DTableBodyCellTextArea.md#containslocalpoint)
- [containsPoint](DTableBodyCellTextArea.md#containspoint)
- [createOrUpdateText](DTableBodyCellTextArea.md#createorupdatetext)
- [destroy](DTableBodyCellTextArea.md#destroy)
- [displayObjectUpdateTransform](DTableBodyCellTextArea.md#displayobjectupdatetransform)
- [emit](DTableBodyCellTextArea.md#emit)
- [eventNames](DTableBodyCellTextArea.md#eventnames)
- [focus](DTableBodyCellTextArea.md#focus)
- [focusOnClosest](DTableBodyCellTextArea.md#focusonclosest)
- [getBounds](DTableBodyCellTextArea.md#getbounds)
- [getChildAt](DTableBodyCellTextArea.md#getchildat)
- [getChildByName](DTableBodyCellTextArea.md#getchildbyname)
- [getChildIndex](DTableBodyCellTextArea.md#getchildindex)
- [getClearType](DTableBodyCellTextArea.md#getcleartype)
- [getClippingRect](DTableBodyCellTextArea.md#getclippingrect)
- [getGlobalPosition](DTableBodyCellTextArea.md#getglobalposition)
- [getHeight](DTableBodyCellTextArea.md#getheight)
- [getLocalBounds](DTableBodyCellTextArea.md#getlocalbounds)
- [getOverflowMask](DTableBodyCellTextArea.md#getoverflowmask)
- [getParentOfSize](DTableBodyCellTextArea.md#getparentofsize)
- [getTextAlpha](DTableBodyCellTextArea.md#gettextalpha)
- [getTextColor](DTableBodyCellTextArea.md#gettextcolor)
- [getThemeDefault](DTableBodyCellTextArea.md#getthemedefault)
- [getType](DTableBodyCellTextArea.md#gettype)
- [getWidth](DTableBodyCellTextArea.md#getwidth)
- [getX](DTableBodyCellTextArea.md#getx)
- [getY](DTableBodyCellTextArea.md#gety)
- [hasDirty](DTableBodyCellTextArea.md#hasdirty)
- [hasRefitableHeight](DTableBodyCellTextArea.md#hasrefitableheight)
- [hasRefitableWidth](DTableBodyCellTextArea.md#hasrefitablewidth)
- [hide](DTableBodyCellTextArea.md#hide)
- [hideText](DTableBodyCellTextArea.md#hidetext)
- [init](DTableBodyCellTextArea.md#init)
- [initReflowable](DTableBodyCellTextArea.md#initreflowable)
- [isDirty](DTableBodyCellTextArea.md#isdirty)
- [isEventTarget](DTableBodyCellTextArea.md#iseventtarget)
- [isHidden](DTableBodyCellTextArea.md#ishidden)
- [isHierarchyDirty](DTableBodyCellTextArea.md#ishierarchydirty)
- [isRefitable](DTableBodyCellTextArea.md#isrefitable)
- [isShown](DTableBodyCellTextArea.md#isshown)
- [listenerCount](DTableBodyCellTextArea.md#listenercount)
- [listeners](DTableBodyCellTextArea.md#listeners)
- [newImage](DTableBodyCellTextArea.md#newimage)
- [newImages](DTableBodyCellTextArea.md#newimages)
- [newPadding](DTableBodyCellTextArea.md#newpadding)
- [newText](DTableBodyCellTextArea.md#newtext)
- [off](DTableBodyCellTextArea.md#off)
- [on](DTableBodyCellTextArea.md#on)
- [onBlur](DTableBodyCellTextArea.md#onblur)
- [onChildBlur](DTableBodyCellTextArea.md#onchildblur)
- [onChildFocus](DTableBodyCellTextArea.md#onchildfocus)
- [onChildrenChange](DTableBodyCellTextArea.md#onchildrenchange)
- [onDblClick](DTableBodyCellTextArea.md#ondblclick)
- [onDown](DTableBodyCellTextArea.md#ondown)
- [onDownThis](DTableBodyCellTextArea.md#ondownthis)
- [onFocus](DTableBodyCellTextArea.md#onfocus)
- [onHierarchyDirty](DTableBodyCellTextArea.md#onhierarchydirty)
- [onKeyDown](DTableBodyCellTextArea.md#onkeydown)
- [onKeyUp](DTableBodyCellTextArea.md#onkeyup)
- [onMove](DTableBodyCellTextArea.md#onmove)
- [onOut](DTableBodyCellTextArea.md#onout)
- [onOver](DTableBodyCellTextArea.md#onover)
- [onParentMove](DTableBodyCellTextArea.md#onparentmove)
- [onParentResize](DTableBodyCellTextArea.md#onparentresize)
- [onRefit](DTableBodyCellTextArea.md#onrefit)
- [onReflow](DTableBodyCellTextArea.md#onreflow)
- [onResize](DTableBodyCellTextArea.md#onresize)
- [onScale](DTableBodyCellTextArea.md#onscale)
- [onShortcut](DTableBodyCellTextArea.md#onshortcut)
- [onSkew](DTableBodyCellTextArea.md#onskew)
- [onStateChange](DTableBodyCellTextArea.md#onstatechange)
- [onTextChange](DTableBodyCellTextArea.md#ontextchange)
- [onUp](DTableBodyCellTextArea.md#onup)
- [onUpThis](DTableBodyCellTextArea.md#onupthis)
- [onWheel](DTableBodyCellTextArea.md#onwheel)
- [once](DTableBodyCellTextArea.md#once)
- [reflow](DTableBodyCellTextArea.md#reflow)
- [removeAllListeners](DTableBodyCellTextArea.md#removealllisteners)
- [removeChild](DTableBodyCellTextArea.md#removechild)
- [removeChildAt](DTableBodyCellTextArea.md#removechildat)
- [removeChildren](DTableBodyCellTextArea.md#removechildren)
- [removeListener](DTableBodyCellTextArea.md#removelistener)
- [render](DTableBodyCellTextArea.md#render)
- [renderAdvanced](DTableBodyCellTextArea.md#renderadvanced)
- [resize](DTableBodyCellTextArea.md#resize)
- [set](DTableBodyCellTextArea.md#set)
- [setChildIndex](DTableBodyCellTextArea.md#setchildindex)
- [setFocused](DTableBodyCellTextArea.md#setfocused)
- [setHeight](DTableBodyCellTextArea.md#setheight)
- [setParent](DTableBodyCellTextArea.md#setparent)
- [setTransform](DTableBodyCellTextArea.md#settransform)
- [setWidth](DTableBodyCellTextArea.md#setwidth)
- [setX](DTableBodyCellTextArea.md#setx)
- [setY](DTableBodyCellTextArea.md#sety)
- [show](DTableBodyCellTextArea.md#show)
- [showText](DTableBodyCellTextArea.md#showtext)
- [sortChildren](DTableBodyCellTextArea.md#sortchildren)
- [swapChildren](DTableBodyCellTextArea.md#swapchildren)
- [toCursor](DTableBodyCellTextArea.md#tocursor)
- [toDirty](DTableBodyCellTextArea.md#todirty)
- [toGlobal](DTableBodyCellTextArea.md#toglobal)
- [toHasDirty](DTableBodyCellTextArea.md#tohasdirty)
- [toHierarchyDirty](DTableBodyCellTextArea.md#tohierarchydirty)
- [toImageOptions](DTableBodyCellTextArea.md#toimageoptions)
- [toLocal](DTableBodyCellTextArea.md#tolocal)
- [toParentHasDirty](DTableBodyCellTextArea.md#toparenthasdirty)
- [toParentHierarchyDirty](DTableBodyCellTextArea.md#toparenthierarchydirty)
- [toParentResized](DTableBodyCellTextArea.md#toparentresized)
- [unset](DTableBodyCellTextArea.md#unset)
- [updateText](DTableBodyCellTextArea.md#updatetext)
- [updateTextAndImage](DTableBodyCellTextArea.md#updatetextandimage)
- [updateTextColor](DTableBodyCellTextArea.md#updatetextcolor)
- [updateTextPosition](DTableBodyCellTextArea.md#updatetextposition)
- [updateTextValue](DTableBodyCellTextArea.md#updatetextvalue)
- [updateTransform](DTableBodyCellTextArea.md#updatetransform)
- [mixin](DTableBodyCellTextArea.md#mixin)

## Constructors

### constructor

• **new DTableBodyCellTextArea**\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>(`columnIndex`, `column`, `onChange`, `options?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellTextArea`](../interfaces/DThemeTableBodyCellTextArea.md)\<`VALUE`\> = [`DThemeTableBodyCellTextArea`](../interfaces/DThemeTableBodyCellTextArea.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellTextAreaOptions`](../interfaces/DTableBodyCellTextAreaOptions.md)\<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellTextAreaOptions`](../interfaces/DTableBodyCellTextAreaOptions.md)\<`ROW`, `VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`\>\> |
| `onChange` | [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, `VALUE`\> |
| `options?` | `OPTIONS` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[constructor](DTableBodyCellText.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L39)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_accessibleActive](DTableBodyCellText.md#_accessibleactive)

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

[DTableBodyCellText](DTableBodyCellText.md).[_accessibleDiv](DTableBodyCellText.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_auto](DTableBodyCellText.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:778](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L778)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_background](DTableBodyCellText.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_border](DTableBodyCellText.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_bounds](DTableBodyCellText.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_clearType](DTableBodyCellText.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_column

• `Protected` **\_column**: [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`\>\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_column](DTableBodyCellText.md#_column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L36)

___

### \_columnIndex

• `Protected` **\_columnIndex**: `number`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_columnIndex](DTableBodyCellText.md#_columnindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L35)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_corner](DTableBodyCellText.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:776](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L776)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_cursor](DTableBodyCellText.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L797)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_destroyed](DTableBodyCellText.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_images

• `Protected` **\_images**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_images](DTableBodyCellText.md#_images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L95)

___

### \_isOverflowMaskEnabled

• `Protected` **\_isOverflowMaskEnabled**: `boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_isOverflowMaskEnabled](DTableBodyCellText.md#_isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L172)

___

### \_isTextVisible

• `Protected` **\_isTextVisible**: `boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_isTextVisible](DTableBodyCellText.md#_istextvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L174)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_lastDownPoint](DTableBodyCellText.md#_lastdownpoint)

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

[DTableBodyCellText](DTableBodyCellText.md).[_lastSortedIndex](DTableBodyCellText.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Sprite` \| `Graphics`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_mask](DTableBodyCellText.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_onChange

• `Protected` **\_onChange**: [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, `VALUE`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_onChange](DTableBodyCellText.md#_onchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L37)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_options](DTableBodyCellText.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L772)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_outline](DTableBodyCellText.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_overflowMask](DTableBodyCellText.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L173)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_padding](DTableBodyCellText.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_reflowable](DTableBodyCellText.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_row

• `Protected` `Optional` **\_row**: `ROW`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_row](DTableBodyCellText.md#_row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L33)

___

### \_rowIndex

• `Protected` **\_rowIndex**: `number`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_rowIndex](DTableBodyCellText.md#_rowindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L34)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_shortcuts](DTableBodyCellText.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_snippet](DTableBodyCellText.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_tempDisplayObjectParent](DTableBodyCellText.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_text](DTableBodyCellText.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L164)

___

### \_textAlign

• `Protected` **\_textAlign**: [`DTextBaseAlign`](../interfaces/DTextBaseAlign.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_textAlign](DTableBodyCellText.md#_textalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L170)

___

### \_textAlpha

• `Protected` **\_textAlpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_textAlpha](DTableBodyCellText.md#_textalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L168)

___

### \_textColor

• `Protected` **\_textColor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_textColor](DTableBodyCellText.md#_textcolor)

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

[DTableBodyCellText](DTableBodyCellText.md).[_textFormatter](DTableBodyCellText.md#_textformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L171)

___

### \_textStyle

• `Protected` **\_textStyle**: [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_textStyle](DTableBodyCellText.md#_textstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L169)

___

### \_textValue

• `Protected` `Optional` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_textValue](DTableBodyCellText.md#_textvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L165)

___

### \_textValueComputed

• `Protected` `Optional` **\_textValueComputed**: `VALUE`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_textValueComputed](DTableBodyCellText.md#_textvaluecomputed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L166)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_title](DTableBodyCellText.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_zIndex](DTableBodyCellText.md#_zindex)

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

[DTableBodyCellText](DTableBodyCellText.md).[accessible](DTableBodyCellText.md#accessible)

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

[DTableBodyCellText](DTableBodyCellText.md).[accessibleChildren](DTableBodyCellText.md#accessiblechildren)

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

[DTableBodyCellText](DTableBodyCellText.md).[accessibleHint](DTableBodyCellText.md#accessiblehint)

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

[DTableBodyCellText](DTableBodyCellText.md).[accessiblePointerEvents](DTableBodyCellText.md#accessiblepointerevents)

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

[DTableBodyCellText](DTableBodyCellText.md).[accessibleTitle](DTableBodyCellText.md#accessibletitle)

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

[DTableBodyCellText](DTableBodyCellText.md).[accessibleType](DTableBodyCellText.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[alpha](DTableBodyCellText.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[angle](DTableBodyCellText.md#angle)

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

[DTableBodyCellText](DTableBodyCellText.md).[buttonMode](DTableBodyCellText.md#buttonmode)

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

[DTableBodyCellText](DTableBodyCellText.md).[cacheAsBitmap](DTableBodyCellText.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[children](DTableBodyCellText.md#children)

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

[DTableBodyCellText](DTableBodyCellText.md).[cursor](DTableBodyCellText.md#cursor)

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

[DTableBodyCellText](DTableBodyCellText.md).[filterArea](DTableBodyCellText.md#filterarea)

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

[DTableBodyCellText](DTableBodyCellText.md).[filters](DTableBodyCellText.md#filters)

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

[DTableBodyCellText](DTableBodyCellText.md).[hitArea](DTableBodyCellText.md#hitarea)

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

[DTableBodyCellText](DTableBodyCellText.md).[interactive](DTableBodyCellText.md#interactive)

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

[DTableBodyCellText](DTableBodyCellText.md).[interactiveChildren](DTableBodyCellText.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[isMask](DTableBodyCellText.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[isSprite](DTableBodyCellText.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[localTransform](DTableBodyCellText.md#localtransform)

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

[DTableBodyCellText](DTableBodyCellText.md).[mask](DTableBodyCellText.md#mask)

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

[DTableBodyCellText](DTableBodyCellText.md).[name](DTableBodyCellText.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[parent](DTableBodyCellText.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[pivot](DTableBodyCellText.md#pivot)

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

[DTableBodyCellText](DTableBodyCellText.md).[renderable](DTableBodyCellText.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[rotation](DTableBodyCellText.md#rotation)

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

[DTableBodyCellText](DTableBodyCellText.md).[sortDirty](DTableBodyCellText.md#sortdirty)

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

[DTableBodyCellText](DTableBodyCellText.md).[sortableChildren](DTableBodyCellText.md#sortablechildren)

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

[DTableBodyCellText](DTableBodyCellText.md).[transform](DTableBodyCellText.md#transform)

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

[DTableBodyCellText](DTableBodyCellText.md).[visible](DTableBodyCellText.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[worldAlpha](DTableBodyCellText.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[worldTransform](DTableBodyCellText.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[worldVisible](DTableBodyCellText.md#worldvisible)

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

[DTableBodyCellText](DTableBodyCellText.md).[zIndex](DTableBodyCellText.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[LAYOUTER](DTableBodyCellText.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L94)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[WORK_CONTAINS_POINT](DTableBodyCellText.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L768)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DTableBodyCellText.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1464)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DTableBodyCellText.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1468)

___

### column

• `get` **column**(): [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`\>\>

A column.

#### Returns

[`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`\>\>

#### Inherited from

DTableBodyCellText.column

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L65)

___

### columnIndex

• `get` **columnIndex**(): `number`

A column index.

#### Returns

`number`

#### Inherited from

DTableBodyCellText.columnIndex

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L61)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DTableBodyCellText.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1460)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellText.height

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

DTableBodyCellText.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1387)

___

### image

• `get` **image**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Inherited from

DTableBodyCellText.image

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

DTableBodyCellText.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L129)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DTableBodyCellText.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1683](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1683)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DTableBodyCellText.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1472)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DTableBodyCellText.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1456)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTableBodyCellText.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1442)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DTableBodyCellText.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1121)

___

### row

• `get` **row**(): `undefined` \| `ROW`

A row data if exists.
Otherwise, Undefined.

#### Returns

`undefined` \| `ROW`

a row data or undefined.

#### Inherited from

DTableBodyCellText.row

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L53)

___

### rowIndex

• `get` **rowIndex**(): `number`

A row index if a row data exists.
Otherise, -1.

#### Returns

`number`

a row index or -1.

#### Inherited from

DTableBodyCellText.rowIndex

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L57)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTableBodyCellText.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1447](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1447)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DTableBodyCellText.shadow

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

DTableBodyCellText.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1800](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1800)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTableBodyCellText.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1452](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1452)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DTableBodyCellText.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1117)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DTableBodyCellText.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

___

### text

• `get` **text**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Inherited from

DTableBodyCellText.text

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

DTableBodyCellText.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L194)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DTableBodyCellText.theme

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

DTableBodyCellText.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DTableBodyCellText.title

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

DTableBodyCellText.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1484)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DTableBodyCellText.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1239)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DTableBodyCellText.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1476)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellText.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1142)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellText.width

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

DTableBodyCellText.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1328)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellText.x

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

DTableBodyCellText.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1248)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellText.y

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

DTableBodyCellText.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1288)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[_calculateBounds](DTableBodyCellText.md#_calculatebounds)

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

[DTableBodyCellText](DTableBodyCellText.md).[_recursivePostUpdateTransform](DTableBodyCellText.md#_recursivepostupdatetransform)

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

[DTableBodyCellText](DTableBodyCellText.md).[_render](DTableBodyCellText.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8413

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

[DTableBodyCellText](DTableBodyCellText.md).[addChild](DTableBodyCellText.md#addchild)

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

[DTableBodyCellText](DTableBodyCellText.md).[addChildAt](DTableBodyCellText.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[addListener](DTableBodyCellText.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[addListener](DTableBodyCellText.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[applyTitle](DTableBodyCellText.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:388](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L388)

___

### blur

▸ **blur**(`recursively?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[blur](DTableBodyCellText.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1599](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1599)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[calculateBounds](DTableBodyCellText.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### computeTextValue

▸ **computeTextValue**(): `undefined` \| `VALUE`

#### Returns

`undefined` \| `VALUE`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[computeTextValue](DTableBodyCellText.md#computetextvalue)

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

[DTableBodyCellText](DTableBodyCellText.md).[containsGlobalPoint](DTableBodyCellText.md#containsglobalpoint)

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

[DTableBodyCellText](DTableBodyCellText.md).[containsLocalPoint](DTableBodyCellText.md#containslocalpoint)

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

[DTableBodyCellText](DTableBodyCellText.md).[containsPoint](DTableBodyCellText.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2039](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2039)

___

### createOrUpdateText

▸ **createOrUpdateText**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[createOrUpdateText](DTableBodyCellText.md#createorupdatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L224)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[destroy](DTableBodyCellText.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L195)

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

[DTableBodyCellText](DTableBodyCellText.md).[displayObjectUpdateTransform](DTableBodyCellText.md#displayobjectupdatetransform)

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

[DTableBodyCellText](DTableBodyCellText.md).[emit](DTableBodyCellText.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[eventNames](DTableBodyCellText.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[focus](DTableBodyCellText.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1595](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1595)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[focusOnClosest](DTableBodyCellText.md#focusonclosest)

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

[DTableBodyCellText](DTableBodyCellText.md).[getBounds](DTableBodyCellText.md#getbounds)

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

[DTableBodyCellText](DTableBodyCellText.md).[getChildAt](DTableBodyCellText.md#getchildat)

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

[DTableBodyCellText](DTableBodyCellText.md).[getChildByName](DTableBodyCellText.md#getchildbyname)

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

[DTableBodyCellText](DTableBodyCellText.md).[getChildIndex](DTableBodyCellText.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[getClearType](DTableBodyCellText.md#getcleartype)

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

[DTableBodyCellText](DTableBodyCellText.md).[getClippingRect](DTableBodyCellText.md#getclippingrect)

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

[DTableBodyCellText](DTableBodyCellText.md).[getGlobalPosition](DTableBodyCellText.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[getHeight](DTableBodyCellText.md#getheight)

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

[DTableBodyCellText](DTableBodyCellText.md).[getLocalBounds](DTableBodyCellText.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[getOverflowMask](DTableBodyCellText.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L256)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[getParentOfSize](DTableBodyCellText.md#getparentofsize)

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

[DTableBodyCellText](DTableBodyCellText.md).[getTextAlpha](DTableBodyCellText.md#gettextalpha)

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

[DTableBodyCellText](DTableBodyCellText.md).[getTextColor](DTableBodyCellText.md#gettextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L308)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[getThemeDefault](DTableBodyCellText.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2014](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L2014)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DTableBodyCellText](DTableBodyCellText.md).[getType](DTableBodyCellText.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text-area.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text-area.ts#L31)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[getWidth](DTableBodyCellText.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1332)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[getX](DTableBodyCellText.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1252)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[getY](DTableBodyCellText.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[hasDirty](DTableBodyCellText.md#hasdirty)

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

[DTableBodyCellText](DTableBodyCellText.md).[hasRefitableHeight](DTableBodyCellText.md#hasrefitableheight)

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

[DTableBodyCellText](DTableBodyCellText.md).[hasRefitableWidth](DTableBodyCellText.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1786](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1786)

___

### hide

▸ **hide**(): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[hide](DTableBodyCellText.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1513)

___

### hideText

▸ **hideText**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[hideText](DTableBodyCellText.md#hidetext)

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

[DTableBodyCellText](DTableBodyCellText.md).[init](DTableBodyCellText.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L97)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[initReflowable](DTableBodyCellText.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1125)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[isDirty](DTableBodyCellText.md#isdirty)

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

[DTableBodyCellText](DTableBodyCellText.md).[isEventTarget](DTableBodyCellText.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1908](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1908)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[isHidden](DTableBodyCellText.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1523](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1523)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[isHierarchyDirty](DTableBodyCellText.md#ishierarchydirty)

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

[DTableBodyCellText](DTableBodyCellText.md).[isRefitable](DTableBodyCellText.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L176)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[isShown](DTableBodyCellText.md#isshown)

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

[DTableBodyCellText](DTableBodyCellText.md).[listenerCount](DTableBodyCellText.md#listenercount)

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

[DTableBodyCellText](DTableBodyCellText.md).[listeners](DTableBodyCellText.md#listeners)

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

[DTableBodyCellText](DTableBodyCellText.md).[newImage](DTableBodyCellText.md#newimage)

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

[DTableBodyCellText](DTableBodyCellText.md).[newImages](DTableBodyCellText.md#newimages)

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

[DTableBodyCellText](DTableBodyCellText.md).[newPadding](DTableBodyCellText.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1096](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1096)

___

### newText

▸ **newText**(): [`DDynamicText`](DDynamicText.md)

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[newText](DTableBodyCellText.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L252)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[off](DTableBodyCellText.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[on](DTableBodyCellText.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[on](DTableBodyCellText.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[onBlur](DTableBodyCellText.md#onblur)

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

[DTableBodyCellText](DTableBodyCellText.md).[onChildBlur](DTableBodyCellText.md#onchildblur)

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

[DTableBodyCellText](DTableBodyCellText.md).[onChildFocus](DTableBodyCellText.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1651](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1651)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[onChildrenChange](DTableBodyCellText.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1129)

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

[DTableBodyCellText](DTableBodyCellText.md).[onDblClick](DTableBodyCellText.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1995](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1995)

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

[DTableBodyCellText](DTableBodyCellText.md).[onDown](DTableBodyCellText.md#ondown)

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

[DTableBodyCellText](DTableBodyCellText.md).[onDownThis](DTableBodyCellText.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1929](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1929)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[onFocus](DTableBodyCellText.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[onHierarchyDirty](DTableBodyCellText.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1573)

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

[DTableBodyCellText](DTableBodyCellText.md).[onKeyDown](DTableBodyCellText.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1897](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1897)

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

[DTableBodyCellText](DTableBodyCellText.md).[onKeyUp](DTableBodyCellText.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

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

[DTableBodyCellText](DTableBodyCellText.md).[onMove](DTableBodyCellText.md#onmove)

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

[DTableBodyCellText](DTableBodyCellText.md).[onOut](DTableBodyCellText.md#onout)

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

[DTableBodyCellText](DTableBodyCellText.md).[onOver](DTableBodyCellText.md#onover)

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

[DTableBodyCellText](DTableBodyCellText.md).[onParentMove](DTableBodyCellText.md#onparentmove)

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

[DTableBodyCellText](DTableBodyCellText.md).[onParentResize](DTableBodyCellText.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1845](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1845)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[onRefit](DTableBodyCellText.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1732)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[onReflow](DTableBodyCellText.md#onreflow)

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

[DTableBodyCellText](DTableBodyCellText.md).[onResize](DTableBodyCellText.md#onresize)

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

[DTableBodyCellText](DTableBodyCellText.md).[onScale](DTableBodyCellText.md#onscale)

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

[DTableBodyCellText](DTableBodyCellText.md).[onShortcut](DTableBodyCellText.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

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

[DTableBodyCellText](DTableBodyCellText.md).[onSkew](DTableBodyCellText.md#onskew)

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

[DTableBodyCellText](DTableBodyCellText.md).[onStateChange](DTableBodyCellText.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L135)

___

### onTextChange

▸ **onTextChange**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[onTextChange](DTableBodyCellText.md#ontextchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L205)

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

[DTableBodyCellText](DTableBodyCellText.md).[onUp](DTableBodyCellText.md#onup)

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

[DTableBodyCellText](DTableBodyCellText.md).[onUpThis](DTableBodyCellText.md#onupthis)

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

[DTableBodyCellText](DTableBodyCellText.md).[onWheel](DTableBodyCellText.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1891](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1891)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[once](DTableBodyCellText.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[once](DTableBodyCellText.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[reflow](DTableBodyCellText.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[removeAllListeners](DTableBodyCellText.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[removeAllListeners](DTableBodyCellText.md#removealllisteners)

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

[DTableBodyCellText](DTableBodyCellText.md).[removeChild](DTableBodyCellText.md#removechild)

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

[DTableBodyCellText](DTableBodyCellText.md).[removeChildAt](DTableBodyCellText.md#removechildat)

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

[DTableBodyCellText](DTableBodyCellText.md).[removeChildren](DTableBodyCellText.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[removeListener](DTableBodyCellText.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[removeListener](DTableBodyCellText.md#removelistener)

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

[DTableBodyCellText](DTableBodyCellText.md).[render](DTableBodyCellText.md#render)

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

[DTableBodyCellText](DTableBodyCellText.md).[renderAdvanced](DTableBodyCellText.md#renderadvanced)

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

[DTableBodyCellText](DTableBodyCellText.md).[resize](DTableBodyCellText.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1158)

___

### set

▸ **set**(`value`, `row`, `supplimental`, `rowIndex`, `columnIndex`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `row` | `ROW` |
| `supplimental` | ``null`` \| `number` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[set](DTableBodyCellText.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L69)

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

[DTableBodyCellText](DTableBodyCellText.md).[setChildIndex](DTableBodyCellText.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ **setFocused**(`isFocused`): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[setFocused](DTableBodyCellText.md#setfocused)

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

[DTableBodyCellText](DTableBodyCellText.md).[setHeight](DTableBodyCellText.md#setheight)

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

[DTableBodyCellText](DTableBodyCellText.md).[setParent](DTableBodyCellText.md#setparent)

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

[DTableBodyCellText](DTableBodyCellText.md).[setTransform](DTableBodyCellText.md#settransform)

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

[DTableBodyCellText](DTableBodyCellText.md).[setWidth](DTableBodyCellText.md#setwidth)

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

[DTableBodyCellText](DTableBodyCellText.md).[setX](DTableBodyCellText.md#setx)

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

[DTableBodyCellText](DTableBodyCellText.md).[setY](DTableBodyCellText.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1301)

___

### show

▸ **show**(): [`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellTextArea`](DTableBodyCellTextArea.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[show](DTableBodyCellText.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### showText

▸ **showText**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[showText](DTableBodyCellText.md#showtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L363)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[sortChildren](DTableBodyCellText.md#sortchildren)

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

[DTableBodyCellText](DTableBodyCellText.md).[swapChildren](DTableBodyCellText.md#swapchildren)

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

[DTableBodyCellText](DTableBodyCellText.md).[toCursor](DTableBodyCellText.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1100)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[toDirty](DTableBodyCellText.md#todirty)

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

[DTableBodyCellText](DTableBodyCellText.md).[toGlobal](DTableBodyCellText.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[toHasDirty](DTableBodyCellText.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1536)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[toHierarchyDirty](DTableBodyCellText.md#tohierarchydirty)

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

[DTableBodyCellText](DTableBodyCellText.md).[toImageOptions](DTableBodyCellText.md#toimageoptions)

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

[DTableBodyCellText](DTableBodyCellText.md).[toLocal](DTableBodyCellText.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[toParentHasDirty](DTableBodyCellText.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1545)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[toParentHierarchyDirty](DTableBodyCellText.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1562](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1562)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[toParentResized](DTableBodyCellText.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1823](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L1823)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[unset](DTableBodyCellText.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L84)

___

### updateText

▸ **updateText**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[updateText](DTableBodyCellText.md#updatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L144)

___

### updateTextAndImage

▸ **updateTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[updateTextAndImage](DTableBodyCellText.md#updatetextandimage)

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

[DTableBodyCellText](DTableBodyCellText.md).[updateTextColor](DTableBodyCellText.md#updatetextcolor)

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

[DTableBodyCellText](DTableBodyCellText.md).[updateTextPosition](DTableBodyCellText.md#updatetextposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L268)

___

### updateTextValue

▸ **updateTextValue**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[updateTextValue](DTableBodyCellText.md#updatetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L345)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DTableBodyCellText](DTableBodyCellText.md).[updateTransform](DTableBodyCellText.md#updatetransform)

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

[DTableBodyCellText](DTableBodyCellText.md).[mixin](DTableBodyCellText.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
