[Winter Cardinal UI - v0.154.0](../index.md) / DTableBodyCellActionDialog

# Class: DTableBodyCellActionDialog<ROW, VALUE, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellActionDialog`](../interfaces/DThemeTableBodyCellActionDialog.md)<`VALUE`\> = [`DThemeTableBodyCellActionDialog`](../interfaces/DThemeTableBodyCellActionDialog.md)<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellActionDialogOptions`](../interfaces/DTableBodyCellActionDialogOptions.md)<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellActionDialogOptions`](../interfaces/DTableBodyCellActionDialogOptions.md)<`ROW`, `VALUE`, `THEME`\> |

## Hierarchy

- [`DTableBodyCellSelectDialog`](DTableBodyCellSelectDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DTableBodyCellActionDialog`**

## Table of contents

### Constructors

- [constructor](DTableBodyCellActionDialog.md#constructor)

### Properties

- [\_accessibleActive](DTableBodyCellActionDialog.md#_accessibleactive)
- [\_accessibleDiv](DTableBodyCellActionDialog.md#_accessiblediv)
- [\_auto](DTableBodyCellActionDialog.md#_auto)
- [\_background](DTableBodyCellActionDialog.md#_background)
- [\_border](DTableBodyCellActionDialog.md#_border)
- [\_bounds](DTableBodyCellActionDialog.md#_bounds)
- [\_clearType](DTableBodyCellActionDialog.md#_cleartype)
- [\_column](DTableBodyCellActionDialog.md#_column)
- [\_columnIndex](DTableBodyCellActionDialog.md#_columnindex)
- [\_corner](DTableBodyCellActionDialog.md#_corner)
- [\_cursor](DTableBodyCellActionDialog.md#_cursor)
- [\_destroyed](DTableBodyCellActionDialog.md#_destroyed)
- [\_images](DTableBodyCellActionDialog.md#_images)
- [\_isChildrenDirty](DTableBodyCellActionDialog.md#_ischildrendirty)
- [\_isOverflowMaskEnabled](DTableBodyCellActionDialog.md#_isoverflowmaskenabled)
- [\_isSyncEnabled](DTableBodyCellActionDialog.md#_issyncenabled)
- [\_isTextVisible](DTableBodyCellActionDialog.md#_istextvisible)
- [\_isToggle](DTableBodyCellActionDialog.md#_istoggle)
- [\_lastDownPoint](DTableBodyCellActionDialog.md#_lastdownpoint)
- [\_lastSortedIndex](DTableBodyCellActionDialog.md#_lastsortedindex)
- [\_mask](DTableBodyCellActionDialog.md#_mask)
- [\_onChange](DTableBodyCellActionDialog.md#_onchange)
- [\_options](DTableBodyCellActionDialog.md#_options)
- [\_outline](DTableBodyCellActionDialog.md#_outline)
- [\_overflowMask](DTableBodyCellActionDialog.md#_overflowmask)
- [\_padding](DTableBodyCellActionDialog.md#_padding)
- [\_reflowable](DTableBodyCellActionDialog.md#_reflowable)
- [\_row](DTableBodyCellActionDialog.md#_row)
- [\_rowIndex](DTableBodyCellActionDialog.md#_rowindex)
- [\_shortcuts](DTableBodyCellActionDialog.md#_shortcuts)
- [\_snippet](DTableBodyCellActionDialog.md#_snippet)
- [\_tempDisplayObjectParent](DTableBodyCellActionDialog.md#_tempdisplayobjectparent)
- [\_text](DTableBodyCellActionDialog.md#_text)
- [\_textAlign](DTableBodyCellActionDialog.md#_textalign)
- [\_textAlpha](DTableBodyCellActionDialog.md#_textalpha)
- [\_textColor](DTableBodyCellActionDialog.md#_textcolor)
- [\_textFormatter](DTableBodyCellActionDialog.md#_textformatter)
- [\_textStyle](DTableBodyCellActionDialog.md#_textstyle)
- [\_textValue](DTableBodyCellActionDialog.md#_textvalue)
- [\_textValueComputed](DTableBodyCellActionDialog.md#_textvaluecomputed)
- [\_title](DTableBodyCellActionDialog.md#_title)
- [\_when](DTableBodyCellActionDialog.md#_when)
- [\_zIndex](DTableBodyCellActionDialog.md#_zindex)
- [accessible](DTableBodyCellActionDialog.md#accessible)
- [accessibleChildren](DTableBodyCellActionDialog.md#accessiblechildren)
- [accessibleHint](DTableBodyCellActionDialog.md#accessiblehint)
- [accessiblePointerEvents](DTableBodyCellActionDialog.md#accessiblepointerevents)
- [accessibleTitle](DTableBodyCellActionDialog.md#accessibletitle)
- [accessibleType](DTableBodyCellActionDialog.md#accessibletype)
- [alpha](DTableBodyCellActionDialog.md#alpha)
- [angle](DTableBodyCellActionDialog.md#angle)
- [buttonMode](DTableBodyCellActionDialog.md#buttonmode)
- [cacheAsBitmap](DTableBodyCellActionDialog.md#cacheasbitmap)
- [children](DTableBodyCellActionDialog.md#children)
- [cursor](DTableBodyCellActionDialog.md#cursor)
- [filterArea](DTableBodyCellActionDialog.md#filterarea)
- [filters](DTableBodyCellActionDialog.md#filters)
- [hitArea](DTableBodyCellActionDialog.md#hitarea)
- [interactive](DTableBodyCellActionDialog.md#interactive)
- [interactiveChildren](DTableBodyCellActionDialog.md#interactivechildren)
- [isMask](DTableBodyCellActionDialog.md#ismask)
- [isSprite](DTableBodyCellActionDialog.md#issprite)
- [localTransform](DTableBodyCellActionDialog.md#localtransform)
- [mask](DTableBodyCellActionDialog.md#mask)
- [name](DTableBodyCellActionDialog.md#name)
- [parent](DTableBodyCellActionDialog.md#parent)
- [pivot](DTableBodyCellActionDialog.md#pivot)
- [renderable](DTableBodyCellActionDialog.md#renderable)
- [rotation](DTableBodyCellActionDialog.md#rotation)
- [sortDirty](DTableBodyCellActionDialog.md#sortdirty)
- [sortableChildren](DTableBodyCellActionDialog.md#sortablechildren)
- [transform](DTableBodyCellActionDialog.md#transform)
- [visible](DTableBodyCellActionDialog.md#visible)
- [worldAlpha](DTableBodyCellActionDialog.md#worldalpha)
- [worldTransform](DTableBodyCellActionDialog.md#worldtransform)
- [worldVisible](DTableBodyCellActionDialog.md#worldvisible)
- [zIndex](DTableBodyCellActionDialog.md#zindex)
- [WORK\_CONTAINS\_POINT](DTableBodyCellActionDialog.md#work_contains_point)

### Accessors

- [background](DTableBodyCellActionDialog.md#background)
- [border](DTableBodyCellActionDialog.md#border)
- [column](DTableBodyCellActionDialog.md#column)
- [columnIndex](DTableBodyCellActionDialog.md#columnindex)
- [corner](DTableBodyCellActionDialog.md#corner)
- [height](DTableBodyCellActionDialog.md#height)
- [image](DTableBodyCellActionDialog.md#image)
- [isToggle](DTableBodyCellActionDialog.md#istoggle)
- [outline](DTableBodyCellActionDialog.md#outline)
- [padding](DTableBodyCellActionDialog.md#padding)
- [position](DTableBodyCellActionDialog.md#position)
- [reflowable](DTableBodyCellActionDialog.md#reflowable)
- [row](DTableBodyCellActionDialog.md#row)
- [rowIndex](DTableBodyCellActionDialog.md#rowindex)
- [scale](DTableBodyCellActionDialog.md#scale)
- [shadow](DTableBodyCellActionDialog.md#shadow)
- [skew](DTableBodyCellActionDialog.md#skew)
- [snippet](DTableBodyCellActionDialog.md#snippet)
- [state](DTableBodyCellActionDialog.md#state)
- [text](DTableBodyCellActionDialog.md#text)
- [theme](DTableBodyCellActionDialog.md#theme)
- [title](DTableBodyCellActionDialog.md#title)
- [type](DTableBodyCellActionDialog.md#type)
- [unsafe](DTableBodyCellActionDialog.md#unsafe)
- [value](DTableBodyCellActionDialog.md#value)
- [weight](DTableBodyCellActionDialog.md#weight)
- [width](DTableBodyCellActionDialog.md#width)
- [x](DTableBodyCellActionDialog.md#x)
- [y](DTableBodyCellActionDialog.md#y)

### Methods

- [\_calculateBounds](DTableBodyCellActionDialog.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTableBodyCellActionDialog.md#_recursivepostupdatetransform)
- [\_render](DTableBodyCellActionDialog.md#_render)
- [addChild](DTableBodyCellActionDialog.md#addchild)
- [addChildAt](DTableBodyCellActionDialog.md#addchildat)
- [addListener](DTableBodyCellActionDialog.md#addlistener)
- [applyTitle](DTableBodyCellActionDialog.md#applytitle)
- [blur](DTableBodyCellActionDialog.md#blur)
- [calculateBounds](DTableBodyCellActionDialog.md#calculatebounds)
- [computeTextValue](DTableBodyCellActionDialog.md#computetextvalue)
- [containsGlobalPoint](DTableBodyCellActionDialog.md#containsglobalpoint)
- [containsLocalPoint](DTableBodyCellActionDialog.md#containslocalpoint)
- [containsPoint](DTableBodyCellActionDialog.md#containspoint)
- [createOrUpdateText](DTableBodyCellActionDialog.md#createorupdatetext)
- [createText](DTableBodyCellActionDialog.md#createtext)
- [destroy](DTableBodyCellActionDialog.md#destroy)
- [displayObjectUpdateTransform](DTableBodyCellActionDialog.md#displayobjectupdatetransform)
- [emit](DTableBodyCellActionDialog.md#emit)
- [eventNames](DTableBodyCellActionDialog.md#eventnames)
- [focus](DTableBodyCellActionDialog.md#focus)
- [focusOnClosest](DTableBodyCellActionDialog.md#focusonclosest)
- [getBounds](DTableBodyCellActionDialog.md#getbounds)
- [getChildAt](DTableBodyCellActionDialog.md#getchildat)
- [getChildByName](DTableBodyCellActionDialog.md#getchildbyname)
- [getChildIndex](DTableBodyCellActionDialog.md#getchildindex)
- [getClearType](DTableBodyCellActionDialog.md#getcleartype)
- [getClippingRect](DTableBodyCellActionDialog.md#getclippingrect)
- [getGlobalPosition](DTableBodyCellActionDialog.md#getglobalposition)
- [getHeight](DTableBodyCellActionDialog.md#getheight)
- [getLocalBounds](DTableBodyCellActionDialog.md#getlocalbounds)
- [getOverflowMask](DTableBodyCellActionDialog.md#getoverflowmask)
- [getParentOfSize](DTableBodyCellActionDialog.md#getparentofsize)
- [getTextAlpha](DTableBodyCellActionDialog.md#gettextalpha)
- [getTextColor](DTableBodyCellActionDialog.md#gettextcolor)
- [getThemeDefault](DTableBodyCellActionDialog.md#getthemedefault)
- [getType](DTableBodyCellActionDialog.md#gettype)
- [getWidth](DTableBodyCellActionDialog.md#getwidth)
- [getX](DTableBodyCellActionDialog.md#getx)
- [getY](DTableBodyCellActionDialog.md#gety)
- [hasDirty](DTableBodyCellActionDialog.md#hasdirty)
- [hasRefitableHeight](DTableBodyCellActionDialog.md#hasrefitableheight)
- [hasRefitableWidth](DTableBodyCellActionDialog.md#hasrefitablewidth)
- [hide](DTableBodyCellActionDialog.md#hide)
- [hideText](DTableBodyCellActionDialog.md#hidetext)
- [init](DTableBodyCellActionDialog.md#init)
- [initOnClick](DTableBodyCellActionDialog.md#initonclick)
- [initOnPress](DTableBodyCellActionDialog.md#initonpress)
- [initReflowable](DTableBodyCellActionDialog.md#initreflowable)
- [isChildrenDirty](DTableBodyCellActionDialog.md#ischildrendirty)
- [isDirty](DTableBodyCellActionDialog.md#isdirty)
- [isEventTarget](DTableBodyCellActionDialog.md#iseventtarget)
- [isHidden](DTableBodyCellActionDialog.md#ishidden)
- [isRefitable](DTableBodyCellActionDialog.md#isrefitable)
- [isShown](DTableBodyCellActionDialog.md#isshown)
- [listenerCount](DTableBodyCellActionDialog.md#listenercount)
- [listeners](DTableBodyCellActionDialog.md#listeners)
- [newImage](DTableBodyCellActionDialog.md#newimage)
- [newImages](DTableBodyCellActionDialog.md#newimages)
- [off](DTableBodyCellActionDialog.md#off)
- [on](DTableBodyCellActionDialog.md#on)
- [onActivate](DTableBodyCellActionDialog.md#onactivate)
- [onActivateKeyDown](DTableBodyCellActionDialog.md#onactivatekeydown)
- [onActivateKeyUp](DTableBodyCellActionDialog.md#onactivatekeyup)
- [onBlur](DTableBodyCellActionDialog.md#onblur)
- [onChildBlur](DTableBodyCellActionDialog.md#onchildblur)
- [onChildFocus](DTableBodyCellActionDialog.md#onchildfocus)
- [onChildrenChange](DTableBodyCellActionDialog.md#onchildrenchange)
- [onChildrenDirty](DTableBodyCellActionDialog.md#onchildrendirty)
- [onClick](DTableBodyCellActionDialog.md#onclick)
- [onDblClick](DTableBodyCellActionDialog.md#ondblclick)
- [onDown](DTableBodyCellActionDialog.md#ondown)
- [onDownThis](DTableBodyCellActionDialog.md#ondownthis)
- [onFocus](DTableBodyCellActionDialog.md#onfocus)
- [onInactivate](DTableBodyCellActionDialog.md#oninactivate)
- [onKeyDown](DTableBodyCellActionDialog.md#onkeydown)
- [onKeyUp](DTableBodyCellActionDialog.md#onkeyup)
- [onMove](DTableBodyCellActionDialog.md#onmove)
- [onOut](DTableBodyCellActionDialog.md#onout)
- [onOver](DTableBodyCellActionDialog.md#onover)
- [onParentMove](DTableBodyCellActionDialog.md#onparentmove)
- [onParentResize](DTableBodyCellActionDialog.md#onparentresize)
- [onRefit](DTableBodyCellActionDialog.md#onrefit)
- [onReflow](DTableBodyCellActionDialog.md#onreflow)
- [onResize](DTableBodyCellActionDialog.md#onresize)
- [onScale](DTableBodyCellActionDialog.md#onscale)
- [onShortcut](DTableBodyCellActionDialog.md#onshortcut)
- [onSkew](DTableBodyCellActionDialog.md#onskew)
- [onStateChange](DTableBodyCellActionDialog.md#onstatechange)
- [onTextChange](DTableBodyCellActionDialog.md#ontextchange)
- [onToggleEnd](DTableBodyCellActionDialog.md#ontoggleend)
- [onToggleStart](DTableBodyCellActionDialog.md#ontogglestart)
- [onUp](DTableBodyCellActionDialog.md#onup)
- [onUpThis](DTableBodyCellActionDialog.md#onupthis)
- [onValueChange](DTableBodyCellActionDialog.md#onvaluechange)
- [onWheel](DTableBodyCellActionDialog.md#onwheel)
- [once](DTableBodyCellActionDialog.md#once)
- [refit](DTableBodyCellActionDialog.md#refit)
- [reflow](DTableBodyCellActionDialog.md#reflow)
- [removeAllListeners](DTableBodyCellActionDialog.md#removealllisteners)
- [removeChild](DTableBodyCellActionDialog.md#removechild)
- [removeChildAt](DTableBodyCellActionDialog.md#removechildat)
- [removeChildren](DTableBodyCellActionDialog.md#removechildren)
- [removeListener](DTableBodyCellActionDialog.md#removelistener)
- [render](DTableBodyCellActionDialog.md#render)
- [renderAdvanced](DTableBodyCellActionDialog.md#renderadvanced)
- [resize](DTableBodyCellActionDialog.md#resize)
- [set](DTableBodyCellActionDialog.md#set)
- [setChildIndex](DTableBodyCellActionDialog.md#setchildindex)
- [setFocused](DTableBodyCellActionDialog.md#setfocused)
- [setHeight](DTableBodyCellActionDialog.md#setheight)
- [setParent](DTableBodyCellActionDialog.md#setparent)
- [setTransform](DTableBodyCellActionDialog.md#settransform)
- [setWidth](DTableBodyCellActionDialog.md#setwidth)
- [setX](DTableBodyCellActionDialog.md#setx)
- [setY](DTableBodyCellActionDialog.md#sety)
- [show](DTableBodyCellActionDialog.md#show)
- [showText](DTableBodyCellActionDialog.md#showtext)
- [sortChildren](DTableBodyCellActionDialog.md#sortchildren)
- [swapChildren](DTableBodyCellActionDialog.md#swapchildren)
- [toChildrenDirty](DTableBodyCellActionDialog.md#tochildrendirty)
- [toCursor](DTableBodyCellActionDialog.md#tocursor)
- [toDirty](DTableBodyCellActionDialog.md#todirty)
- [toGlobal](DTableBodyCellActionDialog.md#toglobal)
- [toHasDirty](DTableBodyCellActionDialog.md#tohasdirty)
- [toImageOptions](DTableBodyCellActionDialog.md#toimageoptions)
- [toLocal](DTableBodyCellActionDialog.md#tolocal)
- [toParentChildrenDirty](DTableBodyCellActionDialog.md#toparentchildrendirty)
- [toParentHasDirty](DTableBodyCellActionDialog.md#toparenthasdirty)
- [toParentResized](DTableBodyCellActionDialog.md#toparentresized)
- [toRounded](DTableBodyCellActionDialog.md#torounded)
- [toggle](DTableBodyCellActionDialog.md#toggle)
- [unset](DTableBodyCellActionDialog.md#unset)
- [updateText](DTableBodyCellActionDialog.md#updatetext)
- [updateTextAndImage](DTableBodyCellActionDialog.md#updatetextandimage)
- [updateTextColor](DTableBodyCellActionDialog.md#updatetextcolor)
- [updateTextPosition](DTableBodyCellActionDialog.md#updatetextposition)
- [updateTextValue](DTableBodyCellActionDialog.md#updatetextvalue)
- [updateTransform](DTableBodyCellActionDialog.md#updatetransform)
- [mixin](DTableBodyCellActionDialog.md#mixin)

## Constructors

### constructor

• **new DTableBodyCellActionDialog**<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>(`columnIndex`, `column`, `onChange`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellActionDialog`](../interfaces/DThemeTableBodyCellActionDialog.md)<`VALUE`, `THEME`\> = [`DThemeTableBodyCellActionDialog`](../interfaces/DThemeTableBodyCellActionDialog.md)<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellActionDialogOptions`](../interfaces/DTableBodyCellActionDialogOptions.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\> = [`DTableBodyCellActionDialogOptions`](../interfaces/DTableBodyCellActionDialogOptions.md)<`ROW`, `VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<``null`` \| `VALUE`\>\> |
| `onChange` | [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)<`ROW`, ``null`` \| `VALUE`, `any`\> |
| `options?` | `OPTIONS` |

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[constructor](DTableBodyCellSelectDialog.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L48)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_accessibleActive](DTableBodyCellSelectDialog.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_accessibleDiv](DTableBodyCellSelectDialog.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_auto](DTableBodyCellSelectDialog.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_background](DTableBodyCellSelectDialog.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_border](DTableBodyCellSelectDialog.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_bounds](DTableBodyCellSelectDialog.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_clearType](DTableBodyCellSelectDialog.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_column

• `Protected` **\_column**: [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<``null`` \| `VALUE`\>\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_column](DTableBodyCellSelectDialog.md#_column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L44)

___

### \_columnIndex

• `Protected` **\_columnIndex**: `number`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_columnIndex](DTableBodyCellSelectDialog.md#_columnindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L43)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_corner](DTableBodyCellSelectDialog.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_cursor](DTableBodyCellSelectDialog.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_destroyed](DTableBodyCellSelectDialog.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_images

• `Protected` **\_images**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_images](DTableBodyCellSelectDialog.md#_images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L93)

___

### \_isChildrenDirty

• `Protected` **\_isChildrenDirty**: `boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_isChildrenDirty](DTableBodyCellSelectDialog.md#_ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L732)

___

### \_isOverflowMaskEnabled

• `Protected` **\_isOverflowMaskEnabled**: `boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_isOverflowMaskEnabled](DTableBodyCellSelectDialog.md#_isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L166)

___

### \_isSyncEnabled

• `Protected` **\_isSyncEnabled**: `boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_isSyncEnabled](DTableBodyCellSelectDialog.md#_issyncenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L46)

___

### \_isTextVisible

• `Protected` **\_isTextVisible**: `boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_isTextVisible](DTableBodyCellSelectDialog.md#_istextvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L168)

___

### \_isToggle

• `Protected` **\_isToggle**: `boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_isToggle](DTableBodyCellSelectDialog.md#_istoggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L95)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_lastDownPoint](DTableBodyCellSelectDialog.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_lastSortedIndex](DTableBodyCellSelectDialog.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_mask](DTableBodyCellSelectDialog.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_onChange

• `Protected` **\_onChange**: [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)<`ROW`, ``null`` \| `VALUE`, `any`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_onChange](DTableBodyCellSelectDialog.md#_onchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L45)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_options](DTableBodyCellSelectDialog.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_outline](DTableBodyCellSelectDialog.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_overflowMask](DTableBodyCellSelectDialog.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L167)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_padding](DTableBodyCellSelectDialog.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_reflowable](DTableBodyCellSelectDialog.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_row

• `Protected` `Optional` **\_row**: `ROW`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_row](DTableBodyCellSelectDialog.md#_row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L41)

___

### \_rowIndex

• `Protected` **\_rowIndex**: `number`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_rowIndex](DTableBodyCellSelectDialog.md#_rowindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L42)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_shortcuts](DTableBodyCellSelectDialog.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_snippet](DTableBodyCellSelectDialog.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_tempDisplayObjectParent](DTableBodyCellSelectDialog.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_text](DTableBodyCellSelectDialog.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L155)

___

### \_textAlign

• `Protected` **\_textAlign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `horizontal` | [`DAlignHorizontal`](../index.md#dalignhorizontal) |
| `vertical` | [`DAlignVertical`](../index.md#dalignvertical) |

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_textAlign](DTableBodyCellSelectDialog.md#_textalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L161)

___

### \_textAlpha

• `Protected` **\_textAlpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_textAlpha](DTableBodyCellSelectDialog.md#_textalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L159)

___

### \_textColor

• `Protected` **\_textColor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_textColor](DTableBodyCellSelectDialog.md#_textcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L158)

___

### \_textFormatter

• `Protected` **\_textFormatter**: (`value`: ``null`` \| `VALUE`, `caller`: `any`) => `string`

#### Type declaration

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `VALUE` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_textFormatter](DTableBodyCellSelectDialog.md#_textformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L165)

___

### \_textStyle

• `Protected` **\_textStyle**: [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_textStyle](DTableBodyCellSelectDialog.md#_textstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L160)

___

### \_textValue

• `Protected` `Optional` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `VALUE`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_textValue](DTableBodyCellSelectDialog.md#_textvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L156)

___

### \_textValueComputed

• `Protected` `Optional` **\_textValueComputed**: ``null`` \| `VALUE`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_textValueComputed](DTableBodyCellSelectDialog.md#_textvaluecomputed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L157)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_title](DTableBodyCellSelectDialog.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_when

• `Protected` **\_when**: [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_when](DTableBodyCellSelectDialog.md#_when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L96)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_zIndex](DTableBodyCellSelectDialog.md#_zindex)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[accessible](DTableBodyCellSelectDialog.md#accessible)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[accessibleChildren](DTableBodyCellSelectDialog.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[accessibleHint](DTableBodyCellSelectDialog.md#accessiblehint)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[accessiblePointerEvents](DTableBodyCellSelectDialog.md#accessiblepointerevents)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[accessibleTitle](DTableBodyCellSelectDialog.md#accessibletitle)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[accessibleType](DTableBodyCellSelectDialog.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[alpha](DTableBodyCellSelectDialog.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[angle](DTableBodyCellSelectDialog.md#angle)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[buttonMode](DTableBodyCellSelectDialog.md#buttonmode)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[cacheAsBitmap](DTableBodyCellSelectDialog.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[children](DTableBodyCellSelectDialog.md#children)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[cursor](DTableBodyCellSelectDialog.md#cursor)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[filterArea](DTableBodyCellSelectDialog.md#filterarea)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[filters](DTableBodyCellSelectDialog.md#filters)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[hitArea](DTableBodyCellSelectDialog.md#hitarea)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[interactive](DTableBodyCellSelectDialog.md#interactive)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[interactiveChildren](DTableBodyCellSelectDialog.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[isMask](DTableBodyCellSelectDialog.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[isSprite](DTableBodyCellSelectDialog.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[localTransform](DTableBodyCellSelectDialog.md#localtransform)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[mask](DTableBodyCellSelectDialog.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[name](DTableBodyCellSelectDialog.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[parent](DTableBodyCellSelectDialog.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[pivot](DTableBodyCellSelectDialog.md#pivot)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[renderable](DTableBodyCellSelectDialog.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[rotation](DTableBodyCellSelectDialog.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[sortDirty](DTableBodyCellSelectDialog.md#sortdirty)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[sortableChildren](DTableBodyCellSelectDialog.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[transform](DTableBodyCellSelectDialog.md#transform)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[visible](DTableBodyCellSelectDialog.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[worldAlpha](DTableBodyCellSelectDialog.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[worldTransform](DTableBodyCellSelectDialog.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[worldVisible](DTableBodyCellSelectDialog.md#worldvisible)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[zIndex](DTableBodyCellSelectDialog.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[WORK_CONTAINS_POINT](DTableBodyCellSelectDialog.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DTableBodyCellSelectDialog.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DTableBodyCellSelectDialog.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### column

• `get` **column**(): [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<``null`` \| `VALUE`\>\>

#### Returns

[`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<``null`` \| `VALUE`\>\>

#### Inherited from

DTableBodyCellSelectDialog.column

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L109)

___

### columnIndex

• `get` **columnIndex**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellSelectDialog.columnIndex

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L105)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DTableBodyCellSelectDialog.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1319)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellSelectDialog.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1250)

