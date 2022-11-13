[Winter Cardinal UI - v0.227.0](../index.md) / DTableBodyCellColor

# Class: DTableBodyCellColor<ROW, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellColor`](../interfaces/DThemeTableBodyCellColor.md) = [`DThemeTableBodyCellColor`](../interfaces/DThemeTableBodyCellColor.md) |
| `OPTIONS` | extends [`DTableBodyCellColorOptions`](../interfaces/DTableBodyCellColorOptions.md)<`ROW`, `THEME`\> = [`DTableBodyCellColorOptions`](../interfaces/DTableBodyCellColorOptions.md)<`ROW`, `THEME`\> |

## Hierarchy

- [`DButtonColor`](DButtonColor.md)<`THEME`, `OPTIONS`\>

  ↳ **`DTableBodyCellColor`**

## Implements

- [`DTableBodyCell`](../interfaces/DTableBodyCell.md)<`ROW`, [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)\>

## Table of contents

### Constructors

- [constructor](DTableBodyCellColor.md#constructor)

### Properties

- [\_accessibleActive](DTableBodyCellColor.md#_accessibleactive)
- [\_accessibleDiv](DTableBodyCellColor.md#_accessiblediv)
- [\_auto](DTableBodyCellColor.md#_auto)
- [\_background](DTableBodyCellColor.md#_background)
- [\_border](DTableBodyCellColor.md#_border)
- [\_bounds](DTableBodyCellColor.md#_bounds)
- [\_clearType](DTableBodyCellColor.md#_cleartype)
- [\_column](DTableBodyCellColor.md#_column)
- [\_columnIndex](DTableBodyCellColor.md#_columnindex)
- [\_corner](DTableBodyCellColor.md#_corner)
- [\_cursor](DTableBodyCellColor.md#_cursor)
- [\_destroyed](DTableBodyCellColor.md#_destroyed)
- [\_dialog](DTableBodyCellColor.md#_dialog)
- [\_images](DTableBodyCellColor.md#_images)
- [\_isOverflowMaskEnabled](DTableBodyCellColor.md#_isoverflowmaskenabled)
- [\_isTextVisible](DTableBodyCellColor.md#_istextvisible)
- [\_isToggle](DTableBodyCellColor.md#_istoggle)
- [\_lastDownPoint](DTableBodyCellColor.md#_lastdownpoint)
- [\_lastSortedIndex](DTableBodyCellColor.md#_lastsortedindex)
- [\_mask](DTableBodyCellColor.md#_mask)
- [\_onChange](DTableBodyCellColor.md#_onchange)
- [\_options](DTableBodyCellColor.md#_options)
- [\_outline](DTableBodyCellColor.md#_outline)
- [\_overflowMask](DTableBodyCellColor.md#_overflowmask)
- [\_padding](DTableBodyCellColor.md#_padding)
- [\_reflowable](DTableBodyCellColor.md#_reflowable)
- [\_row](DTableBodyCellColor.md#_row)
- [\_rowIndex](DTableBodyCellColor.md#_rowindex)
- [\_shortcuts](DTableBodyCellColor.md#_shortcuts)
- [\_snippet](DTableBodyCellColor.md#_snippet)
- [\_tempDisplayObjectParent](DTableBodyCellColor.md#_tempdisplayobjectparent)
- [\_text](DTableBodyCellColor.md#_text)
- [\_textAlign](DTableBodyCellColor.md#_textalign)
- [\_textAlpha](DTableBodyCellColor.md#_textalpha)
- [\_textColor](DTableBodyCellColor.md#_textcolor)
- [\_textFormatter](DTableBodyCellColor.md#_textformatter)
- [\_textStyle](DTableBodyCellColor.md#_textstyle)
- [\_textValue](DTableBodyCellColor.md#_textvalue)
- [\_textValueComputed](DTableBodyCellColor.md#_textvaluecomputed)
- [\_title](DTableBodyCellColor.md#_title)
- [\_value](DTableBodyCellColor.md#_value)
- [\_when](DTableBodyCellColor.md#_when)
- [\_zIndex](DTableBodyCellColor.md#_zindex)
- [accessible](DTableBodyCellColor.md#accessible)
- [accessibleChildren](DTableBodyCellColor.md#accessiblechildren)
- [accessibleHint](DTableBodyCellColor.md#accessiblehint)
- [accessiblePointerEvents](DTableBodyCellColor.md#accessiblepointerevents)
- [accessibleTitle](DTableBodyCellColor.md#accessibletitle)
- [accessibleType](DTableBodyCellColor.md#accessibletype)
- [alpha](DTableBodyCellColor.md#alpha)
- [angle](DTableBodyCellColor.md#angle)
- [buttonMode](DTableBodyCellColor.md#buttonmode)
- [cacheAsBitmap](DTableBodyCellColor.md#cacheasbitmap)
- [children](DTableBodyCellColor.md#children)
- [cursor](DTableBodyCellColor.md#cursor)
- [filterArea](DTableBodyCellColor.md#filterarea)
- [filters](DTableBodyCellColor.md#filters)
- [hitArea](DTableBodyCellColor.md#hitarea)
- [interactive](DTableBodyCellColor.md#interactive)
- [interactiveChildren](DTableBodyCellColor.md#interactivechildren)
- [isMask](DTableBodyCellColor.md#ismask)
- [isSprite](DTableBodyCellColor.md#issprite)
- [localTransform](DTableBodyCellColor.md#localtransform)
- [mask](DTableBodyCellColor.md#mask)
- [name](DTableBodyCellColor.md#name)
- [parent](DTableBodyCellColor.md#parent)
- [pivot](DTableBodyCellColor.md#pivot)
- [renderable](DTableBodyCellColor.md#renderable)
- [rotation](DTableBodyCellColor.md#rotation)
- [sortDirty](DTableBodyCellColor.md#sortdirty)
- [sortableChildren](DTableBodyCellColor.md#sortablechildren)
- [transform](DTableBodyCellColor.md#transform)
- [visible](DTableBodyCellColor.md#visible)
- [worldAlpha](DTableBodyCellColor.md#worldalpha)
- [worldTransform](DTableBodyCellColor.md#worldtransform)
- [worldVisible](DTableBodyCellColor.md#worldvisible)
- [zIndex](DTableBodyCellColor.md#zindex)
- [DIALOG](DTableBodyCellColor.md#dialog)
- [LAYOUTER](DTableBodyCellColor.md#layouter)
- [WORK\_CONTAINS\_POINT](DTableBodyCellColor.md#work_contains_point)

### Accessors

- [background](DTableBodyCellColor.md#background)
- [border](DTableBodyCellColor.md#border)
- [column](DTableBodyCellColor.md#column)
- [columnIndex](DTableBodyCellColor.md#columnindex)
- [corner](DTableBodyCellColor.md#corner)
- [dialog](DTableBodyCellColor.md#dialog-1)
- [height](DTableBodyCellColor.md#height)
- [image](DTableBodyCellColor.md#image)
- [isToggle](DTableBodyCellColor.md#istoggle)
- [options](DTableBodyCellColor.md#options)
- [outline](DTableBodyCellColor.md#outline)
- [padding](DTableBodyCellColor.md#padding)
- [position](DTableBodyCellColor.md#position)
- [reflowable](DTableBodyCellColor.md#reflowable)
- [row](DTableBodyCellColor.md#row)
- [rowIndex](DTableBodyCellColor.md#rowindex)
- [scale](DTableBodyCellColor.md#scale)
- [shadow](DTableBodyCellColor.md#shadow)
- [skew](DTableBodyCellColor.md#skew)
- [snippet](DTableBodyCellColor.md#snippet)
- [state](DTableBodyCellColor.md#state)
- [text](DTableBodyCellColor.md#text)
- [theme](DTableBodyCellColor.md#theme)
- [title](DTableBodyCellColor.md#title)
- [type](DTableBodyCellColor.md#type)
- [unsafe](DTableBodyCellColor.md#unsafe)
- [value](DTableBodyCellColor.md#value)
- [weight](DTableBodyCellColor.md#weight)
- [width](DTableBodyCellColor.md#width)
- [x](DTableBodyCellColor.md#x)
- [y](DTableBodyCellColor.md#y)

### Methods

- [\_calculateBounds](DTableBodyCellColor.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTableBodyCellColor.md#_recursivepostupdatetransform)
- [\_render](DTableBodyCellColor.md#_render)
- [activate](DTableBodyCellColor.md#activate)
- [addChild](DTableBodyCellColor.md#addchild)
- [addChildAt](DTableBodyCellColor.md#addchildat)
- [addListener](DTableBodyCellColor.md#addlistener)
- [applyTitle](DTableBodyCellColor.md#applytitle)
- [blur](DTableBodyCellColor.md#blur)
- [calculateBounds](DTableBodyCellColor.md#calculatebounds)
- [computeTextValue](DTableBodyCellColor.md#computetextvalue)
- [containsGlobalPoint](DTableBodyCellColor.md#containsglobalpoint)
- [containsLocalPoint](DTableBodyCellColor.md#containslocalpoint)
- [containsPoint](DTableBodyCellColor.md#containspoint)
- [createOrUpdateText](DTableBodyCellColor.md#createorupdatetext)
- [createText](DTableBodyCellColor.md#createtext)
- [destroy](DTableBodyCellColor.md#destroy)
- [displayObjectUpdateTransform](DTableBodyCellColor.md#displayobjectupdatetransform)
- [emit](DTableBodyCellColor.md#emit)
- [eventNames](DTableBodyCellColor.md#eventnames)
- [focus](DTableBodyCellColor.md#focus)
- [focusOnClosest](DTableBodyCellColor.md#focusonclosest)
- [getBounds](DTableBodyCellColor.md#getbounds)
- [getChildAt](DTableBodyCellColor.md#getchildat)
- [getChildByName](DTableBodyCellColor.md#getchildbyname)
- [getChildIndex](DTableBodyCellColor.md#getchildindex)
- [getClearType](DTableBodyCellColor.md#getcleartype)
- [getClippingRect](DTableBodyCellColor.md#getclippingrect)
- [getGlobalPosition](DTableBodyCellColor.md#getglobalposition)
- [getHeight](DTableBodyCellColor.md#getheight)
- [getLocalBounds](DTableBodyCellColor.md#getlocalbounds)
- [getOverflowMask](DTableBodyCellColor.md#getoverflowmask)
- [getParentOfSize](DTableBodyCellColor.md#getparentofsize)
- [getTextAlpha](DTableBodyCellColor.md#gettextalpha)
- [getTextColor](DTableBodyCellColor.md#gettextcolor)
- [getThemeDefault](DTableBodyCellColor.md#getthemedefault)
- [getType](DTableBodyCellColor.md#gettype)
- [getWidth](DTableBodyCellColor.md#getwidth)
- [getX](DTableBodyCellColor.md#getx)
- [getY](DTableBodyCellColor.md#gety)
- [hasDirty](DTableBodyCellColor.md#hasdirty)
- [hasRefitableHeight](DTableBodyCellColor.md#hasrefitableheight)
- [hasRefitableWidth](DTableBodyCellColor.md#hasrefitablewidth)
- [hide](DTableBodyCellColor.md#hide)
- [hideText](DTableBodyCellColor.md#hidetext)
- [init](DTableBodyCellColor.md#init)
- [initOnPress](DTableBodyCellColor.md#initonpress)
- [initReflowable](DTableBodyCellColor.md#initreflowable)
- [isDirty](DTableBodyCellColor.md#isdirty)
- [isEventTarget](DTableBodyCellColor.md#iseventtarget)
- [isHidden](DTableBodyCellColor.md#ishidden)
- [isHierarchyDirty](DTableBodyCellColor.md#ishierarchydirty)
- [isRefitable](DTableBodyCellColor.md#isrefitable)
- [isShown](DTableBodyCellColor.md#isshown)
- [listenerCount](DTableBodyCellColor.md#listenercount)
- [listeners](DTableBodyCellColor.md#listeners)
- [newDialog](DTableBodyCellColor.md#newdialog)
- [newImage](DTableBodyCellColor.md#newimage)
- [newImages](DTableBodyCellColor.md#newimages)
- [newValue](DTableBodyCellColor.md#newvalue)
- [off](DTableBodyCellColor.md#off)
- [on](DTableBodyCellColor.md#on)
- [onActivate](DTableBodyCellColor.md#onactivate)
- [onActivateKeyDown](DTableBodyCellColor.md#onactivatekeydown)
- [onActivateKeyUp](DTableBodyCellColor.md#onactivatekeyup)
- [onBlur](DTableBodyCellColor.md#onblur)
- [onChildBlur](DTableBodyCellColor.md#onchildblur)
- [onChildFocus](DTableBodyCellColor.md#onchildfocus)
- [onChildrenChange](DTableBodyCellColor.md#onchildrenchange)
- [onClick](DTableBodyCellColor.md#onclick)
- [onColorChange](DTableBodyCellColor.md#oncolorchange)
- [onDblClick](DTableBodyCellColor.md#ondblclick)
- [onDown](DTableBodyCellColor.md#ondown)
- [onDownThis](DTableBodyCellColor.md#ondownthis)
- [onFocus](DTableBodyCellColor.md#onfocus)
- [onHierarchyDirty](DTableBodyCellColor.md#onhierarchydirty)
- [onInactivate](DTableBodyCellColor.md#oninactivate)
- [onKeyDown](DTableBodyCellColor.md#onkeydown)
- [onKeyUp](DTableBodyCellColor.md#onkeyup)
- [onMove](DTableBodyCellColor.md#onmove)
- [onOut](DTableBodyCellColor.md#onout)
- [onOver](DTableBodyCellColor.md#onover)
- [onParentMove](DTableBodyCellColor.md#onparentmove)
- [onParentResize](DTableBodyCellColor.md#onparentresize)
- [onRefit](DTableBodyCellColor.md#onrefit)
- [onReflow](DTableBodyCellColor.md#onreflow)
- [onResize](DTableBodyCellColor.md#onresize)
- [onScale](DTableBodyCellColor.md#onscale)
- [onShortcut](DTableBodyCellColor.md#onshortcut)
- [onSkew](DTableBodyCellColor.md#onskew)
- [onStateChange](DTableBodyCellColor.md#onstatechange)
- [onTextChange](DTableBodyCellColor.md#ontextchange)
- [onToggleEnd](DTableBodyCellColor.md#ontoggleend)
- [onToggleStart](DTableBodyCellColor.md#ontogglestart)
- [onUp](DTableBodyCellColor.md#onup)
- [onUpThis](DTableBodyCellColor.md#onupthis)
- [onValueChange](DTableBodyCellColor.md#onvaluechange)
- [onWheel](DTableBodyCellColor.md#onwheel)
- [once](DTableBodyCellColor.md#once)
- [reflow](DTableBodyCellColor.md#reflow)
- [removeAllListeners](DTableBodyCellColor.md#removealllisteners)
- [removeChild](DTableBodyCellColor.md#removechild)
- [removeChildAt](DTableBodyCellColor.md#removechildat)
- [removeChildren](DTableBodyCellColor.md#removechildren)
- [removeListener](DTableBodyCellColor.md#removelistener)
- [render](DTableBodyCellColor.md#render)
- [renderAdvanced](DTableBodyCellColor.md#renderadvanced)
- [resize](DTableBodyCellColor.md#resize)
- [set](DTableBodyCellColor.md#set)
- [setChildIndex](DTableBodyCellColor.md#setchildindex)
- [setFocused](DTableBodyCellColor.md#setfocused)
- [setHeight](DTableBodyCellColor.md#setheight)
- [setParent](DTableBodyCellColor.md#setparent)
- [setTransform](DTableBodyCellColor.md#settransform)
- [setWidth](DTableBodyCellColor.md#setwidth)
- [setX](DTableBodyCellColor.md#setx)
- [setY](DTableBodyCellColor.md#sety)
- [show](DTableBodyCellColor.md#show)
- [showText](DTableBodyCellColor.md#showtext)
- [sortChildren](DTableBodyCellColor.md#sortchildren)
- [swapChildren](DTableBodyCellColor.md#swapchildren)
- [toClone](DTableBodyCellColor.md#toclone)
- [toCursor](DTableBodyCellColor.md#tocursor)
- [toDirty](DTableBodyCellColor.md#todirty)
- [toGlobal](DTableBodyCellColor.md#toglobal)
- [toHasDirty](DTableBodyCellColor.md#tohasdirty)
- [toHierarchyDirty](DTableBodyCellColor.md#tohierarchydirty)
- [toImageOptions](DTableBodyCellColor.md#toimageoptions)
- [toImageTintOptions](DTableBodyCellColor.md#toimagetintoptions)
- [toLocal](DTableBodyCellColor.md#tolocal)
- [toParentHasDirty](DTableBodyCellColor.md#toparenthasdirty)
- [toParentHierarchyDirty](DTableBodyCellColor.md#toparenthierarchydirty)
- [toParentResized](DTableBodyCellColor.md#toparentresized)
- [toggle](DTableBodyCellColor.md#toggle)
- [unset](DTableBodyCellColor.md#unset)
- [updateText](DTableBodyCellColor.md#updatetext)
- [updateTextAndImage](DTableBodyCellColor.md#updatetextandimage)
- [updateTextColor](DTableBodyCellColor.md#updatetextcolor)
- [updateTextForcibly](DTableBodyCellColor.md#updatetextforcibly)
- [updateTextPosition](DTableBodyCellColor.md#updatetextposition)
- [updateTextValue](DTableBodyCellColor.md#updatetextvalue)
- [updateTransform](DTableBodyCellColor.md#updatetransform)
- [mixin](DTableBodyCellColor.md#mixin)

## Constructors

### constructor

• **new DTableBodyCellColor**<`ROW`, `THEME`, `OPTIONS`\>(`columnIndex`, `column`, `onChange`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellColor`](../interfaces/DThemeTableBodyCellColor.md)<`THEME`\> = [`DThemeTableBodyCellColor`](../interfaces/DThemeTableBodyCellColor.md) |
| `OPTIONS` | extends [`DTableBodyCellColorOptions`](../interfaces/DTableBodyCellColorOptions.md)<`ROW`, `THEME`, `OPTIONS`\> = [`DTableBodyCellColorOptions`](../interfaces/DTableBodyCellColorOptions.md)<`ROW`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<[`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)\>\> |
| `onChange` | [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)<`ROW`, [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), `any`\> |
| `options?` | `OPTIONS` |

#### Overrides

[DButtonColor](DButtonColor.md).[constructor](DButtonColor.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L38)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_accessibleActive](../interfaces/DTableBodyCell.md#_accessibleactive)

#### Inherited from

[DButtonColor](DButtonColor.md).[_accessibleActive](DButtonColor.md#_accessibleactive)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_accessibleDiv](../interfaces/DTableBodyCell.md#_accessiblediv)

#### Inherited from

[DButtonColor](DButtonColor.md).[_accessibleDiv](DButtonColor.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_auto](../interfaces/DTableBodyCell.md#_auto)

#### Inherited from

[DButtonColor](DButtonColor.md).[_auto](DButtonColor.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_background](../interfaces/DTableBodyCell.md#_background)

#### Inherited from

[DButtonColor](DButtonColor.md).[_background](DButtonColor.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_border](../interfaces/DTableBodyCell.md#_border)

#### Inherited from

[DButtonColor](DButtonColor.md).[_border](DButtonColor.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_bounds](../interfaces/DTableBodyCell.md#_bounds)

#### Inherited from

[DButtonColor](DButtonColor.md).[_bounds](DButtonColor.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_clearType](../interfaces/DTableBodyCell.md#_cleartype)

#### Inherited from

[DButtonColor](DButtonColor.md).[_clearType](DButtonColor.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_column

• `Protected` **\_column**: [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<[`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L35)

___

### \_columnIndex

• `Protected` **\_columnIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L34)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_corner](../interfaces/DTableBodyCell.md#_corner)

#### Inherited from

[DButtonColor](DButtonColor.md).[_corner](DButtonColor.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_cursor](../interfaces/DTableBodyCell.md#_cursor)

#### Inherited from

[DButtonColor](DButtonColor.md).[_cursor](DButtonColor.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_destroyed](../interfaces/DTableBodyCell.md#_destroyed)

#### Inherited from

[DButtonColor](DButtonColor.md).[_destroyed](DButtonColor.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_dialog

• `Protected` `Optional` **\_dialog**: [`DDialogColor`](DDialogColor.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md), [`DDialogColorOptions`](../interfaces/DDialogColorOptions.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md)\>\>

#### Inherited from

[DButtonColor](DButtonColor.md).[_dialog](DButtonColor.md#_dialog)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L61)

___

### \_images

• `Protected` **\_images**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DButtonColor](DButtonColor.md).[_images](DButtonColor.md#_images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L95)

___

### \_isOverflowMaskEnabled

• `Protected` **\_isOverflowMaskEnabled**: `boolean`

#### Inherited from

[DButtonColor](DButtonColor.md).[_isOverflowMaskEnabled](DButtonColor.md#_isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L168)

___

### \_isTextVisible

• `Protected` **\_isTextVisible**: `boolean`

#### Inherited from

[DButtonColor](DButtonColor.md).[_isTextVisible](DButtonColor.md#_istextvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L170)

___

### \_isToggle

• `Protected` **\_isToggle**: `boolean`

#### Inherited from

[DButtonColor](DButtonColor.md).[_isToggle](DButtonColor.md#_istoggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L95)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_lastDownPoint](../interfaces/DTableBodyCell.md#_lastdownpoint)

#### Inherited from

[DButtonColor](DButtonColor.md).[_lastDownPoint](DButtonColor.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:761](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L761)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_lastSortedIndex](../interfaces/DTableBodyCell.md#_lastsortedindex)

#### Inherited from

[DButtonColor](DButtonColor.md).[_lastSortedIndex](DButtonColor.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_mask](../interfaces/DTableBodyCell.md#_mask)

#### Inherited from

[DButtonColor](DButtonColor.md).[_mask](DButtonColor.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_onChange

• `Protected` **\_onChange**: [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)<`ROW`, [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L36)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_options](../interfaces/DTableBodyCell.md#_options)

#### Inherited from

[DButtonColor](DButtonColor.md).[_options](DButtonColor.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_outline](../interfaces/DTableBodyCell.md#_outline)

#### Inherited from

[DButtonColor](DButtonColor.md).[_outline](DButtonColor.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[_overflowMask](DButtonColor.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L169)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_padding](../interfaces/DTableBodyCell.md#_padding)

#### Inherited from

[DButtonColor](DButtonColor.md).[_padding](DButtonColor.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_reflowable](../interfaces/DTableBodyCell.md#_reflowable)

#### Inherited from

[DButtonColor](DButtonColor.md).[_reflowable](DButtonColor.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

___

### \_row

• `Protected` `Optional` **\_row**: `ROW`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L32)

___

### \_rowIndex

• `Protected` **\_rowIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L33)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_shortcuts](../interfaces/DTableBodyCell.md#_shortcuts)

#### Inherited from

[DButtonColor](DButtonColor.md).[_shortcuts](DButtonColor.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_snippet](../interfaces/DTableBodyCell.md#_snippet)

#### Inherited from

[DButtonColor](DButtonColor.md).[_snippet](DButtonColor.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_tempDisplayObjectParent](../interfaces/DTableBodyCell.md#_tempdisplayobjectparent)

#### Inherited from

[DButtonColor](DButtonColor.md).[_tempDisplayObjectParent](DButtonColor.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[_text](DButtonColor.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L160)

___

### \_textAlign

• `Protected` **\_textAlign**: [`DTextBaseAlign`](../interfaces/DTextBaseAlign.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[_textAlign](DButtonColor.md#_textalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L166)

___

### \_textAlpha

• `Protected` **\_textAlpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DButtonColor](DButtonColor.md).[_textAlpha](DButtonColor.md#_textalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L164)

___

### \_textColor

• `Protected` **\_textColor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DButtonColor](DButtonColor.md).[_textColor](DButtonColor.md#_textcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L163)

___

### \_textFormatter

• `Protected` **\_textFormatter**: (`value`: [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), `caller`: `any`) => `string`

#### Type declaration

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md) |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[DButtonColor](DButtonColor.md).[_textFormatter](DButtonColor.md#_textformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L167)

___

### \_textStyle

• `Protected` **\_textStyle**: [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[_textStyle](DButtonColor.md#_textstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L165)

___

### \_textValue

• `Protected` `Optional` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<[`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)\>

#### Inherited from

[DButtonColor](DButtonColor.md).[_textValue](DButtonColor.md#_textvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L161)

___

### \_textValueComputed

• `Protected` `Optional` **\_textValueComputed**: [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[_textValueComputed](DButtonColor.md#_textvaluecomputed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L162)

___

### \_title

• `Protected` **\_title**: `string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_title](../interfaces/DTableBodyCell.md#_title)

#### Inherited from

[DButtonColor](DButtonColor.md).[_title](DButtonColor.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_value

• `Protected` `Optional` **\_value**: [`DPickerColorAndAlpha`](DPickerColorAndAlpha.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[_value](DButtonColor.md#_value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L62)

___

### \_when

• `Protected` **\_when**: [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

#### Inherited from

[DButtonColor](DButtonColor.md).[_when](DButtonColor.md#_when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L96)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_zIndex](../interfaces/DTableBodyCell.md#_zindex)

#### Inherited from

[DButtonColor](DButtonColor.md).[_zIndex](DButtonColor.md#_zindex)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessible](../interfaces/DTableBodyCell.md#accessible)

#### Inherited from

[DButtonColor](DButtonColor.md).[accessible](DButtonColor.md#accessible)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleChildren](../interfaces/DTableBodyCell.md#accessiblechildren)

#### Inherited from

[DButtonColor](DButtonColor.md).[accessibleChildren](DButtonColor.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleHint](../interfaces/DTableBodyCell.md#accessiblehint)

#### Inherited from

[DButtonColor](DButtonColor.md).[accessibleHint](DButtonColor.md#accessiblehint)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessiblePointerEvents](../interfaces/DTableBodyCell.md#accessiblepointerevents)

#### Inherited from

[DButtonColor](DButtonColor.md).[accessiblePointerEvents](DButtonColor.md#accessiblepointerevents)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleTitle](../interfaces/DTableBodyCell.md#accessibletitle)

#### Inherited from

[DButtonColor](DButtonColor.md).[accessibleTitle](DButtonColor.md#accessibletitle)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleType](../interfaces/DTableBodyCell.md#accessibletype)

#### Inherited from

[DButtonColor](DButtonColor.md).[accessibleType](DButtonColor.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[alpha](../interfaces/DTableBodyCell.md#alpha)

#### Inherited from

[DButtonColor](DButtonColor.md).[alpha](DButtonColor.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[angle](../interfaces/DTableBodyCell.md#angle)

#### Inherited from

[DButtonColor](DButtonColor.md).[angle](DButtonColor.md#angle)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[buttonMode](../interfaces/DTableBodyCell.md#buttonmode)

#### Inherited from

[DButtonColor](DButtonColor.md).[buttonMode](DButtonColor.md#buttonmode)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[cacheAsBitmap](../interfaces/DTableBodyCell.md#cacheasbitmap)

#### Inherited from

[DButtonColor](DButtonColor.md).[cacheAsBitmap](DButtonColor.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[children](../interfaces/DTableBodyCell.md#children)

#### Inherited from

[DButtonColor](DButtonColor.md).[children](DButtonColor.md#children)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[cursor](../interfaces/DTableBodyCell.md#cursor)

#### Inherited from

[DButtonColor](DButtonColor.md).[cursor](DButtonColor.md#cursor)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[filterArea](../interfaces/DTableBodyCell.md#filterarea)

#### Inherited from

[DButtonColor](DButtonColor.md).[filterArea](DButtonColor.md#filterarea)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[filters](../interfaces/DTableBodyCell.md#filters)

#### Inherited from

[DButtonColor](DButtonColor.md).[filters](DButtonColor.md#filters)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hitArea](../interfaces/DTableBodyCell.md#hitarea)

#### Inherited from

[DButtonColor](DButtonColor.md).[hitArea](DButtonColor.md#hitarea)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[interactive](../interfaces/DTableBodyCell.md#interactive)

#### Inherited from

[DButtonColor](DButtonColor.md).[interactive](DButtonColor.md#interactive)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[interactiveChildren](../interfaces/DTableBodyCell.md#interactivechildren)

#### Inherited from

[DButtonColor](DButtonColor.md).[interactiveChildren](DButtonColor.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isMask](../interfaces/DTableBodyCell.md#ismask)

#### Inherited from

[DButtonColor](DButtonColor.md).[isMask](DButtonColor.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isSprite](../interfaces/DTableBodyCell.md#issprite)

#### Inherited from

[DButtonColor](DButtonColor.md).[isSprite](DButtonColor.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[localTransform](../interfaces/DTableBodyCell.md#localtransform)

#### Inherited from

[DButtonColor](DButtonColor.md).[localTransform](DButtonColor.md#localtransform)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[mask](../interfaces/DTableBodyCell.md#mask)

#### Inherited from

[DButtonColor](DButtonColor.md).[mask](DButtonColor.md#mask)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[name](../interfaces/DTableBodyCell.md#name)

#### Inherited from

[DButtonColor](DButtonColor.md).[name](DButtonColor.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[parent](../interfaces/DTableBodyCell.md#parent)

#### Inherited from

[DButtonColor](DButtonColor.md).[parent](DButtonColor.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[pivot](../interfaces/DTableBodyCell.md#pivot)

#### Inherited from

[DButtonColor](DButtonColor.md).[pivot](DButtonColor.md#pivot)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[renderable](../interfaces/DTableBodyCell.md#renderable)

#### Inherited from

[DButtonColor](DButtonColor.md).[renderable](DButtonColor.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[rotation](../interfaces/DTableBodyCell.md#rotation)

#### Inherited from

[DButtonColor](DButtonColor.md).[rotation](DButtonColor.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[sortDirty](../interfaces/DTableBodyCell.md#sortdirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[sortDirty](DButtonColor.md#sortdirty)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[sortableChildren](../interfaces/DTableBodyCell.md#sortablechildren)

#### Inherited from

[DButtonColor](DButtonColor.md).[sortableChildren](DButtonColor.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[transform](../interfaces/DTableBodyCell.md#transform)

#### Inherited from

[DButtonColor](DButtonColor.md).[transform](DButtonColor.md#transform)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[visible](../interfaces/DTableBodyCell.md#visible)

#### Inherited from

[DButtonColor](DButtonColor.md).[visible](DButtonColor.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[worldAlpha](../interfaces/DTableBodyCell.md#worldalpha)

#### Inherited from

[DButtonColor](DButtonColor.md).[worldAlpha](DButtonColor.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[worldTransform](../interfaces/DTableBodyCell.md#worldtransform)

#### Inherited from

[DButtonColor](DButtonColor.md).[worldTransform](DButtonColor.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[worldVisible](../interfaces/DTableBodyCell.md#worldvisible)

#### Inherited from

[DButtonColor](DButtonColor.md).[worldVisible](DButtonColor.md#worldvisible)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[zIndex](../interfaces/DTableBodyCell.md#zindex)

#### Inherited from

[DButtonColor](DButtonColor.md).[zIndex](DButtonColor.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### DIALOG

▪ `Static` `Protected` `Optional` **DIALOG**: [`DDialogColor`](DDialogColor.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md), [`DDialogColorOptions`](../interfaces/DDialogColorOptions.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md)\>\>

#### Inherited from

[DButtonColor](DButtonColor.md).[DIALOG](DButtonColor.md#dialog)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L60)

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[LAYOUTER](DButtonColor.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L94)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DButtonColor](DButtonColor.md).[WORK_CONTAINS_POINT](DButtonColor.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:733](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L733)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

DTableBodyCell.background

#### Inherited from

DButtonColor.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

DTableBodyCell.border

#### Inherited from

DButtonColor.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### column

• `get` **column**(): [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<[`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)\>\>

A column.

#### Returns

[`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md), [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<[`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)\>\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[column](../interfaces/DTableBodyCell.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L77)

___

### columnIndex

• `get` **columnIndex**(): `number`

A column index.

#### Returns

`number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[columnIndex](../interfaces/DTableBodyCell.md#columnindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L73)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Implementation of

DTableBodyCell.corner

#### Inherited from

DButtonColor.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### dialog

• `get` **dialog**(): [`DDialogColor`](DDialogColor.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md), [`DDialogColorOptions`](../interfaces/DDialogColorOptions.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md)\>\>

#### Returns

[`DDialogColor`](DDialogColor.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md), [`DDialogColorOptions`](../interfaces/DDialogColorOptions.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md)\>\>

#### Inherited from

DButtonColor.dialog

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L142)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.height

#### Inherited from

DButtonColor.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1288)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.height

#### Inherited from

DButtonColor.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### image

• `get` **image**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Inherited from

DButtonColor.image

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

DButtonColor.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L129)

___

### isToggle

• `get` **isToggle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DButtonColor.isToggle

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L125)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Implementation of

DTableBodyCell.options

#### Inherited from

DButtonColor.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Implementation of

DTableBodyCell.outline

#### Inherited from

DButtonColor.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Implementation of

DTableBodyCell.padding

#### Inherited from

DButtonColor.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.position

#### Inherited from

DButtonColor.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

DTableBodyCell.reflowable

#### Inherited from

DButtonColor.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### row

• `get` **row**(): `undefined` \| `ROW`

A row data if exists.
Otherwise, Undefined.

#### Returns

`undefined` \| `ROW`

a row data or undefined.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[row](../interfaces/DTableBodyCell.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L65)

___

### rowIndex

• `get` **rowIndex**(): `number`

A row index if a row data exists.
Otherise, -1.

#### Returns

`number`

a row index or -1.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[rowIndex](../interfaces/DTableBodyCell.md#rowindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L69)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.scale

#### Inherited from

DButtonColor.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

DTableBodyCell.shadow

#### Inherited from

DButtonColor.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1701](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1701)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.shadow

#### Inherited from

DButtonColor.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.skew

#### Inherited from

DButtonColor.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

DTableBodyCell.snippet

#### Inherited from

DButtonColor.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

DTableBodyCell.state

#### Inherited from

DButtonColor.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### text

• `get` **text**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Inherited from

DButtonColor.text

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

DButtonColor.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L190)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Implementation of

DTableBodyCell.theme

#### Inherited from

DButtonColor.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Implementation of

DTableBodyCell.theme

#### Inherited from

DButtonColor.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.title

#### Inherited from

DButtonColor.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1385](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1385)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Implementation of

DTableBodyCell.title

#### Inherited from

DButtonColor.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.type

#### Inherited from

DButtonColor.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Implementation of

DTableBodyCell.unsafe

#### Inherited from

DButtonColor.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### value

• `get` **value**(): [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Returns

[`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Inherited from

DButtonColor.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L166)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.weight

#### Inherited from

DButtonColor.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.width

#### Inherited from

DButtonColor.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1229)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.width

#### Inherited from

DButtonColor.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.x

#### Inherited from

DButtonColor.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1149)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.x

#### Inherited from

DButtonColor.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.y

#### Inherited from

DButtonColor.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1189)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.y

#### Inherited from

DButtonColor.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_calculateBounds](../interfaces/DTableBodyCell.md#_calculatebounds)

#### Inherited from

[DButtonColor](DButtonColor.md).[_calculateBounds](DButtonColor.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1928](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1928)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_recursivePostUpdateTransform](../interfaces/DTableBodyCell.md#_recursivepostupdatetransform)

#### Inherited from

[DButtonColor](DButtonColor.md).[_recursivePostUpdateTransform](DButtonColor.md#_recursivepostupdatetransform)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_render](../interfaces/DTableBodyCell.md#_render)

#### Inherited from

[DButtonColor](DButtonColor.md).[_render](DButtonColor.md#_render)

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

[DButtonColor](DButtonColor.md).[activate](DButtonColor.md#activate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L174)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addChild](../interfaces/DTableBodyCell.md#addchild)

#### Inherited from

[DButtonColor](DButtonColor.md).[addChild](DButtonColor.md#addchild)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addChildAt](../interfaces/DTableBodyCell.md#addchildat)

#### Inherited from

[DButtonColor](DButtonColor.md).[addChildAt](DButtonColor.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addListener](../interfaces/DTableBodyCell.md#addlistener)

#### Inherited from

[DButtonColor](DButtonColor.md).[addListener](DButtonColor.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addListener](../interfaces/DTableBodyCell.md#addlistener)

#### Inherited from

[DButtonColor](DButtonColor.md).[addListener](DButtonColor.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[applyTitle](../interfaces/DTableBodyCell.md#applytitle)

#### Inherited from

[DButtonColor](DButtonColor.md).[applyTitle](DButtonColor.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L383)

___

### blur

▸ **blur**(`recursively?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[blur](../interfaces/DTableBodyCell.md#blur)

#### Inherited from

[DButtonColor](DButtonColor.md).[blur](DButtonColor.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[calculateBounds](../interfaces/DTableBodyCell.md#calculatebounds)

#### Inherited from

[DButtonColor](DButtonColor.md).[calculateBounds](DButtonColor.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### computeTextValue

▸ `Protected` **computeTextValue**(): `undefined` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Returns

`undefined` \| [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[computeTextValue](DButtonColor.md#computetextvalue)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[containsGlobalPoint](../interfaces/DTableBodyCell.md#containsglobalpoint)

#### Inherited from

[DButtonColor](DButtonColor.md).[containsGlobalPoint](DButtonColor.md#containsglobalpoint)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[containsLocalPoint](../interfaces/DTableBodyCell.md#containslocalpoint)

#### Inherited from

[DButtonColor](DButtonColor.md).[containsLocalPoint](DButtonColor.md#containslocalpoint)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[containsPoint](../interfaces/DTableBodyCell.md#containspoint)

#### Inherited from

[DButtonColor](DButtonColor.md).[containsPoint](DButtonColor.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### createOrUpdateText

▸ `Protected` **createOrUpdateText**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[createOrUpdateText](DButtonColor.md#createorupdatetext)

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

[DButtonColor](DButtonColor.md).[createText](DButtonColor.md#createtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L247)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[destroy](../interfaces/DTableBodyCell.md#destroy)

#### Inherited from

[DButtonColor](DButtonColor.md).[destroy](DButtonColor.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L259)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[displayObjectUpdateTransform](../interfaces/DTableBodyCell.md#displayobjectupdatetransform)

#### Inherited from

[DButtonColor](DButtonColor.md).[displayObjectUpdateTransform](DButtonColor.md#displayobjectupdatetransform)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[emit](../interfaces/DTableBodyCell.md#emit)

#### Inherited from

[DButtonColor](DButtonColor.md).[emit](DButtonColor.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[eventNames](../interfaces/DTableBodyCell.md#eventnames)

#### Inherited from

[DButtonColor](DButtonColor.md).[eventNames](DButtonColor.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[focus](../interfaces/DTableBodyCell.md#focus)

#### Inherited from

[DButtonColor](DButtonColor.md).[focus](DButtonColor.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[focusOnClosest](../interfaces/DTableBodyCell.md#focusonclosest)

#### Inherited from

[DButtonColor](DButtonColor.md).[focusOnClosest](DButtonColor.md#focusonclosest)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getBounds](../interfaces/DTableBodyCell.md#getbounds)

#### Inherited from

[DButtonColor](DButtonColor.md).[getBounds](DButtonColor.md#getbounds)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getChildAt](../interfaces/DTableBodyCell.md#getchildat)

#### Inherited from

[DButtonColor](DButtonColor.md).[getChildAt](DButtonColor.md#getchildat)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getChildByName](../interfaces/DTableBodyCell.md#getchildbyname)

#### Inherited from

[DButtonColor](DButtonColor.md).[getChildByName](DButtonColor.md#getchildbyname)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getChildIndex](../interfaces/DTableBodyCell.md#getchildindex)

#### Inherited from

[DButtonColor](DButtonColor.md).[getChildIndex](DButtonColor.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getClearType](../interfaces/DTableBodyCell.md#getcleartype)

#### Inherited from

[DButtonColor](DButtonColor.md).[getClearType](DButtonColor.md#getcleartype)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getClippingRect](../interfaces/DTableBodyCell.md#getclippingrect)

#### Inherited from

[DButtonColor](DButtonColor.md).[getClippingRect](DButtonColor.md#getclippingrect)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getGlobalPosition](../interfaces/DTableBodyCell.md#getglobalposition)

#### Inherited from

[DButtonColor](DButtonColor.md).[getGlobalPosition](DButtonColor.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getHeight](../interfaces/DTableBodyCell.md#getheight)

#### Inherited from

[DButtonColor](DButtonColor.md).[getHeight](DButtonColor.md#getheight)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getLocalBounds](../interfaces/DTableBodyCell.md#getlocalbounds)

#### Inherited from

[DButtonColor](DButtonColor.md).[getLocalBounds](DButtonColor.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DButtonColor](DButtonColor.md).[getOverflowMask](DButtonColor.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L251)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getParentOfSize](../interfaces/DTableBodyCell.md#getparentofsize)

#### Inherited from

[DButtonColor](DButtonColor.md).[getParentOfSize](DButtonColor.md#getparentofsize)

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

[DButtonColor](DButtonColor.md).[getTextAlpha](DButtonColor.md#gettextalpha)

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

[DButtonColor](DButtonColor.md).[getTextColor](DButtonColor.md#gettextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L303)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getThemeDefault](../interfaces/DTableBodyCell.md#getthemedefault)

#### Inherited from

[DButtonColor](DButtonColor.md).[getThemeDefault](DButtonColor.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getType](../interfaces/DTableBodyCell.md#gettype)

#### Overrides

[DButtonColor](DButtonColor.md).[getType](DButtonColor.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L117)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getWidth](../interfaces/DTableBodyCell.md#getwidth)

#### Inherited from

[DButtonColor](DButtonColor.md).[getWidth](DButtonColor.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getX](../interfaces/DTableBodyCell.md#getx)

#### Inherited from

[DButtonColor](DButtonColor.md).[getX](DButtonColor.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getY](../interfaces/DTableBodyCell.md#gety)

#### Inherited from

[DButtonColor](DButtonColor.md).[getY](DButtonColor.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasDirty](../interfaces/DTableBodyCell.md#hasdirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[hasDirty](DButtonColor.md#hasdirty)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasRefitableHeight](../interfaces/DTableBodyCell.md#hasrefitableheight)

#### Inherited from

[DButtonColor](DButtonColor.md).[hasRefitableHeight](DButtonColor.md#hasrefitableheight)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasRefitableWidth](../interfaces/DTableBodyCell.md#hasrefitablewidth)

#### Inherited from

[DButtonColor](DButtonColor.md).[hasRefitableWidth](DButtonColor.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hide

▸ **hide**(): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hide](../interfaces/DTableBodyCell.md#hide)

#### Inherited from

[DButtonColor](DButtonColor.md).[hide](DButtonColor.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

___

### hideText

▸ `Protected` **hideText**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[hideText](DButtonColor.md#hidetext)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[init](../interfaces/DTableBodyCell.md#init)

#### Inherited from

[DButtonColor](DButtonColor.md).[init](DButtonColor.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L98)

___

### initOnPress

▸ `Protected` **initOnPress**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[initOnPress](DButtonColor.md#initonpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L129)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[initReflowable](../interfaces/DTableBodyCell.md#initreflowable)

#### Inherited from

[DButtonColor](DButtonColor.md).[initReflowable](DButtonColor.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isDirty](../interfaces/DTableBodyCell.md#isdirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[isDirty](DButtonColor.md#isdirty)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isEventTarget](../interfaces/DTableBodyCell.md#iseventtarget)

#### Inherited from

[DButtonColor](DButtonColor.md).[isEventTarget](DButtonColor.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHidden](../interfaces/DTableBodyCell.md#ishidden)

#### Inherited from

[DButtonColor](DButtonColor.md).[isHidden](DButtonColor.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHierarchyDirty](../interfaces/DTableBodyCell.md#ishierarchydirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[isHierarchyDirty](DButtonColor.md#ishierarchydirty)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isRefitable](../interfaces/DTableBodyCell.md#isrefitable)

#### Inherited from

[DButtonColor](DButtonColor.md).[isRefitable](DButtonColor.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L176)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isShown](../interfaces/DTableBodyCell.md#isshown)

#### Inherited from

[DButtonColor](DButtonColor.md).[isShown](DButtonColor.md#isshown)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[listenerCount](../interfaces/DTableBodyCell.md#listenercount)

#### Inherited from

[DButtonColor](DButtonColor.md).[listenerCount](DButtonColor.md#listenercount)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[listeners](../interfaces/DTableBodyCell.md#listeners)

#### Inherited from

[DButtonColor](DButtonColor.md).[listeners](DButtonColor.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newDialog

▸ `Protected` **newDialog**(`options?`): [`DDialogColor`](DDialogColor.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md), [`DDialogColorOptions`](../interfaces/DDialogColorOptions.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DDialogColorOptions`](../interfaces/DDialogColorOptions.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md)\> |

#### Returns

[`DDialogColor`](DDialogColor.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md), [`DDialogColorOptions`](../interfaces/DDialogColorOptions.md)<[`DThemeDialogColor`](../interfaces/DThemeDialogColor.md)\>\>

#### Inherited from

[DButtonColor](DButtonColor.md).[newDialog](DButtonColor.md#newdialog)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L162)

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

[DButtonColor](DButtonColor.md).[newImage](DButtonColor.md#newimage)

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

[DButtonColor](DButtonColor.md).[newImages](DButtonColor.md#newimages)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L102)

___

### newValue

▸ `Protected` **newValue**(): [`DPickerColorAndAlpha`](DPickerColorAndAlpha.md)

#### Returns

[`DPickerColorAndAlpha`](DPickerColorAndAlpha.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[newValue](DButtonColor.md#newvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L175)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[off](../interfaces/DTableBodyCell.md#off)

#### Inherited from

[DButtonColor](DButtonColor.md).[off](DButtonColor.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[on](../interfaces/DTableBodyCell.md#on)

#### Inherited from

[DButtonColor](DButtonColor.md).[on](DButtonColor.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[on](../interfaces/DTableBodyCell.md#on)

#### Inherited from

[DButtonColor](DButtonColor.md).[on](DButtonColor.md#on)

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

#### Inherited from

[DButtonColor](DButtonColor.md).[onActivate](DButtonColor.md#onactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L64)

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

[DButtonColor](DButtonColor.md).[onActivateKeyDown](DButtonColor.md#onactivatekeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L220)

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

[DButtonColor](DButtonColor.md).[onActivateKeyUp](DButtonColor.md#onactivatekeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L230)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onBlur](../interfaces/DTableBodyCell.md#onblur)

#### Inherited from

[DButtonColor](DButtonColor.md).[onBlur](DButtonColor.md#onblur)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildBlur](../interfaces/DTableBodyCell.md#onchildblur)

#### Inherited from

[DButtonColor](DButtonColor.md).[onChildBlur](DButtonColor.md#onchildblur)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildFocus](../interfaces/DTableBodyCell.md#onchildfocus)

#### Inherited from

[DButtonColor](DButtonColor.md).[onChildFocus](DButtonColor.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildrenChange](../interfaces/DTableBodyCell.md#onchildrenchange)

#### Inherited from

[DButtonColor](DButtonColor.md).[onChildrenChange](DButtonColor.md#onchildrenchange)

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

[DButtonColor](DButtonColor.md).[onClick](DButtonColor.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L158)

___

### onColorChange

▸ `Protected` **onColorChange**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[onColorChange](DButtonColor.md#oncolorchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L130)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onDblClick](../interfaces/DTableBodyCell.md#ondblclick)

#### Inherited from

[DButtonColor](DButtonColor.md).[onDblClick](DButtonColor.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L164)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onDown](../interfaces/DTableBodyCell.md#ondown)

#### Inherited from

[DButtonColor](DButtonColor.md).[onDown](DButtonColor.md#ondown)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onDownThis](../interfaces/DTableBodyCell.md#ondownthis)

#### Inherited from

[DButtonColor](DButtonColor.md).[onDownThis](DButtonColor.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onFocus](../interfaces/DTableBodyCell.md#onfocus)

#### Inherited from

[DButtonColor](DButtonColor.md).[onFocus](DButtonColor.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onHierarchyDirty](../interfaces/DTableBodyCell.md#onhierarchydirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[onHierarchyDirty](DButtonColor.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1478)

___

### onInactivate

▸ `Protected` **onInactivate**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[onInactivate](DButtonColor.md#oninactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L189)

___

### onKeyDown

▸ `Protected` **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onKeyDown](../interfaces/DTableBodyCell.md#onkeydown)

#### Inherited from

[DButtonColor](DButtonColor.md).[onKeyDown](DButtonColor.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L243)

___

### onKeyUp

▸ `Protected` **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onKeyUp](../interfaces/DTableBodyCell.md#onkeyup)

#### Inherited from

[DButtonColor](DButtonColor.md).[onKeyUp](DButtonColor.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L251)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onMove](../interfaces/DTableBodyCell.md#onmove)

#### Inherited from

[DButtonColor](DButtonColor.md).[onMove](DButtonColor.md#onmove)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onOut](../interfaces/DTableBodyCell.md#onout)

#### Inherited from

[DButtonColor](DButtonColor.md).[onOut](DButtonColor.md#onout)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onOver](../interfaces/DTableBodyCell.md#onover)

#### Inherited from

[DButtonColor](DButtonColor.md).[onOver](DButtonColor.md#onover)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onParentMove](../interfaces/DTableBodyCell.md#onparentmove)

#### Inherited from

[DButtonColor](DButtonColor.md).[onParentMove](DButtonColor.md#onparentmove)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onParentResize](../interfaces/DTableBodyCell.md#onparentresize)

#### Inherited from

[DButtonColor](DButtonColor.md).[onParentResize](DButtonColor.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1750)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onRefit](../interfaces/DTableBodyCell.md#onrefit)

#### Inherited from

[DButtonColor](DButtonColor.md).[onRefit](DButtonColor.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onReflow](../interfaces/DTableBodyCell.md#onreflow)

#### Inherited from

[DButtonColor](DButtonColor.md).[onReflow](DButtonColor.md#onreflow)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onResize](../interfaces/DTableBodyCell.md#onresize)

#### Inherited from

[DButtonColor](DButtonColor.md).[onResize](DButtonColor.md#onresize)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onScale](../interfaces/DTableBodyCell.md#onscale)

#### Inherited from

[DButtonColor](DButtonColor.md).[onScale](DButtonColor.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onShortcut](../interfaces/DTableBodyCell.md#onshortcut)

#### Inherited from

[DButtonColor](DButtonColor.md).[onShortcut](DButtonColor.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L118)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onSkew](../interfaces/DTableBodyCell.md#onskew)

#### Inherited from

[DButtonColor](DButtonColor.md).[onSkew](DButtonColor.md#onskew)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onStateChange](../interfaces/DTableBodyCell.md#onstatechange)

#### Inherited from

[DButtonColor](DButtonColor.md).[onStateChange](DButtonColor.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L135)

___

### onTextChange

▸ `Protected` **onTextChange**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[onTextChange](DButtonColor.md#ontextchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L201)

___

### onToggleEnd

▸ `Protected` **onToggleEnd**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[onToggleEnd](DButtonColor.md#ontoggleend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L210)

___

### onToggleStart

▸ `Protected` **onToggleStart**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[onToggleStart](DButtonColor.md#ontogglestart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L204)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onUp](../interfaces/DTableBodyCell.md#onup)

#### Inherited from

[DButtonColor](DButtonColor.md).[onUp](DButtonColor.md#onup)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onUpThis](../interfaces/DTableBodyCell.md#onupthis)

#### Inherited from

[DButtonColor](DButtonColor.md).[onUpThis](DButtonColor.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1852)

___

### onValueChange

▸ `Protected` **onValueChange**(`newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md) |
| `oldValue` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md) |

#### Returns

`void`

#### Overrides

[DButtonColor](DButtonColor.md).[onValueChange](DButtonColor.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L52)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onWheel](../interfaces/DTableBodyCell.md#onwheel)

#### Inherited from

[DButtonColor](DButtonColor.md).[onWheel](DButtonColor.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[once](../interfaces/DTableBodyCell.md#once)

#### Inherited from

[DButtonColor](DButtonColor.md).[once](DButtonColor.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[once](../interfaces/DTableBodyCell.md#once)

#### Inherited from

[DButtonColor](DButtonColor.md).[once](DButtonColor.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[reflow](../interfaces/DTableBodyCell.md#reflow)

#### Inherited from

[DButtonColor](DButtonColor.md).[reflow](DButtonColor.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeAllListeners](../interfaces/DTableBodyCell.md#removealllisteners)

#### Inherited from

[DButtonColor](DButtonColor.md).[removeAllListeners](DButtonColor.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeAllListeners](../interfaces/DTableBodyCell.md#removealllisteners)

#### Inherited from

[DButtonColor](DButtonColor.md).[removeAllListeners](DButtonColor.md#removealllisteners)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeChild](../interfaces/DTableBodyCell.md#removechild)

#### Inherited from

[DButtonColor](DButtonColor.md).[removeChild](DButtonColor.md#removechild)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeChildAt](../interfaces/DTableBodyCell.md#removechildat)

#### Inherited from

[DButtonColor](DButtonColor.md).[removeChildAt](DButtonColor.md#removechildat)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeChildren](../interfaces/DTableBodyCell.md#removechildren)

#### Inherited from

[DButtonColor](DButtonColor.md).[removeChildren](DButtonColor.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeListener](../interfaces/DTableBodyCell.md#removelistener)

#### Inherited from

[DButtonColor](DButtonColor.md).[removeListener](DButtonColor.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeListener](../interfaces/DTableBodyCell.md#removelistener)

#### Inherited from

[DButtonColor](DButtonColor.md).[removeListener](DButtonColor.md#removelistener)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[render](../interfaces/DTableBodyCell.md#render)

#### Inherited from

[DButtonColor](DButtonColor.md).[render](DButtonColor.md#render)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[renderAdvanced](../interfaces/DTableBodyCell.md#renderadvanced)

#### Inherited from

[DButtonColor](DButtonColor.md).[renderAdvanced](DButtonColor.md#renderadvanced)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[resize](../interfaces/DTableBodyCell.md#resize)

#### Inherited from

[DButtonColor](DButtonColor.md).[resize](DButtonColor.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1063)

___

### set

▸ **set**(`value`, `row`, `supplimental`, `rowIndex`, `columnIndex`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `row` | `ROW` |
| `supplimental` | `unknown` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[set](../interfaces/DTableBodyCell.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L81)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setChildIndex](../interfaces/DTableBodyCell.md#setchildindex)

#### Inherited from

[DButtonColor](DButtonColor.md).[setChildIndex](DButtonColor.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setFocused](../interfaces/DTableBodyCell.md#setfocused)

#### Inherited from

[DButtonColor](DButtonColor.md).[setFocused](DButtonColor.md#setfocused)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setHeight](../interfaces/DTableBodyCell.md#setheight)

#### Inherited from

[DButtonColor](DButtonColor.md).[setHeight](DButtonColor.md#setheight)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setParent](../interfaces/DTableBodyCell.md#setparent)

#### Inherited from

[DButtonColor](DButtonColor.md).[setParent](DButtonColor.md#setparent)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setTransform](../interfaces/DTableBodyCell.md#settransform)

#### Inherited from

[DButtonColor](DButtonColor.md).[setTransform](DButtonColor.md#settransform)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setWidth](../interfaces/DTableBodyCell.md#setwidth)

#### Inherited from

[DButtonColor](DButtonColor.md).[setWidth](DButtonColor.md#setwidth)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setX](../interfaces/DTableBodyCell.md#setx)

#### Inherited from

[DButtonColor](DButtonColor.md).[setX](DButtonColor.md#setx)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setY](../interfaces/DTableBodyCell.md#sety)

#### Inherited from

[DButtonColor](DButtonColor.md).[setY](DButtonColor.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellColor`](DTableBodyCellColor.md)<`ROW`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[show](../interfaces/DTableBodyCell.md#show)

#### Inherited from

[DButtonColor](DButtonColor.md).[show](DButtonColor.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### showText

▸ `Protected` **showText**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[showText](DButtonColor.md#showtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L358)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[sortChildren](../interfaces/DTableBodyCell.md#sortchildren)

#### Inherited from

[DButtonColor](DButtonColor.md).[sortChildren](DButtonColor.md#sortchildren)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[swapChildren](../interfaces/DTableBodyCell.md#swapchildren)

#### Inherited from

[DButtonColor](DButtonColor.md).[swapChildren](DButtonColor.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toClone

▸ `Protected` **toClone**(`value`): [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`DColorAndAlpha`](../interfaces/DColorAndAlpha.md) |

#### Returns

[`DColorAndAlpha`](../interfaces/DColorAndAlpha.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[toClone](DButtonColor.md#toclone)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L83)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toCursor](../interfaces/DTableBodyCell.md#tocursor)

#### Inherited from

[DButtonColor](DButtonColor.md).[toCursor](DButtonColor.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toDirty](../interfaces/DTableBodyCell.md#todirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[toDirty](DButtonColor.md#todirty)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toGlobal](../interfaces/DTableBodyCell.md#toglobal)

#### Inherited from

[DButtonColor](DButtonColor.md).[toGlobal](DButtonColor.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toHasDirty](../interfaces/DTableBodyCell.md#tohasdirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[toHasDirty](DButtonColor.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toHierarchyDirty](../interfaces/DTableBodyCell.md#tohierarchydirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[toHierarchyDirty](DButtonColor.md#tohierarchydirty)

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

[DButtonColor](DButtonColor.md).[toImageOptions](DButtonColor.md#toimageoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L113)

___

### toImageTintOptions

▸ `Protected` **toImageTintOptions**(`tint?`): [`DImagePieceTintOptions`](../interfaces/DImagePieceTintOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tint?` | [`DImagePieceTintOptions`](../interfaces/DImagePieceTintOptions.md) |

#### Returns

[`DImagePieceTintOptions`](../interfaces/DImagePieceTintOptions.md)

#### Inherited from

[DButtonColor](DButtonColor.md).[toImageTintOptions](DButtonColor.md#toimagetintoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L100)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toLocal](../interfaces/DTableBodyCell.md#tolocal)

#### Inherited from

[DButtonColor](DButtonColor.md).[toLocal](DButtonColor.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHasDirty](../interfaces/DTableBodyCell.md#toparenthasdirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[toParentHasDirty](DButtonColor.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHierarchyDirty](../interfaces/DTableBodyCell.md#toparenthierarchydirty)

#### Inherited from

[DButtonColor](DButtonColor.md).[toParentHierarchyDirty](DButtonColor.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentResized](../interfaces/DTableBodyCell.md#toparentresized)

#### Inherited from

[DButtonColor](DButtonColor.md).[toParentResized](DButtonColor.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[toggle](DButtonColor.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L195)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[unset](../interfaces/DTableBodyCell.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-color.ts#L112)

___

### updateText

▸ `Protected` **updateText**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[updateText](DButtonColor.md#updatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L144)

___

### updateTextAndImage

▸ `Protected` **updateTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[updateTextAndImage](DButtonColor.md#updatetextandimage)

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

[DButtonColor](DButtonColor.md).[updateTextColor](DButtonColor.md#updatetextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L333)

___

### updateTextForcibly

▸ `Protected` **updateTextForcibly**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[updateTextForcibly](DButtonColor.md#updatetextforcibly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L137)

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

[DButtonColor](DButtonColor.md).[updateTextPosition](DButtonColor.md#updatetextposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L263)

___

### updateTextValue

▸ `Protected` **updateTextValue**(): `void`

#### Returns

`void`

#### Inherited from

[DButtonColor](DButtonColor.md).[updateTextValue](DButtonColor.md#updatetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L340)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[updateTransform](../interfaces/DTableBodyCell.md#updatetransform)

#### Inherited from

[DButtonColor](DButtonColor.md).[updateTransform](DButtonColor.md#updatetransform)

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

[DButtonColor](DButtonColor.md).[mixin](DButtonColor.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
