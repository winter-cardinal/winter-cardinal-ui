[Winter Cardinal UI - v0.414.0](../index.md) / DTableBodyCellSelectMenu

# Class: DTableBodyCellSelectMenu\<ROW, VALUE, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellSelectMenu`](../interfaces/DThemeTableBodyCellSelectMenu.md)\<`VALUE`\> = [`DThemeTableBodyCellSelectMenu`](../interfaces/DThemeTableBodyCellSelectMenu.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellSelectMenuOptions`](../interfaces/DTableBodyCellSelectMenuOptions.md)\<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellSelectMenuOptions`](../interfaces/DTableBodyCellSelectMenuOptions.md)\<`ROW`, `VALUE`, `THEME`\> |

## Hierarchy

- [`DSelect`](DSelect.md)\<`VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DTableBodyCellSelectMenu`**

## Implements

- [`DTableBodyCell`](../interfaces/DTableBodyCell.md)\<`ROW`, `VALUE` \| ``null``\>

## Table of contents

### Constructors

- [constructor](DTableBodyCellSelectMenu.md#constructor)

### Properties

- [\_accessibleActive](DTableBodyCellSelectMenu.md#_accessibleactive)
- [\_accessibleDiv](DTableBodyCellSelectMenu.md#_accessiblediv)
- [\_auto](DTableBodyCellSelectMenu.md#_auto)
- [\_background](DTableBodyCellSelectMenu.md#_background)
- [\_border](DTableBodyCellSelectMenu.md#_border)
- [\_bounds](DTableBodyCellSelectMenu.md#_bounds)
- [\_boundsID](DTableBodyCellSelectMenu.md#_boundsid)
- [\_boundsRect](DTableBodyCellSelectMenu.md#_boundsrect)
- [\_clearType](DTableBodyCellSelectMenu.md#_cleartype)
- [\_column](DTableBodyCellSelectMenu.md#_column)
- [\_columnIndex](DTableBodyCellSelectMenu.md#_columnindex)
- [\_corner](DTableBodyCellSelectMenu.md#_corner)
- [\_cursor](DTableBodyCellSelectMenu.md#_cursor)
- [\_destroyed](DTableBodyCellSelectMenu.md#_destroyed)
- [\_enabledFilters](DTableBodyCellSelectMenu.md#_enabledfilters)
- [\_image](DTableBodyCellSelectMenu.md#_image)
- [\_isGrouped](DTableBodyCellSelectMenu.md#_isgrouped)
- [\_isToggle](DTableBodyCellSelectMenu.md#_istoggle)
- [\_lastDownPoint](DTableBodyCellSelectMenu.md#_lastdownpoint)
- [\_lastSortedIndex](DTableBodyCellSelectMenu.md#_lastsortedindex)
- [\_localBounds](DTableBodyCellSelectMenu.md#_localbounds)
- [\_localBoundsRect](DTableBodyCellSelectMenu.md#_localboundsrect)
- [\_mask](DTableBodyCellSelectMenu.md#_mask)
- [\_menu](DTableBodyCellSelectMenu.md#_menu)
- [\_onChange](DTableBodyCellSelectMenu.md#_onchange)
- [\_onMenuCloseBound](DTableBodyCellSelectMenu.md#_onmenuclosebound)
- [\_onMenuSelectBound](DTableBodyCellSelectMenu.md#_onmenuselectbound)
- [\_options](DTableBodyCellSelectMenu.md#_options)
- [\_outline](DTableBodyCellSelectMenu.md#_outline)
- [\_overflowMask](DTableBodyCellSelectMenu.md#_overflowmask)
- [\_padding](DTableBodyCellSelectMenu.md#_padding)
- [\_reflowable](DTableBodyCellSelectMenu.md#_reflowable)
- [\_row](DTableBodyCellSelectMenu.md#_row)
- [\_rowIndex](DTableBodyCellSelectMenu.md#_rowindex)
- [\_shortcuts](DTableBodyCellSelectMenu.md#_shortcuts)
- [\_snippet](DTableBodyCellSelectMenu.md#_snippet)
- [\_tempDisplayObjectParent](DTableBodyCellSelectMenu.md#_tempdisplayobjectparent)
- [\_text](DTableBodyCellSelectMenu.md#_text)
- [\_title](DTableBodyCellSelectMenu.md#_title)
- [\_value](DTableBodyCellSelectMenu.md#_value)
- [\_when](DTableBodyCellSelectMenu.md#_when)
- [\_zIndex](DTableBodyCellSelectMenu.md#_zindex)
- [accessible](DTableBodyCellSelectMenu.md#accessible)
- [accessibleChildren](DTableBodyCellSelectMenu.md#accessiblechildren)
- [accessibleHint](DTableBodyCellSelectMenu.md#accessiblehint)
- [accessiblePointerEvents](DTableBodyCellSelectMenu.md#accessiblepointerevents)
- [accessibleTitle](DTableBodyCellSelectMenu.md#accessibletitle)
- [accessibleType](DTableBodyCellSelectMenu.md#accessibletype)
- [alpha](DTableBodyCellSelectMenu.md#alpha)
- [angle](DTableBodyCellSelectMenu.md#angle)
- [buttonMode](DTableBodyCellSelectMenu.md#buttonmode)
- [cacheAsBitmap](DTableBodyCellSelectMenu.md#cacheasbitmap)
- [children](DTableBodyCellSelectMenu.md#children)
- [cursor](DTableBodyCellSelectMenu.md#cursor)
- [filterArea](DTableBodyCellSelectMenu.md#filterarea)
- [filters](DTableBodyCellSelectMenu.md#filters)
- [hitArea](DTableBodyCellSelectMenu.md#hitarea)
- [interactive](DTableBodyCellSelectMenu.md#interactive)
- [interactiveChildren](DTableBodyCellSelectMenu.md#interactivechildren)
- [isMask](DTableBodyCellSelectMenu.md#ismask)
- [isSprite](DTableBodyCellSelectMenu.md#issprite)
- [localTransform](DTableBodyCellSelectMenu.md#localtransform)
- [mask](DTableBodyCellSelectMenu.md#mask)
- [name](DTableBodyCellSelectMenu.md#name)
- [parent](DTableBodyCellSelectMenu.md#parent)
- [pivot](DTableBodyCellSelectMenu.md#pivot)
- [renderable](DTableBodyCellSelectMenu.md#renderable)
- [rotation](DTableBodyCellSelectMenu.md#rotation)
- [sortDirty](DTableBodyCellSelectMenu.md#sortdirty)
- [sortableChildren](DTableBodyCellSelectMenu.md#sortablechildren)
- [transform](DTableBodyCellSelectMenu.md#transform)
- [visible](DTableBodyCellSelectMenu.md#visible)
- [worldAlpha](DTableBodyCellSelectMenu.md#worldalpha)
- [worldTransform](DTableBodyCellSelectMenu.md#worldtransform)
- [worldVisible](DTableBodyCellSelectMenu.md#worldvisible)
- [zIndex](DTableBodyCellSelectMenu.md#zindex)
- [LAYOUTER](DTableBodyCellSelectMenu.md#layouter)
- [WORK\_CONTAINS\_POINT](DTableBodyCellSelectMenu.md#work_contains_point)

### Accessors

- [background](DTableBodyCellSelectMenu.md#background)
- [border](DTableBodyCellSelectMenu.md#border)
- [column](DTableBodyCellSelectMenu.md#column)
- [columnIndex](DTableBodyCellSelectMenu.md#columnindex)
- [corner](DTableBodyCellSelectMenu.md#corner)
- [height](DTableBodyCellSelectMenu.md#height)
- [image](DTableBodyCellSelectMenu.md#image)
- [isGrouped](DTableBodyCellSelectMenu.md#isgrouped)
- [isToggle](DTableBodyCellSelectMenu.md#istoggle)
- [menu](DTableBodyCellSelectMenu.md#menu)
- [options](DTableBodyCellSelectMenu.md#options)
- [outline](DTableBodyCellSelectMenu.md#outline)
- [padding](DTableBodyCellSelectMenu.md#padding)
- [position](DTableBodyCellSelectMenu.md#position)
- [reflowable](DTableBodyCellSelectMenu.md#reflowable)
- [row](DTableBodyCellSelectMenu.md#row)
- [rowIndex](DTableBodyCellSelectMenu.md#rowindex)
- [scale](DTableBodyCellSelectMenu.md#scale)
- [shadow](DTableBodyCellSelectMenu.md#shadow)
- [skew](DTableBodyCellSelectMenu.md#skew)
- [snippet](DTableBodyCellSelectMenu.md#snippet)
- [state](DTableBodyCellSelectMenu.md#state)
- [text](DTableBodyCellSelectMenu.md#text)
- [theme](DTableBodyCellSelectMenu.md#theme)
- [title](DTableBodyCellSelectMenu.md#title)
- [type](DTableBodyCellSelectMenu.md#type)
- [unsafe](DTableBodyCellSelectMenu.md#unsafe)
- [value](DTableBodyCellSelectMenu.md#value)
- [weight](DTableBodyCellSelectMenu.md#weight)
- [width](DTableBodyCellSelectMenu.md#width)
- [x](DTableBodyCellSelectMenu.md#x)
- [y](DTableBodyCellSelectMenu.md#y)

### Methods

- [\_calculateBounds](DTableBodyCellSelectMenu.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTableBodyCellSelectMenu.md#_recursivepostupdatetransform)
- [\_render](DTableBodyCellSelectMenu.md#_render)
- [activate](DTableBodyCellSelectMenu.md#activate)
- [addChild](DTableBodyCellSelectMenu.md#addchild)
- [addChildAt](DTableBodyCellSelectMenu.md#addchildat)
- [addListener](DTableBodyCellSelectMenu.md#addlistener)
- [applyTitle](DTableBodyCellSelectMenu.md#applytitle)
- [blur](DTableBodyCellSelectMenu.md#blur)
- [calculateBounds](DTableBodyCellSelectMenu.md#calculatebounds)
- [close](DTableBodyCellSelectMenu.md#close)
- [containerUpdateTransform](DTableBodyCellSelectMenu.md#containerupdatetransform)
- [containsGlobalPoint](DTableBodyCellSelectMenu.md#containsglobalpoint)
- [containsLocalPoint](DTableBodyCellSelectMenu.md#containslocalpoint)
- [containsPoint](DTableBodyCellSelectMenu.md#containspoint)
- [destroy](DTableBodyCellSelectMenu.md#destroy)
- [disableTempParent](DTableBodyCellSelectMenu.md#disabletempparent)
- [displayObjectUpdateTransform](DTableBodyCellSelectMenu.md#displayobjectupdatetransform)
- [emit](DTableBodyCellSelectMenu.md#emit)
- [enableTempParent](DTableBodyCellSelectMenu.md#enabletempparent)
- [eventNames](DTableBodyCellSelectMenu.md#eventnames)
- [findMenuItem](DTableBodyCellSelectMenu.md#findmenuitem)
- [focus](DTableBodyCellSelectMenu.md#focus)
- [focusOnClosest](DTableBodyCellSelectMenu.md#focusonclosest)
- [getBounds](DTableBodyCellSelectMenu.md#getbounds)
- [getChildAt](DTableBodyCellSelectMenu.md#getchildat)
- [getChildByName](DTableBodyCellSelectMenu.md#getchildbyname)
- [getChildIndex](DTableBodyCellSelectMenu.md#getchildindex)
- [getClearType](DTableBodyCellSelectMenu.md#getcleartype)
- [getClippingRect](DTableBodyCellSelectMenu.md#getclippingrect)
- [getGlobalPosition](DTableBodyCellSelectMenu.md#getglobalposition)
- [getHeight](DTableBodyCellSelectMenu.md#getheight)
- [getImage](DTableBodyCellSelectMenu.md#getimage)
- [getLayouter](DTableBodyCellSelectMenu.md#getlayouter)
- [getLocalBounds](DTableBodyCellSelectMenu.md#getlocalbounds)
- [getOverflowMask](DTableBodyCellSelectMenu.md#getoverflowmask)
- [getParentOfSize](DTableBodyCellSelectMenu.md#getparentofsize)
- [getText](DTableBodyCellSelectMenu.md#gettext)
- [getThemeDefault](DTableBodyCellSelectMenu.md#getthemedefault)
- [getType](DTableBodyCellSelectMenu.md#gettype)
- [getWidth](DTableBodyCellSelectMenu.md#getwidth)
- [getX](DTableBodyCellSelectMenu.md#getx)
- [getY](DTableBodyCellSelectMenu.md#gety)
- [hasDirty](DTableBodyCellSelectMenu.md#hasdirty)
- [hasRefitableHeight](DTableBodyCellSelectMenu.md#hasrefitableheight)
- [hasRefitableWidth](DTableBodyCellSelectMenu.md#hasrefitablewidth)
- [hide](DTableBodyCellSelectMenu.md#hide)
- [init](DTableBodyCellSelectMenu.md#init)
- [initOnPress](DTableBodyCellSelectMenu.md#initonpress)
- [initReflowable](DTableBodyCellSelectMenu.md#initreflowable)
- [isDirty](DTableBodyCellSelectMenu.md#isdirty)
- [isEventTarget](DTableBodyCellSelectMenu.md#iseventtarget)
- [isHidden](DTableBodyCellSelectMenu.md#ishidden)
- [isHierarchyDirty](DTableBodyCellSelectMenu.md#ishierarchydirty)
- [isRefitable](DTableBodyCellSelectMenu.md#isrefitable)
- [isShown](DTableBodyCellSelectMenu.md#isshown)
- [listenerCount](DTableBodyCellSelectMenu.md#listenercount)
- [listeners](DTableBodyCellSelectMenu.md#listeners)
- [newImage](DTableBodyCellSelectMenu.md#newimage)
- [newOverflowMask](DTableBodyCellSelectMenu.md#newoverflowmask)
- [newPadding](DTableBodyCellSelectMenu.md#newpadding)
- [newText](DTableBodyCellSelectMenu.md#newtext)
- [off](DTableBodyCellSelectMenu.md#off)
- [on](DTableBodyCellSelectMenu.md#on)
- [onActivate](DTableBodyCellSelectMenu.md#onactivate)
- [onActivateKeyDown](DTableBodyCellSelectMenu.md#onactivatekeydown)
- [onActivateKeyUp](DTableBodyCellSelectMenu.md#onactivatekeyup)
- [onBlur](DTableBodyCellSelectMenu.md#onblur)
- [onChildBlur](DTableBodyCellSelectMenu.md#onchildblur)
- [onChildFocus](DTableBodyCellSelectMenu.md#onchildfocus)
- [onChildrenChange](DTableBodyCellSelectMenu.md#onchildrenchange)
- [onClick](DTableBodyCellSelectMenu.md#onclick)
- [onDblClick](DTableBodyCellSelectMenu.md#ondblclick)
- [onDown](DTableBodyCellSelectMenu.md#ondown)
- [onDownThis](DTableBodyCellSelectMenu.md#ondownthis)
- [onFocus](DTableBodyCellSelectMenu.md#onfocus)
- [onHierarchyDirty](DTableBodyCellSelectMenu.md#onhierarchydirty)
- [onInactivate](DTableBodyCellSelectMenu.md#oninactivate)
- [onKeyDown](DTableBodyCellSelectMenu.md#onkeydown)
- [onKeyDownArrowDown](DTableBodyCellSelectMenu.md#onkeydownarrowdown)
- [onKeyUp](DTableBodyCellSelectMenu.md#onkeyup)
- [onMenuClose](DTableBodyCellSelectMenu.md#onmenuclose)
- [onMenuReplaced](DTableBodyCellSelectMenu.md#onmenureplaced)
- [onMenuSelect](DTableBodyCellSelectMenu.md#onmenuselect)
- [onMove](DTableBodyCellSelectMenu.md#onmove)
- [onOut](DTableBodyCellSelectMenu.md#onout)
- [onOver](DTableBodyCellSelectMenu.md#onover)
- [onParentMove](DTableBodyCellSelectMenu.md#onparentmove)
- [onParentResize](DTableBodyCellSelectMenu.md#onparentresize)
- [onPress](DTableBodyCellSelectMenu.md#onpress)
- [onRefit](DTableBodyCellSelectMenu.md#onrefit)
- [onReflow](DTableBodyCellSelectMenu.md#onreflow)
- [onReflowTextAndImage](DTableBodyCellSelectMenu.md#onreflowtextandimage)
- [onResize](DTableBodyCellSelectMenu.md#onresize)
- [onScale](DTableBodyCellSelectMenu.md#onscale)
- [onShortcut](DTableBodyCellSelectMenu.md#onshortcut)
- [onSkew](DTableBodyCellSelectMenu.md#onskew)
- [onStateChange](DTableBodyCellSelectMenu.md#onstatechange)
- [onToggleEnd](DTableBodyCellSelectMenu.md#ontoggleend)
- [onToggleStart](DTableBodyCellSelectMenu.md#ontogglestart)
- [onUnpress](DTableBodyCellSelectMenu.md#onunpress)
- [onUp](DTableBodyCellSelectMenu.md#onup)
- [onUpThis](DTableBodyCellSelectMenu.md#onupthis)
- [onValueChange](DTableBodyCellSelectMenu.md#onvaluechange)
- [onWheel](DTableBodyCellSelectMenu.md#onwheel)
- [once](DTableBodyCellSelectMenu.md#once)
- [open](DTableBodyCellSelectMenu.md#open)
- [reflow](DTableBodyCellSelectMenu.md#reflow)
- [removeAllListeners](DTableBodyCellSelectMenu.md#removealllisteners)
- [removeChild](DTableBodyCellSelectMenu.md#removechild)
- [removeChildAt](DTableBodyCellSelectMenu.md#removechildat)
- [removeChildren](DTableBodyCellSelectMenu.md#removechildren)
- [removeListener](DTableBodyCellSelectMenu.md#removelistener)
- [render](DTableBodyCellSelectMenu.md#render)
- [renderAdvanced](DTableBodyCellSelectMenu.md#renderadvanced)
- [resize](DTableBodyCellSelectMenu.md#resize)
- [set](DTableBodyCellSelectMenu.md#set)
- [setChildIndex](DTableBodyCellSelectMenu.md#setchildindex)
- [setFocused](DTableBodyCellSelectMenu.md#setfocused)
- [setHeight](DTableBodyCellSelectMenu.md#setheight)
- [setParent](DTableBodyCellSelectMenu.md#setparent)
- [setTransform](DTableBodyCellSelectMenu.md#settransform)
- [setWidth](DTableBodyCellSelectMenu.md#setwidth)
- [setX](DTableBodyCellSelectMenu.md#setx)
- [setY](DTableBodyCellSelectMenu.md#sety)
- [show](DTableBodyCellSelectMenu.md#show)
- [sortChildren](DTableBodyCellSelectMenu.md#sortchildren)
- [swapChildren](DTableBodyCellSelectMenu.md#swapchildren)
- [toCursor](DTableBodyCellSelectMenu.md#tocursor)
- [toDirty](DTableBodyCellSelectMenu.md#todirty)
- [toGlobal](DTableBodyCellSelectMenu.md#toglobal)
- [toHasDirty](DTableBodyCellSelectMenu.md#tohasdirty)
- [toHierarchyDirty](DTableBodyCellSelectMenu.md#tohierarchydirty)
- [toLocal](DTableBodyCellSelectMenu.md#tolocal)
- [toMenu](DTableBodyCellSelectMenu.md#tomenu)
- [toMenuOptions](DTableBodyCellSelectMenu.md#tomenuoptions)
- [toParentHasDirty](DTableBodyCellSelectMenu.md#toparenthasdirty)
- [toParentHierarchyDirty](DTableBodyCellSelectMenu.md#toparenthierarchydirty)
- [toParentResized](DTableBodyCellSelectMenu.md#toparentresized)
- [toggle](DTableBodyCellSelectMenu.md#toggle)
- [unset](DTableBodyCellSelectMenu.md#unset)
- [updateTransform](DTableBodyCellSelectMenu.md#updatetransform)
- [mixin](DTableBodyCellSelectMenu.md#mixin)

## Constructors

### constructor

• **new DTableBodyCellSelectMenu**\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>(`columnIndex`, `column`, `onChange`, `options?`): [`DTableBodyCellSelectMenu`](DTableBodyCellSelectMenu.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellSelectMenu`](../interfaces/DThemeTableBodyCellSelectMenu.md)\<`VALUE`\> = [`DThemeTableBodyCellSelectMenu`](../interfaces/DThemeTableBodyCellSelectMenu.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellSelectMenuOptions`](../interfaces/DTableBodyCellSelectMenuOptions.md)\<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellSelectMenuOptions`](../interfaces/DTableBodyCellSelectMenuOptions.md)\<`ROW`, `VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<``null`` \| `VALUE`\>\> |
| `onChange` | [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, ``null`` \| `VALUE`\> |
| `options?` | `OPTIONS` |

#### Returns

[`DTableBodyCellSelectMenu`](DTableBodyCellSelectMenu.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Overrides

[DSelect](DSelect.md).[constructor](DSelect.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L40)

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

[DSelect](DSelect.md).[_accessibleActive](DSelect.md#_accessibleactive)

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

[DSelect](DSelect.md).[_accessibleDiv](DSelect.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_auto](../interfaces/DTableBodyCell.md#_auto)

#### Inherited from

[DSelect](DSelect.md).[_auto](DSelect.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_background](../interfaces/DTableBodyCell.md#_background)

#### Inherited from

[DSelect](DSelect.md).[_background](DSelect.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_border](../interfaces/DTableBodyCell.md#_border)

#### Inherited from

[DSelect](DSelect.md).[_border](DSelect.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_bounds](../interfaces/DTableBodyCell.md#_bounds)

#### Inherited from

[DSelect](DSelect.md).[_bounds](DSelect.md#_bounds)

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

[DSelect](DSelect.md).[_boundsID](DSelect.md#_boundsid)

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

[DSelect](DSelect.md).[_boundsRect](DSelect.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_clearType](../interfaces/DTableBodyCell.md#_cleartype)

#### Inherited from

[DSelect](DSelect.md).[_clearType](DSelect.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_column

• `Protected` **\_column**: [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<``null`` \| `VALUE`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L37)

___

### \_columnIndex

• `Protected` **\_columnIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L36)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_corner](../interfaces/DTableBodyCell.md#_corner)

#### Inherited from

[DSelect](DSelect.md).[_corner](DSelect.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_cursor](../interfaces/DTableBodyCell.md#_cursor)

#### Inherited from

[DSelect](DSelect.md).[_cursor](DSelect.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_destroyed](../interfaces/DTableBodyCell.md#_destroyed)

#### Inherited from

[DSelect](DSelect.md).[_destroyed](DSelect.md#_destroyed)

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

[DSelect](DSelect.md).[_enabledFilters](DSelect.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_image

• `Protected` `Optional` **\_image**: [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DSelect](DSelect.md).[_image](DSelect.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L61)

___

### \_isGrouped

• `Protected` `Optional` **\_isGrouped**: `boolean`

#### Inherited from

[DSelect](DSelect.md).[_isGrouped](DSelect.md#_isgrouped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L111)

___

### \_isToggle

• `Protected` `Optional` **\_isToggle**: `boolean`

#### Inherited from

[DSelect](DSelect.md).[_isToggle](DSelect.md#_istoggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L110)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_lastDownPoint](../interfaces/DTableBodyCell.md#_lastdownpoint)

#### Inherited from

[DSelect](DSelect.md).[_lastDownPoint](DSelect.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

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

[DSelect](DSelect.md).[_lastSortedIndex](DSelect.md#_lastsortedindex)

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

[DSelect](DSelect.md).[_localBounds](DSelect.md#_localbounds)

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

[DSelect](DSelect.md).[_localBoundsRect](DSelect.md#_localboundsrect)

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

[DSelect](DSelect.md).[_mask](DSelect.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_menu

• `Protected` `Optional` **\_menu**: [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Inherited from

[DSelect](DSelect.md).[_menu](DSelect.md#_menu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L80)

___

### \_onChange

• `Protected` **\_onChange**: [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, ``null`` \| `VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L38)

___

### \_onMenuCloseBound

• `Protected` `Optional` **\_onMenuCloseBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[DSelect](DSelect.md).[_onMenuCloseBound](DSelect.md#_onmenuclosebound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L86)

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

[DSelect](DSelect.md).[_onMenuSelectBound](DSelect.md#_onmenuselectbound)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L81)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_options](../interfaces/DTableBodyCell.md#_options)

#### Inherited from

[DSelect](DSelect.md).[_options](DSelect.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_outline](../interfaces/DTableBodyCell.md#_outline)

#### Inherited from

[DSelect](DSelect.md).[_outline](DSelect.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DSelect](DSelect.md).[_overflowMask](DSelect.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L57)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_padding](../interfaces/DTableBodyCell.md#_padding)

#### Inherited from

[DSelect](DSelect.md).[_padding](DSelect.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_reflowable](../interfaces/DTableBodyCell.md#_reflowable)

#### Inherited from

[DSelect](DSelect.md).[_reflowable](DSelect.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_row

• `Protected` `Optional` **\_row**: `ROW`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L34)

___

### \_rowIndex

• `Protected` **\_rowIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L35)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_shortcuts](../interfaces/DTableBodyCell.md#_shortcuts)

#### Inherited from

[DSelect](DSelect.md).[_shortcuts](DSelect.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_snippet](../interfaces/DTableBodyCell.md#_snippet)

#### Inherited from

[DSelect](DSelect.md).[_snippet](DSelect.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_tempDisplayObjectParent](../interfaces/DTableBodyCell.md#_tempdisplayobjectparent)

#### Inherited from

[DSelect](DSelect.md).[_tempDisplayObjectParent](DSelect.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_text

• `Protected` `Optional` **\_text**: [`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>\>

#### Inherited from

[DSelect](DSelect.md).[_text](DSelect.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L56)

___

### \_title

• `Protected` **\_title**: `string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_title](../interfaces/DTableBodyCell.md#_title)

#### Inherited from

[DSelect](DSelect.md).[_title](DSelect.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_value

• `Protected` **\_value**: ``null`` \| `VALUE`

#### Inherited from

[DSelect](DSelect.md).[_value](DSelect.md#_value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-select.ts#L75)

___

### \_when

• `Protected` `Optional` **\_when**: [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

#### Inherited from

[DSelect](DSelect.md).[_when](DSelect.md#_when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L112)

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

[DSelect](DSelect.md).[_zIndex](DSelect.md#_zindex)

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

[DSelect](DSelect.md).[accessible](DSelect.md#accessible)

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

[DSelect](DSelect.md).[accessibleChildren](DSelect.md#accessiblechildren)

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

[DSelect](DSelect.md).[accessibleHint](DSelect.md#accessiblehint)

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

[DSelect](DSelect.md).[accessiblePointerEvents](DSelect.md#accessiblepointerevents)

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

[DSelect](DSelect.md).[accessibleTitle](DSelect.md#accessibletitle)

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

[DSelect](DSelect.md).[accessibleType](DSelect.md#accessibletype)

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

[DSelect](DSelect.md).[alpha](DSelect.md#alpha)

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

[DSelect](DSelect.md).[angle](DSelect.md#angle)

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

[DSelect](DSelect.md).[buttonMode](DSelect.md#buttonmode)

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

[DSelect](DSelect.md).[cacheAsBitmap](DSelect.md#cacheasbitmap)

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

[DSelect](DSelect.md).[children](DSelect.md#children)

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

[DSelect](DSelect.md).[cursor](DSelect.md#cursor)

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

[DSelect](DSelect.md).[filterArea](DSelect.md#filterarea)

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

[DSelect](DSelect.md).[filters](DSelect.md#filters)

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

[DSelect](DSelect.md).[hitArea](DSelect.md#hitarea)

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

[DSelect](DSelect.md).[interactive](DSelect.md#interactive)

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

[DSelect](DSelect.md).[interactiveChildren](DSelect.md#interactivechildren)

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

[DSelect](DSelect.md).[isMask](DSelect.md#ismask)

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

[DSelect](DSelect.md).[isSprite](DSelect.md#issprite)

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

[DSelect](DSelect.md).[localTransform](DSelect.md#localtransform)

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

[DSelect](DSelect.md).[mask](DSelect.md#mask)

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

[DSelect](DSelect.md).[name](DSelect.md#name)

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

[DSelect](DSelect.md).[parent](DSelect.md#parent)

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

[DSelect](DSelect.md).[pivot](DSelect.md#pivot)

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

[DSelect](DSelect.md).[renderable](DSelect.md#renderable)

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

[DSelect](DSelect.md).[rotation](DSelect.md#rotation)

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

[DSelect](DSelect.md).[sortDirty](DSelect.md#sortdirty)

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

[DSelect](DSelect.md).[sortableChildren](DSelect.md#sortablechildren)

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

[DSelect](DSelect.md).[transform](DSelect.md#transform)

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

[DSelect](DSelect.md).[visible](DSelect.md#visible)

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

[DSelect](DSelect.md).[worldAlpha](DSelect.md#worldalpha)

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

[DSelect](DSelect.md).[worldTransform](DSelect.md#worldtransform)

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

[DSelect](DSelect.md).[worldVisible](DSelect.md#worldvisible)

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

[DSelect](DSelect.md).[zIndex](DSelect.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DSelect](DSelect.md).[LAYOUTER](DSelect.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L55)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DSelect](DSelect.md).[WORK_CONTAINS_POINT](DSelect.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

DTableBodyCell.background

#### Inherited from

DSelect.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

DTableBodyCell.border

#### Inherited from

DSelect.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### column

• `get` **column**(): [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<``null`` \| `VALUE`\>\>

A column.

#### Returns

[`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<``null`` \| `VALUE`\>\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[column](../interfaces/DTableBodyCell.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L86)

___

### columnIndex

• `get` **columnIndex**(): `number`

A column index.

#### Returns

`number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[columnIndex](../interfaces/DTableBodyCell.md#columnindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L82)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Implementation of

DTableBodyCell.corner

#### Inherited from

DSelect.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.height

#### Inherited from

DSelect.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

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

DSelect.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### image

• `get` **image**(): [`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Returns

[`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Inherited from

DSelect.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L68)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DSelect.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L80)

___

### isGrouped

• `get` **isGrouped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DSelect.isGrouped

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L145)

• `set` **isGrouped**(`isGrouped`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isGrouped` | `boolean` |

#### Returns

`void`

#### Inherited from

DSelect.isGrouped

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L149)

___

### isToggle

• `get` **isToggle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DSelect.isToggle

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L141)

___

### menu

• `get` **menu**(): [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Returns

[`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Inherited from

DSelect.menu

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L128)

• `set` **menu**(`newMenu`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newMenu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Inherited from

DSelect.menu

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L137)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Implementation of

DTableBodyCell.options

#### Inherited from

DSelect.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Implementation of

DTableBodyCell.outline

#### Inherited from

DSelect.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Implementation of

DTableBodyCell.padding

#### Inherited from

DSelect.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.position

#### Inherited from

DSelect.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

DTableBodyCell.reflowable

#### Inherited from

DSelect.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

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

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L74)

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

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L78)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.scale

#### Inherited from

DSelect.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

DTableBodyCell.shadow

#### Inherited from

DSelect.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

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

DSelect.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.skew

#### Inherited from

DSelect.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

DTableBodyCell.snippet

#### Inherited from

DSelect.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

DTableBodyCell.state

#### Inherited from

DSelect.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### text

• `get` **text**(): [`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Returns

[`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Inherited from

DSelect.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L84)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DSelect.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L96)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Implementation of

DTableBodyCell.theme

#### Inherited from

DSelect.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1694](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1694)

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

DSelect.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.title

#### Inherited from

DSelect.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1487)

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

DSelect.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.type

#### Inherited from

DSelect.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Implementation of

DTableBodyCell.unsafe

#### Inherited from

DSelect.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### value

• `get` **value**(): ``null`` \| `VALUE`

Returns a selected value or null.

#### Returns

``null`` \| `VALUE`

#### Inherited from

DSelect.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-select.ts#L142)

• `set` **value**(`value`): `void`

Sets to the specified value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `VALUE` |

#### Returns

`void`

#### Inherited from

DSelect.value

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-select.ts#L149)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.weight

#### Inherited from

DSelect.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

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

DSelect.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.width

#### Inherited from

DSelect.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

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

DSelect.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.x

#### Inherited from

DSelect.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

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

DSelect.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.y

#### Inherited from

DSelect.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

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

DSelect.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_calculateBounds](../interfaces/DTableBodyCell.md#_calculatebounds)

#### Inherited from

[DSelect](DSelect.md).[_calculateBounds](DSelect.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2084](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2084)

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

[DSelect](DSelect.md).[_recursivePostUpdateTransform](DSelect.md#_recursivepostupdatetransform)

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

[DSelect](DSelect.md).[_render](DSelect.md#_render)

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

[DSelect](DSelect.md).[activate](DSelect.md#activate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L202)

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

[DSelect](DSelect.md).[addChild](DSelect.md#addchild)

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

[DSelect](DSelect.md).[addChildAt](DSelect.md#addchildat)

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

[DSelect](DSelect.md).[addListener](DSelect.md#addlistener)

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

[DSelect](DSelect.md).[addListener](DSelect.md#addlistener)

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

[DSelect](DSelect.md).[applyTitle](DSelect.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L136)

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

[DSelect](DSelect.md).[blur](DSelect.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[calculateBounds](../interfaces/DTableBodyCell.md#calculatebounds)

#### Inherited from

[DSelect](DSelect.md).[calculateBounds](DSelect.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DSelect](DSelect.md).[close](DSelect.md#close)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L209)

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

[DSelect](DSelect.md).[containerUpdateTransform](DSelect.md#containerupdatetransform)

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

[DSelect](DSelect.md).[containsGlobalPoint](DSelect.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2098)

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

[DSelect](DSelect.md).[containsLocalPoint](DSelect.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2102)

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

[DSelect](DSelect.md).[containsPoint](DSelect.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[destroy](../interfaces/DTableBodyCell.md#destroy)

#### Inherited from

[DSelect](DSelect.md).[destroy](DSelect.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L306)

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

[DSelect](DSelect.md).[disableTempParent](DSelect.md#disabletempparent)

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

[DSelect](DSelect.md).[displayObjectUpdateTransform](DSelect.md#displayobjectupdatetransform)

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

[DSelect](DSelect.md).[emit](DSelect.md#emit)

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

[DSelect](DSelect.md).[enableTempParent](DSelect.md#enabletempparent)

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

[DSelect](DSelect.md).[eventNames](DSelect.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### findMenuItem

▸ **findMenuItem**(`menu`, `value`): ``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |
| `value` | ``null`` \| `VALUE` |

#### Returns

``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>

#### Inherited from

[DSelect](DSelect.md).[findMenuItem](DSelect.md#findmenuitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-select.ts#L121)

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[focus](../interfaces/DTableBodyCell.md#focus)

#### Inherited from

[DSelect](DSelect.md).[focus](DSelect.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[focusOnClosest](../interfaces/DTableBodyCell.md#focusonclosest)

#### Inherited from

[DSelect](DSelect.md).[focusOnClosest](DSelect.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

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

[DSelect](DSelect.md).[getBounds](DSelect.md#getbounds)

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

[DSelect](DSelect.md).[getChildAt](DSelect.md#getchildat)

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

[DSelect](DSelect.md).[getChildByName](DSelect.md#getchildbyname)

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

[DSelect](DSelect.md).[getChildIndex](DSelect.md#getchildindex)

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

[DSelect](DSelect.md).[getClearType](DSelect.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

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

[DSelect](DSelect.md).[getClippingRect](DSelect.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

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

[DSelect](DSelect.md).[getGlobalPosition](DSelect.md#getglobalposition)

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

[DSelect](DSelect.md).[getHeight](DSelect.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### getImage

▸ **getImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DSelect](DSelect.md).[getImage](DSelect.md#getimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L72)

___

### getLayouter

▸ **getLayouter**(): [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Returns

[`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DSelect](DSelect.md).[getLayouter](DSelect.md#getlayouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L105)

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

[DSelect](DSelect.md).[getLocalBounds](DSelect.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DSelect](DSelect.md).[getOverflowMask](DSelect.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L64)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getParentOfSize](../interfaces/DTableBodyCell.md#getparentofsize)

#### Inherited from

[DSelect](DSelect.md).[getParentOfSize](DSelect.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getText

▸ **getText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>\>

#### Inherited from

[DSelect](DSelect.md).[getText](DSelect.md#gettext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getThemeDefault](../interfaces/DTableBodyCell.md#getthemedefault)

#### Inherited from

[DSelect](DSelect.md).[getThemeDefault](DSelect.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getType](../interfaces/DTableBodyCell.md#gettype)

#### Overrides

[DSelect](DSelect.md).[getType](DSelect.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L110)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getWidth](../interfaces/DTableBodyCell.md#getwidth)

#### Inherited from

[DSelect](DSelect.md).[getWidth](DSelect.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getX](../interfaces/DTableBodyCell.md#getx)

#### Inherited from

[DSelect](DSelect.md).[getX](DSelect.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getY](../interfaces/DTableBodyCell.md#gety)

#### Inherited from

[DSelect](DSelect.md).[getY](DSelect.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasDirty](../interfaces/DTableBodyCell.md#hasdirty)

#### Inherited from

[DSelect](DSelect.md).[hasDirty](DSelect.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

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

[DSelect](DSelect.md).[hasRefitableHeight](DSelect.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1831)

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

[DSelect](DSelect.md).[hasRefitableWidth](DSelect.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hide](../interfaces/DTableBodyCell.md#hide)

#### Inherited from

[DSelect](DSelect.md).[hide](DSelect.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

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

[DSelect](DSelect.md).[init](DSelect.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L114)

___

### initOnPress

▸ **initOnPress**(): `void`

#### Returns

`void`

#### Inherited from

[DSelect](DSelect.md).[initOnPress](DSelect.md#initonpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L153)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[initReflowable](../interfaces/DTableBodyCell.md#initreflowable)

#### Inherited from

[DSelect](DSelect.md).[initReflowable](DSelect.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isDirty](../interfaces/DTableBodyCell.md#isdirty)

#### Inherited from

[DSelect](DSelect.md).[isDirty](DSelect.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

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

[DSelect](DSelect.md).[isEventTarget](DSelect.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHidden](../interfaces/DTableBodyCell.md#ishidden)

#### Inherited from

[DSelect](DSelect.md).[isHidden](DSelect.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHierarchyDirty](../interfaces/DTableBodyCell.md#ishierarchydirty)

#### Inherited from

[DSelect](DSelect.md).[isHierarchyDirty](DSelect.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

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

[DSelect](DSelect.md).[isRefitable](DSelect.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L107)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isShown](../interfaces/DTableBodyCell.md#isshown)

#### Inherited from

[DSelect](DSelect.md).[isShown](DSelect.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1516)

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

[DSelect](DSelect.md).[listenerCount](DSelect.md#listenercount)

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

[DSelect](DSelect.md).[listeners](DSelect.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newImage

▸ **newImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DSelect](DSelect.md).[newImage](DSelect.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L76)

___

### newOverflowMask

▸ **newOverflowMask**(): ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Returns

``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DSelect](DSelect.md).[newOverflowMask](DSelect.md#newoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L73)

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

[DSelect](DSelect.md).[newPadding](DSelect.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newText

▸ **newText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>\>

#### Inherited from

[DSelect](DSelect.md).[newText](DSelect.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L92)

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

[DSelect](DSelect.md).[off](DSelect.md#off)

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

[DSelect](DSelect.md).[on](DSelect.md#on)

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

[DSelect](DSelect.md).[on](DSelect.md#on)

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

[DSelect](DSelect.md).[onActivate](DSelect.md#onactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L170)

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

[DSelect](DSelect.md).[onActivateKeyDown](DSelect.md#onactivatekeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L247)

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

[DSelect](DSelect.md).[onActivateKeyUp](DSelect.md#onactivatekeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L257)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onBlur](../interfaces/DTableBodyCell.md#onblur)

#### Inherited from

[DSelect](DSelect.md).[onBlur](DSelect.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

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

[DSelect](DSelect.md).[onChildBlur](DSelect.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

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

[DSelect](DSelect.md).[onChildFocus](DSelect.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildrenChange](../interfaces/DTableBodyCell.md#onchildrenchange)

#### Inherited from

[DSelect](DSelect.md).[onChildrenChange](DSelect.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

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

[DSelect](DSelect.md).[onClick](DSelect.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L186)

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

[DSelect](DSelect.md).[onDblClick](DSelect.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L192)

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

[DSelect](DSelect.md).[onDown](DSelect.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1979](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1979)

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

[DSelect](DSelect.md).[onDownThis](DSelect.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onFocus](../interfaces/DTableBodyCell.md#onfocus)

#### Inherited from

[DSelect](DSelect.md).[onFocus](DSelect.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onHierarchyDirty](../interfaces/DTableBodyCell.md#onhierarchydirty)

#### Inherited from

[DSelect](DSelect.md).[onHierarchyDirty](DSelect.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[DSelect](DSelect.md).[onInactivate](DSelect.md#oninactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L222)

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

[DSelect](DSelect.md).[onKeyDown](DSelect.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L155)

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

[DSelect](DSelect.md).[onKeyDownArrowDown](DSelect.md#onkeydownarrowdown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L70)

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

[DSelect](DSelect.md).[onKeyUp](DSelect.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L278)

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

[DSelect](DSelect.md).[onMenuClose](DSelect.md#onmenuclose)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L92)

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

[DSelect](DSelect.md).[onMenuReplaced](DSelect.md#onmenureplaced)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-select.ts#L98)

___

### onMenuSelect

▸ **onMenuSelect**(`newValue`, `item`, `menu`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `VALUE` |
| `item` | [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\> |
| `menu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Inherited from

[DSelect](DSelect.md).[onMenuSelect](DSelect.md#onmenuselect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-select.ts#L88)

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

[DSelect](DSelect.md).[onMove](DSelect.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

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

[DSelect](DSelect.md).[onOut](DSelect.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2042](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2042)

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

[DSelect](DSelect.md).[onOver](DSelect.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2028](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2028)

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

[DSelect](DSelect.md).[onParentMove](DSelect.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1943](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1943)

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

[DSelect](DSelect.md).[onParentResize](DSelect.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onPress

▸ **onPress**(): `void`

#### Returns

`void`

#### Inherited from

[DSelect](DSelect.md).[onPress](DSelect.md#onpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:298](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L298)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onRefit](../interfaces/DTableBodyCell.md#onrefit)

#### Inherited from

[DSelect](DSelect.md).[onRefit](DSelect.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onReflow](../interfaces/DTableBodyCell.md#onreflow)

#### Inherited from

[DSelect](DSelect.md).[onReflow](DSelect.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L100)

___

### onReflowTextAndImage

▸ **onReflowTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DSelect](DSelect.md).[onReflowTextAndImage](DSelect.md#onreflowtextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L92)

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

[DSelect](DSelect.md).[onResize](DSelect.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

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

[DSelect](DSelect.md).[onScale](DSelect.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1236)

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

[DSelect](DSelect.md).[onShortcut](DSelect.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L134)

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

[DSelect](DSelect.md).[onSkew](DSelect.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

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

[DSelect](DSelect.md).[onStateChange](DSelect.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L286)

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

[DSelect](DSelect.md).[onToggleEnd](DSelect.md#ontoggleend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L239)

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

[DSelect](DSelect.md).[onToggleStart](DSelect.md#ontogglestart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L235)

___

### onUnpress

▸ **onUnpress**(): `void`

#### Returns

`void`

#### Inherited from

[DSelect](DSelect.md).[onUnpress](DSelect.md#onunpress)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:302](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L302)

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

[DSelect](DSelect.md).[onUp](DSelect.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1996](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1996)

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

[DSelect](DSelect.md).[onUpThis](DSelect.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

___

### onValueChange

▸ **onValueChange**(`newValue`, `oldValue`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | ``null`` \| `VALUE` |
| `oldValue` | ``null`` \| `VALUE` |
| `item` | ``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\> |

#### Returns

`void`

#### Overrides

[DSelect](DSelect.md).[onValueChange](DSelect.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L54)

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

[DSelect](DSelect.md).[onWheel](DSelect.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

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

[DSelect](DSelect.md).[once](DSelect.md#once)

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

[DSelect](DSelect.md).[once](DSelect.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### open

▸ **open**(): `void`

#### Returns

`void`

#### Inherited from

[DSelect](DSelect.md).[open](DSelect.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L175)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[reflow](../interfaces/DTableBodyCell.md#reflow)

#### Inherited from

[DSelect](DSelect.md).[reflow](DSelect.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

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

[DSelect](DSelect.md).[removeAllListeners](DSelect.md#removealllisteners)

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

[DSelect](DSelect.md).[removeAllListeners](DSelect.md#removealllisteners)

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

[DSelect](DSelect.md).[removeChild](DSelect.md#removechild)

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

[DSelect](DSelect.md).[removeChildAt](DSelect.md#removechildat)

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

[DSelect](DSelect.md).[removeChildren](DSelect.md#removechildren)

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

[DSelect](DSelect.md).[removeListener](DSelect.md#removelistener)

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

[DSelect](DSelect.md).[removeListener](DSelect.md#removelistener)

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

[DSelect](DSelect.md).[render](DSelect.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

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

[DSelect](DSelect.md).[renderAdvanced](DSelect.md#renderadvanced)

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

[DSelect](DSelect.md).[resize](DSelect.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

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

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L90)

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

[DSelect](DSelect.md).[setChildIndex](DSelect.md#setchildindex)

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

[DSelect](DSelect.md).[setFocused](DSelect.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

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

[DSelect](DSelect.md).[setHeight](DSelect.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1402)

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

[DSelect](DSelect.md).[setParent](DSelect.md#setparent)

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

[DSelect](DSelect.md).[setTransform](DSelect.md#settransform)

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

[DSelect](DSelect.md).[setWidth](DSelect.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

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

[DSelect](DSelect.md).[setX](DSelect.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1268)

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

[DSelect](DSelect.md).[setY](DSelect.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[show](../interfaces/DTableBodyCell.md#show)

#### Inherited from

[DSelect](DSelect.md).[show](DSelect.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[sortChildren](../interfaces/DTableBodyCell.md#sortchildren)

#### Inherited from

[DSelect](DSelect.md).[sortChildren](DSelect.md#sortchildren)

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

[DSelect](DSelect.md).[swapChildren](DSelect.md#swapchildren)

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

[DSelect](DSelect.md).[toCursor](DSelect.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toDirty](../interfaces/DTableBodyCell.md#todirty)

#### Inherited from

[DSelect](DSelect.md).[toDirty](DSelect.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1534)

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

[DSelect](DSelect.md).[toGlobal](DSelect.md#toglobal)

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

[DSelect](DSelect.md).[toHasDirty](DSelect.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toHierarchyDirty](../interfaces/DTableBodyCell.md#tohierarchydirty)

#### Inherited from

[DSelect](DSelect.md).[toHierarchyDirty](DSelect.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

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

[DSelect](DSelect.md).[toLocal](DSelect.md#tolocal)

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

[DSelect](DSelect.md).[toMenu](DSelect.md#tomenu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L105)

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

[DSelect](DSelect.md).[toMenuOptions](DSelect.md#tomenuoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L113)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHasDirty](../interfaces/DTableBodyCell.md#toparenthasdirty)

#### Inherited from

[DSelect](DSelect.md).[toParentHasDirty](DSelect.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHierarchyDirty](../interfaces/DTableBodyCell.md#toparenthierarchydirty)

#### Inherited from

[DSelect](DSelect.md).[toParentHierarchyDirty](DSelect.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentResized](../interfaces/DTableBodyCell.md#toparentresized)

#### Inherited from

[DSelect](DSelect.md).[toParentResized](DSelect.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Inherited from

[DSelect](DSelect.md).[toggle](DSelect.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L226)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[unset](../interfaces/DTableBodyCell.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-menu.ts#L105)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[updateTransform](../interfaces/DTableBodyCell.md#updatetransform)

#### Inherited from

[DSelect](DSelect.md).[updateTransform](DSelect.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2069](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2069)

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

[DSelect](DSelect.md).[mixin](DSelect.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