___

### image

• `get` **image**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `Texture` \| `DisplayObject`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `Texture` \| `DisplayObject`\>

#### Inherited from

DTableBodyCellSelectDialog.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L123)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `Texture` \| `DisplayObject`\> |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L127)

___

### isToggle

• `get` **isToggle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DTableBodyCellSelectDialog.isToggle

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L122)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DTableBodyCellSelectDialog.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DTableBodyCellSelectDialog.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1315)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTableBodyCellSelectDialog.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1301)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DTableBodyCellSelectDialog.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### row

• `get` **row**(): `undefined` \| `ROW`

#### Returns

`undefined` \| `ROW`

#### Inherited from

DTableBodyCellSelectDialog.row

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L97)

___

### rowIndex

• `get` **rowIndex**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellSelectDialog.rowIndex

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L101)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTableBodyCellSelectDialog.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1306)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DTableBodyCellSelectDialog.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1653)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1657)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTableBodyCellSelectDialog.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1311)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DTableBodyCellSelectDialog.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DTableBodyCellSelectDialog.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1533](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1533)

___

### text

• `get` **text**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Inherited from

DTableBodyCellSelectDialog.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L195)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L188)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DTableBodyCellSelectDialog.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1541](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1541)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DTableBodyCellSelectDialog.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DTableBodyCellSelectDialog.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1129)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DTableBodyCellSelectDialog.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### value

