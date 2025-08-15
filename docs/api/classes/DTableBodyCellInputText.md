[Winter Cardinal UI - v0.457.0](../index.md) / DTableBodyCellInputText

# Class: DTableBodyCellInputText\<ROW, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellInputText`](../interfaces/DThemeTableBodyCellInputText.md) = [`DThemeTableBodyCellInputText`](../interfaces/DThemeTableBodyCellInputText.md) |
| `OPTIONS` | extends [`DTableBodyCellInputTextOptions`](../interfaces/DTableBodyCellInputTextOptions.md)\<`ROW`, `THEME`\> = [`DTableBodyCellInputTextOptions`](../interfaces/DTableBodyCellInputTextOptions.md)\<`ROW`, `THEME`\> |

## Hierarchy

- [`DInputText`](DInputText.md)\<`THEME`, `OPTIONS`\>

  ↳ **`DTableBodyCellInputText`**

## Implements

- [`DTableBodyCell`](../interfaces/DTableBodyCell.md)\<`ROW`, `string`\>

## Table of contents

### Constructors

- [constructor](DTableBodyCellInputText.md#constructor)

### Properties

- [\_accessibleActive](DTableBodyCellInputText.md#_accessibleactive)
- [\_accessibleDiv](DTableBodyCellInputText.md#_accessiblediv)
- [\_auto](DTableBodyCellInputText.md#_auto)
- [\_background](DTableBodyCellInputText.md#_background)
- [\_border](DTableBodyCellInputText.md#_border)
- [\_bounds](DTableBodyCellInputText.md#_bounds)
- [\_boundsID](DTableBodyCellInputText.md#_boundsid)
- [\_boundsRect](DTableBodyCellInputText.md#_boundsrect)
- [\_clearType](DTableBodyCellInputText.md#_cleartype)
- [\_column](DTableBodyCellInputText.md#_column)
- [\_columnIndex](DTableBodyCellInputText.md#_columnindex)
- [\_corner](DTableBodyCellInputText.md#_corner)
- [\_cursor](DTableBodyCellInputText.md#_cursor)
- [\_destroyed](DTableBodyCellInputText.md#_destroyed)
- [\_enabledFilters](DTableBodyCellInputText.md#_enabledfilters)
- [\_forcibly](DTableBodyCellInputText.md#_forcibly)
- [\_image](DTableBodyCellInputText.md#_image)
- [\_lastDownPoint](DTableBodyCellInputText.md#_lastdownpoint)
- [\_lastSortedIndex](DTableBodyCellInputText.md#_lastsortedindex)
- [\_localBounds](DTableBodyCellInputText.md#_localbounds)
- [\_localBoundsRect](DTableBodyCellInputText.md#_localboundsrect)
- [\_mask](DTableBodyCellInputText.md#_mask)
- [\_onChange](DTableBodyCellInputText.md#_onchange)
- [\_options](DTableBodyCellInputText.md#_options)
- [\_outline](DTableBodyCellInputText.md#_outline)
- [\_overflowMask](DTableBodyCellInputText.md#_overflowmask)
- [\_padding](DTableBodyCellInputText.md#_padding)
- [\_reflowable](DTableBodyCellInputText.md#_reflowable)
- [\_row](DTableBodyCellInputText.md#_row)
- [\_rowIndex](DTableBodyCellInputText.md#_rowindex)
- [\_shortcuts](DTableBodyCellInputText.md#_shortcuts)
- [\_snippet](DTableBodyCellInputText.md#_snippet)
- [\_tempDisplayObjectParent](DTableBodyCellInputText.md#_tempdisplayobjectparent)
- [\_text](DTableBodyCellInputText.md#_text)
- [\_title](DTableBodyCellInputText.md#_title)
- [\_util](DTableBodyCellInputText.md#_util)
- [\_zIndex](DTableBodyCellInputText.md#_zindex)
- [accessible](DTableBodyCellInputText.md#accessible)
- [accessibleChildren](DTableBodyCellInputText.md#accessiblechildren)
- [accessibleHint](DTableBodyCellInputText.md#accessiblehint)
- [accessiblePointerEvents](DTableBodyCellInputText.md#accessiblepointerevents)
- [accessibleTitle](DTableBodyCellInputText.md#accessibletitle)
- [accessibleType](DTableBodyCellInputText.md#accessibletype)
- [alpha](DTableBodyCellInputText.md#alpha)
- [angle](DTableBodyCellInputText.md#angle)
- [buttonMode](DTableBodyCellInputText.md#buttonmode)
- [cacheAsBitmap](DTableBodyCellInputText.md#cacheasbitmap)
- [children](DTableBodyCellInputText.md#children)
- [cursor](DTableBodyCellInputText.md#cursor)
- [filterArea](DTableBodyCellInputText.md#filterarea)
- [filters](DTableBodyCellInputText.md#filters)
- [hitArea](DTableBodyCellInputText.md#hitarea)
- [interactive](DTableBodyCellInputText.md#interactive)
- [interactiveChildren](DTableBodyCellInputText.md#interactivechildren)
- [isMask](DTableBodyCellInputText.md#ismask)
- [isSprite](DTableBodyCellInputText.md#issprite)
- [localTransform](DTableBodyCellInputText.md#localtransform)
- [mask](DTableBodyCellInputText.md#mask)
- [name](DTableBodyCellInputText.md#name)
- [parent](DTableBodyCellInputText.md#parent)
- [pivot](DTableBodyCellInputText.md#pivot)
- [renderable](DTableBodyCellInputText.md#renderable)
- [rotation](DTableBodyCellInputText.md#rotation)
- [sortDirty](DTableBodyCellInputText.md#sortdirty)
- [sortableChildren](DTableBodyCellInputText.md#sortablechildren)
- [transform](DTableBodyCellInputText.md#transform)
- [visible](DTableBodyCellInputText.md#visible)
- [worldAlpha](DTableBodyCellInputText.md#worldalpha)
- [worldTransform](DTableBodyCellInputText.md#worldtransform)
- [worldVisible](DTableBodyCellInputText.md#worldvisible)
- [zIndex](DTableBodyCellInputText.md#zindex)
- [LAYOUTER](DTableBodyCellInputText.md#layouter)
- [WORK\_CONTAINS\_POINT](DTableBodyCellInputText.md#work_contains_point)

### Accessors

- [background](DTableBodyCellInputText.md#background)
- [border](DTableBodyCellInputText.md#border)
- [column](DTableBodyCellInputText.md#column)
- [columnIndex](DTableBodyCellInputText.md#columnindex)
- [corner](DTableBodyCellInputText.md#corner)
- [element](DTableBodyCellInputText.md#element)
- [height](DTableBodyCellInputText.md#height)
- [image](DTableBodyCellInputText.md#image)
- [options](DTableBodyCellInputText.md#options)
- [outline](DTableBodyCellInputText.md#outline)
- [padding](DTableBodyCellInputText.md#padding)
- [position](DTableBodyCellInputText.md#position)
- [reflowable](DTableBodyCellInputText.md#reflowable)
- [row](DTableBodyCellInputText.md#row)
- [rowIndex](DTableBodyCellInputText.md#rowindex)
- [scale](DTableBodyCellInputText.md#scale)
- [shadow](DTableBodyCellInputText.md#shadow)
- [skew](DTableBodyCellInputText.md#skew)
- [snippet](DTableBodyCellInputText.md#snippet)
- [state](DTableBodyCellInputText.md#state)
- [text](DTableBodyCellInputText.md#text)
- [theme](DTableBodyCellInputText.md#theme)
- [title](DTableBodyCellInputText.md#title)
- [type](DTableBodyCellInputText.md#type)
- [unsafe](DTableBodyCellInputText.md#unsafe)
- [value](DTableBodyCellInputText.md#value)
- [weight](DTableBodyCellInputText.md#weight)
- [width](DTableBodyCellInputText.md#width)
- [x](DTableBodyCellInputText.md#x)
- [y](DTableBodyCellInputText.md#y)

### Methods

- [\_calculateBounds](DTableBodyCellInputText.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTableBodyCellInputText.md#_recursivepostupdatetransform)
- [\_render](DTableBodyCellInputText.md#_render)
- [addChild](DTableBodyCellInputText.md#addchild)
- [addChildAt](DTableBodyCellInputText.md#addchildat)
- [addListener](DTableBodyCellInputText.md#addlistener)
- [applyTitle](DTableBodyCellInputText.md#applytitle)
- [blur](DTableBodyCellInputText.md#blur)
- [calculateBounds](DTableBodyCellInputText.md#calculatebounds)
- [cancel](DTableBodyCellInputText.md#cancel)
- [containerUpdateTransform](DTableBodyCellInputText.md#containerupdatetransform)
- [containsGlobalPoint](DTableBodyCellInputText.md#containsglobalpoint)
- [containsLocalPoint](DTableBodyCellInputText.md#containslocalpoint)
- [containsPoint](DTableBodyCellInputText.md#containspoint)
- [destroy](DTableBodyCellInputText.md#destroy)
- [disableTempParent](DTableBodyCellInputText.md#disabletempparent)
- [displayObjectUpdateTransform](DTableBodyCellInputText.md#displayobjectupdatetransform)
- [emit](DTableBodyCellInputText.md#emit)
- [enableTempParent](DTableBodyCellInputText.md#enabletempparent)
- [end](DTableBodyCellInputText.md#end)
- [eventNames](DTableBodyCellInputText.md#eventnames)
- [focus](DTableBodyCellInputText.md#focus)
- [focusOnClosest](DTableBodyCellInputText.md#focusonclosest)
- [getBounds](DTableBodyCellInputText.md#getbounds)
- [getChildAt](DTableBodyCellInputText.md#getchildat)
- [getChildByName](DTableBodyCellInputText.md#getchildbyname)
- [getChildIndex](DTableBodyCellInputText.md#getchildindex)
- [getClearType](DTableBodyCellInputText.md#getcleartype)
- [getClipperRect](DTableBodyCellInputText.md#getclipperrect)
- [getClippingRect](DTableBodyCellInputText.md#getclippingrect)
- [getElementRect](DTableBodyCellInputText.md#getelementrect)
- [getGlobalPosition](DTableBodyCellInputText.md#getglobalposition)
- [getHeight](DTableBodyCellInputText.md#getheight)
- [getImage](DTableBodyCellInputText.md#getimage)
- [getLayouter](DTableBodyCellInputText.md#getlayouter)
- [getLocalBounds](DTableBodyCellInputText.md#getlocalbounds)
- [getOverflowMask](DTableBodyCellInputText.md#getoverflowmask)
- [getParentOfSize](DTableBodyCellInputText.md#getparentofsize)
- [getText](DTableBodyCellInputText.md#gettext)
- [getThemeDefault](DTableBodyCellInputText.md#getthemedefault)
- [getType](DTableBodyCellInputText.md#gettype)
- [getUtil](DTableBodyCellInputText.md#getutil)
- [getWidth](DTableBodyCellInputText.md#getwidth)
- [getX](DTableBodyCellInputText.md#getx)
- [getY](DTableBodyCellInputText.md#gety)
- [hasDirty](DTableBodyCellInputText.md#hasdirty)
- [hasRefitableHeight](DTableBodyCellInputText.md#hasrefitableheight)
- [hasRefitableWidth](DTableBodyCellInputText.md#hasrefitablewidth)
- [hide](DTableBodyCellInputText.md#hide)
- [init](DTableBodyCellInputText.md#init)
- [initReflowable](DTableBodyCellInputText.md#initreflowable)
- [isDirty](DTableBodyCellInputText.md#isdirty)
- [isEventTarget](DTableBodyCellInputText.md#iseventtarget)
- [isHidden](DTableBodyCellInputText.md#ishidden)
- [isHierarchyDirty](DTableBodyCellInputText.md#ishierarchydirty)
- [isRefitable](DTableBodyCellInputText.md#isrefitable)
- [isShown](DTableBodyCellInputText.md#isshown)
- [listenerCount](DTableBodyCellInputText.md#listenercount)
- [listeners](DTableBodyCellInputText.md#listeners)
- [newImage](DTableBodyCellInputText.md#newimage)
- [newOperation](DTableBodyCellInputText.md#newoperation)
- [newOverflowMask](DTableBodyCellInputText.md#newoverflowmask)
- [newPadding](DTableBodyCellInputText.md#newpadding)
- [newText](DTableBodyCellInputText.md#newtext)
- [newUtil](DTableBodyCellInputText.md#newutil)
- [off](DTableBodyCellInputText.md#off)
- [on](DTableBodyCellInputText.md#on)
- [onActivateKeyDown](DTableBodyCellInputText.md#onactivatekeydown)
- [onActivateKeyUp](DTableBodyCellInputText.md#onactivatekeyup)
- [onBlur](DTableBodyCellInputText.md#onblur)
- [onChildBlur](DTableBodyCellInputText.md#onchildblur)
- [onChildFocus](DTableBodyCellInputText.md#onchildfocus)
- [onChildrenChange](DTableBodyCellInputText.md#onchildrenchange)
- [onDblClick](DTableBodyCellInputText.md#ondblclick)
- [onDown](DTableBodyCellInputText.md#ondown)
- [onDownThis](DTableBodyCellInputText.md#ondownthis)
- [onEnter](DTableBodyCellInputText.md#onenter)
- [onFocus](DTableBodyCellInputText.md#onfocus)
- [onHierarchyDirty](DTableBodyCellInputText.md#onhierarchydirty)
- [onKeyDown](DTableBodyCellInputText.md#onkeydown)
- [onKeyUp](DTableBodyCellInputText.md#onkeyup)
- [onMove](DTableBodyCellInputText.md#onmove)
- [onOut](DTableBodyCellInputText.md#onout)
- [onOver](DTableBodyCellInputText.md#onover)
- [onParentMove](DTableBodyCellInputText.md#onparentmove)
- [onParentResize](DTableBodyCellInputText.md#onparentresize)
- [onRefit](DTableBodyCellInputText.md#onrefit)
- [onReflow](DTableBodyCellInputText.md#onreflow)
- [onReflowTextAndImage](DTableBodyCellInputText.md#onreflowtextandimage)
- [onResize](DTableBodyCellInputText.md#onresize)
- [onScale](DTableBodyCellInputText.md#onscale)
- [onShortcut](DTableBodyCellInputText.md#onshortcut)
- [onSkew](DTableBodyCellInputText.md#onskew)
- [onStateChange](DTableBodyCellInputText.md#onstatechange)
- [onUp](DTableBodyCellInputText.md#onup)
- [onUpThis](DTableBodyCellInputText.md#onupthis)
- [onValueChange](DTableBodyCellInputText.md#onvaluechange)
- [onValueInput](DTableBodyCellInputText.md#onvalueinput)
- [onWheel](DTableBodyCellInputText.md#onwheel)
- [once](DTableBodyCellInputText.md#once)
- [reflow](DTableBodyCellInputText.md#reflow)
- [removeAllListeners](DTableBodyCellInputText.md#removealllisteners)
- [removeChild](DTableBodyCellInputText.md#removechild)
- [removeChildAt](DTableBodyCellInputText.md#removechildat)
- [removeChildren](DTableBodyCellInputText.md#removechildren)
- [removeListener](DTableBodyCellInputText.md#removelistener)
- [render](DTableBodyCellInputText.md#render)
- [renderAdvanced](DTableBodyCellInputText.md#renderadvanced)
- [resize](DTableBodyCellInputText.md#resize)
- [select](DTableBodyCellInputText.md#select)
- [set](DTableBodyCellInputText.md#set)
- [setChildIndex](DTableBodyCellInputText.md#setchildindex)
- [setFocused](DTableBodyCellInputText.md#setfocused)
- [setHeight](DTableBodyCellInputText.md#setheight)
- [setParent](DTableBodyCellInputText.md#setparent)
- [setTransform](DTableBodyCellInputText.md#settransform)
- [setWidth](DTableBodyCellInputText.md#setwidth)
- [setX](DTableBodyCellInputText.md#setx)
- [setY](DTableBodyCellInputText.md#sety)
- [show](DTableBodyCellInputText.md#show)
- [sortChildren](DTableBodyCellInputText.md#sortchildren)
- [start](DTableBodyCellInputText.md#start)
- [swapChildren](DTableBodyCellInputText.md#swapchildren)
- [toCursor](DTableBodyCellInputText.md#tocursor)
- [toDirty](DTableBodyCellInputText.md#todirty)
- [toGlobal](DTableBodyCellInputText.md#toglobal)
- [toHasDirty](DTableBodyCellInputText.md#tohasdirty)
- [toHierarchyDirty](DTableBodyCellInputText.md#tohierarchydirty)
- [toLocal](DTableBodyCellInputText.md#tolocal)
- [toParentHasDirty](DTableBodyCellInputText.md#toparenthasdirty)
- [toParentHierarchyDirty](DTableBodyCellInputText.md#toparenthierarchydirty)
- [toParentResized](DTableBodyCellInputText.md#toparentresized)
- [unset](DTableBodyCellInputText.md#unset)
- [updateTransform](DTableBodyCellInputText.md#updatetransform)
- [validate](DTableBodyCellInputText.md#validate)
- [mixin](DTableBodyCellInputText.md#mixin)

## Constructors

### constructor

• **new DTableBodyCellInputText**\<`ROW`, `THEME`, `OPTIONS`\>(`columnIndex`, `column`, `onChange`, `options?`): [`DTableBodyCellInputText`](DTableBodyCellInputText.md)\<`ROW`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellInputText`](../interfaces/DThemeTableBodyCellInputText.md) = [`DThemeTableBodyCellInputText`](../interfaces/DThemeTableBodyCellInputText.md) |
| `OPTIONS` | extends [`DTableBodyCellInputTextOptions`](../interfaces/DTableBodyCellInputTextOptions.md)\<`ROW`, `THEME`\> = [`DTableBodyCellInputTextOptions`](../interfaces/DTableBodyCellInputTextOptions.md)\<`ROW`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `string`, `string`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`string`\>\> |
| `onChange` | [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, `string`\> |
| `options?` | `OPTIONS` |

#### Returns

[`DTableBodyCellInputText`](DTableBodyCellInputText.md)\<`ROW`, `THEME`, `OPTIONS`\>

#### Overrides

[DInputText](DInputText.md).[constructor](DInputText.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L37)

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

[DInputText](DInputText.md).[_accessibleActive](DInputText.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8559

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

[DInputText](DInputText.md).[_accessibleDiv](DInputText.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_auto](../interfaces/DTableBodyCell.md#_auto)

#### Inherited from

[DInputText](DInputText.md).[_auto](DInputText.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_background](../interfaces/DTableBodyCell.md#_background)

#### Inherited from

[DInputText](DInputText.md).[_background](DInputText.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_border](../interfaces/DTableBodyCell.md#_border)

#### Inherited from

[DInputText](DInputText.md).[_border](DInputText.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_bounds](../interfaces/DTableBodyCell.md#_bounds)

#### Inherited from

[DInputText](DInputText.md).[_bounds](DInputText.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_boundsID](../interfaces/DTableBodyCell.md#_boundsid)

#### Inherited from

[DInputText](DInputText.md).[_boundsID](DInputText.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_boundsRect](../interfaces/DTableBodyCell.md#_boundsrect)

#### Inherited from

[DInputText](DInputText.md).[_boundsRect](DInputText.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_clearType](../interfaces/DTableBodyCell.md#_cleartype)

#### Inherited from

[DInputText](DInputText.md).[_clearType](DInputText.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_column

• `Protected` **\_column**: [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `string`, `string`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`string`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L33)

___

### \_columnIndex

• `Protected` **\_columnIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L32)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_corner](../interfaces/DTableBodyCell.md#_corner)

#### Inherited from

[DInputText](DInputText.md).[_corner](DInputText.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_cursor](../interfaces/DTableBodyCell.md#_cursor)

#### Inherited from

[DInputText](DInputText.md).[_cursor](DInputText.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_destroyed](../interfaces/DTableBodyCell.md#_destroyed)

#### Inherited from

[DInputText](DInputText.md).[_destroyed](DInputText.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_enabledFilters](../interfaces/DTableBodyCell.md#_enabledfilters)

#### Inherited from

[DInputText](DInputText.md).[_enabledFilters](DInputText.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_forcibly

• `Protected` `Optional` **\_forcibly**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L35)

___

### \_image

• `Protected` `Optional` **\_image**: [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DInputText](DInputText.md).[_image](DInputText.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L61)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_lastDownPoint](../interfaces/DTableBodyCell.md#_lastdownpoint)

#### Inherited from

[DInputText](DInputText.md).[_lastDownPoint](DInputText.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

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

[DInputText](DInputText.md).[_lastSortedIndex](DInputText.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_localBounds](../interfaces/DTableBodyCell.md#_localbounds)

#### Inherited from

[DInputText](DInputText.md).[_localBounds](DInputText.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_localBoundsRect](../interfaces/DTableBodyCell.md#_localboundsrect)

#### Inherited from

[DInputText](DInputText.md).[_localBoundsRect](DInputText.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_mask](../interfaces/DTableBodyCell.md#_mask)

#### Inherited from

[DInputText](DInputText.md).[_mask](DInputText.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_onChange

• `Protected` **\_onChange**: [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, `string`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L34)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_options](../interfaces/DTableBodyCell.md#_options)

#### Inherited from

[DInputText](DInputText.md).[_options](DInputText.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_outline](../interfaces/DTableBodyCell.md#_outline)

#### Inherited from

[DInputText](DInputText.md).[_outline](DInputText.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DInputText](DInputText.md).[_overflowMask](DInputText.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L57)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_padding](../interfaces/DTableBodyCell.md#_padding)

#### Inherited from

[DInputText](DInputText.md).[_padding](DInputText.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_reflowable](../interfaces/DTableBodyCell.md#_reflowable)

#### Inherited from

[DInputText](DInputText.md).[_reflowable](DInputText.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_row

• `Protected` `Optional` **\_row**: `ROW`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L30)

___

### \_rowIndex

• `Protected` **\_rowIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L31)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_shortcuts](../interfaces/DTableBodyCell.md#_shortcuts)

#### Inherited from

[DInputText](DInputText.md).[_shortcuts](DInputText.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_snippet](../interfaces/DTableBodyCell.md#_snippet)

#### Inherited from

[DInputText](DInputText.md).[_snippet](DInputText.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_tempDisplayObjectParent](../interfaces/DTableBodyCell.md#_tempdisplayobjectparent)

#### Inherited from

[DInputText](DInputText.md).[_tempDisplayObjectParent](DInputText.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_text

• `Protected` `Optional` **\_text**: [`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Inherited from

[DInputText](DInputText.md).[_text](DInputText.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L56)

___

### \_title

• `Protected` **\_title**: `string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_title](../interfaces/DTableBodyCell.md#_title)

#### Inherited from

[DInputText](DInputText.md).[_title](DInputText.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_util

• `Protected` `Optional` **\_util**: [`UtilInputText`](UtilInputText.md)\<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>

#### Inherited from

[DInputText](DInputText.md).[_util](DInputText.md#_util)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L39)

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

[DInputText](DInputText.md).[_zIndex](DInputText.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8652

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

[DInputText](DInputText.md).[accessible](DInputText.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8538

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleChildren](../interfaces/DTableBodyCell.md#accessiblechildren)

#### Inherited from

[DInputText](DInputText.md).[accessibleChildren](DInputText.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

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

[DInputText](DInputText.md).[accessibleHint](DInputText.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessiblePointerEvents](../interfaces/DTableBodyCell.md#accessiblepointerevents)

#### Inherited from

[DInputText](DInputText.md).[accessiblePointerEvents](DInputText.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

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

[DInputText](DInputText.md).[accessibleTitle](DInputText.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8546

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleType](../interfaces/DTableBodyCell.md#accessibletype)

#### Inherited from

[DInputText](DInputText.md).[accessibleType](DInputText.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[alpha](../interfaces/DTableBodyCell.md#alpha)

#### Inherited from

[DInputText](DInputText.md).[alpha](DInputText.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[angle](../interfaces/DTableBodyCell.md#angle)

#### Inherited from

[DInputText](DInputText.md).[angle](DInputText.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8882

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

[DInputText](DInputText.md).[buttonMode](DInputText.md#buttonmode)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8964

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

[DInputText](DInputText.md).[cacheAsBitmap](DInputText.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[children](../interfaces/DTableBodyCell.md#children)

#### Inherited from

[DInputText](DInputText.md).[children](DInputText.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8327

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

[DInputText](DInputText.md).[cursor](DInputText.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8978

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

[DInputText](DInputText.md).[filterArea](DInputText.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8661

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

[DInputText](DInputText.md).[filters](DInputText.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8669

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

[DInputText](DInputText.md).[hitArea](DInputText.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8952

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

[DInputText](DInputText.md).[interactive](DInputText.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8940

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

[DInputText](DInputText.md).[interactiveChildren](DInputText.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isMask](../interfaces/DTableBodyCell.md#ismask)

#### Inherited from

[DInputText](DInputText.md).[isMask](DInputText.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isSprite](../interfaces/DTableBodyCell.md#issprite)

#### Inherited from

[DInputText](DInputText.md).[isSprite](DInputText.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[localTransform](../interfaces/DTableBodyCell.md#localtransform)

#### Inherited from

[DInputText](DInputText.md).[localTransform](DInputText.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8840

___

### mask

• **mask**: ``null`` \| `Container` \| `MaskData`

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

[DInputText](DInputText.md).[mask](DInputText.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8918

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

[DInputText](DInputText.md).[name](DInputText.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[parent](../interfaces/DTableBodyCell.md#parent)

#### Inherited from

[DInputText](DInputText.md).[parent](DInputText.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[pivot](../interfaces/DTableBodyCell.md#pivot)

#### Inherited from

[DInputText](DInputText.md).[pivot](DInputText.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8861

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

[DInputText](DInputText.md).[renderable](DInputText.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[rotation](../interfaces/DTableBodyCell.md#rotation)

#### Inherited from

[DInputText](DInputText.md).[rotation](DInputText.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8875

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

[DInputText](DInputText.md).[sortDirty](DInputText.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8350

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

[DInputText](DInputText.md).[sortableChildren](DInputText.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8343

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

[DInputText](DInputText.md).[transform](DInputText.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8599

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

[DInputText](DInputText.md).[visible](DInputText.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[worldAlpha](../interfaces/DTableBodyCell.md#worldalpha)

#### Inherited from

[DInputText](DInputText.md).[worldAlpha](DInputText.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[worldTransform](../interfaces/DTableBodyCell.md#worldtransform)

#### Inherited from

[DInputText](DInputText.md).[worldTransform](DInputText.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[worldVisible](../interfaces/DTableBodyCell.md#worldvisible)

#### Inherited from

[DInputText](DInputText.md).[worldVisible](DInputText.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8898

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

[DInputText](DInputText.md).[zIndex](DInputText.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DInputText](DInputText.md).[LAYOUTER](DInputText.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L55)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DInputText](DInputText.md).[WORK_CONTAINS_POINT](DInputText.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

DTableBodyCell.background

#### Inherited from

DInputText.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

DTableBodyCell.border

#### Inherited from

DInputText.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### column

• `get` **column**(): [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `string`, `string`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`string`\>\>

A column.

#### Returns

[`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `string`, `string`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`string`\>\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[column](../interfaces/DTableBodyCell.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L75)

___

### columnIndex

• `get` **columnIndex**(): `number`

A column index.

#### Returns

`number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[columnIndex](../interfaces/DTableBodyCell.md#columnindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L71)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Implementation of

DTableBodyCell.corner

#### Inherited from

DInputText.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### element

• `get` **element**(): ``null`` \| `ELEMENT`

#### Returns

``null`` \| `ELEMENT`

#### Inherited from

DInputText.element

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L103)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.height

#### Inherited from

DInputText.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

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

DInputText.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### image

• `get` **image**(): [`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Returns

[`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Inherited from

DInputText.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L68)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DInputText.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L80)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Implementation of

DTableBodyCell.options

#### Inherited from

DInputText.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Implementation of

DTableBodyCell.outline

#### Inherited from

DInputText.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Implementation of

DTableBodyCell.padding

#### Inherited from

DInputText.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.position

#### Inherited from

DInputText.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

DTableBodyCell.reflowable

#### Inherited from

DInputText.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L63)

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

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L67)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.scale

#### Inherited from

DInputText.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

DTableBodyCell.shadow

#### Inherited from

DInputText.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

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

DInputText.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.skew

#### Inherited from

DInputText.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

DTableBodyCell.snippet

#### Inherited from

DInputText.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

DTableBodyCell.state

#### Inherited from

DInputText.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### text

• `get` **text**(): [`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Returns

[`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Inherited from

DInputText.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L84)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DInputText.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L96)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Implementation of

DTableBodyCell.theme

#### Inherited from

DInputText.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1694](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1694)

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

DInputText.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.title

#### Inherited from

DInputText.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1487)

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

DInputText.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.type

#### Inherited from

DInputText.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Implementation of

DTableBodyCell.unsafe

#### Inherited from

DInputText.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### value

• `get` **value**(): `VALUE`

#### Returns

`VALUE`

#### Inherited from

DInputText.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-input.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-input.ts#L97)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |

#### Returns

`void`

#### Inherited from

DInputText.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-input.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-input.ts#L101)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.weight

#### Inherited from

DInputText.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | `number` |

#### Returns

`void`

#### Implementation of

DTableBodyCell.weight

#### Inherited from

DInputText.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.width

#### Inherited from

DInputText.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

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

DInputText.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.x

#### Inherited from

DInputText.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

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

DInputText.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.y

#### Inherited from

DInputText.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

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

DInputText.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_calculateBounds](../interfaces/DTableBodyCell.md#_calculatebounds)

#### Inherited from

[DInputText](DInputText.md).[_calculateBounds](DInputText.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2084](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2084)

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

[DInputText](DInputText.md).[_recursivePostUpdateTransform](DInputText.md#_recursivepostupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8737

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_render](../interfaces/DTableBodyCell.md#_render)

#### Inherited from

[DInputText](DInputText.md).[_render](DInputText.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8472

___

### addChild

▸ **addChild**\<`TChildren`\>(`...children`): `TChildren`[``0``]

Adds one or more children to the container.

Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...children` | `TChildren` | The DisplayObject(s) to add to the container |

#### Returns

`TChildren`[``0``]

The first child that was added.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addChild](../interfaces/DTableBodyCell.md#addchild)

#### Inherited from

[DInputText](DInputText.md).[addChild](DInputText.md#addchild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addChildAt](../interfaces/DTableBodyCell.md#addchildat)

#### Inherited from

[DInputText](DInputText.md).[addChildAt](DInputText.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addListener](../interfaces/DTableBodyCell.md#addlistener)

#### Inherited from

[DInputText](DInputText.md).[addListener](DInputText.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25521

▸ **addListener**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addListener](../interfaces/DTableBodyCell.md#addlistener)

#### Inherited from

[DInputText](DInputText.md).[addListener](DInputText.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[applyTitle](../interfaces/DTableBodyCell.md#applytitle)

#### Inherited from

[DInputText](DInputText.md).[applyTitle](DInputText.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-input.ts#L129)

___

### blur

▸ **blur**(`recursively?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[blur](../interfaces/DTableBodyCell.md#blur)

#### Inherited from

[DInputText](DInputText.md).[blur](DInputText.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[calculateBounds](../interfaces/DTableBodyCell.md#calculatebounds)

#### Inherited from

[DInputText](DInputText.md).[calculateBounds](DInputText.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[DInputText](DInputText.md).[cancel](DInputText.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L169)

___

### containerUpdateTransform

▸ **containerUpdateTransform**(): `void`

Container default updateTransform, does update children of container.
Will crash if there's no parent element.

#### Returns

`void`

**`Memberof`**

PIXI.Container#

**`Function`**

containerUpdateTransform

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[containerUpdateTransform](../interfaces/DTableBodyCell.md#containerupdatetransform)

#### Inherited from

[DInputText](DInputText.md).[containerUpdateTransform](DInputText.md#containerupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8510

___

### containsGlobalPoint

▸ **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[containsGlobalPoint](../interfaces/DTableBodyCell.md#containsglobalpoint)

#### Inherited from

[DInputText](DInputText.md).[containsGlobalPoint](DInputText.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2098)

___

### containsLocalPoint

▸ **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[containsLocalPoint](../interfaces/DTableBodyCell.md#containslocalpoint)

#### Inherited from

[DInputText](DInputText.md).[containsLocalPoint](DInputText.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2102)

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

[DInputText](DInputText.md).[containsPoint](DInputText.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[destroy](../interfaces/DTableBodyCell.md#destroy)

#### Inherited from

[DInputText](DInputText.md).[destroy](DInputText.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L121)

___

### disableTempParent

▸ **disableTempParent**(`cacheParent`): `void`

Pair method for `enableTempParent`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheParent` | `DisplayObject` | actual parent of element |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[disableTempParent](../interfaces/DTableBodyCell.md#disabletempparent)

#### Inherited from

[DInputText](DInputText.md).[disableTempParent](DInputText.md#disabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8812

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[displayObjectUpdateTransform](../interfaces/DTableBodyCell.md#displayobjectupdatetransform)

#### Inherited from

[DInputText](DInputText.md).[displayObjectUpdateTransform](DInputText.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8926

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[emit](../interfaces/DTableBodyCell.md#emit)

#### Inherited from

[DInputText](DInputText.md).[emit](DInputText.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### enableTempParent

▸ **enableTempParent**(): `DisplayObject`

Used in Renderer, cacheAsBitmap and other places where you call an `updateTransform` on root

```
const cacheParent = elem.enableTempParent();
elem.updateTransform();
elem.disableTempParent(cacheParent);
```

#### Returns

`DisplayObject`

current parent

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[enableTempParent](../interfaces/DTableBodyCell.md#enabletempparent)

#### Inherited from

[DInputText](DInputText.md).[enableTempParent](DInputText.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Inherited from

[DInputText](DInputText.md).[end](DInputText.md#end)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L173)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[eventNames](../interfaces/DTableBodyCell.md#eventnames)

#### Inherited from

[DInputText](DInputText.md).[eventNames](DInputText.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[focus](../interfaces/DTableBodyCell.md#focus)

#### Inherited from

[DInputText](DInputText.md).[focus](DInputText.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[focusOnClosest](../interfaces/DTableBodyCell.md#focusonclosest)

#### Inherited from

[DInputText](DInputText.md).[focusOnClosest](DInputText.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getBounds](../interfaces/DTableBodyCell.md#getbounds)

#### Inherited from

[DInputText](DInputText.md).[getBounds](DInputText.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8747

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

[DInputText](DInputText.md).[getChildAt](DInputText.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8401

___

### getChildByName

▸ **getChildByName**(`name`, `deep?`): `DisplayObject`

Returns the display object in the container.

Recursive searches are done in a preorder traversal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |
| `deep?` | `boolean` | Whether to search recursively |

#### Returns

`DisplayObject`

The child with the specified name.

**`Method`**

getChildByName

**`Memberof`**

PIXI.Container#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getChildByName](../interfaces/DTableBodyCell.md#getchildbyname)

#### Inherited from

[DInputText](DInputText.md).[getChildByName](DInputText.md#getchildbyname)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8530

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

[DInputText](DInputText.md).[getChildIndex](DInputText.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getClearType](../interfaces/DTableBodyCell.md#getcleartype)

#### Inherited from

[DInputText](DInputText.md).[getClearType](DInputText.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

___

### getClipperRect

▸ **getClipperRect**(`resolution`, `point`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |
| `point` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[DInputText](DInputText.md).[getClipperRect](DInputText.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L161)

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

[DInputText](DInputText.md).[getClippingRect](DInputText.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

___

### getElementRect

▸ **getElementRect**(`resolution`, `point`, `result`): ``null`` \| `Rectangle`

Please note that this method does not update transforms.

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |
| `point` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[DInputText](DInputText.md).[getElementRect](DInputText.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L143)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getGlobalPosition](../interfaces/DTableBodyCell.md#getglobalposition)

#### Inherited from

[DInputText](DInputText.md).[getGlobalPosition](DInputText.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getHeight](../interfaces/DTableBodyCell.md#getheight)

#### Inherited from

[DInputText](DInputText.md).[getHeight](DInputText.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### getImage

▸ **getImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DInputText](DInputText.md).[getImage](DInputText.md#getimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L72)

___

### getLayouter

▸ **getLayouter**(): [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Returns

[`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DInputText](DInputText.md).[getLayouter](DInputText.md#getlayouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L105)

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`, `skipChildrenUpdate?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |
| `skipChildrenUpdate?` | `boolean` | Setting to `true` will stop re-calculation of children transforms, it was default behaviour of pixi 4.0-5.2 and caused many problems to users. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getLocalBounds](../interfaces/DTableBodyCell.md#getlocalbounds)

#### Inherited from

[DInputText](DInputText.md).[getLocalBounds](DInputText.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DInputText](DInputText.md).[getOverflowMask](DInputText.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L64)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getParentOfSize](../interfaces/DTableBodyCell.md#getparentofsize)

#### Inherited from

[DInputText](DInputText.md).[getParentOfSize](DInputText.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getText

▸ **getText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Inherited from

[DInputText](DInputText.md).[getText](DInputText.md#gettext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getThemeDefault](../interfaces/DTableBodyCell.md#getthemedefault)

#### Inherited from

[DInputText](DInputText.md).[getThemeDefault](DInputText.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getType](../interfaces/DTableBodyCell.md#gettype)

#### Overrides

[DInputText](DInputText.md).[getType](DInputText.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L101)

___

### getUtil

▸ **getUtil**(): [`UtilInputText`](UtilInputText.md)\<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>

#### Returns

[`UtilInputText`](UtilInputText.md)\<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>

#### Inherited from

[DInputText](DInputText.md).[getUtil](DInputText.md#getutil)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L41)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getWidth](../interfaces/DTableBodyCell.md#getwidth)

#### Inherited from

[DInputText](DInputText.md).[getWidth](DInputText.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getX](../interfaces/DTableBodyCell.md#getx)

#### Inherited from

[DInputText](DInputText.md).[getX](DInputText.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getY](../interfaces/DTableBodyCell.md#gety)

#### Inherited from

[DInputText](DInputText.md).[getY](DInputText.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasDirty](../interfaces/DTableBodyCell.md#hasdirty)

#### Inherited from

[DInputText](DInputText.md).[hasDirty](DInputText.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### hasRefitableHeight

▸ **hasRefitableHeight**(`target`): target is DRefitable

Returns true if the given target has a height that doesn't depend on its parent height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | a target |

#### Returns

target is DRefitable

true if the given target has a height that doesn't depend on its parent height.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasRefitableHeight](../interfaces/DTableBodyCell.md#hasrefitableheight)

#### Inherited from

[DInputText](DInputText.md).[hasRefitableHeight](DInputText.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1831)

___

### hasRefitableWidth

▸ **hasRefitableWidth**(`target`): target is DRefitable

Returns true if the given target has a width that doesn't depend on its parent width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | a target |

#### Returns

target is DRefitable

true if the given target has a width that doesn't depend on its parent width.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasRefitableWidth](../interfaces/DTableBodyCell.md#hasrefitablewidth)

#### Inherited from

[DInputText](DInputText.md).[hasRefitableWidth](DInputText.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hide](../interfaces/DTableBodyCell.md#hide)

#### Inherited from

[DInputText](DInputText.md).[hide](DInputText.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

___

### init

▸ **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[init](../interfaces/DTableBodyCell.md#init)

#### Inherited from

[DInputText](DInputText.md).[init](DInputText.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L63)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[initReflowable](../interfaces/DTableBodyCell.md#initreflowable)

#### Inherited from

[DInputText](DInputText.md).[initReflowable](DInputText.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isDirty](../interfaces/DTableBodyCell.md#isdirty)

#### Inherited from

[DInputText](DInputText.md).[isDirty](DInputText.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### isEventTarget

▸ **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isEventTarget](../interfaces/DTableBodyCell.md#iseventtarget)

#### Inherited from

[DInputText](DInputText.md).[isEventTarget](DInputText.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHidden](../interfaces/DTableBodyCell.md#ishidden)

#### Inherited from

[DInputText](DInputText.md).[isHidden](DInputText.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHierarchyDirty](../interfaces/DTableBodyCell.md#ishierarchydirty)

#### Inherited from

[DInputText](DInputText.md).[isHierarchyDirty](DInputText.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

___

### isRefitable

▸ **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isRefitable](../interfaces/DTableBodyCell.md#isrefitable)

#### Inherited from

[DInputText](DInputText.md).[isRefitable](DInputText.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L107)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isShown](../interfaces/DTableBodyCell.md#isshown)

#### Inherited from

[DInputText](DInputText.md).[isShown](DInputText.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1516)

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

[DInputText](DInputText.md).[listenerCount](DInputText.md#listenercount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25432

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

[DInputText](DInputText.md).[listeners](DInputText.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newImage

▸ **newImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DInputText](DInputText.md).[newImage](DInputText.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L76)

___

### newOperation

▸ **newOperation**(): [`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`string`, `HTMLInputElement`\>

#### Returns

[`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`string`, `HTMLInputElement`\>

#### Inherited from

[DInputText](DInputText.md).[newOperation](DInputText.md#newoperation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-input.ts#L32)

___

### newOverflowMask

▸ **newOverflowMask**(): ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Returns

``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DInputText](DInputText.md).[newOverflowMask](DInputText.md#newoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L73)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[newPadding](../interfaces/DTableBodyCell.md#newpadding)

#### Inherited from

[DInputText](DInputText.md).[newPadding](DInputText.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newText

▸ **newText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<`string`\>

#### Inherited from

[DInputText](DInputText.md).[newText](DInputText.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-input.ts#L105)

___

### newUtil

▸ **newUtil**(): [`UtilInputText`](UtilInputText.md)\<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>

#### Returns

[`UtilInputText`](UtilInputText.md)\<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>

#### Inherited from

[DInputText](DInputText.md).[newUtil](DInputText.md#newutil)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-text.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-input-text.ts#L19)

___

### off

▸ **off**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[off](../interfaces/DTableBodyCell.md#off)

#### Inherited from

[DInputText](DInputText.md).[off](DInputText.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25534

___

### on

▸ **on**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[on](../interfaces/DTableBodyCell.md#on)

#### Inherited from

[DInputText](DInputText.md).[on](DInputText.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25530

▸ **on**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[on](../interfaces/DTableBodyCell.md#on)

#### Inherited from

[DInputText](DInputText.md).[on](DInputText.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

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

[DInputText](DInputText.md).[onActivateKeyDown](DInputText.md#onactivatekeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L182)

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

[DInputText](DInputText.md).[onActivateKeyUp](DInputText.md#onactivatekeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L188)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onBlur](../interfaces/DTableBodyCell.md#onblur)

#### Inherited from

[DInputText](DInputText.md).[onBlur](DInputText.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L124)

___

### onChildBlur

▸ **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildBlur](../interfaces/DTableBodyCell.md#onchildblur)

#### Inherited from

[DInputText](DInputText.md).[onChildBlur](DInputText.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### onChildFocus

▸ **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildFocus](../interfaces/DTableBodyCell.md#onchildfocus)

#### Inherited from

[DInputText](DInputText.md).[onChildFocus](DInputText.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildrenChange](../interfaces/DTableBodyCell.md#onchildrenchange)

#### Inherited from

[DInputText](DInputText.md).[onChildrenChange](DInputText.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onDblClick](../interfaces/DTableBodyCell.md#ondblclick)

#### Inherited from

[DInputText](DInputText.md).[onDblClick](DInputText.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L114)

___

### onDown

▸ **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onDown](../interfaces/DTableBodyCell.md#ondown)

#### Inherited from

[DInputText](DInputText.md).[onDown](DInputText.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1979](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1979)

___

### onDownThis

▸ **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onDownThis](../interfaces/DTableBodyCell.md#ondownthis)

#### Inherited from

[DInputText](DInputText.md).[onDownThis](DInputText.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L107)

___

### onEnter

▸ **onEnter**(): `void`

#### Returns

`void`

#### Inherited from

[DInputText](DInputText.md).[onEnter](DInputText.md#onenter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-input.ts#L121)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onFocus](../interfaces/DTableBodyCell.md#onfocus)

#### Inherited from

[DInputText](DInputText.md).[onFocus](DInputText.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L119)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onHierarchyDirty](../interfaces/DTableBodyCell.md#onhierarchydirty)

#### Inherited from

[DInputText](DInputText.md).[onHierarchyDirty](DInputText.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onKeyDown](../interfaces/DTableBodyCell.md#onkeydown)

#### Inherited from

[DInputText](DInputText.md).[onKeyDown](DInputText.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L197)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onKeyUp](../interfaces/DTableBodyCell.md#onkeyup)

#### Inherited from

[DInputText](DInputText.md).[onKeyUp](DInputText.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L204)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onMove](../interfaces/DTableBodyCell.md#onmove)

#### Inherited from

[DInputText](DInputText.md).[onMove](DInputText.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### onOut

▸ **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onOut](../interfaces/DTableBodyCell.md#onout)

#### Inherited from

[DInputText](DInputText.md).[onOut](DInputText.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2042](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2042)

___

### onOver

▸ **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onOver](../interfaces/DTableBodyCell.md#onover)

#### Inherited from

[DInputText](DInputText.md).[onOver](DInputText.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2028](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2028)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onParentMove](../interfaces/DTableBodyCell.md#onparentmove)

#### Inherited from

[DInputText](DInputText.md).[onParentMove](DInputText.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1943](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1943)

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

[DInputText](DInputText.md).[onParentResize](DInputText.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onRefit](../interfaces/DTableBodyCell.md#onrefit)

#### Inherited from

[DInputText](DInputText.md).[onRefit](DInputText.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onReflow](../interfaces/DTableBodyCell.md#onreflow)

#### Inherited from

[DInputText](DInputText.md).[onReflow](DInputText.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L100)

___

### onReflowTextAndImage

▸ **onReflowTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DInputText](DInputText.md).[onReflowTextAndImage](DInputText.md#onreflowtextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L92)

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

[DInputText](DInputText.md).[onResize](DInputText.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onScale](../interfaces/DTableBodyCell.md#onscale)

#### Inherited from

[DInputText](DInputText.md).[onScale](DInputText.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1236)

___

### onShortcut

▸ **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onShortcut](../interfaces/DTableBodyCell.md#onshortcut)

#### Inherited from

[DInputText](DInputText.md).[onShortcut](DInputText.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1133)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onSkew](../interfaces/DTableBodyCell.md#onskew)

#### Inherited from

[DInputText](DInputText.md).[onSkew](DInputText.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onStateChange](../interfaces/DTableBodyCell.md#onstatechange)

#### Inherited from

[DInputText](DInputText.md).[onStateChange](DInputText.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L87)

___

### onUp

▸ **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onUp](../interfaces/DTableBodyCell.md#onup)

#### Inherited from

[DInputText](DInputText.md).[onUp](DInputText.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1996](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1996)

___

### onUpThis

▸ **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onUpThis](../interfaces/DTableBodyCell.md#onupthis)

#### Inherited from

[DInputText](DInputText.md).[onUpThis](DInputText.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

___

### onValueChange

▸ **onValueChange**(`newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `string` |
| `oldValue` | `string` |

#### Returns

`void`

#### Overrides

[DInputText](DInputText.md).[onValueChange](DInputText.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L51)

___

### onValueInput

▸ **onValueInput**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `string` |

#### Returns

`void`

#### Inherited from

[DInputText](DInputText.md).[onValueInput](DInputText.md#onvalueinput)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-input.ts#L117)

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

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onWheel](../interfaces/DTableBodyCell.md#onwheel)

#### Inherited from

[DInputText](DInputText.md).[onWheel](DInputText.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

___

### once

▸ **once**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[once](../interfaces/DTableBodyCell.md#once)

#### Inherited from

[DInputText](DInputText.md).[once](DInputText.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25527

▸ **once**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[once](../interfaces/DTableBodyCell.md#once)

#### Inherited from

[DInputText](DInputText.md).[once](DInputText.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[reflow](../interfaces/DTableBodyCell.md#reflow)

#### Inherited from

[DInputText](DInputText.md).[reflow](DInputText.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeAllListeners](../interfaces/DTableBodyCell.md#removealllisteners)

#### Inherited from

[DInputText](DInputText.md).[removeAllListeners](DInputText.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeAllListeners](../interfaces/DTableBodyCell.md#removealllisteners)

#### Inherited from

[DInputText](DInputText.md).[removeAllListeners](DInputText.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25517

___

### removeChild

▸ **removeChild**\<`TChildren`\>(`...children`): `TChildren`[``0``]

Removes one or more children from the container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...children` | `TChildren` | The DisplayObject(s) to remove |

#### Returns

`TChildren`[``0``]

The first child that was removed.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeChild](../interfaces/DTableBodyCell.md#removechild)

#### Inherited from

[DInputText](DInputText.md).[removeChild](DInputText.md#removechild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8408

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

[DInputText](DInputText.md).[removeChildAt](DInputText.md#removechildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8415

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

[DInputText](DInputText.md).[removeChildren](DInputText.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8423

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeListener](../interfaces/DTableBodyCell.md#removelistener)

#### Inherited from

[DInputText](DInputText.md).[removeListener](DInputText.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25513

▸ **removeListener**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeListener](../interfaces/DTableBodyCell.md#removelistener)

#### Inherited from

[DInputText](DInputText.md).[removeListener](DInputText.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25515

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

[DInputText](DInputText.md).[render](DInputText.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L133)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[renderAdvanced](../interfaces/DTableBodyCell.md#renderadvanced)

#### Inherited from

[DInputText](DInputText.md).[renderAdvanced](DInputText.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8465

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

[DInputText](DInputText.md).[resize](DInputText.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

___

### select

▸ **select**(): `this`

#### Returns

`this`

#### Inherited from

[DInputText](DInputText.md).[select](DInputText.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L177)

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[set](../interfaces/DTableBodyCell.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L79)

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

[DInputText](DInputText.md).[setChildIndex](DInputText.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8394

___

### setFocused

▸ **setFocused**(`isFocused`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setFocused](../interfaces/DTableBodyCell.md#setfocused)

#### Inherited from

[DInputText](DInputText.md).[setFocused](DInputText.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

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

[DInputText](DInputText.md).[setHeight](DInputText.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1402)

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

[DInputText](DInputText.md).[setParent](DInputText.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8775

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

[DInputText](DInputText.md).[setTransform](DInputText.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8790

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

[DInputText](DInputText.md).[setWidth](DInputText.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

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

[DInputText](DInputText.md).[setX](DInputText.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1268)

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

[DInputText](DInputText.md).[setY](DInputText.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[show](../interfaces/DTableBodyCell.md#show)

#### Inherited from

[DInputText](DInputText.md).[show](DInputText.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[sortChildren](../interfaces/DTableBodyCell.md#sortchildren)

#### Inherited from

[DInputText](DInputText.md).[sortChildren](DInputText.md#sortchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8427

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[DInputText](DInputText.md).[start](DInputText.md#start)

#### Defined in

[src/main/typescript/wcardinal/ui/d-html-element.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-html-element.ts#L129)

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

[DInputText](DInputText.md).[swapChildren](DInputText.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

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

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toCursor](../interfaces/DTableBodyCell.md#tocursor)

#### Inherited from

[DInputText](DInputText.md).[toCursor](DInputText.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toDirty](../interfaces/DTableBodyCell.md#todirty)

#### Inherited from

[DInputText](DInputText.md).[toDirty](DInputText.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1534)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `Point`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPointData` | The world origin to calculate from. |
| `point?` | `Point` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform. |

#### Returns

`Point`

A point object representing the position of this object.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toGlobal](../interfaces/DTableBodyCell.md#toglobal)

#### Inherited from

[DInputText](DInputText.md).[toGlobal](DInputText.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toHasDirty](../interfaces/DTableBodyCell.md#tohasdirty)

#### Inherited from

[DInputText](DInputText.md).[toHasDirty](DInputText.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toHierarchyDirty](../interfaces/DTableBodyCell.md#tohierarchydirty)

#### Inherited from

[DInputText](DInputText.md).[toHierarchyDirty](DInputText.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `Point`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPointData` | The world origin to calculate from. |
| `from?` | `DisplayObject` | The DisplayObject to calculate the global position from. |
| `point?` | `Point` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform |

#### Returns

`Point`

A point object representing the position of this object

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toLocal](../interfaces/DTableBodyCell.md#tolocal)

#### Inherited from

[DInputText](DInputText.md).[toLocal](DInputText.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHasDirty](../interfaces/DTableBodyCell.md#toparenthasdirty)

#### Inherited from

[DInputText](DInputText.md).[toParentHasDirty](DInputText.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHierarchyDirty](../interfaces/DTableBodyCell.md#toparenthierarchydirty)

#### Inherited from

[DInputText](DInputText.md).[toParentHierarchyDirty](DInputText.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentResized](../interfaces/DTableBodyCell.md#toparentresized)

#### Inherited from

[DInputText](DInputText.md).[toParentResized](DInputText.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### unset

▸ **unset**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[unset](../interfaces/DTableBodyCell.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-input-text.ts#L95)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[updateTransform](../interfaces/DTableBodyCell.md#updatetransform)

#### Inherited from

[DInputText](DInputText.md).[updateTransform](DInputText.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2069](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2069)

___

### validate

▸ **validate**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[DInputText](DInputText.md).[validate](DInputText.md#validate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-input.ts#L125)

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

[DInputText](DInputText.md).[mixin](DInputText.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
