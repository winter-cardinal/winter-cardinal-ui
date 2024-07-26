[Winter Cardinal UI - v0.442.0](../index.md) / DTableBodyCellSelectMultiple

# Class: DTableBodyCellSelectMultiple\<ROW, VALUE, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellSelectMultiple`](../interfaces/DThemeTableBodyCellSelectMultiple.md)\<`VALUE`\> = [`DThemeTableBodyCellSelectMultiple`](../interfaces/DThemeTableBodyCellSelectMultiple.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellSelectMultipleOptions`](../interfaces/DTableBodyCellSelectMultipleOptions.md)\<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellSelectMultipleOptions`](../interfaces/DTableBodyCellSelectMultipleOptions.md)\<`ROW`, `VALUE`, `THEME`\> |

## Hierarchy

- [`DSelectMultiple`](DSelectMultiple.md)\<`VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DTableBodyCellSelectMultiple`**

## Implements

- [`DTableBodyCell`](../interfaces/DTableBodyCell.md)\<`ROW`, `VALUE`[]\>

## Table of contents

### Constructors

- [constructor](DTableBodyCellSelectMultiple.md#constructor)

### Properties

- [\_accessibleActive](DTableBodyCellSelectMultiple.md#_accessibleactive)
- [\_accessibleDiv](DTableBodyCellSelectMultiple.md#_accessiblediv)
- [\_auto](DTableBodyCellSelectMultiple.md#_auto)
- [\_background](DTableBodyCellSelectMultiple.md#_background)
- [\_border](DTableBodyCellSelectMultiple.md#_border)
- [\_bounds](DTableBodyCellSelectMultiple.md#_bounds)
- [\_boundsID](DTableBodyCellSelectMultiple.md#_boundsid)
- [\_boundsRect](DTableBodyCellSelectMultiple.md#_boundsrect)
- [\_clearType](DTableBodyCellSelectMultiple.md#_cleartype)
- [\_column](DTableBodyCellSelectMultiple.md#_column)
- [\_columnIndex](DTableBodyCellSelectMultiple.md#_columnindex)
- [\_corner](DTableBodyCellSelectMultiple.md#_corner)
- [\_cursor](DTableBodyCellSelectMultiple.md#_cursor)
- [\_destroyed](DTableBodyCellSelectMultiple.md#_destroyed)
- [\_enabledFilters](DTableBodyCellSelectMultiple.md#_enabledfilters)
- [\_image](DTableBodyCellSelectMultiple.md#_image)
- [\_isGrouped](DTableBodyCellSelectMultiple.md#_isgrouped)
- [\_isToggle](DTableBodyCellSelectMultiple.md#_istoggle)
- [\_lastDownPoint](DTableBodyCellSelectMultiple.md#_lastdownpoint)
- [\_lastSortedIndex](DTableBodyCellSelectMultiple.md#_lastsortedindex)
- [\_localBounds](DTableBodyCellSelectMultiple.md#_localbounds)
- [\_localBoundsRect](DTableBodyCellSelectMultiple.md#_localboundsrect)
- [\_mask](DTableBodyCellSelectMultiple.md#_mask)
- [\_menu](DTableBodyCellSelectMultiple.md#_menu)
- [\_onChange](DTableBodyCellSelectMultiple.md#_onchange)
- [\_onMenuCloseBound](DTableBodyCellSelectMultiple.md#_onmenuclosebound)
- [\_onMenuSelectBound](DTableBodyCellSelectMultiple.md#_onmenuselectbound)
- [\_options](DTableBodyCellSelectMultiple.md#_options)
- [\_outline](DTableBodyCellSelectMultiple.md#_outline)
- [\_overflowMask](DTableBodyCellSelectMultiple.md#_overflowmask)
- [\_padding](DTableBodyCellSelectMultiple.md#_padding)
- [\_reflowable](DTableBodyCellSelectMultiple.md#_reflowable)
- [\_row](DTableBodyCellSelectMultiple.md#_row)
- [\_rowIndex](DTableBodyCellSelectMultiple.md#_rowindex)
- [\_shortcuts](DTableBodyCellSelectMultiple.md#_shortcuts)
- [\_snippet](DTableBodyCellSelectMultiple.md#_snippet)
- [\_tempDisplayObjectParent](DTableBodyCellSelectMultiple.md#_tempdisplayobjectparent)
- [\_text](DTableBodyCellSelectMultiple.md#_text)
- [\_title](DTableBodyCellSelectMultiple.md#_title)
- [\_values](DTableBodyCellSelectMultiple.md#_values)
- [\_when](DTableBodyCellSelectMultiple.md#_when)
- [\_zIndex](DTableBodyCellSelectMultiple.md#_zindex)
- [accessible](DTableBodyCellSelectMultiple.md#accessible)
- [accessibleChildren](DTableBodyCellSelectMultiple.md#accessiblechildren)
- [accessibleHint](DTableBodyCellSelectMultiple.md#accessiblehint)
- [accessiblePointerEvents](DTableBodyCellSelectMultiple.md#accessiblepointerevents)
- [accessibleTitle](DTableBodyCellSelectMultiple.md#accessibletitle)
- [accessibleType](DTableBodyCellSelectMultiple.md#accessibletype)
- [alpha](DTableBodyCellSelectMultiple.md#alpha)
- [angle](DTableBodyCellSelectMultiple.md#angle)
- [buttonMode](DTableBodyCellSelectMultiple.md#buttonmode)
- [cacheAsBitmap](DTableBodyCellSelectMultiple.md#cacheasbitmap)
- [children](DTableBodyCellSelectMultiple.md#children)
- [cursor](DTableBodyCellSelectMultiple.md#cursor)
- [filterArea](DTableBodyCellSelectMultiple.md#filterarea)
- [filters](DTableBodyCellSelectMultiple.md#filters)
- [hitArea](DTableBodyCellSelectMultiple.md#hitarea)
- [interactive](DTableBodyCellSelectMultiple.md#interactive)
- [interactiveChildren](DTableBodyCellSelectMultiple.md#interactivechildren)
- [isMask](DTableBodyCellSelectMultiple.md#ismask)
- [isSprite](DTableBodyCellSelectMultiple.md#issprite)
- [localTransform](DTableBodyCellSelectMultiple.md#localtransform)
- [mask](DTableBodyCellSelectMultiple.md#mask)
- [name](DTableBodyCellSelectMultiple.md#name)
- [parent](DTableBodyCellSelectMultiple.md#parent)
- [pivot](DTableBodyCellSelectMultiple.md#pivot)
- [renderable](DTableBodyCellSelectMultiple.md#renderable)
- [rotation](DTableBodyCellSelectMultiple.md#rotation)
- [sortDirty](DTableBodyCellSelectMultiple.md#sortdirty)
- [sortableChildren](DTableBodyCellSelectMultiple.md#sortablechildren)
- [transform](DTableBodyCellSelectMultiple.md#transform)
- [visible](DTableBodyCellSelectMultiple.md#visible)
- [worldAlpha](DTableBodyCellSelectMultiple.md#worldalpha)
- [worldTransform](DTableBodyCellSelectMultiple.md#worldtransform)
- [worldVisible](DTableBodyCellSelectMultiple.md#worldvisible)
- [zIndex](DTableBodyCellSelectMultiple.md#zindex)
- [LAYOUTER](DTableBodyCellSelectMultiple.md#layouter)
- [WORK\_CONTAINS\_POINT](DTableBodyCellSelectMultiple.md#work_contains_point)

### Accessors

- [background](DTableBodyCellSelectMultiple.md#background)
- [border](DTableBodyCellSelectMultiple.md#border)
- [column](DTableBodyCellSelectMultiple.md#column)
- [columnIndex](DTableBodyCellSelectMultiple.md#columnindex)
- [corner](DTableBodyCellSelectMultiple.md#corner)
- [height](DTableBodyCellSelectMultiple.md#height)
- [image](DTableBodyCellSelectMultiple.md#image)
- [isGrouped](DTableBodyCellSelectMultiple.md#isgrouped)
- [isToggle](DTableBodyCellSelectMultiple.md#istoggle)
- [menu](DTableBodyCellSelectMultiple.md#menu)
- [options](DTableBodyCellSelectMultiple.md#options)
- [outline](DTableBodyCellSelectMultiple.md#outline)
- [padding](DTableBodyCellSelectMultiple.md#padding)
- [position](DTableBodyCellSelectMultiple.md#position)
- [reflowable](DTableBodyCellSelectMultiple.md#reflowable)
- [row](DTableBodyCellSelectMultiple.md#row)
- [rowIndex](DTableBodyCellSelectMultiple.md#rowindex)
- [scale](DTableBodyCellSelectMultiple.md#scale)
- [shadow](DTableBodyCellSelectMultiple.md#shadow)
- [skew](DTableBodyCellSelectMultiple.md#skew)
- [snippet](DTableBodyCellSelectMultiple.md#snippet)
- [state](DTableBodyCellSelectMultiple.md#state)
- [text](DTableBodyCellSelectMultiple.md#text)
- [theme](DTableBodyCellSelectMultiple.md#theme)
- [title](DTableBodyCellSelectMultiple.md#title)
- [type](DTableBodyCellSelectMultiple.md#type)
- [unsafe](DTableBodyCellSelectMultiple.md#unsafe)
- [values](DTableBodyCellSelectMultiple.md#values)
- [weight](DTableBodyCellSelectMultiple.md#weight)
- [width](DTableBodyCellSelectMultiple.md#width)
- [x](DTableBodyCellSelectMultiple.md#x)
- [y](DTableBodyCellSelectMultiple.md#y)

### Methods

- [\_calculateBounds](DTableBodyCellSelectMultiple.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTableBodyCellSelectMultiple.md#_recursivepostupdatetransform)
- [\_render](DTableBodyCellSelectMultiple.md#_render)
- [activate](DTableBodyCellSelectMultiple.md#activate)
- [addChild](DTableBodyCellSelectMultiple.md#addchild)
- [addChildAt](DTableBodyCellSelectMultiple.md#addchildat)
- [addListener](DTableBodyCellSelectMultiple.md#addlistener)
- [applyTitle](DTableBodyCellSelectMultiple.md#applytitle)
- [blur](DTableBodyCellSelectMultiple.md#blur)
- [calculateBounds](DTableBodyCellSelectMultiple.md#calculatebounds)
- [close](DTableBodyCellSelectMultiple.md#close)
- [containerUpdateTransform](DTableBodyCellSelectMultiple.md#containerupdatetransform)
- [containsGlobalPoint](DTableBodyCellSelectMultiple.md#containsglobalpoint)
- [containsLocalPoint](DTableBodyCellSelectMultiple.md#containslocalpoint)
- [containsPoint](DTableBodyCellSelectMultiple.md#containspoint)
- [destroy](DTableBodyCellSelectMultiple.md#destroy)
- [disableTempParent](DTableBodyCellSelectMultiple.md#disabletempparent)
- [displayObjectUpdateTransform](DTableBodyCellSelectMultiple.md#displayobjectupdatetransform)
- [emit](DTableBodyCellSelectMultiple.md#emit)
- [enableTempParent](DTableBodyCellSelectMultiple.md#enabletempparent)
- [eventNames](DTableBodyCellSelectMultiple.md#eventnames)
- [focus](DTableBodyCellSelectMultiple.md#focus)
- [focusOnClosest](DTableBodyCellSelectMultiple.md#focusonclosest)
- [getBounds](DTableBodyCellSelectMultiple.md#getbounds)
- [getChildAt](DTableBodyCellSelectMultiple.md#getchildat)
- [getChildByName](DTableBodyCellSelectMultiple.md#getchildbyname)
- [getChildIndex](DTableBodyCellSelectMultiple.md#getchildindex)
- [getClearType](DTableBodyCellSelectMultiple.md#getcleartype)
- [getClippingRect](DTableBodyCellSelectMultiple.md#getclippingrect)
- [getGlobalPosition](DTableBodyCellSelectMultiple.md#getglobalposition)
- [getHeight](DTableBodyCellSelectMultiple.md#getheight)
- [getImage](DTableBodyCellSelectMultiple.md#getimage)
- [getLayouter](DTableBodyCellSelectMultiple.md#getlayouter)
- [getLocalBounds](DTableBodyCellSelectMultiple.md#getlocalbounds)
- [getOverflowMask](DTableBodyCellSelectMultiple.md#getoverflowmask)
- [getParentOfSize](DTableBodyCellSelectMultiple.md#getparentofsize)
- [getText](DTableBodyCellSelectMultiple.md#gettext)
- [getThemeDefault](DTableBodyCellSelectMultiple.md#getthemedefault)
- [getType](DTableBodyCellSelectMultiple.md#gettype)
- [getWidth](DTableBodyCellSelectMultiple.md#getwidth)
- [getX](DTableBodyCellSelectMultiple.md#getx)
- [getY](DTableBodyCellSelectMultiple.md#gety)
- [hasDirty](DTableBodyCellSelectMultiple.md#hasdirty)
- [hasRefitableHeight](DTableBodyCellSelectMultiple.md#hasrefitableheight)
- [hasRefitableWidth](DTableBodyCellSelectMultiple.md#hasrefitablewidth)
- [hide](DTableBodyCellSelectMultiple.md#hide)
- [init](DTableBodyCellSelectMultiple.md#init)
- [initOnPress](DTableBodyCellSelectMultiple.md#initonpress)
- [initReflowable](DTableBodyCellSelectMultiple.md#initreflowable)
- [isDirty](DTableBodyCellSelectMultiple.md#isdirty)
- [isEventTarget](DTableBodyCellSelectMultiple.md#iseventtarget)
- [isHidden](DTableBodyCellSelectMultiple.md#ishidden)
- [isHierarchyDirty](DTableBodyCellSelectMultiple.md#ishierarchydirty)
- [isRefitable](DTableBodyCellSelectMultiple.md#isrefitable)
- [isSameValues](DTableBodyCellSelectMultiple.md#issamevalues)
- [isShown](DTableBodyCellSelectMultiple.md#isshown)
- [listenerCount](DTableBodyCellSelectMultiple.md#listenercount)
- [listeners](DTableBodyCellSelectMultiple.md#listeners)
- [newImage](DTableBodyCellSelectMultiple.md#newimage)
- [newOverflowMask](DTableBodyCellSelectMultiple.md#newoverflowmask)
- [newPadding](DTableBodyCellSelectMultiple.md#newpadding)
- [newText](DTableBodyCellSelectMultiple.md#newtext)
- [off](DTableBodyCellSelectMultiple.md#off)
- [on](DTableBodyCellSelectMultiple.md#on)
- [onActivate](DTableBodyCellSelectMultiple.md#onactivate)
- [onActivateKeyDown](DTableBodyCellSelectMultiple.md#onactivatekeydown)
- [onActivateKeyUp](DTableBodyCellSelectMultiple.md#onactivatekeyup)
- [onBlur](DTableBodyCellSelectMultiple.md#onblur)
- [onChildBlur](DTableBodyCellSelectMultiple.md#onchildblur)
- [onChildFocus](DTableBodyCellSelectMultiple.md#onchildfocus)
- [onChildrenChange](DTableBodyCellSelectMultiple.md#onchildrenchange)
- [onClick](DTableBodyCellSelectMultiple.md#onclick)
- [onDblClick](DTableBodyCellSelectMultiple.md#ondblclick)
- [onDown](DTableBodyCellSelectMultiple.md#ondown)
- [onDownThis](DTableBodyCellSelectMultiple.md#ondownthis)
- [onFocus](DTableBodyCellSelectMultiple.md#onfocus)
- [onHierarchyDirty](DTableBodyCellSelectMultiple.md#onhierarchydirty)
- [onInactivate](DTableBodyCellSelectMultiple.md#oninactivate)
- [onKeyDown](DTableBodyCellSelectMultiple.md#onkeydown)
- [onKeyDownArrowDown](DTableBodyCellSelectMultiple.md#onkeydownarrowdown)
- [onKeyUp](DTableBodyCellSelectMultiple.md#onkeyup)
- [onMenuClose](DTableBodyCellSelectMultiple.md#onmenuclose)
- [onMenuReplaced](DTableBodyCellSelectMultiple.md#onmenureplaced)
- [onMenuSelect](DTableBodyCellSelectMultiple.md#onmenuselect)
- [onMove](DTableBodyCellSelectMultiple.md#onmove)
- [onOut](DTableBodyCellSelectMultiple.md#onout)
- [onOver](DTableBodyCellSelectMultiple.md#onover)
- [onParentMove](DTableBodyCellSelectMultiple.md#onparentmove)
- [onParentResize](DTableBodyCellSelectMultiple.md#onparentresize)
- [onPress](DTableBodyCellSelectMultiple.md#onpress)
- [onRefit](DTableBodyCellSelectMultiple.md#onrefit)
- [onReflow](DTableBodyCellSelectMultiple.md#onreflow)
- [onReflowTextAndImage](DTableBodyCellSelectMultiple.md#onreflowtextandimage)
- [onResize](DTableBodyCellSelectMultiple.md#onresize)
- [onScale](DTableBodyCellSelectMultiple.md#onscale)
- [onShortcut](DTableBodyCellSelectMultiple.md#onshortcut)
- [onSkew](DTableBodyCellSelectMultiple.md#onskew)
- [onStateChange](DTableBodyCellSelectMultiple.md#onstatechange)
- [onToggleEnd](DTableBodyCellSelectMultiple.md#ontoggleend)
- [onToggleStart](DTableBodyCellSelectMultiple.md#ontogglestart)
- [onUnpress](DTableBodyCellSelectMultiple.md#onunpress)
- [onUp](DTableBodyCellSelectMultiple.md#onup)
- [onUpThis](DTableBodyCellSelectMultiple.md#onupthis)
- [onValueChange](DTableBodyCellSelectMultiple.md#onvaluechange)
- [onWheel](DTableBodyCellSelectMultiple.md#onwheel)
- [once](DTableBodyCellSelectMultiple.md#once)
- [open](DTableBodyCellSelectMultiple.md#open)
- [reflow](DTableBodyCellSelectMultiple.md#reflow)
- [removeAllListeners](DTableBodyCellSelectMultiple.md#removealllisteners)
- [removeChild](DTableBodyCellSelectMultiple.md#removechild)
- [removeChildAt](DTableBodyCellSelectMultiple.md#removechildat)
- [removeChildren](DTableBodyCellSelectMultiple.md#removechildren)
- [removeListener](DTableBodyCellSelectMultiple.md#removelistener)
- [render](DTableBodyCellSelectMultiple.md#render)
- [renderAdvanced](DTableBodyCellSelectMultiple.md#renderadvanced)
- [resize](DTableBodyCellSelectMultiple.md#resize)
- [set](DTableBodyCellSelectMultiple.md#set)
- [setChildIndex](DTableBodyCellSelectMultiple.md#setchildindex)
- [setFocused](DTableBodyCellSelectMultiple.md#setfocused)
- [setHeight](DTableBodyCellSelectMultiple.md#setheight)
- [setParent](DTableBodyCellSelectMultiple.md#setparent)
- [setTransform](DTableBodyCellSelectMultiple.md#settransform)
- [setWidth](DTableBodyCellSelectMultiple.md#setwidth)
- [setX](DTableBodyCellSelectMultiple.md#setx)
- [setY](DTableBodyCellSelectMultiple.md#sety)
- [show](DTableBodyCellSelectMultiple.md#show)
- [sortChildren](DTableBodyCellSelectMultiple.md#sortchildren)
- [swapChildren](DTableBodyCellSelectMultiple.md#swapchildren)
- [toCursor](DTableBodyCellSelectMultiple.md#tocursor)
- [toDirty](DTableBodyCellSelectMultiple.md#todirty)
- [toGlobal](DTableBodyCellSelectMultiple.md#toglobal)
- [toHasDirty](DTableBodyCellSelectMultiple.md#tohasdirty)
- [toHierarchyDirty](DTableBodyCellSelectMultiple.md#tohierarchydirty)
- [toLocal](DTableBodyCellSelectMultiple.md#tolocal)
- [toMenu](DTableBodyCellSelectMultiple.md#tomenu)
- [toMenuOptions](DTableBodyCellSelectMultiple.md#tomenuoptions)
- [toParentHasDirty](DTableBodyCellSelectMultiple.md#toparenthasdirty)
- [toParentHierarchyDirty](DTableBodyCellSelectMultiple.md#toparenthierarchydirty)
- [toParentResized](DTableBodyCellSelectMultiple.md#toparentresized)
- [toggle](DTableBodyCellSelectMultiple.md#toggle)
- [unset](DTableBodyCellSelectMultiple.md#unset)
- [updateMenuItems](DTableBodyCellSelectMultiple.md#updatemenuitems)
- [updateTransform](DTableBodyCellSelectMultiple.md#updatetransform)
- [mixin](DTableBodyCellSelectMultiple.md#mixin)

## Constructors

### constructor

• **new DTableBodyCellSelectMultiple**\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>(`columnIndex`, `column`, `onChange`, `options?`): [`DTableBodyCellSelectMultiple`](DTableBodyCellSelectMultiple.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellSelectMultiple`](../interfaces/DThemeTableBodyCellSelectMultiple.md)\<`VALUE`\> = [`DThemeTableBodyCellSelectMultiple`](../interfaces/DThemeTableBodyCellSelectMultiple.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellSelectMultipleOptions`](../interfaces/DTableBodyCellSelectMultipleOptions.md)\<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellSelectMultipleOptions`](../interfaces/DTableBodyCellSelectMultipleOptions.md)\<`ROW`, `VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`[], `VALUE`[], [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`[]\>\> |
| `onChange` | [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, `VALUE`[]\> |
| `options?` | `OPTIONS` |

#### Returns

[`DTableBodyCellSelectMultiple`](DTableBodyCellSelectMultiple.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Overrides

[DSelectMultiple](DSelectMultiple.md).[constructor](DSelectMultiple.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L43)

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

[DSelectMultiple](DSelectMultiple.md).[_accessibleActive](DSelectMultiple.md#_accessibleactive)

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

[DSelectMultiple](DSelectMultiple.md).[_accessibleDiv](DSelectMultiple.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_auto](../interfaces/DTableBodyCell.md#_auto)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_auto](DSelectMultiple.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_background](../interfaces/DTableBodyCell.md#_background)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_background](DSelectMultiple.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_border](../interfaces/DTableBodyCell.md#_border)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_border](DSelectMultiple.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_bounds](../interfaces/DTableBodyCell.md#_bounds)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_bounds](DSelectMultiple.md#_bounds)

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

[DSelectMultiple](DSelectMultiple.md).[_boundsID](DSelectMultiple.md#_boundsid)

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

[DSelectMultiple](DSelectMultiple.md).[_boundsRect](DSelectMultiple.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_clearType](../interfaces/DTableBodyCell.md#_cleartype)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_clearType](DSelectMultiple.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_column

• `Protected` **\_column**: [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`[], `VALUE`[], [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`[]\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L40)

___

### \_columnIndex

• `Protected` **\_columnIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L39)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_corner](../interfaces/DTableBodyCell.md#_corner)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_corner](DSelectMultiple.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_cursor](../interfaces/DTableBodyCell.md#_cursor)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_cursor](DSelectMultiple.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_destroyed](../interfaces/DTableBodyCell.md#_destroyed)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_destroyed](DSelectMultiple.md#_destroyed)

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

[DSelectMultiple](DSelectMultiple.md).[_enabledFilters](DSelectMultiple.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_image

• `Protected` `Optional` **\_image**: [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_image](DSelectMultiple.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L61)

___

### \_isGrouped

• `Protected` `Optional` **\_isGrouped**: `boolean`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_isGrouped](DSelectMultiple.md#_isgrouped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L111)

___

### \_isToggle

• `Protected` `Optional` **\_isToggle**: `boolean`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_isToggle](DSelectMultiple.md#_istoggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L110)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_lastDownPoint](../interfaces/DTableBodyCell.md#_lastdownpoint)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_lastDownPoint](DSelectMultiple.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

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

[DSelectMultiple](DSelectMultiple.md).[_lastSortedIndex](DSelectMultiple.md#_lastsortedindex)

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

[DSelectMultiple](DSelectMultiple.md).[_localBounds](DSelectMultiple.md#_localbounds)

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

[DSelectMultiple](DSelectMultiple.md).[_localBoundsRect](DSelectMultiple.md#_localboundsrect)

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

[DSelectMultiple](DSelectMultiple.md).[_mask](DSelectMultiple.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_menu

• `Protected` `Optional` **\_menu**: [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_menu](DSelectMultiple.md#_menu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L80)

___

### \_onChange

• `Protected` **\_onChange**: [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, `VALUE`[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L41)

___

### \_onMenuCloseBound

• `Protected` `Optional` **\_onMenuCloseBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_onMenuCloseBound](DSelectMultiple.md#_onmenuclosebound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L86)

___

### \_onMenuSelectBound

• `Protected` `Optional` **\_onMenuSelectBound**: (`selected`: `VALUE`, `item`: [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>, `menu`: [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>) => `void`

#### Type declaration

▸ (`selected`, `item`, `menu`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `selected` | `VALUE` |
| `item` | [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\> |
| `menu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

##### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_onMenuSelectBound](DSelectMultiple.md#_onmenuselectbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L81)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_options](../interfaces/DTableBodyCell.md#_options)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_options](DSelectMultiple.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_outline](../interfaces/DTableBodyCell.md#_outline)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_outline](DSelectMultiple.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_overflowMask](DSelectMultiple.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L57)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_padding](../interfaces/DTableBodyCell.md#_padding)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_padding](DSelectMultiple.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_reflowable](../interfaces/DTableBodyCell.md#_reflowable)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_reflowable](DSelectMultiple.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_row

• `Protected` `Optional` **\_row**: `ROW`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L37)

___

### \_rowIndex

• `Protected` **\_rowIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L38)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_shortcuts](../interfaces/DTableBodyCell.md#_shortcuts)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_shortcuts](DSelectMultiple.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_snippet](../interfaces/DTableBodyCell.md#_snippet)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_snippet](DSelectMultiple.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_tempDisplayObjectParent](../interfaces/DTableBodyCell.md#_tempdisplayobjectparent)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_tempDisplayObjectParent](DSelectMultiple.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_text

• `Protected` `Optional` **\_text**: [`DTextPieceImpl`](DTextPieceImpl.md)\<[`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>[]\>

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_text](DSelectMultiple.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L56)

___

### \_title

• `Protected` **\_title**: `string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_title](../interfaces/DTableBodyCell.md#_title)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_title](DSelectMultiple.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_values

• `Protected` **\_values**: `VALUE`[]

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_values](DSelectMultiple.md#_values)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L76)

___

### \_when

• `Protected` `Optional` **\_when**: [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_when](DSelectMultiple.md#_when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L112)

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

[DSelectMultiple](DSelectMultiple.md).[_zIndex](DSelectMultiple.md#_zindex)

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

[DSelectMultiple](DSelectMultiple.md).[accessible](DSelectMultiple.md#accessible)

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

[DSelectMultiple](DSelectMultiple.md).[accessibleChildren](DSelectMultiple.md#accessiblechildren)

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

[DSelectMultiple](DSelectMultiple.md).[accessibleHint](DSelectMultiple.md#accessiblehint)

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

[DSelectMultiple](DSelectMultiple.md).[accessiblePointerEvents](DSelectMultiple.md#accessiblepointerevents)

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

[DSelectMultiple](DSelectMultiple.md).[accessibleTitle](DSelectMultiple.md#accessibletitle)

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

[DSelectMultiple](DSelectMultiple.md).[accessibleType](DSelectMultiple.md#accessibletype)

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

[DSelectMultiple](DSelectMultiple.md).[alpha](DSelectMultiple.md#alpha)

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

[DSelectMultiple](DSelectMultiple.md).[angle](DSelectMultiple.md#angle)

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

[DSelectMultiple](DSelectMultiple.md).[buttonMode](DSelectMultiple.md#buttonmode)

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

[DSelectMultiple](DSelectMultiple.md).[cacheAsBitmap](DSelectMultiple.md#cacheasbitmap)

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

[DSelectMultiple](DSelectMultiple.md).[children](DSelectMultiple.md#children)

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

[DSelectMultiple](DSelectMultiple.md).[cursor](DSelectMultiple.md#cursor)

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

[DSelectMultiple](DSelectMultiple.md).[filterArea](DSelectMultiple.md#filterarea)

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

[DSelectMultiple](DSelectMultiple.md).[filters](DSelectMultiple.md#filters)

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

[DSelectMultiple](DSelectMultiple.md).[hitArea](DSelectMultiple.md#hitarea)

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

[DSelectMultiple](DSelectMultiple.md).[interactive](DSelectMultiple.md#interactive)

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

[DSelectMultiple](DSelectMultiple.md).[interactiveChildren](DSelectMultiple.md#interactivechildren)

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

[DSelectMultiple](DSelectMultiple.md).[isMask](DSelectMultiple.md#ismask)

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

[DSelectMultiple](DSelectMultiple.md).[isSprite](DSelectMultiple.md#issprite)

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

[DSelectMultiple](DSelectMultiple.md).[localTransform](DSelectMultiple.md#localtransform)

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

[DSelectMultiple](DSelectMultiple.md).[mask](DSelectMultiple.md#mask)

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

[DSelectMultiple](DSelectMultiple.md).[name](DSelectMultiple.md#name)

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

[DSelectMultiple](DSelectMultiple.md).[parent](DSelectMultiple.md#parent)

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

[DSelectMultiple](DSelectMultiple.md).[pivot](DSelectMultiple.md#pivot)

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

[DSelectMultiple](DSelectMultiple.md).[renderable](DSelectMultiple.md#renderable)

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

[DSelectMultiple](DSelectMultiple.md).[rotation](DSelectMultiple.md#rotation)

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

[DSelectMultiple](DSelectMultiple.md).[sortDirty](DSelectMultiple.md#sortdirty)

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

[DSelectMultiple](DSelectMultiple.md).[sortableChildren](DSelectMultiple.md#sortablechildren)

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

[DSelectMultiple](DSelectMultiple.md).[transform](DSelectMultiple.md#transform)

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

[DSelectMultiple](DSelectMultiple.md).[visible](DSelectMultiple.md#visible)

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

[DSelectMultiple](DSelectMultiple.md).[worldAlpha](DSelectMultiple.md#worldalpha)

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

[DSelectMultiple](DSelectMultiple.md).[worldTransform](DSelectMultiple.md#worldtransform)

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

[DSelectMultiple](DSelectMultiple.md).[worldVisible](DSelectMultiple.md#worldvisible)

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

[DSelectMultiple](DSelectMultiple.md).[zIndex](DSelectMultiple.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[LAYOUTER](DSelectMultiple.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L55)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[WORK_CONTAINS_POINT](DSelectMultiple.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

DTableBodyCell.background

#### Inherited from

DSelectMultiple.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

DTableBodyCell.border

#### Inherited from

DSelectMultiple.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### column

• `get` **column**(): [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`[], `VALUE`[], [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`[]\>\>

A column.

#### Returns

[`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`[], `VALUE`[], [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`[]\>\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[column](../interfaces/DTableBodyCell.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L89)

___

### columnIndex

• `get` **columnIndex**(): `number`

A column index.

#### Returns

`number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[columnIndex](../interfaces/DTableBodyCell.md#columnindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L85)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Implementation of

DTableBodyCell.corner

#### Inherited from

DSelectMultiple.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.height

#### Inherited from

DSelectMultiple.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

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

DSelectMultiple.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### image

• `get` **image**(): [`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Returns

[`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Inherited from

DSelectMultiple.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L68)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DSelectMultiple.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L80)

___

### isGrouped

• `get` **isGrouped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DSelectMultiple.isGrouped

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L145)

• `set` **isGrouped**(`isGrouped`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isGrouped` | `boolean` |

#### Returns

`void`

#### Inherited from

DSelectMultiple.isGrouped

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L149)

___

### isToggle

• `get` **isToggle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DSelectMultiple.isToggle

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L141)

___

### menu

• `get` **menu**(): [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Returns

[`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Inherited from

DSelectMultiple.menu

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L128)

• `set` **menu**(`newMenu`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newMenu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Inherited from

DSelectMultiple.menu

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L137)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Implementation of

DTableBodyCell.options

#### Inherited from

DSelectMultiple.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Implementation of

DTableBodyCell.outline

#### Inherited from

DSelectMultiple.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Implementation of

DTableBodyCell.padding

#### Inherited from

DSelectMultiple.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.position

#### Inherited from

DSelectMultiple.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

DTableBodyCell.reflowable

#### Inherited from

DSelectMultiple.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L77)

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

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L81)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.scale

#### Inherited from

DSelectMultiple.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

DTableBodyCell.shadow

#### Inherited from

DSelectMultiple.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

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

DSelectMultiple.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.skew

#### Inherited from

DSelectMultiple.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

DTableBodyCell.snippet

#### Inherited from

DSelectMultiple.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

DTableBodyCell.state

#### Inherited from

DSelectMultiple.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### text

• `get` **text**(): [`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Returns

[`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Inherited from

DSelectMultiple.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L84)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DSelectMultiple.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L96)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Implementation of

DTableBodyCell.theme

#### Inherited from

DSelectMultiple.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1694](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1694)

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

DSelectMultiple.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.title

#### Inherited from

DSelectMultiple.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1487)

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

DSelectMultiple.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.type

#### Inherited from

DSelectMultiple.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Implementation of

DTableBodyCell.unsafe

#### Inherited from

DSelectMultiple.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### values

• `get` **values**(): `VALUE`[]

Returns a selected value or null.

#### Returns

`VALUE`[]

#### Inherited from

DSelectMultiple.values

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L134)

• `set` **values**(`values`): `void`

Sets to the specified value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `VALUE`[] |

#### Returns

`void`

#### Inherited from

DSelectMultiple.values

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L141)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.weight

#### Inherited from

DSelectMultiple.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

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

DSelectMultiple.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.width

#### Inherited from

DSelectMultiple.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

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

DSelectMultiple.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.x

#### Inherited from

DSelectMultiple.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

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

DSelectMultiple.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.y

#### Inherited from

DSelectMultiple.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

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

DSelectMultiple.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_calculateBounds](../interfaces/DTableBodyCell.md#_calculatebounds)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[_calculateBounds](DSelectMultiple.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2084](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2084)

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

[DSelectMultiple](DSelectMultiple.md).[_recursivePostUpdateTransform](DSelectMultiple.md#_recursivepostupdatetransform)

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

[DSelectMultiple](DSelectMultiple.md).[_render](DSelectMultiple.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8472

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

[DSelectMultiple](DSelectMultiple.md).[activate](DSelectMultiple.md#activate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L202)

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

[DSelectMultiple](DSelectMultiple.md).[addChild](DSelectMultiple.md#addchild)

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

[DSelectMultiple](DSelectMultiple.md).[addChildAt](DSelectMultiple.md#addchildat)

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

[DSelectMultiple](DSelectMultiple.md).[addListener](DSelectMultiple.md#addlistener)

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

[DSelectMultiple](DSelectMultiple.md).[addListener](DSelectMultiple.md#addlistener)

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

[DSelectMultiple](DSelectMultiple.md).[applyTitle](DSelectMultiple.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L136)

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

[DSelectMultiple](DSelectMultiple.md).[blur](DSelectMultiple.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[calculateBounds](../interfaces/DTableBodyCell.md#calculatebounds)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[calculateBounds](DSelectMultiple.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[close](DSelectMultiple.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L209)

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

[DSelectMultiple](DSelectMultiple.md).[containerUpdateTransform](DSelectMultiple.md#containerupdatetransform)

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

[DSelectMultiple](DSelectMultiple.md).[containsGlobalPoint](DSelectMultiple.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2098)

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

[DSelectMultiple](DSelectMultiple.md).[containsLocalPoint](DSelectMultiple.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2102)

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

[DSelectMultiple](DSelectMultiple.md).[containsPoint](DSelectMultiple.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[destroy](../interfaces/DTableBodyCell.md#destroy)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[destroy](DSelectMultiple.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L306)

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

[DSelectMultiple](DSelectMultiple.md).[disableTempParent](DSelectMultiple.md#disabletempparent)

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

[DSelectMultiple](DSelectMultiple.md).[displayObjectUpdateTransform](DSelectMultiple.md#displayobjectupdatetransform)

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

[DSelectMultiple](DSelectMultiple.md).[emit](DSelectMultiple.md#emit)

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

[DSelectMultiple](DSelectMultiple.md).[enableTempParent](DSelectMultiple.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[eventNames](../interfaces/DTableBodyCell.md#eventnames)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[eventNames](DSelectMultiple.md#eventnames)

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

[DSelectMultiple](DSelectMultiple.md).[focus](DSelectMultiple.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[focusOnClosest](../interfaces/DTableBodyCell.md#focusonclosest)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[focusOnClosest](DSelectMultiple.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

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

[DSelectMultiple](DSelectMultiple.md).[getBounds](DSelectMultiple.md#getbounds)

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

[DSelectMultiple](DSelectMultiple.md).[getChildAt](DSelectMultiple.md#getchildat)

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

[DSelectMultiple](DSelectMultiple.md).[getChildByName](DSelectMultiple.md#getchildbyname)

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

[DSelectMultiple](DSelectMultiple.md).[getChildIndex](DSelectMultiple.md#getchildindex)

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

[DSelectMultiple](DSelectMultiple.md).[getClearType](DSelectMultiple.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

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

[DSelectMultiple](DSelectMultiple.md).[getClippingRect](DSelectMultiple.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

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

[DSelectMultiple](DSelectMultiple.md).[getGlobalPosition](DSelectMultiple.md#getglobalposition)

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

[DSelectMultiple](DSelectMultiple.md).[getHeight](DSelectMultiple.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### getImage

▸ **getImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[getImage](DSelectMultiple.md#getimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L72)

___

### getLayouter

▸ **getLayouter**(): [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Returns

[`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[getLayouter](DSelectMultiple.md#getlayouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L105)

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

[DSelectMultiple](DSelectMultiple.md).[getLocalBounds](DSelectMultiple.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[getOverflowMask](DSelectMultiple.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L64)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getParentOfSize](../interfaces/DTableBodyCell.md#getparentofsize)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[getParentOfSize](DSelectMultiple.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getText

▸ **getText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<[`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>[]\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<[`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>[]\>

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[getText](DSelectMultiple.md#gettext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getThemeDefault](../interfaces/DTableBodyCell.md#getthemedefault)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[getThemeDefault](DSelectMultiple.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getType](../interfaces/DTableBodyCell.md#gettype)

#### Overrides

[DSelectMultiple](DSelectMultiple.md).[getType](DSelectMultiple.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L113)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getWidth](../interfaces/DTableBodyCell.md#getwidth)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[getWidth](DSelectMultiple.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getX](../interfaces/DTableBodyCell.md#getx)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[getX](DSelectMultiple.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getY](../interfaces/DTableBodyCell.md#gety)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[getY](DSelectMultiple.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasDirty](../interfaces/DTableBodyCell.md#hasdirty)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[hasDirty](DSelectMultiple.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

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

[DSelectMultiple](DSelectMultiple.md).[hasRefitableHeight](DSelectMultiple.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1831)

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

[DSelectMultiple](DSelectMultiple.md).[hasRefitableWidth](DSelectMultiple.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hide](../interfaces/DTableBodyCell.md#hide)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[hide](DSelectMultiple.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

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

[DSelectMultiple](DSelectMultiple.md).[init](DSelectMultiple.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L114)

___

### initOnPress

▸ **initOnPress**(): `void`

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[initOnPress](DSelectMultiple.md#initonpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L153)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[initReflowable](../interfaces/DTableBodyCell.md#initreflowable)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[initReflowable](DSelectMultiple.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isDirty](../interfaces/DTableBodyCell.md#isdirty)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[isDirty](DSelectMultiple.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

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

[DSelectMultiple](DSelectMultiple.md).[isEventTarget](DSelectMultiple.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHidden](../interfaces/DTableBodyCell.md#ishidden)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[isHidden](DSelectMultiple.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHierarchyDirty](../interfaces/DTableBodyCell.md#ishierarchydirty)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[isHierarchyDirty](DSelectMultiple.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

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

[DSelectMultiple](DSelectMultiple.md).[isRefitable](DSelectMultiple.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L107)

___

### isSameValues

▸ **isSameValues**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `VALUE`[] |
| `b` | `VALUE`[] |

#### Returns

`boolean`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[isSameValues](DSelectMultiple.md#issamevalues)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L152)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isShown](../interfaces/DTableBodyCell.md#isshown)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[isShown](DSelectMultiple.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1516)

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

[DSelectMultiple](DSelectMultiple.md).[listenerCount](DSelectMultiple.md#listenercount)

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

[DSelectMultiple](DSelectMultiple.md).[listeners](DSelectMultiple.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newImage

▸ **newImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[newImage](DSelectMultiple.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L76)

___

### newOverflowMask

▸ **newOverflowMask**(): ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Returns

``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[newOverflowMask](DSelectMultiple.md#newoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L73)

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

[DSelectMultiple](DSelectMultiple.md).[newPadding](DSelectMultiple.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newText

▸ **newText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<[`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>[]\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<[`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>[]\>

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[newText](DSelectMultiple.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L92)

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

[DSelectMultiple](DSelectMultiple.md).[off](DSelectMultiple.md#off)

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

[DSelectMultiple](DSelectMultiple.md).[on](DSelectMultiple.md#on)

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

[DSelectMultiple](DSelectMultiple.md).[on](DSelectMultiple.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

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

[DSelectMultiple](DSelectMultiple.md).[onActivate](DSelectMultiple.md#onactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L170)

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

[DSelectMultiple](DSelectMultiple.md).[onActivateKeyDown](DSelectMultiple.md#onactivatekeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L247)

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

[DSelectMultiple](DSelectMultiple.md).[onActivateKeyUp](DSelectMultiple.md#onactivatekeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L257)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onBlur](../interfaces/DTableBodyCell.md#onblur)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onBlur](DSelectMultiple.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

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

[DSelectMultiple](DSelectMultiple.md).[onChildBlur](DSelectMultiple.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

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

[DSelectMultiple](DSelectMultiple.md).[onChildFocus](DSelectMultiple.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildrenChange](../interfaces/DTableBodyCell.md#onchildrenchange)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onChildrenChange](DSelectMultiple.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

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

[DSelectMultiple](DSelectMultiple.md).[onClick](DSelectMultiple.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L186)

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

[DSelectMultiple](DSelectMultiple.md).[onDblClick](DSelectMultiple.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L192)

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

[DSelectMultiple](DSelectMultiple.md).[onDown](DSelectMultiple.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1979](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1979)

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

[DSelectMultiple](DSelectMultiple.md).[onDownThis](DSelectMultiple.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onFocus](../interfaces/DTableBodyCell.md#onfocus)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onFocus](DSelectMultiple.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onHierarchyDirty](../interfaces/DTableBodyCell.md#onhierarchydirty)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onHierarchyDirty](DSelectMultiple.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[DSelectMultiple](DSelectMultiple.md).[onInactivate](DSelectMultiple.md#oninactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L222)

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

[DSelectMultiple](DSelectMultiple.md).[onKeyDown](DSelectMultiple.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L155)

___

### onKeyDownArrowDown

▸ **onKeyDownArrowDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Overrides

[DSelectMultiple](DSelectMultiple.md).[onKeyDownArrowDown](DSelectMultiple.md#onkeydownarrowdown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L73)

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

[DSelectMultiple](DSelectMultiple.md).[onKeyUp](DSelectMultiple.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L278)

___

### onMenuClose

▸ **onMenuClose**(`menu?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu?` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onMenuClose](DSelectMultiple.md#onmenuclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L92)

___

### onMenuReplaced

▸ **onMenuReplaced**(`newMenu`, `oldMenu?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newMenu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |
| `oldMenu?` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onMenuReplaced](DSelectMultiple.md#onmenureplaced)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L106)

___

### onMenuSelect

▸ **onMenuSelect**(`value`, `item`, `menu`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `item` | [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\> |
| `menu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onMenuSelect](DSelectMultiple.md#onmenuselect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L89)

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

[DSelectMultiple](DSelectMultiple.md).[onMove](DSelectMultiple.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

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

[DSelectMultiple](DSelectMultiple.md).[onOut](DSelectMultiple.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2042](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2042)

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

[DSelectMultiple](DSelectMultiple.md).[onOver](DSelectMultiple.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2028](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2028)

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

[DSelectMultiple](DSelectMultiple.md).[onParentMove](DSelectMultiple.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1943](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1943)

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

[DSelectMultiple](DSelectMultiple.md).[onParentResize](DSelectMultiple.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onPress

▸ **onPress**(): `void`

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onPress](DSelectMultiple.md#onpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:298](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L298)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onRefit](../interfaces/DTableBodyCell.md#onrefit)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onRefit](DSelectMultiple.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onReflow](../interfaces/DTableBodyCell.md#onreflow)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onReflow](DSelectMultiple.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L100)

___

### onReflowTextAndImage

▸ **onReflowTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onReflowTextAndImage](DSelectMultiple.md#onreflowtextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L92)

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

[DSelectMultiple](DSelectMultiple.md).[onResize](DSelectMultiple.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

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

[DSelectMultiple](DSelectMultiple.md).[onScale](DSelectMultiple.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1236)

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

[DSelectMultiple](DSelectMultiple.md).[onShortcut](DSelectMultiple.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L134)

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

[DSelectMultiple](DSelectMultiple.md).[onSkew](DSelectMultiple.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

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

[DSelectMultiple](DSelectMultiple.md).[onStateChange](DSelectMultiple.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L286)

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

[DSelectMultiple](DSelectMultiple.md).[onToggleEnd](DSelectMultiple.md#ontoggleend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L239)

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

[DSelectMultiple](DSelectMultiple.md).[onToggleStart](DSelectMultiple.md#ontogglestart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L235)

___

### onUnpress

▸ **onUnpress**(): `void`

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[onUnpress](DSelectMultiple.md#onunpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:302](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L302)

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

[DSelectMultiple](DSelectMultiple.md).[onUp](DSelectMultiple.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1996](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1996)

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

[DSelectMultiple](DSelectMultiple.md).[onUpThis](DSelectMultiple.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

___

### onValueChange

▸ **onValueChange**(`newValues`, `oldValues`, `items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValues` | `VALUE`[] |
| `oldValues` | `VALUE`[] |
| `items` | [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>[] |

#### Returns

`void`

#### Overrides

[DSelectMultiple](DSelectMultiple.md).[onValueChange](DSelectMultiple.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L57)

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

[DSelectMultiple](DSelectMultiple.md).[onWheel](DSelectMultiple.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

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

[DSelectMultiple](DSelectMultiple.md).[once](DSelectMultiple.md#once)

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

[DSelectMultiple](DSelectMultiple.md).[once](DSelectMultiple.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[open](DSelectMultiple.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L126)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[reflow](../interfaces/DTableBodyCell.md#reflow)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[reflow](DSelectMultiple.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

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

[DSelectMultiple](DSelectMultiple.md).[removeAllListeners](DSelectMultiple.md#removealllisteners)

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

[DSelectMultiple](DSelectMultiple.md).[removeAllListeners](DSelectMultiple.md#removealllisteners)

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

[DSelectMultiple](DSelectMultiple.md).[removeChild](DSelectMultiple.md#removechild)

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

[DSelectMultiple](DSelectMultiple.md).[removeChildAt](DSelectMultiple.md#removechildat)

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

[DSelectMultiple](DSelectMultiple.md).[removeChildren](DSelectMultiple.md#removechildren)

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

[DSelectMultiple](DSelectMultiple.md).[removeListener](DSelectMultiple.md#removelistener)

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

[DSelectMultiple](DSelectMultiple.md).[removeListener](DSelectMultiple.md#removelistener)

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

[DSelectMultiple](DSelectMultiple.md).[render](DSelectMultiple.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

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

[DSelectMultiple](DSelectMultiple.md).[renderAdvanced](DSelectMultiple.md#renderadvanced)

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

[DSelectMultiple](DSelectMultiple.md).[resize](DSelectMultiple.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

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

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L93)

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

[DSelectMultiple](DSelectMultiple.md).[setChildIndex](DSelectMultiple.md#setchildindex)

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

[DSelectMultiple](DSelectMultiple.md).[setFocused](DSelectMultiple.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

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

[DSelectMultiple](DSelectMultiple.md).[setHeight](DSelectMultiple.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1402)

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

[DSelectMultiple](DSelectMultiple.md).[setParent](DSelectMultiple.md#setparent)

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

[DSelectMultiple](DSelectMultiple.md).[setTransform](DSelectMultiple.md#settransform)

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

[DSelectMultiple](DSelectMultiple.md).[setWidth](DSelectMultiple.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

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

[DSelectMultiple](DSelectMultiple.md).[setX](DSelectMultiple.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1268)

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

[DSelectMultiple](DSelectMultiple.md).[setY](DSelectMultiple.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[show](../interfaces/DTableBodyCell.md#show)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[show](DSelectMultiple.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[sortChildren](../interfaces/DTableBodyCell.md#sortchildren)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[sortChildren](DSelectMultiple.md#sortchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8427

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

[DSelectMultiple](DSelectMultiple.md).[swapChildren](DSelectMultiple.md#swapchildren)

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

[DSelectMultiple](DSelectMultiple.md).[toCursor](DSelectMultiple.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toDirty](../interfaces/DTableBodyCell.md#todirty)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[toDirty](DSelectMultiple.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1534)

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

[DSelectMultiple](DSelectMultiple.md).[toGlobal](DSelectMultiple.md#toglobal)

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

[DSelectMultiple](DSelectMultiple.md).[toHasDirty](DSelectMultiple.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toHierarchyDirty](../interfaces/DTableBodyCell.md#tohierarchydirty)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[toHierarchyDirty](DSelectMultiple.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

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

[DSelectMultiple](DSelectMultiple.md).[toLocal](DSelectMultiple.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toMenu

▸ **toMenu**(`theme`, `options?`): [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[toMenu](DSelectMultiple.md#tomenu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L105)

___

### toMenuOptions

▸ **toMenuOptions**(`theme`, `options?`): [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\> |

#### Returns

[`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[toMenuOptions](DSelectMultiple.md#tomenuoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L113)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHasDirty](../interfaces/DTableBodyCell.md#toparenthasdirty)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[toParentHasDirty](DSelectMultiple.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHierarchyDirty](../interfaces/DTableBodyCell.md#toparenthierarchydirty)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[toParentHierarchyDirty](DSelectMultiple.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentResized](../interfaces/DTableBodyCell.md#toparentresized)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[toParentResized](DSelectMultiple.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[toggle](DSelectMultiple.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L226)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[unset](../interfaces/DTableBodyCell.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-multiple.ts#L108)

___

### updateMenuItems

▸ **updateMenuItems**(`menu`, `oldValues`, `addedValue?`, `removedValue?`, `newValues?`, `newItems?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |
| `oldValues` | `VALUE`[] |
| `addedValue?` | `VALUE` |
| `removedValue?` | `VALUE` |
| `newValues?` | `VALUE`[] |
| `newItems?` | [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>[] |

#### Returns

`void`

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[updateMenuItems](DSelectMultiple.md#updatemenuitems)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L163)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[updateTransform](../interfaces/DTableBodyCell.md#updatetransform)

#### Inherited from

[DSelectMultiple](DSelectMultiple.md).[updateTransform](DSelectMultiple.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2069](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2069)

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

[DSelectMultiple](DSelectMultiple.md).[mixin](DSelectMultiple.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