• `get` **value**(): ``null`` \| `VALUE`

#### Returns

``null`` \| `VALUE`

#### Inherited from

DTableBodyCellSelectDialog.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L113)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `VALUE` |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L121)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellSelectDialog.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellSelectDialog.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1196)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1200)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellSelectDialog.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1138)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellSelectDialog.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

DTableBodyCellSelectDialog.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1169)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_calculateBounds](DTableBodyCellSelectDialog.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_recursivePostUpdateTransform](DTableBodyCellSelectDialog.md#_recursivepostupdatetransform)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[_render](DTableBodyCellSelectDialog.md#_render)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[addChild](DTableBodyCellSelectDialog.md#addchild)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[addChildAt](DTableBodyCellSelectDialog.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[addListener](DTableBodyCellSelectDialog.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[addListener](DTableBodyCellSelectDialog.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[applyTitle](DTableBodyCellSelectDialog.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L375)

___

### blur

▸ **blur**(`recursively?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[blur](DTableBodyCellSelectDialog.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1458)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[calculateBounds](DTableBodyCellSelectDialog.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### computeTextValue

▸ `Protected` **computeTextValue**(): `undefined` \| ``null`` \| `VALUE`

#### Returns

`undefined` \| ``null`` \| `VALUE`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[computeTextValue](DTableBodyCellSelectDialog.md#computetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:203](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L203)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[containsGlobalPoint](DTableBodyCellSelectDialog.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[containsLocalPoint](DTableBodyCellSelectDialog.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1906](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1906)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[containsPoint](DTableBodyCellSelectDialog.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1893](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1893)

___

### createOrUpdateText

▸ `Protected` **createOrUpdateText**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[createOrUpdateText](DTableBodyCellSelectDialog.md#createorupdatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L218)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[createText](DTableBodyCellSelectDialog.md#createtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:245](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L245)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[destroy](DTableBodyCellSelectDialog.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L260)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[displayObjectUpdateTransform](DTableBodyCellSelectDialog.md#displayobjectupdatetransform)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[emit](DTableBodyCellSelectDialog.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[eventNames](DTableBodyCellSelectDialog.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[focus](DTableBodyCellSelectDialog.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[focusOnClosest](DTableBodyCellSelectDialog.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1820)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getBounds](DTableBodyCellSelectDialog.md#getbounds)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getChildAt](DTableBodyCellSelectDialog.md#getchildat)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getChildByName](DTableBodyCellSelectDialog.md#getchildbyname)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getChildIndex](DTableBodyCellSelectDialog.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getClearType](DTableBodyCellSelectDialog.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1098)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getClippingRect](DTableBodyCellSelectDialog.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getGlobalPosition](DTableBodyCellSelectDialog.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getHeight](DTableBodyCellSelectDialog.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getLocalBounds](DTableBodyCellSelectDialog.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getOverflowMask](DTableBodyCellSelectDialog.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L249)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getParentOfSize](DTableBodyCellSelectDialog.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1687)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getTextAlpha](DTableBodyCellSelectDialog.md#gettextalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:310](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L310)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getTextColor](DTableBodyCellSelectDialog.md#gettextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L295)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getThemeDefault](DTableBodyCellSelectDialog.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getType](DTableBodyCellSelectDialog.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-action-dialog.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-action-dialog.ts#L31)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getWidth](DTableBodyCellSelectDialog.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getX](DTableBodyCellSelectDialog.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1142)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[getY](DTableBodyCellSelectDialog.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1173)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[hasDirty](DTableBodyCellSelectDialog.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1440)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[hasRefitableHeight](DTableBodyCellSelectDialog.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1619](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1619)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[hasRefitableWidth](DTableBodyCellSelectDialog.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1625](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1625)

___

### hide

▸ **hide**(): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[hide](DTableBodyCellSelectDialog.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1372](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1372)

___

### hideText

▸ `Protected` **hideText**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[hideText](DTableBodyCellSelectDialog.md#hidetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L358)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[init](DTableBodyCellSelectDialog.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L98)

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

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[initOnClick](DTableBodyCellSelectDialog.md#initonclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L126)

___

### initOnPress

▸ `Protected` **initOnPress**(`when`, `theme`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `when` | [`DButtonBaseWhen`](../index.md#dbuttonbasewhen) |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[initOnPress](DTableBodyCellSelectDialog.md#initonpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L134)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[initReflowable](DTableBodyCellSelectDialog.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### isChildrenDirty

▸ **isChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[isChildrenDirty](DTableBodyCellSelectDialog.md#ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[isDirty](DTableBodyCellSelectDialog.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[isEventTarget](DTableBodyCellSelectDialog.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1765](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1765)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[isHidden](DTableBodyCellSelectDialog.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[isRefitable](DTableBodyCellSelectDialog.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L443)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[isShown](DTableBodyCellSelectDialog.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1368)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[listenerCount](DTableBodyCellSelectDialog.md#listenercount)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[listeners](DTableBodyCellSelectDialog.md#listeners)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[newImage](DTableBodyCellSelectDialog.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L119)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[newImages](DTableBodyCellSelectDialog.md#newimages)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L100)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[off](DTableBodyCellSelectDialog.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[on](DTableBodyCellSelectDialog.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[on](DTableBodyCellSelectDialog.md#on)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onActivate](DTableBodyCellSelectDialog.md#onactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L63)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onActivateKeyDown](DTableBodyCellSelectDialog.md#onactivatekeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:221](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L221)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onActivateKeyUp](DTableBodyCellSelectDialog.md#onactivatekeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L231)

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onBlur](DTableBodyCellSelectDialog.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1526)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onChildBlur](DTableBodyCellSelectDialog.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1519](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1519)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onChildFocus](DTableBodyCellSelectDialog.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1505)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onChildrenChange](DTableBodyCellSelectDialog.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onChildrenDirty

▸ `Protected` **onChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onChildrenDirty](DTableBodyCellSelectDialog.md#onchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1432)

___

### onClick

▸ **onClick**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onClick](DTableBodyCellSelectDialog.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L163)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onDblClick](DTableBodyCellSelectDialog.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L174)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onDown](DTableBodyCellSelectDialog.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1779](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1779)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onDownThis](DTableBodyCellSelectDialog.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1786](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1786)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onFocus](DTableBodyCellSelectDialog.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1512)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onInactivate](DTableBodyCellSelectDialog.md#oninactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L190)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onKeyDown](DTableBodyCellSelectDialog.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L244)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onKeyUp](DTableBodyCellSelectDialog.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L252)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onMove](DTableBodyCellSelectDialog.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onOut](DTableBodyCellSelectDialog.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onOver](DTableBodyCellSelectDialog.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1829](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1829)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onParentMove](DTableBodyCellSelectDialog.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1743)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onParentResize](DTableBodyCellSelectDialog.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1702](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1702)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onRefit](DTableBodyCellSelectDialog.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1571)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onReflow](DTableBodyCellSelectDialog.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L366)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onResize](DTableBodyCellSelectDialog.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1102)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onScale](DTableBodyCellSelectDialog.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1119)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onShortcut](DTableBodyCellSelectDialog.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L117)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onSkew](DTableBodyCellSelectDialog.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onStateChange](DTableBodyCellSelectDialog.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L131)

___

### onTextChange

▸ `Protected` **onTextChange**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onTextChange](DTableBodyCellSelectDialog.md#ontextchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L199)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onToggleEnd](DTableBodyCellSelectDialog.md#ontoggleend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L211)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onToggleStart](DTableBodyCellSelectDialog.md#ontogglestart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L205)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onUp](DTableBodyCellSelectDialog.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1797)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onUpThis](DTableBodyCellSelectDialog.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1804)

___

### onValueChange

▸ `Protected` **onValueChange**(`newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | ``null`` \| `VALUE` |
| `oldValue` | ``null`` \| `VALUE` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onValueChange](DTableBodyCellSelectDialog.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L86)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[onWheel](DTableBodyCellSelectDialog.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1748)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[once](DTableBodyCellSelectDialog.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[once](DTableBodyCellSelectDialog.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### refit

▸ **refit**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[refit](DTableBodyCellSelectDialog.md#refit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1555](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1555)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[reflow](DTableBodyCellSelectDialog.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1631](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1631)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[removeAllListeners](DTableBodyCellSelectDialog.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[removeAllListeners](DTableBodyCellSelectDialog.md#removealllisteners)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[removeChild](DTableBodyCellSelectDialog.md#removechild)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[removeChildAt](DTableBodyCellSelectDialog.md#removechildat)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[removeChildren](DTableBodyCellSelectDialog.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[removeListener](DTableBodyCellSelectDialog.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[removeListener](DTableBodyCellSelectDialog.md#removelistener)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[render](DTableBodyCellSelectDialog.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1858](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1858)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[renderAdvanced](DTableBodyCellSelectDialog.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### resize

▸ **resize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[resize](DTableBodyCellSelectDialog.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

___

### set

▸ **set**(`value`, `row`, `supplimental`, `rowIndex`, `columnIndex`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `VALUE` |
| `row` | `ROW` |
| `supplimental` | `unknown` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[set](DTableBodyCellSelectDialog.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L125)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[setChildIndex](DTableBodyCellSelectDialog.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[setFocused](DTableBodyCellSelectDialog.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1444](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1444)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[setHeight](DTableBodyCellSelectDialog.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[setParent](DTableBodyCellSelectDialog.md#setparent)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[setTransform](DTableBodyCellSelectDialog.md#settransform)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[setWidth](DTableBodyCellSelectDialog.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[setX](DTableBodyCellSelectDialog.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1151)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[setY](DTableBodyCellSelectDialog.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1182)

___

### show

▸ **show**(): [`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellActionDialog`](DTableBodyCellActionDialog.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[show](DTableBodyCellSelectDialog.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### showText

▸ `Protected` **showText**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[showText](DTableBodyCellSelectDialog.md#showtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L350)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[sortChildren](DTableBodyCellSelectDialog.md#sortchildren)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[swapChildren](DTableBodyCellSelectDialog.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toChildrenDirty

▸ **toChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toChildrenDirty](DTableBodyCellSelectDialog.md#tochildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1411)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toCursor](DTableBodyCellSelectDialog.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toDirty](DTableBodyCellSelectDialog.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toGlobal](DTableBodyCellSelectDialog.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toHasDirty](DTableBodyCellSelectDialog.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1395](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1395)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toImageOptions](DTableBodyCellSelectDialog.md#toimageoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L112)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toLocal](DTableBodyCellSelectDialog.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentChildrenDirty

▸ **toParentChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toParentChildrenDirty](DTableBodyCellSelectDialog.md#toparentchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1421)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toParentHasDirty](DTableBodyCellSelectDialog.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toParentResized](DTableBodyCellSelectDialog.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1680)

___

### toRounded

▸ `Protected` **toRounded**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toRounded](DTableBodyCellSelectDialog.md#torounded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L291)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[toggle](DTableBodyCellSelectDialog.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L196)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[unset](DTableBodyCellSelectDialog.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L149)

___

### updateText

▸ `Protected` **updateText**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[updateText](DTableBodyCellSelectDialog.md#updatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L140)

___

### updateTextAndImage

▸ `Protected` **updateTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[updateTextAndImage](DTableBodyCellSelectDialog.md#updatetextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L145)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[updateTextColor](DTableBodyCellSelectDialog.md#updatetextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:325](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L325)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[updateTextPosition](DTableBodyCellSelectDialog.md#updatetextposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L261)

___

### updateTextValue

▸ `Protected` **updateTextValue**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[updateTextValue](DTableBodyCellSelectDialog.md#updatetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L332)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[updateTransform](DTableBodyCellSelectDialog.md#updatetransform)

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

[DTableBodyCellSelectDialog](DTableBodyCellSelectDialog.md).[mixin](DTableBodyCellSelectDialog.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
